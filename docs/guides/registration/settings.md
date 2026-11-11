---
sidebar_position: 3
hide_table_of_contents: true
textbook: true
---

# Registration settings

The Registration module's **Settings** page opens and closes registration and turns on the registration features your event uses. This guide covers its **General** card, the notice shown to attendees, and banned words, and points to the guides for the other cards.

:::info[In this guide]
The settings page and its cards (section 1), the **General** card (section 2), the attendee notice (section 3), banned words (section 4), and the other cards (section 5).
:::

## The settings page

<Sidenote title="Who can do this">
The page needs the `system:settings:update` permission. Saving the attendee notice also needs `registration:update`. The default *admin* role has both.
</Sidenote>

**Housekeeping › Registration › Settings** is one page of cards. Each card has its own **Save** button, which saves that card only. **Housekeeping › System › Settings** is a different page; no setting appears on both.

1. Go to **Housekeeping › Registration › Settings** (the module menu is explained in [Start here](../quickstart/start-here.md), section 2).

   <Result>The **Registration Settings** page opens with the cards **General**, **Sub-accounts**, **Minimum Age and Children**, **Attendee Notice**, **Kiosk**, **Cashier UI**, **Banned Words**, **Form Editor** and **Export Data**. The address ends in `/housekeeping/registration/settings`.</Result>

The **Form Editor** card appears only if you have the `registration:form:manage` permission. A setting marked **Experimental** is still being developed; one marked **Deprecated** will be removed.

## General

The **General** card holds the main registration switches. Table 2.1 lists them.

<TableFigure title="Settings in the General card">

| Setting | What it does |
| --- | --- |
| **Enable Registration Transfers** | Lets attendees give a paid registration to another attendee. See [Transfer Registration](./transfer.md). |
| **Enable NFC Badges** | A badge's label is only printed once its NFC badge has been programmed. See [NFC badges](./cashier/nfc.md). |
| **Open Registration** | Attendees can register. While it's off, the **Attendance** page only says registration is closed. |
| **Enable Registration QR Codes** | When a registration is completed, the attendee is emailed a QR code for it, and the code is shown on their card on **Attendance**. <small>It doesn't apply to registrations completed before you turn it on.</small> |
| **Disable refunds** | Tick it and enter the message attendees see when they try to request a refund. <small>Staff can still refund orders.</small> |
| **Limit attendance count** (**Deprecated**) | Read-only, and only shown if it was set before. Otherwise a *Looking for "Limit attendance count"?* note suggests a hidden addon with a quantity limit instead. |
| **Cart Timeout** (**Experimental**) | Tick it and enter the minutes an attendee has to check out before their unpaid registration stops being held. |

</TableFigure>

1. In the **General** card, tick or untick the settings you need, and fill in the message or minutes for **Disable refunds** and **Cart Timeout** if you ticked them. Then click **Save** in that card.

   <Result>A **Registration settings saved** message appears. The settings keep their values when you reload the page.</Result>

2. As an attendee, open **Attendance** in the homepage sidebar.

   <Result>With **Open Registration** ticked, an attendee who hasn't registered yet is offered **Start registration**. With it unticked, the page says *Registration for* your convention's name *is closed.*</Result>

Registration is closed until you open it, so attendees can't register while you're still setting up. [How attendees register](./registering.md), section 8, shows everything attendees see while it's closed.

## Attendee notice

<Sidenote title="Experimental">
**Show attendee notice** is marked **Experimental**: it works, but may still change.
</Sidenote>

The attendee notice is a message shown at the top of every attendee's **Attendance** page, for example a schedule change or a payment deadline. There is one notice at a time. Its **Importance** sets its colour scheme: **Critical** for urgent messages such as safety alerts, **High** for important announcements such as schedule changes, or **Normal** for general information and reminders.

1. In the **Attendee Notice** card, tick **Show attendee notice**.

   <Result>The fields **Title**, **Message**, **Date** and **Importance** appear. **Importance** offers **Critical**, **High** and **Normal**; **Normal** is chosen.</Result>

2. Enter a **Title** and a **Message**. *(Optional)* Choose a **Date** to show on the notice, and an **Importance**. Then click **Save** in that card.

   <Result>An **Attendee notice saved** message appears. If the title or message is empty, *Title is required* or *Message is required* appears instead and nothing is saved.</Result>

3. As an attendee, open **Attendance**.

   <Result>A notice headed *Notice from* and your convention's name is at the top of the page, with the date (if you set one), the title and the message, and a **Hide details** button.</Result>

4. *(Remove the notice)* In the **Attendee Notice** card, untick **Show attendee notice** and click **Save**.

   <Result>An **Attendee notice saved** message appears, and attendees no longer see the notice.</Result>

The **Message** can use Markdown, such as `**bold**` and links. The **Date** is only shown to attendees; the notice is displayed whatever the date. Attendees see the notice only while registration is open.

## Banned words

<Sidenote title="One list for the organization">
The list is stored for your whole organization, so every convention in it shares the same banned words. New organizations start with a default list.
</Sidenote>

Banned words are words you don't want printed on badges. ConCat doesn't stop attendees from using them. Instead, when staff open an attendee in the Cashier UI, a warning says which field contains a banned word and which words it found, so staff can ask for a change before printing.

Words are matched anywhere in the text, whatever the case. ConCat checks the **Badge Name** and any free-text option on the registration form, such as *Species*.

1. In the **Banned Words** card, enter one word per line, then click **Save** in that card.

   <Result>A **Banned words saved** message appears, and the list keeps your words when you reload the page.</Result>

:::caution[Watch out]
Because a word matches anywhere in the text, a short word also matches harmless names that contain it, and staff will see a warning for each of them.
:::

## Other cards

<TableFigure title="The other cards on Registration Settings">

| Card | What it's for | Covered in |
| --- | --- | --- |
| **Sub-accounts** | One account registering family or group members | [Sub-accounts, children and minors](./sub-accounts.md), section 2 |
| **Minimum Age and Children** | The child and minor age thresholds | [Sub-accounts, children and minors](./sub-accounts.md), section 3 |
| **Kiosk** | Self-registration kiosks, and whether **Devices** is shown | [Kiosk](./kiosk.md), section 2 |
| **Cashier UI** | Check-in without printing, and a required reason for reprints | [Cashier UI](./cashier/cashier.md) |
| **Form Editor** | Opening the registration form editor | [Registration form editor](./form-editor.md), section 2 |
| **Export Data** | Downloading every registration as **CSV** or **JSON** | [Exports](../system/exports.md) |

</TableFigure>
