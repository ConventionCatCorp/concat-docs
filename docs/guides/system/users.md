---
sidebar_position: 5
hide_table_of_contents: true
textbook: true
---

# Creating user accounts

Create an account by hand for someone who can't sign up themselves, or a sub-account that belongs to another account.

:::info[In this guide]
When to create an account by hand, creating an account, creating a sub-account.
:::

## When to create an account by hand

<Sidenote title="Who can do this">
**User Creation** needs **user:create**, which the default **admin** and **registration** roles have.
</Sidenote>

Create an account by hand for someone with no email address, who can't use the sign-up form, or who is at the desk. It's the same as a signed-up account, with no roles; for staff access, see [Roles and permissions](./roles.md).

ConCat sets a random password nobody knows. To sign in, the person resets it from the login page.

## Create an account

<Sidenote title="Reason for manual creation">
Saved to the audit log with the account. If you fill it in, use at least 10 characters.
</Sidenote>

1. Go to **Housekeeping › System › User Creation**.

   <Result>**Manual Account Creation** opens. The address ends in `/housekeeping/system/user/create`.</Result>

2. Fill in the fields in Table 2.1, tick **Send the user an account confirmation email.** if they have an email address, then click **Create User**.

   <Result>An **Account created.** message appears and the new profile opens, at an address ending in `/housekeeping/attendees/user/` and their user ID.</Result>

<TableFigure title="Manual Account Creation fields">

| Field | What to enter |
| --- | --- |
| **Owner account** | Empty for an ordinary account. <small>Choosing one makes a sub-account (section 3).</small> |
| **Reason for manual creation** | Why you're creating the account. |
| **Username** | 4 to 64 characters: letters, digits, dots, hyphens and underscores, starting with a letter or digit. <small>Required unless you chose an **Owner account**.</small> |
| **Email Address** | Their email address. <small>Not already used by another account.</small> |
| **First Name**, **Last Name** | The legal names on their government ID. |
| **Preferred Name** | The name they'd like used, if different. |
| **Date of birth** | Their date of birth. |
| **Address Line 1**, **Address Line 2 (Optional)**, **City**, **Zip / postal code**, **Country**, **State / province** | Their address. <small>Choose **Country** first; **State / province** then lists its regions.</small> |
| **Phone number** | Their phone number. |
| **Send the user an account confirmation email.** | Emails a link to confirm the account. <small>Otherwise *The user will not receive additional emails until their password is reset.*</small> |

</TableFigure>

A username or email address already in use is flagged next to the field, and the account isn't created.

## Create a sub-account

A sub-account belongs to another account, its *owner*, as when a parent registers a child (see [Registration setup](../quickstart/registration-setup.md), section 5).

1. In **Housekeeping › System › User Creation**, type the owner's name or username in **Owner account** and choose them.

   <Result>The owner appears in **Owner account**. Only one owner can be chosen.</Result>

2. Fill in the sub-account's details from Table 2.1 (**Username** can be empty), then click **Create User**.

   <Result>An **Account created.** message appears and the sub-account's profile opens, with no **Orders**, **Volunteer** or **Dealer** tab.</Result>

:::caution[Watch out]
The owner must be an ordinary account. Choosing a sub-account fails with *The targetted user is a sub-account, and therefore cannot own another sub-account.*
:::
