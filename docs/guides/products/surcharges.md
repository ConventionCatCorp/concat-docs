---
sidebar_position: 6
hide_table_of_contents: true
textbook: true
---

# Surcharges

Add a fee or tax on top of a product's price, such as sales tax or a handling fee. Create the surcharge once, then assign it to products or a whole category.

:::info[In this guide]
Surcharge types (section 1), creating a surcharge (section 2), assigning it to a product (section 3) or a category (section 4), the surcharge's page (section 5), and the platform fee (section 6).
:::

## Surcharge types

<Sidenote title="One list for the organization">
Surcharges belong to your organization, so every convention sees the same list. Assignments to products are per convention.
</Sidenote>

Each surcharge has a **Type** and an **Amount Type** (Table 1.1). Attendees see its **Display Name** in their cart; **Name** is for Housekeeping.

<TableFigure title="Surcharge types">

| Type | What it is | Amount Type |
| --- | --- | --- |
| **Surcharge** | Any fixed or percentage charge. | **Fixed Amount** or **Percentage** |
| **Tax Rate** | A percentage charge required by a government. | Always **Percentage** |

</TableFigure>

A percentage, at most 100, is worked out on the product's price and added on top. A product can have only one tax rate.

:::info[Key idea]
A surcharge can't be edited once it's created. To change a rate, create a new surcharge, assign it, then unassign or delete the old one.
:::

:::caution[Watch out]
Some places don't allow fees such as card processing fees to be passed on to customers. Check what applies to your event first.
:::

## Create a surcharge

<Sidenote title="Who can do this">
The **Surcharges** menu item, and creating and assigning surcharges, need `product:manage`. The default *admin* and *productEditor* roles have it.
</Sidenote>

1. Go to **Housekeeping › Store Management › Surcharges**.

   <Result>The **Surcharges** page lists your surcharges as cards, each with its type and rate, such as *Tax Rate of 8.25%*.</Result>

2. Click **Create New Surcharge**.

   <Result>A **Create Surcharge** dialog opens.</Result>

3. Enter a **Name** and a **Display Name** (both required), choose the **Type** and **Amount Type**, enter the **Amount**, and click **Create Surcharge**.

   <Result>**Created new surcharge.** appears and the surcharge's page opens (section 5).</Result>

## Assign a surcharge to a product

1. Open the product's page (see [Products](./products.md), section 4) and click the green **Add** button (<MaterialIcon name="add" />) in **Surcharges**.

   <Result>A **Surcharge Search** field appears.</Result>

2. In **Surcharge Search**, type part of a surcharge's name or its ID, and select it. Repeat for any others.

   <Result>Each selected surcharge appears in the field.</Result>

3. Click **Assign Surcharges**.

   <Result>The card lists each surcharge with its type and rate, such as *Surcharge of $2.00*.</Result>

4. To take a surcharge off the product, click the delete button (<MaterialIcon name="delete" />) on its row.

   <Result>The surcharge is removed at once, with no confirmation.</Result>

Once you type, the search results end with **Create New Surcharge**, even when nothing matches. It creates a surcharge in the card and selects it.

A second tax rate on one product fails with *Products cannot have more than one tax rate assigned.*

## Assign a surcharge to a category

<Sidenote title="Two permissions">
Category surcharges need both `product:category:manage` and `product:manage`.
</Sidenote>

A category surcharge applies to every product in the category, including products added later. You can still remove it from one product in that product's **Surcharges** card.

1. Go to **Housekeeping › Store Management › Store Products**, click **View Products** on the category, then **Category Surcharges**.

   <Result>A **Category Surcharges** dialog lists the category's surcharges.</Result>

2. Click **Assign Category Level Surcharge**.

   <Result>An **Assign Category Level Surcharges** dialog opens.</Result>

3. Select the surcharges in **Surcharge Search** and click **Assign Surcharges**.

   <Result>**Successfully assigned new category level surcharges.** appears, and **Category Surcharges** lists them.</Result>

4. *(Optional)* To remove a category surcharge, click the delete button (<MaterialIcon name="delete" />) on its row.

   <Result>**Removed Category Level surcharge:** appears with its name. It's also removed from every product in the category.</Result>

:::caution[Watch out]
A category can have one tax rate. A new tax rate replaces the old one, and removes any other tax rate from the category's products.
:::

## The surcharge's page

A surcharge's page shows where it's used, and lets you assign it to several products at once. It has no edit form.

1. On **Surcharges**, click **View / Edit Details** on a surcharge.

   <Result>The surcharge's page opens, with **Assign to Product**, **Delete**, and the panels **Associated Products** and **Associated Order Items**.</Result>

2. Click **Assign to Product**.

   <Result>An **Assign Surcharge #** dialog opens with a **Product Search** field.</Result>

3. Select the products in **Product Search** and click **Assign Surcharge**.

   <Result>**Assigned Surcharge successfully.** appears, and the products are listed under **Associated Products**.</Result>

4. To unassign a product, click the more button (<MaterialIcon name="more_horiz" />, **Options**) on its row in **Associated Products** and choose **Unassign** (Figure 5.1).

   <Result>**Removed surcharge from Product #** appears, with the product's ID.</Result>

5. To delete the surcharge, click **Delete**.

   <Result>A **Deleted / Archived** badge appears, and **Assign to Product** and **Delete** are gone.</Result>

<Figure
  src="/img/guides/products/surcharge-unassign.webp"
  alt="The Associated Products panel of a surcharge's page: General Admission, marked Assigned, with its more button open on the menu View Product and Unassign."
  title="Unassigning a product"
  width="481px"
  markers={[
    { n: 1, x: 84.8, y: 49.1, w: 11, h: 17.3 },
    { n: 2, x: 50.9, y: 63.9, w: 44.9, h: 32.5 },
  ]}
>

1. The more button (**Options**) on the product's row.
2. **View Product** and **Unassign**.

</Figure>

:::caution[Watch out]
**Delete** acts at once, with no confirmation, and a deleted surcharge can't be restored. Check **Associated Order Items** first: each row has **View order**.
:::

## The platform fee

<Sidenote title="Absorbed or passed on">
Absorb the platform fee on a $50.00 registration and you receive $50.00 minus your agreed fee. Pass it on and the attendee pays $50.00 plus the fee, and you receive $50.00.
</Sidenote>

ConCat's platform fee is a surcharge of the type **Platform Fee**, which your event absorbs by default. To charge it to buyers, tick **Pass Platform Fee to Customer** in the product form (see [Products](./products.md), section 3). **Product Information** then shows **Platform Fee** as **Fees Passed On via Surcharge** instead of **Fees Absorbed / Included**, and the fee is listed in **Surcharges**.

Platform fee surcharges can't be deleted: their **Delete** button reads **Cannot Be Deleted**.
