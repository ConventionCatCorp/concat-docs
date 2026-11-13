---
sidebar_position: 3
hide_table_of_contents: true
textbook: true
---

# Addons

An addon attaches another product to this one, free or as an extra purchase, such as a free T-shirt with a sponsor badge.

:::info[In this guide]
The two kinds of addon, which products can be addons, adding an addon, removing one, and what attendees see.
:::

## How addons work

<Sidenote title="Addons are products too">
An addon points to another product, which keeps its own price, stock and options. Create that product first.
</Sidenote>

**Add-on is complimentary and should be provided free** sets the addon's kind when you add it.

<TableFigure title="The two kinds of addon">

| Kind | Badge in the Addons card | What happens |
| --- | --- | --- |
| Complimentary | **Included / Free** | Added free to the cart whenever the product is. The product's page lists it under **Includes** and asks its options there. |
| Extra purchase | **Not Included / Extra Purchase** | Offered under **Product addons**, at its own price, once the product is in the cart. Only if its **Product visibility** is **Public**. |

</TableFigure>

For complimentary addons:

- **Hidden in the cart:** **Add-on is hidden and should not appear in users' carts** leaves the free item out of the attendee's cart. Staff still see it in Housekeeping and the Cashier UI.
- **Stock:** it uses its own product's stock. When that runs out, the product it comes with shows as sold out. A product with a complimentary addon can only be bought one at a time.

Each addon in the card also has a stock badge: **In Stock / Unlimited**, **In Stock:** and the number left, or **Out of Stock**.

## Which products can be addons

**Product Search** finds any product in this convention, including badge and dealer products, by **Name** or ID (not display name). A **Hidden** product can be an addon: that's how you give away an item nobody can buy on its own.

ConCat refuses these, with the message shown:

- the product itself: *A product can not be its own addon*;
- a badge product: *Registration products can not be addons*;
- addons on a product that is itself an addon: *Addon products can not have additional addons*;
- the same addon twice: *Addon already exists*;
- on a dealer product, an addon from another category: *Dealer addon must be in the same category as the product*.

## Add an addon

<Sidenote title="Who can do this">
Addons need `product:manage`, which the default *admin* and *productEditor* roles have.
</Sidenote>

The steps are the same for store and badge products.

1. Open the product's page (see [Products](./products.md), section 4) and click the green **Add** button (<MaterialIcon name="add" />) in **Addons**.

   <Result>A **Product Search** field appears, with two checkboxes and **Create Add-On**.</Result>

2. In **Product Search**, type part of a product's name or its ID, and select it.

   <Result>The product appears in the field, and **Create Add-On** is enabled.</Result>

3. Tick **Add-on is complimentary and should be provided free** for a free addon, and **Add-on is hidden and should not appear in users' carts** to keep it out of the cart. Click **Create Add-On**.

   <Result>The addon is listed, marked **Included / Free** or **Not Included / Extra Purchase**.</Result>

## Remove an addon

Addons can't be edited. To change whether one is free or hidden, remove it and add it again.

1. Click the delete button (<MaterialIcon name="delete" />) on the addon's row.

   <Result>A **Delete** dialog asks you to confirm.</Result>

2. Click **Delete**.

   <Result>The addon is no longer listed.</Result>

The row's other button (<MaterialIcon name="visibility" />) opens the addon product's page.

## What attendees see

1. As an attendee, open the product in the event store (see [What attendees see in the store](./store.md)).

   <Result>Complimentary addons are listed under **Includes**, with their options.</Result>

2. Click **Add to cart**.

   <Result>**Product added to cart!** appears, with a **Product addons** card for any **Public** extra-purchase addons.</Result>

3. Click **View cart**.

   <Result>Each complimentary addon that isn't hidden is in the cart at no charge, marked **Free addon from** and the product's name.</Result>
