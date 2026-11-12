---
sidebar_position: 1
hide_table_of_contents: true
textbook: true
---

# Orders

An order holds everything an attendee buys in one checkout: badges, dealer tables, store products and fees. Find, change, settle and cancel orders, hand over goods and correct single items.

:::info[In this guide]
How orders work (section 1), finding an order (section 2), unpaid orders (section 3), paid orders (section 4), and correcting a single item (section 5). For refunds, see [Refunds](./refunds.md).
:::

## How orders work

<Sidenote title="One cart per attendee">
An attendee has at most one unpaid order per convention. It's their cart, and staff see the same order in Housekeeping.
</Sidenote>

An order is created when something first goes into the cart, and stays **Unpaid** until paid in full: by card, by a voucher that covers it, or by staff marking it paid (section 3). A paid order can't be changed or cancelled, only refunded.

<TableFigure title="Order badges">

| Badge | Meaning |
| --- | --- |
| **Unpaid** | Still a cart; can be changed. |
| **Paid** | Paid, and nothing refunded. |
| **Canceled** | Cancelled before it was paid. <small>The list's filter is spelled **Cancelled**.</small> |
| **Partially Refunded**, **Refunded** | Some or all of the money paid has been refunded. |
| **Requires Fulfillment** | Every item in the paid order is a physical product still to hand over. |
| **Requires Partial Fulfillment** | Some items are still to hand over. |
| **Fulfilled?** | Nothing in the paid order is left to hand over. <small>The question mark is part of the label.</small> |

</TableFigure>

### Do unpaid orders expire?

Only if you set **Cart Timeout** (marked experimental), in the **General** card of **Housekeeping › Registration › Settings**: the minutes an attendee has to check out, counted from the first item going into the cart.

When time runs out, ConCat cancels the unpaid order and returns its items to stock, once any card payment still processing has settled. Attendees see a countdown at checkout ([Checkout and payment](./checkout.md)). Products staff add (section 3) are marked **Timeout Override** and don't start the clock.

ConCat doesn't email the attendee when an order is cancelled, by staff or by timeout.

### Who can do what

Each action needs its own permission (Table 1.2).

<TableFigure title="Permissions for order actions">

| Action | Permission | Default roles |
| --- | --- | --- |
| See and open orders, resend the confirmation email | `order:view` | admin, finance, registration |
| Mark as paid, add or remove items, edit option values, remove unused stock | `registration:cashier` | admin, registration |
| Cancel an unpaid order | `order:delete` | admin |
| Mark items as fulfilled, undo a delivery | `order:fulfill` | admin |
| Refund, set an item as the active registration | `refund:create` | admin, finance |
| Add a voucher to an unpaid order | `comp:create` | admin, finance, hr |

</TableFigure>

Buttons you lack the permission for are hidden, except in the item menu (section 5), where the action fails instead.

## Find an order

1. Go to **Housekeeping › Store Management › Orders**.

   <Result>The **Orders** page lists your convention's orders, newest first, 100 to a page, below the **Filters**: **Paid**, **Unpaid**, **Cancelled**, **Previously refunded** and **Requires Fulfillment**.</Result>

2. Click the **Requires Fulfillment** filter.

   <Result>The filter is highlighted, and only orders with deliverable store products not yet handed over are listed. Click it again to clear it.</Result>

3. Click an order.

   <Result>The order's page opens. The bar at the top shows its status (**Not Paid**, **Paid**, **Paid, but Partially Refunded**, **Paid, but Refunded** or **Canceled**) and your actions; Table 2.1 lists the rest.</Result>

Orders must match every filter that's on, except that **Paid** and **Unpaid** together show both. **Requires Fulfillment** also matches unpaid orders, so add **Paid** to see only what's ready to hand over.

For one attendee's orders, open their profile ([Users and access](../quickstart/users-and-access.md), section 2) and click the **Orders** tab; **Show details** opens an order.

<TableFigure title="The order page">

