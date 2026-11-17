import type { WrapperProps } from '@docusaurus/types';
import Main from '@theme-original/DocRoot/Layout/Main';
import type MainType from '@theme/DocRoot/Layout/Main';
import DocsSearch from '@site/src/components/DocsSearch';
import React from 'react';

type Props = WrapperProps<typeof MainType>;

// Puts the docs search bar at the top of the docs view, above every guide and API page.
export default function MainWrapper({ children, ...props }: Props) {
  return (
    <Main {...props}>
      <DocsSearch />
      {children}
    </Main>
  );
}
