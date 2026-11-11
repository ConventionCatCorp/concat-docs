---
sidebar_position: 1
hide_table_of_contents: true
textbook: true
---

# Cashier UI

The Cashier UI is your registration station. Staff use it at the registration desk to find an attendee, see whether they can be checked in, take any balance due, and print their badge.

:::info[In this guide]
Opening the station and finding an attendee (section 1), setting up one station (section 2), the event-wide Cashier UI settings (section 3), checking an attendee in, with payment and printing (section 4), reprinting a badge (section 5), checking in without printing (section 6), verifying an attendee's ID (section 7), the **Actions** menu (section 8) and child badges (section 9). Station hardware has its own guides: [Scanner](./scanner.md), [Badge and receipt printers](./printers.md), [NFC badges](./nfc.md) and [Devices and QuikTicket](./devices.md).
:::

## Open the station and find an attendee

<Sidenote title="Who can do this">
The Cashier UI needs the **registration:cashier** permission (*Allows using the cash register*). The default *admin* and *registration* roles have it. Roles are explained in [Users and access](../../quickstart/users-and-access.md), section 3.
</Sidenote>

The station runs in a web browser. Its station settings (section 2) and its devices are saved in that browser, so each registration computer keeps its own setup.

1. Go to **Housekeeping › Attendees › Cashier UI**. [Start here](../../quickstart/start-here.md), section 2, shows how to switch modules.

   <Result>The registration station opens on its own screen, without the Housekeeping sidebar. The header shows **Registration Station**, **Printer Status**, a **Configure Devices** button, a gear button, your username and the time. Below it are a search box, **Search users...**, with **Enable Auto Navigate** ticked, and a card with **Exit Registration Station** and **Search Help**. The address ends in `/housekeeping/cashier`.</Result>

2. In the search box, type the attendee's badge ID (for example, B101), username, name, phone number or email address.

   <Result>Matching attendees are listed with their picture, name, status badges and badge name. If nobody matches, the list says **No results found.**</Result>

3. Click the attendee.

   <Result>The attendee's page opens. Its header shows the attendee's **ID**, **First Name**, **Last Name**, **Date of birth** and **Registration Level**, with an **Actions** menu and a **Back to user search** button. The address ends in `/housekeeping/cashier/` followed by the attendee's user ID.</Result>

4. Click **Back to user search**, or press ESC.

   <Result>The search page opens again, ready for the next attendee.</Result>

**Enable Auto Navigate** skips step 3 when a search finds exactly one attendee and the search was a scanned registration QR code, a scanned ID whose name and date of birth match, or a typed first and last name. The list then shows **One Result Found** and **Redirecting...** before the attendee's page opens. A search on a first name alone always shows the list.

There are other ways to open an attendee:

- Type their user ID in the search box and press Enter.
- Scan their ID or their registration QR code: see [Scanner](./scanner.md).
- Place their NFC badge on the reader: see [NFC badges](./nfc.md).
- From their profile in Housekeeping, click **Open Cashier Interface** in the **Actions** card.

:::tip
If you run the browser full screen, ESC leaves full screen instead. The station then uses BACKSPACE for **Back to user search**, as the line under the button says.
:::

**Exit Registration Station**, on the search page, takes you to the Registration **Dashboard**.

## Set up a station

<Sidenote title="Saved in this browser">
Station settings are saved in the browser, not in ConCat. Set up each registration computer on its own, and again if its browser data is cleared.
</Sidenote>

Each station decides what it is allowed to do: take payments, check in staff, which badge types it serves, and which printer each badge type goes to. Table 2.1 lists the settings.

1. Click the gear button in the station's header.

   <Result>A **Configure Registration Station** dialog opens with the settings in Table 2.1, each with a short description.</Result>

2. Turn each setting on or off as this station needs.

   <Result>**Saved!** appears next to each setting you change. There's no save button.</Result>

3. *(Optional)* To limit the badge products this station checks in, turn on **Restrict Product Check-in**, then select the products in the list that appears. Hold Ctrl (Cmd on a Mac) to select more than one.

   <Result>The selected products are highlighted. At this station, an attendee with any other badge product gets *This registration station is not configured to print … badges.* with the product's name.</Result>

4. *(Optional)* Under **Badge type printer preferences**, select a badge type in one list and click the arrow that points to the other list, **Primary Printer** or **Secondary Printer**.

   <Result>The badge type moves to the other list, and **Saved!** appears next to the heading.</Result>

<TableFigure title="Station settings">

