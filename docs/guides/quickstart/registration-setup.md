---
sidebar_position: 3
hide_table_of_contents: true
textbook: true
---

# Registration setup

This guide sets up what attendees buy when they register: the badge tiers, the questions they answer, the extras that come with a badge, and the registration form itself. It also explains how one account can register a family or group, and how ConCat handles children and minors. It ends by opening registration.

:::info[In this guide]
Badge products (section 1), badge product options (section 2), addons (section 3), the registration form (section 4), sub-accounts (section 5), minors and dependents (section 6), and opening registration (section 7).
:::

## Badge products

<Sidenote title="Badges or store products?">
Badge products are the registration tiers, and they live in the Registration module. Everything else you sell, such as merchandise, lives in Store Management (see [Store and products setup](./store-setup.md)).
</Sidenote>

A badge product is a tier attendees register for, such as *General Admission* or *Sponsor*.

1. Go to **Housekeeping › Registration › Badge Products**.

   <Result>The **Badge Products** page lists your registration tiers, with **Create New Product** and **Category Surcharges** above them.</Result>

2. Click **Create New Product**.

   <Result>A **New Product** form opens.</Result>

3. Fill in **Name** and **Description**, set **Product visibility** to **Public**, and enter the **Base Price**. Leave the other fields as they are for now; Table 1.1 lists them. Then click **Create Product**.

   <Result>A **New product has been created** message appears, and the tier is listed on **Badge Products**.</Result>

4. Click the tier's name.

   <Result>The product's page opens, titled **Product:** and the tier's name, with tabs **Product**, **Orders** and **Audit Logs**. Its cards include **Product Information**, **Product Images**, **Addons**, **Discounts**, **Upgrade Paths**, **Options**, **Surcharges** and **Prices**.</Result>

<TableFigure title="Sections of the New Product form">

| Section | Fields |
| --- | --- |
| (top) | **Name**, **Display Name** (optional), **Description**, **Product visibility**: **Public** (listed for anyone who meets the restrictions), **Unlisted** (available but not listed in the store) or **Hidden** (not for sale; given only by automated means) |
| **Pricing** | **Base Price**, **Pass Platform Fee to Customer** |
| **Stock Control** | **Expires On**, **Limit Available Stock** |
| **Cashier** | **Product Label Print Design** <small>Overrides the default badge design for this tier.</small> |
| **Restrictions** | **Available From**, **Available Until**, **Minimum Purchase Age**, **Maximum Purchase Age**, **Product Role Whitelist**, **Product Role Blacklist**, **Restrict product to grants** |

</TableFigure>

## Badge product options

An option asks attendees for extra details when they register, such as a T-shirt size. You create the option once, then assign it to each tier that should ask for it. The [Product Options](../products/options.md) guide covers this step by step, with every option type.

1. Go to **Housekeeping › Registration › Options**, click **Create New Option**, fill in **Name** and **Type**, then click **Create**.

   <Result>A **New option has been created** message appears, and the option is listed on **Options**.</Result>

2. Open a badge product (section 1, step 4). In its **Options** card, click the green **Add** button.

   <Result>An **Option Search** field appears, with the checkboxes **Mark selected options as required.** and **Prevent changes to this option after purchase is complete.**, and an **Assign Options** button.</Result>

3. Select your option in **Option Search**, tick **Mark selected options as required.** if every attendee must answer it, and click **Assign Options**.

   <Result>The option is listed in the **Options** card.</Result>

## Addons

<Sidenote title="Addons are products too">
An addon points to another product, so its price and stock are kept in one place. Create the product first in your store ([Store and products setup](./store-setup.md)), then come back to attach it. A badge product can't be an addon.
</Sidenote>

An addon is a product that comes with a tier, such as a free T-shirt with a Sponsor badge or a paid banquet seat attendees can add.

1. Open a badge product (section 1, step 4). In its **Addons** card, click the green **Add** button.

   <Result>A **Product Search** field appears, with the checkboxes **Add-on is complimentary and should be provided free** and **Add-on is hidden and should not appear in users' carts**, and a **Create Add-On** button.</Result>

2. Select the product in **Product Search**. Tick **Add-on is complimentary and should be provided free** if it comes free with the tier, then click **Create Add-On**.

   <Result>The addon is listed in the card as **Included / Free** if you ticked the box, or **Not Included / Extra Purchase** if you didn't.</Result>

## Registration form

<Sidenote title="Where the form lives">
The registration form is edited from the Registration module's **Settings** page, not from **System › Settings**.
</Sidenote>

The registration form is the page attendees fill in after choosing a tier. It's built from sections, each holding elements such as a text block, an option, emergency contacts or a badge preview.

1. Go to **Housekeeping › Registration › Settings**.

   <Result>The **Registration Settings** page opens. Its cards include **General**, **Sub-accounts**, **Minimum Age and Children** and **Form Editor**.</Result>

