---
sidebar_position: 4
hide_table_of_contents: true
textbook: true
---

# Store and products setup

Set up the event store, where attendees buy everything besides badges, such as merchandise, meal tickets or donations.

:::info[In this guide]
Turning on the store, categories, products, and vouchers.
:::

## Turn on the store

The store is on in a new convention: attendees see **Event store** in the homepage sidebar, with every public product you add. To set it up before attendees see it, turn **Enable Event Store** off, and back on when you're ready.

1. Go to **Housekeeping › System › Settings**. On the **Convention** tab, under **Event store**, turn on **Enable Event Store** and click **Save** in that section.

   <Result>An **Event store settings saved** message appears, and attendees see the store in the homepage sidebar, under **Event store**.</Result>

## Categories

Every store product belongs to a category, such as _<Sample>Merchandise</Sample>_ or _<Sample noMarker>Charity</Sample>_.

1. Go to **Housekeeping › Store Management › Store Products**.

   <Result>The **Product Categories** page lists your categories, each with a **View Products** button, and has a **Create New Category** button.</Result>

2. Click **Create New Category**.

   <Result>A **New Category** form opens, with **Name** and a **Hide this category** checkbox.</Result>

3. Enter a **Name** and click **Create Category**.

   <Result>A **New category has been created.** message appears and the category's page opens. **Back to Categories** returns to the list, which now includes it.</Result>

## Products

### Create a product

1. On **Product Categories**, click **View Products** on your category.

   <Result>The page is titled with the category's name, such as **Category: <Sample>General Store</Sample>**, with **Create New Product**, **Category Surcharges** and **Back to Categories** buttons.</Result>

2. Click **Create New Product**, fill in **Name** and **Description**, set **Product visibility** to **Public**, enter the **Base Price**, and click **Create Product**.

   <Result>A **New product has been created** message appears, and the product is listed in the category.</Result>

3. Click the product.

   <Result>The product's page opens, with the cards **Product Information**, **Product Images**, **Addons**, **Discounts**, **Options**, **Surcharges**, **Prices** and **Actions**.</Result>

The store's **New Product** form has the same sections as the badge form ([Registration setup](./registration-setup.md), Table 1.1), except that **Stock Control** has **Maximum purchases per user** instead of **Expires On**, and **Cashier** adds **Deliverable**. **Deliverable** is ticked by default, so staff can mark the product as delivered; untick it for anything they don't hand over, such as a donation.

To change the price later, click **Change Price** in the **Prices** card, enter the **New Price** and click **Save New Price**; **Current Price** updates.

### Images

1. In the **Product Images** card, click the green add button (<MaterialIcon name="add" />). Click **Choose or drop images to upload.** and choose an image file, or drag one onto it.

   <Result>An **Upload Complete!** message appears, and the image is shown in the card.</Result>

2. On the image to show first, open its gear menu and choose **Set Primary** (Figure 3.1).

   <Result>The image is marked **Primary**.</Result>

<Figure
  src="/img/guides/products/product-images-menu.webp"
  alt="The Product Images card with two images: the first marked Primary, the second marked Image with its gear menu open, offering Set Primary, Set Hidden, Set Badge Art and Delete."
  title="An image's gear menu"
  width="642px"
  markers={[
    { n: 1, x: 89.2, y: 3, w: 8.3, h: 10.5 },
    { n: 2, x: 5.8, y: 54.8, w: 9.7, h: 6 },
    { n: 3, x: 39.8, y: 54, w: 8.3, h: 10 },
    { n: 4, x: 39.8, y: 63.8, w: 33.6, h: 33.9 },
  ]}
>

1. The green add button, which adds images.
2. The primary image's badge.
3. Another image's gear menu…
4. …with **Set Primary**. On badge products, **Set Badge Art** chooses the image printed on badges.

</Figure>

A product can have up to 10 images.

### Addons

Addons attach other products, free or at their own price, exactly as for badge products: see [Registration setup](./registration-setup.md), section 3.

### Discounts

A discount lowers the price for a set period, such as an early-bird price.

1. In the **Discounts** card, click the green add button (<MaterialIcon name="add" />).

   <Result>A form shows **Current Price**, **Discounted Price**, **Available From**, **Available Until**, **Limit Discount to Role(s)** and **Name**.</Result>

2. Enter the **Discounted Price**, **Available From** and **Available Until**, and click **Create Discount Price**.

   <Result>The discount is listed as **Active** if its period has started, or **Not yet active** if not.</Result>

:::note[End date and roles]
**Available Until** is required, so every discount ends. **Limit Discount to Role(s)** offers the price only to members of the roles you choose, such as staff.
:::

### Options

Options ask buyers for details such as a size. Create and assign them as for badge products: see [Registration setup](./registration-setup.md), section 2.

### Surcharges

<Sidenote title="Surcharge or tax">
A surcharge's **Type** is **Surcharge** (a fee) or **Tax Rate** (a tax). Either can be a **Fixed Amount** or a **Percentage**.
</Sidenote>

A surcharge is a fee or tax added to the price. Create it once, then assign it to products or a whole category.

1. Go to **Housekeeping › Store Management › Surcharges** and click **Create New Surcharge**.

   <Result>A **Create Surcharge** dialog opens, with **Name**, **Display Name**, **Type**, **Amount Type** and **Amount**.</Result>

2. Fill in the fields and click **Create Surcharge**.

   <Result>A **Created new surcharge.** message appears, and the surcharge's page opens.</Result>

3. Open the product again, click the green add button (<MaterialIcon name="add" />) in its **Surcharges** card, select the surcharge in **Surcharge Search**, and click **Assign Surcharges**.

   <Result>The surcharge is listed in the product's **Surcharges** card.</Result>

4. _(Optional: a whole category)_ On the category's page, click **Category Surcharges**, then **Assign Category Level Surcharge**. Select the surcharge in **Surcharge Search** and click **Assign Surcharges**.

   <Result>The surcharge is listed in the **Category Surcharges** dialog and applies to every product in the category.</Result>

## Vouchers

A voucher is a code worth an amount of money, such as a comped registration or a prize. Give out the code, or issue it straight to attendees' accounts.

1. Go to **Housekeeping › Store Management › Vouchers** and click **Create New Voucher**.

   <Result>A form shows **Voucher Code**, **Display Name**, **Amount**, **Max Uses**, **Available From**, **Available Until**, **Restrict voucher to products** and **Allow Voucher Stacking**.</Result>

2. Enter a **Voucher Code** or click the dice button, enter the **Amount** and **Max Uses** (`-1` for unlimited), and click **Create Voucher**.

   <Result>A **New voucher has been created!** message appears, and the voucher's page opens.</Result>

3. _(Optional)_ To give the voucher to particular attendees, click **Issue** on its page, choose the **User(s)** and click **Issue Voucher**.

   <Result>A message says _Voucher #<Sample>3</Sample> has been issued to <Sample noMarker>2</Sample> user(s)._</Result>

:::tip[Restricting and issuing vouchers]
**Restrict voucher to products** limits what the voucher pays for, such as only badge products. Issuing adds the voucher to each person's current order; **Attempt to fulfill associated orders automatically.** also completes that order if the voucher leaves nothing to pay.
:::

:::tip[In more detail]

- [Products](../products/products.md), [Product Images](../products/productimages.md), [Discounts](../products/discounts.md) and [Surcharges](../products/surcharges.md)
- [Vouchers](../products/vouchers.md)
- [What attendees see in the store](../products/store.md)
  :::

Next: [Users and access](./users-and-access.md), giving your team accounts and access.
