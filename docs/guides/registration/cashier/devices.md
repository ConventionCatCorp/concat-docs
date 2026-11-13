---
sidebar_position: 5
hide_table_of_contents: true
textbook: true
---

# Devices and QuikTicket

QuikTicket is ConCat's mobile app for scanning tickets. Authorize a phone or tablet for it with a QR code from Housekeeping.

:::info[In this guide]
QuikTicket and its permissions, turning it off or on, authorizing a device, and authorizing one for someone else.
:::

## What QuikTicket does

<Sidenote title="Who can do this">
Authorizing needs **admin:ticket:scan** (*Mark issued tickets as scanned*) or **admin:ticket:read** (*Access all issued tickets*); the *admin* role has both. Authorizing for someone else also needs **system:devices:manage** (*Allows managing authorized QuikTicket devices*), which no default role has: grant it through a role ([Users and access](../../quickstart/users-and-access.md), section 3).
</Sidenote>

QuikTicket scans the QR codes on tickets for ticketed products ([Ticketed products](../../products/tickets.md)). Attendees find theirs on their **Attendance** page, under **Tickets**, with **Show details**.

A device acts as the account that authorized it, with that account's ticket permissions: scanning, reading, or both. *Devices are authorized for 6 hours before requiring reauthorization with a new code.*

Badge pickup by registration QR code happens at the Cashier UI, not in QuikTicket: see [Scanner](./scanner.md), section 5.

## Turn QuikTicket off or on

QuikTicket is on by default. Turning it off hides the **Devices** page, so no new devices can be authorized. Devices already authorized aren't signed out before their 6 hours end.

1. Go to **Housekeeping › Registration › Settings**. In the **Kiosk** card, tick **Disable QuikTicket** (or clear it to turn QuikTicket back on), then click **Save** in that card.

   <Result>A **Kiosk settings saved** message appears.</Result>

2. Reload Housekeeping and open the **Attendees** module.

   <Result>With **Disable QuikTicket** ticked, **Devices** is gone from the sidebar. Its address shows *Device authorization has been disabled for this convention. Please contact convention staff for assistance.*</Result>

## Authorize a device

1. Go to **Housekeeping › Attendees › Devices** (see [Start here](../../quickstart/start-here.md), section 2).

   <Result>The **Devices** page lists devices authorized to your account, and the **Authorize New Device** card has a **Request Code** button. The address ends in `/housekeeping/devices`.</Result>

2. Click **Request Code**.

   <Result>An **Authorization Code** QR code appears, expiring six hours from now.</Result>

3. On the phone or tablet, open QuikTicket and scan the QR code.

   <Result>The device is authorized to your account. Reload **Devices** to see it listed.</Result>

4. Click **Request New Code**.

   <Result>The QR code is hidden, and **Request Code** is back for the next device.</Result>

Without either ticket permission, the card says *You do not have permission to authorize a new device.* Devices can't be removed here; an authorization ends on its own after 6 hours.

## Authorize a device for someone else

With **system:devices:manage**, the **Authorize New Device** card also has **Admin Authorize for User**, to authorize a device to another staff member's account, for example phones for a door team.

1. On **Devices**, under **Admin Authorize for User**, select the person, then click **Request Code**.

   <Result>An **Authorization Code** QR code appears for that person.</Result>

2. Scan the QR code with the device in QuikTicket, as in section 3.

   <Result>The device is authorized to that person's account, with their ticket permissions.</Result>

Left blank, **Admin Authorize for User** authorizes to your own account. The person must have **admin:ticket:scan** or **admin:ticket:read**, or an error says *Missing at least one required permission for QuikTicket device*.
