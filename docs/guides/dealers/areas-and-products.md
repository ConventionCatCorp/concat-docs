---
sidebar_position: 3
hide_table_of_contents: true
textbook: true
---

# Dealer areas and table types

A dealer area is a part of your event where dealers apply for space, such as a dealers' den or an artists' alley. Set up its table types and add-ons, then the area itself.

:::info[In this guide]
How the pieces fit together, the dealer product category, table types and add-ons, creating an area, and editing or deleting one.
:::

## How they fit together

<Sidenote title="Who can do this">
**Areas** needs the permission to update vendor applications; deleting an area needs the permission to add and remove admins. Categories and products need the product permissions, which *dealersden* doesn't have.
</Sidenote>

Build the pieces in the order of Table 1.1: each needs the one before.

<TableFigure title="The pieces of a dealer area, in the order you build them">

| Piece | What it is |
| --- | --- |
| Dealer product category | Holds one area's table types (section 2). |
| Table types | Priced products in the category. Dealers choose from its **Public** ones (section 3). |
| Add-ons | Products, such as electricity or an extra chair, attached through a table type's **Addons** card. Dealers tick the ones they want (section 3). |
| Dealer area | Names the category its table types come from (section 4). |

</TableFigure>

Approving an application puts the chosen table type and add-ons into the dealer's cart ([Dealers](./managment.md), section 4).

## Create a dealer product category

1. Go to **Housekeeping › Dealers › Products**.

   <Result>The **Dealer Product Categories** page lists your dealer categories.</Result>

2. Click **Create New Category**.

   <Result>A **New Category** form opens.</Result>

3. Enter a **Name**, such as *Dealers' Den tables*, leave **Hide this category** unticked (it hides the category and its items from attendees), and click **Create Category**.

   <Result>A **New category has been created.** message appears, and the category's page opens.</Result>

## Create table types and add-ons

### Table types

1. On the category's page, click **Create New Product**.

   <Result>The **New Product** form opens, with a **Dealer assistant count limit** field, set to 0, below **Description**.</Result>

2. Fill in **Name** and **Description**, set **Dealer assistant count limit** to how many assistants a dealer with this table may name (0 turns assistants off), set **Product visibility** to **Public**, enter the **Base Price**, and click **Create Product**.

   <Result>A **New product has been created** message appears, and the table type is listed on the category's page.</Result>

3. Click the table type.

   <Result>The product's page opens. **Product Information** shows the **Dealer assistant count limit**.</Result>

Dealers see the table type's name, price and description; other fields work as for store products ([Products](../products/products.md)). To change the assistant limit, click the pencil button (**Edit**) on **Product Information**.

:::tip[Table types only some dealers can have]
Only **Public** table types are offered to dealers. Make one **Unlisted** or **Hidden** to keep it off their list; your team can still assign it in Housekeeping.
:::

### Add-ons

An add-on is a product in the same dealer category as its table type. Make it **Hidden** so it isn't offered as a table type itself.

1. On the category's page, click **Create New Product** again. Name the add-on, set **Product visibility** to **Hidden**, enter its **Base Price**, and click **Create Product**.

   <Result>A **New product has been created** message appears, and the add-on is listed on the category's page.</Result>

2. Open the table type, and in its **Addons** card click the green **Add** button.

   <Result>The card shows **Product Search**, two checkboxes and **Create Add-On**.</Result>

3. In **Product Search**, select the add-on, leave both checkboxes unticked, and click **Create Add-On**.

   <Result>The add-on is listed in the **Addons** card. Dealers who choose this table type see it as a checkbox, with its price.</Result>

Repeat steps 2 and 3 for each table type that offers the add-on. A product from another category is refused with *Dealer addon must be in the same category as the product*. See also [Addons](../products/addons.md).

## Create a dealer area

1. Go to **Housekeeping › Dealers › Areas**.

   <Result>The **Dealer Areas** page opens (*Nothing here yet!* if there are no areas).</Result>

2. Click **Create New Dealer Area**.

   <Result>A **Create New** dialog opens.</Result>

3. Enter a **Name** and **Description**, and choose the **Product Category** from section 2 (listed by name, with its ID in brackets). Tick **Enabled** and **Open**, leave **Full** unticked (Table 4.1), and click **Create**.

   <Result>A **Created area.** message appears, and the area is listed with **View applications**, **Edit** and **Delete** buttons.</Result>

<TableFigure title="Area settings">

| Setting | When ticked | When not ticked |
| --- | --- | --- |
| **Enabled** <small>"Display the option to users"</small> | Dealers see the area. | Hidden from dealers. With no area enabled, **Dealing** says *No dealer areas are currently accepting applications.* |
| **Open** <small>"Allow for additional registrations"</small> | Dealers can apply, and change or delete a pending application. | Marked **CLOSED**; its form says the area *is closed.* Staff can still change applications. |
| **Full** <small>"Show that registrations is full, but more slots may open in the future."</small> | Dealers can still apply, but see *The* area *is full. Applications can still be made in case a seat becomes available.* | No message. |

</TableFigure>

With several areas enabled, dealers choose one first; with one, they go straight to its form.

## Edit or delete an area

1. On **Dealer Areas**, click **Edit** on the area.

   <Result>An **Edit** dialog opens with the area's settings.</Result>

2. Change the settings and click **Edit** at the bottom of the dialog.

   <Result>An **Updated area.** message appears.</Result>

3. *(Optional)* To delete an area, click **Delete** on it.

   <Result>A **Delete Dealer Area** dialog warns **This will delete ALL applications for this area.**</Result>

4. Click **Delete** in the dialog.

   <Result>A **Deleted area.** message appears, and the area is no longer listed.</Result>

:::danger[Deleting an area deletes its applications]
Every application in the area is deleted with it. To stop new applications but keep existing ones, untick **Open** instead.
:::

**View applications** opens the **Dealers** page filtered to the area ([Dealers](./managment.md), section 3).
