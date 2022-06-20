import React, { ReactNode } from 'react';
import CodeBlock from '@theme/CodeBlock';

import styles from './endpointrequest.module.scss';

interface Props {
  children: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  path: string;
}

export default function EndpointRequest({ method, path, children }: Props) {
  return (
    <div className={styles.endpointrequest}>
      <header>
        <span className={styles[`rest-${method.toLowerCase()}`]}>{method}</span> {path}
        <span className={styles['pull-right']}>
          application/json
        </span>
      </header>
      <CodeBlock className={`language-json ${styles['theme-code-block']}`}>
        {children}
      </CodeBlock>
    </div>
  );
}