---
sidebar_position: 2
hide_table_of_contents: true
textbook: true
---

# How attendees register

Register, pay and change a registration as an attendee would, to check your setup before you open registration.

:::info[In this guide]
Before attendees can register, starting a registration, choosing a tier, the registration form, the result, paying, changing or upgrading, and closed registration.
:::

## Before attendees can register

<Sidenote title="Test with a second account">
Use an ordinary attendee account in a private window: your staff account may see staff-only tiers.
</Sidenote>

An attendee can register when:

- They're signed in to an account.
- **Open Registration** is ticked in **Housekeeping › Registration › Settings** ([Registration settings](./settings.md), section 2).
- At least one [badge product](./attendance/attendance.md) is **Public**, on sale (between its **Available From** and **Available Until**), and allowed for their age and roles.

## Start a registration

1. As an attendee, open **Attendance** in the homepage sidebar.

   <Result>A *Ready to attend* card offers **Start registration** and **Update personal info**. Under **Your registration**, the attendee's card shows **Not registered**.</Result>

2. Click **Start registration**.

   <Result>The **Event registration** page opens on the **Registration Type** step, followed by **Additional Information** and **Review**. The address ends in `/event/register/new`.</Result>

With sub-accounts allowed, the heading reads **Your registrations**, with an **Attendees** box ([Sub-accounts, children and minors](./sub-accounts.md), section 4).

## Choose a tier

<Sidenote title="Ages">
Ages count on the convention's start date, not the day the attendee registers.
</Sidenote>

Each tier the attendee may buy is a card with a **Select** button. A tier is hidden if it isn't **Public**, if the attendee is outside its **Minimum Purchase Age** and **Maximum Purchase Age**, or if its role or grant restrictions exclude them.

1. On **Registration Type**, click **Select** on a tier.

   <Result>The **Additional Information** step opens, with the tier in a bar at the top and a **Change** button.</Result>

2. *(Optional)* Click **Change**.

   <Result>**Registration Type** opens again; the chosen tier shows **Continue** instead of **Select**.</Result>

When attendees select a tier for themselves, one of its stock is held in their cart, so it can't sell out while they fill in the form.

<TableFigure title="Messages on the Registration Type step">

| Message or button | Why |
| --- | --- |
| **Sold Out!** (in place of **Select**) | The tier's **Limit Available Stock** is reached. |
| **Closed Raffle** (in place of **Select**) | A silo gates the tier and no longer takes entries. See [Gatekeeping](./raffle.md). |
| *Sorry, that item went out of stock while you were making a selection. Try a different tier.* | The last one sold while the attendee was choosing. |
| *No products available for this age range. Please contact the event organizers for more information.* | No tier allows the attendee's age, roles or grants. |
| *You are currently assigned a special attendance type which cannot be changed. Please contact the registration team for more information.* | Staff gave the attendee a tier that isn't **Public**; only that tier is shown. |

</TableFigure>

## Fill in the registration form

**Additional Information** shows your form from the [Registration form editor](./form-editor.md), typically a **Badge Name**, the tier's options, registration flags and an emergency contact.

1. Fill in the form. *(Optional)* Click **Randomize**, if your form has it, for a random badge name.

   <Result>Each form section is a card. Sections with nothing to show, such as **Other options** for a tier with none, are hidden.</Result>

2. Click **Register** at the bottom of the form.

   <Result>The **Review** step opens with the result (section 5). If something is missing, a message names it, such as *Emergency Contact Info is required.*</Result>

An emergency contact is required when the form's **Emergency contacts** element is set as required, and always for minors, PII-free children and, if your volunteer settings ask for it, volunteers.

## The result

<TableFigure title="Results of submitting the registration form">

| Title | When | Buttons |
| --- | --- | --- |
| **Product added to cart!** | The registration needs paying for. | **View cart**, **Go to dashboard** |
| **Order completed!** | Nothing was due, so the order completed at once. | **View transaction history** |
| **Registration Saved!** | A paid registration was changed, keeping its tier. | **View cart**, **Go to dashboard** |
| Your silo's entry title, *Entered into Raffle Draw!* by default | The tier is gated: the attendee enters the silo and nothing goes in the cart. See [Gatekeeping](./raffle.md). | **View cart**, **Go to dashboard** |

</TableFigure>

Public paid addons for the tier are offered in a **Product addons** card below the result.

1. On the result, click **Go to dashboard**.

   <Result>**Attendance** opens. The status card says **Complete your registration** (or *You're registered for* your convention, if nothing was due); the attendee's card shows the tier, **Unpaid** or **Registered**, and the badge name.</Result>

## Pay

1. On **Attendance**, click **Complete registration**.

   <Result>The checkout page opens with an **Order Summary**.</Result>

2. Pay for the order.

   <Result>The status card says *You're registered for* your convention's short name, and the attendee's card shows **Registered**.</Result>

With **Cart Timeout** set ([Registration settings](./settings.md)), an unpaid registration is held only that long, and the status card counts down the time left. Checkout and vouchers: [Checkout and payment](../orders/checkout.md).

## Change or upgrade a registration

<Sidenote title="Locked options">
Once a registration is paid, options that change the price are locked, as are options marked **Prevent changes to this option after purchase is complete.** that already have a value.
</Sidenote>

For a paid registration, **Change** lists only the paid tier (with **Continue**) and its [upgrade paths](./attendance/attendance.md) (with **Select**).

1. On **Attendance**, click **Modify** on the attendee's card, or click their name.

   <Result>**Additional Information** opens with the form filled in and the tier in the bar at the top.</Result>

2. Change what's needed and click **Update Registration**.

   <Result>**Review** shows **Registration Saved!** if the registration was paid and the tier didn't change.</Result>

3. *(Upgrade)* Click **Modify**, **Change**, **Select** on the higher tier, then **Update Registration**.

   <Result>**Product added to cart!** appears. The cart's **Order Summary** has a **Discount: Upgrade Discount** line for what was already paid (none if the old tier was free), so the attendee pays the difference.</Result>

4. *(Undo an upgrade before paying)* Click **Modify**, **Change**, **Cancel Upgrade** on the paid tier, then **Update Registration**.

   <Result>The registration is back on the paid tier.</Result>

In the card's menu (the arrow next to **Modify**), **Delete registration** deletes an unpaid registration with no confirmation. **Transfer registration**, if you allow it, moves a paid one to someone else; see [Transfer Registration](./transfer.md).

## When registration is closed

1. Untick **Open Registration** ([Registration settings](./settings.md), section 2), then open **Attendance** as an attendee.

   <Result>The card says *Registration for* your convention's name *is closed.*, with an **Update personal info** button. No registration cards are shown.</Result>

2. As an attendee, go to the registration address directly (ending in `/event/register/new`).

   <Result>The page says *Registration for the convention is currently closed.*</Result>

If registration is open but no tier can be offered, the wizard says *There are no products available for registration.*, then *Check the Event Store for other available items.* when your store is on and has public products, or *Please check back later.* otherwise.

:::caution[Watch out]
While registration is closed, attendees can't see or change their registrations on **Attendance**, and the attendee notice is hidden. Close registration only when you mean it.
:::
