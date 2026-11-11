---
sidebar_position: 8
hide_table_of_contents: true
textbook: true
---

# Claim Tickets

A claim ticket is an extra label the Cashier UI prints after an attendee's badge, one for each store product they bought that has a print design. Use it as a physical voucher for things paid for online and handed over at the event, such as a T-shirt or a place at a meet-and-greet.

:::info[In this guide]
How claim tickets work (section 1), setting up a product to print one (section 2), printing claim tickets at the Cashier UI (section 3), and handing out undelivered products (section 4).
:::

## How claim tickets work

<Sidenote title="Not ticketed products">
Claim tickets are unrelated to [ticketed products](./tickets.md), which give attendees a QR ticket that staff scan at the door.
</Sidenote>

For attendees nothing changes until they pick up their badge. When staff print the badge at the Cashier UI, ConCat also prints a claim ticket for each paid store product whose **Product Label Print Design** is set:

- **How many:** one label for each one bought, so an attendee who bought three gets three labels.
- **Which design:** the badge design chosen on the product. It's filled in with the attendee's badge details, except that the field that normally shows their badge product shows the store product's name instead. The attendee's answers to the product's options are available to the design too.
- **Which printer:** the station's primary badge printer, after the badge.

You can print the label on its own, or onto ticket stock you've had printed.

<Figure src="/img/tutorial/claimTicketsCat.jpg" alt="A grey cat lying among printed claim tickets, each with a label naming a meet-and-greet." title="Claim tickets in use" width="60%">

Claim tickets printed at an event, each labelled with the meet-and-greet it was bought for. Photo provided by OffKai Expo.

</Figure>

## Set up a product

<Sidenote title="Who can do this">
Changing a product needs the `product:manage` permission. The default *admin* and *productEditor* roles have it.
</Sidenote>

A claim ticket uses a badge design, so create one for it first in the [Badge Designer](../registration/badge_designer.md), or reuse your badge design. Claim tickets can be added to a product that is already on sale; they only change what prints at badge pickup.

1. Open the product's page (see [Products](./products.md), section 4), and in **Product Information** click the edit button (<MaterialIcon name="edit" />).

   <Result>The product form opens. Under **Cashier** is **Product Label Print Design**, with a checkbox and a dropdown showing *Please select a design...*</Result>

2. Tick the checkbox in front of **Product Label Print Design**, choose the design, and click **Update Product**.

   <Result>The form closes. When you open the form again, the design is selected.</Result>

You can also set the design while creating the product, in the **New Product** form.

:::caution[Watch out]
On a badge product, **Product Label Print Design** means something else: it replaces the default badge design for that badge (*Override the default badge design layout.*). Claim tickets come only from store products.
:::

## Print claim tickets

Staff need nothing extra to print claim tickets: they print the badge as usual. See the [Cashier UI](../registration/cashier/cashier.md) guide for setting up a station and its printers.

1. Go to **Housekeeping › Attendees › Cashier UI** and search for the attendee.

   <Result>The attendee's status screen opens, with a **Print Badge** button. With NFC badges turned on, it reads **Program & Print Badge**.</Result>

2. Click **Print Badge**.

   <Result>The badge prints, followed by one claim ticket for each eligible product bought. The screen says *Badge has been queued to print. No further action is required!*</Result>

:::note[When nothing extra prints]
Claim tickets need a badge design for the attendee: their badge product's design, or your default. They don't print at stations set to check attendees in without printing.
:::

## Hand out undelivered products

<Sidenote title="Who can do this">
Marking items as delivered needs the `order:fulfill` permission. By default only the *admin* role has it.
</Sidenote>

Products with **Deliverable** ticked (see [Products](./products.md), Table 3.1) are listed on the attendee's Cashier UI screen once paid for, so staff can hand them over at pickup, with or without a claim ticket.

1. Open the attendee in the Cashier UI (section 3, step 1).

   <Result>An **Undelivered products** card lists their deliverable products, grouped by category. Each shows the quantity and name, with any option answers set to show on the cashier interface. Items already handed over are marked **(Delivered)**.</Result>

2. *(Optional)* If the station has a receipt printer, click **Print Pick List** to give someone a list to collect the items from.

   <Result>The receipt printer prints a **PICK LIST** headed **Badge #** and the attendee's user ID, with the quantity and name of each item not yet delivered.</Result>

3. Tick each item you hand over, then click **Mark as Delivered**.

   <Result>The items are marked **(Delivered)**, and their checkboxes can no longer be ticked.</Result>

To undo a delivery, use **Undo Delivery** on the item in the order's page; see [Orders](../orders/orders.md).
