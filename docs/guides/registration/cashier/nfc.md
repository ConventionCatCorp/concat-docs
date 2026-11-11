---
sidebar_position: 4
hide_table_of_contents: true
textbook: true
---

# NFC badges

With NFC badges, the Cashier UI writes a signed record to an NFC chip in each attendee's badge before it prints the badge label. At the desk, placing a programmed badge on the reader opens its holder, and other systems can check badges against ConCat.

:::info[In this guide]
How NFC badges work (section 1), turning them on (section 2), connecting an NFC reader (section 3), programming and printing a badge (section 4), finding an attendee by their badge (section 5), and revoking a badge (section 6).
:::

## How NFC badges work

<Sidenote title="Who can do this">
Programming and revoking badges need **system:nfc_token:program** (*Program NFC badges*). Reading a badge needs **system:nfc_token:password** (*Read password for NFC badges*). The *admin* and *registration* roles have both. The *badgeValidator* role (*Allows the user to validate NFC badges*) has only the second, for staff who only check badges.
</Sidenote>

When a station programs a badge, it reads the chip's unique ID from the reader. ConCat then creates the attendee's NFC record: a new password, and a signed record of the attendee, the convention and how many badges they've been issued. Last, the station locks the chip with the password and writes the signed record to it.

To read a badge, a station asks ConCat for the chip's password, reads the record and checks its signature. Each read is recorded in the audit log and fires the `nfc-badge-scanned` webhook event, which identifies the card, the badge holder and the staff member who scanned it. Webhooks are set up in [OAuth applications and webhooks](../../technical/developers.md).

An attendee has one active NFC badge per convention. Programming a new badge deactivates the old one, and revoking a badge deactivates it with no replacement.

The station header shows **NFC Card Status:** followed by what the reader last reported (Table 1.1).

<TableFigure title="NFC Card Status messages">

| Status | Meaning |
| --- | --- |
| **unknown** | No NFC interface is active yet (section 3). |
| **NFC Proxy connected** | The station can reach the local NFC proxy. |
| **NFC Proxy not running** | The station can't reach the local NFC proxy. It tries again every second. |
| **NFC Serial connected** | A Web Serial reader is connected and answering. |
| **NFC Card verified** | A valid badge was read while an attendee's page was open. |
| **Card present (UUID not found). CANNOT USE.** | ConCat has no active record for this chip: it was revoked, replaced, or never programmed for this convention. |
| **NFC badge problem:** and a reason | The badge couldn't be read, for example *Card has invalid signature* or *Cannot read this card (wrong password)*. |

</TableFigure>

## Turn on NFC badges

1. Go to **Housekeeping › Registration › Settings**. In the **General** card, tick **Enable NFC Badges**, then click **Save** in that card.

   <Result>A **Registration settings saved** message appears.</Result>

2. Open the Cashier UI, or reload it if it's already open.

   <Result>The header shows **NFC Card Status:** next to **Printer Status**, reading **unknown** until you connect a reader. **Configure Devices** now has an **NFC Tag Interfaces** section.</Result>

The setting's description says *Requires that an NFC badge be programmed successfully before a label for the badge will be printed.* Cashiers can still print a label without programming a chip, with **Print Only** (section 4).

## Connect an NFC reader

<Sidenote title="Installed separately">
The NFC proxy program and the Web Serial reader's firmware aren't part of the ConCat website. Install them on each station computer before you start.
</Sidenote>

A station talks to its NFC reader through one of the interfaces in Table 3.1. Only one interface is active at a time, and the choice is saved in the browser.

<TableFigure title="NFC interfaces">

| Interface | What it is |
| --- | --- |
| **Local HTTP Proxy** <small>Listed as **HTTP Interface**</small> | A program running on the station computer that drives a USB NFC reader. The station reaches it at `localhost`, port 7070. It's always listed and can't be removed. |
| **NFC Tag Interface with Web Serial** | A reader plugged in by USB whose firmware answers ConCat's NFC commands over a serial port. Needs a browser with Web Serial. |

</TableFigure>

