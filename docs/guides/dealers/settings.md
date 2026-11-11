---
sidebar_position: 4
hide_table_of_contents: true
textbook: true
---

# Dealer settings, policy and form

This guide turns the dealer application on, sets the address dealer emails come from, and decides what dealers agree to and answer when they apply.

:::info[In this guide]
General dealer settings (section 1), the Dealer Policy (section 2), custom questions for dealers (section 3), and the dealer application form (section 4).
:::

## General settings

<Sidenote title="Who can do this">
**Dealer Settings** needs the permission to update vendor applications. The default *dealersden* role has it.
</Sidenote>

1. Go to **Housekeeping › Dealers › Dealer Settings**. The Dealers module menu is explained in [Start here](../quickstart/start-here.md), section 2.

   <Result>The **Dealer Settings** page opens on the **General** tab, with the cards **General**, **Export Data** and **Form Editor**. The other tab is **Terms**.</Result>

2. In the **General** card, set the three settings in Table 1.1, then click **Save**.

   <Result>A **Dealer settings have been updated!** message appears.</Result>

3. With **Enable Dealers Module** ticked, open your instance's homepage as an attendee.

   <Result>The homepage sidebar shows **Dealing** under **Applications**.</Result>

<TableFigure title="General dealer settings">

| Setting | What it does |
| --- | --- |
| **Enable Dealers Module** | Shows **Dealing** in the attendee sidebar and opens the dealer application. <small>While it's off, dealers who open the page see *We are not currently accepting applications.*, and nobody can create a dealer profile, not even staff. **Housekeeping › Dealers** stays available.</small> |
| **Force Dealer Registration** | Makes dealers register for the convention before they can pay for a table. <small>Until they do, checkout shows **Convention Registration Needed** instead of the payment options. Their badge can be in the same cart as the table. While **Open Registration** is off, dealers can't pay for tables at all.</small> |
| **Dealers Email** | The mailbox name, the part before the @, that dealer emails come from. <small>Letters, numbers, dots and dashes only. It's also the contact address shown to dealers. It's the same setting as **Dealers Email** on the **Contact** tab of **System › Settings**.</small> |

</TableFigure>

You also need at least one enabled dealer area before dealers can apply: see [Dealer areas and table types](./areas-and-products.md).

:::note[Exports and mass email]
The **Export Data** card's **CSV** and **JSON** buttons, and **Dealers › Dynamic Export**, are covered in [Exports](../system/exports.md). **Dealers › Mass Email** is covered in [Mass email](../attendees/mass-email.md).
:::

## Dealer Policy

<Sidenote title="Who can do this">
Reading and saving policies needs the permission to update system settings. Without it, the **Terms** tab doesn't load.
</Sidenote>

The Dealer Policy is the agreement dealers accept when they apply. Like the policies in [Convention setup](../quickstart/convention-setup.md), section 3, it can be organization-wide or for this convention only.

1. On **Dealer Settings**, click the **Terms** tab.

   <Result>**Dealer Policy** is shown with the description *Policy to be displayed to dealers when submitting an application.* If there's no policy yet, **Create Policies** offers **Create Organization-wide Policy** and **Create Convention-specific Policy**.</Result>

2. Click **Create Convention-specific Policy**, or **Create Organization-wide Policy** if the same wording applies to all your conventions.

   <Result>A text box headed **Convention-specific Policy** (or **Organization-wide Policy**) appears, containing *TBC*.</Result>

3. Replace *TBC* with your dealer policy, then click **Save**.

   <Result>A **Convention-specific policy saved** message appears (or **Organization-wide policy saved**).</Result>

4. Open `/policy/vendor` on your instance, for example `https://your-event.concat.app/policy/vendor`.

   <Result>A page titled **Dealer Policy** shows the text you saved.</Result>

