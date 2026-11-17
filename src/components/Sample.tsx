import React, {
  type CSSProperties,
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import styles from './sample.module.scss';

interface Props {
  /** The example value, such as a name, number or date that differs on the reader's screen. Omit it to put
   * the marker alone right after a web address or code, which can't hold a marked value. */
  children?: ReactNode;
  /** For the second and later sample values on one line: keep the tint and underline, but no "e.g." marker. */
  noMarker?: boolean;
}

const TEXT = 'Example value';
const GAP = 8; // px between the value and the bubble
const EDGE = 8; // px the bubble keeps clear of the viewport's edges
const ARROW_INSET = 12; // px the arrow keeps clear of the bubble's corners

interface Position {
  left: number;
  top: number;
  arrow: number;
  below: boolean;
}

// The tooltip opens at once on hover, keyboard focus or tap, and closes on leave, blur or Escape. It stays
// open while the pointer moves onto the bubble. The bubble sits above the value, or below it near the top of
// the viewport, and is shifted sideways to stay inside the viewport, with its arrow still on the value.
function useTooltip() {
  const anchorRef = useRef<HTMLSpanElement>(null);
  const bubbleRef = useRef<HTMLSpanElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<Position | null>(null);

  const show = useCallback(() => {
    window.clearTimeout(closeTimer.current);
    setOpen(true);
  }, []);
  const hideSoon = useCallback(() => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), 100);
  }, []);
  const hide = useCallback(() => {
    window.clearTimeout(closeTimer.current);
    setOpen(false);
  }, []);

  const place = useCallback(() => {
    const anchor = anchorRef.current;
    const bubble = bubbleRef.current;
    if (!anchor || !bubble) {
      return;
    }

    // The first line box, so a value that wraps gets the bubble over its start.
    const rect = anchor.getClientRects()[0] ?? anchor.getBoundingClientRect();
    const { width, height } = bubble.getBoundingClientRect();
    const center = rect.left + rect.width / 2;
    const left = Math.min(Math.max(center - width / 2, EDGE), window.innerWidth - width - EDGE);
    const below = rect.top - height - GAP < EDGE;
    setPosition({
      left,
      top: below ? rect.bottom + GAP : rect.top - height - GAP,
      arrow: Math.min(Math.max(center - left, ARROW_INSET), width - ARROW_INSET),
      below,
    });
  }, []);

  // Measured before paint, so the bubble never shows in the wrong place.
  useLayoutEffect(() => {
    if (open) {
      place();
    } else {
      setPosition(null);
    }
  }, [open, place]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        hide();
      }
    };
    window.addEventListener('scroll', place, { capture: true, passive: true });
    window.addEventListener('resize', place);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('scroll', place, { capture: true });
      window.removeEventListener('resize', place);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, place, hide]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  return { anchorRef, bubbleRef, open, position, show, hideSoon, hide };
}

// Marks an example value inline: a light brand tint, a dotted underline and a small "e.g." marker, with a
// tooltip that says the value is an example. Spans only, so a sample can sit inside bold labels, quoted
// messages and table cells. Copying a value copies neither the marker nor the tooltip text: the marker and
// the bubble can't be selected, the bubble exists only while open, and the description is hidden.
export default function Sample({ children, noMarker = false }: Props) {
  const descriptionId = useId();
  const tooltip = useTooltip();

  const bubbleStyle = {
    left: tooltip.position?.left ?? 0,
    top: tooltip.position?.top ?? 0,
    visibility: tooltip.position ? 'visible' : 'hidden',
    '--sample-arrow-x': `${tooltip.position?.arrow ?? 0}px`,
  } as CSSProperties;

  // Fixed positioning takes the bubble out of the line, past any table or scroll box, without a portal.
  const bubble = tooltip.open && (
    <span
      aria-hidden="true"
      className={`${styles.tooltip} ${tooltip.position?.below ? styles.below : ''}`}
      onMouseEnter={tooltip.show}
      onMouseLeave={tooltip.hideSoon}
      ref={tooltip.bubbleRef}
      style={bubbleStyle}
    >
      {TEXT}
      <span className={styles.arrow} />
    </span>
  );

  const triggers = {
    'aria-describedby': descriptionId,
    onBlur: tooltip.hide,
    onClick: tooltip.show,
    onFocus: tooltip.show,
    onMouseEnter: tooltip.show,
    onMouseLeave: tooltip.hideSoon,
    ref: tooltip.anchorRef,
    tabIndex: 0,
  };

  const description = (
    <span hidden id={descriptionId}>
      {TEXT}
    </span>
  );

  if (children === undefined) {
    return (
      <span className={`${styles.marker} ${styles.after}`} {...triggers}>
        e.g.
        {description}
        {bubble}
      </span>
    );
  }

  // The word joiner (U+2060) at the end of the marker keeps it on the same line as the value's first character,
  // while a long value can still wrap.
  return (
    <span className={styles.sample} {...triggers}>
      {!noMarker && <span className={styles.marker}>e.g.{'⁠'}</span>}
      <span className={styles.value}>{children}</span>
      {description}
      {bubble}
    </span>
  );
}
