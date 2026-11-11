---
sidebar_position: 10
hide_table_of_contents: true
textbook: true
---

# What attendees see in the store

This guide shows your event store from the attendee's side: how they browse it, what a product's page tells them, and what stops them buying. Follow the steps signed in as an attendee to check your store before you open it.

:::info[In this guide]
Turning the store on (section 1), the store page (section 2), a product's page (section 3), eligibility, limits and exclusions (section 4), and adding a product to the cart (section 5).
:::

## Turn the store on

<Sidenote title="Who can do this">
These settings need the `system:settings:update` permission, which the default *admin* role has.
</Sidenote>

The store is hidden from attendees until you turn it on. While it's off, the **Event store** item is missing from the homepage sidebar, and the store's address sends attendees back to the homepage. Your products still exist in Housekeeping.

1. Go to **Housekeeping › System › Settings**. On the **Convention** tab, under **Event store**, turn on **Enable Event Store**, then click **Save** in that section.

   <Result>An **Event store settings saved** message appears. Attendees now see **Event store** in the homepage sidebar, under the **Event store** heading.</Result>

2. *(Optional)* To make attendees pick a category before seeing any products, turn on **Event Store: Hide 'All Products' Tab** in the same section and click **Save**.

   <Result>An **Event store settings saved** message appears. The setting can only be turned on while the store is enabled.</Result>

## The store page

1. As an attendee, click **Event store** in the homepage sidebar.

   <Result>The store opens under the breadcrumb **Event Store**. A **Categories** card lists **All Products** and each of your visible categories. Beside it, each product has a card with its primary image, name, the start of its description, its price and a **View Product** button.</Result>

2. Click a category in the **Categories** card.

   <Result>Only that category's products are shown, and the breadcrumb adds the category's name.</Result>

Table 2.1 lists what decides whether a product appears.

<TableFigure title="Which products the store lists">

| A product is listed if | Set in |
| --- | --- |
| Its **Product visibility** is **Public**. <small>An **Unlisted** product only opens from its link; a **Hidden** one never does.</small> | The product form ([Products](./products.md), Table 3.1) |
| Its category isn't hidden. | **Hide Category** ([Products](./products.md), section 1) |
| **Available From** has passed, and **Available Until** hasn't. | The product form |
| The attendee has a role on the **Product Role Whitelist**, if there is one, and none on the **Product Role Blacklist**. | The product form |
| It hasn't been deleted. | **Product Information** ([Products](./products.md), section 6) |

</TableFigure>

A product with an age limit is still listed, with an **Age Restricted Product** badge.

When nothing can be listed, the store says *There are no items available.* and *It seems there isn't anything you can purchase right now. Why not check back later?* With **All Products** hidden, the store first shows *Welcome to the … Store!*, with your convention's short name, and asks attendees to browse the categories on the left.

## A product's page

1. On a product's card, click **View Product**.

   <Result>The product's page opens under the breadcrumb **Event Store** › the category › the product. It shows the product's images (as a slideshow if there are several), its name and category badge, **Price**, **Includes** for any complimentary addons, the product's options, a **Quantity** field, an **Add to cart** button and the **Description**.</Result>

The **Quantity** field is left out for ticketed products, and for products limited to one per person. A product whose stock has run out shows a disabled **Sold Out!** button instead of **Add to cart**.

A product in a Gatekeeping silo first asks attendees to enter a draw, with **Enter raffle**; see [Gatekeeping](../registration/raffle.md).

## Eligibility, limits and exclusions

A product's page tells attendees when something limits their purchase. Table 4.1 lists the messages and where each comes from.

<TableFigure title="Messages on a product's page">

| Message | Shown when |
| --- | --- |
| **Age Restricted Product** badge. Its help says, for example, *You must be at least* 18 *on* the convention's start date *to purchase this product.* | **Minimum Purchase Age** or **Maximum Purchase Age** is set. <small>Someone outside the range can't add it to their cart.</small> |
| *To purchase this product, you must have already purchased one of the following:* and the products | **Restrict product to grants** is set, and the attendee has none of those products. **Add to cart** is disabled. |
| *You are eligible to purchase this product because you have purchased the following product:* and the product | **Restrict product to grants** is set, and the attendee has one of them. |
| *There is a limit of* n *per customer for this product.* | **Maximum purchases per user** is set. <small>**Quantity** can't go above what's left for them.</small> |
| *You have already reached the purchase limit for this product.* | The attendee has bought the maximum. **Add to cart** is disabled. |
| *This product cannot be combined with:* and the products | The product excludes other products. |
| *You cannot purchase this product because you have already purchased, or have in your cart, the following product:* and the product | The attendee has one of the excluded products. **Add to cart** is disabled. |
| *This is a Ticketed Product.* | The product is ticketed; see [Ticketed products](./tickets.md). |
| *You've already purchased one of this product.* | The attendee already has a ticket for this ticketed product. |

</TableFigure>

The product form has no field for exclusions, so they can't be set up from Housekeeping.

## Add a product to the cart

1. On the product's page, answer the product's options, set the **Quantity**, and click **Add to cart**.

   <Result>**Product added to cart!** appears, with *… has been added to your cart.* and the buttons **View cart** and **Back to Product**. If the product has extra-purchase addons, a **Product addons** card lists them.</Result>

2. Click **View cart**.

   <Result>The **Checkout** page opens with the product in your cart.</Result>

:::note[Free products]
When the product is free and the attendee's cart has nothing to pay, the button reads **Complete order** instead. Clicking it completes the order straight away: **Order completed!** appears, with *Your order for … has been completed.* and a **View transaction history** button.
:::

Paying for the order is covered in [Checkout and payment](../orders/checkout.md).
