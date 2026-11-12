---
sidebar_position: 5
hide_table_of_contents: true
textbook: true
---

# Checklist

What to decide and check before opening registration, before the event and after it. Do the Quickstart first, from [Start here](./quickstart/start-here.md); each item links to the guide that shows how.

:::info[In this guide]
Before you open registration, before the first day of the event, and after the event.
:::

## Before you open registration

<Sidenote title="Setup first">
The Quickstart sets up the basics: [Convention setup](./quickstart/convention-setup.md), [Registration setup](./quickstart/registration-setup.md), [Store and products setup](./quickstart/store-setup.md) and [Users and access](./quickstart/users-and-access.md).
</Sidenote>

### Policies to decide

- **Your refund policy.** Put it in your **Convention Policy / Terms & Conditions** ([Convention setup](./quickstart/convention-setup.md), section 3). Attendees can ask for refunds until you tick **Disable refunds** in **Housekeeping › Registration › Settings**; staff can refund after that too. See [Refunds](./orders/refunds.md), section 7.
- **What happens to people who pay but don't attend.** Decide if they get money back, and say so in your policy.
- **When pre-registration ends**, or whether registration stays open up to the event. To close it, turn off **Open Registration** in **Housekeeping › Registration › Settings** ([Registration setup](./quickstart/registration-setup.md), section 7).
- **Pre-registration discounts and their dates.** An early-bird price is a discount with **Available From** and **Available Until** dates ([Discounts](./products/discounts.md)).

### Settings to check

- **Registration flags**, in **Housekeeping › Registration › Registration Flags**. Check the wording of each flag attendees can tick ([Registration flags](./registration/flags.md)).
  - Be sure you're happy to delete the accounts of attendees who tick the built-in `nukeme` flag (*Please delete my account after the con is over.*) after the event (section 3).
- **Swag for sponsor-level badges.** Add it as an addon on those badge products ([Addons](./products/addons.md)). One "swag bag" product is easier at the desk than several, since the Cashier UI lists each undelivered item for staff to hand over.
- **Payments.** Connect Stripe in **Housekeeping › System › Settings › Payment Gateways** ([Convention setup](./quickstart/convention-setup.md), section 4), then check your payout schedule in Stripe (**Open Stripe Connect** on the same tab). Daily automatic payouts are recommended.

## Before the first day of the event

### At the registration desk

- **Train your cashiers** on the Cashier UI ([Cashier UI](./registration/cashier/cashier.md)).
- **A default badge design.** Create one in **Housekeeping › Registration › Badge Designer** and click **Set as default**. Without it, the Cashier UI says *Cannot check-in as no badge design is configured and check-in mode is disabled.* See [Badge Designer](./registration/badge_designer.md).
- **Printers.** Check each badge printer prints from its station, via **Configure Devices** in the Cashier UI ([Badge and receipt printers](./registration/cashier/printers.md)).
- **Badge labels.** Have labels in the size your badge design and printers use.
- **ID scanners.** Check the driver's license scanner works at each station ([Scanner](./registration/cashier/scanner.md)).

### Taking payment at the event

- **Decide how you'll take money on site.** ConCat records desk payments but doesn't charge cards, so you need your own card terminal or cash box.
  - At a station with **Enable payment acceptance** on, **Cash Payment** and **Card Payment** record payment for an attendee who owes money ([Cashier UI](./registration/cashier/cashier.md), section 4).
  - For other orders, **Mark as Paid** on the order records a write-off, card, cash or voucher payment ([Orders](./orders/orders.md), section 3).

### People to check

- **Dealers have paid for registration.** On **Housekeeping › Dealers › Dashboard**, **Paid Dealers** counts approved dealers with a paid registration; **Confirmed with No Paid Registration** counts those without, and its **View** button lists them. See [Dealers](./dealers/managment.md), section 2.
- **No accounts are waiting for review.** An account flagged as a possible duplicate of a banned person can't get a badge until cleared. Look for an **Accounts Pending Review** card on **Housekeeping › Attendees › Dashboard** ([User Notes](./usernotes/usernotes.md), section 5).

## After the event

- **Outstanding refund requests.** Answer them in **Housekeeping › Attendees › Refund Requests** ([Refunds](./orders/refunds.md), section 3).
- **Refunds for people who didn't attend.** There's no bulk refund: refund each order separately ([Refunds](./orders/refunds.md), section 6), or contact ConCat support for a large number.
- **Personal data of `nukeme` attendees.** On the `nukeme` row in **Housekeeping › Registration › Registration Flags**, request that ConCat clears it. It's cleared 24 hours later, unless you cancel ([Registration flags](./registration/flags.md), section 5).
- **Next year's convention.** Create it with **Next Year** on the **Conventions** tab of **Housekeeping › System › Settings**. It copies most of this year's settings, including the Stripe connection ([Convention setup](./quickstart/convention-setup.md), section 2).
