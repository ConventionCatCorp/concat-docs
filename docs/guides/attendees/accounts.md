---
sidebar_position: 5
hide_table_of_contents: true
textbook: true
---

# Attendee accounts and sign-in

This guide shows what your attendees see when they create an account, log in, recover a password and manage their account settings. Follow the steps yourself with a test account to see each screen as an attendee does.

:::info[In this guide]
The login page (section 1), creating an account (section 2), logging in with an email link (section 3), forgotten passwords (section 4), two-factor authentication (section 5), account settings and email changes (section 6), personal details (section 7), links that staff and parents send (section 8), and logging out and other conventions (section 9).
:::

## The login page

<Sidenote title="See it as attendees do">
Open your instance's address in a private browser window, so you aren't logged in as yourself.
</Sidenote>

Anyone who isn't logged in and opens a page of your instance is sent to the login page. After logging in, they come back to the page they wanted.

1. Open your instance's address in a private browser window.

   <Result>The **Welcome** page opens. A card shows your logo, convention name, dates and venue. Next to it, the **Login** card has **Email / Username** and **Password** fields and the buttons **Login**, **Email me a login link** and **Create Your Account**, with the links **Forgot Password?** and **Already Got a Reset Code?** below. If you've written a **Login Page Announcement**, it appears under your convention's card.</Result>

2. Enter a test account's email address or username and its password, then click **Login**.

   <Result>The **Attendance** page opens: see [The attendee homepage](./homepage.md).</Result>

Table 1.1 lists the messages a login can end with instead.

<TableFigure title="Login messages">

