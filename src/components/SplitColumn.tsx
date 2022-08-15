import React, { ReactNode } from 'react';

import styles from './splitcolumn.module.scss';

interface Props {
  children: ReactNode[];
  childStyle?: React.CSSProperties;
}

export default function SplitColumn({ children, childStyle }: Props) {
  return (
    <div className={styles.splitcolumn}>
      {children.map((child, idx) => (
        <div style={childStyle} key={idx}>{child}</div>
      ))}
    </div>
  );
}