---
sidebar_position: 3
hide_table_of_contents: true
textbook: true
---

# Registration setup

Set up badge tiers, their questions and extras, and the registration form; choose how families and minors register; then open registration.

:::info[In this guide]
Badge products, badge product options, addons, the registration form, sub-accounts, minors and dependents, and opening registration.
:::

## Badge products

<Sidenote title="Badges or store products?">
Badge products, the registration tiers, live in the Registration module. Everything else you sell lives in Store Management ([Store and products setup](./store-setup.md)).
</Sidenote>

A badge product is a tier attendees register for, such as *General Admission* or *Sponsor*.

1. Go to **Housekeeping › Registration › Badge Products**.

   <Result>The **Badge Products** page lists your tiers, with **Create New Product** and **Category Surcharges** above them.</Result>

2. Click **Create New Product**.

   <Result>A **New Product** form opens.</Result>

3. Fill in **Name** and **Description**, set **Product visibility** to **Public**, enter the **Base Price**, and click **Create Product**. Leave the other fields (Table 1.1) for now.

   <Result>A **New product has been created** message appears, and the tier is listed on **Badge Products**.</Result>

4. Click the tier's name.

   <Result>The product's page opens, titled **Product:** and the tier's name, with tabs **Product**, **Orders** and **Audit Logs**, and cards including **Product Information**, **Product Images**, **Addons**, **Discounts**, **Upgrade Paths**, **Options**, **Surcharges** and **Prices**.</Result>

<TableFigure title="Sections of the New Product form">

| Section | Fields |
| --- | --- |
| (top) | **Name**, **Display Name** (optional), **Description**, **Product visibility**: **Public** (listed to anyone who meets the restrictions), **Unlisted** (for sale but not listed in the store) or **Hidden** (not for sale; only given automatically) |
| **Pricing** | **Base Price**, **Pass Platform Fee to Customer** |
| **Stock Control** | **Expires On**, **Limit Available Stock** |
| **Cashier** | **Product Label Print Design** <small>Overrides the default badge design for this tier.</small> |
| **Restrictions** | **Available From**, **Available Until**, **Minimum Purchase Age**, **Maximum Purchase Age**, **Product Role Whitelist**, **Product Role Blacklist**, **Restrict product to grants** |

</TableFigure>

## Badge product options

An option asks attendees for an extra detail, such as a T-shirt size. Create it once, then assign it to each tier that should ask it. [Product Options](../products/options.md) covers every option type.

1. Go to **Housekeeping › Registration › Options**, click **Create New Option**, fill in **Name** and **Type**, and click **Create**.

   <Result>A **New option has been created** message appears, and the option is listed on **Options**.</Result>

2. Open a badge product (section 1, step 4) and click the green **Add** button in its **Options** card.

   <Result>An **Option Search** field appears, with the checkboxes **Mark selected options as required.** and **Prevent changes to this option after purchase is complete.**</Result>

3. Select your option, tick **Mark selected options as required.** if every attendee must answer it, and click **Assign Options**.

   <Result>The option is listed in the **Options** card.</Result>

## Addons

<Sidenote title="Addons are products too">
An addon points to another product, so its price and stock stay in one place. Create that product in your store first ([Store and products setup](./store-setup.md)). A badge product can't be an addon.
</Sidenote>

An addon is a product that comes with a tier, such as a free Sponsor T-shirt or a paid banquet seat.

1. Open a badge product (section 1, step 4) and click the green **Add** button in its **Addons** card.

   <Result>A **Product Search** field appears, with the checkboxes **Add-on is complimentary and should be provided free** and **Add-on is hidden and should not appear in users' carts**.</Result>

2. Select the product, tick **Add-on is complimentary and should be provided free** if it comes free with the tier, and click **Create Add-On**.

   <Result>The addon is listed as **Included / Free** if you ticked the box, or **Not Included / Extra Purchase** if not.</Result>

## Registration form

<Sidenote title="Where the form lives">
The form is edited from the Registration module's **Settings** page, not from **System › Settings**.
</Sidenote>

The registration form is the page attendees fill in after choosing a tier. Its sections hold elements such as a text block, an option, emergency contacts or a badge preview.

1. Go to **Housekeeping › Registration › Settings**.

   <Result>The **Registration Settings** page opens, with cards including **General**, **Sub-accounts**, **Minimum Age and Children** and **Form Editor**.</Result>

2. In the **Form Editor** card, click **Go to Registration Form Editor** (Figure 4.1).

   <Result>The **Express Mode Editor** opens: the **Toolbox** of elements on the left, and the form's sections on the right under **Form Editor**, with **View Preview** and **Save Changes**.</Result>

3. Drag an element from the **Toolbox** into a section, or drag an element to reorder it.

   <Result>The element appears where you dropped it.</Result>

4. Click **Save Changes**.

   <Result>A **Saved** message appears.</Result>

