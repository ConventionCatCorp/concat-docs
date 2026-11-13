---
sidebar_position: 2
hide_table_of_contents: true
textbook: true
---

# Convention setup

Set your event's identity, venue and dates, policies, payments and email. 

:::info[In this guide]
Event info, venue and dates, terms and policies, payment and email.
:::

## Event info

<Sidenote title="Who can do this">
This page needs the permission to update system settings. Your trial's administrator account has it.
</Sidenote>

1. Go to **Housekeeping › System › Settings**.

   <Result>The **System Settings** page opens on the **Convention** tab.</Result>

2. Under **Logo**, choose your logo image and click **Save Logo**.

   <Result>An **Upload success** message appears, and the logo shows on your homepage.</Result>

3. Under **Event info**, fill in the fields in Table 1.1 and click **Save** below them.

   <Result>An **Event info saved** message appears.</Result>

<TableFigure title="Event info fields">

| Field | What it holds |
| --- | --- |
| **Convention Long Type** | Your event's full name, at least 6 characters. <small>Shown in the sidebar on the registration link.</small> |
| **Convention Short Name** | A short name, at most 6 characters. |
| **Notification Prefix** | Starts the subject of every email your event sends. |
| **Convention Legal Name** | The legal name of the organization running the event. |
| **Convention Legal Type** | Its legal entity type, such as *501(c)7 Not-For-Profit, Ltd., LLP, PLC*. <small>Add a registered charity number if you have one.</small> |
| **Marketing URL** | Your event's website, shown at the bottom of emails. |

</TableFigure>

## Venue and dates

1. On the **Convention** tab, under **Venue & dates**, fill in **Venue Name** (usually the hotel), **Convention Timezone**, **Convention Start Date** and **Convention End Date**, then click **Save** below them.

   <Result>A **Venue & dates saved** message appears.</Result>

2. Click the **Conventions** tab.

   <Result>A table lists your organization's conventions. Your convention's row shows the new **Dates** and, under **Domain**, your instance's address.</Result>

<Figure
  src="/img/guides/system/conventions-table.webp"
  alt="The Conventions tab: a table with Long Name, Short Name, Dates and Domain columns, a green add button in the header row, and a View button on the convention's row."
  title="The Conventions tab"
  markers={[
    { n: 1, x: 79.6, y: 8, w: 5.4, h: 32.5 },
    { n: 2, x: 0.7, y: 44.7, w: 98.6, h: 49.4 },
  ]}
>

1. The add button, which starts a new convention (see the note below).
2. Your convention's row, with its **Dates** and **Domain**.

</Figure>

:::note[One organization, several conventions]
Your organization can run several conventions, each at its own address. To start next year's event, click the add button (<MaterialIcon name="add" />) above this table and choose **Next Year**, which copies most settings from this one.
:::

## Terms and policies

<Sidenote title="Organization-wide or convention-specific">
An organization-wide policy applies to every convention in your organization. A convention-specific policy replaces it for this convention only.
</Sidenote>

Attendees agree to your policies when they create an account and when they register. Before opening, you need **Privacy terms** and **Convention Policy / Terms & Conditions**; Table 3.1 lists the rest.

1. Click the **Terms** tab.

   <Result>**Privacy terms** and **Convention Policy / Terms & Conditions** each have an **Organization-wide Policy** box holding the placeholder *To update this value: Go to Housekeeping > Settings > Terms.*</Result>

2. Under **Privacy terms**, replace the placeholder with your privacy policy and click **Save** below it.

   <Result>An **Organization-wide policy saved** message appears.</Result>

3. Do the same under **Convention Policy / Terms & Conditions**, with your terms and conditions or code of conduct.

   <Result>A second **Organization-wide policy saved** message appears.</Result>

4. In a private browser window, open your homepage and click **Privacy Policy** at the bottom.

   <Result>Your saved privacy policy is shown.</Result>

:::caution[Watch out]
Most policies start with placeholder or sample text, which attendees see until you replace it. Read every policy in Table 3.1 before opening registration. For wording that applies to this convention only, click **Create Convention-specific Policy** under the policy.
:::

<TableFigure title="The other policies">

