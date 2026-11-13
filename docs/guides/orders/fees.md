---
sidebar_position: 3
hide_table_of_contents: true
textbook: true
---

# Fees

A fee is an amount you charge an attendee on top of what they buy, such as a replacement badge or a fine. Charge fees, check what the attendee sees, and review or delete them.

:::info[In this guide]
How fees work, charging a fee, and reviewing or deleting fees.
:::

## How fees work

<Sidenote title="Who can do this">
**Fee Management** needs `fee:read`; creating a fee needs `fee:create`, and deleting one `fee:delete`. The default *finance* role can read and create fees; only *admin* can also delete them.
</Sidenote>

A fee goes into the attendee's unpaid order for this convention (their cart), which ConCat starts if they have none. The attendee pays it at checkout with the rest of the cart.

<TableFigure title="Fee statuses">

| Status | Meaning |
| --- | --- |
| **Not Yet Paid** | The order holding the fee is unpaid. The fee can be deleted. |
| **Paid** | The order is paid. The fee can no longer be deleted. |
| **Deleted / Archived** | Deleted by staff before payment. Kept in the list for your records. |

</TableFigure>

## Charge a fee

1. Go to **Housekeeping › Attendees › Fee Management** (the menu is explained in [Start here](../quickstart/start-here.md), section 2).

   <Result>The **Fee Management** page opens: a searchable list of fees on the left, and a form with **User**, **Amount** and **Reason for Fee** on the right.</Result>

2. In **User**, search for and select the attendee, enter the **Amount** and a **Reason for Fee**, and click **Create Fee** (grayed out until a user and amount are filled in).

   <Result>A **New fee has been created** message appears, and the fee is listed as **Not Yet Paid**.</Result>

3. As that attendee, click **Cart** in the homepage sidebar.

   <Result>The **Checkout** page and its **Order Summary** show **Fees, Charges, and Fines** with the fee's amount. Paying the order pays the fee ([Checkout and payment](./checkout.md)).</Result>

Attendees see only the total of their fees, not your reason, so tell them why you've charged it.

## Review or delete fees

1. On **Fee Management**, type a name, user ID, fee number or reason in **Search...**.

   <Result>Only matching fees are listed.</Result>

2. Click a fee's row.

   <Result>The row opens to show the **Reason**, and **Delete Fee** if the fee is **Not Yet Paid**.</Result>

3. *(Optional)* To remove an unpaid fee, click **Delete Fee**.

   <Result>A **Fee has been deleted** message appears. The fee stays listed as **Deleted / Archived** and leaves the attendee's cart.</Result>

:::note[Fees from other conventions]
The list includes fees from every convention in your organization, not only this one.
:::
