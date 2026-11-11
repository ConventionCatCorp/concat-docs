---
sidebar_position: 1
hide_table_of_contents: true
textbook: true
---

# Finding attendees

User Search finds any account in your organization by name, username, email address, phone number, badge ID or date of birth. Each result opens the person's profile, where most work on one attendee starts.

:::info[In this guide]
Searching for a person (section 1), narrowing the search with filters (section 2), what the badges in the results mean (section 3), and the profile and its tabs (section 4).
:::

## Search for a person

<Sidenote title="Who can do this">
Anyone who can open Housekeeping (`system:login`) can search. Email addresses and dates of birth only show to staff allowed to read them (`user:pii:email`, `user:pii:bornat`).
</Sidenote>

Accounts belong to your organization, not to one convention, so the search covers every account in the organization. The registration details shown with each result are for the convention you're working in.

1. Go to **Housekeeping › Attendees › User Search**.

   <Result>The **User Search** page opens, with a **Search users...** box and a filter button next to it. Below, **Search Parameters** lists what you can search for: **Badge ID (for example, B101)**, **Username**, **First Name, Last Name, and / or Preferred Name**, **Phone number**, **Email Address** and **Date of birth (YYYY-MM-DD)**. The address ends in `/housekeeping/attendees/search`.</Result>

2. In **Search users...**, type the start of a first name, last name or username.

   <Result>After a moment, matching people are listed, at most 15 to a page, with page buttons below when there are more. Each row shows the person's picture and name, with the text that matched in bold, then their status badges (Table 3.1) and, underneath, their badge name for this convention.</Result>

3. Replace the text with a badge ID in its printed form, such as `B101`.

   <Result>The person who has that badge ID at this convention is listed, with a blue **Badge ID:** badge showing it.</Result>

4. Replace the text with a name nobody has, such as `zzzz`.

   <Result>**No results found.** appears above the **Search Parameters** list.</Result>

Table 1.1 lists everything you can type.

<TableFigure title="What you can search for">

| You type | The search finds |
| --- | --- |
| A first name, last name, preferred name or username | People whose name or username starts with what you typed. |
| A first name, a space, then a last name | People whose first name starts with the first word and whose last name starts with any later word. <small>Extra words, such as a middle name, don't stop a match.</small> |
| An email address or phone number | People whose email address or phone number starts with what you typed. |
| A user ID, such as `1234` | The person with that ID, listed first with an **ID: #1234** badge. |
| A badge ID in printed form, such as `B101` | The person with that badge ID at this convention. |
| A date of birth as `YYYY-MM-DD` | On its own, everyone born that day. After a name, only the matches born that day. |

</TableFigure>

:::tip
The search text and any filters you turn on are kept in the page address. Bookmark the page, or send the address to a colleague, to repeat a search.
:::

With a barcode scanner set up as in [Scanner](../registration/cashier/scanner.md), scanning the barcode on an ID or an attendee's registration QR code fills in the search box for you.

## Narrow the search

Filters cut a long list down to one group of people.

1. Click the filter button (<MaterialIcon name="tune" />) next to **Search users...**.

   <Result>A panel titled **Configure User Search Filters** opens, with the five switches in Table 2.1, all off.</Result>

2. Type a name in **Search users...**, then turn on **Only show volunteers**.

   <Result>The list keeps only people who have a volunteer application for this convention.</Result>

<TableFigure title="Search filters">

| Switch | Keeps |
| --- | --- |
| **Only show badge printed users** | People whose badge for this convention has been printed. |
| **Only show paid users** | People whose registration for this convention is paid. |
| **Only show dealers** | People with a dealer application for this convention. |
| **Only show volunteers** | People with a volunteer application for this convention. |
| **Search badge name + UID** | Also matches the start of badge names at this convention, as well as names. |

</TableFigure>

## Read the results

<Sidenote title="Returning attendees">
**Returning attendee** only appears when **Show 'Returning Attendee' badge on the user profile.** is on, under **Users** on the **Convention** tab of **Housekeeping › System › Settings**.
</Sidenote>

Each result, and the header of each profile, carries status badges. Table 3.1 explains them.

<TableFigure title="Status badges">

