---
sidebar_position: 1
hide_table_of_contents: true
textbook: true
---

# Hotel management

This guide connects ConCat to your hotel booking partner and sets up the room blocks attendees enter to get a booking link. It also shows where to follow entries and reservations, and how to fix one person's booking.

:::caution[Before you start]
Hotel booking is off until ConCat turns it on for your convention. The switch is a setting only ConCat can change: contact ConCat support to ask for it. Until then, nothing in this guide appears in Housekeeping.

Hotel booking also needs a **Passkey** or **MeetingMax** account for your event. ConCat doesn't sell rooms itself: it hands attendees a personal link to book in Passkey or MeetingMax, and reads the bookings back.
:::

:::info[In this guide]
How hotel booking works (section 1), connecting Passkey or MeetingMax and opening hotels (section 2), the dashboard and room inventory (section 3), creating a block (section 4), editing a block (section 5), reviewing a block's entries (section 6), and reservations and one person's hotel entry (section 7).
:::

## How hotel booking works

<Sidenote title="Who can do this">
Hotel pages need `hotel:view`. Changing settings, editing blocks and deleting entries need `hotel:manage`. The default **hotel** and **admin** roles have both.
</Sidenote>

Your convention has one *integration*: the link to your Passkey or MeetingMax event. ConCat reads your hotels, room types and nightly availability from it, so you don't type them in.

You release rooms in *blocks*. Housekeeping calls them **Release Groups**; attendees see the word *block*. Each block has a type:

- **Random Draw**: attendees enter during an entry period. ConCat then picks the winners, up to the number you set, and gives each a booking link.
- **First Come First Serve**: attendees join a queue, and booking links go out in the order they entered.

An attendee follows their link to Passkey or MeetingMax and books there. The integration then reports the reservation back to ConCat, where both you and the attendee can see it. What attendees see is in [What attendees see when booking](./booking.md).

A block moves through the stages in Table 1.1, set by its dates.

<TableFigure title="Block stages">

| Stage | When |
| --- | --- |
| **Pre Entry** | Before **Entry Start At**. |
| **Entry period** | From **Entry Start At** to **Entry End At**. Random draws take entries only now. |
| **Prerelease Ready** | After the entry period, before **Release Start At**. The draw runs in this stage. |
| **Release Period** | From **Release Start At** to **Release End At**: the booking period. Selected attendees book; a first-come block also takes entries. |
| **Finished** | After **Release End At**. Attendees no longer see the block. |

</TableFigure>

## Connect Passkey or MeetingMax and open hotels

<Sidenote title="Settings permission">
The **Hotels** tab also needs `system:settings:update`, which every System › Settings tab needs.
</Sidenote>

Have your Passkey event ID, or your MeetingMax event ID, API key and system identifier, ready before you start.

1. Go to **Housekeeping › System › Settings** and click the **Hotels** tab.

   <Result>A **Hotel Settings** card shows an **Open Hotels** checkbox and a **Save** button. Below it, **No hotel integration has been configured yet.** is followed by **Connect to Passkey** and **Connect to MeetingMax** buttons.</Result>

2. Click **Connect to Passkey** or **Connect to MeetingMax**, whichever your event uses.

   <Result>A form headed **Connect to Passkey** (or **Connect to MeetingMax**) opens. Both have **Name** and an **Allow Group Bookings** checkbox. Passkey adds **Passkey Event ID**; MeetingMax adds **MeetingMax Event ID**, **MeetingMax API Key** and **MeetingMax System Identifier**.</Result>

3. Enter a **Name** for the connection and the event details from your provider, then click **Save**.

   <Result>A **Save Callback URL** dialog opens. It warns *This is the only time this URL will be shown. This is important for your Passkey configuration.*, and shows a web address ending in `/api/hotel/gateways/passkey/` and a code, with a copy button.</Result>

4. Copy the address and keep it for your Passkey configuration, then click **Close**.

   <Result>A **Hotel Integration Management** section lists the connection: its name, a **Passkey** or **MeetingMax** badge, its sync status, and **Disable** and **Delete** buttons.</Result>

5. When you're ready for attendees to book, tick **Open Hotels** in the **Hotel Settings** card and click **Save**.

   <Result>A **Hotel settings saved** message appears.</Result>

**Open Hotels** opens or closes hotel reservations as a whole, whatever your blocks' dates say. While it's off, attendees see a closed notice instead of the blocks. You can add your own wording under that notice: it's the **Hotel Closed Message** policy on the **Terms** tab (see [Convention setup](../quickstart/convention-setup.md), section 3). The same tab holds the **Hotel Reservation Policy**, which attendees must agree to before they enter a block.

