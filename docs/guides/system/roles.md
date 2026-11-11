---
sidebar_position: 6
hide_table_of_contents: true
textbook: true
---

# Roles and permissions

Roles decide what each person can do in Housekeeping. This guide explains permissions and roles, the roles ConCat starts you with, and how to create roles, set their permissions, give them to people, invite people to them and delegate them to role managers.

:::info[In this guide]
How roles work (section 1), viewing roles (section 2), creating a role (section 3), setting its permissions (section 4), assigning people (section 5), assigning roles from a profile (section 6), one person's permission overrides (section 7), invite links (section 8), accepting an invite (section 9), role settings and role managers (section 10), and a role's history and deleting it (section 11).
:::

## How roles work

<Sidenote title="Who can do what">
Viewing roles needs **system:permission:read**. Creating, editing and deleting them needs **system:permission:update**. Giving them to people needs **user:roles:update**. The default **admin** role has all three.
</Sidenote>

A *permission* allows one action, such as **order:view** (viewing orders) or **refund:create** (creating refunds). A *role* is a named set of permissions, such as **finance**. You give people roles, so everyone doing the same job gets the same access.

For each permission, a role says one of three things:

- **Default**: the role doesn't decide. People get the permission only if another role allows it.
- **Allow**: the role grants the permission.
- **Deny**: the role blocks the permission.

**Deny** always wins. If any of a person's roles, or their own override (section 7), denies a permission, they don't have it, whatever else allows it.

A role is given either for one convention or **globally**, for every convention in your organization. A role given for this convention stops applying when you move on to next year's convention; a global role carries over.

One permission has children: **vendor:read** is the parent of **vendor:massemail**, **vendor:stats** and **vendor:update**. Allowing a child also allows **vendor:read**, and setting **vendor:read** back to **Default** or **Deny** clears **Allow** on its children.

<TableFigure title="The roles ConCat creates for your organization">

| Role | What it's for | Main permissions |
| --- | --- | --- |
| **admin** | Managing convention settings. Grants almost every permission. | Everything except **system:devices:manage** and a few OAuth-only scopes |
| **user** | Access to Housekeeping. <small>Every staff member needs it.</small> | **system:login**, **system:maintenance**, **registration:read**, **user:note:read**, other people's names and usernames |
| **registration** | Managing and registering attendees, and the Cashier UI. | **registration:cashier**, **registration:update**, **user:create**, **user:update**, **order:view**, NFC badges, attendees' personal details |
| **finance** | Financial transactions. | **order:view**, **refund:create**, **fee:create**, **fee:read**, **comp:create** |
| **hr** | Staff and volunteers. | All **volunteer** permissions, **user:roles:update**, **audit:read**, **massemail**, user notes including HR notes |
| **productEditor** | Products and categories. | **product:manage**, **product:read**, **product:category:manage**, **product:discount:manage** |
| **dealersden** | Dealer applications. | **vendor:read**, **vendor:update**, **vendor:massemail**, **vendor:stats** |
| **hotel** | The hotel system. | **hotel:manage**, **hotel:view** |
| **staff** | Marks someone as a staff member. | **system:staff**, **user:note:create**, **user:note:edit** |
| **staffAlumni** | Marks trusted former staff. <small>Given automatically to last year's staff when you create next year's convention.</small> | **system:staffalumni** |
| **badgeValidator** | Validating NFC badges. | **system:nfc_token:password** |
| **cashCarrier**, **vip** | Labels for people trusted with large sums of money, and VIPs. | None |
| **vendor**, **vendorApproved** | Mark dealers and approved dealers. <small>Kept in step with dealer applications automatically.</small> | **system:vendor** (vendor only) |
| **lead** | Department leads. <small>Internal: given when someone is made a lead in Volunteer Settings.</small> | **massemail**, people's personal details |
| **dealerAssistant** | Dealer assistants. <small>Internal: given when a dealer adds an assistant.</small> | None |
| **roleManager** | Role managers (section 10). <small>Internal: given when someone is made a role manager.</small> | **system:login**, **system:permission:read**, people's names and usernames |

</TableFigure>

## View roles

