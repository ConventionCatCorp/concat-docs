---
sidebar_position: 8
hide_table_of_contents: true
textbook: true
---

# Registration flags

Registration flags are yes-or-no choices attendees make on the registration form, such as joining the newsletter or asking for ASL interpreters. This guide creates and edits flags, lists who set a flag, and clears the personal data of attendees who asked to be deleted after the event.

:::info[In this guide]
How flags work (section 1), creating a flag (section 2), editing and deleting flags (section 3), listing the attendees who set a flag (section 4), and clearing the data of attendees who chose *nukeme* (section 5).
:::

## How flags work

<Sidenote title="Who can do this">
**Registration Flags** needs the `registration:update` permission, which the default *admin* and *registration* roles have.
</Sidenote>

Each flag is a checkbox on the registration form, shown by the form's **Registration flags** element ([Registration form editor](./form-editor.md), section 5). The attendee sees the flag's **Description** next to the checkbox. When they tick it, the **Enabled description** appears below, for example to thank them or explain what happens next. Flags are shown in **Sort order**, and only if **Make visible to attendees** is ticked.

The **Short Name** identifies the flag inside ConCat and can't be changed after the flag is created. A new convention starts with the flags in Table 1.1.

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

1. Go to **Housekeeping › Registration › Registration Flags** (the module menu is explained in [Start here](../quickstart/start-here.md), section 2).

   <Result>The **Registration Flags** page shows a **Registration Flags** card with a green **Create** (+) button, and a searchable table with the columns **Short Name**, **Description**, **Enabled description**, **Sort order**, **Make visible to attendees** (**Yes** or **No**) and **Actions**.</Result>

2. Click the green **Create** (+) button.

   <Result>An **Edit Entry** dialog opens with **Short Name**, **Description**, **Enabled description**, **Sort order** and a **Make visible to attendees** checkbox, and the buttons **Add** and **Cancel**.</Result>

3. Fill in the fields, tick **Make visible to attendees**, and click **Add**.

   <Result>An **Item created** message appears, and the flag is listed in the table.</Result>

4. As an attendee, open your registration form ([How attendees register](./registering.md), section 4) and tick the new flag.

   <Result>The checkbox shows your **Description**, and once ticked, your **Enabled description** appears below it.</Result>

## Edit or delete a flag

1. In a flag's **Actions**, click the edit (pencil) button.

   <Result>The **Edit Entry** dialog opens with the flag's values. **Short Name** can't be changed.</Result>

2. Change the fields and click **Save**.

   <Result>An **Item edited** message appears, and the table shows the new values.</Result>

3. To delete a flag, click its delete (bin) button, then **Delete** in the dialog.

   <Result>A **Delete entry** dialog asks *Are you sure you want to delete? Data for this option from users will be erased.* After you confirm, an **Item deleted** message appears and the flag is no longer listed.</Result>

To stop offering a flag without losing who set it, untick **Make visible to attendees** instead of deleting it.

## List the attendees who set a flag

1. In a flag's **Actions**, click the **List users** (people) button.

   <Result>A **Users with the flag** dialog shows *Total Results:* and the number, then a numbered list of names. Each name links to that attendee's profile.</Result>

2. Click **Close**.

   <Result>The dialog closes.</Result>

## Clear the data of nukeme attendees

<Sidenote title="Who can do this">
Requesting the clear also needs the `system:export` permission. Cancelling it needs `staff:admin:update`, `pii:admin:read`, `pii:admin:delete` and `system:settings:update`. The default *admin* role has them all.
</Sidenote>

Attendees who tick the `nukeme` flag ask for their account to be deleted after the convention. Once the convention has ended, you can request that ConCat clear the personal data (PII) of everyone who set it. The clear runs 24 hours after the request, so there's time to cancel.

1. On the `nukeme` row, click the **Clear "nukeme" PII?** button (a crossed-out people icon).

   <Result>A **Clear "nukeme" PII?** dialog asks *Are you sure you want to request to clear PII of users who selected "nukeme"? It will be cleared in 24 hours unless canceled. Once cleared, this is irreversible.* It has the checkboxes **Delete Dealer Data**, **Delete Volunteer Data** and **Exclude specific users?**, and a **Request to Clear PII** button.</Result>

2. *(Optional)* Tick **Delete Dealer Data** or **Delete Volunteer Data** to also clear the dealer or volunteer applications of these attendees. Tick **Exclude specific users?** and choose the attendees to leave out. Then click **Request to Clear PII**.

   <Result>A **Request successfully created.** message appears. Before the convention's end date, *You cannot clear all PII before the convention has ended.* appears instead, and if a request is already waiting, *A pending deletion request already exists.*</Result>

3. Go to **Housekeeping › System › Settings**.

   <Result>The **Convention** tab shows a red notice: *There is an active request to clear PII of accounts who selected "nukeme". PII will be cleared on* the date and time, with a **Cancel Request** button.</Result>

4. *(Optional, to cancel)* Click **Cancel Request**, then **Confirm Cancellation**.

   <Result>The dialog warns *This cannot be undone, and a new request will need to be made in order to clear PII.* After you confirm, a **Request was successfully canceled.** message appears and the notice is gone.</Result>

:::danger[Irreversible]
Once the 24 hours have passed, the data is cleared and can't be recovered. Export anything you need to keep first; see the *Exports* guide (System section).
:::
