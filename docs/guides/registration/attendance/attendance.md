---
sidebar_position: 1
hide_table_of_contents: true
textbook: true
---

# Badge Products

Badge products are the registration tiers attendees choose from when they register, such as *General Admission* or *Sponsor*. This guide covers the list of tiers, creating a tier, the settings only tiers have, and upgrade paths between tiers.

:::info[In this guide]
What a badge product is (section 1), the list of badge products (section 2), creating a tier (section 3), a tier's page and its registration-only fields (section 4), upgrade paths (section 5), and addons on a tier (section 6).
:::

## What a badge product is

<Sidenote title="Who can do this">
Seeing the list needs the `product:read` permission. Creating and changing tiers needs `product:manage`. The default *admin* and *productEditor* roles have both.
</Sidenote>

On other platforms, tiers are sometimes called packages or ticket types. In ConCat a badge product is a special kind of product: it has a price, stock, options, addons and discounts like any store product, but it lives in the Registration module and attendees pick it in the registration wizard, not in the event store.

Every tier has a **Product visibility**:

- **Public**: listed on the **Registration Type** step for anyone who meets the tier's restrictions.
- **Unlisted**: available to anyone who meets the restrictions, but not listed. Attendees need a link to it.
- **Hidden**: not for sale. Attendees can only get it by automated means, such as a free addon.

All tiers share one registration form. What the form asks is set in the [Registration form editor](../form-editor.md); options assigned to a tier add questions for that tier only.

## The list of badge products

1. Go to **Housekeeping › Registration › Badge Products** (the module menu is explained in [Start here](../../quickstart/start-here.md), section 2).

   <Result>The **Badge Products** page opens, with **Create New Product** and **Category Surcharges** buttons above a searchable table with the columns **ID**, **Name** and **Description**. The address ends in `/housekeeping/registration/products`.</Result>

2. Read the badges under each tier's name.

   <Result>Each tier shows its visibility (**Public / Visible**, **Unlisted** or **Hidden**), and badges such as **In Stock: 40/50 Available**, **Not Yet Available**, **Expired** or **Age Restricted: >= 18** when they apply.</Result>

3. *(Optional)* If a tier has been deleted, click **Show Deleted Products** below the table.

   <Result>Deleted tiers are listed too, marked **Deleted / Archived**, and the button changes to **Hide Deleted Products**.</Result>

Unlike **Store Products**, this page has no categories: every tier is in the one registration category. **Category Surcharges** adds a fee or tax to every tier at once; see [Surcharges](../../products/surcharges.md).

## Create a tier

1. On **Badge Products**, click **Create New Product**.

   <Result>A **New Product** form opens, with a **Back to Products** button above it.</Result>

2. Fill in **Name** and **Description**, choose a **Product visibility** (**Public**, **Unlisted** or **Hidden**), and under **Pricing** enter the **Base Price**. *(Optional)* Fill in **Display Name**, if attendees should see a different name from the one staff see, and the other sections in Table 3.1. Then click **Create Product**.

   <Result>A **New product has been created** message appears, and the tier is listed on **Badge Products**.</Result>

<TableFigure title="Sections of the New Product form for a badge tier">

| Section | Fields |
| --- | --- |
| (top) | **Name**, **Display Name** <small>Optional.</small>, **Description**, **Product visibility** |
| **Pricing** | **Base Price** <small>Only when you create the tier. Change it later in the **Prices** card.</small>, **Pass Platform Fee to Customer** |
| **Stock Control** | **Expires On** <small>Registration only. After this date a paid badge of this tier expires. It must be on or after **Available Until**, and a warning icon appears if the two differ.</small>, **Limit Available Stock** <small>The number of this tier that can be sold. Leave it off for no limit.</small> |
| **Cashier** | **Product Label Print Design** <small>Tick it and choose a design to print this tier's badges with that design instead of the default one. See [Badge Designer](../badge_designer.md).</small> |
| **Restrictions** | **Available From**, **Available Until**, **Minimum Purchase Age**, **Maximum Purchase Age**, **Product Role Whitelist**, **Product Role Blacklist**, **Restrict product to grants** |

</TableFigure>

Ages are counted on the convention's start date. **Restrict product to grants** offers the tier only to attendees who have, or are buying, another product you choose.

:::note[What tiers don't have]
The store's **Maximum purchases per user** and **Deliverable** fields don't appear for badge products. Each attendee has one registration, and badges are handed out by the Cashier UI.
:::

## A tier's page

1. On **Badge Products**, click the tier's name.

   <Result>The page is titled **Product:**, the tier's name and its ID, with the tabs **Product**, **Orders** and **Audit Logs**. The cards are **Product Information**, **Product Images**, **Addons**, **Discounts**, **Upgrade Paths**, **Options** and **Surcharges**, with **Prices** and **Actions** on the right.</Result>

2. In **Product Information**, click the edit (pencil) button.

   <Result>The card shows the same form as when you created the tier, with an **Update Product** button and no **Base Price** field.</Result>

3. Change the fields you need, then click **Update Product**.

   <Result>The form closes and **Product Information** shows the new values.</Result>

4. *(Optional)* Click the **Orders** tab.

   <Result>Orders that contain this tier are listed, with filter badges such as **Paid**, **Unpaid**, **With grant** and **No grant**.</Result>

The **Upgrade Paths** card appears only on badge products (section 5). The **Audit Logs** tab appears only if you have the `audit:read` permission. The other cards work the same way as for store products:

- **Product Images**: [Product Images](../../products/productimages.md)
- **Addons**: section 6 and [Addons](../../products/addons.md)
- **Discounts**: [Discounts](../../products/discounts.md)
- **Options**: [Product Options](../../products/options.md)
- **Surcharges**: [Surcharges](../../products/surcharges.md)
- **Prices**, **Actions** and deleting a product: [Products](../../products/products.md)

## Upgrade paths

<Sidenote title="What the attendee pays">
The new tier goes into the cart with an **Upgrade Discount** equal to what the attendee paid for the old one, so they pay the difference.
</Sidenote>

An upgrade path lets an attendee who has already paid for this tier move to a higher one. Once a registration is paid, the **Registration Type** step lists only the paid tier and the tiers you add here. Attendees can't move to any other tier on their own. A tier with no upgrades says *There are currently no upgrade paths.* in this card.

1. Open the tier attendees upgrade *from* (section 4, step 1). In the **Upgrade Paths** card, click the green **Add** button.

   <Result>The card shows a **Product Search** field and a **Create Upgrades** button.</Result>

2. In **Product Search**, select the tier or tiers attendees can upgrade *to*.

   <Result>Each tier you select appears under the search field. Only badge products are offered.</Result>

3. Click **Create Upgrades**.

   <Result>Each tier is listed in the **Upgrade Paths** card with an **Upgrade** badge and a delete button.</Result>

4. *(Optional)* To remove an upgrade path, click its delete button.

   <Result>The tier is no longer listed in **Upgrade Paths**.</Result>

Upgrade paths go one way. To let *General Admission* attendees upgrade to *Sponsor*, add *Sponsor* on the *General Admission* page. [How attendees register](../registering.md), section 7, shows the attendee's side.

## Addons on a tier

Addons attach other products to a tier; [Addons](../../products/addons.md) explains how to add them. For badge products:

- A complimentary addon (**Included / Free**) is added to the attendee's cart together with the tier.
- A paid addon that is **Public** is offered after the attendee finishes their registration, in a **Product addons** card under the result.
- Options on a complimentary addon are asked on the registration form, together with the tier's own options.

Badge products can't themselves be addons of another product.
