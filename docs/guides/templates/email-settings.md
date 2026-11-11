---
sidebar_position: 2
hide_table_of_contents: true
textbook: true
---

# Sending domain, senders and contact addresses

This guide sets where your email comes from: the domain it's sent from, the sender names staff can pick for a mass email, and the registration, HR and dealers addresses that automated emails come from and attendees are told to contact.

:::info[In this guide]
The sending domain (section 1), senders for mass email (section 2), and contact addresses (section 3).
:::

## Sending domain

<Sidenote title="Who can do this">
The **Email Settings** tab needs the `email:templates` permission, and its domain and sender sections also need `system:settings:update`. The **Contact** tab needs `system:settings:update`. The default *admin* role has both.
</Sidenote>

ConCat sends all your email for you, so there's no mail server to set up. Every address is a mailbox name, such as `registration`, followed by your sending domain. Out of the box the domain is `concat.app`. Using your own domain, such as `example.com`, means it has to prove you own it, through DNS records you add.

A domain can be set for the organization, which covers every convention, or for one convention, which then uses it instead of the organization's.

1. Go to **Housekeeping › System › Settings** and click the **Email Settings** tab.

   <Result>Under the heading **Email Settings** are two cards: **Email Sending Domain**, which says *The domain is currently set to the default,* `concat.app`, with a **Configure a Domain** button; and **Email Senders for Mass Email**. **Email Templates** follows below.</Result>

2. Click **Configure a Domain**.

   <Result>A **Configure a Domain** dialog opens, with **Domain**, **Scope** (**Organization** or **Convention**), the notes *"Organization" will apply to all conventions.* and *"Convention" will only apply to this convention.*, and **Cancel** and **Submit**.</Result>

3. Enter your **Domain**, choose the **Scope**, then click **Submit**.

   <Result>The dialog closes. A notice says *There is a pending domain validation request for this organization.* (or *convention*) and asks you to add CNAME records. Each record is listed with a **Name**, ending in `._domainkey.` and your domain, and a **Value**, ending in `.dkim.amazonses.com`, each with a copy button. Below are **View Documentation**, **Download CSV**, **Cancel** and **Verify**.</Result>

4. *(Optional)* Click **Download CSV**.

   <Result>A CSV file downloads, with the columns `Type`, `Name` and `Value` and one `CNAME` row per record.</Result>

5. Add each record at your domain's DNS provider, as [CNAME Records](../technical/cname.md#custom-email-domains) explains. Then click **Verify**.

   <Result>A *Your domain was successfully validated.* message appears, and the card says *This organization's email domain is:* (or *convention's*) and your domain. If DNS hasn't updated yet, the message is *Your domain was not able to be validated yet.* Wait, then click **Verify** again.</Result>

6. *(Optional: a domain for the other scope)* Click **Set for Convention** (or **Set for Organization**).

   <Result>The **Configure a Domain** dialog opens with the other **Scope** chosen and fixed, and the note *This organization already has a domain defined, so you can only set one for the convention.* (or the reverse). Continue from step 3.</Result>

7. *(Optional: to go back to `concat.app`)* Click **Clear**.

   <Result>A **Clear Email Domain** dialog asks *Are you sure you want to clear the email domain for this Organization?* (or *Convention*), with **Confirm** and **Cancel**.</Result>

8. Click **Confirm**.

   <Result>The card says *The domain is currently set to the default,* `concat.app` again, unless the other scope still has a domain, which is then shown.</Result>

:::note[Cancelling or failing]
- To abandon a request before it's verified, click **Cancel** next to **Verify**, then **Confirm** in the **Cancel Domain Validation Request** dialog. *Request was successfully canceled.* appears. A new request needs new DNS records.
- *An error has occurred. Cancel this attempt and try again, or contact support.* means the verification failed. Cancel the request and start again from step 2.
- If verification takes more than 24 hours, contact ConCat Support.
:::

## Senders for mass email

<Sidenote title="Mass email only">
*These will **NOT** affect automated emails.* Automated emails come from the contact addresses in section 3.
</Sidenote>

The sender list holds the mailbox names staff can choose as the **From Address** of a mass email. Each becomes the name followed by your sending domain. The list is shared by every convention in your organization. It starts as `bazaar`, `registration`, `events`, `hr`, `dealers`, `artshow` and `noreply`.

1. Under **Email Senders for Mass Email**, type a mailbox name (the part before the @) in **Enter a new sender...**, and click the green tick button (**Save**) next to it.

   <Result>An *Added "*name*" to the senders list.* message appears, and the name is listed.</Result>

2. *(Optional)* Click the red trash button (**Delete**) next to a name.

   <Result>A *Removed "*name*" from the senders list.* message appears, and the name is no longer listed.</Result>

The list can hold up to 16 names and can't be emptied. Each name, followed by your domain, must form a valid email address. Sending a mass email is covered in the *Mass email* guide (Attendees section).

## Contact addresses

Three contact addresses belong to each convention. Each is a mailbox name, followed by your sending domain. Automated emails are sent from them (see [Emails ConCat sends](./system-emails.md)), and your site and emails tell people to write to them, for example *Please contact* the HR address *if you think this is in error.*

<TableFigure title="Contact addresses">

| Field | Default name | Used for |
| --- | --- | --- |
| **Registration Email** | `registration` | Sender of account, order, ticket and refund emails. Refund requests and accounts that need review are also sent to it. |
| **HR Email** | `hr` | Sender of volunteer and data-export emails. Shown to volunteers as the address to contact. |
| **Dealers Email** | `dealers` | Sender of dealer assistant emails, and the contact for dealer applications. <small>Also editable in **Dealers › Dealer Settings**.</small> |

</TableFigure>

1. Click the **Contact** tab.

   <Result>The fields **Dealers Email**, **HR Email** and **Registration Email** are shown, each with a description such as *Contact point for registration. This email will be used as the 'from' address for registration emails.*, and a **Save** button.</Result>

2. Enter the mailbox name (the part before the @) for each, then click **Save**.

   <Result>The fields keep the names you entered after the page refreshes.</Result>

Names can use letters, digits, dots and dashes. To go back to a default name, type it in, such as `hr`, rather than emptying the field. Hotel emails come from `hotel` and can't be renamed.

:::caution[Watch out]
- ConCat only sends email. Make sure each contact address at your own domain is a mailbox someone reads, because attendees are told to write to it, and replies go to it.
- Until you set your own sending domain, email is sent from `concat.app` addresses, but the contact addresses shown on your site end in your site's own address. Set your sending domain (section 1) before you open, so the two match.
:::
