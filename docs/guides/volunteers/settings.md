---
sidebar_position: 3
hide_table_of_contents: true
textbook: true
---

# Volunteer settings and form

This guide opens volunteer applications and shapes them: the module's settings, the Code of Conduct applicants agree to, the questions they answer, and the layout of the application form. It ends with the volunteer statistics.

:::info[In this guide]
General settings (section 1), the Volunteer Code of Conduct (section 2), questions (section 3), the application form (section 4) and volunteer statistics (section 5).
:::

## General settings

<Sidenote title="Who can do this">
**Volunteer Settings**, the form editor and **Volunteer Stats** need the `volunteer:admin` permission. The default *admin* and *hr* roles have it.
</Sidenote>

Volunteer applications are closed on a new convention. Turn them on when your departments and form are ready.

<TableFigure title="General volunteer settings">

| Setting | What it does | New convention |
| --- | --- | --- |
| **Enable Volunteers** | Shows **Volunteering** in the homepage sidebar, so attendees can apply. <small>When off, the application page says *Volunteer applications for the convention are currently closed.* Housekeeping › Volunteers keeps working.</small> | Off |
| **Enable Volunteer Emails** | Sends the application confirmation, the assignment emails and the staff-removal email. | On |
| **Allow Parents to Volunteer** | Lets people with child registrations (parents and guardians) apply. | Off |
| **Volunteers Require Emergency Contact** | Makes anyone with a volunteer application enter an emergency contact when they register for a badge. | On |

</TableFigure>

1. Go to **Housekeeping › Volunteers › Volunteer Settings**.

   <Result>The **Volunteer Settings** page opens on the **General** tab. The other tabs are **Department(s)** and **Terms**. The page has three cards: **General**, **Export Data** and **Form Editor**. The address ends in `/housekeeping/volunteers/settings`.</Result>

2. In the **General** card, tick **Enable Volunteers**, change the other settings in Table 1.1 if you need to, then click **Save**.

   <Result>A **Volunteer settings have been updated!** message appears.</Result>

3. Reload your instance's homepage and look in the sidebar under **Applications**.

   <Result>**Volunteering** is listed. It opens the **Volunteer Application** page.</Result>

The **Export Data** card downloads volunteers' names, assigned departments and contact methods as **CSV** or **JSON**. It needs the `system:export` permission; see [Exports](../system/exports.md).

## Volunteer Code of Conduct

Applicants agree to your Volunteer Code of Conduct on the application form. A new convention starts with ConCat's sample text, so replace it with your own.

1. Click the **Terms** tab.

   <Result>A **Volunteer Code of Conduct** box, described as *Policy volunteers must agree when applying.*, shows the current text, with a **Save** button below it.</Result>

2. Replace the text with your code of conduct, then click **Save**.

   <Result>The box keeps your text when you reload the page.</Result>

3. As an attendee, open **Volunteering** in the homepage sidebar.

   <Result>The **Volunteer Code of Conduct** section at the top of the form shows your text, above a **Volunteer Terms** checkbox.</Result>

The text can be up to 8,000 characters, and Markdown formatting is shown. Step 3 assumes the form still has its **Terms and conditions** element (section 4).

## Questions

<Sidenote title="Who can do this">
Volunteer questions need the `volunteer:update` permission.
</Sidenote>

Questions on the volunteer form are options, like the options on products. They're a separate list from product and dealer options. A new convention already has a set, such as *Roughly, how many hours would you want to volunteer in total?* and *What convention days will you be available to help?*

1. Go to **Housekeeping › Volunteers › Options**.

   <Result>The **Options** page opens, with a **Create New Option** button above a searchable table with the columns **Name**, **Type** and **Details**. The address ends in `/housekeeping/volunteers/options`.</Result>

2. Click **Create New Option**.

   <Result>The **Creating Option** form opens, with a **Back to Options** button above it.</Result>

3. Enter a **Name** (the question applicants see), choose a **Type**, and a **Style** if the type has one. Fill in the remaining fields, then click **Create**.

   <Result>A **New option has been created** message appears and you're back on **Options**, where the question is listed.</Result>

