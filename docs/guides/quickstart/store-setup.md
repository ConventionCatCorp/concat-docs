---
sidebar_position: 4
hide_table_of_contents: true
textbook: true
---

# Store and products setup

Set up your event store: categories, products and their extras, and vouchers. Store products are everything you sell besides badges, such as merchandise, meal tickets or donations.

:::info[In this guide]
Turning on the store, categories, products, and vouchers.
:::

## Turn on the store

The store is hidden from attendees until you turn it on, so you can build it first.

1. Go to **Housekeeping › System › Settings**. On the **Convention** tab, under **Event store**, turn on **Enable Event Store** and click **Save** in that section.

   <Result>An **Event store settings saved** message appears, and attendees see the store in the homepage sidebar, under **Event store**.</Result>

## Categories

<Sidenote title="Where badges went">
Badge products are no longer a store category. They have their own module: see [Registration setup](./registration-setup.md).
</Sidenote>

Every store product belongs to a category, such as *Merchandise* or *Charity*.

1. Go to **Housekeeping › Store Management › Store Products**.

   <Result>The **Product Categories** page lists your categories, each with a **View Products** button, and has a **Create New Category** button.</Result>

2. Click **Create New Category**.

   <Result>A **New Category** form opens, with **Name** and a **Hide this category** checkbox.</Result>

3. Enter a **Name** and click **Create Category**.

   <Result>A **New category has been created.** message appears and the category's page opens. **Back to Categories** returns to the list, which now includes it.</Result>

## Products

### Create a product

1. On **Product Categories**, click **View Products** on your category.

   <Result>The page is titled **Category:** and the category's name, with **Create New Product**, **Category Surcharges** and **Back to Categories** buttons.</Result>

2. Click **Create New Product**, fill in **Name** and **Description**, set **Product visibility** to **Public**, enter the **Base Price**, and click **Create Product**.

   <Result>A **New product has been created** message appears, and the product is listed in the category.</Result>

3. Click the product.

   <Result>The product's page opens, with the cards **Product Information**, **Product Images**, **Addons**, **Discounts**, **Options**, **Surcharges**, **Prices** and **Actions**.</Result>

The store's **New Product** form has the same sections as the badge form ([Registration setup](./registration-setup.md), Table 1.1), plus **Maximum purchases per user** under **Stock Control** and **Deliverable** under **Cashier**. Tick **Deliverable** for physical goods that staff hand over and mark as delivered.

To change the price later, click **Change Price** in the **Prices** card, enter the **New Price** and click **Save New Price**; **Current Price** updates.

### Images

1. In the **Product Images** card, click the green **Create** button (<i className="material-symbols-outlined">add</i>). Click **Choose or drop images to upload.** and choose an image file, or drag one onto it.

   <Result>An **Upload Complete!** message appears, and the image is shown in the card.</Result>

2. On the image to show first, open its gear menu and choose **Set Primary** (Figure 3.1).

   <Result>The image is marked **Primary**.</Result>

<Figure
  src="/img/guides/products/product-images-menu.webp"
  alt="The Product Images card with two images: the first marked Primary, the second marked Image with its gear menu open, offering Set Primary, Set Hidden, Set Badge Art and Delete."
  title="An image's gear menu"
  width="642px"
  markers={[
    { n: 1, x: 87.9, y: 4.6, w: 8.3, h: 10.5 },
    { n: 2, x: 5.8, y: 55.9, w: 9.7, h: 6 },
    { n: 3, x: 39.3, y: 55.3, w: 8.3, h: 15.8 },
    { n: 4, x: 39.3, y: 64.3, w: 33.6, h: 33.9 },
  ]}
>

1. The green **Create** button, which adds images.
2. The primary image's badge.
3. Another image's gear menu…
4. …with **Set Primary**. **Set Badge Art** appears only on badge products.

</Figure>

A product can have up to 10 images.

### Addons

Addons attach other products, free or at their own price, exactly as for badge products: see [Registration setup](./registration-setup.md), section 3.

### Discounts

A discount lowers the price for a set period, such as an early-bird price.

1. In the **Discounts** card, click the green **Add** button.

   <Result>A form shows **Current Price**, **Discounted Price**, **Available From**, **Available Until**, **Limit Discount to Role(s)** and **Name**.</Result>

2. Enter the **Discounted Price**, **Available From** and **Available Until**, and click **Create Discount Price**.

   <Result>The discount is listed as **Active** if its period has started, or **Not yet active** if not.</Result>

:::note
**Available Until** is required, so every discount ends. **Limit Discount to Role(s)** offers the price only to members of the roles you choose, such as staff.
:::

### Options

Options ask buyers for details such as a size, and are assigned as for badge products: see [Registration setup](./registration-setup.md), section 2, and [Product Options](../products/options.md).

### Surcharges

<Sidenote title="Surcharge or tax">
A surcharge's **Type** is **Surcharge** (a fee) or **Tax Rate** (a tax). Either can be a **Fixed Amount** or a **Percentage**.
</Sidenote>

A surcharge is a fee or tax added to the price. Create it once, then assign it to products or a whole category.

1. Go to **Housekeeping › Store Management › Surcharges** and click **Create New Surcharge**.

   <Result>A **Create Surcharge** dialog opens, with **Name**, **Display Name**, **Type**, **Amount Type** and **Amount**.</Result>

2. Fill in the fields and click **Create Surcharge**.

   <Result>A **Created new surcharge.** message appears, and the surcharge's page opens.</Result>

3. Open the product again, click the green **Add** button in its **Surcharges** card, select the surcharge in **Surcharge Search**, and click **Assign Surcharges**.

   <Result>The surcharge is listed in the product's **Surcharges** card.</Result>

4. *(Optional: a whole category)* On the category's page (section 3, step 1), click **Category Surcharges**, then **Assign Category Level Surcharge**. Select the surcharge in **Surcharge Search** and click **Assign Surcharges**.

   <Result>The surcharge is listed in the **Category Surcharges** dialog and applies to every product in the category.</Result>

## Vouchers

A voucher is a code worth an amount of money, such as a comped registration or a prize. Give out the code, or issue it straight to attendees' accounts.

1. Go to **Housekeeping › Store Management › Vouchers** and click **Create New Voucher**.

   <Result>A form shows **Voucher Code**, **Display Name**, **Amount**, **Max Uses**, **Available From**, **Available Until**, **Restrict voucher to products** and **Allow Voucher Stacking**.</Result>

2. Enter a **Voucher Code** or click the dice button (**Generate random code**), enter the **Amount** and **Max Uses** (`-1` for unlimited), and click **Create Voucher**.

   <Result>A **New voucher has been created!** message appears, and the voucher's page opens.</Result>

3. *(Optional)* To give the voucher to particular attendees, click **Issue** on its page, choose the **User(s)** and click **Issue Voucher**.

   <Result>A message says *Voucher #… has been issued to … user(s).*</Result>

:::tip
**Restrict voucher to products** limits what the voucher pays for, such as only badge products. When issuing, **Attempt to fulfill associated orders automatically.** applies the voucher to the attendees' unpaid orders.
:::

:::tip[In more detail]
- [Products](../products/products.md), [Product Images](../products/productimages.md), [Discounts](../products/discounts.md) and [Surcharges](../products/surcharges.md)
- [Vouchers](../products/vouchers.md)
- [What attendees see in the store](../products/store.md)
:::

Next: [Users and access](./users-and-access.md), giving your team accounts and access.
