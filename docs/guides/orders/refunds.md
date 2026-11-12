---
sidebar_position: 2
hide_table_of_contents: true
textbook: true
---

# Refunds

Approve or reject attendees' refund requests, refund any paid order yourself, and turn requests off.

:::info[In this guide]
How refunds work, what attendees see, the request queue, approving a request, rejecting one, refunding without a request, and turning off refund requests.
:::

## How refunds work

<Sidenote title="Who can do this">
Refunds need `refund:create`, which the default *admin* and *finance* roles have. It also shows **Refund Requests** in the Attendees menu.
</Sidenote>

A refund does two separate things, both set when you approve it:

- **It takes items back.** Per product, you choose a quantity. ConCat removes what it granted, such as a badge or ticket, and can return the items to stock.
- **It returns money.** Per payment, you choose an amount. Stripe card payments are refunded through Stripe. Staff-recorded (**Cash**, **Card**, **Write-off**) and PagSeguro payments are only marked as refunded: you hand the money back yourself.

<TableFigure title="Refund statuses">

| Status | Meaning |
| --- | --- |
| **Pending** | Requested, not yet decided. <small>Attendees see **Pending approval**.</small> |
| **Approved** | Approved by staff, or refunded directly (section 6). |
| **Denied** | Rejected by staff. The attendee can ask again for the same items. |

</TableFigure>

ConCat emails the attendee at each step: *Order #… - New Refund Request* (copied to your registration address), *Refund Request Approved for Order #…* and *Refund Request Denied for Order #…*.

:::note[Chargebacks]
A Stripe payment disputed with the attendee's bank shows in the queue as a pending request, reason **Payment dispute (chargeback)**. Stripe manages it: you can't approve or reject it, the order's refund buttons are hidden, and the attendee can't request a refund on that order while the dispute is open.
:::

## What attendees see

Use an attendee account that has a paid order.

1. As an attendee, click **Transaction history** under **Event store** in the homepage sidebar.

   <Result>The **Transaction history** page lists the attendee's orders as cards.</Result>

2. On a paid order, click the **⋯** button (**Options**) at the top right of the card, then **Request refund**.

   <Result>A **Request Refund: Order #** dialog lists the items, with **Reason for Refund** and **Additional info** below.</Result>

3. Choose a **Quantity** for each item to refund, pick a **Reason for Refund**, add any **Additional info**, and click **Request refund**.

   <Result>A **The refund request has been submitted and is pending approval.** message appears, and the card shows *You have a pending refund request for this order.*</Result>

4. After staff have decided, open the **⋯** menu again and click **View Refund History**.

   <Result>A **Refund History: Order #** dialog lists each **Refund #** with its status and the amount **Refunded**.</Result>

The reasons offered are *I purchased this by accident.*, *I can no longer / don't want to attend.*, *I have changed my mind*, *Item is damaged or not as described.* and **Other**.

An approved request shows a green banner on the card: *Your refund request has been approved. You should receive a refund of* the amount*. Processing may take a few days.* A denied one shows a red banner.

What attendees can't request:

- Anything on an order where nothing was paid: **Request refund** isn't offered.
- Free addons, which go with their product.
- Items already in a pending or approved request. With nothing left: *There are no further items eligible to refund on this order.*
- An item now belonging to someone else, such as a transferred registration: *Product can not be refunded since the digital grant belongs to another user.*

## The refund request queue

1. Go to **Housekeeping › Attendees › Refund Requests**.

   <Result>The **Refund Requests** page lists this convention's refunds, newest first, with their **Reason for Request** and **Status**. With none, it says *There are currently no pending refund requests.*</Result>

2. Click a request.

   <Result>A **Refund #** dialog shows **Products**, **Request Info** and **Related Payments**, with **Profile** and, while pending, **Approve** and **Reject**.</Result>

The list includes decided refunds too; narrow it with **Search...** or the **Reason for Request** and **Status** filters. **Profile** opens the attendee's profile in a new tab.

## Approve a request

<Sidenote title="Two amounts">
**Amount to Refund** appears twice. Per product it's for your records only. Per payment, under **Related Payments**, it's the money actually returned.
</Sidenote>