<TableFigure title="Sync statuses">

| Status | Meaning |
| --- | --- |
| **Awaiting first sync** | Connected, but ConCat hasn't read from the provider yet. |
| **Syncing** | A sync is running. |
| **Synchronized** | The last sync worked. |
| **Sync error** | The last sync failed. Check the event details you entered. |
| **Disconnected** | ConCat can't reach the provider. |

</TableFigure>

Click **Refresh** to update the status. To pause hotel booking, click **Disable** and confirm: attendees no longer see the hotel pages and syncing stops, but blocks and reservations are kept. **Enable** turns it back on.

:::caution[Watch out]
**Delete** removes the connection for good, and works only before anything has synced. Once hotels, reservations or blocks exist, use **Disable** instead. A convention can have only one connection.
:::

## The dashboard and room inventory

1. Go to **Housekeeping › Attendees › Hotel Management** (for the module menu, see [Start here](../quickstart/start-here.md), section 2). The item is under *Module Management* in the sidebar.

   <Result>The **Hotel Management** page opens on its **Home** tab. The other tabs are **Hotels**, **Release Groups** and **Reservations**. **Home** shows **Dashboard**, with the cards **Total hotels**, **Total rooms**, **Total reservations**, **Total blocks** and **Total block entries**.</Result>

2. Click the **Hotels** tab.

   <Result>**List of Hotels** shows a card for each hotel, with **Visible:** **Yes** or **No**, its address and **Phone**. Under **Rooms**, each room type shows its **Max Occupancy** and a table of **Count**, **Rate**, **Available On** and **Group ID**, one row per night. A sold-out night's count is red.</Result>

The hotels, rooms and nightly counts come from Passkey or MeetingMax, so you can't edit them here. Change them with your provider; the next sync brings the change in.

## Create a block

<Sidenote title="When things happen">
A day before **Release Start At**, ConCat draws the winners (Random Draw) or starts making booking links (First Come First Serve). At **Release Start At** it emails the links.
</Sidenote>

1. Click the **Release Groups** tab.

   <Result>A **Create Release Group** button is shown above a card for each block. A card shows the block's name, its display name in brackets, its description and its current stage.</Result>

2. Click **Create Release Group**.

   <Result>The **Create Release Group** form opens, with a **Back** button. **Hotel Integration** shows the name of your connection.</Result>

3. Fill in the fields in Table 4.1, then click **Submit**.

   <Result>A **Successfully created release group** message appears and the **Release Groups** tab opens. The new block's card has two more badges: **Create links task scheduled for:** and **Send emails task scheduled for:**, each with a date and time.</Result>

4. When the block is ready for attendees, edit it (section 5) and set **Status** to **Ready**.

   <Result>A **Successfully updated release group** message appears. Attendees who can see the block now find it under **Active blocks** on their hotel page.</Result>

If no connection exists, the form says *This convention does not have a hotel integration configured yet. Configure one in settings before creating a release group.* and **Submit** is greyed out. Do section 2 first.

<TableFigure title="Release group fields">

| Field | What it does |
| --- | --- |
| **Release Group Name** | Required. Your name for the block. |
| **Display Name** | The name attendees see. If it's empty, they see **Release Group Name**. |
| **Description** | Shown to attendees on the block's card. |
| **Status** | **Draft** while you prepare it; **Ready** to show it. Attendees never see a **Draft** block. |
| **Type** | **Random Draw** or **First Come First Serve**. <small>You can't change it once the block is created.</small> |
| **Number of Winners** | Random Draw only. At most this many entrants are picked. Set it at or above the number of entries to make every entrant a winner. |
| **Entry Start At**, **Entry End At** | Random Draw only. When entries open and close. |
| **Release Start At**, **Release End At** | The booking period. Selected attendees must book before **Release End At**. |
| **Validity Period** | A required number. Leave it at 0. |
| **Require Registration** | **Required**: the attendee must be registered. **Required Paid**: registered and paid (the default). **Hidden**: no registration needed. |
| **Force Entry** | **None**, or **By Product**, **By Role**, **By Role and Product**, **By Role or Product**: enters everyone who matches, without them opting in. <small>On a Random Draw it only enters eligible attendees during the entry period.</small> |
| **Require Not Won** | Leaves out anyone already picked, with a booking, in another block. |
| **Show Room Availability** | Adds a **View room availability** button to the block for attendees. |
| **Visibility** | **Hidden**: attendees don't see it on their hotel page. **Always Visible**: everyone sees it. **Eligible Only**: only attendees who may enter see it. |
| **Restrict to Roles**, **Restrict to Products** | Only people with one of these roles, or with one of these products, may enter. Leave both empty to open the block to all. |
| **Meeting Max Group Code** | MeetingMax only. The MeetingMax group the rooms belong to. Leave it blank for the main block if it has no group code. |
| **Passkey Attendee / Access Code** | Passkey only. The access code or attendee code your rooms use in Passkey. One code per block. |

