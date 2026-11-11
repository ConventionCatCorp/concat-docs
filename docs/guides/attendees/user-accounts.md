---
sidebar_position: 2
hide_table_of_contents: true
textbook: true
---

# Managing an attendee's account

Correct an attendee's details, help them sign in, and view, export or delete their account. Every section starts on the person's profile: see [Finding attendees](./user-search.md).

:::info[In this guide]
Personal details (section 1), sign-in help (section 2), emergency contacts (section 3), audit history (section 4), data export (section 5), and account deletion (section 6).
:::

## Edit personal details

<Sidenote title="Who can do this">
Needs `user:update` (default *admin* and *registration* roles). Without it, there's no pencil button.
</Sidenote>

1. On the **Name** tab, click the pencil button (<MaterialIcon name="edit" />) in the **User Profile** card (Figure 1.1).

   <Result>The **Edit User** dialog opens with the person's names, date of birth, email, phone and address.</Result>

2. Correct the details, then click **Update User**.

   <Result>The dialog closes, and the **User Profile** card shows the new details.</Result>

<Figure
  src="/img/guides/attendees/profile-name-tab.webp"
  alt="A test attendee's profile on the Name tab: the tabs Name, Notes, Orders, Roles, Permissions, Volunteer, Dealer and Audit; the User Profile card with pencil, download and delete buttons; the Information card; and the Actions card."
  title="A profile's Name tab"
  markers={[
    { n: 1, x: 0.8, y: 12.4, w: 98.4, h: 6.8 },
    { n: 2, x: 38.5, y: 21.7, w: 8.8, h: 4.6 },
    { n: 3, x: 92.8, y: 29.1, w: 4.9, h: 6.3 },
    { n: 4, x: 50.8, y: 64.7, w: 48.4, h: 34 },
  ]}
>

1. The profile's tabs. You see only those your permissions allow.
2. Edit (pencil), export (section 5) and delete (section 6).
3. The **Registration** row's pencil: see [Managing an attendee's registrations and orders](./user-registrations.md).
4. The **Actions** card (section 2).

</Figure>

:::caution[Watch out]
- **Email address:** the change waits until the person clicks the link sent to the new address; until then the card shows the old one with a warning sign. One change per 24 hours (*You can only change your email once every 24 hours.*).
- **Date of birth:** a main account can't be set below your **Child Age Threshold** (*User is underage. The minimum age is … years old.*). You can't change your own here.
- **Address:** sub-accounts with the same address and phone number change with it.
:::

## Help someone sign in

The **Actions** card on the **Name** tab holds the sign-in tools, for staff with `registration:cashier` or `user:update`.

<TableFigure title="The Actions card">

| Button | Does | Shown when |
| --- | --- | --- |
| **Open Cashier Interface** | Opens the person in the [Cashier UI](../registration/cashier/cashier.md). | You have `registration:cashier`. |
| **Allow user to login** | Lets them log in before confirming their email (section 2.1). | You have `user:update`; account unconfirmed. Not for sub-accounts. |
| **Send password reset email** | Emails a reset link (section 2.2). | You have `user:update`. Not for sub-accounts. |
| **At-Con Password Reset** | Makes a reset code to give in person (section 2.3). | You have `user:update`. Not for sub-accounts. |
| **Reset 2FA** | Removes two-factor authentication (section 2.4). | The person has set it up. Removing it needs `user:update`. |

</TableFigure>

### Let an unconfirmed attendee log in

When **Require e-mail confirmation before login.** is on (the default), a new account can't log in until its owner clicks the link in the confirmation email.

1. In the **Actions** card, click **Allow user to login**.

   <Result>A **Verify user** dialog asks *Are you sure you want to verify this user?*</Result>

2. Click **Verify**.

   <Result>**Success! That user has verified, reloading.** appears, and **Allow user to login** disappears.</Result>

They still get no ConCat email until they confirm their address, which they can resend from their homepage: see [Attendee accounts and sign-in](./accounts.md), section 2.

### Send a password reset email

1. In the **Actions** card, click **Send password reset email**.

   <Result>A **Password Reset** dialog asks *Are you sure you want to send a password reset email to this user?*</Result>

2. Click **Confirm**.

   <Result>**Successfully sent password reset email!** appears, and the person gets a *Password Reset* email with a link that works for 24 hours.</Result>

Setting a new password from the link also confirms the email address. The attendee's side is in [Attendee accounts and sign-in](./accounts.md), section 4.

### Give a reset code at the convention

<Sidenote title="Deprecated">
ConCat marks this tool deprecated; use **Send password reset email** instead.
</Sidenote>

The code lets someone at your registration desk set a new password without email. Give one only in person, after checking ID.

1. In the **Actions** card, click **At-Con Password Reset**.

   <Result>An **At-Con Password Reset** dialog warns to issue codes only in person, after verifying identity.</Result>

