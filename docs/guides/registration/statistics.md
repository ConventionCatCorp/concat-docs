---
sidebar_position: 9
hide_table_of_contents: true
textbook: true
---

# Dashboards and statistics

ConCat counts your registrations and sales as they happen. This guide shows where to find the numbers: the Housekeeping dashboard, the registration dashboard, registration statistics, and event statistics for sales, payouts and options.

:::info[In this guide]
Who can see statistics (section 1), the Housekeeping dashboard (section 2), the registration dashboard (section 3), registration statistics (section 4), and event statistics (section 5).
:::

## Who can see statistics

<Sidenote title="The permission">
`registration:stats`, described as *Allows viewing registration stats*, is in the default *admin* and *registration* roles.
</Sidenote>

All the numbers in this guide need the `registration:stats` permission. Without it, both dashboards open but show **No Stats Available** and *You don't have access to view any statistics information.*, and the **Registration Statistics** and **Event Statistics** menu items aren't shown. Some cards need more permissions; they're named below.

## The Housekeeping dashboard

The Housekeeping dashboard is the first page you see in Housekeeping.

1. Go to **Housekeeping › Attendees › Dashboard** (the module menu is explained in [Start here](../quickstart/start-here.md), section 2).

   <Result>The **Dashboard** page shows the cards **Total Registrations** and **Total Paid Registrations**, then the cards in Table 2.1 when they apply, and one card per tier, named after the tier with *(Paid)*, counting its paid registrations.</Result>

2. *(If the card is shown)* On **Accounts Pending Review**, click **View**.

   <Result>An **Accounts Pending Review** dialog lists the accounts, each linked to its profile, with *Total Results:* and a **Close** button.</Result>

<TableFigure title="Cards shown only when they apply">

| Card | Shown when |
| --- | --- |
| **Badges Printed** | At least one badge has been printed. |
| **Accounts Pending Review** | At least one account is waiting for review, and you have `user:note:delete`. **View** lists them. |
| **Pending Refund Requests** | At least one refund request is waiting, and you have `refund:create`. The title links to **Refund Requests**. |
| **Identity Verifications Left**, and an **Identity:** card per status | Identity verification is turned on for your event, which ConCat Support does. |

</TableFigure>

## The registration dashboard

1. Go to **Housekeeping › Registration › Dashboard**.

   <Result>The **Dashboard** page shows two cards: **Registration Breakdown by Tier** and **Count of Registrations per Tier**.</Result>

**Registration Breakdown by Tier** is a table with one row per tier and a **Total** row. Its columns are **Product**, **Total Registrations**, **Paid**, **Printed** and **Picked Up**. If your event still uses the old child registration, child badges are added in brackets, such as *(+2)*, and the **Paid** and **Printed** headings end in **(Children)**.

**Count of Registrations per Tier** is a stacked bar chart titled **Registrations**, with **Paid**, **Unpaid** and **Refunds** for each tier.

## Registration statistics

1. Go to **Housekeeping › Registration › Registration Statistics**.

   <Result>The **Registration Statistics** page opens on the **General** tab, with the charts **Registrations per day (all time)**, **Registrations per hour (last week)**, **Registrations per 15min (last 48h)**, **Registrations Over Year**, **Payments by Payment Gateway** and **Refunds by Payment Gateway**.</Result>

2. Click the **Cashier** tab.

   <Result>A **Day** list, set to **ALL**, is above the **Print Volume Over Time** chart of badges printed.</Result>

3. Choose a day in **Day**.

   <Result>**Print Volume Over Time** shows that day's prints only.</Result>

**Registrations Over Year** compares the **Current year** with the **Previous year**, counted in days before the convention. The **Cashier** tab appears only if you also have the `registration:cashier` permission.

## Event statistics

Event statistics cover everything you sell, not only registrations. They have three tabs: **Sales**, **Payouts** and **Options**.

### Sales

1. Go to **Housekeeping › Attendees › Event Statistics**.

   <Result>The **Event Statistics** page opens on the **Sales** tab, with a **Month** list set to **ALL**, an **Order Item Products** card with a **Product Category** list, and the cards **Payments**, **Discounts** and **Refunds**.</Result>

2. Choose a month in **Month**, and a category in **Product Category**.

   <Result>The cards show only that month's sales, and **Order Item Products** only that category's products.</Result>

The **Payments** card also shows **ConCat Fees:** and **External Fees:** (the payment processor's) when there are any.

### Payouts

1. Click the **Payouts** tab.

   <Result>A table lists your payouts with the columns **Date Created**, **Description**, **Reference**, **Status** and **Amount**, newest first.</Result>

2. Click a payout's **Reference**.

   <Result>The payout opens, broken down by category and product, with the order total, the ConCat and payment processor fees, any fees or surcharges, and the payout.</Result>

Payouts are listed only when automatic payouts from Stripe to your bank account are set up. Each transfer from Stripe creates one payout, with the products bought in that period.

### Options

1. Click the **Options** tab.

   <Result>The lists **Option**, **Product** and **Order Status** are shown, with charts for the first option: a count of each answer, and the cards **By Paid Status**, **By Grant Status**, **By product** and **Totals**.</Result>

2. Choose an option in **Option**, and narrow it with **Product** and **Order Status** (**All**, **Paid**, **Unpaid** or **With Grant (not refunded)**).

   <Result>The charts update to that option and those orders.</Result>

3. *(Optional)* Under **Download**, click **CSV** or **JSON**.

   <Result>Your browser downloads the answers to the option in that format.</Result>

**Download** needs the `product:manage` permission. If no options exist, the tab says *No options found.* For an option nobody has answered yet, it says *No products have been ordered with this option.*
