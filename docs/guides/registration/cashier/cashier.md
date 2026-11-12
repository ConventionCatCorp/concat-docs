---
sidebar_position: 1
hide_table_of_contents: true
textbook: true
---

# Cashier UI

The Cashier UI is the registration desk station: find an attendee, see whether they can check in, take any balance due, and print their badge.

:::info[In this guide]
Finding an attendee (section 1), station setup (section 2), event-wide settings (section 3), check-in and payment (section 4), reprints (section 5), check-in without printing (section 6), ID checks (section 7), the **Actions** menu (section 8) and child badges (section 9). Hardware: [Scanner](./scanner.md), [Badge and receipt printers](./printers.md), [NFC badges](./nfc.md), [Devices and QuikTicket](./devices.md).
:::

## Open the station and find an attendee

<Sidenote title="Who can do this">
Needs **registration:cashier** (*Allows using the cash register*), which the default *admin* and *registration* roles have. See [Users and access](../../quickstart/users-and-access.md), section 3.
</Sidenote>

1. Go to **Housekeeping › Attendees › Cashier UI** (see [Start here](../../quickstart/start-here.md), section 2).

   <Result>The station opens without the Housekeeping sidebar, with a **Search users...** box and **Enable Auto Navigate** ticked. The address ends in `/housekeeping/cashier`.</Result>

2. In the search box, type the attendee's badge ID (for example, B101), username, name, phone number or email address.

   <Result>Matching attendees are listed, or **No results found.**</Result>

3. Click the attendee.

   <Result>Their page opens, with an **Actions** menu and a **Back to user search** button. The address ends in `/housekeeping/cashier/` and their user ID.</Result>

4. Click **Back to user search**, or press ESC.

   <Result>The search page opens, ready for the next attendee.</Result>

**Enable Auto Navigate** skips step 3 when exactly one attendee matches a scanned registration QR code, a scanned ID (name and date of birth), or a typed first and last name: **One Result Found** and **Redirecting...** appear, then their page opens. A first name alone always shows the list.

You can also open an attendee by:

- typing their user ID and pressing Enter;
- scanning their ID or registration QR code ([Scanner](./scanner.md));
- placing their NFC badge on the reader ([NFC badges](./nfc.md));
- clicking **Open Cashier Interface** in the **Actions** card of their Housekeeping profile.

:::tip
In a full-screen browser, ESC leaves full screen; use BACKSPACE for **Back to user search** instead, as the line under the button says.
:::

**Exit Registration Station**, on the search page, opens the Registration **Dashboard**.

<Figure
  src="/img/guides/registration/cashier-station.webp"
  alt="The station header: Registration Station, Printer Status with OS Controlled, a Configure Devices button, and a gear button on the right."
  title="The station header"
  markers={[
    { n: 1, x: 94.9, y: 31.8, w: 4.8, h: 44 },
    { n: 2, x: 0.6, y: 64, w: 16.6, h: 36 },
    { n: 3, x: 0.6, y: 33.2, w: 22, h: 28 },
  ]}
>

1. The gear button: station settings (section 2).
2. **Configure Devices**: printers and NFC readers ([Badge and receipt printers](./printers.md), [NFC badges](./nfc.md)).
3. **Printer Status**.

</Figure>

## Set up a station

<Sidenote title="Saved in this browser">
Station settings and devices are saved in the browser, not in ConCat. Set up each registration computer separately, and again if its browser data is cleared.
</Sidenote>

1. Click the gear button in the station header (Figure 1.1).

   <Result>A **Configure Registration Station** dialog opens with the settings in Table 2.1.</Result>

2. Turn each setting on or off as this station needs.

   <Result>**Saved!** appears next to each change. There's no save button.</Result>

3. *(Optional)* To limit the badge products this station checks in, turn on **Restrict Product Check-in** and select them in the list that appears (Ctrl-click, or Cmd-click on a Mac, for several).

   <Result>The selected products are highlighted. Any other badge product gets *This registration station is not configured to print … badges.*</Result>

4. *(Optional)* Under **Badge type printer preferences**, select a badge type and click the arrow toward the other list, **Primary Printer** or **Secondary Printer**.

   <Result>The badge type moves to that list, and **Saved!** appears.</Result>

