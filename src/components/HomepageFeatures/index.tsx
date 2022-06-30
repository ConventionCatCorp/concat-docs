import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Designed for conventions',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        ConCat was designed from the ground up to be manage themed conventions, focusing
        not only on attendees, but also volunteer and dealer managment.
      </>
    ),
  },
  {
    title: 'Get the insights that you need',
    image: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        ConCat helps you keep all your information in your place. Manage vouchers, refunds,
        badge printing, cashiers from one interface.
      </>
    ),
  },
  {
    title: 'For Convention, By Conventions',
    image: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        ConCat was made by avid convention goers, working closely with all departments.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
