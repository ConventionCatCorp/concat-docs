---
sidebar_position: 1
hide_table_of_contents: true
textbook: true
---

# Products

This guide covers the products you sell in your event store: the categories that group them, the product form field by field, and how to change, archive and follow a product once it's on sale. The other guides in this section cover each card on a product's page.

:::info[In this guide]
Categories (section 1), the product list (section 2), creating a product (section 3), the product page and changing a product (section 4), clearing a product from unpaid carts (section 5), deleting a product (section 6), and a product's orders and history (section 7).
:::

## Categories

<Sidenote title="Who can do this">
The **Store Products** menu item needs the `product:read` permission. Creating, hiding and deleting categories needs `product:category:manage`, and creating or changing products needs `product:manage`. The default *admin* and *productEditor* roles have all three.
</Sidenote>

Every store product belongs to a category, such as *Merchandise* or *Charity*. In the event store, attendees browse your products by category (see [What attendees see in the store](./store.md)). Badge products aren't here: they have their own module, **Housekeeping › Registration › Badge Products** (see [Registration setup](../quickstart/registration-setup.md)). [Start here](../quickstart/start-here.md), section 2, shows how to switch to the Store Management menu.

1. Go to **Housekeeping › Store Management › Store Products**.

   <Result>The **Product Categories** page opens, with a **Create New Category** button. Each category is a card showing its name and ID, a **General Products** badge, a **View Products** button and a **…** menu. A box headed **Looking for the Registration category?** has a **Go to Badge Products** button. The address ends in `/housekeeping/store/products`.</Result>

### Create a category

1. Click **Create New Category**.

   <Result>A **New Category** form opens, with a **Name** field and a **Hide this category** checkbox. A **Back to Categories** button is above it.</Result>

2. Enter a **Name**. Tick **Hide this category** if attendees shouldn't see the category and its products yet. Then click **Create Category**.

   <Result>A **New category has been created.** message appears, and the category's page opens, titled **Category:** and the name. Click **Back to Categories** to see it in the list.</Result>

### Hide or show a category

A hidden category, with every product in it, is left out of the event store. You can build a category while it's hidden and show it when it's ready.

1. On **Product Categories**, open the category's **…** menu and choose **Hide Category**.

   <Result>The category's card shows a **Hidden** badge. The event store no longer lists the category or its products.</Result>

2. To show it again, open the **…** menu and choose **Show Category**.

   <Result>The **Hidden** badge is gone, and the category is back in the event store.</Result>

### Delete a category

A category can only go once its products are deleted with it or moved to another category.

1. Open the category's **…** menu and choose **Delete Category**.

   <Result>The card changes to **Delete Category:** and the category's name, with the warning *Deleting a category is a PERMANENT action and cannot be undone.*, a **Delete all existing items** checkbox, and a **New Category** field.</Result>

2. Either tick **Delete all existing items**, or choose in **New Category** the category its products should move to. Then click **Delete Category**.

   <Result>The category is no longer listed on **Product Categories**. If you chose a new category, the products are now listed in it.</Result>

:::caution[Watch out]
There's no confirmation once you click **Delete Category**, and a deleted category can't be restored. **Delete all existing items** deletes every product in the category.
:::

With the `audit:read` permission, the **…** menu also has **View History**, which opens the category's audit log.

## The product list

Each category has a page that lists its products in a table. Under each product's name are the status badges in Table 2.1.

1. On **Product Categories**, click **View Products** on the category.

   <Result>The page is titled **Category:** and the category's name, with the buttons **Create New Product**, **Category Surcharges** and **Back to Categories**. Below them is a table with the columns **ID**, **Name** and **Description**. A category with no products shows **No Products Here!**</Result>

2. Type part of a product's name or description in the search box (*Search...*) above the table.

   <Result>Only the matching products are listed.</Result>

3. *(If the category has deleted products)* Click **Show Deleted Products** below the table.

   <Result>Deleted products are listed too, marked **Deleted / Archived**. The button now reads **Hide Deleted Products**.</Result>

<TableFigure title="Product status badges">

