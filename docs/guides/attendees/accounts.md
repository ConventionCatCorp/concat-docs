---
sidebar_position: 5
hide_table_of_contents: true
textbook: true
---

# Attendee accounts and sign-in

See what attendees get when they create an account, log in, recover a password and manage their account. Follow along with a test account.

:::info[In this guide]
The login page, creating an account, email login links, forgotten passwords, two-factor authentication, account settings and email changes, personal details, links from staff and parents, and logging out and other conventions.
:::

## The login page

<Sidenote title="Emails">
Email subjects start with your **Notification Prefix**.
</Sidenote>

Anyone not logged in is sent to the login page, then back to the page they wanted.

1. Open your instance's address in a private browser window, so you aren't logged in as yourself.

   <Result>The **Welcome** page opens: your convention's card (logo, name, dates, venue, and any **Login Page Announcement**) and the **Login** card, with **Email me a login link**, **Create Your Account**, **Forgot Password?** and **Already Got a Reset Code?**.</Result>

2. Enter a test account's email address or username and its password, then click **Login**.

   <Result>The **Attendance** page opens: see [The attendee homepage](./homepage.md).</Result>

A login can end with one of these messages instead.

<TableFigure title="Login messages">

| Message | Cause |
| --- | --- |
| *Unknown username or password.* | Wrong login or password. |
| *Please check your email to confirm your account and complete registration.* | Email not confirmed (section 2.1). Staff can let them in: see [Managing an attendee's account](./user-accounts.md), section 2.1. |
| *You have been banned from attending the convention.* | A registration ban. See [User Notes](../usernotes/usernotes.md). |

</TableFigure>

The **Login Page Announcement** is one of your policies: see [Convention setup](../quickstart/convention-setup.md), section 3. In maintenance mode, a **Maintenance Mode** card with an **Admin Login** button for staff replaces the login form: see [Convention settings](../system/settings.md).

## Create an account

<Sidenote title="Ages">
The age buttons come from the **Child Age Threshold** and **Minor Age Threshold** in Registration settings: see [Registration setup](../quickstart/registration-setup.md), section 6.
</Sidenote>

1. On the login page, click **Create Your Account**.

   <Result>The **Account Creation** page opens on an **Age check** card, with a button per age band, such as **I was born before** a date **(Over 18)**. A middle band appears when the child threshold is below the minor threshold.</Result>

2. Click the first button (born before the date).

   <Result>A **Convention Policies** card shows your terms with two checkboxes; **Continue** stays greyed out until both are ticked.</Result>

3. Tick both checkboxes and click **Continue**.

   <Result>The **Account Creation** form opens: username, email, a ticked newsletter checkbox, password, then the person's names, date of birth, address and phone number.</Result>

4. Fill in the form and click **Create Your Account**.

   <Result>A **Confirm your email address!** card appears, and an *Account Creation Confirmation* email arrives with a confirmation link.</Result>

The form checks usernames and email addresses as they're typed, for example *This username is already in use.* or *That username is invalid. Usernames must be between 4 and 64 characters.*

The youngest age button ends at a **We're sorry** card showing your **Child Registration Error** policy: no account can be made. The middle button adds your **Minor Registration Warning** policy to the policies card; for younger attendees, see [Sub-accounts, children and minors](../registration/sub-accounts.md).

:::note[Settings that change this form]
- **Require e-mail confirmation before login.** (on by default; under **Users** on the **Convention** tab of **Housekeeping › System › Settings**): when off, step 4 logs the attendee straight in. The confirmation email is still sent.
- **Personal details and reCAPTCHA:** ConCat sets the name, birth date and address fields, and a reCAPTCHA box, for your instance; ask ConCat to change them. While the reCAPTCHA box shows, **Create Your Account** stays greyed out until it's ticked.
:::

### Confirm the email address

1. In the *Account Creation Confirmation* email, click the link.

   <Result>An **Account Creation** page shows **Account Activated!**, with a **Go back to Login** link.</Result>

The link works for 7 days. An old or mistyped link shows **Error During Activation**; the attendee can ask for a new one (section 2.2) or reset their password (section 4), which also confirms the address.

### Resend the confirmation email

Attendees whose email isn't confirmed see a reminder on their homepage once logged in: this happens when confirmation isn't required, or after staff used **Allow user to login**.

1. As an attendee whose email isn't confirmed, open **Attendance** in the sidebar.

   <Result>A yellow **Verify your account's email address!** banner shows, with a **Resend verification email** button.</Result>

2. Click **Resend verification email**.

   <Result>*A new verification email has been sent and will arrive shortly.* appears, and a new *Account Creation Confirmation* email arrives.</Result>

The same reminder, headed **Email verification required**, appears on the volunteer and dealer application pages.

### Identity verification

ConCat can make attendees verify their age with Stripe Identity before creating an account. There's no Housekeeping setting: ask ConCat to turn it on, and how many verifications your plan includes. With it on, sign-up changes as follows.

1. On the login page, click **Create Your Account**.

   <Result>The **Age check** card has only two buttons: born before a date (over your minor age) and born after it. The second ends at **We're sorry**.</Result>

2. Click the first button, accept the policies and click **Continue**.

   <Result>An **Age Verification** card offers **Verify with Stripe** and **Opt-Out / Manual Verification**.</Result>

3. Click **Verify with Stripe** and complete Stripe's checks.

   <Result>**Verification complete!** appears, then the **Account Creation** form opens with the names and date of birth filled in from the ID.</Result>

**Opt-Out / Manual Verification** shows your **Opt Out from Stripe Identity** policy and a **Go back** button, and doesn't lead to the form, so that policy should tell attendees how to reach you. Once your organization has used all its verifications, the card shows **Verification error** instead.

## Log in with an email link

<Sidenote title="One use, 15 minutes">
A login link works once, for 15 minutes. An account can be sent 5 links an hour. Sub-accounts can't use email links.
</Sidenote>

An attendee who can't remember their password can ask for a link that logs them in. **Email me a login link** shows unless ConCat has turned the feature off for your server.

1. On the login page, click **Email me a login link**.

   <Result>A **Log in with an email link** dialog opens with an **Email / Username** field.</Result>

2. Enter the email address or username and click **Send login link**.

   <Result>A confirmation message appears, and a *Your Login Link* email arrives with a **Log In** button.</Result>

3. In the email, click **Log In**.

   <Result>A **Log in with an email link** page opens with a **Login** button.</Result>

4. Click **Login**.

   <Result>The **Attendance** page opens, after the code prompt if the account uses two-factor authentication (section 5).</Result>

## Forgotten passwords

1. On the login page, click **Forgot Password?**.

   <Result>A **Reset Password** dialog opens with an **Email** field.</Result>

2. Enter the account's email address and click **Reset Password**.

   <Result>*Your password reset request has been submitted.* appears, and a *Password Reset* email arrives with a link.</Result>

3. In the email, click the link.

   <Result>The **Password Reset** page opens with **New Password** and **Confirm password**.</Result>

4. Enter a new password twice and click **Reset Password**.

   <Result>**Success** and *Your password has been successfully reset and you can now login.* appear.</Result>

The link works for 24 hours, and resetting also confirms the email address. With a code from staff at the convention, the attendee clicks **Already Got a Reset Code?** instead; the same page opens with a **Reset Code** field. Staff tools are in [Managing an attendee's account](./user-accounts.md), section 2.

## Two-factor authentication

<Sidenote title="Locked out?">
Someone who loses both their authenticator and their backup codes needs staff to remove the second factor: see [Managing an attendee's account](./user-accounts.md), section 2.4.
</Sidenote>

Any attendee can add a second factor: a code from an authenticator app (OTP), backup codes, or both.

1. In the sidebar, under **Account**, click **Two-factor authentication**.

   <Result>The **Second Factor** page opens with *No Second factors created* and a **Create New** button.</Result>

2. Click **Create New**.

   <Result>A **Setup Second Factor** dialog opens with **Type** set to **OTP**, a QR code and a **Confirmation Code** field.</Result>

3. Scan the QR code with an authenticator app, enter the 6-digit code it shows in **Confirmation Code**, and click **Create**.

   <Result>The factor is listed, with a red warning: *You have NOT setup backup codes!*</Result>

4. Click **Create New**, choose **Backup Codes** in **Type**, store the codes it shows somewhere safe, and click **Create**.

   <Result>The backup codes are listed as a second factor, and the warning disappears.</Result>

5. Log out, then log in again with the account's password.

   <Result>A **Two-Factor Authentication** dialog asks for a **Second Factor Code**, with **Use Backup Code Instead**.</Result>

6. Enter the current code from the app and click **Login**.

   <Result>The **Attendance** page opens.</Result>

Each factor has a **Delete** button (*Second factor deleted*). An account with only backup codes shows a warning that this can easily lead to losing access.

## Account settings

**Account settings** holds the username, email address, newsletter choice and password. Every change needs the current password.

1. In the sidebar, under **Account**, click **Account settings**.

   <Result>The **Edit Account Details** page opens with a fixed **User ID**, **Username**, **Email Address**, the newsletter checkbox and the password fields.</Result>

2. Untick the newsletter checkbox, enter the **Current Password**, and click **Update**.

   <Result>*Your account information has been updated successfully.* appears.</Result>

Changing the password sends a *Password Changed* email and logs the account out everywhere else.

### Change the email address

1. On **Edit Account Details**, type a new **Email Address**.

   <Result>A note under the field says *You will need to verify your new email before changes take effect.*</Result>

2. Enter the **Current Password** and click **Update**.

   <Result>The success message appears and the email field greys out. A *Request email change* email arrives at the new address.</Result>

3. In that email, click the link.

   <Result>An **Account change email** page shows **Email updated!**, and an *E-Mail Address Updated* email goes to both the old and the new address.</Result>

The account keeps its old address until the link is clicked. Only one change can be requested in 24 hours.

## Personal details

**Personal details** holds the legal and preferred names, date of birth, profile picture, address and phone number. Attendees reach it from the sidebar, **Update personal info** on their homepage, or **Edit personal details** in their own registration card's menu.

1. In the sidebar, under **Account**, click **Personal details**.

   <Result>The **Edit Personal Details** page opens with these details and an **Update** button.</Result>

2. Change the **Preferred Name** and click **Update**.

   <Result>*Your personal information has been updated successfully.* appears.</Result>

3. Click the **Date of birth** field of an account that already has one.

   <Result>*If you need to change your date of birth, please contact the registration team.* appears; the field can't be changed.</Result>

Attendees can set their date of birth once; after that, only staff can change it. First and last names are locked after Stripe Identity verification (section 2.3). Staff can correct any of these: see [Managing an attendee's account](./user-accounts.md), section 1.

## Links staff and parents send

### Finish an account migration

When a parent turns a sub-account into the dependent's own account ([Sub-accounts, children and minors](../registration/sub-accounts.md)), the dependent gets an *Account Migration Confirmation* email.

1. In the *Account Migration Confirmation* email, click the link.

   <Result>The **Account Migration** page opens with **Almost Done!** and **Username**, **Password** and **Confirm password** fields.</Result>

2. Fill in all three and click **Submit**.

   <Result>The attendee is logged in, *Account successfully migrated.* appears, and the **Edit Personal Details** page opens.</Result>

### Accept a role invite

Staff can invite people into a role, such as *staff*, with a link: see [Users and access](../quickstart/users-and-access.md), section 3. The person must be logged in to accept; if they aren't, the login page opens first, then takes them on to the invite.

1. Log in as the invited person, then open the invite link.

   <Result>The **Role Invite Code** page names the role, with **Click here to accept** and **Click here to decline**. Someone who already has the role sees a greyed-out **You already have this role.** button.</Result>

2. Click **Click here to accept**.

   <Result>The **Attendance** page opens, and the person is listed on the role's **Users** tab in Housekeeping.</Result>

An expired or used-up invite shows *Sorry. This role code has expired.* **Click here to decline** returns to the homepage without changing anything.

## Log out and other conventions

### Log out

1. In the sidebar, click the three-dot button (**User menu**) next to **Welcome back,** and choose **Log out**.

   <Result>*You are now logged out.* appears, and the login page opens.</Result>

### Log in to another convention

Your organization can run several conventions, each at its own address, with one set of accounts. Attendees always log in at your main convention's address; the other conventions send them there and back.

1. While logged out, open the address of another of your conventions, as listed on the **Conventions** tab of **Housekeeping › System › Settings**.

   <Result>The login page opens at your main convention's address, with the other convention's name, dates and venue on the card.</Result>

2. Log in.

   <Result>*Redirecting user…* appears briefly, then the other convention's **Attendance** page opens, logged in.</Result>
