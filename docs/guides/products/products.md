---
sidebar_position: 1
hide_table_of_contents: true
textbook: true
---

# Products

Create the products in your event store, group them in categories, and change, archive or track them once they're on sale.

:::info[In this guide]
Categories (section 1), the product list (section 2), creating a product (section 3), the product page (section 4), clearing unpaid carts (section 5), deleting a product (section 6), and orders and history (section 7).
:::

## Categories

<Sidenote title="Who can do this">
**Store Products** needs `product:read`; managing categories needs `product:category:manage`, and managing products `product:manage`. The default *admin* and *productEditor* roles have all three.
</Sidenote>

Every store product belongs to a category, and attendees browse the store by category. Badge products are under **Housekeeping › Registration › Badge Products** instead (see [Registration setup](../quickstart/registration-setup.md)). To switch menus, see [Start here](../quickstart/start-here.md), section 2.

1. Go to **Housekeeping › Store Management › Store Products**.

   <Result>The **Product Categories** page (`/housekeeping/store/products`) shows each category as a card, with **View Products** and a **…** menu.</Result>

### Create a category

1. Click **Create New Category**.

   <Result>A **New Category** form opens.</Result>

2. Enter a **Name**, tick **Hide this category** to keep it from attendees for now, and click **Create Category**.

   <Result>**New category has been created.** appears, and the category's page opens.</Result>

### Hide or show a category

A hidden category, with all its products, is left out of the event store.

1. On **Product Categories**, open the category's **…** menu and choose **Hide Category**.

   <Result>The card shows a **Hidden** badge.</Result>

2. To show it again, choose **Show Category** in the same menu.

   <Result>The **Hidden** badge is gone.</Result>

### Delete a category

A category's products must be deleted with it or moved to another category.

1. Open the category's **…** menu and choose **Delete Category**.

   <Result>The card warns *Deleting a category is a PERMANENT action and cannot be undone.*, with **Delete all existing items** and **New Category**.</Result>

2. Tick **Delete all existing items**, or pick a **New Category** for the products, then click **Delete Category**.

   <Result>The category is gone from the list. Moved products appear in the new category.</Result>

:::caution[Watch out]
There's no confirmation, and a deleted category can't be restored. **Delete all existing items** deletes every product in it.
:::

With `audit:read`, the **…** menu also has **View History**.

## The product list

Badges under each product's name show its status (Table 2.1).

1. On **Product Categories**, click **View Products** on the category.

   <Result>The category's page lists its products, with **Create New Product** and **Category Surcharges** above the table. An empty category shows **No Products Here!**</Result>

2. Type part of a product's name or description in the search box (*Search...*).

   <Result>Only matching products are listed.</Result>

3. *(If the category has deleted products)* Click **Show Deleted Products** below the table.

   <Result>Deleted products appear, marked **Deleted / Archived**.</Result>

<TableFigure title="Product status badges">

| Badge | What it means |
| --- | --- |
| **Public / Visible**, **Unlisted** or **Hidden** | The **Product visibility** (Table 3.1). |
| **Deleted / Archived** | Deleted (section 6). |
| **In Stock:** *x*/*y* **Available** | *x* of *y* limited stock left. |
| **Out of Stock** | Limited stock used up. <small>**Out of Stock - Exceeded by** *n*: *n* sold over the limit.</small> |
| **Limit per user:** *n* | **Maximum purchases per user** is set. |
| **Role Restriction**, **Product Role Blacklist** | A role whitelist or blacklist is set. |
| **Grant Restriction** | **Restrict product to grants** is set. |
| **Not Yet Available** | **Available From** is in the future. |
| **Expired** | **Available Until** has passed. |
| **Age Restricted:** and the ages | A purchase age limit is set. |
| **Addon Stock:** *x*/*y* **Available**, **Addon Out of Stock** | A complimentary addon has limited stock ([Addons](./addons.md)). |
| **Unused Stock:** *n* | *Product is using stock, but has no active grant.* <small>Click it to see the orders.</small> |

</TableFigure>

## Create a product

<Sidenote title="Fields with a checkbox">
**Maximum purchases per user**, **Limit Available Stock**, **Product Label Print Design** and **Available Until** stay off until you tick their checkbox.
</Sidenote>

1. On the category's page (section 2, step 1), click **Create New Product**.

   <Result>A **New Product** form opens, with **Pricing**, **Stock Control**, **Cashier** and **Restrictions** sections.</Result>

2. Fill in the fields in Table 3.1 (only **Name** and **Base Price** are required) and click **Create Product**.

   <Result>**New product has been created** appears, and the product is listed in the category.</Result>

<TableFigure title="The New Product form for store products">

