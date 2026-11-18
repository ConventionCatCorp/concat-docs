import { SIDEBAR_FOOTER_LINKS } from '@site/src/data/sidebarLinks';
import DocSidebarItems from '@theme/DocSidebarItems';
import clsx from 'clsx';
import React from 'react';

import styles from './sidebarfooterlinks.module.scss';

interface Props {
  /** The current page's path, as the sidebar gets it. */
  activePath: string;
}

// The service links at the bottom of the docs sidebar (src/theme/DocSidebar/Desktop/Content) and of the mobile
// drawer's docs menu (src/theme/DocSidebar/Mobile). They're drawn as ordinary sidebar link items, so they have
// the sidebar's fonts, colors and external-link icon, and open in a new tab.
export default function SidebarFooterLinks({ activePath }: Props) {
  return (
    <nav aria-label="ConCat service links" className={clsx('menu', styles.footer)}>
      <ul className="menu__list">
        <DocSidebarItems items={SIDEBAR_FOOTER_LINKS} activePath={activePath} level={1} />
      </ul>
    </nav>
  );
}
