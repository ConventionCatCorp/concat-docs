---
sidebar_position: 1
hide_table_of_contents: true
textbook: true
---

# Orders

An order holds everything an attendee buys in one checkout: badges, dealer tables, store products and fees. This guide shows staff how to find orders, change and settle unpaid ones, cancel them, hand over physical goods and correct single items.

:::info[In this guide]
How orders work (section 1), finding an order (section 2), unpaid orders (section 3), paid orders (section 4), and correcting a single item (section 5). Refunds have their own guide, [Refunds](./refunds.md).
:::

## How orders work

<Sidenote title="One cart per attendee">
An attendee has at most one unpaid order per convention. That order is their cart: whatever they add goes into it, and staff see the same order in Housekeeping.
</Sidenote>

ConCat creates an order the first time something goes into an attendee's cart. The order stays **Unpaid** until it's paid in full, by card, by a voucher that covers it, or by a staff member marking it paid (section 3). Once paid, it can't be changed or cancelled, only refunded.

Table 1.1 lists the badges an order can show in the order list.

<TableFigure title="Order badges">

| Badge | Meaning |
| --- | --- |
| **Unpaid** | The order is still a cart and can be changed. |
| **Paid** | The order is paid and nothing has been refunded. |
| **Canceled** | The order was cancelled before it was paid. <small>The list's filter for these is spelled **Cancelled**.</small> |
| **Partially Refunded**, **Refunded** | Some or all of the money paid has been refunded. |
| **Requires Fulfillment** | Every item in the paid order is a physical product still waiting to be handed over. |
| **Requires Partial Fulfillment** | Some of the items are still waiting to be handed over. |
| **Fulfilled?** | Nothing in the paid order is waiting to be handed over. <small>The question mark is part of the label.</small> |

</TableFigure>

### Do unpaid orders expire?

Not unless you set **Cart Timeout**, in **Housekeeping › Registration › Settings**, in the **General** card. It's marked as experimental. It holds "the amount of time, in minutes, an individual has to check out".

With a timeout set, the clock starts when the first item goes into the cart. If the order is still unpaid when the time runs out, ConCat cancels it and returns its items to stock. If a card payment is still processing at that moment, ConCat waits for the payment to settle first. Attendees see the countdown on the checkout page, as [Checkout and payment](./checkout.md) shows. Products that staff add to an order (section 3) are marked **Timeout Override** and don't start the clock.

ConCat doesn't email the attendee when an order is cancelled, whether by staff or by the timeout.

### Who can do what

Each action needs its own permission. Table 1.2 lists them, with the default roles that have each one.

<TableFigure title="Permissions for order actions">

| Action | Permission | Default roles |
| --- | --- | --- |
| See the order list and open orders, resend the confirmation email | `order:view` | admin, finance, registration |
| Mark as paid, add or remove items, edit option values, remove unused stock | `registration:cashier` | admin, registration |
| Cancel an unpaid order | `order:delete` | admin |
| Mark items as fulfilled, undo a delivery | `order:fulfill` | admin |
| Refund, set an item as the active registration | `refund:create` | admin, finance |
| Add a voucher to an unpaid order | `comp:create` | admin, finance, hr |

</TableFigure>

Buttons you lack the permission for are hidden, except in the item menu (section 5), where the action fails instead.

## Find an order

1. Go to **Housekeeping › Store Management › Orders**.

   <Result>The **Orders** page lists your convention's orders, newest first, 100 to a page. Each row reads **Order #** and its number, then the number of **Item(s)**, with its badges. Above the list are the **Filters**: **Paid**, **Unpaid**, **Cancelled**, **Previously refunded** and **Requires Fulfillment**. The list's header shows the number of **Result(s)**.</Result>

2. Click the **Requires Fulfillment** filter.

   <Result>The filter is highlighted, and the list shows only orders that contain deliverable store products not yet handed over. Click the filter again to clear it.</Result>

3. Click an order.

   <Result>The order's page opens, headed **Orders › Order #** and its number. A bar at the top shows its status (**Not Paid**, **Paid**, **Paid, but Partially Refunded**, **Paid, but Refunded** or **Canceled**) and the actions you can take. Below are the items, **Customer Info**, **Payments** (once there is a payment) and **Vouchers**.</Result>

With several filters on, an order must match all of them. The exception is **Paid** and **Unpaid**, which together show both. **Requires Fulfillment** also matches unpaid orders, so turn on **Paid** with it to see only what's ready to hand over.