| Field | What it does |
| --- | --- |
| **Name** | Shown in Housekeeping, and in the store unless there's a **Display Name**. |
| **Display Name** (Optional) | A different name for attendees. |
| **Description** | Shown in the store. <small>Markdown formatting is applied.</small> |
| **Product visibility** | **Public**: listed in the store. **Unlisted**: not listed; bought through its link. **Hidden**: not for sale; only given automatically, such as a complimentary addon. |
| **Base Price** | The price before discounts, options and surcharges. <small>**Pricing**. Change it later with **Change Price** (section 4.2).</small> |
| **Pass Platform Fee to Customer** | Adds ConCat's platform fee on top of the price instead of taking it from what you receive. <small>**Pricing**. See [Surcharges](./surcharges.md), section 6.</small> |
| **Maximum purchases per user** | The most one attendee can buy. <small>**Stock Control**.</small> |
| **Limit Available Stock** | The total that can be sold. <small>**Stock Control**. *Maximum stock can only be decreased by the remaining stock available.*</small> |
| **Product Label Print Design** | Prints a claim ticket for each one bought. <small>**Cashier**. See [Claim Tickets](./claimtickets.md).</small> |
| **Deliverable** | On by default. Lets cashiers and admins mark it delivered; for physical goods. <small>**Cashier**.</small> |
| **Available From** | When sales start. Defaults to the start of today. <small>**Restrictions**.</small> |
| **Available Until** | When sales end. <small>**Restrictions**.</small> |
| **Minimum Purchase Age**, **Maximum Purchase Age** (Optional) | Buyer ages allowed, on the convention's start date. <small>**Restrictions**.</small> |
| **Product Role Whitelist** | Only people with one of these roles see it. <small>**Restrictions**. Needs `system:permission:read`.</small> |
| **Product Role Blacklist** | People with any of these roles don't see it, even if whitelisted. <small>**Restrictions**. Needs `system:permission:read`.</small> |
| **Restrict product to grants** | Only people who bought, or have in their cart, one of the chosen products can buy it. <small>**Restrictions**.</small> |

</TableFigure>

## The product page

1. On the category's page, click the product's name.

   <Result>The **Product:** page opens with the tabs **Product**, **Orders** and **Audit Logs**. **Product** has the cards in Table 4.1.</Result>

<TableFigure title="The cards on a product's page">

| Card | What it's for |
| --- | --- |
| **Product Information** | Details, with the edit and delete buttons (sections 4.1 and 6). |
| **Product Images** | Store pictures. See [Product Images](./productimages.md). |
| **Addons** | Products that come with this one. See [Addons](./addons.md). |
| **Discounts** | Lower prices for a period or for some roles. See [Discounts](./discounts.md). |
| **Options** | Questions buyers answer, such as a size. See [Product Options](./options.md). |
| **Surcharges** | Fees and taxes on top of the price. See [Surcharges](./surcharges.md). |
| **Prices** | **Current Price** and **Change Price** (section 4.2). |
| **Actions** | **Clear unpaid orders?** (section 5). <small>Needs `product:manage`.</small> |

</TableFigure>

**Audit Logs** needs `audit:read`.

### Change the product's details

1. In **Product Information**, click the edit button (<MaterialIcon name="edit" />).

   <Result>The product form opens with the current values, without **Base Price**.</Result>

2. Change the fields you need (Table 3.1) and click **Update Product**.

   <Result>**Product Information** shows the new values.</Result>

### Change the price

1. In **Prices**, click **Change Price**.

   <Result>A **New Price** field appears.</Result>

2. Enter the **New Price** and click **Save New Price**.

   <Result>**Current Price** shows the new amount.</Result>

:::note[Who pays the new price]
Unpaid carts always use the current price, so items already in carts change to it. Paid orders and discounts keep their own price. The new price must differ from the current one.
:::

## Clear a product from unpaid carts

**Clear unpaid orders?** removes the product from every unpaid cart, for example after a pricing mistake. Paid orders aren't touched.

1. In the **Actions** card, click **Clear unpaid orders?**

   <Result>A **Clear unpaid orders?** dialog asks you to confirm.</Result>

2. Click **Clear unpaid orders?** in the dialog.

   <Result>**Order items removed** appears.</Result>

:::caution[Watch out]
Attendees aren't told that the product has gone from their cart.
:::

## Delete a product

<Sidenote title="Deleted, or archived">
Deleting archives the product: its orders and history stay.
</Sidenote>

Deleting takes the product out of the store and every unpaid cart. Paid orders keep it.

1. In **Product Information**, click the delete button (<MaterialIcon name="delete" />).

   <Result>A **Delete product?** dialog opens.</Result>

2. Click **Delete**.

   <Result>A **Deleted / Archived** badge appears, and the page's edit, delete, **Change Price** and add buttons are gone.</Result>

:::caution[Watch out]
A deleted product can't be restored. The category lists it only after **Show Deleted Products** (section 2, step 3).
:::

## Orders and history

<Sidenote title="Grants">
A grant is ConCat's record that an attendee owns what they paid for. A refund can take it away.
</Sidenote>

1. On the product's page, click the **Orders** tab.

   <Result>The orders that include the product are listed under **Filters**: **Paid**, **Unpaid**, **Cancelled**, **With grant**, **No grant**, **Requires Fulfillment**, plus **With stock** and **No stock** if stock is limited.</Result>

2. Click a filter.

   <Result>Only matching orders are listed. Click the filter again to remove it.</Result>

3. Click an order.

   <Result>The order's page opens (see [Orders](../orders/orders.md)).</Result>

4. Click the **Audit Logs** tab.

   <Result>The product's history is listed newest first: edits, price changes and orders, with who did each. It works like a person's audit history ([Managing an attendee's account](../attendees/user-accounts.md), section 4).</Result>

See also [Vouchers](./vouchers.md), [Ticketed products](./tickets.md) and [What attendees see in the store](./store.md).
