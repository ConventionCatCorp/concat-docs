import React, { ReactNode } from 'react';
import CodeBlock from '@theme/CodeBlock';

import styles from './endpointrequest.module.scss';

interface Props {
  children: string;
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  header: string;
  headerSubText?: string;
  codeBlockType?: string;
}

export default function EndpointRequest(
  { header, headerSubText, method, children, codeBlockType = 'language-json' }: Props,
) {
  return (
    <div className={styles.endpointrequest}>
      <header>
        {method && (
          <>
            <span className={styles[`rest-${method.toLowerCase()}`]}>{method}</span>{' '}
          </>
        )}
        {header}
        {headerSubText && (
          <span className={styles['pull-right']}>
            {headerSubText}
          </span>
        )}
      </header>
      <CodeBlock className={`${codeBlockType} ${styles['theme-code-block']}`}>
        {children}
      </CodeBlock>
    </div>
  );
}