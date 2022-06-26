import React from 'react';

interface Props {
  name: string;
  title?: string;
}

export default function MaterialIcon({ name, title }: Props) {
  return (
    <span
      className="material-symbols-outlined"
      style={{ display: 'inline-block' }}
      title={title}
    >
      {name}
    </span>
  );
}
