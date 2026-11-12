---
sidebar_position: 4
hide_table_of_contents: true
textbook: true
---

# Registration form editor

Build the form attendees fill in after choosing a tier: badge name, your questions, registration flags and an emergency contact.

:::info[In this guide]
How the form works (section 1), opening the editor (section 2), the editor's layout (section 3), sections (section 4), adding, moving and removing elements (section 5), element properties (section 6), previewing (section 7), and saving and leaving (section 8).
:::

## How the registration form works

<Sidenote title="One form for every tier">
Every tier uses the same form, as do the [Kiosk](./kiosk.md) and the form for modifying a registration.
</Sidenote>

The form is made of **sections**, shown to attendees as half- or full-width cards. Sections hold **elements**, such as text, a question or a button, which you drag in from a toolbox. A new convention's form starts with sections such as **Badge Info**, **Additional Options** and **Emergency Contacts**.

Questions come from [Product Options](../products/options.md), in two ways:

- **Option** element: one option you choose, shown to every attendee whatever their tier.
- **Other options** element: the options assigned to the attendee's tier (and its complimentary addons) that no **Option** element already shows. With none, its section is hidden.

An option placed with an **Option** element is required only for tiers it's assigned to with **Mark selected options as required.**

## Open the editor

<Sidenote title="Who can do this">
Needs `registration:form:manage`, which only the default *admin* role has. Without it, the **Form Editor** card is hidden.
</Sidenote>

1. In **Housekeeping › Registration › Settings**, click **Go to Registration Form Editor** in the **Form Editor** card.

   <Result>The editor opens full screen, headed **Express Mode Editor**, with the **Toolbox** and the **Form Editor**. The address ends in `/housekeeping/editor/registration`.</Result>

## The editor's layout

- **Toolbox**: the elements you can add (Table 5.1).
- **Form Editor**: your sections in order, with **Add New Section** below. Each element has a drag handle, a pencil button for its display name, **Edit** if it has properties, and **Delete**.
- **View Preview** (section 7) and **Save Changes** (section 8).

<Figure
  src="/img/guides/registration/form-editor.webp"
  alt="The Express Mode Editor: the Toolbox of elements on the left, the Badge Info section with three elements on the right, and View Preview and Save Changes buttons at the top right."
  title="The editor"
  markers={[
    { n: 1, x: 0.4, y: 12, w: 19.2, h: 86 },
    { n: 2, x: 20.9, y: 25.1, w: 78.2, h: 71.7 },
    { n: 3, x: 82.9, y: 12, w: 8.5, h: 9.2 },
    { n: 4, x: 91.2, y: 12, w: 8.7, h: 9.2 },
  ]}
>

1. The **Toolbox**.
2. A section. Its header has a drag handle, a pencil for its name, the width button and **Delete**; each element row has a drag handle, a pencil, **Edit** if it has properties, and **Delete**.
3. **View Preview**.
4. **Save Changes**.

</Figure>

Attendees see no change until you click **Save Changes**.

## Sections

1. Click **Add New Section** below the last section.

   <Result>A section called *New section* appears at the bottom.</Result>

2. To rename a section, click the pencil next to its name, type the name, and click **Save** next to it.

   <Result>The section header shows the new name.</Result>

3. To change a section's width, click its width button.

   <Result>The button switches between **Half Width** and **Full Width**, showing the section's width.</Result>

4. To reorder sections, drag a section by the handle at the left of its header.

   <Result>The section moves to where you drop it.</Result>

5. To remove a section, click **Delete** in its header.

   <Result>The section and its elements disappear at once, with no confirmation.</Result>

:::caution[Watch out]
To get back a section deleted by mistake, leave with **Exit without Saving** (section 8); this also discards your other unsaved changes.
:::

## Add, move and remove elements

1. Drag an element from the **Toolbox** into a section.

   <Result>Held over an empty section, the section says *Release to add this component*. Dropped, the element appears in the section.</Result>

2. To move an element, drag it by its handle, within its section or to another.

   <Result>The element moves to where you drop it.</Result>

3. *(Optional)* To name an element, click its pencil button, type in **Display Name (optional)**, and click the tick button.

   <Result>The element shows your name and its type in brackets, such as *Shirt size (Option)*.</Result>

