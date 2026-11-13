---
sidebar_position: 6
hide_table_of_contents: true
textbook: true
---

# The attendee homepage

See what attendees get after logging in, and which settings decide it.

:::info[In this guide]
The sidebar, the Attendance dashboard, your notice, registration cards and their menus, the footer and changelog, and the waiting room.
:::

## The sidebar

<Sidenote title="See it as attendees do">
Use a test account without staff roles, in a private browser window. Your own account also shows **Housekeeping**.
</Sidenote>

The sidebar shows only to logged-in people, and most items depend on a feature being on.

1. Log in as a test attendee.

   <Result>The **Attendance** page opens. The sidebar shows your convention's name and dates, **Welcome back,** with the attendee's preferred name or username and a three-dot **User menu** button, then the items in Table 1.1.</Result>

2. Make the browser window as narrow as a phone screen, then click **Open Menu** at the top of the page.

   <Result>The sidebar, hidden at 575 pixels or narrower, fills the screen; its close button (<MaterialIcon name="close" />) brings the page back.</Result>

3. Under **Theme Settings** at the bottom of the sidebar, click the moon button (**Dark mode**).

   <Result>The site turns dark and the moon button is highlighted; the sun button (**Light mode**) switches back. The choice is saved per browser; until then, the site follows the device setting.</Result>

<TableFigure title="Sidebar items">

| Item | Shown when |
| --- | --- |
| **Cart** | Always, with the item count. |
| Your convention's name, as a heading | Always. |
| **Housekeeping** | Staff access (`system:login`). |
| **My Department(s)** | The person leads a volunteer department but can't open the Volunteers module. |
| **Attendance** | Always. |
| **Child registration** | Older child registrations only (**Max Child Registration** above 0). |
| **Hotel reservations** | ConCat has turned on hotel booking for your event. |
| **Event store** heading: **Event store** | **Enable Event Store** is on: see [Store and products setup](../quickstart/store-setup.md), section 1. |
| **Event store** heading: **Transaction history** | Always. |
| **Applications** heading: **Volunteering** | **Enable Volunteers** is on (Volunteer Settings). |
| **Applications** heading: **Dealing** | **Enable Dealers Module** is on (Dealer Settings). |
| **Account** heading: **Personal details**, **Account settings**, **Two-factor authentication** | Always. See [Attendee accounts and sign-in](./accounts.md). |
| **Theme Settings** heading: sun and moon buttons | Always. |

</TableFigure>

To add your own links under **Attendance**, **Event store** or **Applications**, see [Convention settings](../system/settings.md). **Log out** is in the **User menu**: see [Attendee accounts and sign-in](./accounts.md), section 9.

## The Attendance dashboard

The status card at the top of **Attendance** tells the attendee what to do next.

<TableFigure title="Status cards">

| Card heading | Shown when | Buttons |
| --- | --- | --- |
| *Ready to attend …?* | Registration is open and the attendee hasn't registered. | **Start registration**, **Update personal info** |
| *Complete your registration* | Any registration on the account is unpaid. <small>Lists unpaid people when sub-accounts are on; counts down while unpaid items are held in the cart.</small> | **Complete registration**, which opens checkout |
| *You're registered for …!* | The attendee's own registration is paid and nothing is unpaid. | None |
| *Registration for … is closed.* | **Open Registration** is off. <small>The rest of the page is hidden.</small> | **Update personal info** |

</TableFigure>

1. As a test attendee with no registration, while registration is open, click **Attendance** in the sidebar.

   <Result>The *Ready to attend …?* card appears with **Start registration** and **Update personal info**, and the attendee's own card below, under **Your registration**.</Result>

2. Click **Start registration**.

   <Result>The registration form opens at `/event/register/new`.</Result>

With sub-accounts on, the heading reads **Your registrations**, with an **Attendees** counter and buttons to add people: see [Sub-accounts, children and minors](../registration/sub-accounts.md). Attendees with an unconfirmed email see a reminder banner: see [Attendee accounts and sign-in](./accounts.md), section 2.2. Registering is covered in [How attendees register](../registration/registering.md); opening registration in [Registration setup](../quickstart/registration-setup.md), section 7.

## Your notice to attendees

Post a notice, such as a deadline or a venue change, at the top of every attendee's dashboard. Write it under **Attendee Notice** in [Registration settings](../registration/settings.md).

1. With a notice saved, open **Attendance** as a test attendee.

   <Result>A card above the **Attendance** heading shows *Notice from* and your convention's name, your title and message, and a **Hide details** button.</Result>

2. Click **Hide details**.

   <Result>The message is hidden and the button reads **Show details**.</Result>

