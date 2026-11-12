---
sidebar_position: 3
hide_table_of_contents: true
textbook: true
---

# Registration settings

Open and close registration, show attendees a notice, and flag banned words on badges.

:::info[In this guide]
The settings page, the **General** card, the attendee notice, banned words, and the other cards.
:::

## The settings page

<Sidenote title="Who can do this">
Needs `system:settings:update`; saving the attendee notice also needs `registration:update`. The default *admin* role has both.
</Sidenote>

Each card has its own **Save** button, which saves that card only. **Housekeeping › System › Settings** is a separate page; no setting appears on both.

1. Go to **Housekeeping › Registration › Settings** ([Start here](../quickstart/start-here.md), section 2).

   <Result>The **Registration Settings** page opens, with the **General** card first. The address ends in `/housekeeping/registration/settings`.</Result>

The **Form Editor** card appears only with the `registration:form:manage` permission. A setting marked **Experimental** may still change; one marked **Deprecated** will be removed.

## General

<TableFigure title="Settings in the General card">

| Setting | What it does |
| --- | --- |
| **Enable Registration Transfers** | Attendees can give a paid registration to another attendee. See [Transfer Registration](./transfer.md). |
| **Enable NFC Badges** | A badge's label prints only once its NFC badge is programmed. See [NFC badges](./cashier/nfc.md). |
| **Open Registration** | Attendees can register. While it's off, **Attendance** only says registration is closed. |
| **Enable Registration QR Codes** | A completed registration's QR code is emailed to the attendee and shown on their card on **Attendance**. <small>Not for registrations completed before you turn it on.</small> |
| **Disable refunds** | Enter the message attendees see when they try to request a refund. <small>Staff can still refund orders.</small> |
| **Limit attendance count** (**Deprecated**) | Read-only; shown only if set before. Otherwise a *Looking for "Limit attendance count"?* note suggests a hidden addon with a quantity limit. |
| **Cart Timeout** (**Experimental**) | The minutes an attendee has to check out before their unpaid registration stops being held. |

</TableFigure>

1. In the **General** card, tick the settings you need (with the message or minutes for **Disable refunds** and **Cart Timeout**), then click **Save** in that card.

   <Result>A **Registration settings saved** message appears, and the settings keep their values after a reload.</Result>

2. As an attendee, open **Attendance** in the homepage sidebar.

   <Result>With **Open Registration** ticked, an attendee who hasn't registered is offered **Start registration**. Unticked, the page says *Registration for* your convention's name *is closed.*</Result>

Registration starts closed, so you can set up first. For what attendees see while it's closed, see [How attendees register](./registering.md), section 8.

## Attendee notice

One notice at a time appears at the top of every attendee's **Attendance** page, such as a schedule change. **Importance** sets its colours: **Critical** for urgent alerts, **High** for announcements, **Normal** for reminders. **Show attendee notice** is **Experimental**.

1. In the **Attendee Notice** card, tick **Show attendee notice**.

   <Result>**Title**, **Message**, **Date** and **Importance** appear, with **Importance** set to **Normal**.</Result>

2. Enter a **Title** and **Message** (**Date** and **Importance** are optional), then click **Save** in that card.

   <Result>An **Attendee notice saved** message appears. With an empty title or message, *Title is required* or *Message is required* appears instead and nothing is saved.</Result>

3. As an attendee, open **Attendance**.

   <Result>A notice headed *Notice from* and your convention's name tops the page, with the date (if set), title, message and a **Hide details** button.</Result>

4. *(Remove the notice)* In the **Attendee Notice** card, untick **Show attendee notice** and click **Save**.

   <Result>An **Attendee notice saved** message appears, and attendees no longer see the notice.</Result>

**Message** accepts Markdown. **Date** is for display only: the notice shows whatever the date. Attendees see the notice only while registration is open.

## Banned words

<Sidenote title="One list for the organization">
Every convention in your organization shares the list. New organizations start with a default list.
</Sidenote>

Banned words don't block attendees. When staff open an attendee in the Cashier UI, a warning names the field and the banned words found, so staff can ask for a change before printing. ConCat checks the **Badge Name** and free-text options such as *Species*, matching anywhere in the text, in any case.

1. In the **Banned Words** card, enter one word per line, then click **Save** in that card.

   <Result>A **Banned words saved** message appears, and the list keeps your words after a reload.</Result>

:::caution[Watch out]
A short word also matches harmless names that contain it, and staff see a warning for each.
:::

## Other cards

<TableFigure title="The other cards on Registration Settings">

| Card | What it's for | Covered in |
| --- | --- | --- |
| **Sub-accounts** | One account registering family or group members | [Sub-accounts, children and minors](./sub-accounts.md), section 2 |
| **Minimum Age and Children** | Child and minor age thresholds | [Sub-accounts, children and minors](./sub-accounts.md), section 3 |
| **Kiosk** | Self-registration kiosks, and whether **Devices** is shown | [Kiosk](./kiosk.md), section 2 |
| **Cashier UI** | Check-in without printing; a required reason for reprints | [Cashier UI](./cashier/cashier.md) |
| **Form Editor** | Opening the registration form editor | [Registration form editor](./form-editor.md), section 2 |
| **Export Data** | Every registration as **CSV** or **JSON** | [Exports](../system/exports.md) |

</TableFigure>
