import React from 'react';

interface Props {
  name: string;
}

export default function MaterialIcon({ name }: Props) {
  return (
    <span
      className="material-symbols-outlined"
      style={{ display: 'inline-block' }}
    >
      {name}
    </span>
  );
}
