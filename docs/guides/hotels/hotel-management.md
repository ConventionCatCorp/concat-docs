---
sidebar_position: 1
hide_table_of_contents: true
textbook: true
---

# Hotel management

Connect ConCat to Passkey or MeetingMax, set up the room blocks attendees enter for a booking link, and follow and fix entries and reservations.

:::caution[Before you start]
Hotel booking is off until ConCat support turns it on for your convention. Until then, nothing in this guide appears in Housekeeping.

You also need a **Passkey** or **MeetingMax** account for your event. ConCat doesn't sell rooms: it gives attendees a personal link to book in Passkey or MeetingMax, and reads the bookings back.
:::

:::info[In this guide]
How hotel booking works, connecting a provider and opening hotels, dashboard and room inventory, creating a block, editing a block, a block's entries, reservations and one person's entry.
:::

## How hotel booking works

<Sidenote title="Who can do this">
Hotel pages need `hotel:view`; changing settings, editing blocks and deleting entries need `hotel:manage`. The default **hotel** and **admin** roles have both.
</Sidenote>

Your convention has one *integration*: the link to your Passkey or MeetingMax event. ConCat reads hotels, room types and nightly availability from it.

You release rooms in *blocks*, which Housekeeping calls **Release Groups**. Each block has a type:

- **Random Draw**: attendees enter during an entry period; ConCat then picks up to the number of winners you set and gives each a booking link.
- **First Come First Serve**: attendees join a queue, and booking links go out in entry order.

For the attendee side, see [What attendees see when booking](./booking.md). A block's dates move it through the stages in Table 1.1.

<TableFigure title="Block stages">

| Stage | When |
| --- | --- |
| **Pre Entry** | Before **Entry Start At**. |
| **Entry period** | **Entry Start At** to **Entry End At**. Random draws take entries only now. |
| **Prerelease Ready** | After the entry period, before **Release Start At**. The draw runs now. |
| **Release Period** | **Release Start At** to **Release End At**: selected attendees book; a first-come block also takes entries. |
| **Finished** | After **Release End At**. Attendees no longer see the block. |

</TableFigure>

## Connect Passkey or MeetingMax and open hotels

<Sidenote title="Settings permission">
The **Hotels** tab also needs `system:settings:update`.
</Sidenote>

1. Go to **Housekeeping › System › Settings** and click the **Hotels** tab.

   <Result>The **Hotel Settings** card shows **Open Hotels**, with **Connect to Passkey** and **Connect to MeetingMax** below.</Result>

2. Click **Connect to Passkey** or **Connect to MeetingMax**, whichever your event uses.

   <Result>The **Connect to Passkey** (or **Connect to MeetingMax**) form opens.</Result>

3. Enter a **Name** and your event details (**Passkey Event ID**, or **MeetingMax Event ID**, **MeetingMax API Key** and **MeetingMax System Identifier**), then click **Save**.

   <Result>A **Save Callback URL** dialog shows, this one time only, an address ending in `/api/hotel/gateways/passkey/` and a code, with a copy button.</Result>

4. Copy the address for your Passkey configuration, then click **Close**.

   <Result>**Hotel Integration Management** lists the connection with its sync status and **Disable** and **Delete** buttons.</Result>

5. When you're ready for attendees to book, tick **Open Hotels** and click **Save**.

   <Result>A **Hotel settings saved** message appears.</Result>

**Open Hotels** opens or closes hotel booking as a whole, whatever the blocks' dates say. While it's off, attendees see a closed notice and your **Hotel Closed Message**, if you wrote one. That policy and the **Hotel Reservation Policy**, which attendees accept before entering a block, are on the **Terms** tab (see [Convention setup](../quickstart/convention-setup.md), section 3).

<TableFigure title="Sync statuses">

| Status | Meaning |
| --- | --- |
| **Awaiting first sync** | Connected; ConCat hasn't read from the provider yet. |
| **Syncing** | A sync is running. |
| **Synchronized** | The last sync worked. |
| **Sync error** | The last sync failed. Check the event details. |
| **Disconnected** | ConCat can't reach the provider. |

</TableFigure>

**Refresh** updates the status. **Disable** pauses hotel booking: attendees lose the hotel pages and syncing stops, but blocks and reservations are kept. **Enable** resumes it.

:::caution[Watch out]
**Delete** removes the connection for good and works only before anything has synced; after that, use **Disable**. A convention can have only one connection.
:::

## The dashboard and room inventory

1. Go to **Housekeeping › Attendees › Hotel Management**, under *Module Management* in the sidebar (see [Start here](../quickstart/start-here.md), section 2).

   <Result>**Hotel Management** opens on its **Home** tab, showing dashboard totals.</Result>

2. Click the **Hotels** tab.

   <Result>**List of Hotels** shows each hotel's room types, with a row per night of **Count**, **Rate**, **Available On** and **Group ID**. A sold-out night's count is red.</Result>

Hotels, rooms and counts come from your provider and can't be edited here. Change them there; the next sync brings the change in.

## Create a block

<Sidenote title="When things happen">
A day before **Release Start At**, ConCat draws the winners (Random Draw) or starts making booking links (First Come First Serve). At **Release Start At** it emails the links.
</Sidenote>

1. Click the **Release Groups** tab.

   <Result>A **Create Release Group** button sits above a card for each block.</Result>

2. Click **Create Release Group**.

   <Result>The **Create Release Group** form opens; **Hotel Integration** shows your connection's name.</Result>

