---
sidebar_position: 10
hide_table_of_contents: true
textbook: true
---

# What attendees see in the store

Sign in as an attendee to check your event store before you open it: browsing, product pages and what stops a purchase.

:::info[In this guide]
Turning the store on; the store page; a product's page; eligibility, limits and exclusions; and adding to the cart.
:::

## Turn the store on

<Sidenote title="Who can do this">
These settings need `system:settings:update`, which the default *admin* role has.
</Sidenote>

The store is hidden until you turn it on: **Event store** is missing from the homepage sidebar, and the store's address sends attendees back to the homepage.

1. Go to **Housekeeping › System › Settings**. On the **Convention** tab, under **Event store**, turn on **Enable Event Store** and click **Save** in that section.

   <Result>**Event store settings saved** appears, and attendees see **Event store** in the homepage sidebar.</Result>

2. *(Optional)* To make attendees pick a category before seeing products, turn on **Event Store: Hide 'All Products' Tab** and click **Save**.

   <Result>**Event store settings saved** appears. This setting can only be turned on while the store is enabled.</Result>

## The store page

1. As an attendee, click **Event store** in the homepage sidebar.

   <Result>The store shows a **Categories** card (**All Products** and each visible category) and a card for each product, with **View Product**.</Result>

2. Click a category in the **Categories** card.

   <Result>Only that category's products are shown.</Result>

Table 2.1 lists what decides whether a product appears.

<TableFigure title="Which products the store lists">

| A product is listed if | Set in |
| --- | --- |
| Its **Product visibility** is **Public**. <small>An **Unlisted** product only opens from its link; a **Hidden** one never does.</small> | The product form ([Products](./products.md), Table 3.1) |
| Its category isn't hidden. | **Hide Category** ([Products](./products.md), section 1) |
| It's after **Available From** and before **Available Until**. | The product form |
| The attendee has a role on the **Product Role Whitelist**, if there is one, and none on the **Product Role Blacklist**. | The product form |
| It isn't deleted. | **Product Information** ([Products](./products.md), section 6) |

</TableFigure>

A product with an age limit is still listed, with an **Age Restricted Product** badge.

With nothing to list, the store says *There are no items available.* With **All Products** hidden, it first shows *Welcome to the … Store!* and asks attendees to browse the categories.

## A product's page

1. On a product's card, click **View Product**.

   <Result>The product's page shows its images, **Price**, any **Includes**, the options, **Quantity**, **Add to cart** and the **Description**.</Result>

Ticketed products and products limited to one per person have no **Quantity** field. A sold-out product shows a disabled **Sold Out!** button instead of **Add to cart**.

A product in a Gatekeeping silo first asks attendees to enter a draw with **Enter raffle**; see [Gatekeeping](../registration/raffle.md).

## Eligibility, limits and exclusions

Table 4.1 lists the messages a product's page shows when something limits a purchase.

<TableFigure title="Messages on a product's page">

| Message | Shown when |
| --- | --- |
| **Age Restricted Product** badge. Its help says, for example, *You must be at least* 18 *on* the convention's start date *to purchase this product.* | **Minimum Purchase Age** or **Maximum Purchase Age** is set. <small>Someone outside the range can't add it to their cart.</small> |
| *To purchase this product, you must have already purchased one of the following:* and the products | **Restrict product to grants** is set and the attendee has none of them. **Add to cart** is disabled. |
| *You are eligible to purchase this product because you have purchased the following product:* and the product | **Restrict product to grants** is set and the attendee has one of them. |
| *There is a limit of* n *per customer for this product.* | **Maximum purchases per user** is set. <small>**Quantity** can't go above what's left for them.</small> |
| *You have already reached the purchase limit for this product.* | The attendee has bought the maximum. **Add to cart** is disabled. |
| *This product cannot be combined with:* and the products | The product excludes other products. |
| *You cannot purchase this product because you have already purchased, or have in your cart, the following product:* and the product | The attendee has an excluded product. **Add to cart** is disabled. |
| *This is a Ticketed Product.* | The product is ticketed; see [Ticketed products](./tickets.md). |
| *You've already purchased one of this product.* | The attendee already has this ticket. |

</TableFigure>

Exclusions can't be set up from Housekeeping: the product form has no field for them.

## Add a product to the cart

1. On the product's page, answer the options, set the **Quantity** and click **Add to cart**.

   <Result>**Product added to cart!** appears, with **View cart**. Any extra-purchase addons are listed in a **Product addons** card.</Result>

2. Click **View cart**.

   <Result>The **Checkout** page opens with the product in your cart.</Result>

:::note[Free products]
When the product is free and the cart has nothing to pay, the button reads **Complete order** and completes the order at once: **Order completed!** appears, with a **View transaction history** button.
:::

Paying for the order is covered in [Checkout and payment](../orders/checkout.md).
