---
sidebar_position: 3
hide_table_of_contents: true
textbook: true
---

# Managing an attendee's registrations and orders

Staff can register someone on their behalf, change a registration's badge product, badge name, flags and options, move a paid registration to another person, and look through a person's orders. All of it starts on the person's profile, which you open as [Finding attendees](./user-search.md) explains.

:::info[In this guide]
How a registration shows on the profile (section 1), creating a registration for someone (section 2), editing one (section 3), removing a payment, transferring or deleting a registration (section 4), and the **Orders** tab (section 5).
:::

## A registration on the profile

<Sidenote title="Who can do this">
Creating and changing registrations needs `registration:update` and `product:read`, which the default *admin* role has. Without both, the **Registration** row has no pencil button.
</Sidenote>

A person has at most one registration per convention. On the **Name** tab, the **Registration** row of the **Information** card shows its state, as in Table 1.1.

<TableFigure title="The Registration row">

| The row shows | Means |
| --- | --- |
| **Not Registered** | No registration for this convention. |
| **Registration reserved, but not completed.** | The person started registering but didn't finish. |
| **Status:** the badge product, then a green tick | A paid registration. The tick links to the order that paid for it. |
| **Status:** the badge product, then a warning sign | A registration that isn't paid. |

</TableFigure>

A registration created by staff starts unpaid. The person pays for it at checkout like any other registration, or staff take the payment at the [Cashier UI](../registration/cashier/cashier.md).

## Create a registration for someone

1. On the person's profile, on the **Name** tab, click the pencil button (<MaterialIcon name="edit" />) in the **Registration** row.

   <Result>The **Edit Registration** dialog opens, with **Badge Name**, **Attendance Type** (your badge products), a checkbox for each registration flag, and the **Registration Options** and **Product Options** your form and the chosen product ask for. The buttons are **Create Registration** and **Cancel**. If you have no badge products, it says *No registration products available.*</Result>

2. Enter a **Badge Name** (up to 32 characters), choose the **Attendance Type**, tick any flags, fill in the options, and click **Create Registration**.

   <Result>A **Saved successfully** message appears and the dialog closes. The **Registration** row shows **Status:** with the badge product and a warning sign, because the registration isn't paid. The person receives an email with the subject *Registration Created* (after your **Notification Prefix**).</Result>

3. If a **Force Registration** dialog opens instead, read it and click **Force Registration** to go ahead.

   <Result>The dialog closes, and the **Registration** row shows the new registration.</Result>

The **Force Registration** dialog appears when the badge product can't be sold: it's sold out, its sale dates have passed, or the person doesn't meet its age rules. It says *The product you are trying to register for is not available. Would you like to force the registration?* and *This will override any product stock limits, expired products, and age restrictions.*

:::note[Gatekeeping products]
If the badge product is gatekept, the dialog also has **Silo Options**, with a **Status** list for the person's ticket: `redeemed`, `rescinded`, `waiting` or `winner` (and `deleted`). See [Gatekeeping](../registration/raffle.md).
:::

## Edit a registration

1. On the person's profile, click the pencil button (<MaterialIcon name="edit" />) in the **Registration** row.

   <Result>The **Edit Registration** dialog opens with the current badge name, attendance type, flags and options. The main button is **Update Registration**.</Result>

2. Make your changes and click **Update Registration**.

   <Result>A **Saved successfully** message appears and the dialog closes.</Result>

For a paid registration, the **Registration** row names the product that was paid for, whatever the **Attendance Type** says.

## Remove a payment, transfer or delete a registration

The left side of the **Edit Registration** dialog has extra buttons, which depend on whether the registration is paid. Table 4.1 lists them.

<TableFigure title="Buttons at the foot of Edit Registration">

| Registration | Buttons | Does |
| --- | --- | --- |
| Paid | **Remove Payment** | Takes the paid status away from the registration. <small>It doesn't refund any money.</small> |
| Paid | **Transfer** | Moves the paid registration to another person. |
| Not paid | **Delete** | Deletes the registration. |

</TableFigure>

### Remove a payment

1. In the **Edit Registration** dialog of a paid registration, click **Remove Payment**.

   <Result>A **Delete Registration Payment?** dialog asks *Are you sure you want to delete the payment related to this registration?*</Result>

2. Click **Delete**.

   <Result>A **Payment deleted!** message appears. The **Registration** row now shows a warning sign instead of the green tick.</Result>

To give the money back as well, refund the order: see [Refunds](../orders/refunds.md).

### Transfer a paid registration

<Sidenote title="The other person">
The person you transfer to must already have an unpaid registration for this convention. Create one for them first (section 2) if they don't.
</Sidenote>

1. In the **Edit Registration** dialog of a paid registration, click **Transfer**.

   <Result>A **Transfer Registration Payment?** dialog says *Select user to transfer this registration to:*, with a search box below it.</Result>

2. Type part of the other person's name, select them, and click **Transfer**.

   <Result>A **Transfer completed!** message appears. The other person's registration is now paid, with the same badge product; this person's registration stays, unpaid.</Result>

The transfer fails with a message if the other person has no registration (*User has not yet registered.*), already has a paid one (*Target user registration already has a grant.*), or the registration was bought with a discount that stops transfers (*This registration is locked and cannot be transferred.*).

Attendees can also transfer their own registration from their homepage when transfers are on: see [Transfer Registration](../registration/transfer.md).

### Delete an unpaid registration

1. In the **Edit Registration** dialog of an unpaid registration, click **Delete**.

   <Result>A **Delete Registration** dialog asks *Are you sure you want to delete this registration?*</Result>

2. Click **Delete**.

   <Result>A **Registration deleted!** message appears, and the **Registration** row shows **Not Registered**.</Result>

## The Orders tab

<Sidenote title="Who can do this">
The **Orders** tab needs `order:view`, which the default *admin*, *finance* and *registration* roles have. Sub-accounts have no **Orders** tab: their orders belong to the parent.
</Sidenote>

The **Orders** tab lists the person's orders for this convention, and their paid orders from your other conventions, which are marked with that convention's short name.

1. On the person's profile, click the **Orders** tab.

   <Result>Each order is a card headed **Order #** with its number and total, and a **Paid in Full** or **Unpaid** badge. Paid orders show **Order paid:** and the date. The card lists the items and an **Order Summary**, and has a **Show details** button. A person with no orders shows *There are no orders for this user.*</Result>

2. Click **Show details** on an order.

   <Result>The order's own page opens, at an address ending in `/housekeeping/store/orders/` and the order number.</Result>

3. Go back to the **Orders** tab. If the person has no unpaid order for this convention, click **Create New Order**.

   <Result>A new, empty order appears with an **Unpaid** badge, and the **Create New Order** button disappears.</Result>

An order card can also carry a message: a yellow one when a refund request is pending, a red one when a request was denied, a green one with the amount when a refund was approved, and a blue one listing review flags on the payment. Ticketed products add a **Retrieve Ticket(s)** button.

Working with an order, such as taking payments, cancelling items or refunds, is covered in [Orders](../orders/orders.md) and in [Refunds](../orders/refunds.md).
