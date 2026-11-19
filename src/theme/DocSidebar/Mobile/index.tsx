import { NavbarSecondaryMenuFiller, ThemeClassNames } from '@docusaurus/theme-common';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import type { Props } from '@theme/DocSidebar/Mobile';
import DocSidebarItems from '@theme/DocSidebarItems';
import SidebarFooterLinks from '@site/src/components/SidebarFooterLinks';
import clsx from 'clsx';
import React from 'react';

// Replaces theme-classic's DocSidebar/Mobile (3.10.2) to add the service links at the foot of the mobile
// drawer's docs menu. The drawer's menu component isn't exported, so it's copied here; only the links are new.
function DocSidebarMobileSecondaryMenu({ sidebar, path }: Props) {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <>
      <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, 'menu__list')}>
        <DocSidebarItems
          items={sidebar}
          activePath={path}
          onItemClick={(item) => {
            // Close the drawer on a link, or on a category that has its own page.
            if ((item.type === 'category' && item.href) || item.type === 'link') {
              mobileSidebar.toggle();
            }
          }}
          level={1}
        />
      </ul>
      <SidebarFooterLinks activePath={path} />
    </>
  );
}

function DocSidebarMobile(props: Props) {
  return <NavbarSecondaryMenuFiller component={DocSidebarMobileSecondaryMenu} props={props} />;
}

export default React.memo(DocSidebarMobile);
