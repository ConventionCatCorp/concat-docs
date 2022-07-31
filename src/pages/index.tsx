import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.scss';
import SplitColumn from '../components/SplitColumn';
import FeatureList from '../components/FeatureList';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <SplitColumn>
          <div>
            <h1 className="hero__title">
              Manage your <span>event</span>, not a <span>spreadsheet</span>.
            </h1>
            <p>
              Simple event management for events of all sizes. Whether you're just
              starting out or already established, we're right there with you.
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/pricing">
                View Pricing
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                Learn More
              </Link>
            </div>
          </div>
          <div>
            <img className={styles.heroImg} src="/img/ConCatHero.png" title="ConCat Promo Image" />
          </div>
        </SplitColumn>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Simple event management for events of all sizes.">
      <HomepageHeader />
      <main>
        <FeatureList />
      </main>
    </Layout>
  );
}
