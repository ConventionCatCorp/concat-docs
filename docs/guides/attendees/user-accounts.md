---
sidebar_position: 2
hide_table_of_contents: true
textbook: true
---

# Managing an attendee's account

This guide covers the account side of an attendee's profile: correcting their details, helping them sign in, reading their emergency contacts and audit history, exporting their data and deleting the account. Every section starts on the person's profile, which you open from **Housekeeping › Attendees › User Search** as [Finding attendees](./user-search.md) explains.

:::info[In this guide]
Editing personal details (section 1), helping someone sign in (section 2), emergency contacts (section 3), the audit history (section 4), exporting one person's data (section 5), and deleting an account (section 6).
:::

## Edit personal details

<Sidenote title="Who can do this">
Editing needs `user:update`, which the default *admin* and *registration* roles have. Without it, the pencil button isn't shown.
</Sidenote>

1. On the person's profile, on the **Name** tab, click the pencil button (<MaterialIcon name="edit" />) in the **User Profile** card.

   <Result>The **Edit User** dialog opens, with **Preferred Name**, **Date of birth**, **First Name**, **Last Name**, **Email**, **Phone**, **Address Line 1**, **Address Line 2 (Optional)**, **City**, **Country**, **State / province** and **Zip / postal code**.</Result>

2. Correct the details, then click **Update User**.

   <Result>The dialog closes, and the **User Profile** card shows the new details.</Result>

:::caution[Watch out]
- **Email address:** a new address doesn't take effect straight away. ConCat emails a confirmation link to the new address, and the card keeps the old one, with a warning sign, until the person clicks it. Only one change is allowed in 24 hours; a second try shows *You can only change your email once every 24 hours.*
- **Date of birth:** a main account can't be given a date of birth below your **Child Age Threshold**: *User is underage. The minimum age is … years old.* You can't change your own date of birth here.
- **Address:** if the person has sub-accounts at the same address and phone number, those change with it.
:::

## Help someone sign in

The **Actions** card on the **Name** tab holds the sign-in tools. It's shown to staff with `registration:cashier` or `user:update`. Table 2.1 lists its buttons.

<TableFigure title="The Actions card">

| Button | Does | Shown when |
| --- | --- | --- |
| **Open Cashier Interface** | Opens this person in the [Cashier UI](../registration/cashier/cashier.md). | You have `registration:cashier`. |
| **Allow user to login** | Lets the person log in before they've confirmed their email (section 2.1). | You have `user:update`, and the account isn't confirmed. Not for sub-accounts. |
| **Send password reset email** | Emails the person a password reset link (section 2.2). | You have `user:update`. Not for sub-accounts. |
| **At-Con Password Reset** | Makes a reset code to give the person face to face (section 2.3). | You have `user:update`. Not for sub-accounts. |
| **Reset 2FA** | Removes the person's two-factor authentication (section 2.4). | The person has set it up. Removing it needs `user:update`. |

</TableFigure>

### Let an unconfirmed attendee log in

When **Require e-mail confirmation before login.** is on (the default), a new account can't log in until its owner clicks the link in the confirmation email. Until then, a login attempt says *Please check your email to confirm your account and complete registration.*

1. In the **Actions** card, click **Allow user to login**.

   <Result>A **Verify user** dialog explains that the user will be able to log in, but won't receive any further emails until their email is verified, and asks *Are you sure you want to verify this user?*</Result>

2. Click **Verify**.

   <Result>A **Success! That user has verified, reloading.** message appears, and the **Allow user to login** button disappears.</Result>

The person still gets no email from ConCat until they confirm their address. They can ask for a new confirmation email from their homepage: see [Attendee accounts and sign-in](./accounts.md), section 2.

### Send a password reset email

1. In the **Actions** card, click **Send password reset email**.

   <Result>A **Password Reset** dialog asks *Are you sure you want to send a password reset email to this user?*</Result>

2. Click **Confirm**.

   <Result>A **Successfully sent password reset email!** message appears. The person receives an email with the subject *Password Reset* (after your **Notification Prefix**), with a link that works for 24 hours.</Result>

Setting a new password from the link also confirms the person's email address, so it fixes an unconfirmed account too. The attendee's side is in [Attendee accounts and sign-in](./accounts.md), section 4.

### Give a reset code at the convention

<Sidenote title="Deprecated">
ConCat marks this tool as deprecated and recommends **Send password reset email** instead.
</Sidenote>

An at-con reset code lets someone at your registration desk set a new password without email. Only give one in person, after checking the person's ID.

1. In the **Actions** card, click **At-Con Password Reset**.

   <Result>An **At-Con Password Reset** dialog warns that a code should only be issued in person after verifying the attendee's identity, and that the feature is deprecated.</Result>

2. Click **Confirm**.

   <Result>The button now reads **Reset code:** followed by an 8-character code.</Result>

