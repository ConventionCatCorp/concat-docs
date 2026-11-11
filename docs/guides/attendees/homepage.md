---
sidebar_position: 6
hide_table_of_contents: true
textbook: true
---

# The attendee homepage

After logging in, attendees land on the **Attendance** page: their registration status, a card for each person on their account, and any notice you've posted. This guide shows what they see there, in the sidebar and in the footer, and what decides it.

:::info[In this guide]
The sidebar (section 1), the Attendance dashboard (section 2), your notice to attendees (section 3), registration cards and their menus (section 4), the footer and changelog (section 5), and the waiting room (section 6).
:::

## The sidebar

<Sidenote title="See it as attendees do">
Use a test account without staff roles, in a private browser window. Your own account shows **Housekeeping** too.
</Sidenote>

The sidebar is only shown to people who are logged in. Most items appear only when the feature behind them is on, as Table 1.1 shows.

1. Log in as a test attendee.

   <Result>The **Attendance** page opens. At the top of the sidebar are your convention's name and dates, then **Welcome back,** with the attendee's preferred name or username and a three-dot **User menu** button. The items in Table 1.1 follow.</Result>

2. Make the browser window as narrow as a phone screen, then click **Open Menu** at the top of the page.

   <Result>The sidebar, hidden at this width, opens over the page. Its close button (<MaterialIcon name="close" />) hides it again.</Result>

3. Under **Theme Settings** at the bottom of the sidebar, click the moon button (**Dark mode**).

   <Result>The site switches to dark colours, and the moon button is highlighted. The sun button (**Light mode**) switches back. The choice is saved in that browser; until someone chooses, the site follows the device's own setting.</Result>

<TableFigure title="Sidebar items">

| Item | Shown when |
| --- | --- |
| **Cart** | Always, with the number of items in the cart. |
| Your convention's name, as a heading | Always. |
| **Housekeeping** | The person has staff access (`system:login`). |
| **My Department(s)** | The person leads a volunteer department but can't open the Volunteers module. |
| **Attendance** | Always. |
| **Child registration** | Only with the older child registrations (**Max Child Registration** above 0). |
| **Hotel reservations** | ConCat has turned hotel booking on for your event. |
| **Event store** heading: **Event store** | **Enable Event Store** is on: see [Store and products setup](../quickstart/store-setup.md), section 1. |
| **Event store** heading: **Transaction history** | Always. |
| **Applications** heading: **Volunteering** | **Enable Volunteers** is on, in Volunteer Settings. |
| **Applications** heading: **Dealing** | **Enable Dealers Module** is on, in Dealer Settings. |
| **Account** heading: **Personal details**, **Account settings**, **Two-factor authentication** | Always. See [Attendee accounts and sign-in](./accounts.md). |
| **Theme Settings** heading: sun and moon buttons | Always. |

</TableFigure>

You can add your own links under **Attendance**, **Event store** or **Applications**; [Convention settings](../system/settings.md) explains how. The **User menu** holds **Log out**: see [Attendee accounts and sign-in](./accounts.md), section 9.

## The Attendance dashboard

The top of the **Attendance** page is a status card that tells the attendee what to do next. Table 2.1 lists the four cards.

<TableFigure title="Status cards">

| Card heading | Shown when | Buttons |
| --- | --- | --- |
| *Ready to attend …?* | Registration is open and the attendee hasn't registered. | **Start registration**, **Update personal info** |
| *Complete your registration* | Any registration on the account isn't paid. <small>Lists the unpaid people when sub-accounts are on, and counts down while unpaid items are held in the cart.</small> | **Complete registration**, which opens checkout |
| *You're registered for …!* | The attendee's own registration is paid and nothing is unpaid. | None |
| *Registration for … is closed.* | **Open Registration** is off. <small>The rest of the page isn't shown.</small> | **Update personal info** |

</TableFigure>

1. As a test attendee with no registration, while registration is open, click **Attendance** in the sidebar.

   <Result>The **Attendance** page shows the card *Ready to attend …?*, with your convention's short name, then *… is open for registration! Secure your spot now.* and the buttons **Start registration** and **Update personal info**. Below it, under **Your registration**, is the attendee's own card.</Result>

2. Click **Start registration**.

   <Result>The registration form opens, at an address ending in `/event/register/new`.</Result>

Registering is covered in [How attendees register](../registration/registering.md), and opening registration in [Registration setup](../quickstart/registration-setup.md), section 7. When sub-accounts are on, the heading reads **Your registrations** and an **Attendees** counter appears with buttons to add people: see [Sub-accounts, children and minors](../registration/sub-accounts.md). Attendees whose email isn't confirmed also see a reminder banner: see [Attendee accounts and sign-in](./accounts.md), section 2.2.

## Your notice to attendees

