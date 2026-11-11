---
sidebar_position: 3
hide_table_of_contents: true
textbook: true
---

# Dealer areas and table types

A dealer area is a part of your event where dealers apply for space, such as a dealers' den or an artists' alley. Each area offers the table types in one dealer product category, and each table type can have add-ons, such as electricity or an extra chair.

:::info[In this guide]
How areas, categories and table types fit together (section 1), creating a dealer product category (section 2), creating table types and add-ons (section 3), creating a dealer area (section 4), and editing or deleting an area (section 5).
:::

## How they fit together

<Sidenote title="Who can do this">
**Areas** needs the permission to update vendor applications. Deleting an area needs the permission to add and remove admins. Creating categories and products needs the product permissions (manage product categories, create and update products), which the *dealersden* role doesn't have.
</Sidenote>

Build the pieces in the order of Table 1.1, because each one needs the one before.

<TableFigure title="The pieces of a dealer area, in the order you build them">

| Piece | What it is |
| --- | --- |
| Dealer product category | Holds the table types for one area (section 2). |
| Table types | Products in that category, each with a price. Dealers choose from the category's **Public** products (section 3). |
| Add-ons | Products attached to a table type through its **Addons** card. Dealers tick the ones they want when they apply (section 3). |
| Dealer area | Names the category its table types come from (section 4). |

</TableFigure>

When you approve an application, the chosen table type and add-ons go into the dealer's cart for payment (see [Dealers](./managment.md), section 4).

## Create a dealer product category

1. Go to **Housekeeping › Dealers › Products**.

   <Result>The **Dealer Product Categories** page lists your dealer categories, each with a **View Products** button, below a **Create New Category** button.</Result>

2. Click **Create New Category**.

   <Result>A **New Category** form opens, with a **Name** field and a **Hide this category** checkbox, and a **Back to Categories** button above it.</Result>

3. Enter a **Name**, such as *Dealers' Den tables*, and click **Create Category**. Leave **Hide this category** unticked: it hides the category and all its items from attendees.

   <Result>A **New category has been created.** message appears, and the category's page opens. It's titled **Category:** and the category's name, with **Create New Product**, **Category Surcharges** and **Back to Categories** buttons.</Result>

## Create table types and add-ons

### Table types

1. On the category's page, click **Create New Product**.

   <Result>The **New Product** form opens. Below **Description** it has a **Dealer assistant count limit** field, set to 0.</Result>

2. Fill in **Name** and **Description**, and set **Dealer assistant count limit** to the number of assistants a dealer with this table may name (0 turns assistants off). Set **Product visibility** to **Public**, enter the **Base Price**, and click **Create Product**.

   <Result>A **New product has been created** message appears, and the table type is listed on the category's page.</Result>

3. Click the table type.

   <Result>The product's page opens, titled *Product:* with its name and ID, with the tabs **Product**, **Orders** and **Audit Logs**. The **Product Information** card shows the **Dealer assistant count limit**.</Result>

Dealers see the table type's name, price and description when they apply. The rest of the form works as for store products: see [Products](../products/products.md). To change the assistant limit later, click the pencil button (**Edit**) on **Product Information**.

:::tip[Table types only some dealers can have]
Dealers can only choose **Public** table types. Give a table type **Unlisted** or **Hidden** visibility to keep it off the dealers' list. Your team can still assign it to an application in Housekeeping.
:::

### Add-ons

Add-ons are products too, and a table type's add-ons must be in the same dealer category as the table type. Set them to **Hidden**, so they aren't offered as table types of their own.

1. On the category's page, click **Create New Product** again. Name the add-on, set **Product visibility** to **Hidden**, enter its **Base Price**, and click **Create Product**.

   <Result>A **New product has been created** message appears, and the add-on is listed on the category's page.</Result>

2. Open the table type the add-on belongs to. In its **Addons** card, click the green **Add** button.

   <Result>The card shows a **Product Search** field, the checkboxes **Add-on is complimentary and should be provided free** and **Add-on is hidden and should not appear in users' carts**, and a **Create Add-On** button.</Result>

3. In **Product Search**, select the add-on product. Leave both checkboxes unticked, and click **Create Add-On**.

   <Result>The add-on is listed in the **Addons** card. Dealers who choose this table type see the add-on as a checkbox, with its price.</Result>

Repeat steps 2 and 3 for each table type that offers the add-on. A product from another category is refused with *Dealer addon must be in the same category as the product*. Addons in general are covered in [Addons](../products/addons.md).

## Create a dealer area

1. Go to **Housekeeping › Dealers › Areas**.

   <Result>The **Dealer Areas** page opens, with a **Create New Dealer Area** button. If there are no areas yet, it says *Nothing here yet!*</Result>

2. Click **Create New Dealer Area**.

   <Result>A **Create New** dialog opens, with **Name**, **Description**, **Product Category**, and the checkboxes **Enabled**, **Full** and **Open**.</Result>

3. Enter a **Name** and a **Description**, and choose the **Product Category** from section 2. Categories are listed by name, with their ID in brackets. Tick **Enabled** and **Open**, leave **Full** unticked (Table 4.1 explains all three), and click **Create**.

   <Result>A **Created area.** message appears, and the area is listed with **View applications**, **Edit** and **Delete** buttons.</Result>

<TableFigure title="Area settings">

| Setting | When ticked | When not ticked |
| --- | --- | --- |
| **Enabled** <small>"Display the option to users"</small> | Dealers can see the area. | Dealers don't see the area. If no area is enabled, the **Dealing** page says *No dealer areas are currently accepting applications.* |
| **Open** <small>"Allow for additional registrations"</small> | Dealers can apply, and change or delete a pending application. | The area is marked **CLOSED**, and its form says the area *is closed.* Your team can still change applications in Housekeeping. |
| **Full** <small>"Show that registrations is full, but more slots may open in the future."</small> | Dealers can still apply, but are told *The* area *is full. Applications can still be made in case a seat becomes available.* | No message. |

</TableFigure>

When more than one area is enabled, dealers first choose an area from a list. With only one, they go straight to its application form.

## Edit or delete an area

1. On **Dealer Areas**, click **Edit** on the area.

   <Result>An **Edit** dialog opens with the area's settings.</Result>

2. Change the settings and click **Edit** at the bottom of the dialog.

   <Result>An **Updated area.** message appears.</Result>

3. *(Optional)* To delete an area, click **Delete** on it.

   <Result>A **Delete Dealer Area** dialog asks *Are you sure you want to delete* the area, and warns **This will delete ALL applications for this area.**</Result>

4. Click **Delete** in the dialog.

   <Result>A **Deleted area.** message appears, and the area is no longer listed.</Result>

:::danger[Deleting an area deletes its applications]
Every application in the area is deleted with it. To stop new applications but keep the existing ones, untick **Open** instead.
:::

**View applications** opens the **Dealers** page filtered to the area (see [Dealers](./managment.md), section 3).