2. Click **Confirm**.

   <Result>The button now reads **Reset code:** and an 8-character code.</Result>

3. Give the code to the person. On the login page they click **Already Got a Reset Code?**, enter the code and a new password, and click **Reset Password**.

   <Result>They see **Success** and *Your password has been successfully reset and you can now login.*</Result>

### Reset two-factor authentication

Use this when someone has lost their authenticator app and backup codes.

1. In the **Actions** card, click **Reset 2FA**.

   <Result>A **Remove Second Factor** dialog asks *Are you sure you want to remove second factor authentication from the user?*</Result>

2. Click **Remove**.

   <Result>**Reset 2FA** disappears. The person can log in with their password alone and set up two-factor authentication again.</Result>

## Emergency contacts

<Sidenote title="Who can do this">
Needs `admin:read:emergencycontacts` (default *admin* and *registration* roles). The tab shows only for people registered for this convention.
</Sidenote>

Attendees give up to two emergency contacts when registering. Viewing them is logged, as they're someone else's personal information.

1. On the person's profile, click the **Emergency Contacts** tab.

   <Result>A **PII Access Warning** card says *This access will be logged for auditing purposes.*, with a **Continue** button.</Result>

2. Click **Continue**.

   <Result>Two **Emergency Contact Info** cards show a **Name** and **Phone** each, or *Contact information was not provided.*</Result>

## Audit history

<Sidenote title="Who can do this">
Needs `audit:read` (default *admin* and *hr* roles).
</Sidenote>

The audit history records sign-ins, changes, staff actions and views of personal information, and who did them.

1. On the person's profile, click the **Audit** tab.

   <Result>The account's entries are listed with date, time and description, below a **Search all tags...** box. ConCat support's entries are shaded pink, with a support-agent icon.</Result>

2. Click the arrow (**Toggle details**) at the start of an entry (Figure 4.1).

   <Result>The entry opens with **Show Raw**, its type, and its tags, each with plus and minus buttons.</Result>

3. Click the plus button on one of the tags.

   <Result>Only entries with that tag are listed; the tag shows above the list with a button to remove the filter.</Result>

4. Click the date between the arrows below the list, choose a **Date** in the **Pick a time to browse from** dialog, and click **Update**.

   <Result>The list shows the entries before that date, newest first, or **(Empty)**.</Result>

<Figure
  src="/img/guides/attendees/audit-entry.webp"
  alt="An expanded audit entry: an arrow pointing down, the date, the sentence, a Show Raw button, the entry's type, and the tags admin, email and export, each with plus and minus buttons."
  title="An expanded audit entry"
  width="600px"
  markers={[
    { n: 1, x: 0, y: 5.9, w: 7.2, h: 30.6 },
    { n: 2, x: 6.7, y: 52.6, w: 14.3, h: 21 },
    { n: 3, x: 25.4, y: 74.4, w: 18.5, h: 25 },
  ]}
>

1. **Toggle details**.
2. **Show Raw**.
3. A tag, with its plus (show only entries with it) and minus (hide them) buttons.

</Figure>

For system-wide logs, see [Audit logs](../system/audit-logs.md).

## Export one person's data

<Sidenote title="Who can do this">
Needs `user:update` and `system:export`; by default only *admin* has both.
</Sidenote>

Use this when a person asks for a copy of their data.

1. On the person's profile, click the download button (<MaterialIcon name="download" />) in the **User Profile** card.

   <Result>An **Export for User ID** dialog warns **This export will contain PII, and be logged. Handle with care.**</Result>

2. To leave out audit entries for a much smaller file, turn on **Do not include audit log entries.** Then click **Download**.

   <Result>Stay on the page until **Export successful.** appears; your browser saves `user_` + the ID + `_export.json`.</Result>

## Delete an account

<Sidenote title="Who can do this">
Needs `user:update`, `staff:admin:update`, `pii:admin:read` and `pii:admin:delete`; by default only *admin* has them.
</Sidenote>

Deletion runs 24 hours after the request, erasing the account's personal information; until then you can cancel. You can't delete your own account this way (*You cannot delete your account this way.*) or another administrator's (*You cannot delete other administrators.*).

1. On the person's profile, click the delete button (<MaterialIcon name="delete" />) in the **User Profile** card.

   <Result>A **Request to delete account?** dialog asks you to confirm.</Result>

2. Click **Delete**.

   <Result>**Deletion of user has been requested.** appears, and a red banner on the **Name** tab gives the deletion date and time, with a **Cancel Request** button.</Result>

3. *(To cancel)* Click **Cancel Request** in the banner.

   <Result>A **Cancel Request** dialog warns this can't be undone; deleting later needs a new request.</Result>

4. Click **Confirm Cancellation**.

   <Result>**Request was successfully canceled.** appears, and the banner disappears.</Result>

:::danger[Deletion is permanent]
After the 24 hours, the personal information can't be brought back. Export the data first (section 5) if you need a copy.
:::
