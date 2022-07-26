import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode[];
  childStyle?: React.CSSProperties;
}

export default function SplitColumn({ children, childStyle }: Props) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gridGap: '1rem', justifyItems: 'center' }}>
      {children.map((child, idx) => (
        <div style={childStyle} key={idx}>{child}</div>
      ))}
    </div>
  );
}