1. Go to **Housekeeping › System › Roles**.

   <Result>The **Roles** page lists every role by name, with its description. **lead**, **dealerAssistant** and **roleManager** are marked **Role Reserved for Internal Use**. A role with managers shows a **Managers** link and their usernames.</Result>

2. Click a role's name.

   <Result>The role's page opens on its **Users** tab. The tabs are **Users**, **Permissions**, **History**, **Invites**, **Settings** and **Delete**. Internal roles show only **Users**, **Permissions** and **History**.</Result>

:::note[Internal roles]
Don't assign **lead**, **dealerAssistant** or **roleManager** by hand. ConCat gives them when someone is made a department lead, a dealer assistant or a role manager. Their pages have no **Assign** button.
:::

## Create a role

1. On the **Roles** page, click **Add new role**.

   <Result>A dialog titled **Create new role** opens.</Result>

2. Fill in **Input the role name**, **Describe the role:**, and optionally the fields in Table 3.1. Then click **Save**.

   <Result>A **Role created successfully** message appears, and the new role's page opens on its **Users** tab.</Result>

<TableFigure title="Optional role fields">

| Field | What it does |
| --- | --- |
| **Cashier message** | Shown in the Cashier UI when checking in someone with this role. |
| **Role Managers:** | Up to 16 people who may give this role to others and take it away (section 10). |
| **User Note Categories** | The note categories that people with this role can read on attendee profiles. <small>Categories under **Restricted Categories** also need **user:note:read:hr**.</small> |

</TableFigure>

The name can't be changed after the role is created.

## Set a role's permissions

A new role has every permission on **Default**, so it grants nothing until you allow some.

1. On the role's page, click **Permissions**.

   <Result>Every permission is listed with its name and description, and a **Default**, **Allow** and **Deny** choice beside it. A **Search...** box is at the top.</Result>

2. *(Optional)* Type part of a permission's name or description in **Search...**.

   <Result>Only matching permissions are listed. A matching child permission is shown under its parent.</Result>

3. Click **Allow** or **Deny** beside a permission, or **Default** to clear it.

   <Result>A **Saved successfully** message appears, and the choice you clicked is highlighted.</Result>

:::caution[Watch out]
Use **Deny** with care. A role that denies a permission blocks it for everyone in that role, even people whose other roles, such as **admin**, allow it.
:::

## Assign people to a role

<Sidenote title="Convention list">
The **Convention** list shows the current convention and every convention someone has the role for. Each entry shows its short name, year and number of users.
</Sidenote>

1. On the role's page, on the **Users** tab, check the **Convention** list.

   <Result>The table lists everyone with the role for the selected convention, plus everyone with it globally, with **ID**, **Name** and **Username** columns.</Result>

2. Click **Assign**.

   <Result>A dialog titled **Assign** opens, with a user picker, a **Remove Users?** box and an **Assign '…' Globally?** box naming the role.</Result>

3. Choose up to 16 people in the picker. Tick **Assign '…' Globally?** to give the role for every convention; leave it unticked for this convention only. Then click **Add**.

   <Result>A message says *user(s) [1234] assigned to 'finance' successfully*, with their user IDs and the role's name, and they're listed in the table.</Result>

4. *(Optional)* To take the role from one person, click **Remove Role** in their row.

   <Result>A message says *Removed role 'finance' from user 'jdoe'*, with the role's name and their username, and the row is gone.</Result>

To remove several people at once, choose them in the **Assign** dialog, tick **Remove Users?**, then click **Remove**.

## Assign roles from a person's profile

<Sidenote title="HR staff">
The default **hr** role can give roles but can't open **System › Roles**. HR staff use the profile's **Roles** tab.
</Sidenote>

1. Go to **Housekeeping › Attendees › User Search**, find the person and open their profile. Click **Roles**.

   <Result>Each role you can give is shown as a card with its name and description, and two buttons: **Convention** and **Global**. A highlighted button means the person has the role at that level.</Result>

2. Click **Convention** on a role to give it for this convention, or **Global** to give it for every convention.

   <Result>A **Role added** message appears, and the button is highlighted.</Result>

3. *(Optional)* Click a highlighted button to take the role away at that level.

   <Result>A **Role removed** message appears, and the button is no longer highlighted.</Result>

## Override one person's permissions