| Badge | What it means |
| --- | --- |
| **Public / Visible**, **Unlisted** or **Hidden** | The product's **Product visibility** (Table 3.1). |
| **Deleted / Archived** | The product has been deleted (section 6). |
| **In Stock:** *x*/*y* **Available** | Stock is limited, and *x* of *y* are left. |
| **Out of Stock** | Limited stock is used up. <small>**Out of Stock - Exceeded by** *n* means *n* more were sold than the limit.</small> |
| **Limit per user:** *n* | **Maximum purchases per user** is set. |
| **Role Restriction**, **Product Role Blacklist** | **Product Role Whitelist** or **Product Role Blacklist** is set. |
| **Grant Restriction** | **Restrict product to grants** is set. |
| **Not Yet Available** | **Available From** is in the future. |
| **Expired** | **Available Until** has passed. |
| **Age Restricted:** and the ages | A minimum or maximum purchase age is set. |
| **Addon Stock:** *x*/*y* **Available**, **Addon Out of Stock** | A complimentary addon has limited stock (see [Addons](./addons.md)). |
| **Unused Stock:** *n* | *Product is using stock, but has no active grant.* <small>Click it to see the orders concerned.</small> |

</TableFigure>

## Create a product

<Sidenote title="Fields with a checkbox">
**Maximum purchases per user**, **Limit Available Stock**, **Product Label Print Design** and **Available Until** each have a checkbox in front. The field stays off until you tick it.
</Sidenote>

1. On the category's page (section 2, step 1), click **Create New Product**.

   <Result>A **New Product** form opens, with a **Back to Products** button above it. Below the name and description, the form has the sections **Pricing**, **Stock Control**, **Cashier** and **Restrictions**.</Result>

2. Fill in the fields in Table 3.1. Only **Name** and **Base Price** are required; leave the others as they are if you don't need them. Then click **Create Product**.

   <Result>A **New product has been created** message appears, the form closes, and the product is listed in the category's table.</Result>

<TableFigure title="The New Product form for store products">

| Field | What it does |
| --- | --- |
| **Name** | The product's name in Housekeeping. Attendees see it too, unless you give a **Display Name**. |
| **Display Name** (Optional) | The name attendees see, if it should differ from **Name**. |
| **Description** | Shown on the product's card and page in the store. <small>Markdown formatting is applied.</small> |
| **Product visibility** | **Public**: listed in the store for anyone who meets the restrictions. **Unlisted**: can be bought by anyone who meets the restrictions, but isn't listed in the store; attendees need the product's link. **Hidden**: can't be bought, and is only given by automated means, such as a complimentary addon. |
| **Base Price** | The price before discounts, options and surcharges. <small>**Pricing** section. Only on this form; change it later with **Change Price** (section 4.2).</small> |
| **Pass Platform Fee to Customer** | Adds ConCat's platform fee on top of the price, instead of taking it from what you receive. <small>**Pricing** section. See [Surcharges](./surcharges.md), section 6.</small> |
| **Maximum purchases per user** | The most one attendee can buy. <small>**Stock Control** section.</small> |
| **Limit Available Stock** | How many can be sold in total. <small>**Stock Control** section. *Maximum stock can only be decreased by the remaining stock available.*</small> |
| **Product Label Print Design** | A badge design to print as a claim ticket for each one bought. <small>**Cashier** section. See [Claim Tickets](./claimtickets.md).</small> |
| **Deliverable** | Ticked by default. Lets cashiers and admins mark the product as delivered; use it for physical goods. <small>**Cashier** section.</small> |
| **Available From** | When the product goes on sale. It starts at the beginning of today. <small>**Restrictions** section.</small> |
| **Available Until** | When the product comes off sale. <small>**Restrictions** section.</small> |
| **Minimum Purchase Age**, **Maximum Purchase Age** (Optional) | The age range allowed to buy, counted on the convention's start date. <small>**Restrictions** section.</small> |
| **Product Role Whitelist** | Only people with at least one of these roles see the product. <small>**Restrictions** section. Needs `system:permission:read`.</small> |
| **Product Role Blacklist** | People with any of these roles don't see the product, even if they're on the whitelist. <small>**Restrictions** section. Needs `system:permission:read`.</small> |
| **Restrict product to grants** | Only people who have bought, or have in their cart, one of the chosen products can buy this one. <small>**Restrictions** section.</small> |

</TableFigure>

## The product page

Everything about a product after it's created is on its own page.

1. On the category's page, click the product's name.

   <Result>The page is titled **Product:** and the product's name and ID, followed by its status badges and the tabs **Product**, **Orders** and **Audit Logs**. The **Product** tab has the cards in Table 4.1. The address ends in `/housekeeping/store/products/` and the product's ID.</Result>

