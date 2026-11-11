---
sidebar_position: 2
hide_table_of_contents: true
textbook: true
---

# Refunds

Attendees can ask for a refund of a paid order from their transaction history, and staff can refund any paid order. This guide covers what a refund does, what attendees see, how to approve or reject their requests, how to refund an order yourself, and how to stop attendees asking.

:::info[In this guide]
How refunds work (section 1), what attendees see (section 2), the refund request queue (section 3), approving a request (section 4), rejecting one (section 5), refunding an order without a request (section 6), and turning off refund requests (section 7).
:::

## How refunds work

<Sidenote title="Who can do this">
Refunds need the `refund:create` permission, which the default *admin* and *finance* roles have. It also shows **Refund Requests** in the Attendees menu.
</Sidenote>

A refund does two separate things, and you set each one when you approve it:

- **It takes items back.** For each product you choose a quantity. ConCat removes what that quantity granted, such as the attendee's badge or ticket, and can put the items back into stock.
- **It returns money.** For each payment on the order you choose an amount. Card payments made through Stripe are refunded through Stripe. Payments recorded by staff (**Cash**, **Card**, **Write-off**) and PagSeguro payments are only recorded as refunded: you hand the money back yourself.

Every refund has a status, shown in Table 1.1.

<TableFigure title="Refund statuses">

| Status | Meaning |
| --- | --- |
| **Pending** | The attendee has asked, and nobody has decided yet. <small>Attendees see it as **Pending approval**.</small> |
| **Approved** | Staff approved it, or refunded the order directly (section 6). |
| **Denied** | Staff rejected it. The attendee can ask again for the same items. |

</TableFigure>

ConCat emails the attendee at each step: *Order #… - New Refund Request* when they ask (with a copy to your registration address), *Refund Request Approved for Order #…* and *Refund Request Denied for Order #…*.

:::note[Chargebacks]
When an attendee disputes a Stripe payment with their bank, the dispute appears in the queue as a pending request with the reason **Payment dispute (chargeback)**. Stripe manages it: you can't approve or reject it in ConCat, the order's refund buttons are hidden, and the attendee can't request a refund on that order while the dispute is open.
:::

## What attendees see

Attendees ask for a refund from their **Transaction history**. To see it as they do, sign in with an attendee account that has a paid order.

1. As an attendee, click **Transaction history** in the homepage sidebar, under **Event store**.

   <Result>The **Transaction history** page lists the attendee's orders as cards, newest first.</Result>

2. On a paid order, click the **⋯** button (**Options**) at the top right of the card, then **Request refund**.

   <Result>A dialog titled **Request Refund: Order #** and the order number opens. It says *The refund request will be submitted to the event and subject to approval according to the event's refund policies.* and lists the items under **Product name**, **Unit price** and **Quantity**, with **Reason for Refund** and **Additional info** below.</Result>

3. Choose a **Quantity** for each item to refund, pick a **Reason for Refund**, add any **Additional info**, then click **Request refund**.

   <Result>A **The refund request has been submitted and is pending approval.** message appears. The order card shows a yellow banner: *You have a pending refund request for this order.* The attendee gets the *Order #… - New Refund Request* email.</Result>

4. After staff have decided, open the **⋯** menu again and click **View Refund History**.

   <Result>A **Refund History: Order #** dialog lists each **Refund #** with **Pending approval**, **Denied** or **Approved** and the amount **Refunded**, followed by its items.</Result>

The reasons offered are *I purchased this by accident.*, *I can no longer / don't want to attend.*, *I have changed my mind*, *Item is damaged or not as described.* and **Other**.

Once a request is approved, the order card shows a green banner: *Your refund request has been approved. You should receive a refund of* the amount*. Processing may take a few days.* Once it's denied, the card shows a red banner saying the request has been denied by the event.

Some limits apply to what attendees can ask for:

- **Request refund** appears only on paid orders where something was actually paid.
- Free addons aren't listed; they go with the product they came with.
- Items already in a pending or approved request can't be requested again. When nothing is left, the dialog says *There are no further items eligible to refund on this order.*
- An item that now belongs to someone else, such as a transferred registration, can't be refunded: *Product can not be refunded since the digital grant belongs to another user.*

## The refund request queue

