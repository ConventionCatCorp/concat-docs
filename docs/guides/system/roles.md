---
sidebar_position: 6
hide_table_of_contents: true
textbook: true
---

# Roles and permissions

Roles decide what each person can do in Housekeeping. Create them, set their permissions, and give them to people directly, by invite or through role managers.

:::info[In this guide]
How roles work, viewing roles, creating a role, its permissions, assigning people, roles on a profile, one person's overrides, invite links, accepting an invite, settings and role managers, history and deleting.
:::

## How roles work

<Sidenote title="Who can do what">
Viewing roles needs **system:permission:read**; creating, editing and deleting them, **system:permission:update**; giving them to people, **user:roles:update**. The default **admin** role has all three.
</Sidenote>

A *permission* allows one action, such as **order:view**. A *role*, such as **finance**, is a named set of permissions, so everyone doing the same job gets the same access.

For each permission, a role says **Allow**, **Deny** or **Default** (no say: the person needs another role to allow it). **Deny** always wins: if any of a person's roles, or their own override (section 7), denies a permission, they don't have it.

A role is given for one convention or **globally**, for every convention in your organization. Only a global role carries over to next year's convention.

**vendor:read** is the parent of **vendor:massemail**, **vendor:stats** and **vendor:update**. Allowing a child also allows **vendor:read**; setting **vendor:read** to **Default** or **Deny** clears **Allow** on its children.

<TableFigure title="The roles ConCat creates for your organization">

| Role | What it's for | Main permissions |
| --- | --- | --- |
| **admin** | Managing convention settings; almost every permission. | Everything except **system:devices:manage** and a few OAuth-only scopes |
| **user** | Access to Housekeeping. <small>Every staff member needs it.</small> | **system:login**, **system:maintenance**, **registration:read**, **user:note:read**, other people's names and usernames |
| **registration** | Managing and registering attendees, and the Cashier UI. | **registration:cashier**, **registration:update**, **user:create**, **user:update**, **order:view**, NFC badges, attendees' personal details |
| **finance** | Financial transactions. | **order:view**, **refund:create**, **fee:create**, **fee:read**, **comp:create** |
| **hr** | Staff and volunteers. | All **volunteer** permissions, **user:roles:update**, **audit:read**, **massemail**, user notes including HR notes |
| **productEditor** | Products and categories. | **product:manage**, **product:read**, **product:category:manage**, **product:discount:manage** |
| **dealersden** | Dealer applications. | **vendor:read**, **vendor:update**, **vendor:massemail**, **vendor:stats** |
| **hotel** | The hotel system. | **hotel:manage**, **hotel:view** |
| **staff** | Marks staff members. | **system:staff**, **user:note:create**, **user:note:edit** |
| **staffAlumni** | Marks trusted former staff. <small>Given to last year's staff when you create next year's convention.</small> | **system:staffalumni** |
| **badgeValidator** | Validating NFC badges. | **system:nfc_token:password** |
| **cashCarrier**, **vip** | Labels for people trusted with large sums of money, and VIPs. | None |
| **vendor**, **vendorApproved** | Mark dealers and approved dealers. <small>Kept in step with dealer applications automatically.</small> | **system:vendor** (vendor only) |
| **lead** | Department leads. <small>Internal: given when someone is made a lead in Volunteer Settings.</small> | **massemail**, people's personal details |
| **dealerAssistant** | Dealer assistants. <small>Internal: given when a dealer adds an assistant.</small> | None |
| **roleManager** | Role managers (section 10). <small>Internal: given when someone is made a role manager.</small> | **system:login**, **system:permission:read**, people's names and usernames |

</TableFigure>

## View roles

1. Go to **Housekeeping › System › Roles**.

   <Result>The **Roles** page lists every role with its description. **lead**, **dealerAssistant** and **roleManager** are marked **Role Reserved for Internal Use**.</Result>

