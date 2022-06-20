import React, { ReactNode } from 'react';
import MaterialIcon from './MaterialIcon';

import styles from './attribute.module.scss';
import Highlight from './Highlight';

interface Props {
  children: ReactNode;
  id: string;
  name: string;
  type: string;
  optional?: boolean;
  deprecated?: boolean;
}

export default function Attribute({
  children, name, id, type, optional = false, deprecated = false,
}: Props) {
  return (
    <div id={id} className={styles.attribute}>
      <div className={styles['attribute-link']}>
        <a href={`#${id}`}>
          <MaterialIcon name="link" />
        </a>
      </div>
      <div>
        <strong>{name}</strong>
        <small style={{ padding: '0 0.5rem' }}>
          {type}
          {optional && <i> (optional)</i>}
          {deprecated && (
            <div className={styles['attribute-deprecated']}>
              <Highlight color="gray" title="This attribute will be removed in a future version.">
                Deprecated
              </Highlight>
            </div>
          )}
        </small>
      </div>
      <div style={{ fontSize: '13px' }}>
        {children}
      </div>
    </div>
  );
}
