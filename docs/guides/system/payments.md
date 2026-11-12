---
sidebar_position: 4
hide_table_of_contents: true
textbook: true
---

# Payment gateways

Connect Stripe, and PagSeguro for Brazil, to take attendees' card payments online, and see how payments taken by hand fit in.

:::info[In this guide]
How payments work (section 1), connecting Stripe (section 2), finishing or updating Stripe details (section 3), PagSeguro (section 4), payments taken by hand (section 5).
:::

## How payments work

<Sidenote title="Who can do this">
The **Payment Gateways** tab needs **system:settings:update**, which the default **admin** role has.
</Sidenote>

ConCat connects your organization's own Stripe account through Stripe Connect, and card payments go to it. One connection covers every convention.

Three things are set by ConCat, not by you:

- **Country and currency.** A trial starts in US dollars, wherever you signed up from. Your Stripe account is created with your organization's country, and attendees are charged in its currency, so if either is wrong, ask ConCat Support to fix it *before* you connect Stripe.
- **Test mode.** There's no test or sandbox switch: once Stripe is connected, payments are real. Ask ConCat Support to try payments without charging anyone.
- **Platform fees.** Shown read-only on the **Platform Info** tab ([Convention settings](./settings.md), section 7).

Until a gateway is connected, attendees who try to pay see *This Payment Gateway is not yet configured for use by the event. Please contact customer support.*

## Connect Stripe

You need access to your organization's Stripe account, or the details to create one.

1. Go to **Housekeeping › System › Settings** and click the **Payment Gateways** tab.

   <Result>Under **Stripe Connect**, the page says *You do not have Stripe Connect configured at the moment.* and shows **Connect to Stripe**.</Result>

2. Click **Connect to Stripe**.

   <Result>An **Enable Stripe Connect** dialog asks *Are you sure you want to enable Stripe Connect?*</Result>

3. Click **Yes, I want to enable Stripe Connect.**

   <Result>A **Stripe Connect** dialog shows **Your country code is:** and **Your currency is:**, and its button changes from **Loading...** to **Continue to Stripe**.</Result>

4. Check the country code and currency. If either is wrong, click **Cancel** and contact ConCat Support; otherwise click **Continue to Stripe** and complete Stripe's sign-up with your organization's details.

   <Result>Back on the **Payment Gateways** tab, a **Status: Connected** badge shows with your Stripe account ID, and the button reads **Open Stripe Connect**.</Result>

<TableFigure title="Stripe status badges">

| Badge | Meaning |
| --- | --- |
| **Status: Connected** (green) | Stripe accepts payments for your event. |
| **Status: Disabled** (red) | *Your Stripe account is not able to accept payments.* Attendees can't pay by card yet. |
| **More information required** (red) | Stripe needs more details from an organization admin. <small>Shown until you've submitted everything Stripe asks for (section 3).</small> |

</TableFigure>

## Finish or update your Stripe details

If you left Stripe's sign-up early, or Stripe later asks for more information, go back through the same link.

1. On the **Payment Gateways** tab, click **Open Stripe Connect**.

   <Result>The **Stripe Connect** dialog opens with **Continue to Stripe**.</Result>

2. Click **Continue to Stripe** and give Stripe the details it asks for.

   <Result>Stripe returns you to the **Payment Gateways** tab.</Result>

3. Click the green **Refresh** button by the **Payment Gateways** heading.

   <Result>The badges show **Status: Connected**, and **More information required** is gone.</Result>

## PagSeguro

<Sidenote title="Masked token">
After you save, the full token can't be read back from Housekeeping.
</Sidenote>

Stripe isn't well supported in Brazil, so PagSeguro can run alongside it for attendees there. Like Stripe, it's set for your whole organization.

1. Under **PagSeguro Checkout** › **Add Token**, enter the PagSeguro API **Hostname** (such as `xxxxxxxxx.api.pagseguro.com`) and your 100-character **Token**, then click **Save**.

   <Result>**Base** shows the hostname and **Token** its first and last four characters, with a **Remove Credentials** button.</Result>

2. *(Optional)* To disconnect PagSeguro, click **Remove Credentials**.

   <Result>The empty **Add Token** form appears again. There's no confirmation.</Result>

## Payments taken by hand

These record a payment taken some other way, and never charge a card:

- At the desk, a Cashier UI station with **Enable payment acceptance** on shows **Cash Payment** and **Card Payment** for an attendee who owes money ([Cashier UI](../registration/cashier/cashier.md), section 4).
- On an unpaid order, **Mark as Paid** records a **Write-off**, **Card**, **Cash** or **Voucher** payment ([Orders](../orders/orders.md), section 3).

Both work without Stripe, for example at a small cash-only event.