| Setting | Default | What it does |
| --- | --- | --- |
| **Enable payment acceptance** | Off | Lets this station take payment for any balance due (section 4.2). <small>Off: cashiers see *This registration station is not configured to accept payments.*</small> |
| **No ID barcode has been scanned.** | Off | Despite its label, this setting *requires* an ID scan. On, the station blocks check-in until an ID barcode has been scanned for the attendee (section 7). |
| **Enable staff check-in** | On | Lets this station print staff and volunteer badges, for anyone with an approved volunteer application. <small>Off: *This registration station is not configured to print staff / volunteer badges.*</small> |
| **Restrict Product Check-in** | Off | Limits the station to the badge products you select (step 3). |
| **Print separate staff badge** | Off | Prints two badges for staff and volunteers: one with their attendance type, one with STAFF. <small>Off: one badge with both, separated by a slash.</small> |
| **Print separate dealer badge** | Off | The same for dealers, with DEALER. |
| **Show reprint modal** | On | On, reprinting asks for a reason (section 5). Off, **Re-print Badge** prints at once, with no reason and no design override. <small>Locked on when the event forces a reprint reason (section 3).</small> |
| **Override badge design** | (Default) | Prints every badge at this station with the design you choose, regardless of attendance level. The station calls this dangerous. |
| **Badge type printer preferences** | Staff, attendee and dealer badges on the primary printer, minor badges on the secondary | Chooses the Zebra printer for each type of badge (step 4). If no secondary printer is set, every badge prints on the primary. See [Badge and receipt printers](./printers.md). |

</TableFigure>

