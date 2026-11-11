---
sidebar_position: 3
hide_table_of_contents: true
textbook: true
---

# Badge and receipt printers

The Cashier UI prints badges on Zebra label printers connected by USB, or through the computer's own print dialog. It can also print cash receipts and pick lists on a USB receipt printer, and open a cash drawer connected to it.

:::info[In this guide]
How the station prints (section 1), adding a Zebra badge printer (section 2), the test printer (section 3), printing through the browser (section 4), and receipt printers and cash drawers (section 5).
:::

## How the station prints

<Sidenote title="Saved in this browser">
Printer choices are saved in the browser, so set up each registration computer on its own.
</Sidenote>

The station prints badges in one of two ways:

- **Zebra printer.** The station sends the badge straight to a Zebra label printer over USB, with no print dialog. It sizes the badge to the label size the printer reports. A station can have a primary and a secondary Zebra printer, for example one with standard labels and one with minor labels.
- **OS Controlled.** When no Zebra printer is active, **Print Badge** opens the browser's print dialog, and you print to any printer the computer has (section 4).

The header's **Printer Status** shows which one the station is using (Table 1.1).

<TableFigure title="Printer Status in the station header">

| Printer Status shows | Meaning |
| --- | --- |
| **OS Controlled** | No Zebra printer is active. Badges print through the browser's print dialog. <small>Also shown when the chosen Zebra printers are unplugged.</small> |
| **Primary:** and a printer name | Badges print on that Zebra printer. |
| **Secondary:** and a printer name, after the primary | A second Zebra printer takes the badge types assigned to it in the station's **Badge type printer preferences**. |
| **Primary: None selected**, in red | Only a secondary printer is set. |

</TableFigure>

Zebra printers and receipt printers need a browser with WebUSB. Without it, **Add zebra printer** does nothing, and the **Receipt Printers** section says *It seems like your browser does not support WebUSB. Please use a supported browser.*

When the event checks attendees in without printing, **Configure Devices** shows *Badge printing is disabled. To re-enable, head to Housekeeping -> Settings -> Registration.* See [Cashier UI](./cashier.md), section 3.

## Add a Zebra badge printer

Connect the Zebra printer to the station computer by USB and load the badge labels first.

1. In the Cashier UI, click **Configure Devices**.

   <Result>A **Configure Devices** dialog opens with the sections **Available Badge Printers**, **Scanners** and **Receipt Printers**, and **NFC Tag Interfaces** if your event uses NFC badges. With no Zebra printer connected yet, **Available Badge Printers** says *No other badge printers available, try adding one manually.*</Result>

2. Next to **Available Badge Printers**, click **Add Manually**, then **Add zebra printer**.

   <Result>Your browser asks which USB device to connect. Only Zebra devices are offered.</Result>

3. Choose the printer and allow the connection.

   <Result>The printer is listed under **Available Badge Printers** as **Label (#…)**, with its serial number, and with a gear button, **Set as Primary** and **Set as Secondary**.</Result>

4. Click the printer's gear button, then **Test Print**.

   <Result>The printer prints a test label.</Result>

5. Click **Set as Primary**.

   <Result>The button reads **Active as Primary**, and the header's **Printer Status** shows **Primary:** and the printer's name.</Result>

6. *(Optional, second printer)* Add another Zebra printer with steps 2 and 3, then click **Set as Secondary** on it.

   <Result>The button reads **Active as Secondary**, and **Printer Status** adds **Secondary:** and its name.</Result>

Which badge types go to the secondary printer is set per station, under **Badge type printer preferences**: see [Cashier UI](./cashier.md), section 2. By default, minor badges go to the secondary printer and everything else to the primary.

To stop using a printer, click **Active as Primary** or **Active as Secondary** again: the slot is cleared. A printer can't fill both slots, so setting it as secondary takes it out of the primary slot. A Zebra printer can't be removed from the list; it stays there while it's connected.

:::note[Fonts]
Badge fonts are downloaded from Google Fonts each time a Zebra badge prints, so the station needs internet access to them. If a font fails to load, the badge still prints, in a fallback font.
:::

## The test printer

The test printer lets you try the printing workflow without a printer.

1. In **Configure Devices**, next to **Available Badge Printers**, click **Add Manually**, then **Add Test printer**.

   <Result>**Test Printer** is listed under **Available Badge Printers**. If the station had no primary printer, the test printer becomes the primary, and its button reads **Active as Primary**.</Result>

2. On an attendee's page, click **Print Badge**.

   <Result>Nothing prints. A message says *This is just a test for* and the attendee's badge type.</Result>

3. To remove the test printer, click its gear button, then **Remove**.

   <Result>**Test Printer** is no longer listed.</Result>

:::caution[Watch out]
A test print still records the badge as printed, in the attendee's print log, under your name. Use a test attendee, or expect the next real print to be a reprint.
:::

## Print through the browser

With no Zebra printer active, the station prints through the browser.

1. On an attendee's page, click **Print Badge**.

   <Result>The browser's print dialog opens with the badge, or with several badges if the station prints separate staff or dealer badges.</Result>

2. Choose the badge printer and print.

   <Result>The badge prints, and the status card refreshes. If nothing else is flagged, it shows **Check-In Complete**.</Result>

:::caution[Watch out]
The badge is recorded as printed when you click **Print Badge**, before the print dialog opens. If you cancel the dialog, print the badge with **Re-print Badge**.
:::

## Receipt printers and cash drawers

<Sidenote title="Which printer">
The browser offers only Epson USB devices here. The station uses the first receipt printer connected.
</Sidenote>

A receipt printer prints:

- a *CASH PAYMENT* receipt after **Cash Payment** (see [Cashier UI](./cashier.md), section 4.2), with your event's name and venue, the registration level, the amount, the attendee's user ID and email address; it then opens the cash drawer. **Card Payment** prints nothing.
- a *PICK LIST* of undelivered items, from the **Print Pick List** button under **Undelivered products**. The button appears only when a receipt printer is connected.

Connect the receipt printer to the station computer by USB, and the cash drawer to the receipt printer, first.

1. In **Configure Devices**, next to **Receipt Printers**, click **Add Manually**.

   <Result>Your browser asks which USB device to connect.</Result>

2. Choose the receipt printer and allow the connection.

   <Result>The printer is listed under **Receipt Printers** as **Receipt (#…)**, with its serial number, and with **Test Print** and **Kick Cash Drawer** buttons.</Result>

3. Click **Test Print**.

   <Result>The printer prints a test receipt.</Result>

4. Click **Kick Cash Drawer**.

   <Result>The cash drawer connected to the printer opens.</Result>

If the printer reports a problem while printing a receipt or pick list, a message starting *Printer reported an error:* says what it was.