<Sidenote title="Who can do this">
The **Permissions** tab needs **system:permission:read**. Changing overrides needs **system:permission:update**.
</Sidenote>

An override allows or denies one permission for one person, on top of their roles. Use it for exceptions. For anything more than one or two people, a role is easier to keep track of.

1. On the person's profile, click **Permissions**.

   <Result>Every permission is listed with **Default**, **Allow** and **Deny**. Under each one the person has from a role, a badge says **Granted** or **Denied**, followed by **via** and the roles that grant or deny it.</Result>

2. Click **Allow** or **Deny** beside a permission, or **Default** to remove the override.

   <Result>A **Saved successfully** message appears, and the badge under the permission updates.</Result>

If one of the person's roles denies the permission, **Allow** and **Deny** don't work: a message names the role: *This permission is denied by 'staff'. Remove user from the role first.*

## Invite links

<Sidenote title="Why invite">
An invite link lets people give themselves a role by signing in and opening the link, so you don't have to look each person up.
</Sidenote>

1. On the role's page, click **Invites**.

   <Result>A **Create Invite** button sits above a table with the columns **Code**, **Expiration**, **Uses** and **Actions**.</Result>

2. Click **Create Invite**. Set the **Amount** of codes to make, their **Max Uses** (`-1` for unlimited) and when they **Expires**, or untick the box beside the date so they never expire. Then click **Create Invite** at the bottom of the form.

   <Result>An **Invite(s) created!** message appears, and the invites are listed with their **Code**, **Expiration** and **Uses**.</Result>

3. Click **Copy Link** on an invite, and send the link to your team.

   <Result>An **Invite link copied to clipboard** message appears. The link ends in `/roles/invite/` followed by the code.</Result>

4. *(Optional)* To change an invite's **Max Uses** or expiry, click **Edit** on its row, change them, then click **Save**.

   <Result>You're back on the **Invites** tab, and the row shows the new values.</Result>

An invite that has expired shows an **Expired** badge, and one that has been used up shows no **Copy Link** button.

## Accept an invite

What the person you invited sees:

1. Sign in, then open the invite link.

   <Result>A page headed **Role Invite Code** says *You have been invited to join the convention as a* followed by the role's name and, in brackets, its description. Below are **Click here to accept** and **Click here to decline**.</Result>

2. Click **Click here to accept**.

   <Result>The homepage opens. The person now has the role for the convention whose address they opened the link on.</Result>

If they already have the role, the accept button reads **You already have this role.** and can't be clicked. An expired or used-up invite shows *Sorry. This role code has expired.*

## Role settings and role managers

<Sidenote title="What a role manager can do">
Role managers see only the roles they manage. They can assign and remove people on the **Users** tab and read the **Permissions** tab, but can't change permissions, invites or settings, or delete the role.
</Sidenote>

A role manager is someone you trust to hand out one role, such as a department head who adds their own team to a role, without being an admin. ConCat gives each role manager the **roleManager** role automatically, which lets them open Housekeeping and the **Roles** page.

1. On the role's page, click **Settings**.

   <Result>A **Settings** form shows **Enter new role description:**, **Cashier message**, **Role Managers:** and **User Note Categories**.</Result>

2. Change the fields you need, such as adding people to **Role Managers:**, then click **Save**.

   <Result>A **Role updated successfully** message appears. On the **Roles** page, the role shows a **Managers** link and the managers' usernames.</Result>

## A role's history and deleting it

1. On the role's page, click **History**.

   <Result>A heading **Audit Logs** lists the audit log entries for this role, as described in [Audit logs](./audit-logs.md). This tab needs **audit:read**.</Result>

2. To delete a role, click **Delete**.

   <Result>A red **Warning** names the role, says *This operation can not be undone.* and asks you to type the role's name. The **Delete** button stays disabled until the name matches.</Result>

3. Type the role's name exactly, then click **Delete**.

   <Result>A message says *Deleted role 'finance' successfully.*, with the role's name, and the **Roles** page opens without it.</Result>

:::caution[Watch out]
- Deleting a role takes it from everyone who has it, at once, and also deletes any product discounts limited to that role.
- Only the internal roles are protected. The default roles, **admin** included, can be deleted like any other, so don't delete one you rely on.
:::