The types and styles are those in [Product Options](../products/options.md), Table 1.1, except **Currency**. Choices in a select question have no price. To change or delete a question, click it in the list: the **Editing Option** page has **Save Changes** and **Delete**. The questions a new convention starts with can't be deleted.

:::caution[Watch out]
A new question isn't asked until you add it to the form with an **Option** element (section 4).
:::

## The application form

<Sidenote title="One editor, three forms">
The volunteer form uses the same editor as the registration and dealer forms. The [Registration form editor](../registration/form-editor.md) covers sections and moving elements in detail.
</Sidenote>

The form is built from sections, each holding elements. A new convention's form has the sections *Volunteer Code of Conduct*, *Contact Information*, *Availability*, *Departments*, *Previous Years* and *Anything Else*.

<TableFigure title="Elements in the volunteer form's Toolbox">

| Element | What it adds |
| --- | --- |
| **Text block** | Text, with Markdown formatting. |
| **Divider** | A horizontal line. |
| **Terms and conditions** | A policy and the checkbox or full name that agrees to it. <small>The default form uses it for the Volunteer Code of Conduct.</small> |
| **Volunteer contacts** | Call, text and email, plus the other contact methods you list (Telegram, Discord and Bluesky by default). The applicant picks their preferred one. |
| **Option** | One question from section 3. |
| **Volunteer departments** | The grid of departments with **Experience**, **Interest** and **Avoid** boxes. |

</TableFigure>

1. In **Housekeeping › Volunteers › Volunteer Settings**, on the **General** tab, find the **Form Editor** card and click **Go to Volunteer Form Editor**.

   <Result>The **Express Mode Editor** opens, with the **Toolbox**, the **Form Editor** showing the form's sections, and a **Preview** of the form. The address ends in `/housekeeping/editor/volunteers`.</Result>

2. Drag **Option** from the **Toolbox** into a section.

   <Result>An **Option** element appears where you dropped it, with **Edit** and **Delete** buttons.</Result>

3. Click the element's **Edit** button.

   <Result>A dialog titled **Update node: Option** opens, with **Option**, **Display Name (optional)**, **Required for submission**, **Visible to admins only**, **Disable after approval** and **Display full width** (Table 4.2), and **Cancel** and **Save**.</Result>

4. Choose your question in **Option**, tick the settings you want, then click **Save**.

   <Result>The dialog closes, and the question appears in the **Preview**.</Result>

5. Click **Save Changes**.

   <Result>A **Saved** message appears. If an element has a problem, *There are errors in your form. Please fix them before saving again.* appears instead, and the element shows **Error(s)**.</Result>

6. Click the back arrow (**Back**) in the editor's header.

   <Result>**Volunteer Settings** opens. If you left changes unsaved, an **Unsaved Changes** dialog offers **Save and Exit**, **Exit without Saving** and **Cancel** first.</Result>

<TableFigure title="Settings of an Option element">

| Setting | Effect |
| --- | --- |
| **Display Name (optional)** | Shown instead of the question's name. |
| **Required for submission** | Applicants must answer it. |
| **Visible to admins only** | Hidden from applicants, and from leads without `volunteer:update`. Staff can fill it in on the application (see [Volunteers](./volunteers.md), section 3). |
| **Disable after approval** | Once the volunteer is assigned to a department, they can't change the answer. Staff still can. |
| **Display full width** | The question takes the section's full width. |

</TableFigure>

## Volunteer statistics

1. Go to **Housekeeping › Volunteers › Volunteer Stats**.

   <Result>The **Volunteer Statistics** page opens on the **Department** tab. Under **General Stats** are the cards **Volunteer Applications**, **Department(s)** and **Pending Applications**; under **Department Stats** is a table with the columns **Name**, **Staff**, **Assigned** and **Pending**.</Result>

2. Click the **Over Time** tab.

   <Result>A bar chart titled **Volunteer Applications Over Time** shows how many applications were created on each day.</Result>

<TableFigure title="Department Stats columns">

| Column | Counts |
| --- | --- |
| **Staff** | Volunteers assigned to the department who have the *staff* role. |
| **Assigned** | Volunteers assigned to the department. |
| **Pending** | Volunteers with no assignment anywhere who chose **Interest** for the department. |

</TableFigure>

To email volunteers by department, see [Mass email](../attendees/mass-email.md).
