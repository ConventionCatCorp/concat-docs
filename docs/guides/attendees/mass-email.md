---
sidebar_position: 4
hide_table_of_contents: true
textbook: true
---

# Mass email

Mass email sends one message to a group of people: every paid attendee, the volunteers of a department, the dealers in an area, or a list you pick by hand. The Attendees, Registration, Volunteers and Dealers modules each have a **Mass Email** page. All four use the same form; only the way you choose recipients differs.

:::info[In this guide]
How mass email works (section 1), sending one (section 2), and choosing recipients in the Attendees module (section 3), the Registration module (section 4), the Volunteers module (section 5) and the Dealers module (section 6).
:::

## How mass email works

<Sidenote title="Senders">
The **From Address** list holds the senders set under **Email Senders for Mass Email** in **Housekeeping › System › Settings › Email Settings**: see [Convention setup](../quickstart/convention-setup.md), section 5. The Volunteers module adds each department's own address.
</Sidenote>

You write the email, ConCat works out who it goes to, and you review the final list before anything is sent. A few rules apply to every mass email:

- **The body is Markdown.** ConCat wraps it in the **Mass Email** template, with a greeting and your footer. You can change that template: see [Email Template Overrides](../templates/templates.md).
- **The subject starts with your Notification Prefix,** as in every email your event sends.
- **Some people are skipped.** Anyone who hasn't confirmed their email address, or is banned from registration, doesn't get the email. A sub-account without its own address gets it at the parent's address.
- **There's no scheduling, test send or sent-mail history.** The email goes as soon as you confirm it.

Table 1.1 shows where each **Mass Email** page is and who can use it.

<TableFigure title="The four Mass Email pages">

| Menu path | Permission | Chooses recipients by |
| --- | --- | --- |
| **Housekeeping › Attendees › Mass Email** | `massemail` | **Email Target**: people you pick, a role, a gatekeeping silo, or a ready-made group (section 3) |
| **Housekeeping › Registration › Mass Email** | `massemail`, plus `registration:update` to load the recipients | Badge product and payment status (section 4) |
| **Housekeeping › Volunteers › Mass Email** | `massemail` <small>Department leads have it through their lead role.</small> | Department and assignment (section 5) |
| **Housekeeping › Dealers › Mass Email** | `vendor:massemail` | Area, table type and application status (section 6) |

</TableFigure>

The default *admin* and *hr* roles have `massemail`; *admin* and *dealersden* have `vendor:massemail`.

## Send a mass email

These steps use the Attendees module and a hand-picked list, which is also the safe way to send yourself a test copy first.

1. Go to **Housekeeping › Attendees › Mass Email**.

   <Result>The **Mass Email** page opens. On the left, a card titled **Preview — 0 Estimated Recipients** says *No preview to display.* and has a greyed-out **View List** button. On the right, the form has **From Address**, **Email Target**, **Subject** and **Body**, and a greyed-out **Prepare Email** button.</Result>

2. In **From Address**, choose a sender.

   <Result>The list shows each sender as a full email address at your email sending domain, and the one you chose is selected.</Result>

3. In **Email Target**, choose **Custom (Individual Users)**. In **Individual User(s)**, type part of a name and select the person; repeat for each recipient.

   <Result>The preview's title counts them, for example **Preview — 2 Estimated Recipients**, and **View List** becomes available.</Result>

4. Type a **Subject**, and write the **Body** in Markdown.

   <Result>The preview card shows the email as recipients will see it, with the greeting and footer around your text.</Result>

5. Click **Prepare Email**.

   <Result>The form is replaced by a **Review Email** card: *Verify the following details about the email you are about to send.* and *The email will be sent to … individual(s).* If anyone was skipped, it adds *… users were disqualified for not having their emails verified, or for being banned.* The preview's title now says **Email Recipients**.</Result>

6. Click **View List** on the preview.

   <Result>An **Email Recipients** dialog says *This list is definitive and not an estimate.*, shows **Total Results:**, and lists each recipient. Click **Close**.</Result>

7. Click **Send Email**.

   <Result>An **Email Sent** card says *Your email has been queued to be sent to … individual(s).*, with a **Reset Form** button.</Result>

8. Click **Reset Form**.

   <Result>The form is empty again, ready for the next email.</Result>

:::caution[Watch out]
**Send Email** can't be undone. Check the subject, body and recipient count on the **Review Email** card first. To go back and change something, click **Cancel** on that card instead.
:::

## Recipients in the Attendees module

The **Email Target** list in **Housekeeping › Attendees › Mass Email** offers the targets in Table 3.1. The first four are listed only if you have the permission shown. The ready-made groups appear under the headings `newsletter`, `paidAttendees` and `volunteers`, exactly as written.

