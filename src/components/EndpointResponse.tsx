import React from 'react';
import CodeBlock from '@theme/CodeBlock';

import styles from './endpointrequest.module.scss';

interface Props {
  children: string;
}

export default function EndpointResponse({ children }: Props) {
  return (
    <div className={styles.endpointrequest}>
      <header>
        <span>Response</span>
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