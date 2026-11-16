---
sidebar_position: 11
hide_table_of_contents: true
textbook: true
---

# Gatekeeping

Limit who can buy a product, such as a badge tier: attendees enter a **silo** instead of buying, and you choose who may buy.

:::info[In this guide]
How gatekeeping works, the list of silos, creating a silo, changing or deleting a silo, entrants, wording, running a draw, and what attendees see.
:::

## How gatekeeping works

<Sidenote title="Who can do this">
Needs `raffle:manage`, which only the default *admin* role has. Setting **Role override** also needs `system:permission:read`.
</Sidenote>

Attendees see the old name, raffle, but there's no random draw: you choose the winners yourself.

When an attendee registers for a gated tier, or clicks **Enter raffle** on a gated store product, they get a **ticket** in the silo, and nothing goes in their cart. Once you mark them as a winner, they can buy the product. A product can be in only one silo.

<TableFigure title="Ticket statuses">

| Status | Meaning |
| --- | --- |
| **Entered / Waiting** | Waiting for a draw. |
| **Winner** | Chosen in a draw: may buy the product. |
| **Redeemed** | Won, and bought the product with the ticket. |
| **Rescinded** | Revoked: can't buy the product or enter the silo again. |
| **Deleted** | Removed from the silo, but may enter again, for example in the next round. |

</TableFigure>

A silo's status shows next to **Silo Information**: **Open to Entries**, **Closed to Entries**, or **Recently Drawn** after a draw that closed it. Members of a **Role override** role, such as staff, skip the silo and buy directly, even when it's closed. In an **Overflow stock silo**, entrants become winners as soon as they enter and can buy while there's stock; once the product is out of stock, new entrants wait in the silo for later selection.

## The list of silos

1. Go to **Housekeeping › Store Management › Gatekeeping**.

   <Result>The **Gatekeeping** page shows a **Create New Silo** button and a card per silo with its name, ID and a **Manage Silo** button. The address ends in `/housekeeping/store/gatekeeping`.</Result>

## Create a silo

1. On **Gatekeeping**, click **Create New Silo**.

   <Result>The **Creating Silo** page opens with the cards **Silo Information**, **Associated Products** and **Role override**. **Allow new entries to the silo?** is ticked.</Result>

2. Enter a **Name** and, in **Associated Products**, select the products to gate. *(Optional)* Choose **Role override** roles or tick **Overflow stock silo**. Click **Create Silo**.

   <Result>A **Silo successfully created!!** message appears, and the page becomes **Editing Silo:** and the silo's name, with the tabs **Entrants**, **Wording** and **Run**.</Result>

If a product is already in another silo, *Product is already part of another silo.* appears and the silo isn't saved: remove the product from the other silo first.

## Change or delete a silo

1. On **Gatekeeping**, click **Manage Silo** on a silo.

   <Result>The **Editing Silo:** page opens, with **Update Silo** and **Delete Silo** under **Silo Information**.</Result>

2. Change the name, products, roles or checkboxes, then click **Update Silo**.

   <Result>A **Silo successfully updated!!** message appears.</Result>

3. To stop new entries, untick **Allow new entries to the silo?** and click **Update Silo**.

   <Result>The status changes to **Closed to Entries**.</Result>

4. To delete the silo, click **Delete Silo**, then **Delete Silo** in the dialog.

   <Result>An **Are you sure?** dialog warns *All ticket data will be lost.* After you confirm, a **Successfully deleted silo.** message appears and **Gatekeeping** opens.</Result>

## Entrants

1. On the silo's page, click the **Entrants** tab.

   <Result>Tickets are listed 15 per page, each with a status badge, below a **Search...** box and a status list set to **All status**.</Result>

2. *(Optional)* Choose a status in the status list, or type a name in **Search...**.

   <Result>Only matching tickets are listed. The status list uses the internal names `deleted`, `redeemed`, `rescinded`, `waiting` and `winner`.</Result>

3. To change one ticket, open its menu and choose an action from Table 5.1.

   <Result>A message confirms the change, such as *Marked Ticket #4 as a winner.*, and the ticket's badge changes.</Result>

<TableFigure title="Actions on one ticket">

| Action | The ticket becomes | Offered when the ticket is |
| --- | --- | --- |
| **Reset ticket to winner** | **Winner** | **Entered / Waiting** |
| **Set ticket to winner** | **Winner** | **Redeemed** |
| **Reset ticket** | **Entered / Waiting** | **Winner**, **Redeemed**, **Rescinded** or **Deleted** |
| **Revoke / Void ticket** | **Rescinded** | **Entered / Waiting** or **Winner** |

</TableFigure>

:::tip[The ticket number is an example]
The 4 in *Marked Ticket #4 as a winner.* is an example. The message shows the ticket's own number.
:::

## Wording

The **Wording** tab holds eight required texts (Table 6.1). The first two replace the cart message when an attendee enters the silo; the other six appear on their registration card.

<TableFigure title="The silo's wording">