<TableFigure title="Station settings">

| Setting | Default | What it does |
| --- | --- | --- |
| **Enable payment acceptance** | Off | Takes payment for a balance due (section 4.2). |
| **No ID barcode has been scanned.** | Off | Despite its label, *requires* an ID scan: check-in is blocked until the attendee's ID barcode is scanned (section 7). |
| **Enable staff check-in** | On | Prints staff and volunteer badges, for anyone with an approved volunteer application. <small>Off: *This registration station is not configured to print staff / volunteer badges.*</small> |
| **Restrict Product Check-in** | Off | Serves only the badge products you select (step 3). |
| **Print separate staff badge** | Off | Two badges for staff and volunteers: one with their attendance type, one with STAFF. <small>Off: one badge with both, separated by a slash.</small> |
| **Print separate dealer badge** | Off | The same for dealers, with DEALER. |
| **Show reprint modal** | On | Reprints ask for a reason (section 5). <small>Off: **Re-print Badge** prints at once, with no reason or design override. Locked on if the event forces a reprint reason (section 3).</small> |
| **Override badge design** | (Default) | Prints every badge here with the chosen design, whatever the attendance level. The station calls this dangerous. |
| **Badge type printer preferences** | Minor badges on the secondary, the rest on the primary | Zebra printer for each badge type (step 4). With no secondary printer, all print on the primary. See [Badge and receipt printers](./printers.md). |

</TableFigure>

