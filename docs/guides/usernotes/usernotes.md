---
sidebar_position: 1
hide_table_of_contents: true
textbook: true
---

# User Notes

Record what your team needs to know about a person, from a commendation to a ban, and handle the account reviews a ban can trigger.

:::info[In this guide]
How notes work (section 1), notes on a profile (section 2), searching and creating notes (section 3), bans (section 4), account reviews (section 5), and note categories (section 6).
:::

## How notes work

<Sidenote title="Whole organization">
Notes belong to your organization, so they follow a person to your next convention unless kept to this one (section 2).
</Sidenote>

Every note has a category. Your organization starts with the eight in Table 1.1. The three that do something special can't be deleted.

<TableFigure title="Default note categories">

| Category | What it does |
| --- | --- |
| **Commendation**, **Feedback**, **Misc.**, **Reprimand**, **Request** | Nothing special. |
| **Cashier** | Shown at the Cashier UI under **User Notes** when the person checks in. |
| **Restriction** | A *shadow ban*: the person isn't told, but staff see a red **Restriction** badge next to them in User Search. <small>Restricted category.</small> |
| **Ban** | Stops the person from doing something, such as registering or dealing (section 4). They see a generic banned message. <small>Restricted category.</small> |

</TableFigure>

Notes in a *restricted* category are only visible with `user:note:read:hr`, whatever other roles a person has. **Ban** and **Restriction** notes always cover the whole organization.

<TableFigure title="Who can do what">

| Action | Permission | Default roles with it |
| --- | --- | --- |
| Read notes in unrestricted categories | `user:note:read` | admin, hr, user |
| Read notes in restricted categories (**Ban**, **Restriction**) | `user:note:read:hr` | admin, hr |
| Create a note, including a ban | `user:note:create` | admin, hr, registration, staff |
| Edit a note | `user:note:edit` | admin, hr, registration, staff |
| Delete a note; complete an account review | `user:note:delete` | admin, hr |
| Manage categories; read every note | `user:note:categories:manage` | admin |

</TableFigure>

A role can also grant reading chosen categories under **User Note Categories** (see [Users and access](../quickstart/users-and-access.md), section 3). Restricted ones still need `user:note:read:hr`.

## Notes on a profile

1. Open the person's profile (see [Finding attendees](../attendees/user-search.md), section 4) and click the **Notes** tab.

   <Result>A **Notes** card lists their notes, or says *There are no notes for this user.* If you can create notes, an **Add Note** card is beside it.</Result>

2. Choose a **Note Category**, enter the **Text**, and click **Add New Note** (Figure 2.1).

   <Result>The note appears in the **Notes** card. A note kept to this convention has a grey badge with the convention's short name.</Result>

<Figure
  src="/img/guides/usernotes/add-note.webp"
  alt="The Add Note card: Note Category set to Cashier with its description, a ticked Apply only to this convention. checkbox, a Text box and an Add New Note button."
  title="The Add Note card"
  width="309px"
  markers={[
    { n: 1, x: 5.2, y: 15.1, w: 89.6, h: 17.2 },
    { n: 2, x: 5.2, y: 50.4, w: 89.6, h: 6.9 },
    { n: 3, x: 5.2, y: 82.2, w: 89.6, h: 10.1 },
  ]}
>

1. **Note Category**, with what the category does below it.
2. **Apply only to this convention.**, ticked at the start. See the caution below.
3. **Add New Note**.

</Figure>

:::caution[Keeping a note to this convention]
**Apply only to this convention.** starts ticked, but the note is saved for your whole organization unless you change the box first. To keep a note to this convention, untick and re-tick the box before you click **Add New Note**; the grey badge confirms it.
:::

3. *(Optional: edit)* Click the note's edit button (<MaterialIcon name="edit" />), change it in the **Edit User Note** dialog, and click **Edit**.

   <Result>A **Note has been edited** message appears.</Result>

4. *(Optional: delete)* Click the note's delete button (<MaterialIcon name="delete" />), then **Delete** in the **Delete note?** dialog.

   <Result>The note is gone from the list.</Result>

Ban notes have no edit button: delete the ban, which lifts it, and create a new one.

## Search and create notes

The **User Notes** page lists everyone's notes, including bans on people with no account.

1. Go to **Housekeeping › Attendees › User Notes**.

   <Result>The **User Notes** page lists the notes you can read, with **Search notes...**, a category list, a ticked **Hide Notes for Other Conventions** box and, if you can create notes, a **Create Note** button.</Result>

2. Type in **Search notes...**, or choose a category.

   <Result>Only notes in that category whose text, or the person's first or last name, contains what you typed are listed.</Result>

3. Click **Create Note**.

   <Result>A **Create New User Note** dialog opens.</Result>

4. Choose the **Note Category**, select the person in **User**, enter the **Text**, and click **Create**. To keep the note to this convention, see section 2 first.

   <Result>A **Note has been added** message appears, and the note is listed.</Result>

Untick **Hide Notes for Other Conventions** to see notes kept to other conventions. Every note except a ban needs a person, or **Create** shows *User must be selected*.