| Part | What it shows |
| --- | --- |
| Item cards | **Pending payment** for an unpaid order. For a paid one: **Fulfilled** (handed over, or nothing to hand over), **Unfulfilled** and **Canceled**. <small>Refunds appear in the same cards as **Refund #** and their status.</small> |
| **Customer Info** | Name, ID, address and email. <small>The address needs PII access.</small> |
| **Payments** | **Amount**, **Status**, **Gateway**, **Reference ID** and **Date** of each payment. <small>With `refund:create`, a Stripe reference links to the payment in Stripe.</small> |
| **Vouchers** | Vouchers applied. See [Vouchers](../products/vouchers.md). |
| **PagSeguro Checkouts** | Only if your organization uses PagSeguro and the attendee started a PagSeguro checkout. |
| **Customer Profile**, **Transaction history** | Open the attendee's profile and, with `audit:read`, the order's audit history. |

</TableFigure>

## Unpaid orders

### Create an order for an attendee

An attendee with an empty cart has no unpaid order; create one first.

1. Open the attendee's profile and click the **Orders** tab.

   <Result>Their orders are listed as cards, with a **Create New Order** button if they have no unpaid order for this convention.</Result>

2. Click **Create New Order**.

   <Result>A new order card with an **Unpaid** badge appears.</Result>

3. Click **Show details** on the new order.

   <Result>The order's page opens, with an empty **Pending payment** card that has a **+** button.</Result>

### Add or remove items

Staff can force-add a product even when it's sold out, outside its sale dates or past its purchase limit; ConCat asks you to confirm when it's out of stock or outside the attendee's age range.

1. On an unpaid order, click **+** on the **Pending payment** card.

   <Result>An **Add product to Order #** dialog opens with a **Product Search** field.</Result>

2. In **Product Search**, type part of the product's name and select it, fill in any options, tick any confirmation shown in red, and click **Add**.

   <Result>The product is listed in the **Pending payment** card, with a **Timeout Override** badge if **Cart Timeout** is set.</Result>

3. *(Optional)* To change the quantity, type the new number in the item's quantity box.

   <Result>After a moment the quantity is saved and the price updates.</Result>

4. To remove an item, click its red delete button.

   <Result>The item disappears. For a badge item, a **Delete Registration** dialog first asks *Are you sure you want to delete this registration?*; click **Delete**, and a **Registration deleted!** message appears.</Result>

Badges, dealer tables, ticketed products and some others have no quantity box. A product can be in an order only once (*This product is already in the order*). Add badges as a registration from the customer's profile, not here. A dealer table type can be added only for a dealer approved in that area ([Dealers](../dealers/managment.md)).

:::caution[Watch out]
Deleting a badge item deletes the attendee's registration, not just the line in the cart.
:::

### Mark an order as paid

<Sidenote title="Records, doesn't charge">
**Mark as Paid** records a payment made outside ConCat's checkout, such as cash at the desk. It never charges the attendee's card.
</Sidenote>

1. On an unpaid order, click **Mark as Paid**, then choose **Write-off**, **Card**, **Cash** or **Voucher** (Table 3.1).

   <Result>A **Successfully marked order as paid.** message appears, the status becomes **Paid**, and the **Payments** card lists the payment. If any item cost more than zero, the attendee gets the *Order #… Payment Successful* email.</Result>

<TableFigure title="Mark as Paid choices">

| Choice | What ConCat records |
| --- | --- |
| **Write-off** | A payment of the order total with the gateway *writeoff*, for orders you're letting go unpaid. |
| **Card** | A payment with the gateway *card*, for your own card terminal. |
| **Cash** | A payment with the gateway *cash*. |
| **Voucher** | No payment. ConCat creates and applies a voucher for the order total, coded `WRITEOFF-` and the order number. |

</TableFigure>

If vouchers or earlier payments already cover the order, **Mark as Paid** has no choices: click it to close the order.

### Cancel an order

1. On an unpaid order, click **Cancel Order**.

   <Result>An **Order has been canceled!** message appears, the status shows **Canceled**, and the items move to a **Canceled** card.</Result>