<TableFigure title="The cards on a product's page">

| Card | What it's for |
| --- | --- |
| **Product Information** | The product's details, with the edit and delete buttons (sections 4.1 and 6). <small>Shows **Name**, **Display Name**, **Description**, the purchase ages, **Category** and **Platform Fee**.</small> |
| **Product Images** | The pictures shown in the store. See [Product Images](./productimages.md). |
| **Addons** | Other products that come with this one. See [Addons](./addons.md). |
| **Discounts** | Lower prices for a set period or for some roles. See [Discounts](./discounts.md). |
| **Options** | Questions buyers answer, such as a size. See [Product Options](./options.md). |
| **Surcharges** | Fees and taxes added to the price. See [Surcharges](./surcharges.md). |
| **Prices** | The **Current Price**, with **Change Price** (section 4.2). |
| **Actions** | **Clear unpaid orders?** (section 5). <small>Shown only with `product:manage`.</small> |

</TableFigure>

The **Audit Logs** tab is shown only with the `audit:read` permission.

### Change the product's details

1. In **Product Information**, click the edit button (<MaterialIcon name="edit" />).

   <Result>The card shows the product form filled in with the current values. It has no **Base Price** field, and its button reads **Update Product**.</Result>

2. Change the fields you need (Table 3.1), then click **Update Product**.

   <Result>The form closes, and **Product Information** shows the new values.</Result>

### Change the price

1. In **Prices**, click **Change Price**.

   <Result>The card shows a **New Price** field beside the **Current Price**, with **Save New Price** and **Cancel** buttons.</Result>

2. Enter the **New Price** and click **Save New Price**.

   <Result>The card shows the new amount under **Current Price**.</Result>

:::note[Who pays the new price]
Unpaid carts always use the current price, so items already in a cart change to the new price. Paid orders keep the price that was paid. A discount keeps its own price. The new price must differ from the current one.
:::

## Clear a product from unpaid carts

**Clear unpaid orders?** removes this product from every cart that hasn't been paid yet, for example after a pricing mistake. Paid orders aren't touched.

1. In the **Actions** card, click **Clear unpaid orders?**

   <Result>A **Clear unpaid orders?** dialog asks *Are you sure you want to remove this product from all carts in which the payment has not yet been completed?*</Result>

2. Click **Clear unpaid orders?** in the dialog.

   <Result>An **Order items removed** message appears.</Result>

:::caution[Watch out]
Attendees aren't told that the product has gone from their cart.
:::

## Delete a product

<Sidenote title="Deleted, or archived">
Deleting doesn't erase a product: it archives it. The product comes off sale, and its orders and history stay.
</Sidenote>

Deleting a product takes it out of the store and out of every unpaid cart. Paid orders keep it.

1. In **Product Information**, click the delete button (<MaterialIcon name="delete" />).

   <Result>A **Delete product?** dialog opens, with **Delete** and **Cancel** buttons.</Result>

2. Click **Delete**.

   <Result>The product's page shows a **Deleted / Archived** badge. The edit, delete and **Change Price** buttons are gone, and so are the add buttons on the other cards.</Result>

:::caution[Watch out]
There's no way to restore a deleted product. In the category's table, it's only listed after you click **Show Deleted Products** (section 2, step 3).
:::

## Orders and history

<Sidenote title="Grants">
A grant is ConCat's record that an attendee owns what they paid for. A refund can take it away again.
</Sidenote>

1. On the product's page, click the **Orders** tab.

   <Result>The orders that include this product are listed, each as **Order #** *n* — *k* **Item(s)**, with status badges. Above the list is a **Filters** row: **Paid**, **Unpaid**, **Cancelled**, **With grant**, **No grant** and **Requires Fulfillment**, plus **With stock** and **No stock** if the stock is limited.</Result>

2. Click a filter.

   <Result>Only the matching orders are listed, and the header shows how many **Result(s)** there are. Click the filter again to remove it.</Result>

3. Click an order.

   <Result>The order's page opens, as in [Orders](../orders/orders.md).</Result>

4. Click the **Audit Logs** tab.

   <Result>The changes recorded for this product are listed, such as price changes and images added.</Result>

The other guides in this section cover [Vouchers](./vouchers.md), [Claim Tickets](./claimtickets.md), [Ticketed products](./tickets.md) and [What attendees see in the store](./store.md).