:::note[Two settings don't survive a reload]
**Show reprint modal** and **Override badge design** go back to their defaults (on, and **(Default)**) whenever the station page reloads. Check them again after a reload.
:::

## Event-wide Cashier UI settings

<Sidenote title="Who can do this">
Needs **system:settings:update**, which the *admin* role has.
</Sidenote>

These two settings apply to every station (Table 3.1).

1. Go to **Housekeeping › Registration › Settings**.

   <Result>The **Registration Settings** page opens, with a **Cashier UI** card.</Result>

2. In the **Cashier UI** card, tick or clear the settings in Table 3.1, then click **Save** in that card.

   <Result>A **Cashier UI settings saved** message appears.</Result>

3. Reload any Cashier UI that is already open.

   <Result>With **Disable badge prints and check-in users instead** ticked, the header no longer shows **Printer Status**, and attendee pages offer **Check-in Registration** instead of **Print Badge**.</Result>

<TableFigure title="The Cashier UI card in Registration Settings">

| Setting | What it does |
| --- | --- |
| **Disable badge prints and check-in users instead** | For fully pre-printed badges: stations check attendees in without printing (section 6). |
| **Force Badge Re-Print reason** | Every reprint needs a reason (section 5), and stations can't turn off **Show reprint modal**. |

</TableFigure>

:::caution[Watch out]
With printing off, stations say *Badge printing is disabled. To re-enable, head to Housekeeping -> Settings -> Registration.* The setting is actually in **Housekeeping › Registration › Settings**, in the **Cashier UI** card.
:::

## Check an attendee in

### The status card

The card on the left of an attendee's page shows a status (Table 4.1), the messages behind it (Table 4.2), and answers to registration options marked **Display on cashier interface**. The **Badge Print Preview** is on the right.

<TableFigure title="Check-in statuses">

| Status | What it means |
| --- | --- |
| **Check-In OK** | *No concerns or issues were found. Badge is ready to print!* |
| **Check-In Warning** | *One or more concerns may need to be addressed before the badge is printed.* Read the warnings before printing. |
| **Check-In Blocked** | *One or more errors must be resolved before check-in can proceed.* The station won't print or check in. |
| **Check-In Complete** | Badge printed or attendee checked in, with nothing else flagged. |

</TableFigure>

<TableFigure title="What the status card can list">

| Heading | Messages |
| --- | --- |
| **Error(s)** | Not registered; no paid registration; an outstanding balance, with the items and fees still to pay; under review; banned from attending (a ban note with the **Registration** ban category); outside the age limits of their badge product; no ID barcode scanned at a station that requires one. |
| **Warning(s)** | A minor (*Check for Parental Consent Form*); a parent or guardian; a volunteer; a banned word in the badge name or a text option; an unpaid dealer table; a name, date of birth or expiry problem with a scanned ID. |
| **Info** | Returning attendee; vouchers already applied; **No barcode scanned.**; a dealer, with their area. |
| **User Notes** | Notes in the **Cashier** note category. See [User Notes](../../usernotes/usernotes.md). |
| **Role Messages** | The **Cashier message** of each of the attendee's roles. |

</TableFigure>

Banned words come from the **Banned Words** card in **Housekeeping › Registration › Settings**. Fix the attendee's details from the **Actions** menu (section 8).

**Undelivered products**, below the status card, lists physical items for staff to hand over: see [Claim Tickets](../../products/claimtickets.md).

### Take payment

<Sidenote title="Nothing is charged">
**Cash Payment** and **Card Payment** record a payment taken at the desk. ConCat doesn't charge the card.
</Sidenote>

A balance due blocks check-in. Only a station with **Enable payment acceptance** on (section 2) takes payment; others say *This registration station is not configured to accept payments.* and *Please direct the attendee to another registration station.*

1. At a station that accepts payments, open an attendee who owes money.

   <Result>The status card shows **Check-In Blocked** with the balance under **Error(s)**, and **Cash Payment** and **Card Payment** buttons appear.</Result>

2. Take the money, then click **Cash Payment** or **Card Payment** to match.

   <Result>The buttons disappear and the balance error is gone. For cash, a connected receipt printer prints a receipt and opens the cash drawer ([Badge and receipt printers](./printers.md), section 5).</Result>

### Print the badge

Printing needs a default badge design. Without one, the page says *Cannot check-in as no badge design is configured and check-in mode is disabled.* Create one in **Housekeeping › Registration › Badge Designer** and click **Set as default** ([Badge Designer](../badge_designer.md)). Badges go to a Zebra printer if one is set up, otherwise to the browser's print dialog ([Badge and receipt printers](./printers.md)).

1. Open the attendee and check the **Badge Print Preview**.

   <Result>The preview shows the badge as it will print.</Result>

2. Click **Print Badge**, or press the SPACE BAR: once at **Check-In OK**, three times otherwise.

   <Result>A Zebra printer prints the badge. Without one, the browser's print dialog opens; print to your badge printer.</Result>

3. If the button now reads **Print Next Badge (1 badge remaining)**, or more, click it for each remaining badge.

   <Result>After the last badge, the status card shows **Check-In Complete** if nothing else is flagged, and the button reads **Re-print Badge**.</Result>

An attendee gets several badges when the station prints separate staff or dealer badges, or for store products with a **Product Label Print Design**. A minor always gets one badge, on the printer chosen for **Minor badges**.

## Reprint a badge

Each reprint's reason is saved in the attendee's print log (section 8).

1. Open an attendee whose badge was printed.

   <Result>The print button reads **Re-print Badge**.</Result>

2. Click **Re-print Badge**.

   <Result>A **Re-print Badge** dialog opens with **Reprint Reason (Recommended)**, or **(Required)** if your event forces a reason, and **Override badge design?**. With **Show reprint modal** off, the badge prints at once instead.</Result>

3. Choose **Printer malfunction**, **Badge was lost or damaged**, **Name was misspelled** or **Badge type was incorrect**, or type your own in **Enter other reason**.

   <Result>Your reason is selected. A required reason must be other than **Unspecified** before **Print** is available.</Result>

4. *(Optional)* Tick **Override badge design?** and choose a **Design**. If **Which badges to print?** is listed, untick badges you don't need again.

   <Result>The reprint will use that design and print only the ticked badges.</Result>

5. Click **Print**.

   <Result>The badge prints as in section 4.3. With browser printing, a **Success** message follows the print dialog.</Result>

## Check in without printing

For fully pre-printed badges, turn on **Disable badge prints and check-in users instead** (section 3). Staff hand over the badge and record the check-in.

1. Open the attendee.

   <Result>The preview is headed **Badge Design Preview**, and a **Check-in Registration** button is below the status card.</Result>

2. Hand over the badge and click **Check-in Registration**.

   <Result>The status card shows **Check-In Complete** if nothing else is flagged, and the button reads **Remove Check-in**.</Result>

3. *(Optional, to undo)* Click **Remove Check-in**.

   <Result>The button reads **Check-in Registration** again.</Result>

An attendee with errors can't be checked in: a message starting *Registration has issues:* lists them.

## Verify an attendee's ID

<Sidenote title="What is compared">
The first name, last name and date of birth on the ID against the attendee's account, and the ID's expiry date.
</Sidenote>

Scanning a driver's licence or ID card (PDF417 barcode) on the search page finds the attendee and checks the ID in one go. On an attendee's page, a Web Serial scanner opens a check of its own. Scanner setup: [Scanner](./scanner.md).

1. Open the attendee by searching for their name.

   <Result>**Info** in the status card lists **No barcode scanned.**</Result>

2. Scan the barcode on the back of their ID with a Web Serial scanner.

   <Result>A **Verify Attendee ID** dialog shows **Validating ID...**, then a result from Table 7.1.</Result>

3. Click **Close**, or press ESC.

   <Result>For a match or mismatch, the page reloads: **No barcode scanned.** is gone, and any mismatch is under **Warning(s)**, such as *Name does not match scanned ID.* An expired ID's scan is discarded.</Result>

4. *(Expired ID only)* To accept it, click **Mark ID as Valid** instead of **Close**, or press ENTER three times.

   <Result>The page reloads, and **Warning(s)** lists *Scanned ID has an expiration date in the past.*</Result>

5. *(Optional)* If the account's name is wrong, click **Update** next to *Name does not match scanned ID.*, check the details, and click **Update User**.

   <Result>The **Edit User** dialog closes and the name warning is gone.</Result>

<TableFigure title="ID check results">

| Result | What it means |
| --- | --- |
| **ID Matched!** | *The scanned ID matches the attendee record.* |
| **ID Mismatch** | *There is a discrepancy between the ID and attendee record.* A table compares **Account** and **ID** for each field that differs. |
| **Expired ID Matched** | *The scanned ID matches the attendee record, but the ID has expired.* **Mark ID as Valid** accepts it. |

</TableFigure>

A registration QR code doesn't prove identity. Scanned here, it shows *Registration QR codes are not valid for ID validation. Please scan a valid PDF417 drivers license barcode.*

## The Actions menu

<Sidenote title="Who can do this">
**Update personal details** needs **user:update** and is greyed out without it. Saving a registration needs **registration:update**. The *admin* and *registration* roles have both.
</Sidenote>

The **Actions** menu opens the tools in Table 8.1 without leaving the station.

<TableFigure title="The Actions menu">

| Item | What it opens |
| --- | --- |
| **View user profile** | The attendee's profile in Housekeeping. |
| **Update registration** <small>**Create registration** if they have none</small> | The **Edit Registration** dialog: **Badge Name**, **Attendance Type** and registration options. |
| **Update personal details** | The **Edit User** dialog: names and date of birth. |
| **View print logs** | The **Badge Print Logs for User** dialog. |

</TableFigure>

1. On the attendee's page, click **Actions**, then **Update registration**.

   <Result>An **Edit Registration** dialog opens. A badge name with a banned word is marked *Badge name contains a banned word.*</Result>

2. Change the **Badge Name** and click **Update Registration**.

   <Result>A **Saved successfully** message appears, and the banned-word warning is gone.</Result>

3. Click **Actions**, then **View print logs**.

   <Result>A **Badge Print Logs for User** dialog lists each print with its **Cashier**, **Date**, **Product** and **Reason** (*Initial print* for the first), or says *This user does not have any print logs.*</Result>

## Child badges

:::caution[Deprecated]
Child badges are the older *Child registration* feature. They appear only if your event's **Max Child Registration** is above 0, and a new event can't turn it on. Use sub-accounts instead: see [Registration setup](../../quickstart/registration-setup.md), section 5.
:::

1. Open a registered attendee.

   <Result>Under the badge preview, **Child Badges** lists their child badges, with an **Add new child badge** button.</Result>

2. Click **Add new child badge** (or press C), enter the **Badge Name** in the **Add child badge** dialog, and click **Add Child**.

   <Result>A **New child registration has been created!** message appears, and the child is listed under **Child Badges**.</Result>