<Figure
  src="/img/guides/registration/form-editor.webp"
  alt="The Express Mode Editor: the Toolbox of elements on the left, the Badge Info section with three elements on the right, and View Preview and Save Changes buttons at the top right."
  title="The registration form editor"
  markers={[
    { n: 1, x: 0.4, y: 12, w: 19.2, h: 86 },
    { n: 2, x: 20.9, y: 25.1, w: 78.2, h: 71.7 },
    { n: 3, x: 82.9, y: 12, w: 8.5, h: 9.2 },
    { n: 4, x: 91.2, y: 12, w: 8.7, h: 9.2 },
  ]}
>

1. The **Toolbox**. Drag elements from here into a section.
2. A section of the form, with its elements.
3. **View Preview** shows the form as attendees will see it.
4. **Save Changes**.

</Figure>

:::tip
Leaving the editor with unsaved changes opens an **Unsaved Changes** dialog with **Save and Exit**, **Exit without Saving** and **Cancel**.
:::

## Sub-accounts

<Sidenote title="What a sub-account is">
A person owned by another account, with no sign-in of their own. Email meant for them goes to the account holder.
</Sidenote>

Sub-accounts let one account register a group or family and pay for everyone in one checkout. The account holder registers first, then adds the others.

1. Go to **Housekeeping › Registration › Settings**.

   <Result>The **Registration Settings** page opens, with a **Sub-accounts** card.</Result>

2. In the **Sub-accounts** card, set **Max Sub-Accounts Registration** to the number of *additional* attendees one account may register (0 turns sub-accounts off). *(Optional)* Tick **Allow PII-free child registration** to let parents add a child with no name, email, username or date of birth; then you can also tick **Only allow child sub-accounts**, so every additional attendee must be such a child. Click **Save** in the card.

   <Result>A **Sub-account settings saved** message appears.</Result>

Once registered themselves, attendees see these options on their **Attendance** page, under **Your registrations**.

1. As an attendee, click **Register another attendee** (**Register another attendee (Ages** *age***+)** when PII-free children are allowed).

   <Result>A **New user** step asks for the person's name and date of birth, and uses the account holder's address unless **Use different mailing address** is ticked. **Registration Type**, **Additional Information** and **Review** follow.</Result>

2. *(If PII-free children are allowed)* As an attendee, click **Register child (under** *age***)**.

   <Result>There's no personal-details step. The attendee ticks your child-registration terms, chooses a tier and fills in the form, where an emergency contact is required.</Result>

3. As an attendee, click **Complete registration**.

   <Result>Every unpaid attendee under the account is paid for in one checkout.</Result>

:::note[When a dependent grows up]
**Migrate Sub-Account**, on a sub-account's card, turns it into a full account: the account holder enters their own password and the dependent's email, and the dependent sets a username and password from the email they receive. It isn't available for PII-free children, anyone under 13, or anyone under the child age threshold.
:::

## Minors and dependents

ConCat uses two age thresholds:

- **Child Age Threshold**: the minimum age to create an account, counted on the convention's start date. Nobody under 13 can create one, whatever the setting. Younger children can only attend as a sub-account (section 5).
- **Minor Age Threshold**: below this age, an attendee sees the **Minor Registration Warning** policy and needs a parent's consent. Set it equal to the child age threshold to turn this off.

1. Go to **Housekeeping › Registration › Settings**. In the **Minimum Age and Children** card, set **Child Age Threshold** and **Minor Age Threshold**, then click **Save**.

   <Result>A **Registration settings saved** message appears.</Result>

2. Go to **Housekeeping › System › Settings › Terms** and write the policies these ages trigger: **Child Registration Error**, **Minor Registration Warning**, **Child Badge Terms** and **Parent agreement for child registration** ([Convention setup](./convention-setup.md), section 3).

   <Result>Each policy shows a saved message when you click **Save**.</Result>

:::caution[Watch out]
The older *Child registration* feature (badge-name-only children on a parent's registration) is deprecated. If **Minimum Age and Children** shows *Child Registrations are going away.*, plan to use sub-accounts instead.
:::

## Open registration

Registration stays closed until you open it, so attendees can't register while you set up.

1. Go to **Housekeeping › Registration › Settings**, turn on **Open Registration** in the **General** card, and click **Save** in that card.

   <Result>A **Registration settings saved** message appears.</Result>

2. As an attendee, open **Attendance** in the homepage sidebar.

   <Result>The page offers **Start registration**.</Result>

:::tip[In more detail]
- [Badge Products](../registration/attendance/attendance.md)
- [Product Options](../products/options.md) and [Addons](../products/addons.md)
- [Registration form editor](../registration/form-editor.md)
- [Sub-accounts, children and minors](../registration/sub-accounts.md)
- [Registration settings](../registration/settings.md)
- [How attendees register](../registration/registering.md)
:::

Next: [Store and products setup](./store-setup.md), for everything else you sell.