2. Click a role's name.

   <Result>The role's page opens on its **Users** tab. Internal roles have only **Users**, **Permissions** and **History**.</Result>

:::note[Internal roles]
ConCat gives **lead**, **dealerAssistant** and **roleManager** itself (Table 1.1), so their pages have no **Assign** button. Don't assign them by hand.
:::

## Create a role

1. On the **Roles** page, click **Add new role**.

   <Result>The **Create new role** dialog opens.</Result>

2. Fill in **Input the role name**, **Describe the role:** and any fields in Table 3.1, then click **Save**.

   <Result>A **Role created successfully** message appears and the role's page opens on **Users**.</Result>

<TableFigure title="Optional role fields">

| Field | What it does |
| --- | --- |
| **Cashier message** | Shown in the Cashier UI when checking in someone with this role. |
| **Role Managers:** | Up to 16 people who may give this role and take it away (section 10). |
| **User Note Categories** | Note categories people with this role can read on attendee profiles. <small>Categories under **Restricted Categories** also need **user:note:read:hr**.</small> |

</TableFigure>

The name can't be changed after the role is created.

## Set a role's permissions

A new role has every permission on **Default**, so it grants nothing until you allow some.

1. On the role's page, click **Permissions**.

   <Result>Every permission is listed with **Default**, **Allow** and **Deny**, under a **Search...** box.</Result>

2. *(Optional)* Type part of a permission's name or description in **Search...**.

   <Result>Only matching permissions are listed; a matching child shows under its parent.</Result>

3. Click **Allow** or **Deny** beside a permission, or **Default** to clear it (Figure 4.1).

   <Result>A **Saved successfully** message appears and your choice is highlighted.</Result>

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

:::caution[Watch out]
A role that denies a permission blocks it for everyone in that role, even people whose other roles, such as **admin**, allow it.
:::

## Assign people to a role

<Sidenote title="Convention list">
Lists the current convention and every convention someone has the role for, with its number of users.
</Sidenote>

1. On the role's **Users** tab, check the **Convention** list.

   <Result>The table lists everyone with the role for the selected convention, plus everyone with it globally.</Result>

2. Click **Assign**.

   <Result>The **Assign** dialog opens with a user picker.</Result>

3. Choose up to 16 people. Tick **Assign '…' Globally?** for every convention, or leave it unticked for this one only. Click **Add**.

   <Result>A message says *user(s) [1234] assigned to 'finance' successfully* and they're listed in the table.</Result>

4. *(Optional)* To take the role from one person, click **Remove Role** in their row.

   <Result>A message says *Removed role 'finance' from user 'jdoe'* and the row is gone.</Result>

To remove several people at once, choose them in the **Assign** dialog, tick **Remove Users?** and click **Remove**.

## Assign roles from a person's profile

<Sidenote title="HR staff">
The default **hr** role can give roles but can't open **System › Roles**, so HR staff use the profile's **Roles** tab.
</Sidenote>

1. Open the person's profile from **Housekeeping › Attendees › User Search** and click **Roles**.

   <Result>Each role you can give has **Convention** and **Global** buttons; a highlighted one means the person has the role at that level.</Result>

2. Click **Convention** on a role to give it for this convention, or **Global** for every convention (Figure 6.1).

   <Result>A **Role added** message appears and the button is highlighted.</Result>

3. *(Optional)* Click a highlighted button to take the role away at that level.

   <Result>A **Role removed** message appears and the button is no longer highlighted.</Result>

<Figure
  src="/img/guides/system/profile-roles.webp"
  alt="A test attendee's Roles tab: role cards for roleManager, dealerAssistant, vip and vendorApproved, each with Global and Convention buttons; vendorApproved's Convention button is highlighted."
  title="Roles on a person's profile"
  width="325px"
  markers={[
    { n: 1, x: 44.4, y: 75.5, w: 19, h: 6.2 },
    { n: 2, x: 62.6, y: 75.5, w: 30.1, h: 6.2 },
  ]}