1. Go to **Housekeeping › Attendees › Refund Requests**.

   <Result>The **Refund Requests** page lists every refund for this convention, newest first, with the columns **ID** (shown as **Refund #** and its number), **Order ID**, **User ID**, **Reason for Request**, **Status** and **Requested At**. With no refunds at all, it says *There are currently no pending refund requests.*</Result>

2. Click a request.

   <Result>A dialog titled **Refund #** and its number opens, with three parts: **Products**, **Request Info** (**Order**, **Status**, **Reason for Request**, **Additional info**, **Requested By**, **Requested At** and, once decided, **Resolved At**) and **Related Payments**. Its buttons are **Profile** and, for a pending request, **Approve** and **Reject**.</Result>

Despite the empty-list text, the queue shows decided refunds too. Use the **Search...** box, or the filters on **Reason for Request** and **Status**, to narrow it down. **Profile** opens the attendee's profile in a new tab.

## Approve a request

<Sidenote title="Two amounts">
**Amount to Refund** appears twice. Per product it's for your records only. Per payment, under **Related Payments**, it's the money actually returned.
</Sidenote>

1. In the request's dialog, click **Approve**.

   <Result>The approval dialog opens. Its title reads **Refund #**, a number and **— Approve**; the number is the order's, not the request's. It shows **Products to be Refunded**, **Return item to available stock?** (only when a product has limited stock), **Related Payments**, **Reason for Approval** and **Message to Customer**. The quantities the attendee asked for are filled in.</Result>

2. Check the fields in Table 4.1. Write a **Reason for Approval** of at least 10 characters and, if you like, a **Message to Customer**. Then click **Approve Refund**.

   <Result>A **Refund request has been approved.** message appears, and the request's **Status** in the queue is **Approved**. The attendee gets the *Refund Request Approved for Order #…* email with the amount refunded and your message.</Result>

<TableFigure title="The approval dialog">

| Field | What it does |
| --- | --- |
| **Quantity** (per product) | How many of the item to take back. ConCat removes what they granted, such as a badge. <small>Hover the help icon: *Revoke Digital Grants?* It's greyed out for an item that grants nothing.</small> |
| **Amount to Refund** (per product) | The value of the items you're taking back. *Currency being returned. For accounting purposes only.* <small>Changing the quantity fills it in.</small> |
| **Return item to available stock?** | Ticked, the items go back into stock for someone else to buy. |
| **Amount to Refund** (per payment) | The money to return through that payment, up to its **Available Amount**. <small>With only one payment, it follows the product amounts as you change them.</small> |
| **Reason for Approval** | Required. Kept in the audit log. |
| **Message to Customer** | Optional. Added to the approval email. |

</TableFigure>

:::caution[Watch out]
- When you approve a request, **Amount to Refund** under **Related Payments** starts at the full amount of each payment, not at the price of the items asked for. Check it before you click **Approve Refund**.
- A refund can't be undone. Stripe refunds go back to the card; for cash, card-terminal and write-off payments, ConCat only records the refund.
:::

If a payment can't be refunded through its gateway, a warning stays on screen until you close it: *Refund request was only partially refunded … due to gateway errors. Please review the Related Payments tab for information.* If every payment fails, *The refund operation failed as all gateways returned an error.* appears and nothing is refunded.

## Reject a request

1. In the request's dialog, click **Reject**.

   <Result>A dialog titled **Refund #**, the request number and **— Reject** opens. It says *Your reason for rejecting this refund request will be stored in the audit log and will not be shown to the user.* and has **Reason for Rejection** and **Message to Customer**.</Result>

2. Write a **Reason for Rejection** of at least 10 characters and, if you like, a **Message to Customer**. Then click **Reject Refund**.

   <Result>A **Refund request has been rejected.** message appears, and the request's **Status** is **Denied**. The attendee gets the *Refund Request Denied for Order #…* email with your message, and their order card shows a red banner.</Result>

## Refund an order without a request

Staff can refund a paid order at any time, whether or not the attendee asked. You can also decide a pending request from the order itself.

1. Go to **Housekeeping › Store Management › Orders** and open a paid order.

   <Result>The bar at the top of the order shows **Refund Order**. If the attendee has a pending request, it shows **Approve Refund** and **Reject Refund** instead, which open the dialogs from sections 4 and 5.</Result>

2. Click **Refund Order**.

   <Result>The approval dialog from section 4 opens, with every quantity and amount at 0.</Result>

3. Fill in the dialog as in section 4, step 2, then click **Approve Refund**.

   <Result>A **Refund request has been approved.** message appears. The order's status becomes **Paid, but Partially Refunded** or **Paid, but Refunded** if you returned money, and the refund is listed in the item cards as **Refund #** with its status. It also appears in **Refund Requests**, as **Approved** with the reason **Other**.</Result>

Once everything paid has been refunded, the order's refund buttons go away.

## Turn off refund requests

<Sidenote title="Who can do this">
Registration settings need the `system:settings:update` permission, which the default *admin* role has.
</Sidenote>

You can stop attendees asking for refunds, for example after your refund deadline. Staff can still refund orders from Housekeeping.

1. Go to **Housekeeping › Registration › Settings**.

   <Result>The **Registration Settings** page opens. Its first card, **General**, includes **Disable refunds**, described as *Users will be displayed this error message when attempting to refund*.</Result>

2. Tick **Disable refunds** and type the message attendees should see, such as your refund policy. Then click **Save** at the bottom of the **General** card.

   <Result>A **Registration settings saved** message appears.</Result>

3. As an attendee, open **Transaction history** and click **⋯** on a paid order.

   <Result>**Request refund** is struck through. Clicking it shows *Refunds are disabled:* followed by your message, and no dialog opens.</Result>

To allow requests again, untick **Disable refunds** and click **Save**.

:::tip
Always type a message. With the box ticked and empty, refunds are still disabled, but attendees see *Refunds are disabled:* with nothing after it.
:::