:::note[Two settings don't survive a reload]
**Show reprint modal** and **Override badge design** go back to their defaults (on, and **(Default)**) whenever the station page is reloaded. Check them again after a reload if you changed them.
:::

## Event-wide Cashier UI settings

<Sidenote title="Who can do this">
**Registration › Settings** needs the permission to update system settings, **system:settings:update**. The *admin* role has it.
</Sidenote>

Two settings in Registration Settings apply to every station of your event (Table 3.1).

1. Go to **Housekeeping › Registration › Settings**.

   <Result>The **Registration Settings** page opens. One of its cards is **Cashier UI**, *Configure cashier interface settings.*</Result>

2. In the **Cashier UI** card, tick or clear the settings in Table 3.1, then click **Save** in that card.

   <Result>A **Cashier UI settings saved** message appears.</Result>

3. Reload any Cashier UI that is already open.

   <Result>If **Disable badge prints and check-in users instead** is ticked, the station header no longer shows **Printer Status**, and attendee pages offer **Check-in Registration** instead of **Print Badge**.</Result>

<TableFigure title="The Cashier UI card in Registration Settings">

| Setting | What it does |
| --- | --- |
| **Disable badge prints and check-in users instead** | For fully pre-printed badges: stations check attendees in without printing (section 6). |
| **Force Badge Re-Print reason** | Every reprint needs a reason (section 5), and stations can't turn off **Show reprint modal**. |

</TableFigure>

:::caution[Watch out]
When printing is off, stations show *Badge printing is disabled. To re-enable, head to Housekeeping -> Settings -> Registration.* The setting is actually in **Housekeeping › Registration › Settings**, in the **Cashier UI** card.
:::

## Check an attendee in

### The status card

<Sidenote title="Where messages come from">
**User Notes** shows the attendee's notes in the **Cashier** note category (see [User Notes](../../usernotes/usernotes.md)). **Role Messages** shows the **Cashier message** of each of their roles.
</Sidenote>

On the attendee's page, the card on the left shows one of the statuses in Table 4.1, then the messages that led to it (Table 4.2). It also lists the attendee's answers to registration options marked **Display on cashier interface**. On the right is the **Badge Print Preview**.

<TableFigure title="Check-in statuses">

| Status | What it means |
| --- | --- |
| **Check-In OK** | *No concerns or issues were found. Badge is ready to print!* |
| **Check-In Warning** | *One or more concerns may need to be addressed before the badge is printed.* Read the warnings before you print. |
| **Check-In Blocked** | *One or more errors must be resolved before check-in can proceed.* The station won't print or check in. |
| **Check-In Complete** | The badge has been printed, or the attendee checked in, and nothing else is flagged. |

</TableFigure>

<TableFigure title="What the status card can list">

| Heading | Messages |
| --- | --- |
| **Error(s)** | Not registered; no paid registration; an outstanding balance, with the items and fees still to pay; under review; banned from attending (a ban note with the **Registration** ban category); outside the age limits of their badge product; no ID barcode scanned at a station that requires one. |
| **Warning(s)** | A minor (*Check for Parental Consent Form*); a parent or guardian; a volunteer; a banned word in the badge name or a text option; an unpaid dealer table; a name, date of birth or expiry problem with a scanned ID. |
| **Info** | Returning attendee; vouchers already applied; **No barcode scanned.**; a dealer, with their area. |
| **User Notes** | Notes in the **Cashier** note category. |
| **Role Messages** | The **Cashier message** of each of the attendee's roles. |

</TableFigure>

Banned words are checked against the list in **Housekeeping › Registration › Settings**, card **Banned Words**. To fix a warning in the attendee's details, use the **Actions** menu (section 8).

Below the status card, **Undelivered products** lists physical items the attendee has bought, for staff to hand over: see [Claim Tickets](../../products/claimtickets.md).

### Take payment

<Sidenote title="Nothing is charged">
**Cash Payment** and **Card Payment** record a payment you've taken at the desk. ConCat doesn't charge the card.
</Sidenote>

An attendee who still owes money is blocked until the balance is paid. A station takes payment only if **Enable payment acceptance** is on (section 2). Otherwise it says *This registration station is not configured to accept payments.* and *Please direct the attendee to another registration station.*

1. At a station with payment acceptance on, open an attendee who owes money.

   <Result>The status card shows **Check-In Blocked**, with the outstanding balance under **Error(s)**. Below it are **Payment of** the amount **Required**, a **Cash Payment** button and a **Card Payment** button.</Result>

2. Take the money, then click **Cash Payment** or **Card Payment** to match.

   <Result>The payment buttons disappear and the status card is refreshed without the balance error. After a cash payment, if a receipt printer is connected, a *CASH PAYMENT* receipt prints and the cash drawer opens.</Result>

Receipt printers and cash drawers are set up in [Badge and receipt printers](./printers.md), section 5.

### Print the badge

The station needs a default badge design. Without one, the attendee's page says *Cannot check-in as no badge design is configured and check-in mode is disabled.* Create a design in **Housekeeping › Registration › Badge Designer** and click **Set as default**: see [Badge Designer](../badge_designer.md).

The station prints on a Zebra printer if one is set up, or through the browser's print dialog if not: see [Badge and receipt printers](./printers.md).

1. Open the attendee and check the **Badge Print Preview** on the right.

   <Result>The preview shows the badge as it will print, with the notes *Actual badge print and label may vary from this preview.* and *Emojis will be black and white.*</Result>

2. Click **Print Badge**, or press the SPACE BAR as the line under the button says: once when the status is **Check-In OK**, three times otherwise.

   <Result>With a Zebra printer, the badge prints on it. Without one, the browser's print dialog opens with the badge; print it to your badge printer.</Result>

3. If the button now reads **Print Next Badge (1 badge remaining)**, or more, click it again for each remaining badge.

   <Result>After the last badge, the status card refreshes. If nothing else is flagged, it shows **Check-In Complete** and *Badge has been queued to print. No further action is required!*, and the button reads **Re-print Badge**.</Result>

An attendee gets more than one badge when the station prints separate staff or dealer badges, or when they bought store products with a **Product Label Print Design**. A minor always gets a single badge, sent to the printer chosen for **Minor badges**.

## Reprint a badge

When a badge has been printed before, the print button reads **Re-print Badge**, and the reason for each reprint is saved in the attendee's print log (section 8).

1. Open the attendee whose badge was printed.

   <Result>The print button reads **Re-print Badge**. If nothing is flagged, the status card shows **Check-In Complete** and *Press ESC to return to the user search page, or press SPACE BAR 3 times to re-print the badge for this attendee.*</Result>

2. Click **Re-print Badge**.

   <Result>A **Re-print Badge** dialog opens. It shows **Reprint Reason (Recommended)**, or **(Required)** if your event forces a reason, with **Unspecified** selected, and an **Override badge design?** checkbox. If the station has **Show reprint modal** off, the badge prints straight away instead.</Result>

3. Choose **Printer malfunction**, **Badge was lost or damaged**, **Name was misspelled** or **Badge type was incorrect**, or type your own reason in **Enter other reason**.

   <Result>Your reason is selected. When a reason is required, **Print** is unavailable until you choose one other than **Unspecified**.</Result>

4. *(Optional)* Tick **Override badge design?** and choose a **Design**. If the dialog lists **Which badges to print?**, untick any badges you don't need again.

   <Result>The reprint will use the design you chose and print only the ticked badges.</Result>

5. Click **Print**.

   <Result>The badge prints as in section 4.3. With browser printing, a **Success** message appears after the print dialog.</Result>

## Check in without printing

If your badges are fully pre-printed, turn on **Disable badge prints and check-in users instead** (section 3). Staff then hand over the badge and record the check-in.

1. Open the attendee.

   <Result>The preview is headed **Badge Design Preview**, with the notice *Badge printing is disabled. To re-enable, head to Housekeeping -> Settings -> Registration.* Below the status card is a **Check-in Registration** button.</Result>

2. Hand over the attendee's badge and click **Check-in Registration**.

   <Result>The status card refreshes. If nothing is flagged, it shows **Check-In Complete** and *User has been marked as checked-in. No further action is required!* The button now reads **Remove Check-in**.</Result>

3. *(Optional, to undo)* Click **Remove Check-in**.

   <Result>The button reads **Check-in Registration** again.</Result>

An attendee with errors can't be checked in. If the station tries, a message starting *Registration has issues:* lists them.

## Verify an attendee's ID

<Sidenote title="What is compared">
The station compares the first name, last name and date of birth on the ID with the attendee's account, and checks the ID's expiry date.
</Sidenote>

A scanned driver's licence or ID card (PDF417 barcode) is checked against the attendee's record. Scanning on the search page finds the attendee and checks the ID in one go. On an attendee's page, a scan from a Web Serial scanner opens a check of its own. Setting up the scanner is covered in [Scanner](./scanner.md).

1. Open the attendee by searching for their name.

   <Result>Under the status card, a note says *Scan a PDF417 barcode to verify the ID of the attendee with their registration record.*, and **Info** lists **No barcode scanned.**</Result>

2. Scan the barcode on the back of the attendee's ID with a Web Serial scanner.

   <Result>A **Verify Attendee ID** dialog opens and shows **Validating ID...**, then one of the results in Table 7.1, with the scanned data below.</Result>

3. Click **Close**, or press ESC.

   <Result>For a match or a mismatch, the page reloads with the scan: **No barcode scanned.** is gone, and any mismatch is listed under **Warning(s)**, such as *Name does not match scanned ID.* For an expired ID, the scan is discarded.</Result>

4. *(Expired ID only)* To accept an expired ID, click **Mark ID as Valid** instead of **Close**, or press ENTER three times.

   <Result>The page reloads with the scan, and **Warning(s)** lists *Scanned ID has an expiration date in the past.*</Result>

5. *(Optional)* If the account's name is wrong, click **Update** next to *Name does not match scanned ID.*, check the details, and click **Update User**.

   <Result>The **Edit User** dialog closes and the status card refreshes without the name warning.</Result>

<TableFigure title="ID check results">

| Result | What it means |
| --- | --- |
| **ID Matched!** | *The scanned ID matches the attendee record.* |
| **ID Mismatch** | *There is a discrepancy between the ID and attendee record.* A table compares the **Account** and the **ID** for each field that differs. |
| **Expired ID Matched** | *The scanned ID matches the attendee record, but the ID has expired.* **Mark ID as Valid** accepts it. |

</TableFigure>

A registration QR code doesn't prove who someone is. Scanned here, it shows *Registration QR codes are not valid for ID validation. Please scan a valid PDF417 drivers license barcode.*

## The Actions menu

<Sidenote title="Who can do this">
**Update personal details** needs the **user:update** permission and is greyed out without it. Saving a registration needs **registration:update**. The *admin* and *registration* roles have both.
</Sidenote>

The **Actions** menu on an attendee's page opens the tools in Table 8.1 without leaving the station.

<TableFigure title="The Actions menu">

| Item | What it opens |
| --- | --- |
| **View user profile** | The attendee's profile in Housekeeping. |
| **Update registration** <small>**Create registration** if they have none</small> | The **Edit Registration** dialog: **Badge Name**, **Attendance Type** and registration options. |
| **Update personal details** | The **Edit User** dialog: **Preferred Name**, **Date of birth**, **First Name** and **Last Name**. |
| **View print logs** | The **Badge Print Logs for User** dialog. |

</TableFigure>

1. On the attendee's page, click **Actions**, then **Update registration**.

   <Result>An **Edit Registration** dialog opens with the attendee's **Badge Name** and **Attendance Type**. A badge name with a banned word is marked *Badge name contains a banned word.*</Result>

2. Change the **Badge Name** and click **Update Registration**.

   <Result>A **Saved successfully** message appears, the dialog closes, and the status card refreshes without the banned-word warning.</Result>

3. Click **Actions**, then **View print logs**.

   <Result>A **Badge Print Logs for User** dialog lists each print with **Cashier**, **Date**, **Product** and **Reason**. A first print shows *Initial print*. With no prints yet, it says *This user does not have any print logs.*</Result>

## Child badges

:::caution[Deprecated]
Child badges are the older *Child registration* feature. They appear only if your event's **Max Child Registration** is above 0, and a new event can't turn it on. Use sub-accounts instead: see [Registration setup](../../quickstart/registration-setup.md), section 5.
:::

1. Open a registered attendee.

   <Result>Under the badge preview, **Child Badges** lists the attendee's child badges, with an **Add new child badge** button.</Result>

2. Click **Add new child badge**, or press C. In the **Add child badge** dialog, enter the **Badge Name** and click **Add Child**.

   <Result>A **New child registration has been created!** message appears, and the child is listed under **Child Badges**.</Result>
