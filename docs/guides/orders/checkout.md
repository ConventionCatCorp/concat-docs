---
sidebar_position: 4
hide_table_of_contents: true
textbook: true
---

# Checkout and payment

Check, with a test attendee account, what attendees see when they pay, what can block a payment, and their transaction history.

:::info[In this guide]
The checkout page, paying by card, paying with PagSeguro, free and voucher-covered orders, what stops a payment, the payment result page, and transaction history.
:::

## The checkout page

<Sidenote title="One page, three ways in">
**Cart** in the sidebar, **View cart** after adding a product, and **Complete registration** on the dashboard all open the same page.
</Sidenote>

Checkout shows the attendee's unpaid order, including any fees you've charged them.

1. As an attendee with something in their cart, click **Cart** in the homepage sidebar.

   <Result>The **Checkout** page opens with the alert *When making payments, please do not use the refresh or back buttons on your browser.*, then the items, **Billing Address**, **Order Summary** and the payment options.</Result>

2. *(Optional)* In **Billing Address**, click **Use different billing details?** and change the fields.

   <Result>The address fields appear, filled in from the attendee's account, with **Reset to account details?**.</Result>

An empty cart shows *Nothing in your cart... yet!*

<TableFigure title="The parts of the checkout page">

| Part | What it shows |
| --- | --- |
| Countdown | *You have 14 minute(s) remaining to checkout.* <small>Only when **Cart Timeout** is set ([Orders](./orders.md), section 1). At zero, the page reloads.</small> |
| Items | Each item with its price, or **Free**. Items the attendee can buy several of have a quantity box; most have a delete button. <small>A free addon names its product, such as **Free addon from General Admission**. An item still needing details is marked **Incomplete**.</small> |
| Taxes and surcharges | Under each item, a **Tax** or **Fee / Surcharge** line per surcharge, then **Total w/ Surcharges**. |
| **Fees, Charges, and Fines** | The total of fees charged to the attendee. |
| **Order Summary** | A total per product category, the fees, **Taxes & Surcharges**, any voucher **Discount**, and the **Order Total**. <small>After a part payment, the last line is **Remaining Balance**.</small> |
| **Have a voucher to redeem?** | A code field and **Redeem Voucher**. |

</TableFigure>

:::tip[The values are examples]
The time in the countdown, the product in **Free addon from General Admission**, the order numbers 13 and 9, the amount in **Pay $50.00** and the short name Star25 in **Order #9 (Star25)** are examples. The app shows the time left, the addon's own product, and each order's own number, total and convention. Email subjects start with your **Notification Prefix**, here its default, *ConCat*.
:::

For an organization that uses PagSeguro, a Brazilian billing **Country** switches the payment options to PagSeguro.

## Pay by card

<Sidenote title="Real payments">
Once Stripe is connected, payments are real.
</Sidenote>

Card payments go through your Stripe account. Stripe can also offer wallet buttons, such as Apple Pay or Google Pay, above the card form.

1. In **Pay by Credit / Debit Card with Stripe**, choose a payment method, enter the details, and click **Pay $50.00**.

   <Result>**Processing Payment...** shows, then a green card says *Your payment has been successful! Thank you!* If any item cost more than zero, the attendee gets the *ConCat - Order #13 Payment Successful* email, their receipt.</Result>

A declined card shows ***Your payment was declined** by our payment processor:* and Stripe's reason; after three failures it adds *If you repeatedly see this message, you may want to contact the event and your financial institution for assistance.* If the cart changed during payment, the attendee sees *The order has changed since loading your cart. Please try again.*

Some payment methods send the attendee to their bank first, then to the payment result page.

## Pay with PagSeguro

PagSeguro replaces the Stripe card when your organization has saved PagSeguro credentials ([Payment gateways](../system/payments.md), section 4) and the billing **Country** is Brazil.

1. As an attendee, set the billing **Country** to Brazil in **Billing Address**.

   <Result>A **Pay with PagSeguro** card with a **PagSeguro Checkout** button replaces the Stripe card.</Result>

2. Click **PagSeguro Checkout**.

   <Result>The button shows **Creating checkout...**, then **Redirecting...**, and PagSeguro's checkout opens. If the checkout can't be created, the button reads **Try again?**</Result>

After paying, the attendee returns to the payment result page.

## Free and voucher-covered orders

With nothing to pay, there's no card form: a free order shows a **Confirm Order** card, and an order that vouchers cover in full shows **Pay with Voucher Balance**.

1. On a checkout with nothing left to pay, click **Confirm Order**.

   <Result>A green card says *Your payment has been successful! Thank you!*, and the order is paid. The *ConCat - Order #13 Payment Successful* email is sent only if an item cost more than zero.</Result>

## What stops a payment

Until the cause is fixed, checkout shows one of the cards in Table 5.1 instead of the payment options.

<TableFigure title="Cards that replace the payment options">

| Card | When | What the attendee does |
| --- | --- | --- |
| **Convention Registration Needed** | **Force Dealer Registration** is on, the cart has a dealer table, and the attendee has no convention registration. | Registers, then pays for badge and table together. |
| **Order incomplete** | An item is marked **Incomplete**, such as an unfinished registration. | For a registration, clicks **Incomplete** to finish registering. Otherwise, deletes the item. |
| **Credit card payment is not configured** | Your organization hasn't connected Stripe. <small>Replaces only the card form; vouchers still work.</small> | Nothing: connect Stripe, or take payment at the desk. |

</TableFigure>

## The payment result page

Attendees land here when they come back from their bank or from PagSeguro.

1. As an attendee with a paid order, open `/cart/complete/` followed by its number, such as `https://your-event.concat.app/cart/complete/13`.

   <Result>The page says **Payment success!**, with a **Go Home** button.</Result>

An unpaid order shows **Payment error** with *The payment is not complete, but no payment errors were found.* A failed payment shows **Payment error**, *Your payment could not be completed.* and the gateway's error. Both have a **Go back** button to checkout.

## Transaction history

1. As an attendee, click **Transaction history** under **Event store** in the homepage sidebar.

   <Result>The **Transaction history** page lists the attendee's orders as cards, newest first, each with its number, such as **Order #13**, the total, the items and an **Order Summary**.</Result>

Orders from your organization's other conventions are listed too, with that convention's short name after the order number, such as **Order #9 (Star25)**. An order with tickets has a **Retrieve Ticket(s)** button.

There's no receipt page: the *ConCat - Order #13 Payment Successful* email is the receipt, and only staff can resend it. Attendees ask for refunds from the **⋯** menu on an order card.
