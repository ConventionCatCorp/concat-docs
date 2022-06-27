import React from 'react';

import styles from './restelement.module.scss';

interface Props {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  path: string;
  anchor: string;
}

export default function RESTElement({ anchor, method, path }: Props) {
  return (
    <div className={styles.restelement}>
      <a href={`#${anchor}`}>
        <div className={styles[`rest-${method.toLowerCase()}`]}>{method}</div>
        <div>{path}</div>
      </a>
    </div>
  );
}