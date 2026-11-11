---
sidebar_position: 11
hide_table_of_contents: true
textbook: true
---

# Gatekeeping

Gatekeeping limits who can buy a product. You attach products, often a badge tier, to a **silo**. Attendees enter the silo instead of buying, and you then choose who may buy. Use it for events with limited space, or for a sponsor tier you offer only to some people.

:::info[In this guide]
How gatekeeping works (section 1), the list of silos (section 2), creating a silo (section 3), changing or deleting a silo (section 4), the entrants (section 5), the silo's wording (section 6), running a draw (section 7), and what attendees see (section 8).
:::

## How gatekeeping works

<Sidenote title="Who can do this">
Gatekeeping needs the `raffle:manage` permission (*Allows for managing raffles*), which only the default *admin* role has. Setting **Role override** also needs `system:permission:read`.
</Sidenote>

This feature used to be called **Raffles**, and attendees still see that word: **Enter raffle**, **Leave raffle**. Draws used to be random, with weights and ticket points. That's gone: you now pick the winners yourself with **Select users to win** (section 7), and ConCat doesn't email them.

When an attendee registers for a gated tier, or clicks **Enter raffle** on a gated store product, they get a **ticket** in the silo, and nothing goes in their cart. Once you mark them as a winner, they can buy the product. A product can be in only one silo.

<TableFigure title="Ticket statuses">

| Status | Meaning |
| --- | --- |
| **Entered / Waiting** | Entered, waiting for a draw. |
| **Winner** | Chosen in a draw: may buy the product. |
| **Redeemed** | Won and used the ticket to buy the product. |
| **Rescinded** | Revoked: can't buy the product, and can't enter the silo again. |
| **Deleted** | Removed from the silo, but may enter again, for example in the next round. |

</TableFigure>

A silo's status is shown next to **Silo Information**: **Open to Entries**, **Closed to Entries**, or **Recently Drawn** after a draw that closed it. Attendees with a **Role override** role, such as staff, skip the silo and can buy directly, even when it's closed. **Overflow stock silo** is described in the app as *When the product is out of stock, add users to the silo for later selection.* Its entrants are marked as winners as soon as they enter.

## The list of silos

1. Go to **Housekeeping › Store Management › Gatekeeping** (the module menu is explained in [Start here](../quickstart/start-here.md), section 2).

   <Result>The **Gatekeeping** page shows a **Create New Silo** button and a card for each silo, with its name, its ID and a **Manage Silo** button. The address ends in `/housekeeping/store/gatekeeping`.</Result>

## Create a silo

1. On **Gatekeeping**, click **Create New Silo**.

   <Result>The **Creating Silo** page opens with three cards: **Silo Information**, **Associated Products** and **Role override**. **Silo Information** has **Name**, a ticked **Allow new entries to the silo?** and **Overflow stock silo**.</Result>

2. Enter a **Name**. In **Associated Products**, search for and select the products to gate (*Search products by name or ID*). *(Optional)* In **Role override**, choose roles whose members bypass the silo, and tick **Overflow stock silo**. Then click **Create Silo**.

   <Result>A **Silo successfully created!!** message appears, and the page changes to **Editing Silo:** and the silo's name, with the tabs **Entrants**, **Wording** and **Run**.</Result>

If a product is already in another silo, the silo isn't saved and *Product is already part of another silo.* appears.

## Change or delete a silo

1. On **Gatekeeping**, click **Manage Silo** on a silo.

   <Result>The **Editing Silo:** page opens, with **Update Silo** and **Delete Silo** buttons under **Silo Information**.</Result>

2. Change the name, products, roles or checkboxes, then click **Update Silo**.

   <Result>A **Silo successfully updated!!** message appears.</Result>

3. To stop new entries, untick **Allow new entries to the silo?** and click **Update Silo**.

   <Result>The status changes to **Closed to Entries**.</Result>

4. To delete the silo, click **Delete Silo**, then **Delete Silo** in the dialog.

   <Result>An **Are you sure?** dialog says *Are you sure you want to delete this silo?* and *All ticket data will be lost.* After you confirm, a **Successfully deleted silo.** message appears and **Gatekeeping** opens.</Result>

## Entrants

1. On the silo's page, click the **Entrants** tab.

   <Result>The tickets are listed 15 to a page, each with the attendee's name (linked to their profile), their ID, a status badge and **Created at** with the date. A **Search...** box and a status list, set to **All status**, are above them.</Result>

2. *(Optional)* Choose a status in the status list, or type a name in **Search...**.

   <Result>Only matching tickets are listed. The status list shows the internal names `waiting`, `winner`, `redeemed`, `rescinded` and `deleted`.</Result>

3. To change one ticket, open its menu and choose an action from Table 5.1.

   <Result>A message confirms the change, such as *Marked Ticket #* and the number *as a winner.*, and the ticket's badge changes.</Result>

<TableFigure title="Actions on one ticket">

| Ticket is | Actions | Message |
| --- | --- | --- |
| **Entered / Waiting** | **Revoke / Void ticket**, **Reset ticket to winner** | *Rescinded Ticket #… for* the name, or *Marked Ticket #… as a winner.* |
| **Winner** | **Reset ticket**, **Revoke / Void ticket** | *Reset Ticket #… to Entered / Waiting.*, or as above |
| **Redeemed** | **Reset ticket**, **Set ticket to winner** | as above |
| **Rescinded**, **Deleted** | **Reset ticket** | *Reset Ticket #… to Entered / Waiting.* |

</TableFigure>

## Wording