| Message | Cause |
| --- | --- |
| *Unknown username or password.* | The login or password is wrong. |
| *Please check your email to confirm your account and complete registration.* | The account's email hasn't been confirmed (section 2.1). Staff can let them in: see [Managing an attendee's account](./user-accounts.md), section 2.1. |
| *You have been banned from attending the convention.* | The person has a registration ban. See [User Notes](../usernotes/usernotes.md). |

</TableFigure>

The **Login Page Announcement** is one of your policies: see [Convention setup](../quickstart/convention-setup.md), section 3. When maintenance mode is on, a **Maintenance Mode** card replaces the login form, with an **Admin Login** button for staff; it's covered in [Convention settings](../system/settings.md).

## Create an account

<Sidenote title="Ages">
The age buttons come from the **Child Age Threshold** and **Minor Age Threshold** in Registration settings. See [Registration setup](../quickstart/registration-setup.md), section 6.
</Sidenote>

1. On the login page, click **Create Your Account**.

   <Result>The **Account Creation** page opens on an **Age check** card: *We just need to confirm you are … years old before you can register an account.* It has a button for each age band, such as **I was born before** a date **(Over 18)** and **I was born after** a date **(Under 13)**. A middle band appears when the child threshold is below the minor threshold.</Result>

2. Click the first button (born before the date).

   <Result>A **Convention Policies** card shows your terms and conditions, with the checkboxes **I have read and agree to the convention policies above.** and **I have read and agree to the Privacy Policy.** **Continue** stays greyed out until both are ticked.</Result>

3. Tick both checkboxes and click **Continue**.

   <Result>The **Account Creation** form opens, with **Username**, **Email Address**, a newsletter checkbox (*I want to receive* your convention's *e-mail newsletter.*, ticked), **Password** and **Confirm password**. Below them are **First Name**, **Last Name**, **Preferred Name**, **Date of birth**, the address fields and **Phone number**, then **Create Your Account**.</Result>

4. Fill in the form and click **Create Your Account**.

   <Result>A **Confirm your email address!** card says the attendee must confirm their e-mail address, and has a **Go back to Login** button. An email with the subject *Account Creation Confirmation* (after your **Notification Prefix**) arrives, containing a confirmation link.</Result>

As the attendee types a username or email address, the form checks it: *Great! This username is available*, *This username is already in use.*, or *That username is invalid. Usernames must be between 4 and 64 characters.*

The youngest button ends at a **We're sorry** card showing your **Child Registration Error** policy: the person can't make an account. The middle button adds your **Minor Registration Warning** policy to the policies card; registering younger attendees is covered in [Sub-accounts, children and minors](../registration/sub-accounts.md).

:::note[Settings that change this form]
- **Require e-mail confirmation before login.** (on by default, under **Users** on the **Convention** tab of **Housekeeping › System › Settings**): when it's off, step 4 logs the attendee straight in instead. They still get the confirmation email.
- **Personal details and reCAPTCHA:** the name, birth date and address fields, and a reCAPTCHA box above **Create Your Account**, are set by ConCat for your instance. Ask ConCat if you want them changed. While the reCAPTCHA box is shown, **Create Your Account** stays greyed out until it's ticked.
:::

### Confirm the email address

1. In the *Account Creation Confirmation* email, click the link.

   <Result>An **Account Creation** page shows **Just a Moment...**, then **Account Activated!**, *Thanks for confirming your e-mail address!* and *Your account is active and you can now log in.*, with a **Go back to Login** link.</Result>

The link works for 7 days. An old or mistyped link shows **Error During Activation**; the attendee can ask for a new one (section 2.2) or reset their password (section 4), which also confirms the address.

### Resend the confirmation email

Logged-in attendees whose email isn't confirmed see a reminder on their homepage. This happens when confirmation isn't required, or when staff used **Allow user to login**.

1. As an attendee whose email isn't confirmed, open **Attendance** in the sidebar.

   <Result>A yellow banner says **Verify your account's email address!**, *Verify your email to protect your account and to receive important updates.* and *Don't see an email? Check your spam folder, or request a new email.*, with a **Resend verification email** button.</Result>

2. Click **Resend verification email**.

   <Result>The message *A new verification email has been sent and will arrive shortly.* appears, and a new *Account Creation Confirmation* email arrives.</Result>

The same reminder, headed **Email verification required**, appears on the volunteer and dealer application pages.

### Identity verification

ConCat can make attendees verify their age with Stripe Identity before they create an account. There's no setting for this in Housekeeping: ask ConCat to turn it on, and to tell you how many verifications your plan includes. When it's on, the sign-up changes as follows.

1. On the login page, click **Create Your Account**.

   <Result>The **Age check** card has only two buttons: born before a date (over your minor age) and born after it. The second ends at **We're sorry**.</Result>

2. Click the first button, accept the policies and click **Continue**.

   <Result>An **Age Verification** card says *You'll need to take a photo of your ID and a selfie.*, with **Verify with Stripe** and **Opt-Out / Manual Verification**.</Result>

3. Click **Verify with Stripe** and complete Stripe's checks.

   <Result>**Verification complete!** appears, then the **Account Creation** form opens with the first name, last name and date of birth filled in from the ID.</Result>

**Opt-Out / Manual Verification** shows your **Opt Out from Stripe Identity** policy with a **Go back** button; it doesn't lead on to the form, so that policy should tell attendees how to reach you. When your organization has used all its verifications, the card shows **Verification error** instead.

## Log in with an email link

<Sidenote title="One use, 15 minutes">
A login link works once and expires after 15 minutes. An account can be sent 5 links an hour. Sub-accounts can't use email links.
</Sidenote>

An attendee who can't remember their password can ask for a link that logs them in. The **Email me a login link** button is on unless ConCat has turned the feature off for your server.

1. On the login page, click **Email me a login link**.

   <Result>A **Log in with an email link** dialog explains the link, with an **Email / Username** field and the buttons **Send login link** and **Cancel**.</Result>

2. Enter the email address or username and click **Send login link**.

   <Result>A *If your email is registered to an account, you should receive a login link shortly.* message appears. An email with the subject *Your Login Link* (after your **Notification Prefix**) arrives, with a **Log In** button.</Result>

3. In the email, click **Log In**.

   <Result>A **Log in with an email link** page says *Click the button below to log in.*, with **Login** and **Back to Login** buttons.</Result>

4. Click **Login**.

   <Result>The **Attendance** page opens. If the account uses two-factor authentication, the code prompt appears first (section 5).</Result>

## Forgotten passwords

1. On the login page, click **Forgot Password?**.

   <Result>A **Reset Password** dialog explains that a reset link will be emailed, and says who to contact if nothing arrives within 30 minutes. It has an **Email** field and **Reset Password** and **Cancel** buttons.</Result>

2. Enter the account's email address and click **Reset Password**.

   <Result>A message says *Your password reset request has been submitted.* and *If your email is registered to an account, you should receive an email shortly.* An email with the subject *Password Reset* (after your **Notification Prefix**) arrives with a link.</Result>

3. In the email, click the link.

   <Result>The **Password Reset** page opens: *To complete your password reset, please provide the code you were provided either by email or by the at-con registration staff.*, with **New Password**, **Confirm password** and **Reset Password**.</Result>

4. Enter a new password twice and click **Reset Password**.

   <Result>**Success** and *Your password has been successfully reset and you can now login.* appear, with **Go back to Login**.</Result>

The link works for 24 hours. Resetting a password also confirms the account's email address. If the attendee was given a code instead, by staff at the convention, they click **Already Got a Reset Code?** on the login page: the same page opens with a **Reset Code** field above the passwords. Staff tools for this are in [Managing an attendee's account](./user-accounts.md), section 2.

## Two-factor authentication

<Sidenote title="Locked out?">
Someone who loses both their authenticator and their backup codes needs staff to remove the second factor: see [Managing an attendee's account](./user-accounts.md), section 2.4.
</Sidenote>

Any attendee can protect their account with a second factor: a code from an authenticator app (OTP), backup codes, or both.

1. In the sidebar, under **Account**, click **Two-factor authentication**.

   <Result>The **Second Factor** page opens, with a table headed **Type**, **Hint** and **Updated At**, saying *No Second factors created*, and a **Create New** button.</Result>

2. Click **Create New**.

   <Result>A **Setup Second Factor** dialog opens with **Type** set to **OTP**. It shows a QR code with *Scan this QR with your authenticator app of choice and enter the code.*, a setup key with a **Copy** button, and a **Confirmation Code** field.</Result>

3. Scan the QR code with an authenticator app, enter the 6-digit code it shows in **Confirmation Code**, and click **Create**.

   <Result>The dialog closes and the factor is listed. A red warning says *You have NOT setup backup codes!*</Result>

4. Click **Create New**, choose **Backup Codes** in **Type**, store the codes it shows somewhere safe, and click **Create**.

   <Result>The backup codes are listed as a second factor, and the warning disappears.</Result>

5. Log out, then log in again with the account's password.

   <Result>A **Two-Factor Authentication** dialog asks for the 6-digit code from the app, with a **Second Factor Code** field, **Use Backup Code Instead**, **Login** and **Cancel**.</Result>

6. Enter the current code from the app and click **Login**.

   <Result>The **Attendance** page opens.</Result>

Each factor in the table has a **Delete** button, which removes it with the message *Second factor deleted*. An account with only backup codes shows a warning that this can easily lead to losing access.

## Account settings

**Account settings** holds the login details: username, email address, newsletter choice and password. Every change needs the current password.

1. In the sidebar, under **Account**, click **Account settings**.

   <Result>The **Edit Account Details** page opens, with **User ID** (*This is your User ID, it can't be changed.*), **Username**, **Current Password**, **Email Address**, the newsletter checkbox, **Password**, **Confirm password** and **Update**.</Result>

2. Untick the newsletter checkbox, enter the **Current Password**, and click **Update**.

   <Result>A *Your account information has been updated successfully.* message appears.</Result>

Changing the password sends a *Password Changed* email and logs the account out everywhere else.

### Change the email address

1. On **Edit Account Details**, type a new **Email Address**.

   <Result>A note appears under the field: *You will need to verify your new email before changes take effect.*</Result>

2. Enter the **Current Password** and click **Update**.

   <Result>The success message appears. The email field is greyed out, with the note *An email change request has already been made in the past 24 hours. Please check your email inbox.* An email with the subject *Request email change* (after your **Notification Prefix**) arrives at the new address.</Result>

3. In that email, click the link.

   <Result>An **Account change email** page shows **Just a Moment...**, then **Email updated!** and *Your email address has been updated!*, with a **Go back to homepage** button. An *E-Mail Address Updated* email goes to both the old and the new address.</Result>

Until the link is clicked, the account keeps its old address. Only one change can be requested in 24 hours.

## Personal details

**Personal details** holds the legal name, preferred name, date of birth, profile picture, address and phone number. Attendees reach it from the sidebar, from **Update personal info** on their homepage, or from **Edit personal details** in their own registration card's menu.

1. In the sidebar, under **Account**, click **Personal details**.

   <Result>The **Edit Personal Details** page opens, with **First Name**, **Last Name**, **Preferred Name**, **Date of birth**, a **Profile picture** with **Click to Update** and **Delete** buttons, the address fields and **Phone number**, and **Update**.</Result>

2. Change the **Preferred Name** and click **Update**.

   <Result>A *Your personal information has been updated successfully.* message appears.</Result>

3. Click the **Date of birth** field of an account that already has one.

   <Result>A message says *If you need to change your date of birth, please contact the registration team.* The field can't be changed.</Result>

An attendee can set their date of birth once; after that, only staff can change it. First and last names are locked for attendees whose identity was verified with Stripe Identity (section 2.3). Staff can correct any of these: see [Managing an attendee's account](./user-accounts.md), section 1.

## Links staff and parents send

### Finish an account migration

A parent can turn a sub-account into the dependent's own account, as [Sub-accounts, children and minors](../registration/sub-accounts.md) explains. The dependent then gets an email with the subject *Account Migration Confirmation* (after your **Notification Prefix**).

1. In the *Account Migration Confirmation* email, click the link.

   <Result>The **Account Migration** page opens with **Almost Done!** and *In order to finish migrating your account, you need to provide a username and password.*, and the fields **Username**, **Password** and **Confirm password**.</Result>

2. Fill in all three and click **Submit**.

   <Result>The attendee is logged in, an *Account successfully migrated.* message appears, and the **Edit Personal Details** page opens.</Result>

### Accept a role invite

Staff can invite people into a role, such as *staff*, with a link: see [Users and access](../quickstart/users-and-access.md), section 3. The person must be logged in to accept. If they open the link while logged out, the login page opens first, and logging in takes them on to the invite.

1. Log in as the invited person, then open the invite link.

   <Result>The **Role Invite Code** page says *You have been invited to join the convention as a* the role's name and description, with **Click here to accept** and **Click here to decline**. Someone who has the role already sees a greyed-out **You already have this role.** button.</Result>

2. Click **Click here to accept**.

   <Result>The **Attendance** page opens. In Housekeeping, the person is now listed on the role's **Users** tab.</Result>

An expired or used-up invite shows *Sorry. This role code has expired.* **Click here to decline** returns to the homepage without changing anything.

## Log out and other conventions

### Log out

1. In the sidebar, click the three-dot button (**User menu**) next to **Welcome back,** and choose **Log out**.

   <Result>The message *You are now logged out.* appears, and the login page opens.</Result>

### Log in to another convention

Your organization can run several conventions, each at its own address, with one set of accounts. Attendees always log in at your main convention's address; the other conventions send them there and back.

1. While logged out, open the address of another of your conventions, as listed on the **Conventions** tab of **Housekeeping › System › Settings**.

   <Result>The login page opens at your main convention's address, with the other convention's name, dates and venue on the card.</Result>

2. Log in.

   <Result>*Redirecting user…* appears briefly, then the other convention's **Attendance** page opens, logged in.</Result>
