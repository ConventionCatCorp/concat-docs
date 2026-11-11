---
sidebar_position: 4
hide_table_of_contents: true
textbook: true
---

# Checkout and payment

This guide shows what your attendees see when they pay: the checkout page, the ways they can pay, what happens when payment can't go ahead, and their transaction history. Follow it with a test attendee account to check your setup.

:::info[In this guide]
The checkout page (section 1), paying by card (section 2), paying with PagSeguro (section 3), free and voucher-covered orders (section 4), what stops a payment (section 5), the payment result page (section 6), and transaction history (section 7).
:::

## The checkout page

<Sidenote title="One page, three ways in">
Attendees reach checkout from **Cart** in the sidebar, from **View cart** after adding a product, or from **Complete registration** on their dashboard. All three open the same page.
</Sidenote>

The checkout page shows the attendee's unpaid order: their badge, store products, a dealer table if they're a dealer, and any fees you've charged them.

1. As an attendee with something in their cart, click **Cart** in the homepage sidebar.

   <Result>The **Checkout** page opens. An **Important** alert says *When making payments, please do not use the refresh or back buttons on your browser.* Below it are a card headed with the number of **Items**, the **Billing Address** card, the **Order Summary**, the payment options and a **Transaction Security** card.</Result>

2. *(Optional)* In **Billing Address**, click **Use different billing details?**, then change the fields.

   <Result>The card shows **First Name**, **Last Name**, **Address Line 1**, **Address Line 2 (Optional)**, **City**, **Zip / postal code**, **Country** and **State / province**, filled in from the attendee's account, with a **Reset to account details?** button.</Result>

Table 1.1 describes the parts of the page. With nothing in the cart, the page says *Nothing in your cart... yet!*

<TableFigure title="The parts of the checkout page">

| Part | What it shows |
| --- | --- |
| Countdown | *You have* a time *remaining to checkout.* <small>Shown only when **Cart Timeout** is set; see [Orders](./orders.md), section 1. When it runs out, the page reloads.</small> |
| Items | Each item with its price, or **Free**. Items the attendee can buy more than one of have a quantity box, and most have a delete button. <small>A free addon says **Free addon from** and the product it came with. An item that still needs details is marked **Incomplete**.</small> |
| Taxes and surcharges | Under each item, a **Tax** or **Fee / Surcharge** line for each surcharge, then **Total w/ Surcharges**. <small>Surcharges are set up in [Store and products setup](../quickstart/store-setup.md), section 3.</small> |
| **Fees, Charges, and Fines** | The total of any fees you've charged the attendee. See [Fees](./fees.md). |
| **Order Summary** | A total for each product category, the fees, **Taxes & Surcharges**, any **Discount** from a voucher, and the **Order Total**. <small>After a part payment, the last line is **Remaining Balance**.</small> |
| **Have a voucher to redeem?** | A code field and **Redeem Voucher**. See the *Vouchers* guide (Products section). |

</TableFigure>

The billing **Country** matters: for an organization that uses PagSeguro, a Brazilian billing address switches the payment options to PagSeguro (section 3).

## Pay by card

<Sidenote title="Real payments">
Once Stripe is connected, payments are real. See [Convention setup](../quickstart/convention-setup.md), section 4.
</Sidenote>

Card payments go through your Stripe account. The card is headed **Pay by Credit / Debit Card with Stripe**. Above the card form, Stripe can offer wallet buttons, such as Apple Pay or Google Pay, separated from the form by **OR**.

1. In **Pay by Credit / Debit Card with Stripe**, choose a payment method, enter the details, and click **Pay** followed by the amount.

   <Result>**Processing Payment...** is shown, then a green card says *Your payment has been successful! Thank you!* The payment options go away, and the cart count in the sidebar clears. If any item cost more than zero, the attendee gets the *Order #… Payment Successful* email, which is their receipt.</Result>

If the card is declined, a red card says ***Your payment was declined** by our payment processor:* followed by Stripe's reason. After three failures it adds *If you repeatedly see this message, you may want to contact the event and your financial institution for assistance.* If the cart changed while the attendee was paying, they see *The order has changed since loading your cart. Please try again.*

