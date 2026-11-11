---
sidebar_position: 1
hide_table_of_contents: true
textbook: true
---

# User Notes

User notes record what your team needs to know about a person: a commendation, a request, a message for the cashier, a restriction or a ban. This guide covers writing and finding notes, banning someone, clearing the reviews a ban can trigger, and managing note categories.

:::info[In this guide]
How notes work (section 1), notes on a profile (section 2), searching and creating notes (section 3), banning someone (section 4), account reviews (section 5), and note categories (section 6).
:::

## How notes work

<Sidenote title="Whole organization">
Notes belong to your organization, so they follow a person to your next convention. Tick **Apply only to this convention.** to keep a note to the current one.
</Sidenote>

Every note has a category. Your organization starts with the eight in Table 1.1. Three of them do something special, and those three can't be deleted. You can add your own (section 6).

<TableFigure title="Default note categories">

| Category | What it does |
| --- | --- |
| **Commendation**, **Feedback**, **Misc.**, **Reprimand**, **Request** | Nothing special. The note is shown with the person's other notes. |
| **Cashier** | Shown at the Cashier UI when the person checks in, under **User Notes**. Use it for special handling at the desk. |
| **Restriction** | A *shadow ban*: the person is never told, but staff see a red **Restriction** badge next to them in User Search. <small>Restricted category.</small> |
| **Ban** | Stops the person from doing something, such as registering or dealing (section 4). The person sees a generic banned message. <small>Restricted category.</small> |

</TableFigure>

A *restricted* category holds sensitive notes, for example ones with personal details. Only people with `user:note:read:hr` can see its notes, whatever else their roles give them. **Ban** and **Restriction** notes always apply to the whole organization, so they have no **Apply only to this convention.** box.

<TableFigure title="Who can do what">

| Action | Permission | Default roles with it |
| --- | --- | --- |
| Read notes in categories that aren't restricted | `user:note:read` | admin, hr, user |
| Read notes in restricted categories (**Ban**, **Restriction**) | `user:note:read:hr` | admin, hr |
| Create a note, including a ban | `user:note:create` | admin, hr, registration, staff |
| Edit a note | `user:note:edit` | admin, hr, registration, staff |
| Delete a note; complete an account review | `user:note:delete` | admin, hr |
| Manage categories; read every note | `user:note:categories:manage` | admin |

</TableFigure>

A role can also grant reading chosen categories to people without `user:note:read`. In the role's form (**Housekeeping › System › Roles**, see [Users and access](../quickstart/users-and-access.md), section 3), tick them under **User Note Categories**. Restricted categories in that list still need `user:note:read:hr`.

## Notes on a profile

1. Open the person's profile (see [Finding attendees](../attendees/user-search.md), section 4) and click the **Notes** tab.

   <Result>A **Notes** card lists their notes, or says *There are no notes for this user.* If you can create notes, an **Add Note** card is beside it, with **Note Category** (set to **Cashier**), **Apply only to this convention.** (ticked) and **Text**.</Result>

2. Choose a **Note Category**, enter the **Text**, and click **Add New Note**.

   <Result>The note appears in the **Notes** card. Its footer reads the category, **created by** your name, **on** and the date. A note kept to this convention has a grey badge with the convention's short name.</Result>

3. *(Optional: edit)* Click the note's edit button (<MaterialIcon name="edit" />), change it in the **Edit User Note** dialog, and click **Edit**.

   <Result>A **Note has been edited** message appears.</Result>

4. *(Optional: delete)* Click the note's delete button (<MaterialIcon name="delete" />), then **Delete** in the **Delete note?** dialog.

   <Result>The note is gone from the list.</Result>

Choosing a category shows what it does under the field. Ban notes have no edit button: to change a ban, delete it and create a new one. Deleting a ban note lifts the ban.

## Search and create notes

The **User Notes** page lists notes across everyone, including bans on people who have no account.

1. Go to **Housekeeping › Attendees › User Notes**.

   <Result>The **User Notes** page opens with a **Search notes...** box, a category list set to **(All)**, a ticked **Hide Notes for Other Conventions** box and, if you can create notes, a **Create Note** button. The notes you can read are listed below.</Result>

2. Type in **Search notes...**, or choose a category.

   <Result>The list narrows to notes whose text, or the person's first or last name, contains what you typed, in that category.</Result>

3. Click **Create Note**.

   <Result>A **Create New User Note** dialog opens, with **Note Category**, **User**, **Apply only to this convention.** and **Text**.</Result>

4. Choose the **Note Category**, select the person in **User**, enter the **Text**, and click **Create**.

   <Result>A **Note has been added** message appears, the dialog closes, and the note is listed.</Result>

Untick **Hide Notes for Other Conventions** to also see notes kept to your organization's other conventions. Except for a ban, a note needs a person: without one, **Create** shows *User must be selected*.

## Ban someone

<Sidenote title="Who can do this">
Creating a ban needs `user:note:create`. Seeing bans afterwards needs `user:note:read:hr`.
</Sidenote>

