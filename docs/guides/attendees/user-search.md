---
sidebar_position: 1
hide_table_of_contents: true
textbook: true
---

# Finding attendees

Find any account by name, username, email, phone, badge ID or date of birth, and open the person's profile.

:::info[In this guide]
Searching, filters, result badges, and the profile and its tabs.
:::

## Search for a person

<Sidenote title="Who can do this">
Searching needs `system:login`. Email addresses and dates of birth show only with `user:pii:email` and `user:pii:bornat`.
</Sidenote>

The search covers every account in your organization; registration details are for the convention you're working in.

1. Go to **Housekeeping › Attendees › User Search**.

   <Result>The **User Search** page opens at `/housekeeping/attendees/search`, with a **Search users...** box and a **Search Parameters** list.</Result>

2. In **Search users...**, type the start of a first name, last name or username.

   <Result>Matching people are listed, 15 to a page, with their status badges (Table 3.1) and badge name.</Result>

3. Replace the text with a badge ID in its printed form, such as `B101`.

   <Result>The person with that badge ID at this convention is listed, with a blue **Badge ID:** badge.</Result>

4. Replace the text with a name nobody has, such as `zzzz`.

   <Result>**No results found.** appears.</Result>

<TableFigure title="What you can search for">

| You type | The search finds |
| --- | --- |
| A first name, last name, preferred name or username | Names or usernames starting with it. |
| A first name, a space, then a last name | First name starting with the first word, last name with any later word. <small>Extra words, such as a middle name, don't stop a match.</small> |
| An email address or phone number | Addresses or numbers starting with it. |
| A user ID, such as `1234` | That person, listed first with an **ID: #1234** badge. |
| A badge ID in printed form, such as `B101` | That badge's holder at this convention. |
| A date of birth as `YYYY-MM-DD` | Alone, everyone born that day. After a name, only matches born that day. |

</TableFigure>

:::tip
The search and filters are kept in the page address: bookmark or share it to repeat a search.
:::

A barcode scanner ([Scanner](../registration/cashier/scanner.md)) fills in the search box from an ID or a registration QR code.

## Narrow the search

1. Click the filter button (<MaterialIcon name="tune" />) next to **Search users...** (Figure 2.1).

   <Result>A **Configure User Search Filters** panel opens with the five switches in Table 2.1, all off.</Result>

2. Type a name in **Search users...**, then turn on **Only show volunteers**.

   <Result>Only people with a volunteer application for this convention stay listed.</Result>

<Figure
  src="/img/guides/attendees/user-search-filters.webp"
  alt="User Search with docs typed in the search box, two people listed, and the Configure User Search Filters panel open below the filter button, with five switches."
  title="The search filters"
  markers={[
    { n: 1, x: 92.8, y: 10.5, w: 5.4, h: 15.5 },
    { n: 2, x: 75.2, y: 22.9, w: 24.6, h: 67.7 },
  ]}
>

1. The filter button.
2. The **Configure User Search Filters** panel, with every switch off.

</Figure>

<TableFigure title="Search filters">

| Switch | Keeps, at this convention |
| --- | --- |
| **Only show badge printed users** | People with a printed badge. |
| **Only show paid users** | People with a paid registration. |
| **Only show dealers** | People with a dealer application. |
| **Only show volunteers** | People with a volunteer application. |
| **Search badge name + UID** | Also matches the start of badge names. |

</TableFigure>

## Read the results

<Sidenote title="Returning attendees">
Shown only when **Show 'Returning Attendee' badge on the user profile.** is on, under **Users** on the **Convention** tab of **Housekeeping › System › Settings**.
</Sidenote>

Results and profile headers carry these status badges.

<TableFigure title="Status badges">

| Badge | Means |
| --- | --- |
| **Registered, Paid** | A paid registration for this convention. |
| **Registered, Not Paid** | An unpaid registration for this convention. |
| **Not Registered** | No registration for this convention. |
| **Sub-account** | Managed from another account, such as a parent's. |
| **Child** | A child sub-account, or below your **Child Age Threshold** when the convention starts. <small>The age check needs permission to read dates of birth.</small> |
| **Returning attendee** | Badge printed at your previous convention. |
| **Banned** | Has a ban note. See [User Notes](../usernotes/usernotes.md). |
| **Restriction** | Has a restriction note. |
| **Pending Review** | May duplicate a banned account. <small>Profile only; hover for details.</small> |

</TableFigure>

Blue badges show the field that matched and its value: **Email:**, **Badge Name:**, **ID:**, **Badge ID:** or **DoB:**.

## Open a profile

<Sidenote title="Sub-accounts">
No **Notes**, **Orders**, **Volunteer** or **Dealer** tab; **Owner account** links to the parent. The parent's **Registration** row links each sub-account under **Other Accounts:**.
</Sidenote>

1. Click a person in the results.

   <Result>Their profile opens on the **Name** tab, with **[ID: …]** and status badges in the header. The address ends in `/housekeeping/attendees/user/` and the ID.</Result>

2. Look over the **Name** tab.

   <Result>It has a **User Profile** card (names, username, date of birth, email, phone, address), an **Information** card with a **Registration** row, and, if you can manage the account, an **Actions** card.</Result>

3. Hover over the icon after the attendance type in the **Registration** row.

   <Result>A green tick says *This user has an active entitlement that grants this attendance type.* and links to the paying order. A warning sign says *This user does not have an active order correlated with this registration.*: it isn't paid.</Result>

The **Information** card can also show **Dealer** (`vendor:read`), **Volunteer** (`volunteer:read`) and **Hotel** rows, and, for a possible duplicate of a banned account, **Possible duplicate account with a ban**: see [User Notes](../usernotes/usernotes.md).

Each tab needs its own permission (Table 4.1).

<TableFigure title="Profile tabs">

| Tab | Holds | Who sees it |
| --- | --- | --- |
| **Name** | Details, registration, applications, account actions. See [Managing an attendee's account](./user-accounts.md) and [Managing an attendee's registrations and orders](./user-registrations.md). | Everyone |
| **Notes** | Notes, restrictions, bans. See [User Notes](../usernotes/usernotes.md). | `user:note:read`, `user:note:read:hr` or `system:login` |
| **Orders** | Orders. See [Managing an attendee's registrations and orders](./user-registrations.md), section 5. | `order:view` |
| **Roles** | Convention and global roles. See [Users and access](../quickstart/users-and-access.md), section 3. | `user:roles:update`, or a role manager |
| **Permissions** | Permissions for this person alone. | `system:permission:read`; changing them needs `system:permission:update` |
| **Volunteer** | Volunteer application. See [Volunteers](../volunteers/volunteers.md). | `volunteer:read` |
| **Dealer** | Dealer application. See [Dealers](../dealers/managment.md). | `vendor:read` |
| **Emergency Contacts** | Contacts given at registration. See [Managing an attendee's account](./user-accounts.md), section 3. | `admin:read:emergencycontacts`, registered people only |
| **Audit** | Everything logged about the account. See [Managing an attendee's account](./user-accounts.md), section 4. | `audit:read` |

</TableFigure>

:::note[Icons on the User Profile card]
A shield after **User Profile**: identity verified with Stripe Identity. A red icon after the email: not confirmed. A warning sign there: an email change waits for the person to click the link sent to the new address.
:::

**Roles** and **Permissions** are covered in [Roles and permissions](../system/roles.md).
