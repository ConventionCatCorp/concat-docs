---
sidebar_position: 5
hide_table_of_contents: true
textbook: true
---

# Product Options

Product options ask attendees for extra details when they buy a product, such as a T-shirt size or the name to print on a thank-you card. You create an option once, then assign it to each product that should ask for it.

:::info[In this guide]
The eight option types and their styles (section 1), creating an option (section 2), assigning it to a product so attendees are asked for it (section 3), and editing or deleting it (section 4).
:::

## Option types

<Sidenote title="One list, two menus">
Badge products and store products share one list of options: **Registration › Options** and **Store Management › Options** open the same list. Volunteer and dealer forms have options of their own.
</Sidenote>

Every option has a **Type**, which sets what the attendee fills in. Single Select, Multi Select and Free text Field also have a **Style**, which changes how the field looks. Table 1.1 lists them.

<TableFigure title="Option types and their styles">

| Type | What the attendee does | Styles |
| --- | --- | --- |
| Single Select | Selects one choice from a list you set up. | Radio, Dropdown |
| Multi Select | Selects any number of choices from a list you set up. | Checkboxes, Blocks |
| Free text Field | Types any text. | Text, Textarea |
| Number | Enters a whole number. | None |
| Currency | Enters an amount of money. | None |
| Phone Number | Enters a valid phone number. | None |
| Address | Enters a valid address. | None |
| Files | Uploads files. | None |

</TableFigure>

## Creating an option

Create the option first, then assign it (section 3). These steps use the Registration menu; **Store Management › Options** works the same way.

<Sidenote title="Option missing from the menu?">
**Options** only appears for roles that can manage products.
</Sidenote>

1. Go to **Housekeeping › Registration › Options**: in the left-hand menu click **Housekeeping**, choose **Registration** from the module menu at the top of the side menu, then click **Options** under **Badges and Tiers**.

   <Result>The **Options** page opens, with a **Create New Option** button above a searchable table of existing options. The address ends in `/housekeeping/registration/options`.</Result>

2. Click **Create New Option**.

   <Result>The **Creating Option** form opens, with a **Back to Options** button above it.</Result>

3. Enter a **Name**, then choose a **Type** from Table 1.1. If the type has styles, choose a **Style** as well.

   <Result>The fields below **Type** change to suit it. A Free text Field, for example, shows **Min Length** and **Max Length**.</Result>

4. Fill in the remaining fields, leaving any marked **(Optional)** empty if you don't need them. Then click **Create**.

   <Result>A **New option has been created** message appears and you're back on the **Options** page, where the new option is listed.</Result>

<Figure
  src="/img/tutorial/productOptionCreate.png"
  alt="The Creating Option form, with Name, Type, Min Length and Max Length fields above a Create button."
  title="The Creating Option form"
  markers={[
    { n: 1, x: 2, y: 30.5, w: 47, h: 14.5 },
    { n: 2, x: 51, y: 30.5, w: 46.8, h: 14.5 },
    { n: 3, x: 2, y: 46.5, w: 95.8, h: 23 },
    { n: 4, x: 2, y: 79.5, w: 95.8, h: 13.5 },
  ]}
>

1. **Name**, as attendees will see it.
2. **Type**: here, a Free text Field.
3. Settings for that type: **Min Length** and **Max Length**.
4. **Create** saves the option.

This screenshot predates the form's **Description**, **Style** and **Display on cashier interface** fields.

</Figure>

## Assigning an option to a product

An option does nothing until it's assigned to a product. Assign it on every product that should ask for it.

<Sidenote title="Changing the lock later">
Each assigned option has a lock button that turns **Prevent changes to this option after purchase is complete.** on or off. It's unavailable for options that change the price.
</Sidenote>

1. Open the product: in **Housekeeping › Registration**, click **Badge Products**, then the product. Or in **Housekeeping › Store Management**, click **Store Products**, then **View Products** on the product's category, then the product.

   <Result>The product's page opens, with an **Options** card. If the product has no options yet, the card says *There are currently no product options.*</Result>

2. In the **Options** card, click the green **Add** button (<i className="material-symbols-outlined">add</i>).

   <Result>The card shows an **Option Search** field, two checkboxes and an **Assign Options** button.</Result>

3. In **Option Search**, type part of the option's name and select it. Repeat for any other options.

   <Result>Each selected option appears under the search field, with its ID.</Result>

4. *(Optional)* Tick **Mark selected options as required.** to make attendees answer the options, and **Prevent changes to this option after purchase is complete.** to stop them changing their answers once they've paid. Then click **Assign Options**.

   <Result>The search closes and the options are listed in the **Options** card, each with a lock button and a delete button. Options you made required are marked **Required**; options you locked are marked **Immutable**.</Result>

<Figure
  src="/img/tutorial/productOptionAssign.png"
  alt="The Options card on a product page, with Option Search, one selected option, the required checkbox and an Assign Options button."
  title="Assigning options on a product's page"
  markers={[
    { n: 1, x: 2, y: 34.5, w: 96, h: 28.5 },
    { n: 2, x: 1.8, y: 66.5, w: 34.5, h: 12.5 },
    { n: 3, x: 2, y: 80, w: 96, h: 12.5 },
  ]}
>

1. **Option Search**, with one option selected.
2. **Mark selected options as required.**
3. **Assign Options** saves the change.

This screenshot predates the **Prevent changes to this option after purchase is complete.** checkbox, which now appears below the first one.

</Figure>

:::caution[Watch out]
Options that change the price are always locked after purchase. When you select a **Currency** option, or a select option with a choice that changes the price, **Prevent changes to this option after purchase is complete.** is ticked and can't be cleared.
:::

## Editing or deleting an option

Changes to an option apply everywhere it's assigned.

1. Go to **Housekeeping › Registration › Options** (or **Store Management › Options**) and click the option in the table.

   <Result>The page is titled **Editing Option:** and the option's name, with **Save Changes** and **Delete** buttons. The **Type** can't be changed.</Result>

2. Change the fields you need, then click **Save Changes**.

   <Result>An **Option has been updated!** message appears, and you're back on the **Options** page.</Result>

3. To remove the option altogether, click **Delete** instead, then confirm in the **Delete Option** dialog.

   <Result>An **Option has been deleted!** message appears, and the option is gone from the **Options** page.</Result>

:::danger[Deleting erases answers]
The **Delete Option** dialog warns that *Data for this option from users will be erased.* To stop asking a question on one product but keep past answers, remove it from that product's **Options** card instead of deleting it.
:::