Some payment methods send the attendee to their bank's page first. They come back to the payment result page (section 6).

## Pay with PagSeguro

PagSeguro is offered when your organization has saved PagSeguro credentials (see [Convention setup](../quickstart/convention-setup.md), section 4, step 6) and the attendee's billing **Country** is Brazil. It replaces the Stripe card for that attendee.

1. As an attendee, set the billing **Country** to Brazil in **Billing Address**.

   <Result>A **Pay with PagSeguro** card with a **PagSeguro Checkout** button replaces the Stripe card.</Result>

2. Click **PagSeguro Checkout**.

   <Result>The button changes to **Creating checkout...** and then **Redirecting...**, and PagSeguro's checkout opens. After paying, the attendee comes back to the payment result page (section 6). If the checkout can't be created, the button reads **Try again?**</Result>

## Free and voucher-covered orders

When there's nothing to pay, there's no card form. A free order shows a **Confirm Order** card. An order that vouchers cover in full shows a **Pay with Voucher Balance** card instead.

1. On a checkout with nothing left to pay, click **Confirm Order**.

   <Result>A green card says *Your payment has been successful! Thank you!*, and the order is paid. The *Order #… Payment Successful* email is sent only if an item in the order cost more than zero.</Result>

## What stops a payment

The checkout page can show one of the cards in Table 5.1 in place of the payment options. The attendee, or you, has to fix the cause before they can pay.

<TableFigure title="Cards that replace the payment options">

| Card | When | What the attendee does |
| --- | --- | --- |
| **Convention Registration Needed** <small>*In order to sign up as a dealer this convention, you need to complete your registration.*</small> | **Force Dealer Registration** is on, the cart has a dealer table, and the attendee has no convention registration. | Registers for the convention, then pays for the badge and table together. See [Dealer settings, policy and form](../dealers/settings.md), section 1. |
| **Order incomplete** <small>*An item in your cart does not have all the necessary data.*</small> | An item is marked **Incomplete**, such as a registration that wasn't finished. | For a registration, clicks the item's **Incomplete** marker to go back and finish registering. Otherwise, deletes the item. |
| **Credit card payment is not configured** | Your organization hasn't connected Stripe. <small>This card replaces only the card form; vouchers still work.</small> | Nothing: connect Stripe, or take payment at the desk. |

</TableFigure>

## The payment result page

Attendees land on the payment result page when they come back from their bank or from PagSeguro. Its address is `/cart/complete/` followed by the order number.

1. As an attendee with a paid order, open `/cart/complete/` followed by that order's number, for example `https://your-event.concat.app/cart/complete/123`.

   <Result>The page says **Payment success!**, *Your order is completed.* and *You can view your order history and manage your orders from the Order History page.*, with a **Go Home** button.</Result>

If the order isn't paid yet, the page says **Payment error** with *The payment is not complete, but no payment errors were found.* and *Try to refresh the page, or contact support.* with the order number. If the payment failed, it says **Payment error**, *Your payment could not be completed.*, the gateway's error, and *Go back to the checkout page to try again.* Both have a **Go back** button to the checkout page.

## Transaction history

1. As an attendee, click **Transaction history** under **Event store** in the homepage sidebar.

   <Result>The **Transaction history** page lists the attendee's orders as cards, newest first. Each card shows **Order #** and the number with the order total, **Order paid:** and the date once it's paid, the items and an **Order Summary**. With no orders, the page says *You've got no previous orders.* and *Once you pay for an order, you can view and manage it here.*</Result>

Orders from your organization's other conventions are listed too, with that convention's short name after the order number. An order with tickets ends with *You have one or more tickets for this order.* and a **Retrieve Ticket(s)** button: see the *Ticketed products* guide (Products section).

There's no receipt page: the *Payment Successful* email is the receipt, and only staff can resend it (see [Orders](./orders.md), section 4). The **⋯** menu on an order card is where attendees ask for a refund, as [Refunds](./refunds.md), section 2, shows.
