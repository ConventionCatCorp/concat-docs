import React, { FunctionComponent, ReactNode, useCallback, useState } from 'react';
import MaterialIcon from './MaterialIcon';

import styles from './attribute.module.scss';
import Highlight from './Highlight';
import clsx from 'clsx';

interface Props {
  children: ReactNode;
  id: string;
  name: string;
  type: string;
  optional?: boolean;
  response?: boolean;
  deprecated?: boolean;
  permissions?: string[];
}

export function Attribute({
  children, name, id, type, response = false, optional = false, deprecated = false, permissions = [],
}: Props) {
  const hasPermissions = permissions.length > 0;

  return (
    <div id={id} className={styles.attribute}>
      <div className={styles['attribute-link']}>
        <a href={`#${id}`}>
          <MaterialIcon name="link" />
        </a>
      </div>
      <div className={styles[hasPermissions ? 'attribute-info-perms' : 'attribute-info']}>
        {hasPermissions && (
          <MaterialIcon name="lock" title="This attribute requires one or more additional permissions." />
        )}
        <code>{name}</code>
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
          {(!optional && !response) && (
            <div className={styles['attribute-required']}>
              Required
            </div>
          )}
          {(optional && response) && (
            <div className={styles['attribute-optional']}>
              nullable
            </div>
          )}
        </small>
      </div>
      <div style={{ fontSize: '12px' }}>
        {children}
        {permissions.length > 0 && (
          <div className={styles['attribute-permissions']}>
            <strong>Required Scope(s)</strong>: {permissions.join(', ')}
          </div>
        )}
      </div>
    </div>
  );
}

interface ParentProps extends Props {
  children: ReactNode[];
}

export function ParentAttribute(props: ParentProps): JSX.Element {
  const [childState, setChildState] = useState(false);
  const toggleChildren = useCallback(() => setChildState(!childState), [childState]);

  return (
    <div className={styles['attribute-parent']}>
      <Attribute {...props} children={props.children[0]} />
      <div className={clsx(styles['attribute-showhide-children'], childState && styles['attribute-children-visible'])} onClick={toggleChildren}>
        {childState ? 'Hide' : 'Show'} child attributes
      </div>
      <div className={clsx(styles['attribute-children'], childState && styles['attribute-children-visible'])}>
        {props.children[1]}
      </div>
    </div>
  )
}