## Ban someone

<Sidenote title="Who can do this">
Creating a ban needs `user:note:create`. Seeing bans afterwards needs `user:note:read:hr`.
</Sidenote>

A ban is a **Ban** note whose **Ban Category** sets what the person can't do (Table 4.1). You can ban a name with no account; if that person signs up later, they're caught (section 5).

<TableFigure title="Ban categories">

| Ban Category | Effect |
| --- | --- |
| **Registration** | *Registration bans prevent the user from logging in.* The person is logged out at once. At the Cashier UI their page says *Attendee is currently banned from attending the convention.* |
| **Dealer** | *Dealer bans prevent the user from dealing.* |
| **Volunteer** | *Volunteer bans prevent the user from creating a volunteer application.* |
| **Other** | *User is not prevented from performing any actions.* Records a ban ConCat doesn't enforce. |

</TableFigure>

1. Go to **Housekeeping › Attendees › User Notes** and click **Create Note**.

   <Result>A **Create New User Note** dialog opens.</Result>

2. Set **Note Category** to **Ban**.

   <Result>**User** becomes **User (Optional)**, and **Ban Category** (set to **Registration**), **First Name** and **Last Name** appear.</Result>

3. If the person has an account, select them under **User (Optional)**. If not, enter their **First Name** and **Last Name**.

   <Result>Selecting an account fills in **First Name** and **Last Name** and locks them.</Result>

4. Choose the **Ban Category**, enter the reason in **Text**, and click **Create**.

   <Result>A **Note has been added** message appears, and the ban is listed with a red **Ban** badge (or **Ban on Dealer**, **Ban on Volunteer**, **Ban on Other**).</Result>

:::caution[Watch out]
A registration ban logs the person out at once, and they can't log back in. Check you've selected the right account before you click **Create**.
:::

## Account reviews

<Sidenote title="The email">
Each review also emails *Registration Requires Review* to your registration address, set on the **Contact** tab of **Housekeeping › System › Settings**.
</Sidenote>

When an account or sub-account is created, ConCat compares its name with every ban in your organization, in any ban category. A match marks the account **Pending Review**, so someone can check whether it's the banned person signing up again.

A name matches when, ignoring capitals, the first name starts with the same three letters as the ban's and the last name with the same letter. If both have a date of birth, the year and month must match too. So a ban on *Alexander Smith* flags *Alex Sanders*.

An account under review can still log in, but the Cashier UI won't issue a badge: *Attendee is currently under review. A badge cannot be issued until this is cleared.*

1. Go to **Housekeeping › Attendees › Dashboard**.

   <Result>An **Accounts Pending Review** card shows how many accounts are waiting, with a **View** button. It appears only when at least one is waiting, and only to people with `user:note:delete`.</Result>

2. Click **View**, then click a name in the list.

   <Result>The profile has a yellow **Pending Review** badge. The **Information** card starts with **Possible duplicate account with a ban**, showing the matching names and the ban's text, or **No matching ban** if the ban has since been deleted.</Result>

3. If this is the banned person, ban this account too (section 4).

   <Result>For a registration ban, the ban is on the profile's **Notes** tab and the person is logged out.</Result>

4. Click the green tick button (<MaterialIcon name="check" />) on the **Possible duplicate account with a ban** row, then **Complete review** in the **Complete account review?** dialog.

   <Result>The row and the **Pending Review** badge are gone, and the dashboard card no longer counts the account.</Result>

## Note categories

<Sidenote title="Who can do this">
The **Note Categories** tab needs `user:note:categories:manage`, which only *admin* has by default.
</Sidenote>

1. Go to **Housekeeping › System › Settings** and click the **Note Categories** tab.

   <Result>**User Note Category Settings** lists the categories, each with a **Modify** button, and a **Create New Category** button.</Result>

2. Click **Create New Category**.

   <Result>A **New Category** dialog opens.</Result>

3. Fill in the fields and click **Submit**.

   <Result>A **New category has been created.** message appears, and the category is listed.</Result>

4. *(Optional: edit)* Click **Modify** on a category, change it in the **Edit Category** dialog, and click **Submit**.

   <Result>A **Category successfully updated.** message appears. **Category Name** can't be changed after creation.</Result>

5. *(Optional: delete)* Click **Delete** on a category you added, then **Delete** in the **Delete Category** dialog.

   <Result>A **Category deleted.** message appears.</Result>

:::caution[Deleting a category doesn't remove it yet]
A deleted category is still listed and can still be chosen for new notes, even after a reload. To steer staff away from it, use **Modify** to set its **Category Display Name** to, for example, *Do not use*. In the **Delete Category** dialog, **Delete all notes?** is a text box rather than a checkbox, and **Cancel** doesn't close the dialog; reload the page to leave it.
:::

**Category Name** is internal; **Category Display Name**, if set, is what staff see. **Mark category as restricted.** limits the notes to people with `user:note:read:hr`. **Cashier**, **Ban** and **Restriction** have no **Delete** button.
