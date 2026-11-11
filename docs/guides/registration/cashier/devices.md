---
sidebar_position: 5
hide_table_of_contents: true
textbook: true
---

# Devices and QuikTicket

QuikTicket is ConCat's mobile app for scanning tickets. Before a phone or tablet can scan for your event, a staff member authorizes it from Housekeeping with a QR code.

:::info[In this guide]
What QuikTicket does and who can use it (section 1), turning QuikTicket off and on (section 2), authorizing a device (section 3), and authorizing a device for someone else (section 4).
:::

## What QuikTicket does

<Sidenote title="Who can do this">
Authorizing a device needs **admin:ticket:scan** (*Mark issued tickets as scanned*) or **admin:ticket:read** (*Access all issued tickets*). The *admin* role has both. Authorizing for someone else also needs **system:devices:manage** (*Allows managing authorized QuikTicket devices*), which no default role has: give it through a role, as in [Users and access](../../quickstart/users-and-access.md), section 3.
</Sidenote>

QuikTicket scans the QR codes on tickets for ticketed products. Attendees find their ticket codes on their **Attendance** page, under **Tickets**, by clicking **Show details**. Ticketed products themselves are set up in [Ticketed products](../../products/tickets.md).

An authorized device acts with the account that authorized it, and carries only that account's ticket permissions: scanning, reading, or both. *Devices are authorized for 6 hours before requiring reauthorization with a new code.*

Badge pickup with a registration QR code happens at the Cashier UI, not in QuikTicket: see [Scanner](./scanner.md), section 5.

## Turn QuikTicket off or on

QuikTicket is on unless you turn it off. Turning it off hides the **Devices** page, so nobody can authorize new devices.

1. Go to **Housekeeping › Registration › Settings**. In the **Kiosk** card, tick **Disable QuikTicket** (or clear it to turn QuikTicket back on), then click **Save** in that card.

   <Result>A **Kiosk settings saved** message appears.</Result>

2. Reload Housekeeping and open the **Attendees** module.

   <Result>With **Disable QuikTicket** ticked, the sidebar no longer shows **Devices**. Opened by its address, the **Devices** page says *Device authorization has been disabled for this convention. Please contact convention staff for assistance.*</Result>

:::note
The setting's description is *Enables / disables QuikTicket. Hides the 'Devices' tab in the sidebar if disabled.* It stops new authorizations from Housekeeping. Devices already authorized aren't signed out by it; their authorization ends after its 6 hours.
:::

## Authorize a device

1. Go to **Housekeeping › Attendees › Devices**. [Start here](../../quickstart/start-here.md), section 2, shows how to switch modules.

   <Result>The **Devices** page lists the devices authorized to your account, each with **Device ID:**, **Running QuikTicket**, and its make, model and system version. On the right, the **Authorize New Device** card has a **Request Code** button. The address ends in `/housekeeping/devices`.</Result>

2. Click **Request Code**.

   <Result>An **Authorization Code** QR code appears, with *Scan the QR code below with the device you wish to authorize. The code will expire on* and a date and time six hours from now.</Result>

3. On the phone or tablet, open QuikTicket and scan the QR code.

   <Result>The device is authorized to your account. Reload **Devices** to see it listed.</Result>

4. Click **Request New Code**.

   <Result>The QR code is hidden, and **Request Code** is offered again for the next device.</Result>

If your account has neither ticket permission, the **Authorize New Device** card says *You do not have permission to authorize a new device.* The **Devices** page has no button to remove a device; an authorization ends on its own after 6 hours.

## Authorize a device for someone else

With **system:devices:manage**, you can authorize a device to another staff member's account, for example to set up phones for a door team. The **Authorize New Device** card then also shows **Admin Authorize for User**.

1. On **Devices**, under **Admin Authorize for User**, select the person, then click **Request Code**.

   <Result>An **Authorization Code** QR code appears, for the person you selected.</Result>

2. Scan the QR code with the device in QuikTicket, as in section 3.

   <Result>The device is authorized to the selected person's account, with their ticket permissions.</Result>

If you leave **Admin Authorize for User** blank, the device is authorized to your own account. The person you choose must have **admin:ticket:scan** or **admin:ticket:read** themselves; if they have neither, an error says *Missing at least one required permission for QuikTicket device*.
