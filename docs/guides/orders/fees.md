---
sidebar_position: 3
hide_table_of_contents: true
textbook: true
---

# Fees

A fee is an amount you charge an attendee on top of what they buy, such as a replacement badge or a fine. This guide shows how to charge a fee, what the attendee sees, and how to review or delete fees.

:::info[In this guide]
How fees work (section 1), charging a fee (section 2), and reviewing or deleting fees (section 3).
:::

## How fees work

<Sidenote title="Who can do this">
**Fee Management** appears for roles with `fee:read`. Creating a fee needs `fee:create`, and deleting one `fee:delete`. The default *finance* role can read and create fees; only *admin* can also delete them.
</Sidenote>

A fee goes into the attendee's unpaid order for this convention, the same order that is their cart. If they have no unpaid order, ConCat starts one. The attendee pays the fee at checkout, together with anything else in the cart.

<TableFigure title="Fee statuses">

| Status | Meaning |
| --- | --- |
| **Not Yet Paid** | The order holding the fee hasn't been paid. The fee can be deleted. |
| **Paid** | The attendee has paid the order. The fee can no longer be deleted. |
| **Deleted / Archived** | Staff deleted the fee before it was paid. It stays in the list for your records. |

</TableFigure>

## Charge a fee

1. Go to **Housekeeping › Attendees › Fee Management**. The Housekeeping module menu is explained in [Start here](../quickstart/start-here.md), section 2.

   <Result>The **Fee Management** page opens. On the left, a searchable table lists fees with the columns **ID** (shown as **Fee #** and the number), **User**, **Amount**, **Status**, **Reason** and **Created at**, newest first. On the right is a form with **User**, **Amount** and **Reason for Fee**, and a **Create Fee** button.</Result>

2. In **User**, search for the attendee and select them. Enter the **Amount** and a **Reason for Fee**, then click **Create Fee**. **Create Fee** stays greyed out until a user and an amount are filled in.

   <Result>A **New fee has been created** message appears, and the fee is listed with the status **Not Yet Paid**.</Result>

3. As that attendee, click **Cart** in the homepage sidebar.

   <Result>The **Checkout** page lists **Fees, Charges, and Fines** with the fee's amount, and the **Order Summary** includes the same line. Paying the order pays the fee, as [Checkout and payment](./checkout.md) shows.</Result>

At checkout the attendee sees only the total of their fees, not your reason, so tell them why you've charged it.

## Review or delete fees

1. On **Fee Management**, type a name, user ID, fee number or reason in **Search...**.

   <Result>Only matching fees are listed.</Result>

2. Click a fee's row.

   <Result>The row opens to show the **Reason**. A fee that is **Not Yet Paid** also has a **Delete Fee** button.</Result>

3. *(Optional)* To remove an unpaid fee, click **Delete Fee**.

   <Result>A **Fee has been deleted** message appears. The fee stays in the list with the status **Deleted / Archived**, and it's no longer in the attendee's cart.</Result>

:::note[Fees from other conventions]
The list includes fees charged at every convention in your organization, not only this one. A paid fee can't be deleted.
:::
