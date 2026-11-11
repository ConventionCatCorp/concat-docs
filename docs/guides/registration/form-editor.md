---
sidebar_position: 4
hide_table_of_contents: true
textbook: true
---

# Registration form editor

The registration form is the page attendees fill in after choosing a tier: their badge name, your questions, the registration flags, an emergency contact. This guide explains how the form is built and how to change it in the form editor.

:::info[In this guide]
How the registration form works (section 1), opening the editor (section 2), the editor's layout (section 3), sections (section 4), adding, moving and removing elements (section 5), element properties (section 6), previewing the form (section 7), and saving and leaving (section 8).
:::

## How the registration form works

<Sidenote title="One form for every tier">
Every tier uses the same form, and so do the self-registration [Kiosk](./kiosk.md) and the form attendees see when they modify a registration.
</Sidenote>

The form is made of **sections**, shown to attendees as cards, each half or full width. Each section holds **elements**: a block of text, a question, the badge preview, a submit button. You build it by dragging elements from a toolbox into sections. A new convention starts with a form that has sections such as **Badge Info** (the badge name and a **Randomize** button), **Additional Options** (the registration flags) and **Emergency Contacts**.

Questions come from [Product Options](../products/options.md), in two ways:

- **Option** element: shows one option of your choice, to every attendee, whatever tier they picked.
- **Other options** element: shows the options assigned to the attendee's tier (and to its complimentary addons) that aren't already on the form through an **Option** element. If there are none, its section isn't shown.

An option placed with an **Option** element is required only for tiers it's assigned to with **Mark selected options as required.**

## Open the editor

<Sidenote title="Who can do this">
The editor needs the `registration:form:manage` permission, which only the default *admin* role has. Without it, the **Form Editor** card isn't shown.
</Sidenote>

1. Go to **Housekeeping › Registration › Settings**. In the **Form Editor** card, click **Go to Registration Form Editor**.

   <Result>The editor opens full screen, headed **Express Mode Editor** with a back arrow. The **Toolbox** is on the left and the **Form Editor** on the right, with **View Preview** and **Save Changes** buttons. The address ends in `/housekeeping/editor/registration`.</Result>

## The editor's layout

- **Toolbox**: the elements you can add, each with its name and a short description (Table 5.1).
- **Form Editor**: your form's sections, in order, with an **Add New Section** button below them. Each element in a section shows its name, a drag handle, an edit (pencil) button for its display name, an **Edit** button if it has properties, and **Delete**.
- **View Preview** shows the form as attendees will see it (section 7). **Save Changes** saves it (section 8).

The editor changes nothing for attendees until you click **Save Changes**.

## Sections

1. Click **Add New Section** below the last section.

   <Result>A section called *New section* appears at the bottom, saying *Drag components from the toolbox to start designing your Express Mode page.*</Result>

2. To rename a section, click the pencil button next to its name, type the new name, and click **Save** next to it.

   <Result>The section header shows the new name.</Result>

3. To change a section's width, click its width button.

   <Result>The button switches between **Half Width** and **Full Width**, showing the width the section now has.</Result>

4. To reorder sections, drag a section by the handle at the left of its header.

   <Result>The section moves to where you drop it.</Result>

5. To remove a section, click **Delete** in its header.

   <Result>The section and everything in it disappear at once, with no confirmation.</Result>

:::caution[Watch out]
A section you've just added shows **Full Width** but appears at half width on the form. Click its width button twice to make it full width, and check with **View Preview**. If you delete a section by mistake, leave the editor with **Exit without Saving** (section 8) to get it back; this also discards your other unsaved changes.
:::

## Add, move and remove elements

1. Drag an element from the **Toolbox** into a section.

   <Result>While you hold it over an empty section, the section says *Release to add this component*. When you drop it, the element appears in the section.</Result>

2. To move an element, drag it by its handle to another place, in the same section or another one.

   <Result>The element moves to where you drop it.</Result>

3. *(Optional)* To give an element a name of your own, click the pencil button next to its name, type in **Display Name (optional)**, and click the tick button.

   <Result>The element shows your name followed by its type in brackets, such as *Shirt size (Option)*.</Result>

4. To remove an element, click its **Delete** button, then **Delete** in the dialog.

   <Result>A **Delete Node?** dialog asks *Are you sure you want to delete this node?* After you confirm, the element is gone.</Result>

<TableFigure title="The registration form elements">