You can post a notice at the top of every attendee's dashboard, for example to announce a deadline or a change of venue. You write it in Registration settings, under **Attendee Notice**, as [Registration settings](../registration/settings.md) explains.

1. With a notice saved, open **Attendance** as a test attendee.

   <Result>A card above the **Attendance** heading says *Notice from* and your convention's name, with the date if you set one, your title and your message, and a **Hide details** button.</Result>

2. Click **Hide details**.

   <Result>The message is hidden and the button changes to **Show details**.</Result>

The card's colour follows the importance you chose. The notice also shows to attendees waiting in the waiting room (section 6).

## Registration cards

Each person on the account has a card under **Your registration**: people with a registration first, then those without. The attendee's own card shows their picture; the others are numbered. Table 4.1 lists the status badges.

<TableFigure title="Registration status">

| Badge | Means |
| --- | --- |
| **Not registered** | No registration yet. The card's button is **Register**. |
| **Unpaid** | Registered but not paid. The button is **Modify**. |
| **Registered** | Registered and paid. The button is **Modify**. |
| **Refund requested** | Paid, with a refund request waiting for staff. |

</TableFigure>

1. As a registered test attendee, open **Attendance**.

   <Result>The attendee's card shows their name, which links to their registration, then the badge product, with a **Child** badge for child sub-accounts. Below are **Status**, **ID** and **Badge name**, and a **Show details** button.</Result>

2. Click **Show details**.

   <Result>The card opens to show **Legal name**, **Date of birth** and **Address**. If **Enable Registration QR Codes** is on in Registration settings, it also shows a **QR code**, which staff scan at badge pickup, with a **Copy UUID** button.</Result>

3. Click **Copy UUID**.

   <Result>A **UUID copied to clipboard** message appears. If the browser blocks copying, a **Registration UUID** dialog shows the code to copy by hand.</Result>

4. Click the arrow next to **Modify** (or **Register**).

   <Result>A menu opens with the items from Table 4.2 that apply to this card.</Result>

5. On a card with an unpaid registration, choose **Delete registration**.

   <Result>The registration is deleted at once, with no confirmation. The card shows **Not registered** and a **Register** button.</Result>

<TableFigure title="Registration card menu">

| Item | Shown | Does |
| --- | --- | --- |
| **Edit personal details** | On every card except a child's | On the attendee's own card, opens **Personal details**. On a sub-account's card, opens an **Edit Personal Details** dialog, which saves with **Update** and the message *Personal details updated*. |
| **View order (#…)** | When the registration is paid | Opens **Transaction history** at that order. |
| **Delete registration** | When the registration isn't paid | Deletes the registration, with no confirmation. |
| **Transfer registration** | When it's paid and **Enable Registration Transfers** is on | Gives the registration to another person: see [Transfer Registration](../registration/transfer.md). |
| **Migrate Sub-Account** | On sub-accounts | Turns the sub-account into the dependent's own account. |
| **Delete attendee** | On sub-accounts without a paid registration | Asks *Are you sure you want to delete this attendee? This action cannot be undone.*; **Delete attendee** then removes them, with the message *Account deleted*. |

</TableFigure>

When the attendee can't register another person yet, **Register** on a sub-account's card is grey, and clicking it explains why, for example *Enter your own registration details first before adding other attendees.* Sub-accounts are covered in [Sub-accounts, children and minors](../registration/sub-accounts.md), and the **QR code** in [Scanner](../registration/cashier/scanner.md). A **Tickets** list appears below the cards for attendees who bought ticketed products; see [Ticketed products](../products/tickets.md).

## The footer and changelog

1. Scroll to the bottom of any page.

   <Result>The footer shows the **Powered by ConCat** logo, **Version:** with a version number, a **Language** list, and the links **Terms & Conditions** and **Privacy Policy**.</Result>

2. Click the version number.

   <Result>The **Changelog** page opens on the latest year, listing ConCat's releases with their dates, and **Previous year** and **Next year** buttons where there are other years.</Result>

The changelog lists changes to ConCat itself, not to your event. The two policy links open your **Convention Policy / Terms & Conditions** and **Privacy terms**: see [Convention setup](../quickstart/convention-setup.md), section 3. The **Language** list changes the language of ConCat's screens; see [Languages and wording](../technical/languages.md).

## The waiting room

When a convention expects a rush as registration opens, ConCat can put attendees in a queue. There's no setting for it in Housekeeping, and staff can't let people through: ask ConCat to set it up and to admit attendees.

While it's on, attendees who open **Attendance** or the registration pages see a *You're in line* card instead of the dashboard. It thanks them for their patience, says they'll be admitted automatically when it's their turn, and asks them to keep the tab open. The page checks again every 30 seconds, counting down *Checking your status in … seconds.* Your notice (section 3) still shows above it.
