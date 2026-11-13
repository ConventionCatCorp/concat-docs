---
sidebar_position: 2
hide_table_of_contents: true
textbook: true
---

# Sending domain, senders and contact addresses

Set the domain your email is sent from, the senders staff can pick for a mass email, and the contact addresses automated emails use.

:::info[In this guide]
The sending domain, senders for mass email, and contact addresses.
:::

## Sending domain

<Sidenote title="Who can do this">
The **Email Settings** tab needs `email:templates`; its domain and sender sections also need `system:settings:update`. The **Contact** tab needs `system:settings:update`. The default *admin* role has both.
</Sidenote>

ConCat sends all your email, so there's no mail server to set up. Every address is a mailbox name, such as `registration`, followed by your sending domain, `concat.app` by default. To use your own domain, such as `example.com`, you prove you own it with DNS records.

A domain can be set for the organization, covering every convention, or for one convention, which then uses it instead.

1. Go to **Housekeeping › System › Settings** and click the **Email Settings** tab.

   <Result>The **Email Sending Domain** card says *The domain is currently set to the default,* `concat.app`, with a **Configure a Domain** button.</Result>

2. Click **Configure a Domain**.

   <Result>A **Configure a Domain** dialog opens with **Domain** and **Scope**.</Result>

3. Enter your **Domain**, choose the **Scope**, and click **Submit**.

   <Result>A notice says *There is a pending domain validation request for this organization.* (or *convention*) and lists CNAME records: each **Name** ends in `._domainkey.` and your domain, and each **Value** in `.dkim.amazonses.com`.</Result>

4. *(Optional)* Click **Download CSV**.

   <Result>A CSV file downloads, with one `CNAME` row per record.</Result>

5. Add each record at your domain's DNS provider, as [CNAME Records](../technical/cname.md#custom-email-domain) explains, then click **Verify**.

   <Result>*Your domain was successfully validated.* appears, and the card says *This organization's email domain is:* (or *convention's*) and your domain. If DNS hasn't updated yet, *Your domain was not able to be validated yet.* appears instead; wait, then click **Verify** again.</Result>

6. *(Optional: a domain for the other scope)* Click **Set for Convention** (or **Set for Organization**).

   <Result>The **Configure a Domain** dialog opens with the other **Scope** fixed. Continue from step 3.</Result>

7. *(Optional: to go back to `concat.app`)* Click **Clear**.

   <Result>A **Clear Email Domain** dialog asks *Are you sure you want to clear the email domain for this Organization?* (or *Convention*).</Result>

8. Click **Confirm**.

   <Result>The card says *The domain is currently set to the default,* `concat.app` again, or shows the other scope's domain if it has one.</Result>

:::note[Canceling or failing]
- To abandon an unverified request, click **Cancel** next to **Verify**, then **Confirm**. *Request was successfully canceled.* appears. A new request needs new DNS records.
- *An error has occurred. Cancel this attempt and try again, or contact support.* means verification failed. Cancel and start again from step 2.
- If verification takes more than 24 hours, contact ConCat Support.
:::

## Senders for mass email

<Sidenote title="Mass email only">
*These will **NOT** affect automated emails.* Automated emails come from the contact addresses in section 3.
</Sidenote>

Staff pick a mass email's **From Address** from this list of mailbox names, shared by every convention in your organization. It starts as `bazaar`, `registration`, `events`, `hr`, `dealers`, `artshow` and `noreply`.

1. Under **Email Senders for Mass Email**, type a mailbox name (the part before the @) in **Enter a new sender...**, and click the green tick button (**Save**) next to it (Figure 2.1).

   <Result>An *Added "*name*" to the senders list.* message appears, and the name is listed.</Result>

2. *(Optional)* Click the red trash button (**Delete**) next to a name.

   <Result>A *Removed "*name*" from the senders list.* message appears, and the name is no longer listed.</Result>

<Figure
  src="/img/guides/templates/email-senders.webp"
  alt="The Email Senders for Mass Email card: an Enter a new sender box with a green tick button, and the names bazaar, registration, events, hr, dealers, artshow and noreply, each with a red trash button."
  title="Email Senders for Mass Email"
  markers={[
    { n: 1, x: 36, y: 7.1, w: 54.2, h: 10.6 },
    { n: 2, x: 91.8, y: 8.1, w: 4.9, h: 8.6 },
    { n: 3, x: 92, y: 20.5, w: 4.7, h: 8 },
  ]}
>

1. **Enter a new sender...**
2. The green tick (**Save**).
3. A name's red trash button (**Delete**).

</Figure>

The list holds up to 16 names and can't be emptied. Each name, followed by your domain, must form a valid email address. See [Mass email](../attendees/mass-email.md) for sending.

## Contact addresses

Each convention has three contact addresses. Automated emails are sent from them (see [Emails ConCat sends](./system-emails.md)), and your site and emails tell people to write to them.

<TableFigure title="Contact addresses">

| Field | Default name | Used for |
| --- | --- | --- |
| **Registration Email** | `registration` | Sends account, order, ticket and refund emails. Receives refund requests and accounts that need review. |
| **HR Email** | `hr` | Sends volunteer and data-export emails. Volunteers are told to contact it. |
| **Dealers Email** | `dealers` | Sends dealer assistant emails; the contact for dealer applications. <small>Also editable in **Dealers › Dealer Settings**.</small> |

</TableFigure>

1. Click the **Contact** tab.

   <Result>The **Dealers Email**, **HR Email** and **Registration Email** fields are shown.</Result>

2. Enter the mailbox name (the part before the @) for each, then click **Save**.

   <Result>The fields keep your names after the page refreshes.</Result>

Names can use letters, digits, dots and dashes. To go back to a default, type it, such as `hr`, rather than emptying the field. Hotel emails come from `hotel`, which can't be renamed.

:::caution[Watch out]
- ConCat only sends email. Make sure each contact address at your own domain is a mailbox someone reads: attendees write to it, and replies go to it.
- Until you set a sending domain, email comes from `concat.app` addresses, but your site shows contact addresses at your site's own address. Set your sending domain (section 1) before you open, so they match.
:::
