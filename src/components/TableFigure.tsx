import React, { type ReactNode } from 'react';

import styles from './tablefigure.module.scss';

interface Props {
  title: string;
  /** A Markdown table. */
  children: ReactNode;
}

export default function TableFigure({ title, children }: Props) {
  return (
    <figure className={styles.tableFigure}>
      <figcaption className={styles.caption}>
        <span className={styles.label} />
        {title}
      </figcaption>
      <div className={styles.scroll}>{children}</div>
    </figure>
  );
}
