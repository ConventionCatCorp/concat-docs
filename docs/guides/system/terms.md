---
sidebar_position: 3
hide_table_of_contents: true
textbook: true
---

# Terms and policies

Policies are the texts attendees read and agree to: your privacy policy, your terms and conditions, and the messages shown at registration, at login and on the hotel pages. This guide explains how organization-wide and convention-specific policies work, how to edit, override and delete them, and where attendees see them.

:::info[In this guide]
How policies work (section 1), editing a policy (section 2), overriding a policy for one convention (section 3), deleting a policy (section 4), and what attendees see (section 5).
:::

## How policies work

<Sidenote title="Who can do this">
The **Terms** tab needs the **system:settings:update** permission. The default **admin** role has it.
</Sidenote>

Each policy can have two versions:

- An **organization-wide policy** applies to every convention in your organization.
- A **convention-specific policy** applies only to the convention you're signed in to, and replaces the organization-wide version there.

When both exist, attendees of this convention see the convention-specific one. Policies are written in Markdown, so you can use headings, lists, bold text and links.

A new organization starts with organization-wide versions of most policies. **Privacy terms** and **Convention Policy / Terms & Conditions** contain the placeholder *To update this value: Go to Housekeeping > Settings > Terms.* Others hold sample text you should read and adapt. **Registration Terms** and **Hotel Reservation Additional Info** start empty, and **Login Page Announcement** and **Hotel Closed Message** don't exist until you create them.

<TableFigure title="The policies on the Terms tab">

| Policy | Where attendees see it |
| --- | --- |
| **Privacy terms** | When creating an account, and on the **Privacy Policy** page. |
| **Convention Policy / Terms & Conditions** | When creating an account, and on the **Terms & Conditions** page. |
| **Child Registration Error** | When they're below the child age threshold, or under 13, whichever is lower. |
| **Minor Registration Warning** | When they're below the minor age threshold. |
| **Child Badge Terms** | When a parent registers child badges under their account. |
| **Registration Terms** | On the registration page, while registering for their badge. |
| **Login Page Announcement** | On the login page, below your convention's name and logo. |
| **Hotel Reservation Policy** | On the hotel reservation dashboard, wave entry page and reservation page. |
| **Hotel Reservation Additional Info** | At the top of the *My Reservation* page, for attendees with a reservation. |
| **Hotel Closed Message** | Under the "hotel reservations closed" message. <small>Leave it empty to show nothing.</small> |
| **Parent agreement for child registration** | When a parent or guardian confirms they're providing their child's information voluntarily. |
| **Opt Out from Stripe Identity** | When they choose not to verify their identity. <small>Listed only if your event uses identity verification.</small> |

</TableFigure>

The age thresholds behind the child and minor policies are set in [Registration setup](../quickstart/registration-setup.md), section 6. The hotel policies matter only if ConCat has turned hotels on for your event. Dealer and volunteer terms aren't on this tab: they're on the **Terms** tabs of **Dealer Settings** and **Volunteer Settings**.

## Edit a policy

1. Go to **Housekeeping › System › Settings** and click the **Terms** tab.

   <Result>Each policy is listed with its description. A policy that exists shows a text box headed **Organization-wide Policy** or **Convention-specific Policy**, with a **Save** button.</Result>

2. In the policy's text box, replace the text with your own, then click **Save** under it.

   <Result>An **Organization-wide policy saved** message appears (or **Convention-specific policy saved**).</Result>

3. If a policy has no version yet, click **Create Organization-wide Policy** under **Create Policies**, then repeat step 2 for it.

   <Result>A text box headed **Organization-wide Policy** appears, containing *TBC*. After you save, your text replaces it.</Result>

:::caution[Watch out]
A policy takes effect as soon as it exists. A new one starts with the placeholder *TBC*, and a new organization's placeholders say *Go to Housekeeping > Settings > Terms*. Replace and save them before attendees can see them.
:::

## Override a policy for one convention

Override a policy when one convention needs different wording, such as a code of conduct that changed this year. The organization-wide version stays in place for your other conventions.

1. Under the policy, click **Create Convention-specific Policy**.

   <Result>A second text box headed **Convention-specific Policy** appears, containing *TBC*. The **Organization-wide Policy** box is replaced by a yellow warning: *This policy is overridden by a convention-specific policy.*</Result>

2. Replace *TBC* with this convention's text, then click **Save** under it.

   <Result>A **Convention-specific policy saved** message appears.</Result>

3. *(Optional)* To change the organization-wide version anyway, click **I understand, but I want to edit this policy anyway.** in the yellow warning.

   <Result>The **Organization-wide Policy** text box appears again. Changes to it apply to your other conventions, not this one.</Result>

## Delete a policy

Deleting a convention-specific policy brings back the organization-wide version for this convention. Organization-wide versions can be deleted only for **Registration Terms** and **Login Page Announcement**; the others have no **Delete** button.

:::caution[Watch out]
**Delete** doesn't ask for confirmation, and a deleted text can't be recovered. Copy it somewhere first if you might need it again.
:::

1. Under the **Convention-specific Policy** box, click **Delete**.

   <Result>A message says *Convention-specific policy* followed by the policy's name and *deleted successfully!* The convention-specific box is gone, the **Organization-wide Policy** text box is editable again, and **Create Convention-specific Policy** is back under **Create Policies**.</Result>

## What attendees see

<Sidenote title="Another convention's policy">
Add `?conventionId=` and a convention's ID to the address of the Terms & Conditions or Privacy Policy page to show that convention's version.
</Sidenote>

The **Terms & Conditions** and **Privacy Policy** links are at the bottom right of every page. Attendees also see these two policies when they create an account. The other policies appear at the points listed in Table 1.1.

1. Open your instance's homepage in a private browser window, then click **Terms & Conditions** at the bottom of the page.

   <Result>A page headed **Convention Terms and Conditions** shows the **Convention Policy / Terms & Conditions** text that applies to this convention.</Result>

2. Click **Privacy Policy** at the bottom of the page.

   <Result>A page headed **Privacy Policy** shows your **Privacy terms** text.</Result>

3. *(If you created one)* Sign out and open the login page.

   <Result>Your **Login Page Announcement** appears below the card with your convention's name, dates and venue.</Result>
