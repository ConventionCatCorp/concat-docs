---
sidebar_position: 6
hide_table_of_contents: true
textbook: true
---

# Surcharges

A surcharge is a fee or a tax added on top of a product's price, such as sales tax or a handling fee. You create it once, then assign it to products one by one or to a whole category.

:::info[In this guide]
Surcharge types (section 1), creating a surcharge (section 2), assigning it to a product (section 3), assigning it to a category (section 4), the surcharge's own page, where you assign, unassign and delete it (section 5), and the platform fee (section 6).
:::

## Surcharge types

<Sidenote title="One list for the organization">
Surcharges belong to your organization, so every convention in it sees the same list. Which products a surcharge is assigned to is set per convention.
</Sidenote>

Every surcharge has a **Type** and an **Amount Type**, as Table 1.1 shows. Its **Name** is for Housekeeping; attendees see its **Display Name** in their cart.

<TableFigure title="Surcharge types">

| Type | What it is | Amount Type |
| --- | --- | --- |
| **Surcharge** | *An arbitrary fixed amount or percent-based charge.* | **Fixed Amount** or **Percentage** |
| **Tax Rate** | *An involuntary percent-based charge required by a government entity.* | Always **Percentage** |

</TableFigure>

A percentage is worked out on the product's price and added on top of it. A product can have only one tax rate.

:::info[Key idea]
A surcharge can't be edited once it's created. To change a rate, create a new surcharge, assign it, then unassign or delete the old one.
:::

:::caution[Watch out]
Some places don't allow fees like card processing fees to be passed on to customers. Check what applies to your event before you add one.
:::

## Create a surcharge

<Sidenote title="Who can do this">
The **Surcharges** menu item, and creating and assigning surcharges, need the `product:manage` permission. The default *admin* and *productEditor* roles have it.
</Sidenote>

1. Go to **Housekeeping › Store Management › Surcharges**.

   <Result>The **Surcharges** page lists your organization's surcharges as cards. Each shows its name and ID, its type and rate, such as *Tax Rate of 8.25%*, and a **View / Edit Details** button. A **Create New Surcharge** button is at the top.</Result>

2. Click **Create New Surcharge**.

   <Result>A **Create Surcharge** dialog opens, with **Name**, **Display Name**, **Type**, **Amount Type** and **Amount**, a **Create Surcharge** button and **Cancel**.</Result>

3. Enter a **Name** and a **Display Name** (both are required), choose the **Type** and **Amount Type**, and enter the **Amount**. Then click **Create Surcharge**.

   <Result>A **Created new surcharge.** message appears, and the surcharge's own page opens (section 5).</Result>

Choosing **Tax Rate** sets **Amount Type** to **Percentage**. A percentage can be at most 100.

## Assign a surcharge to a product

1. Open the product's page (see [Products](./products.md), section 4), and in the **Surcharges** card click the green **Add** button (<MaterialIcon name="add" />).

   <Result>The card shows a **Surcharge Search** field and an **Assign Surcharges** button.</Result>

2. In **Surcharge Search**, type part of a surcharge's name or its ID, and select it. Repeat for any others.

   <Result>Each selected surcharge appears in the field with its ID. The search results also offer **Create New Surcharge**, which opens the surcharge form in the card; once you click **Create Surcharge**, the new surcharge is selected.</Result>

3. Click **Assign Surcharges**.

   <Result>The card lists each surcharge by name, with its type and rate, such as *Surcharge of $2.00*.</Result>

4. To take a surcharge off the product, click the delete button (<MaterialIcon name="delete" />) on its row.

   <Result>The surcharge is no longer listed in the card. There's no confirmation.</Result>

If the product already has a tax rate, assigning another one fails with *Products cannot have more than one tax rate assigned.*

## Assign a surcharge to a category

<Sidenote title="Two permissions">
Category surcharges need both `product:category:manage` and `product:manage`.
</Sidenote>

A category surcharge is added to every product in the category, including products you create later. You can still remove it from one product in that product's **Surcharges** card.

1. Go to **Housekeeping › Store Management › Store Products**, click **View Products** on the category, then click **Category Surcharges**.

   <Result>A **Category Surcharges** dialog opens. It explains *Surcharges added at the Category level will be added to all new and existing products, but can be overridden or removed at a Product level.* It lists the category's surcharges, or *There are no category level surcharges.*, and has an **Assign Category Level Surcharge** button.</Result>

2. Click **Assign Category Level Surcharge**.

   <Result>An **Assign Category Level Surcharges** dialog opens, with a **Surcharge Search** field, **Assign Surcharges** and **Cancel**.</Result>

3. Select the surcharges in **Surcharge Search**, then click **Assign Surcharges**.

   <Result>A **Successfully assigned new category level surcharges.** message appears, and the **Category Surcharges** dialog lists them.</Result>

4. *(Optional)* To remove a category surcharge, click the delete button (<MaterialIcon name="delete" />) on its row.

   <Result>A **Removed Category Level surcharge:** message appears with its name. It's also removed from every product in the category.</Result>

:::caution[Watch out]
A category can have one tax rate. Assigning a new tax rate to a category replaces its old one, and takes any other tax rate off the category's products.
:::

## The surcharge's page

The surcharge's own page shows where it's used. From here you can assign it to several products at once, unassign it, or delete it. It has no edit form.

1. On **Surcharges**, click **View / Edit Details** on a surcharge.

   <Result>The page shows the surcharge's display name and ID, its type and rate, and an **Active** badge. A card lists **Name / Key**, **Type**, **Rate** and **Calculation Method** (**Exclusive**), with the buttons **Assign to Product** and **Delete**. Beside it are the panels **Associated Products** and **Associated Order Items**.</Result>

2. Click **Assign to Product**.

   <Result>An **Assign Surcharge #** dialog opens, with the surcharge's ID, a **Product Search** field, **Assign Surcharge** and **Cancel**.</Result>

3. Select the products in **Product Search**, then click **Assign Surcharge**.

   <Result>An **Assigned Surcharge successfully.** message appears, and the products are listed under **Associated Products**, marked **Assigned**.</Result>

4. To unassign a product, open the menu on its row in **Associated Products** and choose **Unassign**.

   <Result>A **Removed surcharge from Product #** message appears, with the product's ID.</Result>

5. To delete the surcharge, click **Delete**.

   <Result>The page shows a **Deleted / Archived** badge and an **Archived** date, and the **Assign to Product** and **Delete** buttons are gone. On the **Surcharges** list, its button now reads **View Details**.</Result>

:::caution[Watch out]
**Delete** acts at once, with no confirmation, and a deleted surcharge can't be restored. Each **Associated Order Items** row has **View order**, so check which orders use the surcharge first.
:::

## The platform fee

<Sidenote title="Absorbed or passed on">
If you absorb the platform fee on a $50.00 registration, you receive $50.00 minus your agreed fee. If you pass it on, the attendee pays $50.00 plus the fee, and you receive $50.00.
</Sidenote>

ConCat's platform fee is also a surcharge, of the type **Platform Fee**. By default your event absorbs it. To charge it to buyers instead, tick **Pass Platform Fee to Customer** in the product form, under **Pricing** (see [Products](./products.md), section 3). The product's **Product Information** card then shows **Platform Fee** as **Fees Passed On via Surcharge** instead of **Fees Absorbed / Included**, and the fee is listed in its **Surcharges** card.

The platform fee surcharges are on the **Surcharges** list too. Their **Delete** button reads **Cannot Be Deleted**.