2. In the **Form Editor** card, click **Go to Registration Form Editor**.

   <Result>The **Express Mode Editor** opens. The **Toolbox** of elements is on the left. On the right, under **Form Editor**, are the current form's sections, with **View Preview** and **Save Changes** buttons. The address ends in `/housekeeping/editor/registration`.</Result>

3. Drag an element from the **Toolbox** into a section, or drag an element to reorder it.

   <Result>The element appears where you dropped it.</Result>

4. Click **Save Changes**.

   <Result>A **Saved** message appears.</Result>

:::tip
If you leave the editor with unsaved changes, an **Unsaved Changes** dialog offers **Save and Exit**, **Exit without Saving** and **Cancel**.
:::

## Sub-accounts

<Sidenote title="What a sub-account is">
A sub-account is a person owned by another account. They have no sign-in of their own, and email meant for them goes to the account holder.
</Sidenote>

Sub-accounts let one account register a group or family and pay for everyone in one checkout. The account holder registers themselves first, then adds attendees under their account.

1. Go to **Housekeeping › Registration › Settings**.

   <Result>The **Registration Settings** page opens, with a **Sub-accounts** card.</Result>

2. In the **Sub-accounts** card, set **Max Sub-Accounts Registration** to the number of *additional* attendees one account may register (0 turns sub-accounts off). *(Optional)* Tick **Allow PII-free child registration** to let parents add a child with no name, email, username or date of birth; you can then also tick **Only allow child sub-accounts**, so that every additional attendee must be such a child. Click **Save** in the card.

   <Result>A **Sub-account settings saved** message appears.</Result>

Attendees then see the options below on their **Attendance** page, under **Your registrations**, once they've registered themselves.

1. As an attendee, click **Register another attendee** (**Register another attendee (Ages** *age***+)** when PII-free children are allowed).

   <Result>The registration starts with a **New user** step asking for the person's name and date of birth. It uses the account holder's address unless **Use different mailing address** is ticked. Then it continues to **Registration Type**, **Additional Information** and **Review**.</Result>

2. *(If PII-free children are allowed)* As an attendee, click **Register child (under** *age***)**.

   <Result>There is no personal-details step. The attendee ticks your child-registration terms, chooses a tier and fills in the form, where an emergency contact is required.</Result>

3. As an attendee, click **Complete registration**.

   <Result>Every unpaid attendee under the account is paid for in one checkout.</Result>

:::note[When a dependent grows up]
On a sub-account's card, **Migrate Sub-Account** turns it into a full account. The account holder enters their own password and the dependent's email address, and the dependent then sets a username and password from the email they receive. It isn't available for PII-free children, anyone under 13, or anyone under the child age threshold.
:::

## Minors and dependents

ConCat uses two age thresholds.

- **Child Age Threshold**: the minimum age to create an account, counted on the convention's start date. Nobody under 13 can create an account, whatever this is set to. Younger children can only attend as a sub-account (section 5).
- **Minor Age Threshold**: below this age, an attendee sees the **Minor Registration Warning** policy and needs a parent's consent. Set it to the same value as the child age threshold to turn this off.

1. Go to **Housekeeping › Registration › Settings**. In the **Minimum Age and Children** card, set **Child Age Threshold** and **Minor Age Threshold**, then click **Save**.

   <Result>A **Registration settings saved** message appears.</Result>

2. Go to **Housekeeping › System › Settings › Terms** and write the policies attendees see because of these ages: **Child Registration Error**, **Minor Registration Warning**, **Child Badge Terms** and **Parent agreement for child registration** (see [Convention setup](./convention-setup.md), section 3).

   <Result>Each policy shows a saved message when you click **Save**.</Result>

:::caution[Watch out]
The older *Child registration* feature, which added badge-name-only children to a parent's registration, is deprecated. If **Minimum Age and Children** shows *Child Registrations are going away.*, plan to use sub-accounts instead.
:::

## Open registration

Registration stays closed until you open it, so attendees can't register while you're still setting up.

1. Go to **Housekeeping › Registration › Settings**. In the **General** card, turn on **Open Registration**, then click **Save** in that card.

   <Result>A **Registration settings saved** message appears.</Result>

2. As an attendee, open **Attendance** in the homepage sidebar.

   <Result>The page offers **Start registration**.</Result>

:::tip[In more detail]
The full guides behind this page:

- [Badge Products](../registration/attendance/attendance.md)
- [Product Options](../products/options.md) and [Addons](../products/addons.md)
- [Registration form editor](../registration/form-editor.md)
- [Sub-accounts, children and minors](../registration/sub-accounts.md)
- [Registration settings](../registration/settings.md)
- [How attendees register](../registration/registering.md)
:::

The next guide, [Store and products setup](./store-setup.md), sets up everything else you sell.