A ban is a note in the **Ban** category with a **Ban Category**, which decides what the person is stopped from doing (Table 4.1). A ban doesn't need an account: you can ban a name, so someone who hasn't signed up yet is caught when they do (section 5).

<TableFigure title="Ban categories">

| Ban Category | Effect |
| --- | --- |
| **Registration** | *Registration bans prevent the user from logging in.* The person is logged out at once and can't log in again. At the Cashier UI their page says *Attendee is currently banned from attending the convention.* |
| **Dealer** | *Dealer bans prevent the user from dealing.* |
| **Volunteer** | *Volunteer bans prevent the user from creating a volunteer application.* |
| **Other** | *User is not prevented from performing any actions.* Use it to record a ban that ConCat doesn't enforce. |

</TableFigure>

1. Go to **Housekeeping › Attendees › User Notes** and click **Create Note**.

   <Result>A **Create New User Note** dialog opens.</Result>

2. Set **Note Category** to **Ban**.

   <Result>The field now says **User (Optional)**. Below **Text**, a **Ban Category** list, set to **Registration**, and **First Name** and **Last Name** fields appear.</Result>

3. If the person has an account, select them under **User (Optional)**. If not, enter their **First Name** and **Last Name**.

   <Result>When you select an account, **First Name** and **Last Name** fill in from it and can't be changed.</Result>

4. Choose the **Ban Category**, enter the reason in **Text**, and click **Create**.

   <Result>A **Note has been added** message appears. The ban is listed with a red **Ban** badge (or **Ban on Dealer**, **Ban on Volunteer**, **Ban on Other**) next to the name.</Result>

:::caution[Watch out]
A registration ban on an account takes effect at once: the person is logged out and can't log back in. Check you've selected the right account before you click **Create**.
:::

## Account reviews

<Sidenote title="The email">
Each review also sends a *Registration Requires Review* email to your registration address, set on the **Contact** tab of **Housekeeping › System › Settings**.
</Sidenote>

When someone creates an account, or a sub-account is added, ConCat compares the name with every ban in your organization. If it matches, the new account is marked **Pending Review** so a person can decide whether it's the banned person signing up again. Any ban category counts.

A name matches a ban when both of these are true, ignoring capital letters:

- the first name starts with the same three letters as the ban's first name;
- the last name starts with the same letter as the ban's last name.

If both the account and the ban have a date of birth, the year and month must also match. A ban made by name only has no date of birth, so it matches on the name alone. For example, a ban on *Alexander Smith* flags a new account for *Alex Sanders*.

An account under review can still log in, but the Cashier UI won't issue a badge: it says *Attendee is currently under review. A badge cannot be issued until this is cleared.*

1. Go to **Housekeeping › Attendees › Dashboard**.

   <Result>An **Accounts Pending Review** card shows how many accounts are waiting, with a **View** button. It appears only when there's at least one, and only to people with `user:note:delete`.</Result>

2. Click **View**, then click a name in the list.

   <Result>The person's profile opens, with a yellow **Pending Review** badge. The **Information** card starts with **Possible duplicate account with a ban**, showing the **Matching First Name**, **Matching Last Name** and the ban's text, or **No matching ban** if the ban has since been deleted.</Result>

3. Decide whether this is the banned person. If it is, create a ban on this account too (section 4).

   <Result>For a registration ban, the ban is listed in the profile's **Notes** tab and the person is logged out.</Result>

4. Click the green tick button (<MaterialIcon name="check" />) on the **Possible duplicate account with a ban** row, then **Complete review** in the **Complete account review?** dialog.

   <Result>The row and the **Pending Review** badge are gone, and the account no longer counts on the dashboard card.</Result>

## Note categories

<Sidenote title="Who can do this">
The **Note Categories** tab needs `user:note:categories:manage`, which only the admin role has by default.
</Sidenote>

1. Go to **Housekeeping › System › Settings** and click the **Note Categories** tab.

   <Result>The page is headed **User Note Category Settings**, with a **Create New Category** button. Each category is listed with its icon and name, a red **Restricted** badge if it's restricted, and a **Modify** button. Categories you can delete also have a **Delete** button.</Result>

2. Click **Create New Category**.

   <Result>A **New Category** dialog opens with **Category Name**, **Category Display Name (Optional)**, **Mark category as restricted.**, **Category Icon**, **Category Icon Color** and an **Icon Preview**.</Result>

3. Fill in the fields and click **Submit**.

   <Result>A **New category has been created.** message appears, and the category is listed.</Result>

4. *(Optional: edit)* Click **Modify** on a category, change it in the **Edit Category** dialog, and click **Submit**.

   <Result>A **Category successfully updated.** message appears. **Category Name** can't be changed after creation.</Result>

5. *(Optional: delete)* Click **Delete** on a category you added, then **Delete** in the **Delete Category** dialog.

   <Result>A **Category deleted.** message appears, and the category is no longer listed.</Result>

**Category Name** is the internal name; **Category Display Name** is what staff see, if you set one. Tick **Mark category as restricted.** for notes only people with `user:note:read:hr` should read. **Cashier**, **Ban** and **Restriction** have no **Delete** button.
