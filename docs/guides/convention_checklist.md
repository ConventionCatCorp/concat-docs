---
sidebar_position: 5
hide_table_of_contents: true
textbook: true
---

# Checklist

A list of things to decide and check before you open registration, before the event, and after it. It assumes you've worked through the Quickstart, starting with [Start here](./quickstart/start-here.md); each item links to the guide that shows how.

:::info[In this guide]
Before you open registration (section 1), before the first day of the event (section 2), and after the event (section 3).
:::

## Before you open registration

<Sidenote title="Setup first">
The Quickstart guides set up the basics: [Convention setup](./quickstart/convention-setup.md), [Registration setup](./quickstart/registration-setup.md), [Store and products setup](./quickstart/store-setup.md) and [Users and access](./quickstart/users-and-access.md).
</Sidenote>

### Policies to decide

- **Your refund policy.** Write it into your **Convention Policy / Terms & Conditions** ([Convention setup](./quickstart/convention-setup.md), section 3). Attendees can ask for refunds until you tick **Disable refunds** in **Housekeeping › Registration › Settings**; staff can still refund afterwards. See [Refunds](./orders/refunds.md), section 7.
- **What happens to people who pay but don't attend.** Decide whether they get any money back, and say so in your policy.
- **When pre-registration ends**, or whether registration stays open up to the event. Registration stays open until you turn off **Open Registration** in **Housekeeping › Registration › Settings** ([Registration setup](./quickstart/registration-setup.md), section 7).
- **Pre-registration discounts and their dates.** An early-bird price is a discount with **Available From** and **Available Until** dates. See [Discounts](./products/discounts.md).

### Settings to check

- **Registration flags**, in **Housekeeping › Registration › Registration Flags**. Check the wording of each flag attendees can tick. See [Registration flags](./registration/flags.md).
  - Make sure you're happy to delete the accounts of attendees who tick the built-in `nukeme` flag (*Please delete my account after the con is over.*) after the event (section 3).
- **Swag for sponsor-level badges.** Add swag as an addon on those badge products ([Addons](./products/addons.md)). One "swag bag" product is easier at the desk than several, because the Cashier UI lists each undelivered item for staff to hand over.
- **Payments.** Connect Stripe in **Housekeeping › System › Settings › Payment Gateways** ([Convention setup](./quickstart/convention-setup.md), section 4). Then check your payout schedule in Stripe itself (**Open Stripe Connect** on the same tab): daily automatic payouts are recommended.

## Before the first day of the event

### At the registration desk

- **Train your cashiers** on the Cashier UI. See [Cashier UI](./registration/cashier/cashier.md).
- **A default badge design.** Create one in **Housekeeping › Registration › Badge Designer** and click **Set as default**. Without it, the Cashier UI says *Cannot check-in as no badge design is configured and check-in mode is disabled.* See [Badge Designer](./registration/badge_designer.md).
- **Printers.** Check each badge printer prints from its registration station, from **Configure Devices** in the Cashier UI. See [Badge and receipt printers](./registration/cashier/printers.md).
- **Badge labels.** Check you've bought labels in the size your badge design and printers use.
- **ID scanners.** Check the driver's license scanner works at each station. See [Scanner](./registration/cashier/scanner.md).

### Taking payment at the event

- **Decide how you'll take money on site.** ConCat records payments taken at the desk, but doesn't charge cards there. You need your own card terminal or cash box.
  - At a registration station with **Enable payment acceptance** turned on, **Cash Payment** and **Card Payment** record the payment for an attendee who owes money. See [Cashier UI](./registration/cashier/cashier.md), section 4.
  - For other orders, **Mark as Paid** on the order records a write-off, card, cash or voucher payment. See [Orders](./orders/orders.md), section 3.

### People to check

- **Dealers have paid for registration.** Go to **Housekeeping › Dealers › Dashboard**. **Paid Dealers** counts approved dealers with a paid registration; **Confirmed with No Paid Registration** counts those without, and its **View** button lists them. See [Dealers](./dealers/managment.md), section 2.
- **No accounts are waiting for review.** An account flagged as a possible duplicate of a banned person can't get a badge until someone clears it. Look for the **Accounts Pending Review** card on **Housekeeping › Attendees › Dashboard**. See [User Notes](./usernotes/usernotes.md), section 5.

## After the event

- **Outstanding refund requests.** Answer them in **Housekeeping › Attendees › Refund Requests**. See [Refunds](./orders/refunds.md), section 3.
- **Refunds for people who didn't attend.** Housekeeping has no bulk refund, so each order is refunded on its own ([Refunds](./orders/refunds.md), section 6). Contact ConCat support if you need a large number refunded.
- **Personal data of `nukeme` attendees.** On the `nukeme` row in **Housekeeping › Registration › Registration Flags**, request that ConCat clears it. The data is cleared 24 hours later, unless you cancel. See [Registration flags](./registration/flags.md), section 5.
- **Next year's convention.** Create it in **Housekeeping › System › Settings**, on the **Conventions** tab, with **Next Year**. It copies most settings from this year, including the Stripe connection ([Convention setup](./quickstart/convention-setup.md), section 2).
