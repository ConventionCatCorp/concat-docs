---
sidebar_position: 3
hide_table_of_contents: true
textbook: true
---

# Terms and policies

Write the policies attendees read and agree to, from your privacy policy to the messages at registration, login and on the hotel pages, for your whole organization or one convention.

:::info[In this guide]
How policies work, editing a policy, overriding one for a convention, deleting a policy, what attendees see.
:::

## How policies work

<Sidenote title="Who can do this">
The **Terms** tab needs **system:settings:update**, which the default **admin** role has.
</Sidenote>

Each policy can have two versions:

- An **organization-wide policy** applies to every convention.
- A **convention-specific policy** applies only to the convention you're signed in to, replacing the organization-wide version there.

Policies are written in Markdown (headings, lists, bold text, links).

A new organization starts with organization-wide versions of most policies: placeholders in **Privacy terms** and **Convention Policy / Terms & Conditions**, sample text to adapt in others. **Registration Terms** and **Hotel Reservation Additional Info** start empty; **Login Page Announcement** and **Hotel Closed Message** don't exist until you create them.

<TableFigure title="The policies on the Terms tab">

| Policy | Where attendees see it |
| --- | --- |
| **Privacy terms** | When creating an account, and on the **Privacy Policy** page. |
| **Convention Policy / Terms & Conditions** | When creating an account, and on the **Terms & Conditions** page. |
| **Child Registration Error** | Below the child age threshold, or under 13, whichever is lower. |
| **Minor Registration Warning** | Below the minor age threshold. |
| **Child Badge Terms** | When a parent registers child badges under their account. |
| **Registration Terms** | On the registration page, while registering. |
| **Login Page Announcement** | On the login page, below your convention's name and logo. |
| **Hotel Reservation Policy** | On the hotel reservation dashboard, wave entry page and reservation page. |
| **Hotel Reservation Additional Info** | At the top of the *My Reservation* page. |
| **Hotel Closed Message** | Under the "hotel reservations closed" message. <small>Leave it empty to show nothing.</small> |
| **Parent agreement for child registration** | When a parent or guardian confirms they're providing their child's information voluntarily. |
| **Opt Out from Stripe Identity** | When they choose not to verify their identity. <small>Listed only if your event uses identity verification.</small> |

</TableFigure>

Child and minor age thresholds are set in [Registration setup](../quickstart/registration-setup.md), section 6. Hotel policies matter only if ConCat has turned hotels on. Dealer and volunteer terms are on the **Terms** tabs of **Dealer Settings** and **Volunteer Settings**.

## Edit a policy

1. Go to **Housekeeping › System › Settings** and click the **Terms** tab.

   <Result>Each policy is listed. One that exists has a text box headed **Organization-wide Policy** or **Convention-specific Policy**.</Result>

2. Replace the text in the policy's box with your own, then click **Save** under it.

   <Result>An **Organization-wide policy saved** (or **Convention-specific policy saved**) message appears.</Result>

3. For a policy with no version yet, click **Create Organization-wide Policy** under **Create Policies**, then repeat step 2.

   <Result>An **Organization-wide Policy** box appears containing *TBC*.</Result>

:::caution[Watch out]
A policy takes effect as soon as it exists, placeholder included (*TBC*, or *Go to Housekeeping > Settings > Terms* in a new organization). Replace and save it before attendees see it.
:::

## Override a policy for one convention

Override a policy when one convention needs different wording, such as this year's code of conduct. Your other conventions keep the organization-wide version.

1. Under the policy, click **Create Convention-specific Policy**.

   <Result>A **Convention-specific Policy** box appears containing *TBC*. The **Organization-wide Policy** box is replaced by a yellow warning: *This policy is overridden by a convention-specific policy.*</Result>

2. Replace *TBC* with this convention's text, then click **Save** under it.

   <Result>A **Convention-specific policy saved** message appears.</Result>

3. *(Optional)* To edit the organization-wide version anyway, click **I understand, but I want to edit this policy anyway.**

   <Result>The **Organization-wide Policy** box returns. Changes to it apply to your other conventions, not this one.</Result>

## Delete a policy

Deleting a convention-specific policy brings back the organization-wide version. Only **Registration Terms** and **Login Page Announcement** can have their organization-wide version deleted.

:::caution[Watch out]
**Delete** doesn't ask for confirmation, and the text can't be recovered. Copy it first if you might need it.
:::

1. Under the **Convention-specific Policy** box, click **Delete**.

   <Result>A *Convention-specific policy* … *deleted successfully!* message appears, and the **Organization-wide Policy** box is editable again.</Result>

## What attendees see

<Sidenote title="Another convention's policy">
Add `?conventionId=` and a convention's ID to the Terms & Conditions or Privacy Policy address to show that convention's version.
</Sidenote>

**Terms & Conditions** and **Privacy Policy** links are at the bottom right of every page; the other policies appear where Table 1.1 says.

1. Open your homepage in a private browser window and click **Terms & Conditions** at the bottom.

   <Result>**Convention Terms and Conditions** shows the **Convention Policy / Terms & Conditions** text for this convention.</Result>

2. Click **Privacy Policy** at the bottom.

   <Result>**Privacy Policy** shows your **Privacy terms** text.</Result>

3. *(If you created one)* Sign out and open the login page.

   <Result>Your **Login Page Announcement** appears below the card with your convention's name, dates and venue.</Result>
