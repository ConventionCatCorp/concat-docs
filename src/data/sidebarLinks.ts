// Links pinned to the bottom of every docs sidebar (src/components/SidebarFooterLinks.tsx). They're external, so
// the sidebar opens them in a new tab with the external-link icon.
import type { PropSidebarItemLink } from '@docusaurus/plugin-content-docs';

export const SIDEBAR_FOOTER_LINKS: readonly PropSidebarItemLink[] = [
  { type: 'link', label: 'Server Status', href: 'https://status.concat.app' },
  { type: 'link', label: 'Change Log', href: 'https://demo.concat.app/changelog' },
];
