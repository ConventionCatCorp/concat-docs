---
sidebar_position: 3
hide_table_of_contents: true
textbook: true
---

# Addons

An addon attaches another product to this one, either included free or offered as an extra purchase. Typical uses are a free T-shirt with a sponsor badge, or a paid banquet seat offered to people who buy a dinner ticket.

:::info[In this guide]
How the two kinds of addon work (section 1), which products can be addons (section 2), adding an addon (section 3), removing one (section 4), and what attendees see (section 5).
:::

## How addons work

<Sidenote title="Addons are products too">
An addon points to another product, so its price, stock and options stay in one place. Create that product first, then attach it.
</Sidenote>

An addon is one of two kinds. You choose the kind when you add it, with the checkbox **Add-on is complimentary and should be provided free**.

<TableFigure title="The two kinds of addon">

| Kind | Badge in the Addons card | What happens |
| --- | --- | --- |
| Complimentary | **Included / Free** | It's added to the attendee's cart automatically, at no charge, whenever they add the product. The product's page lists it under **Includes**, and asks its options there, under the addon's name. |
| Extra purchase | **Not Included / Extra Purchase** | It isn't added for them. After they add the product to their cart, it's offered under **Product addons**, at its own price, if its **Product visibility** is **Public**. |

</TableFigure>

Two more rules apply to complimentary addons:

- **Hidden in the cart:** with **Add-on is hidden and should not appear in users' carts** ticked, the free item is left out of the attendee's cart. Staff still see it in Housekeeping and the Cashier UI.
- **Stock:** a complimentary addon uses its own product's stock. If that stock runs out, the product it comes with shows as sold out. A product with a complimentary addon can only be bought one at a time.

Each addon in the card also shows a stock badge: **In Stock / Unlimited**, **In Stock:** with the number left, or **Out of Stock**.

## Which products can be addons

**Product Search** lists every product in this convention, including badge and dealer products. It matches the product's **Name** or its ID, not its display name. A product whose **Product visibility** is **Hidden** can be an addon; that's how you give away an item nobody can buy on its own.

ConCat refuses these addons, with the message shown:

- a product as its own addon: *A product can not be its own addon*;
- a badge product: *Registration products can not be addons*;
- addons on a product that is already an addon of another product: *Addon products can not have additional addons*;
- the same addon twice: *Addon already exists*;
- on a dealer product, an addon from another category: *Dealer addon must be in the same category as the product*.

## Add an addon

<Sidenote title="Who can do this">
Adding and removing addons needs the `product:manage` permission. The default *admin* and *productEditor* roles have it.
</Sidenote>

These steps work the same for store products and badge products.

1. Open the product's page (see [Products](./products.md), section 4), and in the **Addons** card click the green **Add** button (<MaterialIcon name="add" />).

   <Result>The card shows a **Product Search** field, the checkboxes **Add-on is complimentary and should be provided free** and **Add-on is hidden and should not appear in users' carts**, and a **Create Add-On** button.</Result>

2. In **Product Search**, type part of the product's name or its ID, and select it.

   <Result>The product appears in the field, with its ID. The **Create Add-On** button can now be clicked.</Result>

3. Tick **Add-on is complimentary and should be provided free** if it comes free, and **Add-on is hidden and should not appear in users' carts** if the free item should stay out of sight. Then click **Create Add-On**.

   <Result>The addon is listed in the card with its name and ID, marked **Included / Free** or **Not Included / Extra Purchase**, and a stock badge.</Result>

## Remove an addon

An addon can't be edited. To change whether it's free or hidden, remove it and add it again.

1. On the addon's row in the **Addons** card, click the delete button (<MaterialIcon name="delete" />).

   <Result>A **Delete** dialog asks *Are you sure you want to delete this product addon?*</Result>

2. Click **Delete**.

   <Result>The addon is no longer listed. If it was the last one, the card says *There are no addons for this product.*</Result>

The other button on the row (<MaterialIcon name="visibility" />) opens the addon product's own page.

## What attendees see

1. As an attendee, open the product in the event store (see [What attendees see in the store](./store.md)).

   <Result>Complimentary addons are listed under **Includes**. If they have options, these are asked on the same page, under the addon's name.</Result>

2. Click **Add to cart**.

   <Result>**Product added to cart!** appears. If the product has extra-purchase addons that are **Public**, a **Product addons** card lists them, each with **View Product** and **Add to cart**.</Result>

3. Click **View cart**.

   <Result>Each complimentary addon is in the cart at no charge, marked **Free addon from** and the product's name, unless it's hidden.</Result>
