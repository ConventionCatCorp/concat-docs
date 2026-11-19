---
sidebar_position: 5
hide_table_of_contents: true
textbook: true
---

# Devices and QuikTicket

Authorize a phone or tablet to scan tickets with QuikTicket, ConCat's mobile app.

:::info[In this guide]
QuikTicket and its permissions, turning it off or on, authorizing a device, and authorizing one for someone else.
:::

## What QuikTicket does

<Sidenote title="Who can do this">
Authorizing needs `admin:ticket:scan` or `admin:ticket:read`; the *admin* role has both. Authorizing for someone else also needs `system:devices:manage`, which no default role has: grant it through a role ([Users and access](../../quickstart/users-and-access.md), section 3).
</Sidenote>

QuikTicket scans the QR codes on tickets for ticketed products ([Ticketed products](../../products/tickets.md)). Attendees find theirs on their **Attendance** page, under **Tickets**, with **Show details**.

A device acts as the account it's authorized to, with that account's ticket permissions: scanning, reading or both. The authorization ends 6 hours after its code was requested; then the device needs a new code.

## Turn QuikTicket off or on

QuikTicket is off by default, which hides the **Devices** page, so no devices can be authorized. Turning it off later doesn't sign out devices already authorized.

1. Go to **Housekeeping › Registration › Settings**. In the **Kiosk** card, clear **Disable QuikTicket** to turn QuikTicket on (or tick it to turn it off), then click **Save** in that card.

   <Result>A **Kiosk settings saved** message appears.</Result>

2. Reload Housekeeping and open the **Attendees** module.

   <Result>With **Disable QuikTicket** cleared, **Devices** is in the sidebar. With it ticked, **Devices** is gone, and its address shows _Device authorization has been disabled for this convention. Please contact convention staff for assistance._</Result>

## Authorize a device

1. Go to **Housekeeping › Attendees › Devices**.

   <Result>The **Devices** page lists devices authorized to your account, and the **Authorize New Device** card has a **Request Code** button. The address ends in `/housekeeping/devices`.</Result>

2. Click **Request Code**.

   <Result>An **Authorization Code** QR code appears, expiring six hours from now.</Result>

3. On the phone or tablet, open QuikTicket and scan the QR code.

   <Result>The device is authorized to your account. Reload **Devices** to see it listed.</Result>

4. Click **Request New Code**.

   <Result>The QR code is hidden, and **Request Code** is back for the next device.</Result>

Without `admin:ticket:scan`, `admin:ticket:read` or `system:devices:manage`, the card says _You do not have permission to authorize a new device._ Ask an administrator for a role with a ticket permission.

:::caution[Watch out]
A device can't be signed out from Housekeeping. Its authorization ends on its own, 6 hours after its code was requested.
:::

## Authorize a device for someone else

With `system:devices:manage`, the **Authorize New Device** card also has **Admin Authorize for User**, to authorize a device to another staff member's account.

1. On **Devices**, under **Admin Authorize for User**, select the person, then click **Request Code**.

   <Result>An **Authorization Code** QR code appears for that person.</Result>

2. Scan the QR code with the device in QuikTicket, as in section 3.

   <Result>The device is authorized to that person's account, with their ticket permissions.</Result>

Left blank, **Admin Authorize for User** authorizes to your own account. The person must have `admin:ticket:scan` or `admin:ticket:read`, or an error says _Missing at least one required permission for QuikTicket device_: give them a role with one of these permissions, then request a new code.