4. To remove an element, click its **Delete** button, then **Delete** in the dialog.

   <Result>A **Delete Node?** dialog asks *Are you sure you want to delete this node?* After you confirm, the element is gone.</Result>

<TableFigure title="The registration form elements">

| Element | What attendees see | Properties (section 6) |
| --- | --- | --- |
| **Text block** | Markdown text | The text |
| **Divider** | A horizontal line | None |
| **Option** | One option, or the **Badge Name** field | Which option; **Display full width** |
| **Terms agreement** | A policy, with a checkbox attendees must tick | **Input type** (the policy); **Text to be displayed by the checkbox** <small>Default: *I have read and agree to the policies above.*</small> |
| **Link to terms page** | A checkbox attendees must tick, with text linking to your terms | The text, in Markdown <small>The default, *Do you agree to the terms?*, links to concat.app: change it to your terms page.</small> |
| **Registration flags** | A checkbox per [registration flag](./flags.md) visible to attendees | None |
| **Emergency contacts** | **Contact Name** and **Contact Phone** | **Required?** |
| **Badge preview** | The attendee's badge in your default badge design | None |
| **Submit button** | An extra **Submit** button | None |
| **Randomize button** | A **Randomize** button for a random badge name and species | None |
| **Badge art selector** | Your [badge art](./badge-art.md), to choose a background | None |
| **Other options** | The tier's options not placed with an **Option** element | None |
| **Profile picture** | A profile picture upload | **Title**; **Ignore Gravatar default image** |
| **Personal information** | One kind of the attendee's account details <small>Names, date of birth, phone and address appear only if your instance asks for them at sign-up, which ConCat Support sets.</small> | **Input type**: **Real Name**, **Date of Birth**, **Phone**, **Address**, **Email** or **Badge Name**; a Markdown label (not for **Phone**) |

</TableFigure>

The form always ends with a **Register** button (**Update Registration** when modifying), so a **Submit button** is optional. For the badge name, use an **Option** element set to **Badge Name**, not **Personal information**. **Badge preview** is hidden until you set a default design in the [Badge Designer](./badge_designer.md).

:::caution[Watch out]
Keep an **Emergency contacts** element on the form. Minors, PII-free children and, if your volunteer settings require it, volunteers must give an emergency contact: without the element they can't register, and see *Emergency Contact Info is required.*
:::

## Element properties

1. Click **Edit** on an element.

   <Result>A dialog titled **Update node:** and the element's name opens with its properties (Table 5.1).</Result>

2. Change the properties and click **Save**.

   <Result>The dialog closes. For an **Option**, the element's description shows **Option:** and the option's name.</Result>

The **Option** dialog lists **Badge Name** and every option by ID and name. **Terms agreement** lists policies by internal key: `privacy` (**Privacy terms**), `terms` (**Convention Policy / Terms & Conditions**) and `conventionTerms` (**Registration Terms**). You write them in **Housekeeping › System › Settings › Terms** ([Convention setup](../quickstart/convention-setup.md), section 3).

If an element's properties are wrong when you save, **There are errors in your form. Please fix them before saving again.** appears, and the element shows **Error(s):** and the problem.

## Preview the form

1. Click **View Preview**.

   <Result>The form appears as attendees see it for your first badge product, unsaved changes included, with a **Back to Editor** button.</Result>

2. Click **Back to Editor**.

   <Result>The editor returns, with your changes in place.</Result>

With no badge products, the preview says *Add a product to this convention before you can preview the registration form.* To test a particular tier, register as an attendee ([How attendees register](./registering.md)).

## Save and leave

1. Click **Save Changes**.

   <Result>A **Saved** message appears. Attendees see the new form the next time they open it.</Result>

2. Click the back arrow at the top left.

   <Result>The **Registration Settings** page opens.</Result>

With unsaved changes, the back arrow opens an **Unsaved Changes** dialog: choose **Save and Exit**, **Exit without Saving** or **Cancel** to stay.

:::note[Dealer and volunteer forms]
The dealer and volunteer application forms use the same editor, with their own toolbox; see [Dealer settings, policy and form](../dealers/settings.md) and [Volunteer settings and form](../volunteers/settings.md).
:::
