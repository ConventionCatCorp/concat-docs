---
sidebar_position: 4
hide_table_of_contents: true
textbook: true
---

# Store and products setup

This guide sets up your event store: the categories that group your products, the products themselves with their images, addons, discounts, options and surcharges, and the vouchers that pay for them. Store products are everything you sell apart from badges, such as merchandise, meal tickets or donations.

:::info[In this guide]
Turning on the store (section 1), categories (section 2), products (section 3), and vouchers (section 4).
:::

## Turn on the store

The store is hidden from attendees until you turn it on. You can build it first and turn it on when it's ready.

1. Go to **Housekeeping › System › Settings**. On the **Convention** tab, under **Event store**, turn on **Enable Event Store**, then click **Save** in that section.

   <Result>An **Event store settings saved** message appears. Attendees now see the store in the homepage sidebar, under **Event store**.</Result>

## Categories

<Sidenote title="Where badges went">
Badge products used to be a store category. They now have their own module: see [Registration setup](./registration-setup.md).
</Sidenote>

Every store product belongs to a category, such as *Merchandise* or *Charity*.

1. Go to **Housekeeping › Store Management › Store Products**.

   <Result>The **Product Categories** page lists your categories, with a **Create New Category** button. Each category has a **View Products** button.</Result>

2. Click **Create New Category**.

   <Result>A **New Category** form opens, with a **Name** field and a **Hide this category** checkbox.</Result>

3. Enter a **Name** and click **Create Category**.

   <Result>A **New category has been created.** message appears. Click **Back to Categories** to see it in the list.</Result>

## Products

### Create a product

1. On **Product Categories**, click **View Products** on your category.

   <Result>The page is titled **Category:** and the category's name, with **Create New Product**, **Category Surcharges** and **Back to Categories** buttons.</Result>

2. Click **Create New Product**, fill in **Name** and **Description**, set **Product visibility** to **Public**, and enter the **Base Price**. Then click **Create Product**.

   <Result>A **New product has been created** message appears, and the product is listed in the category.</Result>

3. Click the product.

   <Result>The product's page opens, with the cards **Product Information**, **Product Images**, **Addons**, **Discounts**, **Options**, **Surcharges**, **Prices** and **Actions**.</Result>

The store's **New Product** form has the same sections as the badge form in [Registration setup](./registration-setup.md), Table 1.1. It adds two fields: **Maximum purchases per user**, under **Stock Control**, and **Deliverable**, under **Cashier**. Tick **Deliverable** for physical goods that staff hand over and mark as delivered.

To change the price later, use the **Prices** card: click **Change Price**, enter the **New Price** and click **Save New Price**. The **Current Price** then shows the new amount.

### Images

1. In the **Product Images** card, click the green **Create** button (<i className="material-symbols-outlined">add</i>) and choose an image file.

   <Result>An **Upload Complete!** message appears, and the image is shown in the card.</Result>

2. On the image you want shown first, open its gear menu and choose **Set Primary**.

   <Result>The image is marked **Primary**.</Result>

A product can have up to 10 images.

### Addons

Addons attach other products to this one, free or at their own price. They work exactly as for badge products: see [Registration setup](./registration-setup.md), section 3.

### Discounts

A discount lowers the price for a set period, for example an early-bird price.

1. In the **Discounts** card, click the green **Add** button.

   <Result>A form shows **Current Price**, **Discounted Price**, **Available From**, **Available Until**, **Limit Discount to Role(s)** and **Name**.</Result>

2. Enter the **Discounted Price**, **Available From** and **Available Until**, then click **Create Discount Price**.

   <Result>The discount is listed, marked **Active** if its period has started or **Not yet active** if it hasn't.</Result>

:::note
**Available Until** is required, so every discount has an end date. **Limit Discount to Role(s)** offers the price only to members of the roles you choose, such as staff.
:::

### Options

Options ask buyers for details such as a size. They're assigned exactly as for badge products: see [Registration setup](./registration-setup.md), section 2, and [Product Options](../products/options.md).

### Surcharges

<Sidenote title="Surcharge or tax">
A surcharge's **Type** is either **Surcharge**, a fee, or **Tax Rate**, a tax. Either can be a **Fixed Amount** or a **Percentage**.
</Sidenote>

A surcharge is a fee or tax added on top of the price. You create it once, then assign it to products, or to a whole category.

1. Go to **Housekeeping › Store Management › Surcharges** and click **Create New Surcharge**.

   <Result>A **Create Surcharge** dialog opens, with **Name**, **Display Name**, **Type**, **Amount Type** and **Amount**.</Result>

2. Fill in the fields and click **Create Surcharge**.

   <Result>A **Created new surcharge.** message appears, and the new surcharge's own page opens.</Result>

3. Open the product again. In its **Surcharges** card, click the green **Add** button, select the surcharge in **Surcharge Search**, and click **Assign Surcharges**.

   <Result>The surcharge is listed in the product's **Surcharges** card.</Result>

4. *(Optional: a whole category)* On the category's page (section 3, step 1), click **Category Surcharges**, then **Assign Category Level Surcharge**. Select the surcharge in **Surcharge Search** and click **Assign Surcharges**.

   <Result>The surcharge is listed in the **Category Surcharges** dialog, and applies to every product in the category.</Result>

## Vouchers

A voucher is a code worth an amount of money, such as a comped registration or a prize. You can give out the code, or issue the voucher straight to attendees' accounts.

1. Go to **Housekeeping › Store Management › Vouchers** and click **Create New Voucher**.

   <Result>A form shows **Voucher Code**, **Display Name**, **Amount**, **Max Uses**, **Available From**, **Available Until**, **Restrict voucher to products** and **Allow Voucher Stacking**.</Result>

2. Enter a **Voucher Code**, or click the dice button (**Generate random code**). Enter the **Amount** and **Max Uses**: use `-1` for unlimited. Then click **Create Voucher**.

   <Result>A **New voucher has been created!** message appears, and the new voucher's page opens.</Result>

3. *(Optional)* To give the voucher to particular attendees, click **Issue** on the voucher's page. Choose the **User(s)**, then click **Issue Voucher**.

   <Result>A message says *Voucher #… has been issued to … user(s).*</Result>

:::tip
**Restrict voucher to products** limits what the voucher pays for, for example only badge products. **Attempt to fulfill associated orders automatically.**, when issuing, applies the voucher to the attendees' unpaid orders.
:::

:::tip[In more detail]
The full guides behind this page:

- [Products](../products/products.md), [Product Images](../products/productimages.md), [Discounts](../products/discounts.md) and [Surcharges](../products/surcharges.md)
- [Vouchers](../products/vouchers.md)
- [What attendees see in the store](../products/store.md)
:::

The next guide, [Users and access](./users-and-access.md), creates accounts for your team and gives them the right access.
