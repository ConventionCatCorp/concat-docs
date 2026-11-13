import React, { type ReactNode } from 'react';

import styles from './result.module.scss';

interface Props {
  /** What the reader should see once the step has worked. */
  children: ReactNode;
}

// Spans only, so a result can sit inside a list item's paragraph without breaking HTML nesting.
export default function Result({ children }: Props) {
  return (
    <span className={styles.result}>
      <span className={styles.label}>Result</span>
      <span>{children}</span>
    </span>
  );
}
