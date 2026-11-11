---
sidebar_position: 1
hide_table_of_contents: true
textbook: true
---

# CNAME Records

ConCat can send email from your organization's domain and serve a convention at an address on your own domain. Both need `CNAME` records added to your domain. This guide explains how, for readers who haven't managed DNS records before.

:::info[In this guide]
What a CNAME record is and where you add it (section 1), the records for a custom email domain (section 2), the record for a convention on your own domain (section 3), and what to do when verification doesn't pass (section 4).
:::

## CNAME records and your DNS panel

<Sidenote title="Who has access">
The DNS panel is usually held by whoever bought the domain. If that isn't you, ask them to add the records or to give you access.
</Sidenote>

A `CNAME` record publishes a name on your domain that points to another name. ConCat, or a provider it uses, looks up these records to confirm that you own the domain.

You add records in your domain's DNS management panel. This is usually at the registrar where you bought the domain, such as GoDaddy, NameCheap or Porkbun. You need access to this panel to go on.

:::note[Custom nameservers]
If your domain's nameservers were changed, for example to let Cloudflare manage DNS, use *that* service's DNS panel instead. If you don't know what nameservers are, they probably weren't changed.
:::

## Custom email domain

<Sidenote title="Who can do this">
The **Email Settings** tab needs the permission to manage email templates. Configuring a domain needs the permission to update system settings.
</Sidenote>

Out of the box, ConCat sends email from `concat.app`. To send from your own domain, you request it in ConCat, add the three records ConCat gives you, then verify them.

1. Go to **Housekeeping › System › Settings** and click the **Email Settings** tab.

   <Result>The **Email Sending Domain** section says *The domain is currently set to the default,* `concat.app`, with a **Configure a Domain** button.</Result>

2. Click **Configure a Domain**.

   <Result>A **Configure a Domain** dialog opens, with a **Domain** field (placeholder *example.com*) and a **Scope** choice of **Organization** or **Convention**.</Result>

3. Enter your **Domain**, choose the **Scope** (**Organization** for every convention, **Convention** for this one only), then click **Submit**.

   <Result>An info box says *There is a pending domain validation request for this organization.* (or *convention*) and *Please add the following CNAME records to your domain.* Below it are three rows, each with a **Name** and a **Value** and a copy button beside each, then the buttons **View Documentation**, **Download CSV**, **Cancel** and **Verify**.</Result>

4. In your DNS panel, add one `CNAME` record for each row. Use the copy buttons to get the exact **Name** and **Value**, and paste them into the matching fields of the new record.

   <Result>Your DNS panel lists three new `CNAME` records whose names end in `._domainkey` and whose values end in `.dkim.amazonses.com`.</Result>

5. Wait about 5 minutes for your DNS provider to publish the records, then click **Verify** in ConCat.

   <Result>A **Your domain was successfully validated.** message appears, and the section now says *This organization's email domain is:* (or *convention's*) followed by your domain. If the records aren't visible yet, a warning says *Your domain was not able to be validated yet.* See section 4.</Result>

:::tip[Name field and your domain]
The copy button beside **Name** copies only the part before your domain, such as `abc123._domainkey`. Most DNS panels add your domain to the name for you. If yours wants the full name, add your domain after it, as shown beside the field. **Download CSV** gives the three records with their full names.
:::

## A convention on your own domain

When you create a new convention from the **Conventions** tab, it gets its own address under the same domain as the previous convention, so the old convention stays reachable. If that domain is a `concat.app` address, ConCat sets everything up for you. If it is your own domain, the new address doesn't work until you add a `CNAME` record for it.

Add the record at the new convention's full address, even if there is already a record for your main domain. For example, if last year's convention moved to `2025.example.com`, you add a record at `2025.example.com`, even though `example.com` already has one.

1. Go to **Housekeeping › System › Settings** and click the **Conventions** tab.

   <Result>A table lists your conventions with the columns **Long Name**, **Short Name**, **Dates** and **Domain**. A convention on your own domain shows a status badge after its domain: **pending** until the address works, **active** once it does.</Result>

2. In your DNS panel, add a `CNAME` record whose name is the new convention's address. Ask ConCat Support for the value to point it to.

   <Result>Your DNS panel lists the new `CNAME` record at the convention's address.</Result>

3. Later, reload the **Conventions** tab.

   <Result>The badge after the convention's domain reads **active**. While it reads **pending**, hold the pointer over the badge to see why.</Result>

## When verification doesn't pass

A warning after **Verify** is normal. DNS providers can be slow to publish new records, so try **Verify** again in 30 to 60 minutes.

While you wait, check that the records are on the right domain and match the values in ConCat *exactly*. If the process takes more than 24 hours, contact ConCat Support.

<TableFigure title="Messages after Verify">

| Message | What it means |
| --- | --- |
| **Your domain was successfully validated.** | The records are correct. ConCat sends from your domain. |
| *Your domain was not able to be validated yet. …* | The records aren't visible yet, or don't match. Check them and try again later. |
| *An error has occurred. Cancel this attempt and try again, or contact support.* | The request failed. Click **Cancel**, then start again from section 2, step 2. |
| *The domain requested was not found, or does not have a valid attempt to verify.* | There is no pending request for this domain. Start again from section 2, step 2. |

</TableFigure>

:::caution[Watch out]
**Cancel** removes the pending request. You can request the domain again, but ConCat gives you new records, so you have to replace the ones you added.
:::
