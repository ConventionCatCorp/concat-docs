---
sidebar_position: 4
hide_table_of_contents: true
textbook: true
---

# NFC badges

The Cashier UI writes a signed record to the NFC chip in each attendee's badge before printing its label. A programmed badge on the reader opens its holder, and other systems can check badges against ConCat.

:::info[In this guide]
How NFC badges work, turning them on, connecting a reader, programming and printing, finding an attendee by badge, and revoking a badge.
:::

## How NFC badges work

<Sidenote title="Who can do this">
Programming and revoking need **system:nfc_token:program** (*Program NFC badges*); reading needs **system:nfc_token:password** (*Read password for NFC badges*). The *admin* and *registration* roles have both. The *badgeValidator* role (*Allows the user to validate NFC badges*) has only the second, for staff who only check badges.
</Sidenote>

To program a badge, the station reads the chip's unique ID, and ConCat creates the attendee's NFC record: a new password, and a signed record of the attendee, the convention and how many badges they've been issued. The station locks the chip with the password and writes the signed record to it.

To read a badge, the station gets the chip's password from ConCat, reads the record and checks its signature. Each read is recorded in the audit log and fires the `nfc-badge-scanned` webhook event, naming the card, the badge holder and the staff member who scanned it ([OAuth applications and webhooks](../../technical/developers.md)).

An attendee has one active NFC badge per convention: programming a new one deactivates the old one, and revoking deactivates it with no replacement.

**NFC Card Status:**, in the station header, shows what the reader last reported (Table 1.1).

<TableFigure title="NFC Card Status messages">

| Status | Meaning |
| --- | --- |
| **unknown** | No NFC interface is active yet (section 3). |
| **NFC Proxy connected** | The station can reach the local NFC proxy. |
| **NFC Proxy not running** | The station can't reach the local NFC proxy. It retries every second. |
| **NFC Serial connected** | A Web Serial reader is connected and answering. |
| **NFC Card verified** | A valid badge was read while an attendee's page was open. |
| **Card present (UUID not found). CANNOT USE.** | No active record for this chip: revoked, replaced, or never programmed for this convention. |
| **NFC badge problem:** and a reason | The badge couldn't be read, for example *Card has invalid signature* or *Cannot read this card (wrong password)*. |

</TableFigure>

## Turn on NFC badges

1. Go to **Housekeeping › Registration › Settings**. In the **General** card, tick **Enable NFC Badges**, then click **Save** in that card.

   <Result>A **Registration settings saved** message appears.</Result>

2. Open the Cashier UI, or reload it if it's already open.

   <Result>The header shows **NFC Card Status:**, reading **unknown** until you connect a reader, and **Configure Devices** has an **NFC Tag Interfaces** section.</Result>

The setting's description says a badge must be programmed before its label prints, but cashiers can still print a label without programming a chip, with **Print Only** (section 4).

## Connect an NFC reader

<Sidenote title="Installed separately">
The NFC proxy program and the Web Serial reader's firmware aren't part of the ConCat website. Install them on each station computer first.
</Sidenote>

A station uses one interface from Table 3.1 at a time, and saves the choice in the browser.

<TableFigure title="NFC interfaces">

| Interface | What it is |
| --- | --- |
| **Local HTTP Proxy** <small>Listed as **HTTP Interface**</small> | A program on the station computer that drives a USB NFC reader, reached at `localhost`, port 7070. Always listed; can't be removed. |
| **NFC Tag Interface with Web Serial** | A USB reader whose firmware answers ConCat's NFC commands over a serial port. Needs a browser with Web Serial. |

</TableFigure>

1. Start the NFC proxy on the station computer, then click **Configure Devices** in the Cashier UI.

   <Result>**NFC Tag Interfaces** lists **Local HTTP Proxy** with **Set as Primary**.</Result>

2. Click **Set as Primary** on **Local HTTP Proxy**.

   <Result>The button reads **Active as Primary**. The header shows **NFC Card Status: NFC Proxy connected**, or **NFC Proxy not running** if the station can't reach the proxy.</Result>

3. *(Web Serial reader instead of the proxy)* Next to **NFC Tag Interfaces**, click **Add Manually**, then **NFC Tag Interface with Web Serial**, and choose the reader's port when the browser asks.

   <Result>The reader is listed with **Active as Primary** and **Remove**. Once it answers, the header shows **NFC Card Status: NFC Serial connected**.</Result>

## Program and print a badge

The label prints like any badge ([Badge and receipt printers](./printers.md)).

1. Open the attendee's page ([Cashier UI](./cashier.md), section 1).

   <Result>Below the status card are **Program & Print Badge** (**Program & Re-print Badge** after an earlier print) and **Print Only**.</Result>

2. Place a blank NFC badge on the reader, then click **Program & Print Badge**.

   <Result>A **Success** message appears and the label prints: on the primary Zebra printer if one is active, otherwise through the browser's print dialog.</Result>

3. If a **Warning** dialog says *This attendee already has an NFC badge issued. Issuing a new one will deactivate the old one. Are you sure?*, click **Yes** to replace the old badge, or **No** to stop.

   <Result>With **Yes**, the new badge is programmed and printed as in step 2, and the old badge now reads **Card present (UUID not found). CANNOT USE.**</Result>

On a reprint with **Show reprint modal** on, **Program & Re-print Badge** first opens the **Re-print Badge** dialog ([Cashier UI](./cashier.md), section 5).

**Print Only** prints the label without touching the chip. With a Zebra printer, an NFC station prints one label on the primary printer: separate staff and dealer badges and the badge type printer preferences don't apply.

:::caution[Watch out]
- **Use a blank badge every time.** A locked chip can't be programmed again, even for the same attendee; the station stops with an **NFC badge problem** message.
- **No active interface:** **Program & Print Badge** does nothing.
- **Failed writes:** if the station can't lock or write the chip, it shows *NFC badge problem: Failed to set NFC badge password* or *NFC badge problem: Failed to write badge data:* and the reason, and removes the new record. A replacement has already deactivated the old badge, so program a new blank one.
:::

## Find an attendee by their badge

1. On the Cashier UI search page, place a programmed badge on the reader.

   <Result>The station checks the badge, then opens its holder's page.</Result>

2. With an attendee's page open, place a badge on the reader.

   <Result>If the badge is valid, **NFC Card Status** shows **NFC Card verified**, and the station stays on the attendee you had open.</Result>

## Revoke a badge

Revoke a lost or stolen badge so it can't be used.

1. Open the attendee's page.

   <Result>If they have an NFC badge, a **Revoke NFC Badge** button is below the print buttons.</Result>

2. Click **Revoke NFC Badge**.

   <Result>A **Confirm Badge Revocation** dialog asks *Are you sure you want to revoke this badge? This cannot be undone.*</Result>

3. Click **Revoke NFC Badge** in the dialog.

   <Result>An **NFC badge has been revoked** message appears and the button disappears. On a reader, the old badge now shows **Card present (UUID not found). CANNOT USE.**</Result>

To give the attendee a working badge, program a new blank one (section 4).
