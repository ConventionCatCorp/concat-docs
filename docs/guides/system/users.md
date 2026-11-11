---
sidebar_position: 5
hide_table_of_contents: true
textbook: true
---

# Creating user accounts

Attendees and most staff create their own accounts from your homepage. This guide shows how to create an account by hand for someone who can't, and how to create a sub-account that belongs to another account.

:::info[In this guide]
When to create an account by hand (section 1), creating an account (section 2), and creating a sub-account (section 3).
:::

## When to create an account by hand

<Sidenote title="Who can do this">
**User Creation** needs the **user:create** permission. The default **admin** and **registration** roles have it.
</Sidenote>

Create an account by hand for someone who has no email address, can't use the sign-up form, or is registering at the desk. The account is the same as one made through sign-up. It has no roles; to give staff access, see [Roles and permissions](./roles.md).

ConCat gives the account a random password that nobody knows. To sign in themselves, the person resets their password from the login page.

## Create an account

<Sidenote title="Reason for manual creation">
The reason is written to the audit log with the new account, so you can see later why it was made. If you fill it in, use at least 10 characters.
</Sidenote>

1. Go to **Housekeeping › System › User Creation**.

   <Result>A page headed **Manual Account Creation** opens. The address ends in `/housekeeping/system/user/create`.</Result>

2. Fill in the fields in Table 2.1, tick **Send the user an account confirmation email.** if they have an email address, then click **Create User**.

   <Result>An **Account created.** message appears, and the new person's profile opens. The address ends in `/housekeeping/attendees/user/` followed by their user ID.</Result>

<TableFigure title="Manual Account Creation fields">

| Field | What to enter |
| --- | --- |
| **Owner account** | Leave empty for an ordinary account. <small>Choosing an account makes a sub-account (section 3).</small> |
| **Reason for manual creation** | Why you're creating the account. |
| **Username** | 4 to 64 characters: letters, digits, dots, hyphens and underscores, starting with a letter or digit. <small>Required unless you chose an **Owner account**.</small> |
| **Email Address** | The person's email address. <small>It must not already be used by another account.</small> |
| **First Name**, **Last Name** | The legal names on the person's government ID. |
| **Preferred Name** | The name they'd like you to use, if different. |
| **Date of birth** | Their date of birth. |
| **Address Line 1**, **Address Line 2 (Optional)**, **City**, **Zip / postal code**, **Country**, **State / province** | Their address. <small>Choose **Country** first; **State / province** lists that country's regions.</small> |
| **Phone number** | Their phone number. |
| **Send the user an account confirmation email.** | Emails them a link to confirm the account. <small>Otherwise *The user will not receive additional emails until their password is reset.*</small> |

</TableFigure>

If the username or email address is already in use, the form shows it next to the field and the account isn't created.

## Create a sub-account

A sub-account belongs to another account, its *owner*, as when a parent registers a child. Sub-accounts are explained for attendees in [Registration setup](../quickstart/registration-setup.md), section 5.

1. Go to **Housekeeping › System › User Creation**. In **Owner account**, start typing the owner's name or username and choose them from the list.

   <Result>The owner is shown in the **Owner account** field. Only one owner can be chosen.</Result>

2. Fill in the sub-account's details from Table 2.1. **Username** can be left empty. Then click **Create User**.

   <Result>An **Account created.** message appears, and the sub-account's profile opens. Unlike an ordinary profile, it has no **Orders**, **Volunteer** or **Dealer** tab.</Result>

:::caution[Watch out]
The owner must be an ordinary account. If you choose an account that is itself a sub-account, creating fails with *The targetted user is a sub-account, and therefore cannot own another sub-account.*
:::