| Element | What attendees see | Properties (section 6) |
| --- | --- | --- |
| **Text block** | Markdown-enabled text | The text, in Markdown |
| **Divider** | A horizontal line | None |
| **Option** | One option, or the **Badge Name** field | Which option; **Display full width** |
| **Subheader** | Nothing: the registration form doesn't show subheaders <small>Use a **Text block** with a Markdown heading instead.</small> | None |
| **Terms agreement** | One of your policies, with a checkbox attendees must tick | **Input type**: which policy; **Text to be displayed by the checkbox** <small>Default: *I have read and agree to the policies above.*</small> |
| **Link to terms page** | A checkbox with text that links to your terms, which attendees must tick | The text, in Markdown <small>The default text, *Do you agree to the terms?*, links to concat.app. Change the link to your own terms page.</small> |
| **Registration flags** | A checkbox for each [registration flag](./flags.md) marked visible to attendees | None |
| **Emergency contacts** | **Contact Name** and **Contact Phone** fields | **Required?** |
| **Badge preview** | The attendee's badge, drawn with your default badge design | None |
| **Submit button** | An extra **Submit** button inside the form | None |
| **Randomize button** | A **Randomize** button that fills in a random badge name and species | None |
| **Badge art selector** | Your [badge art](./badge-art.md), to choose a background | None |
| **Other options** | The tier's options not placed with an **Option** element | None |
| **Profile picture** | A field to upload a profile picture | **Title**; **Ignore Gravatar default image** |
| **Personal information** | The attendee's own details of one kind, as stored on their account <small>Names, date of birth, phone and address appear only if your instance asks for personal details at sign-up, which ConCat Support sets.</small> | **Input type**: **Real Name**, **Date of Birth**, **Phone**, **Address**, **Email** or **Badge Name**; a label in Markdown (not for **Phone**) |

</TableFigure>

The form always ends with its own **Register** button (**Update Registration** when an attendee modifies a registration), so you don't need a **Submit button** element. For the badge name, use an **Option** element set to **Badge Name**, not **Personal information**. The **Badge preview** isn't shown if you haven't set a default design in the [Badge Designer](./badge_designer.md).

:::caution[Watch out]
Keep an **Emergency contacts** element on the form. Minors, PII-free children and, if your volunteer settings require it, volunteers must give an emergency contact. Without the element they can't register, and see *Emergency Contact Info is required.*
:::

## Element properties

1. Click **Edit** on an element.

   <Result>A dialog titled **Update node:** and the element's name opens, showing its properties from Table 5.1.</Result>

2. Change the properties and click **Save**.

   <Result>The dialog closes. For an **Option**, the element's description now shows **Option:** and the option's name.</Result>

The **Option** dialog lists **Badge Name** and every option by its ID and name. **Terms agreement** lists your policies by their internal keys, for example `privacy` for **Privacy terms**, `terms` for **Convention Policy / Terms & Conditions** and `conventionTerms` for **Registration Terms**; you write them in **Housekeeping › System › Settings › Terms** ([Convention setup](../quickstart/convention-setup.md), section 3).

If an element's properties are wrong when you save the form, a **There are errors in your form. Please fix them before saving again.** message appears, and the element shows **Error(s):** and the problem.

## Preview the form

1. Click **View Preview**.

   <Result>The form is shown as attendees will see it, for your first badge product, including changes you haven't saved. A **Back to Editor** button is at the top.</Result>

2. Click **Back to Editor**.

   <Result>The editor is shown again, with your changes still in place.</Result>

If you have no badge products yet, the preview says *Add a product to this convention before you can preview the registration form.* To see the form exactly as an attendee does, with a particular tier, register as an attendee ([How attendees register](./registering.md)).

## Save and leave

1. Click **Save Changes**.

   <Result>A **Saved** message appears. Attendees see the new form the next time they open it.</Result>

2. Click the back arrow at the top left.

   <Result>The **Registration Settings** page opens.</Result>

If you click the back arrow with unsaved changes, an **Unsaved Changes** dialog says *You have unsaved changes! If you leave now, your changes will be lost.* Choose **Save and Exit**, **Exit without Saving** or **Cancel** (to stay in the editor).

:::note[Dealer and volunteer forms]
The dealer and volunteer application forms use the same editor, with their own toolbox and a preview always shown beside the form. They're opened from **Dealer Settings** and **Volunteer Settings**; see the *Dealer settings* and *Volunteer settings* guides.
:::
