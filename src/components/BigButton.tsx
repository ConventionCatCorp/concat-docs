import Link from '@docusaurus/Link';
import Admonition from '@theme/Admonition';
import React from "react";

import styles from './bigbutton.module.scss';
import MaterialIcon from './MaterialIcon';

interface Props {
  children?: React.ReactNode;
  to?: string;
  href?: string;
  icon: string;
  title: string;
}

export default function BigButton({ href, to, title, children, icon }: Props) {
  if ((href && to) || (!href && !to)) {
    return (
      <Admonition type="danger" title="BigButton: Improper Use of Component">
        This component should have a link using <code>href</code> <strong>OR</strong> <code>to</code>, not both.
      </Admonition>
    )
  }

  return (
    <div className={styles['big-button']}>
      <MaterialIcon name={icon} />
      <div>
        {href ? (
          <a href={href} className={styles['big-button-link']}>
            {title}
          </a>
        ) : (
          <Link to={to} className={styles['big-button-link']}>
            {title}
          </Link>
        )}
        {children && (
          <div className={styles['big-button-subtext']}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}