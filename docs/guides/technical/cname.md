---
sidebar_position: 1
hide_table_of_contents: true
textbook: true
---

# CNAME Records

Add the `CNAME` records ConCat needs to send email from your domain or serve a convention at your own address. No DNS experience needed.

:::info[In this guide]
CNAME records and your DNS panel (section 1), a custom email domain (section 2), a convention on your own domain (section 3), when verification doesn't pass (section 4).
:::

## CNAME records and your DNS panel

<Sidenote title="Who has access">
Whoever bought the domain usually holds the DNS panel. If that isn't you, ask them to add the records or give you access.
</Sidenote>

A `CNAME` record publishes a name on your domain that points to another name. ConCat, or a provider it uses, looks it up to confirm you own the domain.

You add records in your domain's DNS management panel, usually at the registrar where you bought it, such as GoDaddy, NameCheap or Porkbun.

:::note[Custom nameservers]
If your domain's nameservers were changed, for example so Cloudflare manages DNS, use *that* service's DNS panel. If you don't know what nameservers are, they probably weren't changed.
:::

## Custom email domain

<Sidenote title="Who can do this">
The **Email Settings** tab needs the permission to manage email templates; configuring a domain needs the permission to update system settings.
</Sidenote>

ConCat sends email from `concat.app` by default. To use your domain, request it in ConCat, add the three records it gives you, and verify them.

1. Go to **Housekeeping › System › Settings** and click the **Email Settings** tab.

   <Result>**Email Sending Domain** says *The domain is currently set to the default,* `concat.app`, with a **Configure a Domain** button.</Result>

2. Click **Configure a Domain**.

   <Result>A **Configure a Domain** dialog opens with a **Domain** field and a **Scope** choice of **Organization** or **Convention**.</Result>

3. Enter your **Domain**, choose the **Scope** (**Organization** for every convention, **Convention** for this one only), then click **Submit**.

   <Result>A box says *Please add the following CNAME records to your domain.* above three rows of **Name** and **Value**, each with a copy button, and the **Download CSV**, **Cancel** and **Verify** buttons.</Result>

4. In your DNS panel, add a `CNAME` record for each row, pasting the exact **Name** and **Value**.

   <Result>Your DNS panel lists three new `CNAME` records with names ending in `._domainkey` and values ending in `.dkim.amazonses.com`.</Result>

5. Wait about 5 minutes for your DNS provider to publish the records, then click **Verify** in ConCat.

   <Result>A **Your domain was successfully validated.** message appears, and the section says *This organization's email domain is:* (or *convention's*) and your domain. If you get a warning instead, see section 4.</Result>

:::tip[Name field and your domain]
The **Name** copy button copies only the part before your domain, such as `abc123._domainkey`; most DNS panels add the domain for you. If yours wants the full name, add your domain after it, as shown beside the field, or use **Download CSV**, which has the full names.
:::

## A convention on your own domain

A new convention created on the **Conventions** tab gets its own address under the previous convention's domain, so the old one stays reachable. ConCat sets up `concat.app` addresses; on your own domain, the new address works only once you add a `CNAME` record for it.

Add it at the new convention's full address, even if your main domain has one: if last year's convention moved to `2025.example.com`, add a record at `2025.example.com`.

1. Go to **Housekeeping › System › Settings** and click the **Conventions** tab.

   <Result>A convention on your own domain shows a badge after its domain: **pending** until the address works, **active** once it does.</Result>

2. In your DNS panel, add a `CNAME` record whose name is the new convention's address. Ask ConCat Support for the value to point it to.

   <Result>Your DNS panel lists the new `CNAME` record at the convention's address.</Result>

3. Later, reload the **Conventions** tab.

   <Result>The badge reads **active**. While it reads **pending**, hover over it to see why.</Result>

## When verification doesn't pass

A warning after **Verify** is normal: DNS providers can be slow, so try again in 30 to 60 minutes. Meanwhile, check the records are on the right domain and match ConCat's values *exactly*. After 24 hours, contact ConCat Support.

<TableFigure title="Messages after Verify">

| Message | What it means |
| --- | --- |
| **Your domain was successfully validated.** | The records are correct. ConCat sends from your domain. |
| *Your domain was not able to be validated yet. …* | The records aren't visible yet, or don't match. Check them and retry later. |
| *An error has occurred. Cancel this attempt and try again, or contact support.* | The request failed. Click **Cancel**, then start again from section 2, step 2. |
| *The domain requested was not found, or does not have a valid attempt to verify.* | There's no pending request for this domain. Start again from section 2, step 2. |

</TableFigure>

:::caution[Watch out]
**Cancel** removes the pending request. If you request the domain again, ConCat gives you new records, and you have to replace the ones you added.
:::
