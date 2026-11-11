---
sidebar_position: 2
hide_table_of_contents: true
textbook: true
---

# Convention setup

This guide sets up your event's identity, venue and dates, the policies attendees agree to, how you take payments, and the email ConCat sends for you. Everything here is on one page in Housekeeping, **System › Settings**.

:::info[In this guide]
Event info (section 1), venue and dates (section 2), terms and policies (section 3), payment (section 4) and email (section 5).
:::

## Event info

<Sidenote title="Who can do this">
System settings need the permission to update system settings. The administrator account from your trial has it.
</Sidenote>

1. Go to **Housekeeping › System › Settings**.

   <Result>The **System Settings** page opens on the **Convention** tab. The other tabs are **Terms**, **Links**, **Contact**, **Platform Info**, **Conventions**, **Payment Gateways**, **Email Settings** and **Note Categories**. The address ends in `/housekeeping/system/settings`.</Result>

2. Under **Logo**, choose your logo image, then click **Save Logo**.

   <Result>An **Upload success** message appears. The logo is shown on your homepage.</Result>

3. Under **Event info**, fill in the fields in Table 1.1, then click **Save** below them.

   <Result>An **Event info saved** message appears.</Result>

<TableFigure title="Event info fields">

| Field | What it holds |
| --- | --- |
| **Convention Long Type** | Your event's full name, at least 6 characters. <small>Shown in the sidebar on the registration link. Despite its label, this is the name, not a type.</small> |
| **Convention Short Name** | A short name of at most 6 characters. |
| **Notification Prefix** | The text that starts the subject of every email your event sends. |
| **Convention Legal Name** | The legal name of the organization running the event. |
| **Convention Legal Type** | Its legal entity type, such as *501(c)7 Not-For-Profit, Ltd., LLP, PLC*. <small>Include a registered charity number if you have one.</small> |
| **Marketing URL** | Your event's website, shown at the bottom of emails. |

</TableFigure>

## Venue and dates

1. On the same **Convention** tab, under **Venue & dates**, fill in **Venue Name** (usually the name of the hotel), **Convention Timezone**, **Convention Start Date** and **Convention End Date**. Then click **Save** below them.

   <Result>A **Venue & dates saved** message appears.</Result>

2. Click the **Conventions** tab.

   <Result>A table lists your organization's conventions, with columns **Long Name**, **Short Name**, **Dates** and **Domain**. Your convention's row shows the new dates and your instance's address.</Result>

:::note[One organization, several conventions]
Your organization can run more than one convention, each at its own address. The **Conventions** tab is also where you start next year's event, with **Next Year**, which copies most settings from this one.
:::

## Terms and policies

<Sidenote title="Organization-wide or convention-specific">
An organization-wide policy applies to every convention in your organization. A convention-specific policy replaces it for this convention only.
</Sidenote>

Attendees agree to your policies when they create an account and when they register. The two you need before opening are **Privacy terms** and **Convention Policy / Terms & Conditions**. Table 3.1 lists the rest.

1. Click the **Terms** tab.

   <Result>Each policy is listed with a short description. **Privacy terms** and **Convention Policy / Terms & Conditions** already have an **Organization-wide Policy** box, holding the placeholder *To update this value: Go to Housekeeping > Settings > Terms.*</Result>

2. Under **Privacy terms**, replace the placeholder in the **Organization-wide Policy** box with your privacy policy, then click **Save** below it.

   <Result>An **Organization-wide policy saved** message appears.</Result>

3. Do the same for **Convention Policy / Terms & Conditions**: your terms and conditions or code of conduct.

   <Result>A second **Organization-wide policy saved** message appears.</Result>

4. Open your instance's homepage in a private browser window and click **Privacy Policy** at the bottom of the page.

   <Result>The page shows the privacy policy you saved.</Result>

:::caution[Watch out]
A new organization starts with placeholder or sample text in most policies, and attendees see it until you replace it. Read every policy in Table 3.1 before opening registration. To use different wording for this convention only, click **Create Convention-specific Policy** under the policy; it then replaces the organization-wide text here.
:::

<TableFigure title="The other policies">

| Policy | Where attendees see it |
| --- | --- |
| **Registration Terms** | On the registration page, while they register for their badge. |
| **Login Page Announcement** | On the login page, below your convention's name and logo. |
| **Child Registration Error** | When they're below the child age threshold, or under 13, whichever is lower. |
| **Minor Registration Warning** | When they're below the minor age threshold. |
| **Child Badge Terms** | When a parent registers child badges under their account. |
| **Parent agreement for child registration** | When a parent confirms they're providing their child's information voluntarily. |
| **Hotel Reservation Policy**, **Hotel Reservation Additional Info**, **Hotel Closed Message** | On the hotel booking pages, if your event uses them. |
| **Opt Out from Stripe Identity** | When they opt out of identity verification, if your event uses it. |

</TableFigure>

