import type { WrapperProps } from '@docusaurus/types';
import Content from '@theme-original/DocSidebar/Desktop/Content';
import type ContentType from '@theme/DocSidebar/Desktop/Content';
import SidebarFooterLinks from '@site/src/components/SidebarFooterLinks';
import React from 'react';

type Props = WrapperProps<typeof ContentType>;

// Pins the service links under every docs sidebar's menu. The sidebar is a flex column whose menu grows and
// scrolls, so the links stay at the bottom while the list scrolls above them.
export default function ContentWrapper(props: Props) {
  return (
    <>
      <Content {...props} />
      <SidebarFooterLinks activePath={props.path} />
    </>
  );
}
