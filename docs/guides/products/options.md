---
sidebar_position: 5
hide_table_of_contents: true
textbook: true
---

# Product Options

Options ask buyers for details such as a T-shirt size. Create an option once, then assign it to each product that should ask for it.

:::info[In this guide]
Option types and styles (section 1), creating an option (section 2), assigning it to a product (section 3), and editing or deleting it (section 4).
:::

## Option types

<Sidenote title="One list, two menus">
Badge and store products share one list: **Registration › Options** and **Store Management › Options** both open it. Volunteer and dealer forms have their own options.
</Sidenote>

An option's **Type** sets what the attendee fills in. Three types also have a **Style**, which changes how the field looks (Table 1.1).

<TableFigure title="Option types and their styles">

| Type | What the attendee does | Styles |
| --- | --- | --- |
| Single Select | Selects one choice from your list. | Radio, Dropdown |
| Multi Select | Selects any number of choices from your list. | Checkboxes, Blocks |
| Free text Field | Types any text. | Text, Textarea |
| Number | Enters a whole number. | None |
| Currency | Enters an amount of money. | None |
| Phone Number | Enters a valid phone number. | None |
| Address | Enters a valid address. | None |
| Files | Uploads files. | None |

</TableFigure>

## Creating an option

<Sidenote title="Option missing from the menu?">
**Options** only appears for roles that can manage products.
</Sidenote>

1. Go to **Housekeeping › Registration › Options** (under **Badges and Tiers**).

   <Result>The **Options** page (`/housekeeping/registration/options`) lists your options.</Result>

2. Click **Create New Option**.

   <Result>The **Creating Option** form opens.</Result>

3. Enter a **Name** and choose a **Type** (Table 1.1), plus a **Style** if the type has one.

   <Result>The fields below **Type** change to suit it, such as **Min Length** and **Max Length** for a Free text Field.</Result>

4. Fill in the other fields you need and click **Create**.

   <Result>**New option has been created** appears, and the option is listed on **Options**.</Result>

<Figure
  src="/img/guides/products/option-create.webp"
  alt="The Creating Option form: Name filled in with Pronouns; Type set to Free text Field with Style set to Text and a Display on cashier interface checkbox; Description; Min Length and Max Length; and a Create button."
  title="The Creating Option form"
  markers={[
    { n: 1, x: 2.7, y: 14.8, w: 46.3, h: 15.8 },
    { n: 2, x: 51, y: 14.8, w: 46.3, h: 32.9 },
    { n: 3, x: 2.7, y: 63, w: 94.6, h: 15.8 },
    { n: 4, x: 2.7, y: 86.7, w: 94.6, h: 9.4 },
  ]}
>

1. **Name**, as attendees will see it.
2. **Type**, here a Free text Field, and its **Style**.
3. Settings for that type: **Min Length** and **Max Length**.
4. **Create** saves the option.

</Figure>

## Assigning an option to a product

An option is only asked on the products it's assigned to.

<Sidenote title="Changing the lock later">
Each assigned option has a lock button that turns **Prevent changes to this option after purchase is complete.** on or off, except on options that change the price.
</Sidenote>

1. Open the product: **Housekeeping › Registration › Badge Products**, or **Housekeeping › Store Management › Store Products** and **View Products** on its category; then click the product.

   <Result>The product's page opens with an **Options** card.</Result>

2. In the **Options** card, click the green **Add** button (<i className="material-symbols-outlined">add</i>).

   <Result>An **Option Search** field appears, with two checkboxes and **Assign Options**.</Result>

3. In **Option Search**, type part of the option's name and select it. Repeat for any others.

   <Result>Each selected option appears under the field.</Result>

4. *(Optional)* Tick **Mark selected options as required.** to make an answer compulsory, and **Prevent changes to this option after purchase is complete.** to lock answers once paid. Click **Assign Options**.

   <Result>The options are listed in the card, marked **Required** or **Immutable** if you ticked those boxes.</Result>

<Figure
  src="/img/guides/products/option-assign.webp"
  alt="The Options card on a product page: Option Search with Species selected, the two checkboxes Mark selected options as required and Prevent changes to this option after purchase is complete, and an Assign Options button."
  title="Assigning options on a product's page"
  markers={[
    { n: 1, x: 2.7, y: 23.2, w: 94.6, h: 34.2 },
    { n: 2, x: 3.8, y: 60.5, w: 93.5, h: 9 },
    { n: 3, x: 3.8, y: 70.8, w: 93.5, h: 9 },
    { n: 4, x: 2.7, y: 81.7, w: 94.6, h: 12.9 },
  ]}
>

1. **Option Search**, with one option selected.
2. **Mark selected options as required.**
3. **Prevent changes to this option after purchase is complete.**
4. **Assign Options** saves the change.

</Figure>

:::caution[Watch out]
Options that change the price, such as a **Currency** option or a select option with a priced choice, are always locked after purchase: **Prevent changes to this option after purchase is complete.** is ticked and can't be cleared.
:::

## Editing or deleting an option

Changes apply everywhere the option is assigned.

1. On **Housekeeping › Registration › Options** (or **Store Management › Options**), click the option in the table.

   <Result>The **Editing Option:** page opens. The **Type** can't be changed.</Result>

2. Change the fields you need and click **Save Changes**.

   <Result>**Option has been updated!** appears.</Result>

3. To remove the option altogether, click **Delete** instead and confirm in the **Delete Option** dialog.

   <Result>**Option has been deleted!** appears, and the option is gone from **Options**.</Result>

:::danger[Deleting erases answers]
The **Delete Option** dialog warns that *Data for this option from users will be erased.* To stop asking on one product but keep past answers, remove the option from that product's **Options** card instead.
:::
