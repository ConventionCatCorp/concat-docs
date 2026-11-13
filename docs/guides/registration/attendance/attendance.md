---
sidebar_position: 1
hide_table_of_contents: true
textbook: true
---

# Badge Products

Badge products are the registration tiers attendees choose from, such as *General Admission* or *Sponsor*. Create and edit tiers, and let attendees upgrade between them.

:::info[In this guide]
Badge products, the list, creating a tier, a tier's page, upgrade paths, and addons.
:::

## What a badge product is

<Sidenote title="Who can do this">
Viewing needs `product:read`; creating and editing needs `product:manage`. The default *admin* and *productEditor* roles have both.
</Sidenote>

A badge product works like a store product, with price, stock, options, addons and discounts, but attendees pick it in the registration wizard, not the event store. Its **Product visibility** decides who can get it:

- **Public**: listed on the **Registration Type** step for anyone who meets the tier's restrictions.
- **Unlisted**: open to anyone who meets the restrictions, but only by link.
- **Hidden**: not for sale. Attendees get it only by automated means, such as a free addon.

All tiers share one registration form ([Registration form editor](../form-editor.md)). Options assigned to a tier add questions for that tier only.

## The list of badge products

1. Go to **Housekeeping › Registration › Badge Products** (see [Start here](../../quickstart/start-here.md), section 2).

   <Result>The **Badge Products** page lists your tiers, with **Create New Product** and **Category Surcharges** above. The address ends in `/housekeeping/registration/products`.</Result>

2. Read the badges under each tier's name.

   <Result>Each tier shows its visibility (**Public / Visible**, **Unlisted** or **Hidden**) and, when they apply, badges such as **In Stock: 40/50 Available**, **Not Yet Available**, **Expired** or **Age Restricted: >= 18**.</Result>

3. *(Optional)* To see deleted tiers, click **Show Deleted Products** below the table.

   <Result>Deleted tiers appear, marked **Deleted / Archived**.</Result>

Unlike **Store Products**, this page has no categories. **Category Surcharges** adds a fee or tax to every tier at once: see [Surcharges](../../products/surcharges.md).

## Create a tier

1. On **Badge Products**, click **Create New Product**.

   <Result>A **New Product** form opens.</Result>

2. Fill in **Name**, **Description**, **Product visibility** and **Base Price**, plus any fields from Table 3.1 you need, then click **Create Product**.

   <Result>A **New product has been created** message appears, and the tier is listed on **Badge Products**.</Result>

<TableFigure title="Sections of the New Product form for a badge tier">

| Section | Fields |
| --- | --- |
| **Tier** | **Name**, **Display Name** (Optional: the name attendees see, if different.) <p>**Description**, **Product visibility**</p> |
| **Pricing** | **Base Price** (At creation only; later, use the **Prices** card)<p>**Pass Platform Fee to Customer**</p> |
| **Stock Control** | **Expires On**, **Limit Available Stock** |
| **Cashier** | **Product Label Print Design** <small>Prints this tier's badges with the chosen design instead of the default. See [Badge Designer](../badge_designer.md).</small> |
| **Restrictions** | **Available From**, **Available Until**, **Minimum Purchase Age**, **Maximum Purchase Age**, **Product Role Whitelist**, **Product Role Blacklist**, **Restrict product to grants** |

</TableFigure>

Ages are counted on the convention's start date. **Restrict product to grants** offers the tier only to attendees who have, or are buying, a product you choose.

:::note[What tiers don't have]
No **Maximum purchases per user** or **Deliverable**: each attendee has one registration, and the Cashier UI hands out badges.
:::

## A tier's page

1. On **Badge Products**, click the tier's name.

   <Result>The tier's page opens, titled **Product:** with its name and ID, with **Product**, **Orders** and **Audit Logs** tabs.</Result>

2. In **Product Information**, click the edit (pencil) button.

   <Result>The creation form appears in the card, without **Base Price**.</Result>

3. Change the fields you need, then click **Update Product**.

   <Result>**Product Information** shows the new values.</Result>

4. *(Optional)* Click the **Orders** tab.

   <Result>Orders containing this tier are listed, with filters such as **Paid**, **Unpaid**, **With grant** and **No grant**.</Result>

The **Audit Logs** tab needs the `audit:read` permission. The **Upgrade Paths** card, only on badge products, is covered in section 5. The other cards work as for store products:

- **Product Images**: [Product Images](../../products/productimages.md)
- **Addons**: section 6 and [Addons](../../products/addons.md)
- **Discounts**: [Discounts](../../products/discounts.md)
- **Options**: [Product Options](../../products/options.md)
- **Surcharges**: [Surcharges](../../products/surcharges.md)
- **Prices**, **Actions** and deleting a product: [Products](../../products/products.md)

## Upgrade paths

<Sidenote title="What the attendee pays">
The new tier goes into the cart with an **Upgrade Discount** equal to what was paid for the old one, so the attendee pays the difference.
</Sidenote>

Once a registration is paid, the **Registration Type** step offers only the paid tier and its upgrade paths. Paths go one way: to let *General Admission* attendees upgrade to *Sponsor*, add *Sponsor* on the *General Admission* page. A tier with none shows *There are currently no upgrade paths.*

1. Open the tier attendees upgrade *from* (section 4, step 1). In **Upgrade Paths**, click the green **Add** button.

   <Result>A **Product Search** field and a **Create Upgrades** button appear.</Result>

2. In **Product Search**, select the tier or tiers attendees can upgrade *to*.

   <Result>Each selected tier appears under the field. Only badge products are offered.</Result>

3. Click **Create Upgrades**.

   <Result>Each tier is listed in **Upgrade Paths** with an **Upgrade** badge and a delete button.</Result>

4. *(Optional)* To remove an upgrade path, click its delete button.

   <Result>The tier is no longer listed.</Result>

[How attendees register](../registering.md), section 7, shows the attendee's side.

## Addons on a tier

Addons attach other products to a tier ([Addons](../../products/addons.md)). For badge products:

- A complimentary addon (**Included / Free**) goes into the cart with the tier.
- A **Public** paid addon is offered after registration, in a **Product addons** card.
- Options on a complimentary addon are asked on the registration form, with the tier's own options.

Badge products can't be addons of another product.