</TableFigure>

:::note[Who may enter]
An attendee may enter when they meet **Require Registration** and **Require Not Won**, and, if you chose roles or products, have one of them.
:::

## Edit a block

1. On the **Release Groups** tab, click the edit button (<MaterialIcon name="edit" />) on the block's card.

   <Result>The **Update Release Group** form opens with the block's values. **Type** is greyed out.</Result>

2. Change the fields you need, then click **Submit**.

   <Result>A **Successfully updated release group** message appears and the **Release Groups** tab opens.</Result>

If you move **Release Start At**, the two scheduled tasks move with it, as long as they haven't run yet.

## Review a block's entries

1. On the block's card, click **View Details**.

   <Result>The block's page opens. A **Group Information** card shows **Group ID**, **Name**, **Display Name**, **Description**, **Type**, **Show room availability** and **Stage**. **Release Entry Statistics** counts entries and reservations by status. **Release Entries** lists the entries.</Result>

2. Look over the **Release Entries** table.

   <Result>Each row shows **User ID**, **User** (a link to the profile), **Selected?**, **Notified?** and **Reservation**: a **View Reservation** button, or **No Reservation**. A search box filters the rows.</Result>

3. *(Optional: remove an entry)* Click the delete button (<MaterialIcon name="delete" />) in the entry's **Actions** column, then click **Delete** in the **Delete Entry** dialog.

   <Result>The entry is removed from the table.</Result>

Deleting an entry needs `hotel:manage`.

## Reservations and one person's hotel entry

### Reservations

1. Click the **Reservations** tab.

   <Result>A card headed with the number of **Result(s)** lists every reservation, each with its number and status.</Result>

2. Click a reservation.

   <Result>The page **Summary for** the person's name opens. It has a card for each of their entries and reservations, headed **Release Group** and the block's name, or **Reservation** with a **No release group entry** badge. The reservation's status badge is at the top right of the card.</Result>

A reservation made outside ConCat, by someone with no ConCat account yet, isn't a link. You can also reach a person's summary from their profile: in the **Information** card, the **Hotel** row's edit button (<MaterialIcon name="edit" />) opens it. The **Hotel** row appears only when the person has a hotel entry or reservation. To open a profile, see [Finding attendees](../attendees/user-search.md).

<TableFigure title="Reservation statuses">

| Status | Meaning |
| --- | --- |
| **Creating** | ConCat is making the booking link with your provider. |
| **Pending** | The link is ready, but the attendee hasn't booked yet. |
| **New** | Booked, not yet confirmed by the hotel. |
| **Confirmed** | Booked and confirmed. |
| **Canceled** | Canceled, by the attendee or the event. |
| **Expired** | The link wasn't used in time. |
| **No show** | The guest didn't arrive. |
| **Waitlisted** | On the hotel's waiting list. |

</TableFigure>

### Fix one person's entry

<Sidenote title="Permission">
Both buttons need `hotel:manage`.
</Sidenote>

An entry's card has at most two buttons. **Delete** appears when the entry has no reservation yet, or only a **Pending** one. **Reissue Link** appears when the reservation was canceled by the attendee in Passkey or MeetingMax.

1. *(Optional: remove the entry)* Click **Delete**, then **Delete** in the **Delete Entry** dialog, which says *Are you sure you want to delete this entry? This will also delete the associated reservation.*

   <Result>An **Entry deleted** message appears, and the entry's card is gone.</Result>

2. *(Optional: give a new booking link)* On a canceled reservation, click **Reissue Link**, then **Reissue Link** in the dialog.

   <Result>A message says *A new booking link is being generated. It may take a few minutes to appear.*</Result>

:::caution[Watch out]
Deleting an entry also deletes its pending reservation and can't be undone. The attendee can enter the block again only while it still takes entries.
:::