| Field | Shown to the attendee |
| --- | --- |
| **Entry confirmation title** | In place of *Product added to cart!* when they enter the silo. <small>Default: *Entered into Raffle Draw!*</small> |
| **Entry confirmation body** | Below that title. Markdown is allowed. |
| **Not yet entered message** | Registered but not entered. |
| **Raffle open message** | Entered, and the silo is open. |
| **Raffle pending draw message** | Entered, and the silo is closed but not drawn. |
| **Entry lost message** | After a draw they didn't win. |
| **Entry winner message** | Once they're a winner. |
| **Entry rescinded message** | Once their ticket is rescinded. |

</TableFigure>

1. Click the **Wording** tab, change the texts, and click **Update Silo**.

   <Result>A **Silo successfully updated!!** message appears, and attendees see the new texts.</Result>

## Run a draw

<Sidenote title="Test first">
**Perform a test run (Don't save the results)** shows a draw's result without changing any tickets.
</Sidenote>

A draw marks the attendees you choose as winners and can also deal with earlier winners and everyone else who entered. Only attendees with a ticket in the silo can win.

1. On the silo's page, click the **Run** tab.

   <Result>The tab shows **Select users to win** and the draw options (Table 7.1). **Run Raffle Draw** is unavailable.</Result>

2. In **Select users to win**, choose the attendees who win.

   <Result>**Run Raffle Draw** becomes available.</Result>

3. Choose what happens to existing winners and non-winners (Table 7.1). *(Optional)* Untick **Close the raffle to new entries** to keep taking entries. Then click **Run Raffle Draw**.

   <Result>**Raffle Draw Complete!** (or **Test Run Draw Results**) shows **Number of Winners**, **Total Entries**, **Win Percentage** and **Winning User IDs**.</Result>

<TableFigure title="Options for a draw">

| Option | What it does |
| --- | --- |
| Existing winners: **Do Nothing** | Earlier winners stay winners and can still buy. |
| Existing winners: **Revoke existing wins** | Unredeemed winners are rescinded: they can't buy or enter again. |
| Existing winners: **Reset existing wins** | Unredeemed winners go back to waiting, to be drawn again. |
| Existing winners: **Delete existing wins** | Unredeemed winning tickets are deleted. |
| Non-winners: **Do Nothing** | Everyone not chosen keeps their ticket for later draws. |
| Non-winners: **Revoke tickets** | Everyone not chosen is rescinded and can't enter again. |
| Non-winners: **Delete tickets** | Everyone not chosen loses their ticket, but may enter again. |
| **Close the raffle to new entries** | After the draw, the silo is **Recently Drawn** and takes no more entries. |

</TableFigure>

:::tip[Several rounds]
Leave non-winners on **Do Nothing**, and untick **Close the raffle to new entries** to take entries between rounds.
:::

:::tip[Tell the winners]
ConCat doesn't notify winners. Send a [Mass email](../attendees/mass-email.md) to the silo's entrants.
:::

## What attendees see

### Gated badge tiers

1. As an attendee, start a registration, **Select** a gated tier, fill in the form and click **Register** ([How attendees register](./registering.md)).

   <Result>The **Review** step shows your **Entry confirmation title** and **Entry confirmation body**; nothing is added to the cart.</Result>

2. Open **Attendance**.

   <Result>The attendee's card shows the **Raffle open message**.</Result>

3. *(Optional, to leave the silo)* Open the menu on the card's arrow and choose **Delete registration**.

   <Result>The registration is deleted, and the ticket becomes **Deleted**. Once the silo is closed, or the ticket is a winner or rescinded, *This registration cannot be deleted. Please contact the registration team.* appears instead; staff can still delete it from the attendee's profile.</Result>

4. Mark the attendee as a winner (section 7). Then, as the attendee, open **Attendance**.

   <Result>The card shows the **Entry winner message**.</Result>

5. As the attendee, click **Modify**, then **Update Registration**.

   <Result>**Product added to cart!** appears, and the attendee can pay with **Complete registration**.</Result>

While a silo isn't open, its tiers show **Closed Raffle** instead of **Select**, except to winners and **Role override** members.

### Gated store products

1. As an attendee, open a gated product in the **Event store**.

   <Result>The page says *This is a raffled product which requires you to enter and win before it can be purchased.*, with an **Enter raffle** button.</Result>

2. Click **Enter raffle**.

   <Result>The page says *You're in the raffle for this product!*, with a **Leave raffle** button.</Result>

<TableFigure title="Messages on a gated store product">

| The attendee's ticket and the silo | Message |
| --- | --- |
| Winner or redeemed | *You have won in this raffle and are eligible to purchase this product!*, with the usual buy button |
| Rescinded | *Your ticket has been rescinded and you are ineligible to purchase this product at this time.* |
| Entered, silo closed | *You're in the raffle for this product!* and *The raffle is now closed to new entries and will be drawn soon.* |
| Entered, silo drawn | *Unfortunately, you didn't win in this raffle this time.* |
| Not entered, silo not open | *This raffled product is no longer accepting new entries.* |

</TableFigure>
