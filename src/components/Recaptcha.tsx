import { useColorMode } from '@docusaurus/theme-common';
import React, { useEffect, useImperativeHandle, useRef, type Ref } from 'react';

interface Grecaptcha {
  ready(callback: () => void): void;
  render(
    container: HTMLElement,
    params: {
      sitekey: string;
      theme: 'light' | 'dark';
      callback: (token: string) => void;
      'expired-callback': () => void;
      'error-callback': () => void;
    },
  ): number;
  reset(widgetId?: number): void;
}

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

let scriptPromise: Promise<Grecaptcha> | undefined;

function loadRecaptcha(): Promise<Grecaptcha> {
  scriptPromise ??= new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
    script.async = true;
    script.onload = () => {
      const { grecaptcha } = window;
      if (grecaptcha) {
        grecaptcha.ready(() => resolve(grecaptcha));
      } else {
        reject(new Error('reCAPTCHA did not initialize'));
      }
    };
    script.onerror = () => {
      scriptPromise = undefined;
      script.remove();
      reject(new Error('Failed to load reCAPTCHA'));
    };
    document.head.appendChild(script);
  });
  return scriptPromise;
}

export interface RecaptchaHandle {
  reset(): void;
}

interface Props {
  siteKey: string;
  /** Called with a token when the challenge is solved, and with `null` when it expires or errors. */
  onChange: (token: string | null) => void;
  onLoadError?: () => void;
  ref?: Ref<RecaptchaHandle>;
}

export default function Recaptcha({ siteKey, onChange, onLoadError, ref }: Props) {
  const { colorMode } = useColorMode();
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<{ grecaptcha: Grecaptcha; id: number } | null>(null);
  const onChangeRef = useRef(onChange);
  const onLoadErrorRef = useRef(onLoadError);
  onChangeRef.current = onChange;
  onLoadErrorRef.current = onLoadError;

  useImperativeHandle(ref, () => ({
    reset() {
      const widget = widgetRef.current;
      widget?.grecaptcha.reset(widget.id);
      onChangeRef.current(null);
    },
  }));

  // A widget's theme is fixed once rendered, so render a fresh one whenever the color mode changes.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    const target = document.createElement('div');
    container.appendChild(target);

    loadRecaptcha().then(
      (grecaptcha) => {
        if (cancelled) return;
        const id = grecaptcha.render(target, {
          sitekey: siteKey,
          theme: colorMode,
          callback: (token) => onChangeRef.current(token),
          'expired-callback': () => onChangeRef.current(null),
          'error-callback': () => onChangeRef.current(null),
        });
        widgetRef.current = { grecaptcha, id };
      },
      () => {
        if (!cancelled) onLoadErrorRef.current?.();
      },
    );

    return () => {
      cancelled = true;
      widgetRef.current = null;
      target.remove();
      onChangeRef.current(null);
    };
  }, [siteKey, colorMode]);

  return <div ref={containerRef} />;
}
