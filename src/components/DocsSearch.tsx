import SearchBar from '@theme/SearchBar';
import React from 'react';

import styles from './docssearch.module.scss';

// The docs' search bar, pinned to the top of the docs view under the navbar on every docs page.
// It searches a local index that the build generates (@easyops-cn/docusaurus-search-local), so it works
// offline and needs no search service. The index exists only in a production build, not under `npm start`.
export default function DocsSearch() {
  return (
    <div className={styles.docsSearch} role="search">
      <SearchBar />
    </div>
  );
}
