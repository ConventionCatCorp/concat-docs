---
sidebar_position: 3
hide_table_of_contents: true
textbook: true
---

# Volunteer settings and form

Open volunteer applications and set up what applicants agree to and answer.

:::info[In this guide]
General settings, the Code of Conduct, questions, the application form and statistics.
:::

## General settings

<Sidenote title="Who can do this">
**Volunteer Settings**, the form editor and **Volunteer Stats** need `volunteer:admin`. The default *admin* and *hr* roles have it.
</Sidenote>

Applications start closed. Turn them on once your departments and form are ready.

<TableFigure title="General volunteer settings">

| Setting | What it does | New convention |
| --- | --- | --- |
| **Enable Volunteers** | Shows **Volunteering** in the homepage sidebar. <small>When off, the application page says *Volunteer applications for the convention are currently closed.*</small> | Off |
| **Enable Volunteer Emails** | Sends the confirmation, assignment and staff-removal emails. | On |
| **Allow Parents to Volunteer** | Lets people with child registrations apply. | Off |
| **Volunteers Require Emergency Contact** | Applicants must give an emergency contact when registering for a badge. | On |

</TableFigure>

1. Go to **Housekeeping › Volunteers › Volunteer Settings**.

   <Result>The **Volunteer Settings** page opens on the **General** tab.</Result>

2. In the **General** card, tick **Enable Volunteers**, adjust the other settings in Table 1.1 if needed, and click **Save**.

   <Result>A **Volunteer settings have been updated!** message appears.</Result>

3. Reload your instance's homepage and look in the sidebar under **Applications**.

   <Result>**Volunteering** is listed and opens the **Volunteer Application** page.</Result>

The **Export Data** card downloads volunteers' names, departments and contact methods as **CSV** or **JSON**. It needs `system:export`; see [Exports](../system/exports.md).

## Volunteer Code of Conduct

Applicants agree to this text on the form. Replace ConCat's sample text with your own.

1. Click the **Terms** tab.

   <Result>A **Volunteer Code of Conduct** box shows the current text.</Result>

2. Replace the text with your code of conduct and click **Save**.

   <Result>Your text is still there after you reload the page.</Result>

3. As an attendee, open **Volunteering** in the homepage sidebar.

   <Result>Your text is shown above a **Volunteer Terms** checkbox.</Result>

The text can be up to 8,000 characters and supports Markdown. Step 3 needs the form's **Terms and conditions** element (section 4).

## Questions

<Sidenote title="Who can do this">
Volunteer questions need `volunteer:update`.
</Sidenote>

Questions are volunteer options, kept apart from product and dealer options. A new convention starts with a set, such as *What convention days will you be available to help?*

1. Go to **Housekeeping › Volunteers › Options**.

   <Result>The **Options** page lists the questions.</Result>

2. Click **Create New Option**.

   <Result>The **Creating Option** form opens.</Result>

3. Enter a **Name** (the question applicants see), choose a **Type** (and a **Style**, if offered), fill in the other fields, and click **Create**.

   <Result>A **New option has been created** message appears, and the question is listed.</Result>

Types and styles are those in [Product Options](../products/options.md), Table 1.1, except **Currency**, and choices in a select question have no price. Click a question to change or delete it. The starting questions can't be deleted.

:::caution[Watch out]
A new question isn't asked until you add it to the form with an **Option** element (section 4).
:::

## The application form

<Sidenote title="One editor, three forms">
The registration and dealer forms use the same editor. See the [Registration form editor](../registration/form-editor.md) for sections and moving elements.
</Sidenote>

The form is made of sections holding the elements in Table 4.1.

<TableFigure title="Elements in the volunteer form's Toolbox">

| Element | What it adds |
| --- | --- |
| **Text block** | Text, with Markdown formatting. |
| **Divider** | A horizontal line. |
| **Terms and conditions** | A policy, agreed to with a checkbox or full name. <small>Used for the Code of Conduct.</small> |
| **Volunteer contacts** | Call, text, email and the other methods you list (Telegram, Discord and Bluesky by default). The applicant picks a preferred one. |
| **Option** | One question from section 3. |
| **Volunteer departments** | The department grid with **Experience**, **Interest** and **Avoid** boxes. |

</TableFigure>

1. On the **General** tab of **Volunteer Settings**, click **Go to Volunteer Form Editor** in the **Form Editor** card.

   <Result>The **Express Mode Editor** opens with the **Toolbox**, the form's sections and a **Preview**.</Result>

2. Drag **Option** from the **Toolbox** into a section.

   <Result>An **Option** element appears there, with an **Edit** button.</Result>

3. Click the element's **Edit** button.

   <Result>An **Update node: Option** dialog opens with an **Option** list and the settings in Table 4.2.</Result>

4. Choose your question in **Option**, tick the settings you want, and click **Save**.

   <Result>The question appears in the **Preview**.</Result>

5. Click **Save Changes**.

   <Result>A **Saved** message appears. If an element has a problem, *There are errors in your form. Please fix them before saving again.* appears instead, and the element shows **Error(s)**.</Result>

6. Click the back arrow (**Back**) in the editor's header.

   <Result>**Volunteer Settings** opens, after an **Unsaved Changes** dialog if you have unsaved changes.</Result>

<TableFigure title="Settings of an Option element">

| Setting | Effect |
| --- | --- |
| **Display Name (optional)** | Shown instead of the question's name. |
| **Required for submission** | Applicants must answer it. |
| **Visible to admins only** | Hidden from applicants and from leads without `volunteer:update`. Staff can fill it in (see [Volunteers](./volunteers.md), section 3). |
| **Disable after approval** | Once assigned, the volunteer can't change the answer. Staff still can. |
| **Display full width** | The question takes the section's full width. |

</TableFigure>

## Volunteer statistics

1. Go to **Housekeeping › Volunteers › Volunteer Stats**.

   <Result>The **Volunteer Statistics** page opens on the **Department** tab, with summary cards and a **Department Stats** table (Table 5.1).</Result>

2. Click the **Over Time** tab.

   <Result>A **Volunteer Applications Over Time** bar chart shows how many applications were created each day.</Result>

<TableFigure title="Department Stats columns">

| Column | Counts |
| --- | --- |
| **Staff** | Assigned volunteers with the *staff* role. |
| **Assigned** | Volunteers assigned to the department. |
| **Pending** | Volunteers with no assignment anywhere who chose **Interest** for the department. |

</TableFigure>

To email volunteers by department, see [Mass email](../attendees/mass-email.md).