:::caution[Watch out]
- The policy takes effect as soon as you create it, with the text *TBC*. Replace it before dealers apply.
- No menu or footer links to `/policy/vendor`. In the default dealer form, dealers tick a **Dealer Policy** box without seeing the text. To show it, turn on **Show Preview of Terms** in the form (section 4, step 4), or put a link to `/policy/vendor` in the agreement line.
:::

## Custom questions

Dealer questions, such as a website or a list of what the dealer sells, are dealer options. They're a separate list from the options on badge and store products, and they have no prices. A new convention starts with **Business Legal Name**, **Business Phone Number**, **Local Tax ID**, **Business Website**, **Business Description**, **Item Categories** and **Other Items**.

1. Go to **Housekeeping › Dealers › Options**.

   <Result>The **Options** page lists the dealer options in a searchable table with the columns **Name**, **Type** and **Details**, below a **Create New Option** button.</Result>

2. Click **Create New Option**.

   <Result>The **Creating Option** form opens, with a **Back to Options** button above it.</Result>

3. Enter a **Name**, choose a **Type** and fill in its settings, then click **Create**. The types are described in [Product Options](../products/options.md), Table 1.1.

   <Result>A **New option has been created** message appears, and you're back on **Options**, where the new option is listed.</Result>

A new option isn't asked yet. Add it to the dealer form, as section 4 explains.

:::tip[Questions about the table]
To ask something about a dealer's table, such as which side they want power on, assign a product option to the table type instead. It's asked when the dealer chooses that table type. See [Product Options](../products/options.md), section 3.
:::

## The dealer application form

<Sidenote title="One editor, three forms">
The registration, dealer and volunteer forms share one editor. The [Registration form editor](../registration/form-editor.md) explains it in full.
</Sidenote>

The dealer form is the first page of the application: the dealer's business details, your questions and the Dealer Policy agreement. A new convention starts with three sections: **Business Info**, **Product Info** and **Dealer Policy**.

1. On **Dealer Settings › General**, in the **Form Editor** card, click **Go to Dealer Form Editor**.

   <Result>The **Express Mode Editor** opens, with three panes: **Toolbox**, **Form Editor** (with a **Save Changes** button) and **Preview**. The toolbox has the five elements in Table 4.1.</Result>

2. Drag **Option** from the **Toolbox** into a section of the form.

   <Result>The element appears in the section, with **Edit** and **Delete** buttons.</Result>

3. Click **Edit** on the new element. Choose the **Option**, and set **Display Name (optional)**, **Required?** and **Prevent changes to this option after application is submitted?** as you need. Then click **Save**.

   <Result>The dialog closes, and the **Preview** pane shows the question.</Result>

4. *(Optional)* Click **Edit** on the **Terms and conditions** element in the **Dealer Policy** section, tick **Show Preview of Terms**, and click **Save**.

   <Result>The **Preview** pane shows the policy text above the agreement checkbox.</Result>

5. Click **Save Changes**.

   <Result>A **Saved** message appears.</Result>

<TableFigure title="Dealer form elements">

| Element | What it adds |
| --- | --- |
| **Text block** | Text, with Markdown formatting. |
| **Divider** | A horizontal line between parts of the form. |
| **Terms and conditions** | An agreement to one of your policies, ticked as a checkbox or signed by typing the dealer's full name. <small>**Require Agreement To Submit** stops the dealer continuing without it.</small> |
| **Dealer PII** | One of the dealer's business details. Its **Type** is one of `name`, `email`, `addressLine1`, `addressLine2`, `addressCity`, `addressState`, `addressZipcode` or `addressCountry`. <small>`name` is the business name and `email` the business email.</small> |
| **Option** | One of the dealer options from section 3. |

</TableFigure>

:::caution[Watch out]
The form must keep a **Dealer PII** element of type `name` and one of type `email`. Without them, **Save Changes** fails with *At least one field must be of type 'Dealer PII' with subtype 'name'.* (or `'email'`). Dealers see both as **Required**.
:::

If you leave the editor with unsaved changes, an **Unsaved Changes** dialog offers **Save and Exit**, **Exit without Saving** and **Cancel**.