To see one attendee's orders, open their profile, as in [Users and access](../quickstart/users-and-access.md), section 2, and click the **Orders** tab. Each order is shown as a card with a **Show details** button, which opens the order's page.

<TableFigure title="The order page">

| Part | What it shows |
| --- | --- |
| Item cards | **Pending payment** for an unpaid order. For a paid one: **Fulfilled** (items handed over, and items with nothing to hand over), **Unfulfilled** and **Canceled**. <small>Refunds are listed in the same cards, as **Refund #** and their status.</small> |
| **Customer Info** | The attendee's name, ID, address and email. <small>The address needs PII access.</small> |
| **Payments** | **Amount**, **Status**, **Gateway**, **Reference ID** and **Date** for each payment. <small>With `refund:create`, a Stripe reference links to the payment in Stripe.</small> |
| **Vouchers** | Vouchers applied to the order. See the *Vouchers* guide. |
| **PagSeguro Checkouts** | Shown only if your organization uses PagSeguro and the attendee started a PagSeguro checkout. |
| **Customer Profile**, **Transaction history** | Buttons that open the attendee's profile and, with `audit:read`, the order's audit history. |

</TableFigure>

## Unpaid orders

### Create an order for an attendee

An attendee who has nothing in their cart has no unpaid order. To add something for them, create one first.

1. Open the attendee's profile and click the **Orders** tab.

   <Result>Their orders are listed as cards. If they have no unpaid order for this convention, a **Create New Order** button is shown. With no orders at all, the tab says *There are no orders for this user.*</Result>

2. Click **Create New Order**.

   <Result>A new order card appears with an **Unpaid** badge, and the **Create New Order** button goes away.</Result>

3. Click **Show details** on the new order.

   <Result>The order's page opens, with an empty **Pending payment** card that has a **+** button.</Result>

### Add or remove items

Staff can force-add a product even when it's sold out, outside its sale dates or past its purchase limit. ConCat asks you to confirm when the product is out of stock or outside the attendee's age range.

1. On an unpaid order, click the **+** button on the **Pending payment** card.

   <Result>A dialog titled **Add product to Order #** and the order number opens. It says *Select a product to be force-added into this cart.* and has a **Product Search** field.</Result>

2. In **Product Search**, type part of the product's name and select it. Fill in any options it shows, and tick any confirmation shown in red. Then click **Add**.

   <Result>The dialog closes and the product is listed in the **Pending payment** card. If **Cart Timeout** is set, the item has a **Timeout Override** badge.</Result>

3. *(Optional)* To change how many of a product the order has, type the new number in the item's quantity box.

   <Result>After a moment the quantity is saved, and the item's price changes to match.</Result>

4. To remove an item, click its red delete button.

   <Result>The item disappears from the order. For a badge item, a **Delete Registration** dialog asks *Are you sure you want to delete this registration?* first. Click **Delete**, and a **Registration deleted!** message appears.</Result>

Badges, dealer tables, ticketed products and some others have no quantity box. Each product can be in an order only once; adding it again gives *This product is already in the order*. Badge products can't be added here: the dialog says to add the registration from the customer's profile instead. A dealer table type can be added only for a dealer whose application in that area is approved; see [Dealers](../dealers/managment.md).

:::caution[Watch out]
Deleting a badge item from an order deletes the attendee's registration, not just the line in the cart.
:::

### Mark an order as paid

<Sidenote title="Records, doesn't charge">
**Mark as Paid** records a payment that was made outside ConCat's checkout. It never charges the attendee's card.
</Sidenote>

Use **Mark as Paid** when the attendee has paid you some other way, such as cash at the desk. Table 3.1 explains the four choices.

1. On an unpaid order, click **Mark as Paid**, then choose **Write-off**, **Card**, **Cash** or **Voucher**.

   <Result>A **Successfully marked order as paid.** message appears. The status changes to **Paid**, the items move into the **Fulfilled** and **Unfulfilled** cards, and the **Payments** card lists the payment. If any item cost more than zero, the attendee gets the *Order #… Payment Successful* email.</Result>

<TableFigure title="Mark as Paid choices">

| Choice | What ConCat records |
| --- | --- |
| **Write-off** | A payment of the order total with the gateway *writeoff*, for orders you're letting go unpaid. |
| **Card** | A payment with the gateway *card*, for a card terminal you run yourself. |
| **Cash** | A payment with the gateway *cash*. |
| **Voucher** | No payment. ConCat creates a voucher with the code `WRITEOFF-` and the order number, for the order total, and applies it. |