The age thresholds behind the child and minor policies are set in [Registration setup](./registration-setup.md), section 6.

## Payment

<Sidenote title="One account for the organization">
ConCat connects your organization's own Stripe account through Stripe Connect. The connection covers every convention in your organization.
</Sidenote>

ConCat takes card payments through Stripe. Brazilian organizations can add PagSeguro alongside it (step 6).

1. Click the **Payment Gateways** tab.

   <Result>The **Stripe Connect** section says *You do not have Stripe Connect configured at the moment.* and shows **Connect to Stripe**. Below it is **PagSeguro Checkout**.</Result>

2. Click **Connect to Stripe**.

   <Result>A dialog titled **Enable Stripe Connect** opens, with **Yes, I want to enable Stripe Connect.** and **Cancel**.</Result>

3. Click **Yes, I want to enable Stripe Connect.**

   <Result>A **Stripe Connect** dialog shows **Your country code is:** and **Your currency is:**, with a **Continue to Stripe** button.</Result>

4. Check the country and currency. If either is wrong, click **Cancel** and contact ConCat Support before going on. Otherwise, click **Continue to Stripe** and complete Stripe's sign-up with your organization's details.

   <Result>Stripe returns you to **Payment Gateways**, which shows **Status: Connected**, *You are connected to Stripe Connect with ID …* and *This account is configured for all conventions.*</Result>

5. If the status shows **More information required**, click **Open Stripe Connect**, give Stripe the details it asks for, then come back and click **Refresh**.

   <Result>The status changes to **Status: Connected**.</Result>

6. *(Optional, Brazil)* Under **PagSeguro Checkout** › **Add Token**, enter the **Hostname** of the PagSeguro API and the 100-character **Token** PagSeguro gave you, then click **Save**.

   <Result>The section shows the **Base** hostname and **Token** you entered, with a **Remove Credentials** button.</Result>

:::caution[Watch out]
- **Country and currency:** ConCat sets them for your organization, and a trial starts in US dollars. Ask ConCat Support to change them *before* you connect Stripe.
- **Live payments:** Housekeeping has no switch for a test mode. Once Stripe is connected, payments are real. Ask ConCat Support if you want to try payments without charging anyone.
:::

Until Stripe is connected, attendees who try to pay by card see **Credit card payment is not configured** instead of the card form. Staff can still record cash and card payments by hand at the Cashier UI.

## Email

<Sidenote title="Nothing to install">
ConCat sends all email for you, so there's no mail server to set up. Out of the box, mail comes from addresses at `concat.app`.
</Sidenote>

Three things decide how your email looks to attendees: the domain it's sent from, the mailbox names it's sent as, and the templates' wording.

1. Click the **Email Settings** tab.

   <Result>Three sections are shown: **Email Sending Domain**, which starts *The domain is currently set to the default,* concat.app; **Email Senders for Mass Email**; and **Email Templates**.</Result>

2. *(Optional: your own domain)* Click **Configure a Domain**. Enter your **Domain**, choose the **Scope** (**Organization** for every convention, or **Convention** for this one only), then click **Submit**.

   <Result>A table of CNAME records appears, with **Name** and **Value** columns, and the buttons **Verify**, **Download CSV** and **View Documentation**.</Result>

3. Add each record at your domain's DNS provider, as [CNAME Records](../technical/cname.md) explains. Then click **Verify**.

   <Result>A **Your domain was successfully validated.** message appears. If DNS hasn't updated yet, a message says the domain was not able to be validated yet. Wait, then click **Verify** again.</Result>

4. Click the **Contact** tab. In **Dealers Email**, **HR Email** and **Registration Email**, enter the mailbox name (the part before the @) that each kind of email should come from. Then click **Save**.

   <Result>The fields keep the names you entered after the page refreshes.</Result>

5. Back on **Email Settings**, under **Email Senders for Mass Email**, type a mailbox name in **Enter a new sender...** and click the green tick button next to it.

   <Result>An **Added "*name*" to the senders list.** message appears, and the name is listed. Staff can now choose it as the sender of a mass email.</Result>

6. Under **Email Templates**, look through the list of emails ConCat sends.

   <Result>Each template has a **Modify** button, which opens it for editing.</Result>

:::note[Senders and templates]
The mass-email senders are only offered when sending a mass email. The **Contact** addresses are the senders of registration, volunteer and dealer emails. Templates can be changed for one convention or for the whole organization.
:::

:::tip[In more detail]
The full guides behind this page:

- [Convention settings](../system/settings.md): every field on the **Convention** tab, and the **Links** and **Platform Info** tabs.
- [Conventions and next year](../system/conventions.md)
- [Terms and policies](../system/terms.md)
- [Payment gateways](../system/payments.md)
- [Sending domain, senders and contact addresses](../templates/email-settings.md) and [Email Template Overrides](../templates/templates.md)
:::

The next guide, [Registration setup](./registration-setup.md), creates the badges attendees buy.
