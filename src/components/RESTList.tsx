import React, { ReactNode } from 'react';

import styles from './restlist.module.scss';

interface Props {
  children: ReactNode;
}

export default function RESTList({ children }: Props) {
  return (
    <div className={styles.restlist}>
      <header>Endpoints</header>
      <div>
        {children}
      </div>
    </div>
  )
}