<TableFigure title="Email targets">

| Target | Sends to | Needs |
| --- | --- | --- |
| **Custom (Individual Users)** | The people you pick in **Individual User(s)**. | — |
| **Attendees** | Registered attendees, chosen as on the Registration page (section 4). | `registration:update` and `product:manage` |
| **Gatekeeping** | People with a ticket in one gatekeeping silo, by **Ticket status**. | `raffle:manage` |
| **Roles** | Everyone with one **Role**, for this convention or globally. | `system:permission:read` |
| **Newsletter Subscribers** | Every account in your organization that ticked the newsletter box. | — |
| **Unpaid Newsletter Subscribers** | Newsletter subscribers with an unpaid registration for this convention. | — |
| **All Unpaid Users** | Accounts in your organization with a confirmed email and no registration, or an unpaid registration at any of your conventions. | — |
| **Fursuiters (all)** | People whose registration for this convention has the flag with the short name `fursuits`. | — |
| **Requesting ASL Interpreters** | People whose registration for this convention has the flag with the short name `asl`. | — |
| **with a Badge Printed** | People whose badge for this convention has been printed. | — |
| **Leads Only** | The department leads for this convention. | — |

</TableFigure>

### Email a gatekeeping silo

1. In **Email Target**, choose **Gatekeeping**.

   <Result>A **Gatekeeping** list (**Select one**) appears, with **Ticket status** checkboxes **Redeemed**, **Rescinded**, **Waiting** and **Winner**. **Waiting** is ticked.</Result>

2. Choose the silo and tick the ticket statuses to include.

   <Result>The preview counts the people holding tickets in those statuses.</Result>

Gatekeeping silos are explained in [Gatekeeping](../registration/raffle.md).

### Email everyone with a role

1. In **Email Target**, choose **Roles**, then choose a **Role**.

   <Result>The preview counts the people who have that role for this convention or globally.</Result>

## Recipients in the Registration module

1. Go to **Housekeeping › Registration › Mass Email**.

   <Result>The form has a **Products** heading with a checkbox for each badge product, and **Registration Status** with **Paid** (ticked), **Unpaid** and **Only With Children**. The preview counts 0, because no product is ticked.</Result>

2. Tick one or more badge products.

   <Result>The preview counts the people with a paid registration for those products.</Result>

3. Tick **Unpaid** as well.

   <Result>The count grows to include people registered for those products who haven't paid.</Result>

**Only With Children** keeps only people who registered children with the older child-registration feature (**Max Child Registration**). It doesn't look at sub-accounts.

## Recipients in the Volunteers module

<Sidenote title="Department leads">
A lead without `volunteer:admin` sees only the departments they lead. ConCat gives leads `massemail` through the *lead* role when they're named in Volunteer Settings.
</Sidenote>

1. Go to **Housekeeping › Volunteers › Mass Email**.

   <Result>The form has **Department(s)**, with a checkbox for each department, and **Filters** with **Only Staff**, **Assigned** (ticked) and **Unassigned**. Staff with `volunteer:admin` also see **All Departments**. Hidden departments are marked *This is a hidden department.*</Result>

2. Tick the departments to email.

   <Result>The preview counts the volunteers assigned to those departments. The departments' own email addresses are added to **From Address**.</Result>

<TableFigure title="Volunteer filters">

| Filter | Adds or keeps |
| --- | --- |
| **Assigned** | Adds volunteers assigned to a ticked department. |
| **Unassigned** | Adds volunteers not assigned to any department, whichever departments are ticked. |
| **Only Staff** | Keeps only volunteers who are staff members. |

</TableFigure>

## Recipients in the Dealers module

1. Go to **Housekeeping › Dealers › Mass Email**.

   <Result>The form has **Areas**, with a checkbox for each dealer area, and **Status**, with **Pending**, **Approved**, **Waitlisted**, **Rejected**, **Cancelled**, **Paid** and **Unpaid**. **Approved**, **Paid** and **Unpaid** are ticked, so the preview already counts every approved dealer.</Result>

2. Tick a dealer area.

   <Result>The count drops to the matching dealers in that area. A **Table type** heading appears with **Filter by table type** and **Filter by addons**, followed by a checkbox for each addon dealers have asked for, with its number of applications.</Result>

3. Tick **Filter by table type**, then tick a table type.

   <Result>Each table type is listed with its number of applications in brackets, and the count drops to dealers who applied for the ticked types.</Result>

With no area ticked, every area is included. The first five statuses keep applications in those states. **Paid** and **Unpaid** only narrow the list when just one of them is ticked. Dealer areas and table types are set up as in [Dealers](../dealers/managment.md).
