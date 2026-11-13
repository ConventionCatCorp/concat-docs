---
sidebar_position: 8
hide_table_of_contents: true
textbook: true
---

# Claim Tickets

A claim ticket is a label the Cashier UI prints after an attendee's badge for each store product they bought that has a print design: a physical voucher for items handed over at the event, such as a T-shirt.

:::info[In this guide]
How claim tickets work, setting up a product, printing claim tickets, and handing out undelivered products.
:::

## How claim tickets work

<Sidenote title="Not ticketed products">
Claim tickets are unrelated to [ticketed products](./tickets.md), which give attendees a QR ticket that staff scan at the door.
</Sidenote>

When staff print a badge at the Cashier UI, ConCat also prints claim tickets for each paid store product whose **Product Label Print Design** is set:

- **How many:** one per item bought.
- **Which design:** the badge design chosen on the product, filled in with the attendee's badge details, except that the badge product field shows the store product's name. The design can also use the attendee's option answers.
- **Which printer:** the station's primary badge printer, after the badge.

Print on plain labels or onto ticket stock you've had printed.

<Figure src="/img/tutorial/claimTicketsCat.jpg" alt="A gray cat lying among printed claim tickets, each with a label naming a meet-and-greet." title="Claim tickets in use" width="60%">

Claim tickets printed at an event, each labeled with the meet-and-greet it was bought for. Photo provided by OffKai Expo.

</Figure>

## Set up a product

<Sidenote title="Who can do this">
Changing a product needs `product:manage`, which the default *admin* and *productEditor* roles have.
</Sidenote>

A claim ticket uses a badge design: make one in the [Badge Designer](../registration/badge_designer.md), or reuse your badge design. You can add it to a product already on sale; it only changes what prints at badge pickup.

1. Open the product's page (see [Products](./products.md), section 4) and click the edit button (<MaterialIcon name="edit" />) in **Product Information**.

   <Result>The product form opens, with **Product Label Print Design** under **Cashier**.</Result>

2. Tick the checkbox in front of **Product Label Print Design**, choose the design, and click **Update Product**.

   <Result>The form closes. Reopening it shows the design selected.</Result>

:::caution[Watch out]
On a badge product, **Product Label Print Design** replaces that badge's default design (*Override the default badge design layout.*). Claim tickets come only from store products.
:::

## Print claim tickets

Staff print the badge as usual; see the [Cashier UI](../registration/cashier/cashier.md) guide to set up a station and its printers.

1. Go to **Housekeeping › Attendees › Cashier UI** and search for the attendee.

   <Result>The attendee's status screen opens with **Print Badge** (**Program & Print Badge** when NFC badges are on).</Result>

2. Click **Print Badge**.

   <Result>The badge prints, then one claim ticket per eligible item. The screen says *Badge has been queued to print. No further action is required!*</Result>

:::note[When nothing extra prints]
Claim tickets need a badge design for the attendee: their badge product's design, or your default. They don't print at stations set to check attendees in without printing.
:::

## Hand out undelivered products

<Sidenote title="Who can do this">
Marking items delivered needs `order:fulfill`. By default only the *admin* role has it.
</Sidenote>

Once paid for, products with **Deliverable** ticked (see [Products](./products.md), Table 3.1) are listed on the attendee's Cashier UI screen, so staff can hand them over with or without a claim ticket.

1. Open the attendee in the Cashier UI (section 3, step 1).

   <Result>An **Undelivered products** card lists their deliverable products. Items already handed over are marked **(Delivered)**.</Result>

2. *(Optional)* If the station has a receipt printer, click **Print Pick List** for whoever collects the items.

   <Result>The receipt printer prints a **PICK LIST** of the items not yet delivered.</Result>

3. Tick each item you hand over, then click **Mark as Delivered**.

   <Result>The items are marked **(Delivered)**.</Result>

To undo a delivery, use **Undo Delivery** on the item in the order's page; see [Orders](../orders/orders.md).
