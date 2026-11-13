---
sidebar_position: 8
hide_table_of_contents: true
textbook: true
---

# Registration flags

Registration flags are yes-or-no checkboxes on the registration form, such as joining the newsletter. Create and edit them, see who set one, and clear the data of attendees who asked to be deleted.

:::info[In this guide]
How flags work, creating a flag, editing and deleting flags, who set a flag, and clearing *nukeme* data.
:::

## How flags work

<Sidenote title="Who can do this">
**Registration Flags** needs `registration:update`, which the default *admin* and *registration* roles have.
</Sidenote>

The form's **Registration flags** element ([Registration form editor](./form-editor.md), section 5) shows each flag as a checkbox labeled with its **Description**. Once ticked, its **Enabled description** appears below, for example to thank the attendee. Flags appear in **Sort order**, and only if **Make visible to attendees** is ticked.

**Short Name** identifies the flag inside ConCat and can't be changed later. A new convention starts with the flags in Table 1.1.

<TableFigure title="The flags a new convention starts with">

| Short Name | Description |
| --- | --- |
| `fursuits` | *I plan to bring fursuits.* |
| `mailswag` | *If I don't make it to the con, please mail me the swag.* |
| `asl` | *I want to request ASL interpreters for panels.* |
| `newsletter` | *I want to receive the convention e-mail newsletter.* |
| `picrelease` | *You may use my convention photos for promotional purposes.* |
| `nukeme` | *Please delete my account after the con is over.* <small>Built in: it can't be deleted, and it's used in section 5.</small> |

</TableFigure>

## Create a flag

1. Go to **Housekeeping › Registration › Registration Flags** ([Start here](../quickstart/start-here.md), section 2).

   <Result>The **Registration Flags** page shows a table of flags and a green **Create** (+) button.</Result>

2. Click the green **Create** (+) button.

   <Result>An **Edit Entry** dialog opens with **Short Name**, **Description**, **Enabled description**, **Sort order** and **Make visible to attendees**.</Result>

3. Fill in the fields, tick **Make visible to attendees**, and click **Add**.

   <Result>An **Item created** message appears, and the flag is listed.</Result>

4. As an attendee, open your registration form ([How attendees register](./registering.md), section 4) and tick the new flag.

   <Result>The checkbox shows your **Description**; once ticked, your **Enabled description** appears below it.</Result>

## Edit or delete a flag

1. In a flag's **Actions**, click the edit (pencil) button (Figure 3.1).

   <Result>**Edit Entry** opens with the flag's values; **Short Name** can't be changed.</Result>

2. Change the fields and click **Save**.

   <Result>An **Item edited** message appears, and the table shows the new values.</Result>

3. To delete a flag, click its delete (bin) button, then **Delete** in the dialog.

   <Result>A **Delete entry** dialog asks *Are you sure you want to delete? Data for this option from users will be erased.* After you confirm, an **Item deleted** message appears and the flag is gone.</Result>

<Figure
  src="/img/guides/registration/flags-table.webp"
  alt="The Registration Flags card: a green add button, a search box, and a table of flags. The nukeme row's actions are List users, Clear nukeme PII and Edit; the picrelease row's are List users, Edit and Delete."
  title="The Registration Flags table"
  markers={[
    { n: 1, x: 96.2, y: 3.6, w: 2.3, h: 8.1 },
    { n: 2, x: 90.1, y: 55.2, w: 3.9, h: 10.8 },
    { n: 3, x: 86.5, y: 84.6, w: 11.2, h: 10.8 },
  ]}
>

1. **Create** (section 2).
2. **Clear "nukeme" PII?**, on the `nukeme` row only (section 5).
3. A flag's **Actions**: **List users** (section 4), edit and delete. `nukeme` has no delete button.

</Figure>

To stop offering a flag but keep who set it, untick **Make visible to attendees** instead of deleting it.

## List the attendees who set a flag

1. In a flag's **Actions**, click the **List users** (people) button.

   <Result>A **Users with the flag** dialog shows *Total Results:* and a numbered list of names, each linked to the attendee's profile.</Result>

2. Click **Close**.

   <Result>The dialog closes.</Result>

## Clear the data of nukeme attendees

<Sidenote title="Who can do this">
Requesting the clear also needs `system:export`. Canceling it needs `staff:admin:update`, `pii:admin:read`, `pii:admin:delete` and `system:settings:update`. The default *admin* role has them all.
</Sidenote>

Attendees who tick `nukeme` ask for their account to be deleted after the convention. Once it has ended, you can request that ConCat clear the personal data (PII) of all of them. The clear runs 24 hours after the request, leaving time to cancel.

1. On the `nukeme` row, click the **Clear "nukeme" PII?** button (a crossed-out people icon).

   <Result>A **Clear "nukeme" PII?** dialog warns that the PII will be cleared in 24 hours unless canceled, and that this is irreversible.</Result>

2. *(Optional)* Tick **Delete Dealer Data** or **Delete Volunteer Data** to also clear these attendees' dealer or volunteer applications. Tick **Exclude specific users?** and choose attendees to leave out. Then click **Request to Clear PII**.

   <Result>A **Request successfully created.** message appears. Before the convention's end date, *You cannot clear all PII before the convention has ended.* appears instead; if a request is already waiting, *A pending deletion request already exists.*</Result>

3. Go to **Housekeeping › System › Settings**.

   <Result>The **Convention** tab shows a red notice of the active request, with the date and time the PII will be cleared and a **Cancel Request** button.</Result>

4. *(Optional, to cancel)* Click **Cancel Request**, then **Confirm Cancellation**.

   <Result>A **Request was successfully canceled.** message appears, and the notice is gone.</Result>

:::danger[Irreversible]
Once the 24 hours have passed, the data is cleared and can't be recovered. Export anything you need first; see [Exports](../system/exports.md).
:::
