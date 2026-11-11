---
sidebar_position: 2
hide_table_of_contents: true
textbook: true
---

# How attendees register

This guide shows what your attendees see when they register: the registration wizard, choosing a tier, the registration form, what happens after they submit it, and how they change or upgrade a registration later. Follow the steps yourself, signed in as an attendee, to check your setup before you open registration.

:::info[In this guide]
What attendees need before they can register (section 1), starting a registration (section 2), choosing a tier (section 3), the registration form (section 4), the result (section 5), paying (section 6), changing or upgrading a registration (section 7), and what attendees see when registration is closed (section 8).
:::

## Before attendees can register

<Sidenote title="Test with a second account">
Use an ordinary attendee account in a private browser window. Your staff account may see tiers limited to staff roles, which ordinary attendees don't.
</Sidenote>

An attendee can register when all of these are true:

- They have an account and are signed in.
- **Open Registration** is ticked in **Housekeeping › Registration › Settings** ([Registration settings](./settings.md), section 2).
- At least one [badge product](./attendance/attendance.md) is **Public**, on sale (between its **Available From** and **Available Until**), and allowed for their age and roles.

Registration happens on the attendee's **Attendance** page, which is the homepage of your instance once they're signed in.

## Start a registration

1. As an attendee, open **Attendance** in the homepage sidebar.

   <Result>The page is headed **Attendance**. A card says *Ready to attend*, your convention's short name and a question mark, with **Start registration** and **Update personal info** buttons. Below it, under **Your registration**, is the attendee's own card with the status **Not registered**.</Result>

2. Click **Start registration**.

   <Result>The **Event registration** page opens on the **Registration Type** step. The steps along the top are **Registration Type**, **Additional Information** and **Review**. The address ends in `/event/register/new`.</Result>

If your event allows sub-accounts, the heading reads **Your registrations** and an **Attendees** box appears; see [Sub-accounts, children and minors](./sub-accounts.md), section 4.

## Choose a tier

<Sidenote title="Ages">
Ages are counted on the convention's start date, not on the day the attendee registers.
</Sidenote>

The **Registration Type** step shows one card per tier the attendee may buy, with its name, description, price and a green **Select** button. Tiers are hidden when the attendee is outside the tier's **Minimum Purchase Age** and **Maximum Purchase Age**, isn't allowed by its role or grant restrictions, or when the tier isn't **Public**.

1. On **Registration Type**, click **Select** on a tier.

   <Result>The **Additional Information** step opens. A bar at the top shows the tier's name, description and price, with a **Change** button.</Result>

2. *(Optional)* Click **Change**.

   <Result>The **Registration Type** step opens again. The tier you chose shows **Continue** instead of **Select**.</Result>

When an attendee selects a tier for themselves, ConCat holds one of that tier's stock for them in the cart, so it can't sell out while they fill in the form. Other things the attendee may see on this step:

<TableFigure title="Messages on the Registration Type step">

| Message or button | Why |
| --- | --- |
| **Sold Out!** (in place of **Select**) | The tier's **Limit Available Stock** has been reached. |
| **Closed Raffle** (in place of **Select**) | The tier is gated by a silo that no longer takes entries. See [Gatekeeping](./raffle.md). |
| *Sorry, that item went out of stock while you were making a selection. Try a different tier.* | The last one sold while the attendee was choosing. |
| *No products available for this age range. Please contact the event organizers for more information.* | No tier allows the attendee's age, roles or grants. |
| *You are currently assigned a special attendance type which cannot be changed. Please contact the registration team for more information.* | Staff gave the attendee a tier that isn't **Public**. Only that tier is shown. |

</TableFigure>

## Fill in the registration form

The **Additional Information** step shows your registration form, as built in the [Registration form editor](./form-editor.md). Each section of the form is a card. A typical form asks for a **Badge Name**, the tier's options, the registration flags and an emergency contact.

1. Fill in the form. *(Optional)* Click **Randomize**, if your form has it, to fill in a random badge name.

   <Result>Each section of the form is a card. A section with nothing to show, such as **Other options** when the tier has no other options, isn't shown.</Result>

2. Click **Register** at the bottom of the form.

   <Result>The **Review** step opens with the result (section 5). If something is missing, a message says what, such as *You must accept the convention's policy* or *Emergency Contact Info is required.*</Result>