</TableFigure>

When vouchers or earlier payments already cover the order, **Mark as Paid** is a single button with no choices. Click it to close the order.

### Cancel an order

1. On an unpaid order, click **Cancel Order**.

   <Result>An **Order has been canceled!** message appears. The status shows **Canceled**, the items are listed in a **Canceled** card, and **Customer Profile** is the only action left.</Result>

:::caution[Watch out]
**Cancel Order** acts at once, with no confirmation, and can't be undone. The order's items go back into stock. A paid order can't be cancelled; refund it instead, as [Refunds](./refunds.md) explains.
:::

## Paid orders

### Fulfil physical products

<Sidenote title="Deliverable">
On a store product, **Deliverable** is under **Cashier** in the product form. It's ticked by default on new store products, so untick it for anything nobody hands over, such as a donation. Badge products are never deliverable.
</Sidenote>

An item needs fulfilling only if its product has **Deliverable** ticked. Fulfilling it records that staff have handed it to the attendee.

1. Open a paid order with a **Requires Fulfillment** or **Requires Partial Fulfillment** badge, then click **Mark as Fulfilled**.

   <Result>A dialog titled **Fulfill Order #** and the order number opens. It says *The selected items will be marked as fulfilled in full and provided to the attendee when submitted.* and lists the items still to hand over, under **Product name** and **Fulfilled?**.</Result>

2. Tick **Fulfilled?** for each item you've handed over, then click the **Fulfill Order #** button.

   <Result>The dialog closes and the items move to the **Fulfilled** card. Once nothing is left to hand over, the **Mark as Fulfilled** button goes away, and the order's badge in the list becomes **Fulfilled?**.</Result>

The dialog has no "select all", and it can't fulfil part of an item's quantity. ConCat doesn't email the attendee when items are fulfilled. To reverse a mistake, use **Undo Delivery** (section 5).

### Resend the confirmation email

The payment confirmation email is the attendee's receipt. Attendees can't resend it themselves.

1. On a paid order, click **Resend Email**.

   <Result>A **Resend Order Confirmation Email** dialog asks *Are you sure you want to reissue an order confirmation email?*</Result>

2. Click **Resend**.

   <Result>A **The user will receive an email in their inbox shortly.** message appears, and the attendee gets the *Order #… Payment Successful* email again.</Result>

**Resend Email** is shown only while the order's status is **Paid**, so it's not offered once part of the order has been refunded.

### Refunds

A paid order has a **Refund Order** button, or **Approve Refund** and **Reject Refund** while the attendee has a refund request waiting. Both are explained in [Refunds](./refunds.md).

## Correct a single item

Items on the order page can have a **⋯** menu, labelled **Options**, with corrections for that one item. Table 5.1 lists them. The menu appears only when at least one applies.

<TableFigure title="The item menu">

| Menu item | Shown for | What it does | Permission |
| --- | --- | --- | --- |
| **Set as active registration** | A badge item in a paid order that isn't currently giving the attendee their badge. | Makes this item the one that grants the attendee's badge. | `refund:create` |
| **Remove Unused Stock** | An item holding stock that grants nothing, marked **Unused Stock**. | Gives the stock back, so someone else can buy it. | `registration:cashier` |
| **Edit Option Values** | An item with options that hasn't been fulfilled. Not for badge items. | Changes the answers given for the product's options. | `registration:cashier` |
| **Undo Delivery** | A fulfilled item. | Marks the item as not yet handed over. | `order:fulfill` |

</TableFigure>

1. On a paid order, open the **⋯** menu of a fulfilled item and choose **Undo Delivery**.

   <Result>A **Saved successfully** message appears, and the item moves back to the **Unfulfilled** card.</Result>

2. On an item with options, open the **⋯** menu and choose **Edit Option Values**.

   <Result>An **Update Order Item Option Values** dialog opens, showing the item's options with their current values.</Result>

3. Change the values and click **Save**.

   <Result>The dialog closes, and the item shows the new values.</Result>

4. On an item marked **Unused Stock**, open the **⋯** menu and choose **Remove Unused Stock**.

   <Result>A **Remove Unused Stock** dialog says *This will give the stock back to inventory, allowing another user to purchase this product.*</Result>

5. Click **Remove**.

   <Result>A **Stock Removed** message appears.</Result>