| Policy | Where attendees see it |
| --- | --- |
| **Registration Terms** | On the registration page, while registering for a badge. |
| **Login Page Announcement** | On the login page, below your convention's name and logo. |
| **Child Registration Error** | When they're below the child age threshold, or under 13, whichever is lower. |
| **Minor Registration Warning** | When they're below the minor age threshold. |
| **Child Badge Terms** | When a parent registers child badges under their account. |
| **Parent agreement for child registration** | When a parent confirms they're giving their child's information voluntarily. |
| **Hotel Reservation Policy**, **Hotel Reservation Additional Info**, **Hotel Closed Message** | On the hotel booking pages, if you use them. |
| **Opt Out from Stripe Identity** | When they opt out of identity verification, if you use it. |

</TableFigure>

The child and minor age thresholds are set in [Registration setup](./registration-setup.md), section 6.

## Payment

<Sidenote title="One account for the organization">
ConCat connects your organization's own Stripe account through Stripe Connect. One connection covers every convention in your organization.
</Sidenote>

ConCat takes card payments through Stripe. 

1. Click the **Payment Gateways** tab.

   <Result>The **Stripe Connect** section says *You do not have Stripe Connect configured at the moment.* and shows **Connect to Stripe**.</Result>

2. Click **Connect to Stripe**.

   <Result>A dialog titled **Enable Stripe Connect** opens.</Result>

3. Click **Yes, I want to enable Stripe Connect.**

   <Result>A **Stripe Connect** dialog shows **Your country code is:** and **Your currency is:**.</Result>

4. If the country or currency is wrong, click **Cancel** and contact ConCat Support. Otherwise, click **Continue to Stripe** and complete Stripe's sign-up for your organization.

   <Result>Stripe returns you to **Payment Gateways**, which shows **Status: Connected** and *This account is configured for all conventions.*</Result>

5. If the status shows **More information required**, click **Open Stripe Connect**, give Stripe what it asks for, then come back and click **Refresh**.

   <Result>The status changes to **Status: Connected**.</Result>

:::caution[Watch out]
- **Country and currency:** ConCat sets them for your organization, and a trial starts in US dollars. Ask ConCat Support to change them *before* you connect Stripe.
- **Live payments:** Housekeeping has no test-mode switch, so once Stripe is connected, payments are real. To test without charging anyone, ask ConCat Support.
:::

Until Stripe is connected, attendees paying by card see **Credit card payment is not configured** instead of the card form. Staff can still record cash and card payments by hand in the Cashier UI.

## Email

<Sidenote title="Nothing to install">
ConCat sends all email for you, so there's no mail server to set up. By default, mail comes from addresses at `concat.app`.
</Sidenote>

Three things shape your email: the domain it's sent from, the mailbox names it's sent as, and the templates' wording.

1. Click the **Email Settings** tab.

   <Result>Three sections are shown: **Email Sending Domain** (*The domain is currently set to the default,* concat.app), **Email Senders for Mass Email** and **Email Templates**.</Result>

2. *(Optional: your own domain)* Click **Configure a Domain**, enter your **Domain**, choose the **Scope** (**Organization** for every convention, **Convention** for this one only), and click **Submit**.

   <Result>A table of CNAME records appears, with **Verify**, **Download CSV** and **View Documentation** buttons.</Result>

3. Add each record at your domain's DNS provider, as [CNAME Records](../technical/cname.md) explains, then click **Verify**.

   <Result>A **Your domain was successfully validated.** message appears. If DNS hasn't updated yet, wait and click **Verify** again.</Result>

4. On the **Contact** tab, in **Dealers Email**, **HR Email** and **Registration Email**, enter the mailbox name (the part before the @) each kind of email comes from, then click **Save**.

   <Result>The names you entered are still there after the page refreshes.</Result>

5. Back on **Email Settings**, under **Email Senders for Mass Email**, type a mailbox name in **Enter a new sender...** and click the green tick button.

   <Result>An **Added "*name*" to the senders list.** message appears, and the name is listed.</Result>

6. Under **Email Templates**, look through the emails ConCat sends.

   <Result>Each template has a **Modify** button that opens it for editing.</Result>

:::note[Senders and templates]
Mass-email senders are offered only when staff send a mass email. The **Contact** addresses send registration, volunteer and dealer emails. Templates can be changed for one convention or the whole organization.
:::

:::tip[In more detail]
- [Convention settings](../system/settings.md): every field on the **Convention** tab, plus the **Links** and **Platform Info** tabs.
- [Conventions and next year](../system/conventions.md)
- [Terms and policies](../system/terms.md)
- [Payment gateways](../system/payments.md)
- [Sending domain, senders and contact addresses](../templates/email-settings.md) and [Email Template Overrides](../templates/templates.md)
:::

Next: [Registration setup](./registration-setup.md), creating the badges attendees buy.
