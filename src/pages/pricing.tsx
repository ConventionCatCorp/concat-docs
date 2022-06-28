import Layout from "@theme/Layout";
import React from "react";
import Card from "../components/Card";
import MaterialIcon from "../components/MaterialIcon";
import SplitColumn from "../components/SplitColumn";

import styles from './pricing.module.scss';

export default function Pricing(): JSX.Element {
  return (
    <Layout
      title="Pricing"
      description="Convention Cat (ConCat)">
      <main className={styles.main}>
        <SplitColumn>
          <div>
            <h1>Pricing</h1>
            <p>
              ConCat offers a feature-packed event management experience for a hard to believe price that
              scales as your event grows.
            </p>
            <p>
              We offer a fixed price per registered attendee and a small percentage for all other transactions,
              such as vendor tables and the event store.
            </p>
            <h3>No Module Costs</h3>
            <p>
              There's no per-module costs for the additional modules included with ConCat. That means you
              get vendor management, volunteer management, and our event store at no extra cost!
            </p>
            <h3>No Hidden Costs</h3>
            <p>
              You don't like hidden costs and neither do we. That's why the only prices you'll pay are
              the ones you see here. We also don't require free badges for our engineers or support staff.
            </p>
          </div>
          <Card header='Beta Plan' className={styles['price-card']}>
            <div className={styles['pricing']}>
              <div>75&cent; <small>per attendee</small></div>
              <div>1% <small>all other transactions</small></div>
            </div>
            <hr />
            <ul>
              <li className={styles['feature-on']}>
                <MaterialIcon name='check_circle' />
                <span>Cloud Hosted</span>
              </li>
              <li className={styles['feature-on']}>
                <MaterialIcon name='check_circle' />
                <span>Unlimited Attendees</span>
              </li>
              <li className={styles['feature-on']}>
                <MaterialIcon name='check_circle' />
                <span>Unlimited Products</span>
              </li>
              <li className={styles['feature-on']}>
                <MaterialIcon name='check_circle' />
                <span>Volunteer Management</span>
              </li>
              <li className={styles['feature-on']}>
                <MaterialIcon name='check_circle' />
                <span>Vendor Management</span>
              </li>
              <li className={styles['feature-on']}>
                <MaterialIcon name='check_circle' />
                <span>Basic Support</span>
              </li>
              <li className={styles['feature-on']}>
                <MaterialIcon name='check_circle' />
                <span>Free concat.app Subdomain</span>
              </li>
              <li className={styles['feature-on']}>
                <MaterialIcon name='check_circle' />
                <span>Free Custom Domain</span>
              </li>
            </ul>
            <hr />
            <div className={styles.buttons}>
              <a
                className="button button--secondary button--lg"
                target="_blank"
                href="mailto:sales@concat.systems?subject=Interested in ConCat Standard">
                Contact Sales
              </a>
            </div>
          </Card>
        </SplitColumn>
      </main>
    </Layout>
  );
}