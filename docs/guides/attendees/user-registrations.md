---
sidebar_position: 3
hide_table_of_contents: true
textbook: true
---

# Managing an attendee's registrations and orders

Register someone on their behalf, edit, transfer or delete their registration, and look through their orders. Start on the person's profile: see [Finding attendees](./user-search.md).

:::info[In this guide]
The Registration row (section 1), creating a registration (section 2), editing one (section 3), removing a payment, transferring or deleting (section 4), and the **Orders** tab (section 5).
:::

## A registration on the profile

<Sidenote title="Who can do this">
Needs `registration:update` and `product:read` (default *admin* role). Without both, the **Registration** row has no pencil button.
</Sidenote>

A person has at most one registration per convention, shown in the **Registration** row of the **Information** card on the **Name** tab.

<TableFigure title="The Registration row">

| The row shows | Means |
| --- | --- |
| **Not Registered** | No registration for this convention. |
| **Registration reserved, but not completed.** | Started registering but didn't finish. |
| **Status:** the badge product, then a green tick | Paid. The tick links to the paying order. |
| **Status:** the badge product, then a warning sign | Not paid. |

</TableFigure>

Registrations staff create start unpaid: the person pays at checkout, or staff take payment at the [Cashier UI](../registration/cashier/cashier.md).

## Create a registration for someone

1. On the **Name** tab, click the pencil button (<MaterialIcon name="edit" />) in the **Registration** row.

   <Result>The **Edit Registration** dialog opens with **Badge Name**, **Attendance Type** (your badge products), flag checkboxes, options and **Create Registration**. With no badge products, it says *No registration products available.*</Result>

2. Enter a **Badge Name** (up to 32 characters), choose the **Attendance Type**, tick any flags, fill in the options, and click **Create Registration**.

   <Result>**Saved successfully** appears. The **Registration** row shows the badge product with a warning sign (unpaid), and the person gets a *Registration Created* email.</Result>

3. If a **Force Registration** dialog opens instead, read it and click **Force Registration** to go ahead.

   <Result>The dialog closes, and the **Registration** row shows the new registration.</Result>

**Force Registration** appears when the badge product can't be sold (sold out, or outside its sale dates), and warns *This will override any product stock limits, expired products, and age restrictions.* If the person fails the product's age rules, there's no dialog: *This product is age restricted and cannot be purchased.* appears, and you need another product.

:::note[Gatekeeping products]
For a gatekept badge product, the dialog adds **Silo Options**, with a **Status** for the person's ticket: `redeemed`, `rescinded`, `waiting` or `winner` (and `deleted`). See [Gatekeeping](../registration/raffle.md).
:::

## Edit a registration

1. On the person's profile, click the pencil button (<MaterialIcon name="edit" />) in the **Registration** row.

   <Result>The **Edit Registration** dialog opens with the current details and **Update Registration**.</Result>

2. Make your changes and click **Update Registration**.

   <Result>**Saved successfully** appears and the dialog closes.</Result>

For a paid registration, the **Registration** row names the product paid for, whatever the **Attendance Type** says.

## Remove a payment, transfer or delete a registration

Extra buttons on the left of **Edit Registration** depend on whether the registration is paid.

<TableFigure title="Buttons at the foot of Edit Registration">

| Registration | Buttons | Does |
| --- | --- | --- |
| Paid | **Remove Payment** | Removes the paid status. <small>It doesn't refund any money.</small> |
| Paid | **Transfer** | Moves the paid registration to another person. |
| Not paid | **Delete** | Deletes the registration. |

</TableFigure>

### Remove a payment

1. In the **Edit Registration** dialog of a paid registration, click **Remove Payment**.

   <Result>A **Delete Registration Payment?** dialog asks you to confirm.</Result>

2. Click **Delete**.

   <Result>**Payment deleted!** appears, and the **Registration** row shows a warning sign instead of the green tick.</Result>

To give the money back too, refund the order: see [Refunds](../orders/refunds.md).

### Transfer a paid registration

<Sidenote title="The other person">
They need an unpaid registration for this convention first. Create one (section 2) if needed.
</Sidenote>

1. In the **Edit Registration** dialog of a paid registration, click **Transfer**.

   <Result>A **Transfer Registration Payment?** dialog opens with a search box.</Result>

2. Type part of the other person's name, select them, and click **Transfer**.

   <Result>**Transfer completed!** appears. The other person's registration is now paid, with the same badge product; this person's stays, unpaid.</Result>

The transfer fails if the other person has no registration (*User has not yet registered.*), already has a paid one (*Target user registration already has a grant.*), or the registration was bought with a discount that stops transfers (*This registration is locked and cannot be transferred.*).

Attendees can transfer their own registration when transfers are on: see [Transfer Registration](../registration/transfer.md).

### Delete an unpaid registration

1. In the **Edit Registration** dialog of an unpaid registration, click **Delete**.

   <Result>A **Delete Registration** dialog asks you to confirm.</Result>

2. Click **Delete**.

   <Result>**Registration deleted!** appears, and the **Registration** row shows **Not Registered**.</Result>

## The Orders tab

<Sidenote title="Who can do this">
Needs `order:view` (default *admin*, *finance* and *registration* roles). Sub-accounts have no **Orders** tab: their orders belong to the parent.
</Sidenote>

The tab lists the person's orders for this convention, plus paid orders from your other conventions, marked with that convention's short name.

1. On the person's profile, click the **Orders** tab.

   <Result>Each order is a card headed **Order #**, its number and total, with a **Paid in Full** or **Unpaid** badge, the items and **Show details**. With no orders: *There are no orders for this user.*</Result>

2. Click **Show details** on an order.

   <Result>The order's page opens at `/housekeeping/store/orders/` and the order number.</Result>

3. Go back to the **Orders** tab. If the person has no unpaid order for this convention, click **Create New Order**.

   <Result>A new, empty **Unpaid** order appears, and **Create New Order** disappears.</Result>

Order cards can also show a refund message (yellow pending, red denied, green approved with the amount) or blue payment review flags. Ticketed products add **Retrieve Ticket(s)**.

Payments, cancelling items and refunds are covered in [Orders](../orders/orders.md) and [Refunds](../orders/refunds.md).
