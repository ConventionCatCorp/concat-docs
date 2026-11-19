import type { WrapperProps } from '@docusaurus/types';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import Content from '@theme-original/DocItem/Content';
import type ContentType from '@theme/DocItem/Content';
import React from 'react';

type Props = WrapperProps<typeof ContentType>;

// Wraps a doc's body in `.textbook` when its front matter has `textbook: true`, which turns on
// the textbook article styling in src/css/_textbook.scss. Other docs render unchanged.
export default function ContentWrapper(props: Props) {
  const { frontMatter } = useDoc();
  const isTextbook = 'textbook' in frontMatter && frontMatter.textbook === true;
  const content = <Content {...props} />;

  return isTextbook ? <div className="textbook">{content}</div> : content;
}
