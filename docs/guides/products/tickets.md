---
sidebar_position: 9
hide_table_of_contents: true
textbook: true
---

# Ticketed products

A ticketed product gives each buyer a personal QR-code ticket for a set time window, which staff scan at the door. Use it for limited events such as a workshop or a meet-and-greet.

:::info[In this guide]
How ticketed products work, setting one up, what attendees see, printable tickets, and scanning at the door.
:::

## How ticketed products work

<Sidenote title="Ticket groups">
A ticket group is one entry slot, such as *Saturday 2 pm*. It has a number of places, an optional **Valid From** and **Valid Until**, and optional information for ticket holders.
</Sidenote>

A ticketed product is a store product with one or more ticket groups.

- **One per person:** there's no **Quantity** field, and once an attendee owns a ticket the page says *You've already purchased one of this product.*
- **No choice of slot:** when an order is paid, the buyer gets a place in the group with the earliest **Valid From** that still has places.
- **Places:** once every group is full, the product can't be bought and is taken out of unpaid carts. If the product also has limited stock, the groups' places must add up to the stock left.
- **The ticket:** a QR code tied to the attendee, the product and the group. It's emailed, shown on the attendee's dashboard, and printable.

## Set up a ticketed product

Housekeeping has no screen for making a product ticketed or managing its ticket groups. Create the product as usual (see [Products](./products.md), section 3), then ask ConCat Support to make it ticketed and set up its groups.

## What attendees see

1. As an attendee, open the ticketed product in the event store (see [What attendees see in the store](./store.md)).

   <Result>The page says *This is a Ticketed Product.* and has no **Quantity** field.</Result>

2. Buy the product and complete checkout.

   <Result>An email arrives whose subject includes *Your Event Ticket for* and the product's name. It shows the ticket's barcode and **Ticket Group**.</Result>

3. Open **Attendance** in the homepage sidebar.

   <Result>A **Tickets** heading lists the ticket with its **Ticket group** and a **Show details** button.</Result>

4. Click **Show details**.

   <Result>The ticket's **QR code** appears.</Result>

## Printable tickets

1. As an attendee, open **Transaction history** in the homepage sidebar.

   <Result>An order with a ticket has a **Retrieve Ticket(s)** button.</Result>

2. Click **Retrieve Ticket(s)**.

   <Result>A page titled **Order #** and the order's number, **— Tickets**, shows each ticket's barcode, group, validity and **Issued To**, with a **Print** button.</Result>

3. Click **Print**.

   <Result>The browser's print dialog opens.</Result>

A scanned ticket's barcode is marked **REDEEMED**, with **Scanned At** and the time.

:::note[Staff viewing a ticket page]
Staff who open another attendee's ticket page see *You are in staff mode. You are viewing the tickets of UID* and the attendee's user ID.
:::

## Scanning tickets at the door

<Sidenote title="Who can scan">
Scanning needs `admin:ticket:scan`, which the default *admin* role has.
</Sidenote>

Staff scan tickets with ConCat's QuikTicket app, on a phone or tablet authorized with **Authorize New Device** in **Housekeeping › Attendees › Devices**. An authorization lasts 6 hours; see [Devices and QuikTicket](../registration/cashier/devices.md).

Each ticket scans once. ConCat refuses a ticket already scanned, one scanned before its group's **Valid From** or after its **Valid Until**, and one for a different event or attendee.
