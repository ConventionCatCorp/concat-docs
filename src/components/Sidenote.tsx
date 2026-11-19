import React, { type ReactNode } from 'react';

import styles from './sidenote.module.scss';

interface Props {
  /** A short lead-in shown above the note. */
  title?: string;
  children: ReactNode;
}

export default function Sidenote({ title, children }: Props) {
  return (
    <aside className={styles.sidenote}>
      {title !== undefined && <span className={styles.title}>{title}</span>}
      {children}
    </aside>
  );
}
