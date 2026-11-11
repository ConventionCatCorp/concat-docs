---
sidebar_position: 9
hide_table_of_contents: true
textbook: true
---

# Ticketed products

A ticketed product gives each buyer a personal ticket with a QR code, valid for a set time window, that staff scan at the door. Use it for limited events such as a workshop, a panel with limited seating or a meet-and-greet session.

:::info[In this guide]
How ticketed products work (section 1), setting one up (section 2), what attendees see (section 3), printable tickets (section 4), and scanning tickets at the door (section 5).
:::

## How ticketed products work

<Sidenote title="Ticket groups">
A ticket group is one entry slot for a ticketed product, such as *Saturday 2 pm*. It has a name, an optional display name, a number of places, an optional **Valid From** and **Valid Until**, and optional additional information for ticket holders.
</Sidenote>

A ticketed product is a store product with one or more ticket groups.

- **One per person:** an attendee can buy only one of each ticketed product. The product's page has no **Quantity** field, and once they own a ticket it says *You've already purchased one of this product.*
- **No choice of slot:** when an order is paid, the buyer is given a place in the ticket group with the earliest **Valid From** that still has places. Attendees don't choose their group.
- **Places:** once every group is full, the product can't be bought, and it's taken out of unpaid carts. If the product also has limited stock, the groups' places must add up to the stock left.
- **The ticket:** each ticket has a QR code tied to the attendee, the product and the group. It's emailed to the buyer, shown on their dashboard, and can be printed.

## Set up a ticketed product

In this version, Housekeeping has no screen for turning a product into a ticketed product or for managing its ticket groups. Create the product as usual (see [Products](./products.md), section 3), then ask ConCat Support to make it ticketed and set up its groups.

## What attendees see

1. As an attendee, open the ticketed product in the event store (see [What attendees see in the store](./store.md)).

   <Result>The page says *This is a Ticketed Product.* Its help explains *A Ticketed Product is a one-per-person purchasable product for accessing special or limited events.* There's no **Quantity** field.</Result>

2. Buy the product and complete checkout.

   <Result>An email arrives whose subject includes *Your Event Ticket for* and the product's name. It shows the ticket's barcode, its **Ticket Group**, when it's valid, and a link to the ticket page.</Result>

3. Open **Attendance** in the homepage sidebar.

   <Result>Below your registration, a **Tickets** heading lists the ticket: the product's name, **Ticket group**, and **Valid From** and **Valid Until** if the group has them, with a **Show details** button.</Result>

4. Click **Show details**.

   <Result>The ticket's **QR code** is shown, with **Additional Information** if the group has any. The button now reads **Hide details**.</Result>

## Printable tickets

1. As an attendee, open **Transaction history** in the homepage sidebar.

   <Result>An order that includes a ticket says *You have one or more tickets for this order.* and has a **Retrieve Ticket(s)** button.</Result>

2. Click **Retrieve Ticket(s)**.

   <Result>A page titled **Order #** and the order's number, **— Tickets**, says *Please print these tickets and bring them to the event* and *You can also retrieve them or screenshot them via this page on your phone.* Under your convention's name, venue and dates, each ticket shows its barcode, the product's name, the group, **Valid From**, **Valid Until** and **Issued To**. A **Print** button is beside the message.</Result>

3. Click **Print**.

   <Result>The browser's print dialog opens with the tickets.</Result>

Once a ticket has been scanned, its barcode is marked **REDEEMED** and it shows **Scanned At** with the time.

:::note[Staff viewing a ticket page]
Staff who open another attendee's ticket page see *You are in staff mode. You are viewing the tickets of UID* and the attendee's user ID.
:::

## Scanning tickets at the door

<Sidenote title="Who can scan">
Scanning needs the `admin:ticket:scan` permission, which the default *admin* role has.
</Sidenote>

Staff scan ticket QR codes with ConCat's QuikTicket app, on a phone or tablet authorised from **Housekeeping › Attendees › Devices** with **Authorize New Device**. An authorisation lasts 6 hours. The [Devices and QuikTicket](../registration/cashier/devices.md) explains how to set up a device.

A scan is accepted once per ticket. ConCat refuses a ticket that has already been scanned, one scanned before its group's **Valid From** or after its **Valid Until**, and one for a different event or attendee.
