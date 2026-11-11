---
sidebar_position: 4
hide_table_of_contents: true
textbook: true
---

# Payment gateways

A payment gateway takes attendees' card payments online. ConCat uses Stripe Connect, with PagSeguro as an optional extra for Brazil. This guide explains how they work, how to connect them, and how payments taken by hand fit in.

:::info[In this guide]
How payments work (section 1), connecting Stripe (section 2), finishing or updating your Stripe details (section 3), PagSeguro (section 4), and payments taken by hand (section 5).
:::

## How payments work

<Sidenote title="Who can do this">
The **Payment Gateways** tab needs the **system:settings:update** permission. The default **admin** role has it.
</Sidenote>

ConCat connects your organization's own Stripe account through Stripe Connect. Attendees' card payments go to that account. One connection covers every convention in your organization.

Three things are set by ConCat, not by you:

- **Country and currency.** Your organization's country and currency are set by ConCat. A trial starts in US dollars, whatever country you signed up from. If either is wrong, ask ConCat Support to change it *before* you connect Stripe: your Stripe account is created with your organization's country, and attendees are charged in its currency.
- **Test mode.** Housekeeping has no switch for a test or sandbox mode. Once Stripe is connected, payments are real. Ask ConCat Support if you want to try payments without charging anyone.
- **Platform fees.** ConCat's own fees are shown read-only on the **Platform Info** tab (see [Convention settings](./settings.md), section 7).

Until a gateway is connected, attendees who try to pay see *This Payment Gateway is not yet configured for use by the event. Please contact customer support.*

## Connect Stripe

You need access to your organization's Stripe account, or the details to create one, before you start.

1. Go to **Housekeeping › System › Settings** and click the **Payment Gateways** tab.

   <Result>The **Payment Gateways** heading has a green **Refresh** button. Under **Stripe Connect**, the page says *You do not have Stripe Connect configured at the moment.* and shows **Connect to Stripe**. Below it is **PagSeguro Checkout**.</Result>

2. Click **Connect to Stripe**.

   <Result>A dialog titled **Enable Stripe Connect** asks *Are you sure you want to enable Stripe Connect?* It has the buttons **Yes, I want to enable Stripe Connect.** and **Cancel**.</Result>

3. Click **Yes, I want to enable Stripe Connect.**

   <Result>A dialog titled **Stripe Connect** says you're leaving ConCat, and lists **Your country code is:** and **Your currency is:**. Its first button shows **Loading...**, then **Continue to Stripe**.</Result>

4. Check the country code and currency. If either is wrong, click **Cancel** and contact ConCat Support. Otherwise click **Continue to Stripe**, and complete Stripe's sign-up with your organization's details.

   <Result>Stripe returns you to the **Payment Gateways** tab. It shows a **Status: Connected** badge, *You are connected to Stripe Connect with ID* followed by your Stripe account ID, and *This account is configured for all conventions.* The button now reads **Open Stripe Connect**.</Result>

<TableFigure title="Stripe status badges">

| Badge | Meaning |
| --- | --- |
| **Status: Connected** (green) | Stripe accepts payments for your event. |
| **Status: Disabled** (red) | *Your Stripe account is not able to accept payments.* Attendees can't pay by card yet. |
| **More information required** (red) | Stripe needs more details from an organization admin. <small>Shown until you've submitted everything Stripe asks for (section 3).</small> |

</TableFigure>

## Finish or update your Stripe details

If you left Stripe's sign-up early, or Stripe later asks for more information, you go back through the same link.

1. On the **Payment Gateways** tab, click **Open Stripe Connect**.

   <Result>The **Stripe Connect** dialog opens, showing your country code and currency, with **Continue to Stripe**.</Result>

2. Click **Continue to Stripe**, and give Stripe the details it asks for.

   <Result>Stripe returns you to the **Payment Gateways** tab.</Result>

3. Click **Refresh**.

   <Result>The badges show **Status: Connected**, and **More information required** is gone.</Result>

## PagSeguro

<Sidenote title="Masked token">
After you save, only the first and last four characters of the token are shown, so the full token can't be read back from Housekeeping.
</Sidenote>

Stripe isn't well supported in Brazil. PagSeguro can be set up alongside Stripe so attendees in Brazil can pay with it. Like Stripe, it's set for your whole organization.

1. On the **Payment Gateways** tab, under **PagSeguro Checkout** › **Add Token**, enter the **Hostname** of the PagSeguro API (such as `xxxxxxxxx.api.pagseguro.com`) and the 100-character **Token** PagSeguro gave you. Then click **Save**.

   <Result>The form is replaced by **Base**, showing the hostname, and **Token**, showing the first and last four characters with `***` between them. A **Remove Credentials** button appears.</Result>

2. *(Optional)* To disconnect PagSeguro, click **Remove Credentials**.

   <Result>The **Add Token** form appears again, with empty fields. There is no confirmation.</Result>

## Payments taken by hand

Not every payment goes through a gateway. These record a payment you've taken some other way and never charge a card:

- At the desk, a Cashier UI station with **Enable payment acceptance** turned on shows **Cash Payment** and **Card Payment** for an attendee who owes money. See [Cashier UI](../registration/cashier/cashier.md), section 4.
- On an unpaid order, **Mark as Paid** records a **Write-off**, **Card**, **Cash** or **Voucher** payment. See [Orders](../orders/orders.md), section 3.

You can use both without connecting Stripe, for example at a small event that takes cash only.