>

1. **Global**: not given at that level (gray).
2. **Convention**: given for this convention (highlighted).

</Figure>

## Override one person's permissions

<Sidenote title="Who can do this">
The **Permissions** tab needs **system:permission:read**; changing overrides needs **system:permission:update**.
</Sidenote>

An override allows or denies one permission for one person, on top of their roles. Use it for exceptions; for more than a couple of people, use a role.

1. On the person's profile, click **Permissions**.

   <Result>Every permission is listed with **Default**, **Allow** and **Deny**. Those from a role show a **Granted** or **Denied** badge naming the roles.</Result>

2. Click **Allow** or **Deny** beside a permission, or **Default** to remove the override.

   <Result>A **Saved successfully** message appears and the badge updates.</Result>

If one of the person's roles denies the permission, **Allow** and **Deny** don't work, and a message names the role: *This permission is denied by 'staff'. Remove user from the role first.*

## Invite links

<Sidenote title="Why invite">
People give themselves the role by signing in and opening the link, so you don't have to look each one up.
</Sidenote>

1. On the role's page, click **Invites**.

   <Result>A **Create Invite** button sits above the invites table.</Result>

2. Click **Create Invite**. Set the **Amount** of codes, their **Max Uses** (`-1` for unlimited) and **Expires** (untick the box beside the date for no expiry), then click **Create Invite** at the bottom.

   <Result>An **Invite(s) created!** message appears and the invites are listed.</Result>

3. Click **Copy Link** on an invite and send the link to your team.

   <Result>An **Invite link copied to clipboard** message appears. The link ends in `/roles/invite/` followed by the code.</Result>

4. *(Optional)* To change an invite's **Max Uses** or expiry, click **Edit** on its row, change them, then click **Save**.

   <Result>The **Invites** tab shows the row with the new values.</Result>

An expired invite shows an **Expired** badge; a used-up one has no **Copy Link** button.

## Accept an invite

What the invited person sees:

1. Sign in, then open the invite link.

   <Result>A **Role Invite Code** page names the role, with **Click here to accept** and **Click here to decline**.</Result>

2. Click **Click here to accept**.

   <Result>The homepage opens. The person has the role for the convention whose address they opened the link on.</Result>

If they already have the role, the button reads **You already have this role.** and can't be clicked. An expired or used-up invite shows *Sorry. This role code has expired.*

## Role settings and role managers

<Sidenote title="What a role manager can do">
Role managers see only the roles they manage. They can assign and remove people on **Users** and read **Permissions**, but can't change permissions, invites or settings, or delete the role.
</Sidenote>

A role manager hands out one role without being an admin, such as a department head adding their team. ConCat gives them the **roleManager** role, which opens Housekeeping and the **Roles** page to them.

1. On the role's page, click **Settings**.

   <Result>The **Settings** form shows **Enter new role description:** and the fields in Table 3.1.</Result>

2. Change what you need, such as adding people to **Role Managers:**, then click **Save**.

   <Result>A **Role updated successfully** message appears. On the **Roles** page, the role shows a **Managers** link and their usernames.</Result>

## A role's history and deleting it

1. On the role's page, click **History**.

   <Result>**Audit Logs** lists this role's entries (see [Audit logs](./audit-logs.md)). This tab needs **audit:read**.</Result>

2. To delete a role, click **Delete**.

   <Result>A red **Warning** says *This operation can not be undone.* and asks for the role's name. **Delete** stays disabled until the name matches.</Result>

3. Type the role's name exactly, then click **Delete**.

   <Result>A message says *Deleted role 'finance' successfully.* and the **Roles** page opens without it.</Result>

:::caution[Watch out]
- Deleting a role takes it from everyone at once, and deletes any product discounts limited to that role.
- Only internal roles are protected. The default roles, **admin** included, can be deleted like any other.
:::