An emergency contact (**Contact Name** and **Contact Phone**) is required when the form's **Emergency contacts** element is set as required, and always for minors, PII-free children and, if your volunteer settings ask for it, volunteers.

## The result

What the **Review** step says depends on the tier and on what's in the attendee's cart.

<TableFigure title="Results of submitting the registration form">

| Title | When | Buttons |
| --- | --- | --- |
| **Product added to cart!** <small>*Tier name* has been added to your cart.</small> | The registration needs paying for. | **View cart**, **Go to dashboard** |
| **Order completed!** <small>Your order for *tier name* has been completed.</small> | The order had nothing to pay, so it completed at once. | **View transaction history** |
| **Registration Saved!** <small>Your badge information has been updated and no new balance is due</small> | The attendee changed a registration they had already paid for, and kept the same tier. | **View cart**, **Go to dashboard** |
| Your silo's entry title, *Entered into Raffle Draw!* by default | The tier is gated. The attendee is entered in the silo and nothing goes in the cart. See [Gatekeeping](./raffle.md). | **View cart**, **Go to dashboard** |

</TableFigure>

If the tier has paid addons that are **Public**, a **Product addons** card below the result offers them.

1. On the result, click **Go to dashboard**.

   <Result>**Attendance** opens. The status card now says **Complete your registration** (or *You're registered for* your convention, if nothing was due), and the attendee's card shows the tier, the status **Unpaid** or **Registered**, and the badge name.</Result>

## Pay

1. On **Attendance**, click **Complete registration**.

   <Result>The checkout page opens with an **Order Summary** of what's due.</Result>

2. Pay for the order.

   <Result>The status card on **Attendance** says *You're registered for* your convention's short name, and the attendee's card shows the status **Registered**.</Result>

When **Cart Timeout** is set in [Registration settings](./settings.md), the unpaid registration is held only for that long, and the status card counts down: *Your unpaid registration at* your event *will be held for* the time left. Checkout, vouchers and payment are covered in [Checkout and payment](../orders/checkout.md).

## Change or upgrade a registration

<Sidenote title="Locked options">
Once a registration is paid, options that change the price can't be changed, and nor can options marked **Prevent changes to this option after purchase is complete.** that already have a value.
</Sidenote>

Attendees can change their registration later, for example to fix their badge name. For a paid registration, **Change** lists only the paid tier, with **Continue**, and the tiers set up as its [upgrade paths](./attendance/attendance.md), with **Select**.

1. On **Attendance**, click **Modify** on the attendee's card, or click their name.

   <Result>The **Additional Information** step opens with the form filled in, and the bar at the top shows their tier with a **Change** button.</Result>

2. Change what's needed and click **Update Registration**.

   <Result>The **Review** step shows **Registration Saved!** if the registration was paid for and the tier didn't change.</Result>

3. *(Upgrade)* Click **Modify** again, then **Change**, then **Select** on the higher tier, then **Update Registration**.

   <Result>**Product added to cart!** appears. In the cart, the new tier has an **Upgrade Discount** for what the attendee already paid, so they pay the difference.</Result>

4. *(Undo an upgrade before paying)* Click **Modify**, then **Change**, then **Cancel Upgrade** on the paid tier, then **Update Registration**.

   <Result>The registration is back on the paid tier.</Result>

An unpaid registration can be deleted from the card's menu (the arrow next to **Modify**) with **Delete registration**. There is no confirmation. A paid registration can be moved to someone else with **Transfer registration**, if you allow it; see [Transfer Registration](./transfer.md).

## When registration is closed

1. Untick **Open Registration** ([Registration settings](./settings.md), section 2). Then, as an attendee, open **Attendance**.

   <Result>The card says *Registration for* your convention's name *is closed.*, *Check back later for updates.* and *You can still update your personal information for when registration opens.*, with an **Update personal info** button. No registration cards are shown.</Result>

2. As an attendee, go to the registration address directly (ending in `/event/register/new`).

   <Result>The page says *Registration for the convention is currently closed.*</Result>

If registration is open but no tier can be offered, the wizard says *There are no products available for registration.*, followed by *Check the Event Store for other available items.* when your store is on and has public products, or *Please check back later.* otherwise.

:::caution[Watch out]
While registration is closed, attendees can't see or change their registrations on **Attendance**, and the attendee notice isn't shown either. Close registration only when you mean it.
:::
