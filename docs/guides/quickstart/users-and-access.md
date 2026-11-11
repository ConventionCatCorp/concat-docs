---
sidebar_position: 5
hide_table_of_contents: true
textbook: true
---

# Users and access

Get your team into ConCat: create or find their accounts, and give each person the Housekeeping access they need through roles.

:::info[In this guide]
Creating a user (section 1), finding a user (section 2), and roles and permissions (section 3).
:::

## Create a user

<Sidenote title="Most people sign up themselves">
Attendees and most staff create their own accounts from your homepage. Create one by hand only for someone who can't, or on someone's behalf.
</Sidenote>

1. Go to **Housekeeping › System › User Creation**.

   <Result>The **Manual Account Creation** page opens.</Result>

2. Fill in **Reason for manual creation** (written to the audit log) and the person's details: **Username**, **Email Address**, **First Name**, **Last Name**, **Preferred Name**, **Date of birth**, address and **Phone number**. Tick **Send the user an account confirmation email.** so they can confirm the address and set their own password, then click **Create User**.

   <Result>An **Account created.** message appears, and the new person's profile opens.</Result>

:::note[Creating a sub-account]
Choosing an **Owner account** makes the new person a sub-account of that account, as when a parent registers a child ([Registration setup](./registration-setup.md), section 5).
:::

## Find a user

1. Go to **Housekeeping › Attendees › User Search** and, in **Search users...**, type a name, username, email address, phone number, badge ID or date of birth (YYYY-MM-DD).

   <Result>Matching people are listed, with status badges such as **Registered, Paid**, **Registered, Not Paid** or **Not Registered**.</Result>

2. Click a person.

   <Result>Their profile opens, with the tabs **Name**, **Notes**, **Orders**, **Roles**, **Permissions**, **Volunteer**, **Dealer**, **Emergency Contacts** and **Audit**, as far as your permissions allow.</Result>

Most work on one attendee, such as notes, orders, refunds and roles, starts from this profile.

## Roles and permissions

<Sidenote title="Convention or global">
A role can be given for this convention only, or globally, for every convention in your organization.
</Sidenote>

A permission allows one action, such as viewing orders. A role is a named set of permissions, such as *registration* or *finance*. You give people roles, not permissions, so everyone doing a job gets the same access.

1. Go to **Housekeeping › System › Roles**.

   <Result>The **Roles** page lists every role with its description. Don't assign roles marked **Role Reserved for Internal Use** by hand: ConCat uses them internally.</Result>

2. Click a role's name.

   <Result>The role's page opens, with the tabs **Users**, **Permissions**, **History**, **Invites** and **Settings**.</Result>

3. Click **Permissions** and choose **Default**, **Allow** or **Deny** for each permission (Figure 3.1).

   <Result>A **Saved successfully** message appears after each change.</Result>

4. Click **Users**, then **Assign**, choose the person and click **Add**.

   <Result>The person is listed on the role's **Users** tab.</Result>

5. *(Instead of step 4, for people who will sign up themselves)* Click **Invites**, then **Create Invite**. Set the **Amount** of codes, their **Max Uses** (`-1` for unlimited) and **Expires**, then click **Create Invite**.

   <Result>An **Invite(s) created!** message appears, and the invite is listed with its **Code**. **Copy Link** copies a link to send your team and shows **Invite link copied to clipboard**.</Result>

<Figure
  src="/img/guides/system/role-permissions.webp"
  alt="A role's Permissions tab: the tabs Users, Permissions, History, Invites, Settings and Delete, a search box, and each permission with Default, Allow and Deny buttons."
  title="A role's Permissions tab"
  markers={[
    { n: 1, x: 7.8, y: 15.1, w: 13.2, h: 11 },
    { n: 2, x: 68.2, y: 60.1, w: 29.7, h: 11.5 },
  ]}
>

1. The **Permissions** tab.
2. **Default**, **Allow** and **Deny** for one permission. The highlighted button is the current choice.

</Figure>

To make a new role, click **Add new role** on the **Roles** page and fill in the **Create new role** dialog: name, description, an optional **Cashier message** shown at check-in, the **Role Managers** who may hand out the role, and the **User Note Categories** its members may read. Click **Save**: a **Role created successfully** message appears.

You can also give a role from a person's profile (section 2): on the **Roles** tab, click a role's **Convention** or **Global** button. A **Role added** message appears and the button is highlighted. Click it again to remove the role (**Role removed**).

:::caution[Watch out]
**Deny** always wins. If any of a person's roles denies a permission, they don't have it, whatever their other roles allow.
:::

:::tip[In more detail]
- [Creating user accounts](../system/users.md)
- [Finding attendees](../attendees/user-search.md)
- [Roles and permissions](../system/roles.md)
:::

You've finished the Quickstart. Before you open, read the [Checklist](../convention_checklist.md) and set a default badge design so the Cashier UI can print badges.
