import useBaseUrl from '@docusaurus/useBaseUrl';
import React, { type CSSProperties, type ReactNode } from 'react';

import styles from './figure.module.scss';

/**
 * A numbered marker drawn over the image. `x`, `y`, `w` and `h` are percentages of the image's
 * width and height. With `w` and `h` the marker outlines that area and puts its number on the
 * top-right corner; without them it is a single numbered badge centered on (x, y).
 */
export interface FigureMarker {
  n: number;
  x: number;
  y: number;
  w?: number;
  h?: number;
}

interface Props {
  src: string;
  alt: string;
  title: string;
  markers?: FigureMarker[];
  /** Largest width of the image, e.g. `'60%'` or `'420px'`. Defaults to its natural width. */
  width?: string;
  children?: ReactNode;
}

function markerStyle({ x, y, w, h }: FigureMarker): CSSProperties {
  const style: CSSProperties = { left: `${x}%`, top: `${y}%` };
  if (w !== undefined && h !== undefined) {
    style.width = `${w}%`;
    style.height = `${h}%`;
  }
  return style;
}

export default function Figure({ src, alt, title, markers = [], width, children }: Props) {
  const imageUrl = useBaseUrl(src);
  const frameStyle: CSSProperties = width === undefined ? {} : { maxWidth: width };

  return (
    <figure className={styles.figure}>
      <div className={styles.media}>
        <div className={styles.frame} style={frameStyle}>
          <img src={imageUrl} alt={alt} loading="lazy" />
          {markers.map((marker) => (
            <span
              key={marker.n}
              className={marker.w !== undefined && marker.h !== undefined ? styles.area : styles.point}
              style={markerStyle(marker)}
              aria-hidden="true"
            >
              <span className={styles.badge}>{marker.n}</span>
            </span>
          ))}
        </div>
      </div>
      <figcaption className={styles.caption}>
        <span className={styles.heading}>
          <span className={styles.label} />
          <span className={styles.title}>{title}</span>
        </span>
        {children}
      </figcaption>
    </figure>
  );
}
