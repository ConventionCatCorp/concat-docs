import clsx from "clsx";
import React, { ReactNode, useCallback, useState } from "react";
import MaterialIcon from "./MaterialIcon";
import SplitColumn from "./SplitColumn";

import styles from './featurelist.module.scss';

interface Feature {
  name: string;
  icon: string;
  id: string;
  description: ReactNode;
  img?: string;
}

const features: Feature[] = [
  {
    description: `No event management platform is complete without a means to register for an event. With
      product images, scheduled pricing, and add-on support, you can customize each attendance tier to
      meet your needs!`,
    icon: "badge",
    id: "attendee-reg",
    img: "AttendeeRegistration.png",
    name: "Attendee Registration",
  },
  {
    description: `With the event store you can provide attendees the ability to purchase additional promotional items
    ahead of your event, as well as free and paid tickets to panel events with limited seating through
    QuikTicket™.`,
    icon: "shopping_basket",
    id: "event-store",
    img: "EventStore.png",
    name: "Event Store",
  },
  {
    description: `Staff and Volunteers are the backbone of any successful event, so we included both a
    staff application and assignment module to make HR a breeze for you and your attendees.`,
    icon: "groups",
    id: "volunteer-mgmt",
    img: "HR.png",
    name: "Staff and Volunteer Management",
  },
  {
    description: `Whether you have one or many vendor halls, we'll help you take vendors from
    application to approval. With customizable product categories to identify what items your
    vendors plan to sell, customizable table types and pricing, and an API to retrieve a list
    of approved vendors.`,
    icon: "storefront",
    id: "vendor-mgmt",
    img: "VendorHall.png",
    name: "Vendor Hall Management",
  },
  {
    description: `Add-Ons allow you to include items like promotional items with another product or attendance
    type, or to offer it as a paid optional addition. Vouchers and Discounts offer the flexability
    to provide either a redeemable code, one-time discount, or a multi-use discount based on role
    or time.`,
    icon: "redeem",
    id: "addons-vouchers-discounts",
    img: "VouchersDiscountsAddons.png",
    name: "Add-Ons, Vouchers, and Discounts"
  },
  {
    description: `With Express Mode you can create a fully customized layout to meet your event's
    specific needs, including multiple pages, product options, customizable CSS! No extra costs,
    all of our customization features are entirely free!`,
    icon: "bolt",
    id: "express-mode",
    img: "ExpressMode.png",
    name: "Express Mode"
  }
];

export default function FeatureList(): JSX.Element {
  const [activeFeature, setActiveFeature] = useState<string>("attendee-reg");
  const feature: Feature = features.find(({ id }) => activeFeature === id);

  return (
    <SplitColumn>
      <div className={styles['feature-container']}>
        <ul className={styles['feature-list']}>
          {features.map(({
            description, icon, id, name,
          }) => {
            const isActive = activeFeature === id;
            const classes = clsx(styles.feature, isActive ? styles['feature-selected'] : undefined);

            return (
              <li
                key={id}
                className={classes}
                onClick={() => setActiveFeature(id)}
              >
                <div className={styles['feature-details']}>
                  <MaterialIcon name={icon} />
                  <span>{name}</span>
                </div>
                {isActive && (
                  <div className={styles['feature-description']}>
                    {description}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      {feature && (
        <div className={styles['feature-image']}>
          <img src={`/img/promo/${feature.img}`} title={`${feature.name} Promo Image`} />
        </div>
      )}
    </SplitColumn>
  )
}
