---
sidebar_position: 3
hide_table_of_contents: true
textbook: true
---

# Badge and receipt printers

Print badges on a USB Zebra label printer or through the browser, and cash receipts and pick lists on a USB receipt printer with a cash drawer.

:::info[In this guide]
How the station prints (section 1), Zebra printers (section 2), the test printer (section 3), browser printing (section 4), and receipt printers and cash drawers (section 5).
:::

## How the station prints

<Sidenote title="Saved in this browser">
Printer choices are saved in the browser: set up each registration computer separately.
</Sidenote>

The station prints badges in one of two ways:

- **Zebra printer.** The badge goes straight to a USB Zebra label printer, with no print dialog, sized to the printer's labels. A station can have a primary and a secondary, such as one with standard and one with minor labels.
- **OS Controlled.** With no Zebra printer active, **Print Badge** opens the browser's print dialog (section 4).

**Printer Status**, in the station header, shows which is in use (Table 1.1).

<TableFigure title="Printer Status in the station header">

| Printer Status shows | Meaning |
| --- | --- |
| **OS Controlled** | No Zebra printer is active; badges print through the browser. <small>Also shown when the chosen Zebra printers are unplugged.</small> |
| **Primary:** and a printer name | Badges print on that Zebra printer. |
| **Secondary:** and a printer name, after the primary | A second Zebra printer takes the badge types assigned to it in **Badge type printer preferences**. |
| **Primary: None selected**, in red | Only a secondary printer is set. |

</TableFigure>

Zebra and receipt printers need a browser with WebUSB. Without it, **Add zebra printer** does nothing, and **Receipt Printers** says *It seems like your browser does not support WebUSB. Please use a supported browser.*

When the event checks attendees in without printing ([Cashier UI](./cashier.md), section 3), **Configure Devices** shows *Badge printing is disabled. To re-enable, head to Housekeeping -> Settings -> Registration.*

## Add a Zebra badge printer

Connect the printer to the station computer by USB and load the badge labels first.

1. In the Cashier UI, click **Configure Devices**.

   <Result>A **Configure Devices** dialog opens. With no Zebra printer yet, **Available Badge Printers** says *No other badge printers available, try adding one manually.*</Result>

2. Next to **Available Badge Printers**, click **Add Manually**, then **Add zebra printer**.

   <Result>The browser asks which USB device to connect, offering only Zebra devices.</Result>

3. Choose the printer and allow the connection.

   <Result>The printer is listed as **Label (#…)**, with a gear button, **Set as Primary** and **Set as Secondary**.</Result>

4. Click the printer's gear button, then **Test Print**.

   <Result>A test label prints.</Result>

5. Click **Set as Primary**.

   <Result>The button reads **Active as Primary**, and **Printer Status** shows **Primary:** and the printer's name.</Result>

6. *(Optional, second printer)* Add another Zebra printer with steps 2 and 3, then click **Set as Secondary** on it.

   <Result>The button reads **Active as Secondary**, and **Printer Status** adds **Secondary:** and its name.</Result>

Which badge types go to the secondary is set per station, under **Badge type printer preferences** ([Cashier UI](./cashier.md), section 2). By default, only minor badges do.

Click **Active as Primary** or **Active as Secondary** again to clear that slot. A printer fills one slot at a time: setting it as secondary takes it out of the primary slot. A Zebra printer can't be removed from the list; it stays while it's connected.

:::note[Fonts]
Each Zebra badge print downloads its fonts from Google Fonts, so the station needs internet access to them. If a font fails to load, the badge prints in a fallback font.
:::

## The test printer

The test printer lets you try the printing workflow without a printer.

1. In **Configure Devices**, next to **Available Badge Printers**, click **Add Manually**, then **Add Test printer**.

   <Result>**Test Printer** is listed. If the station had no primary printer, it becomes the primary (**Active as Primary**).</Result>

2. On an attendee's page, click **Print Badge**.

   <Result>Nothing prints. A message says *This is just a test for* and the attendee's badge type.</Result>

3. To remove the test printer, click its gear button, then **Remove**.

   <Result>**Test Printer** is no longer listed.</Result>

:::caution[Watch out]
A test print still records the badge as printed, under your name, in the attendee's print log. Use a test attendee, or expect the next real print to be a reprint.
:::

## Print through the browser

1. With no Zebra printer active, click **Print Badge** on an attendee's page.

   <Result>The browser's print dialog opens with the badge, or several badges if the station prints separate staff or dealer badges.</Result>

2. Choose the badge printer and print.

   <Result>The badge prints, and the status card shows **Check-In Complete** if nothing else is flagged.</Result>

:::caution[Watch out]
The badge is recorded as printed when you click **Print Badge**, before the print dialog opens. If you cancel the dialog, print with **Re-print Badge**.
:::

## Receipt printers and cash drawers

<Sidenote title="Which printer">
The browser offers only Epson USB devices here. The station uses the first receipt printer connected.
</Sidenote>

A receipt printer prints:

- a *CASH PAYMENT* receipt after **Cash Payment** ([Cashier UI](./cashier.md), section 4.2), with your event's name and venue, the registration level, the amount, and the attendee's user ID and email address; then the cash drawer opens. **Card Payment** prints nothing.
- a *PICK LIST* of undelivered items, from **Print Pick List** under **Undelivered products**. The button appears only when a receipt printer is connected.

Connect the receipt printer to the station computer by USB, and the cash drawer to the receipt printer, first.

1. In **Configure Devices**, next to **Receipt Printers**, click **Add Manually**.

   <Result>The browser asks which USB device to connect.</Result>

2. Choose the receipt printer and allow the connection.

   <Result>The printer is listed under **Receipt Printers** as **Receipt (#…)**, with **Test Print** and **Kick Cash Drawer** buttons.</Result>

3. Click **Test Print**.

   <Result>A test receipt prints.</Result>

4. Click **Kick Cash Drawer**.

   <Result>The cash drawer opens.</Result>

If the printer reports a problem with a receipt or pick list, a message starting *Printer reported an error:* says what it was.