1. Start the NFC proxy on the station computer. Then, in the Cashier UI, click **Configure Devices**.

   <Result>The **Configure Devices** dialog has an **NFC Tag Interfaces** section, listing **Local HTTP Proxy** with **Set as Primary**.</Result>

2. Click **Set as Primary** on **Local HTTP Proxy**.

   <Result>The button reads **Active as Primary**. The header shows **NFC Card Status: NFC Proxy connected**, or **NFC Proxy not running** if the station can't reach the proxy.</Result>

3. *(Web Serial reader instead of the proxy)* Next to **NFC Tag Interfaces**, click **Add Manually**, then **NFC Tag Interface with Web Serial**, and choose the reader's port when your browser asks.

   <Result>The reader is listed by its USB product and vendor IDs, with **Active as Primary** and **Remove**. Once the reader answers, the header shows **NFC Card Status: NFC Serial connected**.</Result>

## Program and print a badge

With NFC badges on, the print buttons on an attendee's page change. The label prints the same way as other badges, on a Zebra printer or through the browser: see [Badge and receipt printers](./printers.md).

1. Open the attendee's page (see [Cashier UI](./cashier.md), section 1).

   <Result>Below the status card are **Program & Print Badge**, or **Program & Re-print Badge** if a badge was printed before, and **Print Only**. The line under the first button says to press the SPACE BAR 3 times.</Result>

2. Place a blank NFC badge on the reader, then click **Program & Print Badge**.

   <Result>A **Success** message appears and the badge label prints: on the primary Zebra printer if one is active, otherwise through the browser's print dialog.</Result>

3. If a **Warning** dialog says *This attendee already has an NFC badge issued. Issuing a new one will deactivate the old one. Are you sure?*, click **Yes** to replace the old badge, or **No** to stop.

   <Result>With **Yes**, the new badge is programmed and its label printed, as in step 2. The old badge now reads **Card present (UUID not found). CANNOT USE.**</Result>

On a reprint, if the station has **Show reprint modal** on, **Program & Re-print Badge** first opens the **Re-print Badge** dialog: see [Cashier UI](./cashier.md), section 5.

**Print Only** prints the label without touching the chip. With a Zebra printer, an NFC station prints one label on the primary printer: separate staff and dealer badges and the badge type printer preferences don't apply.

:::caution[Watch out]
- **Use a blank badge every time.** Once a chip is locked, the station can't program it again, and stops with an **NFC badge problem** message. This includes reprogramming the same attendee's badge.
- **No active interface:** if no NFC interface is active, **Program & Print Badge** does nothing.
- **Failed writes:** if the station can't lock or write the chip, it shows *NFC badge problem: Failed to set NFC badge password* or *NFC badge problem: Failed to write badge data:* and the reason, and removes the new record. Programming a replacement has already deactivated the old badge, so program a new blank badge.
:::

## Find an attendee by their badge

1. On the Cashier UI search page, place a programmed badge on the reader.

   <Result>The station checks the badge, then opens the badge holder's page.</Result>

2. With an attendee's page open, place a badge on the reader.

   <Result>If the badge is valid, **NFC Card Status** shows **NFC Card verified**. The station stays on the attendee you had open.</Result>

When nothing has been searched yet, the search page invites this with *Scan an ID barcode, place an NFC badge on the reader, or begin typing to search.*

## Revoke a badge

Revoke a badge that has been lost or stolen, so it can't be used.

1. Open the attendee's page.

   <Result>If the attendee has an NFC badge, a **Revoke NFC Badge** button is below the print buttons.</Result>

2. Click **Revoke NFC Badge**.

   <Result>A **Confirm Badge Revocation** dialog asks *Are you sure you want to revoke this badge? This cannot be undone.*</Result>

3. Click **Revoke NFC Badge** in the dialog.

   <Result>An **NFC badge has been revoked** message appears, and the button disappears. Placed on a reader, the old badge now shows **Card present (UUID not found). CANNOT USE.**</Result>

To give the attendee a working badge again, program a new blank badge (section 4).
