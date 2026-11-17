import React, { type ReactNode } from 'react';

import styles from './sample.module.scss';

interface Props {
  /** The example value, such as a name, number or date that differs on the reader's screen. Omit it to put
   * the marker alone right after a web address or code, which can't hold a marked value. */
  children?: ReactNode;
  /** For the second and later sample values on one line: keep the tint and underline, but no "e.g." marker. */
  noMarker?: boolean;
}

const TITLE = 'Example value; yours will differ';

// Spans only, so a sample can sit inside bold labels, quoted messages and table cells.
// Only the value is underlined, and the marker can't be selected, so copying an example value doesn't copy it.
export default function Sample({ children, noMarker = false }: Props) {
  if (children === undefined) {
    return (
      <span className={`${styles.marker} ${styles.after}`} title={TITLE}>
        e.g.
      </span>
    );
  }

  // The word joiner (U+2060) at the end of the marker keeps it on the same line as the value's first character,
  // while a long value can still wrap.
  return (
    <span className={styles.sample} title={TITLE}>
      {!noMarker && <span className={styles.marker}>e.g.{'\u2060'}</span>}
      <span className={styles.value}>{children}</span>
    </span>
  );
}