:::caution[Watch out]
**Cancel Order** acts at once, with no confirmation, and can't be undone. The items go back into stock. A paid order can't be cancelled; refund it instead ([Refunds](./refunds.md)).
:::

## Paid orders

### Fulfil physical products

<Sidenote title="Deliverable">
**Deliverable** is under **Cashier** in the store product form, ticked by default. Untick it for anything nobody hands over, such as a donation. Badge products are never deliverable.
</Sidenote>

Only items whose product has **Deliverable** ticked need fulfilling, which records that staff handed them over.

1. Open a paid order with a **Requires Fulfillment** or **Requires Partial Fulfillment** badge, then click **Mark as Fulfilled**.

   <Result>A **Fulfill Order #** dialog lists the items still to hand over, each with a **Fulfilled?** checkbox.</Result>

2. Tick **Fulfilled?** for each item you've handed over, then click the **Fulfill Order #** button.

   <Result>The items move to the **Fulfilled** card. Once nothing is left, **Mark as Fulfilled** goes away and the list badge becomes **Fulfilled?**.</Result>

The dialog has no "select all" and can't fulfil part of a quantity. ConCat doesn't email the attendee. To reverse a mistake, use **Undo Delivery** (section 5).

### Resend the confirmation email

The payment confirmation email is the attendee's receipt; only staff can resend it.

1. On a paid order, click **Resend Email**.

   <Result>A **Resend Order Confirmation Email** dialog asks you to confirm.</Result>

2. Click **Resend**.

   <Result>A **The user will receive an email in their inbox shortly.** message appears, and the attendee gets the *Order #… Payment Successful* email again.</Result>

**Resend Email** shows only while the status is **Paid**, so not after a partial refund.

### Refunds

A paid order has **Refund Order**, or **Approve Refund** and **Reject Refund** while a refund request is waiting. See [Refunds](./refunds.md).

## Correct a single item

Items can have a **⋯** menu, labelled **Options**, with corrections for that item (Table 5.1). It appears only when at least one applies.

<TableFigure title="The item menu">

| Menu item | Shown for | What it does | Permission |
| --- | --- | --- | --- |
| **Set as active registration** | A badge item in a paid order that isn't currently giving the attendee their badge. | Makes this item the one that grants the badge. | `refund:create` |
| **Remove Unused Stock** | An item marked **Unused Stock**: it holds stock but grants nothing. | Gives the stock back for someone else to buy. | `registration:cashier` |
| **Edit Option Values** | An unfulfilled item with options. Not badge items. | Changes the answers to the product's options. | `registration:cashier` |
| **Undo Delivery** | A fulfilled item. | Marks it as not yet handed over. | `order:fulfill` |

</TableFigure>

<Figure
  src="/img/guides/orders/item-menu.webp"
  alt="A paid order's Fulfilled card with one item, General Admission — Registration, and its more menu open on Set as active registration."
  title="An item's menu"
  width="481px"
  markers={[
    { n: 1, x: 90.1, y: 46.5, w: 6.2, h: 11.3 },
    { n: 2, x: 51.4, y: 54.4, w: 44.9, h: 41.3 },
  ]}
>

1. The item's **⋯** button (**Options**).
2. The corrections that apply to this item: here, only **Set as active registration**.

</Figure>

1. On a paid order, open the **⋯** menu of a fulfilled item (Figure 5.1) and choose **Undo Delivery**.

   <Result>A **Saved successfully** message appears, and the item moves back to **Unfulfilled**.</Result>

2. On an item with options, open the **⋯** menu and choose **Edit Option Values**.

   <Result>An **Update Order Item Option Values** dialog opens with the current values.</Result>

3. Change the values and click **Save**.

   <Result>The item shows the new values.</Result>

4. On an item marked **Unused Stock**, open the **⋯** menu and choose **Remove Unused Stock**.

   <Result>A **Remove Unused Stock** dialog asks you to confirm.</Result>

5. Click **Remove**.

   <Result>A **Stock Removed** message appears.</Result>
