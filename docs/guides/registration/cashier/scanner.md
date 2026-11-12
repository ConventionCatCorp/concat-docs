---
sidebar_position: 2
hide_table_of_contents: true
textbook: true
---

# Scanner

Scan an attendee's driver's licence or registration QR code, and the Cashier UI looks them up for you.

:::info[In this guide]
Codes the station reads (section 1), scanner modes (section 2), TEEMI setup (section 3), adding a Web Serial scanner (section 4), and registration QR codes (section 5).
:::

## What the station reads

The Cashier UI reads the codes in Table 1.1. Anything else a Web Serial scanner reads becomes an ordinary search.

<TableFigure title="Codes the Cashier UI reads">

| Code | Where it comes from | What the station does |
| --- | --- | --- |
| ID barcode (PDF417) | The back of a US-style driver's licence or ID card. Starts with `@ANSI`. | Searches by the ID's name and date of birth. If one attendee matches, opens their page and checks the ID ([Cashier UI](./cashier.md), section 7). |
| Registration QR code | The confirmation email or **Attendance** page, if your event has registration QR codes (section 5). Starts with `@CONCAT;UUID`. | Opens the attendee whose registration it is. |

</TableFigure>

## Keyboard and Web Serial scanners

A scanner connects to the station in one of two ways:

- **Keyboard mode.** Most scanners' default, with no setup: the scanner types what it reads. A scan that starts with `@ANSI` or `@CONCAT` and ends with Enter starts a new search from any Cashier UI screen, even an attendee's page.
- **Web Serial mode.** The scanner connects as a serial port; add it to each station once (section 4). On an attendee's page, an ID scan opens the **Verify Attendee ID** check instead of a new search.

Web Serial mode needs a browser with both WebUSB and Web Serial; keyboard mode needs neither. Without WebUSB, **Scanners** in **Configure Devices** has no **Add Manually** button and says *It seems like your browser does not support WebUSB. Please use a supported browser.*

:::info[Key idea]
Use Web Serial mode if your desk checks IDs: the cashier can verify an ID from the attendee's page without starting a new search.
:::

## Set up a TEEMI scanner

These steps use barcodes from the TEEMI 2D barcode scanner's [manual](/img/cashier/barcodes/TEEMI_2D_Barcode_Scanner_Manual.pdf). For another scanner, use its own manual to turn on PDF417, QR codes if you use registration QR codes, and serial (USB COM) mode.

1. Scan the barcodes in Table 3.1, in order from the top.

   <Result>The scanner reads PDF417 ID barcodes, and QR codes if you scanned row 5. After row 6, it connects as a serial port, ready for section 4.</Result>

<TableFigure title="TEEMI configuration barcodes, in order">

| Order | Scan this | What it sets |
| --- | --- | --- |
| 1 | ![Restore All Factory Defaults barcode](/img/cashier/barcodes/01_factory_reset.PNG) | **Restore All Factory Defaults**. Starts from a known state. |
| 2 | ![Low volume barcode](/img/cashier/barcodes/02_low_volume.PNG) | **Low**. Turns the beep down. |
| 3 | ![Disable All Symbologies barcode](/img/cashier/barcodes/03_disable_all.PNG) | **Disable All Symbologies**. Turns every barcode type off. |
| 4 | ![Enable PDF 417 barcode](/img/cashier/barcodes/04_enable_pdf417.PNG) | **Enable PDF 417**. Turns on ID barcodes. |
| 5 | The QR code *enable* barcode from the QR Code section of the [manual](/img/cashier/barcodes/TEEMI_2D_Barcode_Scanner_Manual.pdf) | Turns on QR codes. <small>Only for registration QR codes (section 5).</small> |
| 6 | ![USB COM Port Emulation barcode](/img/cashier/barcodes/05_usb_com.png) | **USB COM Port Emulation**. Makes the scanner a serial device. <small>Skip it to keep keyboard mode.</small> |

</TableFigure>

## Add a Web Serial scanner to a station

Plug the scanner into the station computer by USB first.

1. In the Cashier UI, click **Configure Devices**.

   <Result>A **Configure Devices** dialog opens. With no scanner added yet, **Scanners** says *No serial scanners connected, try adding one manually.*</Result>

2. Next to **Scanners**, click **Add Manually**, then **Scanner with Web Serial**.

   <Result>The browser asks which serial port to connect.</Result>

3. Choose the scanner and allow the connection.

   <Result>The scanner is listed under **Scanners** with **(Connected)** and a **Remove** button.</Result>

4. Close the dialog. On the search page, scan the barcode on the back of an ID.

   <Result>The search box fills with the scan, starting `@ANSI;`, and matching attendees are listed. If the name and date of birth match one attendee, their page opens.</Result>

The station remembers the scanner in this browser. It reconnects when the Cashier UI opens or the scanner is plugged back in, and shows **(Disconnected)** while unplugged. **Remove** takes it off the list and makes the browser forget it.

## Registration QR codes

<Sidenote title="What attendees see">
Under the QR code, the email shows **Registration for User#** and the attendee's user ID.
</Sidenote>

Each registration has its own QR code. With **Enable Registration QR Codes** on, ConCat emails it when a registration is completed and shows it on the attendee's **Attendance** page. Scanning it at the desk opens the attendee, quicker than a name search.

1. Go to **Housekeeping › Registration › Settings**. In the **General** card, tick **Enable Registration QR Codes**, then click **Save** in that card.

   <Result>A **Registration settings saved** message appears.</Result>

2. As an attendee with a paid registration, open **Attendance** in the homepage sidebar, then click **Show details** on your registration card.

   <Result>The card shows a **QR code** and a **Copy UUID** button.</Result>

3. As an attendee, register and pay for a badge.

   <Result>A *Registration Confirmation for* email arrives, headed **Save this email!**, with the QR code.</Result>

4. On the Cashier UI search page, scan the QR code from the email or the **Attendance** page.

   <Result>**One Result Found** and **Redirecting...** appear, then the attendee's page opens.</Result>

:::caution[Watch out]
- **Not retroactive:** registrations completed before the setting was on get no email (*This will not apply retroactively, contact support if you wish to backfill this.*). Those attendees can still show the code on their **Attendance** page.
- **Not an ID check:** a QR code identifies the registration, not the person. A station that requires an ID scan still blocks the attendee until their ID is scanned.
- **Scanner settings:** a scanner set up for PDF417 only can't read QR codes. On a TEEMI, scan row 5 of Table 3.1.
:::

Ticket QR codes for ticketed products are scanned with the QuikTicket app: see [Devices and QuikTicket](./devices.md).