3. Give the code to the person. On the login page they click **Already Got a Reset Code?**, enter the code and a new password, and click **Reset Password**.

   <Result>They see **Success** and *Your password has been successfully reset and you can now login.*</Result>

### Reset two-factor authentication

Use this when someone has lost their authenticator app and backup codes.

1. In the **Actions** card, click **Reset 2FA**.

   <Result>A **Remove Second Factor** dialog asks *Are you sure you want to remove second factor authentication from the user?*</Result>

2. Click **Remove**.

   <Result>The dialog closes and the **Reset 2FA** button disappears. The person can now log in with their password alone, and set up two-factor authentication again.</Result>

## Emergency contacts

<Sidenote title="Who can do this">
The **Emergency Contacts** tab needs `admin:read:emergencycontacts`, which the default *admin* and *registration* roles have. It only appears for people registered for this convention.
</Sidenote>

Attendees give up to two emergency contacts when they register. Opening them is logged, because they're personal information about someone else.

1. On the person's profile, click the **Emergency Contacts** tab.

   <Result>A **PII Access Warning** card says you're about to see sensitive personal information, that you must have a legitimate reason, and *This access will be logged for auditing purposes.* A **Continue** button is below it.</Result>

2. Click **Continue**.

   <Result>Two **Emergency Contact Info** cards appear, each with a **Name** and **Phone**, or *Contact information was not provided.* The access is written to the audit log.</Result>

## Audit history

<Sidenote title="Who can do this">
The **Audit** tab needs `audit:read`, which the default *admin* and *hr* roles have.
</Sidenote>

The audit history records what happened to the account and who did it: sign-ins, changes, staff actions, and views of personal information.

1. On the person's profile, click the **Audit** tab.

   <Result>A list of audit entries for this account appears, each with its date and time and a sentence describing what happened. Entries made by ConCat support are shaded pink, with a support-agent icon. A **Search all tags...** box is above the list.</Result>

2. Click the arrow (**Toggle details**) at the start of an entry.

   <Result>The entry opens, with a **Show Raw** button, the entry's type, and its tags, each with a plus and a minus button.</Result>

3. Click the plus button on one of the tags.

   <Result>Only entries with that tag are listed, and the tag is shown above the list with a button to remove the filter.</Result>

4. Click the date between the arrows below the list, choose a **Date** in the **Pick a time to browse from** dialog, and click **Update**.

   <Result>The list jumps to the entries around that date.</Result>

To browse audit logs for the whole system, see the *Audit logs* guide (System section).

## Export one person's data

<Sidenote title="Who can do this">
Exporting needs `user:update` and `system:export`. By default, only the *admin* role has both.
</Sidenote>

Use this to answer a person's request for a copy of their data. The file holds personal information, and the export itself is logged.

1. On the person's profile, click the download button (<MaterialIcon name="download" />) in the **User Profile** card.

   <Result>A dialog titled **Export for User ID** and the person's ID opens, with the warning **This export will contain PII, and be logged. Handle with care.** and a **Do not include audit log entries.** switch.</Result>

2. If you don't need the audit entries, turn on **Do not include audit log entries.**, which keeps the file much smaller. Then click **Download**.

   <Result>A message asks you to wait on the page: *Export request made. Please wait on this page, and do not navigate away.* Then **Export successful.** appears, and your browser saves a file named `user_` + the ID + `_export.json`.</Result>

## Delete an account

<Sidenote title="Who can do this">
Deleting needs `user:update`, `staff:admin:update`, `pii:admin:read` and `pii:admin:delete`. By default, only the *admin* role has them.
</Sidenote>

Deleting is a request that runs 24 hours later, when ConCat erases the account's personal information. Until then you can cancel it. You can't request your own deletion this way (*You cannot delete your account this way.*), or another administrator's (*You cannot delete other administrators.*).

1. On the person's profile, click the delete button (<MaterialIcon name="delete" />) in the **User Profile** card.

   <Result>A **Request to delete account?** dialog asks *Are you sure you want to request to delete this account? It will be deleted in 24 hours unless canceled.*</Result>

2. Click **Delete**.

   <Result>A **Deletion of user has been requested.** message appears. A red banner at the top of the **Name** tab says *This account is marked for deletion and will be deleted on* the date and time, with a **Cancel Request** button.</Result>

3. *(To cancel)* Click **Cancel Request** in the banner.

   <Result>A **Cancel Request** dialog says the cancellation can't be undone, and that a new request will be needed to delete the user again.</Result>

4. Click **Confirm Cancellation**.

   <Result>A **Request was successfully canceled.** message appears, and the red banner disappears.</Result>

:::danger[Deletion is permanent]
Once the 24 hours are up, the personal information is gone and can't be brought back. Export the person's data first (section 5) if you need a copy.
:::
