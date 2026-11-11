---
sidebar_position: 5
hide_table_of_contents: true
textbook: true
---

# Users and access

This guide gets your team into ConCat. It creates accounts for people who don't have one, finds people who do, and gives each person access to the parts of Housekeeping they need, through roles.

:::info[In this guide]
Creating a user (section 1), finding a user (section 2), and roles and permissions (section 3).
:::

## Create a user

<Sidenote title="Most people sign up themselves">
Attendees and most staff create their own accounts from your homepage. Create an account by hand only for someone who can't, or on someone's behalf.
</Sidenote>

1. Go to **Housekeeping › System › User Creation**.

   <Result>The **Manual Account Creation** page opens.</Result>

2. Fill in **Reason for manual creation**, which is written to the audit log, and the person's details: **Username**, **Email Address**, **First Name**, **Last Name**, **Preferred Name**, **Date of birth**, address and **Phone number**. Tick **Send the user an account confirmation email.**, so they can confirm the address and set their own password. Then click **Create User**.

   <Result>An **Account created.** message appears, and the new person's profile opens.</Result>

:::note[Creating a sub-account]
Choosing an **Owner account** makes the new person a sub-account of that account, as when a parent registers a child (see [Registration setup](./registration-setup.md), section 5).
:::

## Find a user

1. Go to **Housekeeping › Attendees › User Search** and type in **Search users...**: a name, username, email address, phone number, badge ID or date of birth (as YYYY-MM-DD).

   <Result>Matching people are listed, each with status badges such as **Registered, Paid**, **Registered, Not Paid** or **Not Registered**.</Result>

2. Click a person.

   <Result>Their profile opens, with the tabs **Name**, **Notes**, **Orders**, **Roles**, **Permissions**, **Volunteer**, **Dealer**, **Emergency Contacts** and **Audit**. You see only the tabs your own permissions allow.</Result>

Most work on one attendee starts from this profile: notes, orders, refunds and roles are all reached from here.

## Roles and permissions

<Sidenote title="Convention or global">
A role can be given for this convention only, or globally, for every convention in your organization.
</Sidenote>

A permission allows one action, such as viewing orders. A role is a named set of permissions, such as *registration* or *finance*. You give people roles, not single permissions, so everyone doing the same job gets the same access.

1. Go to **Housekeeping › System › Roles**.

   <Result>The **Roles** page lists every role with its description. Roles that ConCat uses internally are marked **Role Reserved for Internal Use**, and you shouldn't assign them by hand.</Result>

2. Click a role's name.

   <Result>The role's page opens, with the tabs **Users**, **Permissions**, **History**, **Invites** and **Settings**.</Result>

3. Click **Permissions**. For each permission, choose **Default**, **Allow** or **Deny**.

   <Result>A **Saved successfully** message appears after each change.</Result>

4. Click **Users**, then **Assign**. Choose the person and click **Add**.

   <Result>The person is listed on the role's **Users** tab.</Result>

5. *(Instead of step 4, for people who will sign up themselves)* Click **Invites**, then **Create Invite**. Set the **Amount** of codes, their **Max Uses** (`-1` for unlimited) and when they expire (**Expires**), then click **Create Invite**.

   <Result>An **Invite(s) created!** message appears, and the invite is listed with its **Code**, **Expiration** and **Uses**. Its **Copy Link** button copies a link to send to your team, and shows **Invite link copied to clipboard**.</Result>

To make a new role, click **Add new role** on the **Roles** page. Fill in the **Create new role** dialog: the name, the description, an optional **Cashier message** shown at check-in, the **Role Managers** who may hand the role out, and the **User Note Categories** its members may read. Then click **Save**. A **Role created successfully** message appears.

You can also give a role from a person's profile (section 2). On the **Roles** tab, each role has a **Convention** button and a **Global** button. Click one to give the role for this convention or for all conventions; a **Role added** message appears, and the button is highlighted. Click it again to take the role away; a **Role removed** message appears.

:::caution[Watch out]
**Deny** always wins. If any of a person's roles denies a permission, they don't have it, whatever their other roles allow.
:::

:::tip[In more detail]
The full guides behind this page:

- [Creating user accounts](../system/users.md)
- [Finding attendees](../attendees/user-search.md)
- [Roles and permissions](../system/roles.md)
:::

You've finished the Quickstart. Before you open for attendees, look at the [Checklist](../convention_checklist.md), and set a default badge design so the Cashier UI can print badges.