The card's color follows the importance you chose. The notice also shows in the waiting room (section 6).

## Registration cards

Each person on the account has a card under **Your registration**, registered people first. The attendee's own card shows their picture; the others are numbered.

<TableFigure title="Registration status">

| Badge | Means |
| --- | --- |
| **Not registered** | No registration yet. The button is **Register**. |
| **Unpaid** | Registered, not paid. The button is **Modify**. |
| **Registered** | Registered and paid. The button is **Modify**. |
| **Refund requested** | Paid, with a refund request waiting for staff. |

</TableFigure>

1. As a registered test attendee, open **Attendance**.

   <Result>The attendee's card shows their name, badge product, **Status**, **ID**, **Badge name** and a **Show details** button. Child sub-accounts' cards add a **Child** badge.</Result>

2. Click **Show details**.

   <Result>The card shows **Legal name**, **Date of birth** and **Address**. With **Enable Registration QR Codes** on in Registration settings, it also shows a **QR code** for badge pickup and a **Copy UUID** button.</Result>

3. Click **Copy UUID**.

   <Result>**UUID copied to clipboard** appears. If the browser blocks copying, a **Registration UUID** dialog shows the code to copy by hand.</Result>

4. Click the arrow next to **Modify** (or **Register**) (Figure 4.1).

   <Result>A menu opens with the items from Table 4.2 that apply to this card.</Result>

5. On a card with an unpaid registration, choose **Delete registration**.

   <Result>The registration is deleted at once, with no confirmation. The card shows **Not registered** and **Register**.</Result>

<Figure
  src="/img/guides/attendees/reg-card-menu.webp"
  alt="A test attendee's registration card: name, badge product, a green Registered badge, ID and badge name, with the menu next to Modify open, listing Edit personal details, View order and Transfer registration."
  title="A registration card and its menu"
  markers={[
    { n: 1, x: 9.2, y: 49, w: 15.1, h: 16.1 },
    { n: 2, x: 94.6, y: 9.8, w: 3.9, h: 19 },
    { n: 3, x: 71.8, y: 27.5, w: 26.8, h: 65.1 },
  ]}
>

1. The status badge (Table 4.1).
2. The arrow next to **Modify**.
3. The menu, here for a paid registration with transfers on (Table 4.2).

</Figure>

<TableFigure title="Registration card menu">

| Item | Shown | Does |
| --- | --- | --- |
| **Edit personal details** | Every card except a child's | Own card: opens **Personal details**. Sub-account: opens an **Edit Personal Details** dialog; **Update** saves with *Personal details updated*. |
| **View order (#…)** | Paid registrations | Opens **Transaction history** at that order. |
| **Delete registration** | Unpaid registrations | Deletes it, with no confirmation. |
| **Transfer registration** | Paid, with **Enable Registration Transfers** on | Gives it to another person: see [Transfer Registration](../registration/transfer.md). |
| **Migrate Sub-Account** | Sub-accounts | Turns the sub-account into the dependent's own account. |
| **Delete attendee** | Sub-accounts without a paid registration | Asks *Are you sure you want to delete this attendee? This action cannot be undone.*; **Delete attendee** removes them (*Account deleted*). |

</TableFigure>

If the attendee can't register another person yet, a sub-account's **Register** is gray, and clicking it says why, such as *Enter your own registration details first before adding other attendees.* See [Sub-accounts, children and minors](../registration/sub-accounts.md), and [Scanner](../registration/cashier/scanner.md) for the **QR code**. Buyers of ticketed products get a **Tickets** list below the cards: see [Ticketed products](../products/tickets.md).

## The footer and changelog

1. Scroll to the bottom of any page.

   <Result>The footer shows the **Powered by ConCat** logo, **Version:** and a number, a **Language** list, and **Terms & Conditions** and **Privacy Policy** links.</Result>

2. Click the version number.

   <Result>The **Changelog** page opens on the latest year's ConCat releases, with **Previous year** and **Next year** buttons where other years exist.</Result>

The changelog covers ConCat itself, not your event. The policy links open your **Convention Policy / Terms & Conditions** and **Privacy terms**: see [Convention setup](../quickstart/convention-setup.md), section 3. **Language** changes the language of ConCat's screens: see [Languages and wording](../technical/languages.md).

## The waiting room

For a rush when registration opens, ConCat can queue attendees. There's no Housekeeping setting, and staff can't let people through: ask ConCat to set it up and admit attendees.

While it's on, attendees who open **Attendance** or the registration pages see a *You're in line* card instead, asking them to keep the tab open until they're admitted automatically. It checks again every 30 seconds (*Checking your status in … seconds.*). Your notice (section 3) still shows above it.