| Badge | Means |
| --- | --- |
| **Registered, Paid** | The person has a paid registration for this convention. |
| **Registered, Not Paid** | The person has a registration for this convention that isn't paid yet. |
| **Not Registered** | The person has no registration for this convention. |
| **Sub-account** | The account is managed from another account, such as a parent's. |
| **Child** | A child sub-account, or someone below your **Child Age Threshold** when the convention starts. <small>The age check needs permission to read dates of birth.</small> |
| **Returning attendee** | The person's badge was printed at your previous convention. |
| **Banned** | The person has a ban note. See [User Notes](../usernotes/usernotes.md). |
| **Restriction** | The person has a restriction note. |
| **Pending Review** | The account may duplicate a banned account. <small>Shown on the profile only. Hover over it for details.</small> |

</TableFigure>

Blue badges show which part of the account matched: **Email:**, **Badge Name:**, **ID:**, **Badge ID:** or **DoB:**, followed by the matching value.

## Open a profile

<Sidenote title="Sub-accounts">
A sub-account's profile has no **Notes**, **Orders**, **Volunteer** or **Dealer** tab. Its **User Profile** card shows **Owner account**, which links to the parent. The parent's **Registration** row lists **Other Accounts:**, with a link to each sub-account.
</Sidenote>

1. Click a person in the results.

   <Result>Their profile opens on the **Name** tab. The header shows their name and **[ID: …]** with their status badges. The **Notes**, **Orders** and **Roles** tabs show a count. The address ends in `/housekeeping/attendees/user/` followed by the ID.</Result>

2. Look over the **Name** tab.

   <Result>It has a **User Profile** card, with **First Name**, **Last Name**, **Preferred Name**, **User Name**, **Born At**, **Email**, **Phone number** and the address; an **Information** card, with a **Registration** row; and, if you can manage the account, an **Actions** card.</Result>

3. Hover over the icon after the attendance type in the **Registration** row.

   <Result>A green tick says *This user has an active entitlement that grants this attendance type.*, and links to the order that paid for it. A warning sign says *This user does not have an active order correlated with this registration.*, which means the registration isn't paid.</Result>

The **Information** card can also show a **Dealer** row (with `vendor:read`) and a **Volunteer** row (with `volunteer:read`), each saying **No application.** or summing up the application. A **Hotel** row appears when the person has hotel entries. If the account might duplicate a banned account, the card starts with **Possible duplicate account with a ban**: see [User Notes](../usernotes/usernotes.md).

Each tab needs its own permission, so you only see the tabs your roles allow. Table 4.1 lists them.

<TableFigure title="Profile tabs">

| Tab | Holds | Who sees it |
| --- | --- | --- |
| **Name** | Personal details, the registration, applications and account actions. See [Managing an attendee's account](./user-accounts.md) and [Managing an attendee's registrations and orders](./user-registrations.md). | Everyone |
| **Notes** | Notes, restrictions and bans. See [User Notes](../usernotes/usernotes.md). | `user:note:read`, `user:note:read:hr` or `system:login` |
| **Orders** | The person's orders. See [Managing an attendee's registrations and orders](./user-registrations.md), section 5. | `order:view` |
| **Roles** | The roles the person has, for this convention or globally. See [Users and access](../quickstart/users-and-access.md), section 3. | `user:roles:update`, or a role manager |
| **Permissions** | Permissions set for this person alone. | `system:permission:read`; changing them needs `system:permission:update` |
| **Volunteer** | The volunteer application. See [Volunteers](../volunteers/volunteers.md). | `volunteer:read` |
| **Dealer** | The dealer application. See [Dealers](../dealers/managment.md). | `vendor:read` |
| **Emergency Contacts** | The emergency contacts given at registration. See [Managing an attendee's account](./user-accounts.md), section 3. | `admin:read:emergencycontacts`, for registered people only |
| **Audit** | Everything logged about the account. See [Managing an attendee's account](./user-accounts.md), section 4. | `audit:read` |

</TableFigure>

:::note[Icons on the User Profile card]
A shield after **User Profile** means the person's identity was verified with Stripe Identity. A red icon after the email address means they haven't confirmed it yet. A warning sign there means they've asked to change it and haven't clicked the link sent to the new address.
:::

The **Roles** and **Permissions** tabs are explained in full in the *Roles and permissions* guide (System section).
