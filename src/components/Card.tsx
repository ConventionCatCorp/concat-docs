import clsx from "clsx";
import React, { ReactNode } from "react";

import styles from './card.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
  header: string;
}

export default function Card({ children, className, header }: Props) {
  return (
    <div className={clsx(styles.card, className)}>
      <header>
        {header}
      </header>
      <div>
        {children}
      </div>
    </div>
  )
}