The **Wording** tab holds the eight texts attendees see about the silo. Each one is required. Table 6.1 says where each appears.

<TableFigure title="The silo's wording">

| Field | Shown to the attendee |
| --- | --- |
| **Entry confirmation title** | In place of *Product added to cart!* when they enter the silo. <small>Default: *Entered into Raffle Draw!*</small> |
| **Entry confirmation body** | Below that title. Markdown is allowed. |
| **Not yet entered message** | On their registration card, when they've registered but aren't entered. |
| **Raffle open message** | On their card, while they're entered and the silo is open. |
| **Raffle pending draw message** | On their card, while they're entered and the silo is closed but not drawn. |
| **Entry lost message** | On their card, after a draw they didn't win. |
| **Entry winner message** | On their card, once they're a winner. |
| **Entry rescinded message** | On their card, once their ticket is rescinded. |

</TableFigure>

1. Click the **Wording** tab, change the texts, and click **Update Silo**.

   <Result>A **Silo successfully updated!!** message appears, and attendees see the new texts.</Result>

## Run a draw

<Sidenote title="Test first">
Tick **Perform a test run (Don't save the results)** to see the result of a draw without changing any tickets.
</Sidenote>

A draw marks the attendees you choose as winners and, at the same time, can deal with earlier winners and with everyone else who entered. Only attendees with a ticket in the silo become winners.

1. On the silo's page, click the **Run** tab.

   <Result>The tab shows **Select users to win**, **What should happen to existing winners?**, **What should happen to non-winners in this draw?**, a ticked **Close the raffle to new entries**, **Perform a test run (Don't save the results)**, and a **Run Raffle Draw** button, which is unavailable.</Result>

2. In **Select users to win**, choose the attendees who win.

   <Result>**Run Raffle Draw** becomes available.</Result>

3. Choose what happens to existing winners and to non-winners (Table 7.1). *(Optional)* Untick **Close the raffle to new entries** to keep taking entries after this draw. Then click **Run Raffle Draw**.

   <Result>*Running Raffle. This may take a few minutes...* is shown, then **Raffle Draw Complete!** (or **Test Run Draw Results**) with **Number of Winners**, **Total Entries**, **Win Percentage** and **Winning User IDs**, and a **Close** button.</Result>

<TableFigure title="Options for a draw">

| Option | What it does |
| --- | --- |
| Existing winners: **Do Nothing** | Earlier winners stay winners and can still buy. |
| Existing winners: **Revoke existing wins** | Unredeemed winners are rescinded: they can't buy or enter again. |
| Existing winners: **Reset existing wins** | Unredeemed winners go back to waiting, so they can be drawn again. |
| Existing winners: **Delete existing wins** | Unredeemed winning tickets are deleted. |
| Non-winners: **Do Nothing** | Everyone not chosen keeps their ticket for later draws. |
| Non-winners: **Revoke tickets** | Everyone not chosen is rescinded and can't enter again. |
| Non-winners: **Delete tickets** | Everyone not chosen loses their ticket, but may enter again. |
| **Close the raffle to new entries** | After the draw, the silo's status is **Recently Drawn** and it takes no more entries. |

</TableFigure>

:::tip
If you plan several rounds, leave non-winners on **Do Nothing**. To take new entries between rounds, untick **Close the raffle to new entries**.
:::

ConCat doesn't notify winners. Tell them yourself, for example with a mass email to the silo's entrants; see [Mass email](../attendees/mass-email.md).

## What attendees see

### Gated badge tiers

1. As an attendee, start a registration, **Select** a gated tier, fill in the form and click **Register** ([How attendees register](./registering.md)).

   <Result>The **Review** step shows your **Entry confirmation title** and **Entry confirmation body**, and nothing is added to the cart.</Result>

2. Open **Attendance**.

   <Result>The attendee's card shows the **Raffle open message** below the status.</Result>

3. *(Optional, to leave the silo)* Open the menu on the card's arrow and choose **Delete registration**.

   <Result>The registration is deleted, and the ticket's status becomes **Deleted**. If the ticket was rescinded, *This registration cannot be deleted. Please contact the registration team.* appears instead.</Result>

4. Mark the attendee as a winner (section 7). Then, as the attendee, open **Attendance**.

   <Result>The attendee's card shows the **Entry winner message**.</Result>

5. As the attendee, click **Modify**, then **Update Registration**.

   <Result>**Product added to cart!** appears, and the attendee can pay with **Complete registration**.</Result>

While a silo isn't open, its tiers show **Closed Raffle** instead of **Select**, except to winners and to members of a **Role override** role.

### Gated store products

1. As an attendee, open a gated product in the **Event store**.

   <Result>The page says *This is a raffled product which requires you to enter and win before it can be purchased.*, with an **Enter raffle** button.</Result>

2. Click **Enter raffle**.

   <Result>The page says *You're in the raffle for this product!* and *Once the draw takes place, you will be able to purchase this product if you win.*, with a **Leave raffle** button.</Result>

<TableFigure title="Messages on a gated store product">

| The attendee's ticket and the silo | Message |
| --- | --- |
| Winner or redeemed | *You have won in this raffle and are eligible to purchase this product!*, with the usual buy button |
| Rescinded | *Your ticket has been rescinded and you are ineligible to purchase this product at this time.* |
| Entered, silo closed | *You're in the raffle for this product!* and *The raffle is now closed to new entries and will be drawn soon.* |
| Entered, silo drawn | *Unfortunately, you didn't win in this raffle this time.* |
| Not entered, silo not open | *This raffled product is no longer accepting new entries.* |

</TableFigure>
