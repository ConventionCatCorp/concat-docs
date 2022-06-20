import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  color: string;
  title?: string;
}

export default function Highlight({ children, color, title }: Props) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '2px',
        color: '#fff',
        cursor: 'default',
        display: 'inline-block',
        padding: '0 0.2rem',
      }}
      title={title}
    >
      {children}
    </span>
  );
}