3. Fill in the fields in Table 4.1, then click **Submit**.

   <Result>A **Successfully created release group** message appears. The new card shows **Create links task scheduled for:** and **Send emails task scheduled for:** with dates.</Result>

4. When the block is ready for attendees, edit it (section 5) and set **Status** to **Ready**.

   <Result>A **Successfully updated release group** message appears. Attendees who can see the block now find it under **Active blocks** on their hotel page.</Result>

Without a connection (section 2), the form shows a warning and **Submit** is greyed out.

<TableFigure title="Release group fields">

| Field | What it does |
| --- | --- |
| **Release Group Name** | Required. Your name for the block. |
| **Display Name** | The name attendees see; if empty, **Release Group Name**. |
| **Description** | Shown on the block's card. |
| **Status** | **Draft** (attendees never see it) or **Ready**. |
| **Type** | **Random Draw** or **First Come First Serve**. <small>Fixed once created.</small> |
| **Number of Winners** | Random Draw only. The most entrants picked; at or above the number of entries, everyone wins. |
| **Entry Start At**, **Entry End At** | Random Draw only. When entries open and close. |
| **Release Start At**, **Release End At** | The booking period. Selected attendees must book before **Release End At**. |
| **Validity Period** | Required. Leave it at 0. |
| **Require Registration** | **Required** (registered), **Required Paid** (registered and paid; the default) or **Hidden** (none needed). |
| **Force Entry** | **By Product**, **By Role**, **By Role and Product** or **By Role or Product** enters everyone who matches, without opting in; **None** doesn't. <small>On a Random Draw, only eligible attendees during the entry period.</small> |
| **Require Not Won** | Leaves out anyone already picked, with a booking, in another block. |
| **Show Room Availability** | Adds a **View room availability** button for attendees. |
| **Visibility** | **Hidden** (not on the hotel page), **Always Visible** (everyone) or **Eligible Only** (attendees who may enter). |
| **Restrict to Roles**, **Restrict to Products** | Only people with one of these roles or products may enter. Both empty: everyone. |
| **Meeting Max Group Code** | MeetingMax only. The rooms' group; blank for a main block with no group code. |
| **Passkey Attendee / Access Code** | Passkey only. Your rooms' access or attendee code, one per block. |

</TableFigure>

:::note[Who may enter]
An attendee may enter when they meet **Require Registration** and **Require Not Won** and, if you chose roles or products, have one of them.
:::

## Edit a block

1. On the **Release Groups** tab, click the edit button (<MaterialIcon name="edit" />) on the block's card.

   <Result>The **Update Release Group** form opens; **Type** is greyed out.</Result>

2. Change what you need, then click **Submit**.

   <Result>A **Successfully updated release group** message appears.</Result>

Moving **Release Start At** also moves the two scheduled tasks, if they haven't run yet.

## Review a block's entries

1. On the block's card, click **View Details**.

   <Result>The block's page opens with its details, entry statistics and the **Release Entries** table.</Result>

2. Look over the **Release Entries** table.

   <Result>Each row shows the **User**, **Selected?**, **Notified?** and **Reservation**. A search box filters the rows.</Result>

3. *(Optional: remove an entry)* Click the delete button (<MaterialIcon name="delete" />) in the entry's **Actions** column, then **Delete** in the **Delete Entry** dialog.

   <Result>The entry is removed from the table.</Result>

## Reservations and one person's hotel entry

### Reservations

1. Click the **Reservations** tab.

   <Result>A card headed with the number of **Result(s)** lists every reservation with its number and status.</Result>

2. Click a reservation.

   <Result>**Summary for** the person's name opens, with a card for each block entry, or a **Reservation** card with a **No release group entry** badge.</Result>

A reservation made outside ConCat by someone with no account isn't a link. You can also open a summary from the person's profile ([Finding attendees](../attendees/user-search.md)): the edit button (<MaterialIcon name="edit" />) on the **Hotel** row of the **Information** card, shown only when they have a hotel entry or reservation.

<TableFigure title="Reservation statuses">

| Status | Meaning |
| --- | --- |
| **Creating** | ConCat is making the booking link with your provider. |
| **Pending** | The link is ready; the attendee hasn't booked. |
| **New** | Booked, not yet confirmed by the hotel. |
| **Confirmed** | Booked and confirmed. |
| **Canceled** | Canceled by the attendee or the event. |
| **Expired** | The link wasn't used in time. |
| **No show** | The guest didn't arrive. |
| **Waitlisted** | On the hotel's waiting list. |

</TableFigure>

### Fix one person's entry

<Sidenote title="Permission">
Both buttons need `hotel:manage`.
</Sidenote>

An entry's card shows **Delete** while it has no reservation or only a **Pending** one, and **Reissue Link** when the attendee canceled in Passkey or MeetingMax.

1. *(Optional: remove the entry)* Click **Delete**, then **Delete** in the **Delete Entry** dialog.

   <Result>An **Entry deleted** message appears and the card is gone.</Result>

2. *(Optional: give a new booking link)* On a canceled reservation, click **Reissue Link**, then **Reissue Link** in the dialog.

   <Result>A message says *A new booking link is being generated. It may take a few minutes to appear.*</Result>

:::caution[Watch out]
Deleting an entry also deletes its pending reservation and can't be undone. The attendee can enter again only while the block still takes entries.
:::
