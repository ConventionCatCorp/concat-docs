---
sidebar_position: 9
hide_table_of_contents: true
textbook: true
---

# Dashboards and statistics

Find your registration and sales numbers, counted as they happen, on two dashboards and two statistics pages.

:::info[In this guide]
Who can see statistics, the Housekeeping dashboard, the registration dashboard, registration statistics, and event statistics.
:::

## Who can see statistics

<Sidenote title="The permission">
`registration:stats` is in the default *admin* and *registration* roles.
</Sidenote>

Everything here needs `registration:stats`. Without it, both dashboards show **No Stats Available**, and **Registration Statistics** and **Event Statistics** aren't in the menu.

## The Housekeeping dashboard

1. Go to **Housekeeping › Attendees › Dashboard**, the page Housekeeping opens on.

   <Result>The **Dashboard** page shows **Total Registrations**, **Total Paid Registrations**, the cards in Table 2.1 that apply, and a card per tier, such as **<Sample>General Admission</Sample> (Paid)**, counting its paid registrations.</Result>

2. *(If the card is shown)* On **Accounts Pending Review**, click **View**.

   <Result>An **Accounts Pending Review** dialog lists the accounts, each linked to its profile.</Result>

<TableFigure title="Cards shown only when they apply">

| Card | Shown when |
| --- | --- |
| **Badges Printed** | At least one badge has been printed. |
| **Accounts Pending Review** | An account is waiting for review, and you have `user:note:delete`. |
| **Pending Refund Requests** | A refund request is waiting, and you have `refund:create`. The title links to **Refund Requests**. |
| **Identity Verifications Left**, and a card per status, such as **Identity: verified** or **Identity: requires_input** | ConCat Support has turned on identity verification for your event. |

</TableFigure>

:::tip[Identity statuses]
The identity cards show each identity verification status as ConCat stores it: *canceled*, *processing*, *processing_test*, *requires_input* or *verified*.
:::

## The registration dashboard

1. Go to **Housekeeping › Registration › Dashboard**.

   <Result>The **Dashboard** page shows two cards: **Registration Breakdown by Tier** and **Count of Registrations per Tier**.</Result>

**Registration Breakdown by Tier** has a row per tier and a **Total** row, with the columns **Product**, **Total Registrations**, **Paid**, **Printed** and **Picked Up**.

**Count of Registrations per Tier** is a stacked bar chart of **Paid**, **Unpaid** and **Refunds** per tier.

## Registration statistics

<Sidenote title="Cashier tab">
The **Cashier** tab also needs `registration:cashier`.
</Sidenote>

1. Go to **Housekeeping › Registration › Registration Statistics**.

   <Result>The **Registration Statistics** page opens on the **General** tab, with six charts from **Registrations per day (all time)** to **Refunds by Payment Gateway**.</Result>

2. Click the **Cashier** tab.

   <Result>A **Day** list, set to **ALL**, is above the **Print Volume Over Time** chart of badges printed.</Result>

3. Choose a day in **Day**.

   <Result>**Print Volume Over Time** shows that day's prints only.</Result>

**Registrations Over Year** compares the **Current year** with the **Previous year**, counted in days before the convention.

## Event statistics

Event statistics cover everything you sell, not only registrations.

### Sales

1. Go to **Housekeeping › Attendees › Event Statistics**.

   <Result>The **Event Statistics** page opens on the **Sales** tab, with a **Month** list set to **ALL**, an **Order Item Products** card with a **Product Category** list, and the cards **Payments**, **Discounts** and **Refunds**.</Result>

2. Choose a month in **Month**, and a category in **Product Category**.

   <Result>The cards show only that month's sales, and **Order Item Products** only that category.</Result>

**Payments** also shows **ConCat Fees:** and **External Fees:** (the payment processor's) when there are any.

### Payouts

1. Click the **Payouts** tab.

   <Result>A table lists your payouts, newest first, with their **Reference**, **Status** and **Amount**.</Result>

2. Click a payout's **Reference**.

   <Result>The payout opens, broken down by category and product, with the order total, the ConCat and payment processor fees, any fees or surcharges, and the payout.</Result>

Payouts are listed only when automatic Stripe payouts to your bank account are set up.

### Options

1. Click the **Options** tab.

   <Result>The **Option**, **Product** and **Order Status** lists appear above charts of the first option's answers, including **By Paid Status**, **By Grant Status** and **By product**, and **Totals** for a **Currency** option.</Result>

2. Choose an option in **Option**, and narrow it with **Product** and **Order Status** (**All**, **Paid**, **Unpaid** or **With Grant (not refunded)**).

   <Result>The charts update to that option and those orders.</Result>

3. *(Optional)* Under **Download**, click **CSV** or **JSON**.

   <Result>The browser downloads the option's answers in that format.</Result>

**Download** needs `product:manage`. With no options, or for an option nobody has answered, the tab shows a message instead of charts.
