---
sidebar_position: 4
hide_table_of_contents: true
textbook: true
---

# Dealer settings, policy and form

Turn on dealer applications, set the address dealer emails come from, and choose what dealers agree to and answer when they apply.

:::info[In this guide]
General settings (section 1), the Dealer Policy (section 2), custom questions (section 3), and the application form (section 4).
:::

## General settings

<Sidenote title="Who can do this">
Needs the permission to update vendor applications, which the default *dealersden* role has.
</Sidenote>

1. Go to **Housekeeping › Dealers › Dealer Settings** (the menu is explained in [Start here](../quickstart/start-here.md), section 2).

   <Result>The **Dealer Settings** page opens on the **General** tab.</Result>

2. In the **General** card, set the settings in Table 1.1 and click **Save**.

   <Result>A **Dealer settings have been updated!** message appears.</Result>

3. With **Enable Dealers Module** ticked, open your instance's homepage as an attendee.

   <Result>The sidebar shows **Dealing** under **Applications**.</Result>

<TableFigure title="General dealer settings">

| Setting | What it does |
| --- | --- |
| **Enable Dealers Module** | Shows **Dealing** in the attendee sidebar and opens the application. <small>While off, nobody, not even staff, can create a dealer profile. **Housekeeping › Dealers** stays available.</small> |
| **Force Dealer Registration** | Dealers must register for the convention before paying for a table. <small>Until then, checkout shows **Convention Registration Needed**; the badge can share the cart with the table. While **Open Registration** is off, dealers can't pay for tables at all.</small> |
| **Dealers Email** | The part before the @ of the address dealer emails come from, also shown to dealers as the contact. <small>Letters, numbers, dots and dashes only. Same setting as **Dealers Email** on the **Contact** tab of **System › Settings**.</small> |

</TableFigure>

Dealers also need at least one enabled dealer area: see [Dealer areas and table types](./areas-and-products.md).

:::note[Exports and mass email]
For the **Export Data** card and **Dealers › Dynamic Export**, see [Exports](../system/exports.md). For **Dealers › Mass Email**, see [Mass email](../attendees/mass-email.md).
:::

## Dealer Policy

<Sidenote title="Who can do this">
Needs the permission to update system settings, or the **Terms** tab doesn't load.
</Sidenote>

The Dealer Policy is what dealers agree to when they apply. Like the policies in [Convention setup](../quickstart/convention-setup.md), section 3, it can be organization-wide or for this convention only.

1. On **Dealer Settings**, click the **Terms** tab.

   <Result>**Dealer Policy** is shown. With no policy yet, it offers **Create Organization-wide Policy** and **Create Convention-specific Policy**.</Result>

2. Click **Create Convention-specific Policy**, or **Create Organization-wide Policy** to use it at all your conventions.

   <Result>A text box appears, containing *TBC*.</Result>

3. Replace *TBC* with your policy and click **Save**.

   <Result>A **Convention-specific policy saved** (or **Organization-wide policy saved**) message appears.</Result>

4. Open `/policy/vendor` on your instance, such as `https://your-event.concat.app/policy/vendor`.

   <Result>A **Dealer Policy** page shows your text.</Result>

:::caution[Watch out]
- The policy is live as soon as you create it, reading *TBC*. Replace it before dealers apply.
- No menu or footer links to `/policy/vendor`, and the default form's **Dealer Policy** box doesn't show the text. To show it, turn on **Show Preview of Terms** (section 4, step 4), or link to `/policy/vendor` in the agreement line.
:::

## Custom questions

Dealer questions, such as a website or what the dealer sells, are dealer options: separate from product options, with no prices. New conventions start with **Business Legal Name**, **Business Phone Number**, **Local Tax ID**, **Business Website**, **Business Description**, **Item Categories** and **Other Items**.

1. Go to **Housekeeping › Dealers › Options**.

   <Result>The **Options** page lists the dealer options.</Result>

2. Click **Create New Option**.

   <Result>The **Creating Option** form opens.</Result>

3. Enter a **Name**, choose a **Type** (see [Product Options](../products/options.md), Table 1.1), fill in its settings and click **Create**.

   <Result>A **New option has been created** message appears, and the option is listed.</Result>

A new option isn't asked until you add it to the form (section 4).

:::tip[Questions about the table]
To ask about a dealer's table, such as which side they want power on, assign a product option to the table type instead: see [Product Options](../products/options.md), section 3.
:::

## The dealer application form

<Sidenote title="One editor, three forms">
The registration, dealer and volunteer forms share one editor: see the [Registration form editor](../registration/form-editor.md).
</Sidenote>

The dealer form is the application's first page. A new convention starts with the sections **Business Info**, **Product Info** and **Dealer Policy**.

1. On **Dealer Settings › General**, in the **Form Editor** card, click **Go to Dealer Form Editor**.

   <Result>The **Express Mode Editor** opens with **Toolbox** (Table 4.1), **Form Editor** and **Preview** panes.</Result>

2. Drag **Option** from the **Toolbox** into a section of the form.

   <Result>The element appears in the section, with **Edit** and **Delete** buttons.</Result>

3. Click **Edit** on it, choose the **Option**, set **Display Name (optional)**, **Required?** and **Prevent changes to this option after application is submitted?** as needed, and click **Save**.

   <Result>The **Preview** pane shows the question.</Result>

4. *(Optional)* In the **Dealer Policy** section, click **Edit** on **Terms and conditions**, tick **Show Preview of Terms** and click **Save**.

   <Result>The **Preview** pane shows the policy text above the agreement checkbox.</Result>

5. Click **Save Changes**.

   <Result>A **Saved** message appears.</Result>

<TableFigure title="Dealer form elements">

| Element | What it adds |
| --- | --- |
| **Text block** | Text, with Markdown formatting. |
| **Divider** | A horizontal line. |
| **Terms and conditions** | Agreement to one of your policies, by checkbox or typed full name. <small>**Require Agreement To Submit** stops the dealer continuing without it.</small> |
| **Dealer PII** | One business detail, with **Type** `name` (business name), `email` (business email), `addressLine1`, `addressLine2`, `addressCity`, `addressState`, `addressZipcode` or `addressCountry`. |
| **Option** | One of the dealer options from section 3. |

</TableFigure>

:::caution[Watch out]
The form must keep a **Dealer PII** element of type `name` and one of type `email`, or **Save Changes** fails with *At least one field must be of type 'Dealer PII' with subtype 'name'.* (or `'email'`). Dealers see both as **Required**.
:::

Leaving with unsaved changes opens an **Unsaved Changes** dialog: **Save and Exit**, **Exit without Saving** or **Cancel**.