1. In the request's dialog, click **Approve**.

   <Result>The approval dialog opens with the fields in Table 4.1 and the requested quantities filled in. Its title is **Refund #**, the order's number (not the request's) and **— Approve**.</Result>

2. Check the fields in Table 4.1, write a **Reason for Approval** of at least 10 characters and, if you like, a **Message to Customer**, then click **Approve Refund**.

   <Result>A **Refund request has been approved.** message appears, and the queue shows the request as **Approved**. The attendee gets the *Refund Request Approved for Order #…* email with the amount and your message.</Result>

<TableFigure title="The approval dialog">

| Field | What it does |
| --- | --- |
| **Quantity** (per product) | How many to take back. ConCat removes what they granted, such as a badge. <small>Help icon: *Revoke Digital Grants?* Greyed out for an item that grants nothing.</small> |
| **Amount to Refund** (per product) | The value of the items taken back. *Currency being returned. For accounting purposes only.* <small>Filled in when you change the quantity.</small> |
| **Return item to available stock?** | Ticked, the items go back into stock for someone else to buy. <small>Shown only when a product has limited stock.</small> |
| **Amount to Refund** (per payment) | The money to return through that payment, up to its **Available Amount**. <small>With one payment, it follows the product amounts.</small> |
| **Reason for Approval** | Required. Kept in the audit log. |
| **Message to Customer** | Optional. Added to the approval email. |

</TableFigure>

:::caution[Watch out]
- **Amount to Refund** under **Related Payments** starts at each payment's full amount, not the price of the items asked for. Check it before you click **Approve Refund**.
- A refund can't be undone. For cash, card-terminal and write-off payments, ConCat only records it (section 1).
:::

If a payment can't be refunded through its gateway, a warning stays until you close it: *Refund request was only partially refunded … due to gateway errors. Please review the Related Payments tab for information.* If every payment fails, *The refund operation failed as all gateways returned an error.* appears and nothing is refunded.

## Reject a request

1. In the request's dialog, click **Reject**.

   <Result>A dialog titled **Refund #**, the request number and **— Reject** says *Your reason for rejecting this refund request will be stored in the audit log and will not be shown to the user.*</Result>

2. Write a **Reason for Rejection** of at least 10 characters and, if you like, a **Message to Customer**, then click **Reject Refund**.

   <Result>A **Refund request has been rejected.** message appears, and the request's **Status** is **Denied**. The attendee gets the *Refund Request Denied for Order #…* email with your message, and a red banner on their order.</Result>

## Refund an order without a request

Staff can refund a paid order at any time, or decide a pending request from the order itself.

1. Go to **Housekeeping › Store Management › Orders** and open a paid order.

   <Result>The bar at the top shows **Refund Order** or, with a pending request, **Approve Refund** and **Reject Refund**, which open the dialogs from sections 4 and 5.</Result>

2. Click **Refund Order**.

   <Result>The approval dialog from section 4 opens, with every quantity and amount at 0.</Result>

3. Fill in the dialog as in section 4, step 2, then click **Approve Refund**.

   <Result>A **Refund request has been approved.** message appears. If you returned money, the status becomes **Paid, but Partially Refunded** or **Paid, but Refunded**. The refund appears in the item cards as **Refund #**, and in **Refund Requests** as **Approved** with the reason **Other**.</Result>

Once everything paid has been refunded, the refund buttons go away.

## Turn off refund requests

<Sidenote title="Who can do this">
Registration settings need `system:settings:update`, which the default *admin* role has.
</Sidenote>

Stop attendee requests, for example after your refund deadline. Staff can still refund from Housekeeping.

1. Go to **Housekeeping › Registration › Settings**.

   <Result>The **Registration Settings** page opens. Its **General** card includes **Disable refunds**.</Result>

2. Tick **Disable refunds**, type the message attendees should see, such as your refund policy, and click **Save** at the bottom of the **General** card.

   <Result>A **Registration settings saved** message appears.</Result>

3. As an attendee, open **Transaction history** and click **⋯** on a paid order.

   <Result>**Request refund** is struck through. Clicking it shows *Refunds are disabled:* and your message; no dialog opens.</Result>

To allow requests again, untick **Disable refunds** and click **Save**.

:::tip
Always type a message. Ticked and empty, refunds are still disabled, but attendees see *Refunds are disabled:* with nothing after it.
:::
