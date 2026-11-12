---
sidebar_position: 2
hide_table_of_contents: true
textbook: true
---

# What attendees see when booking

See the hotel pages attendees use, from entering a block to managing their reservation. Follow along with a test attendee account.

:::caution[Before you start]
Hotel booking is off until ConCat support turns it on for your convention, and it needs a working **Passkey** or **MeetingMax** connection ([Hotel management](./hotel-management.md), section 2). Without both, attendees have no hotel pages.
:::

:::info[In this guide]
The hotel page (section 1), block cards and states (section 2), entering a block (section 3), booking a room (section 4), finding and managing a reservation (section 5).
:::

## The hotel page

<Sidenote title="See it as attendees do">
Use a test account without staff roles, in a private window, with the registration, roles or products your block asks for.
</Sidenote>

1. Log in as a test attendee and click **Hotel reservations** in the homepage sidebar.

   <Result>The **Hotel reservations** page opens with **My reservation** and **Active blocks**.</Result>

2. Look under **My reservation** before the attendee has booked.

   <Result>It says *You don't yet have a reservation.*</Result>

3. Look under **Active blocks**.

   <Result>A card appears for each **Ready**, unfinished block this attendee can see; with none, **No blocks available**.</Result>

A block is visible when its **Visibility** is **Always Visible**, or **Eligible Only** and the attendee may enter it. Blocks they may enter come first.

While **Open Hotels** is off ([Hotel management](./hotel-management.md), section 2), **Active blocks** is replaced by *Reservations are not being accepted at this time.* and your **Hotel Closed Message**, if you wrote one.

:::note[Automatic entry]
Opening the hotel page enters the attendee into any block with **Force Entry** whose criteria they meet, without a confirmation email.
:::

## Block cards and their states

Each card is subtitled **Random draw** or **First come, first served**, and may carry a **Private block** (shown only to some attendees) or **Automatic entry** badge. **Show details** reveals the description and dates. With **Show Room Availability** on, the card has **View room availability**.

The **Status** badge shows where the attendee stands (Table 2.1).

<TableFigure title="Block card states">

| Badge | Text on the card | When |
| --- | --- | --- |
| **Not eligible** | *You are not eligible to enter this block.* | Doesn't meet the requirements and hasn't entered. |
| **Not yet open** | **Entries not yet open** and the opening date. | Before the entry period; a first-come block until the booking period. |
| **Entries open** | **Accepting entries**, with **Enter block**. | May enter now. |
| **Entered** | **Entry received**, with **View my entry**. After a draw's entry period: **Entry period has ended**. | Has entered. |
| **Ready for booking** (draw) or **Book now** (first come) | **You're ready to book!**, with **Book a room**. | Has a booking link (section 4). |
| **Not selected** | *Sorry, but you were not randomly selected to be able to book in this block.* | The draw is over and the attendee wasn't picked. |
| **Block closed** | **Entries are closed**. | Didn't enter in time. |

</TableFigure>

### Room availability

1. On a block card, click **View room availability**.

   <Result>A **Hotel availability** page opens, marking each hotel **Good availability**, **Limited availability** or **Low availability**. It updates every 30 minutes.</Result>

2. Click **Show breakdown** on a hotel.

   <Result>Each night is marked **Available**, **Low stock** or **Sold out**.</Result>

## Enter a block

<Sidenote title="The policy">
Attendees agree to your **Hotel Reservation Policy**, on the **Terms** tab of **Housekeeping › System › Settings**.
</Sidenote>

1. On a card showing **Entries open**, click **Enter block**.

   <Result>The block's page opens, titled **Hotel—** and the block's name. It says *You are eligible to enter this block!* above an **Enter block** card with your hotel reservation policy.</Result>

2. Tick **I have read and agree to the hotel reservation policy.**

   <Result>The **Enter block** button becomes active.</Result>

3. Click **Enter block**.

   <Result>*You have successfully entered this block.* appears and the page shows **You've entered this block!** A confirmation email follows: *Hotel Raffle Entry Confirmation* (draw) or *Hotel Entry Confirmation* (first come).</Result>

A draw's page then shows **Entry received** and how long winners will have to book. A first-come block in its booking period refreshes every 30 seconds until the link is ready.

### Leave a block

1. *(Optional)* On the block's page, under **Leave block**, click **Leave block**.

   <Result>*You have successfully withdrawn your entry from this wave.* appears. There's no confirmation dialog.</Result>

**Leave block** shows only while the block still takes entries, and never on an automatic-entry block.

An ineligible attendee sees **Not eligible to enter**; after entries close, the page says **Block closed**; an automatic-entry block shows **Automatic entries** instead of the **Enter block** card.

## Book a room

<Sidenote title="Draw timing">
The draw runs a day before the booking period. Winners get their link by email when the booking period starts.
</Sidenote>

When an attendee is picked in a draw, or reaches the front of a first-come queue, ConCat makes their personal booking link.

1. Once the booking period has started, look at the block's card on the hotel page.

   <Result>The badge reads **Ready for booking** (draw) or **Book now** (first come), with the booking deadline, **Book a room** and a copy button. While the link is being made, the card says **Processing reservation** and refreshes every 30 seconds.</Result>

2. *(Optional)* Click the copy button.

   <Result>*Booking link copied to clipboard!* appears.</Result>

3. Open the block's page.

   <Result>It says *Congratulations, you've been randomly selected to book a room!* (draw) or *Your entry has been processed and your unique reservation link is ready!* (first come), with **Proceed to booking platform**.</Result>

4. Click **Proceed to booking platform** and book the room in Passkey or MeetingMax.

   <Result>The provider's booking page opens with the attendee's details filled in. Once the booking reaches ConCat, the block's page says **Booking completed!** with the reservation number.</Result>

Afterwards the card says **Reservation link used**. If the reservation is canceled and the attendee is still eligible, the block's page offers **Re-enter block** for a new link; staff can also use **Reissue Link** ([Hotel management](./hotel-management.md), section 7).

## Find and manage a reservation

### My reservation

A booking is listed under **My reservation** once it has synced.

1. Look at the reservation's card under **My reservation**.

   <Result>The card shows the hotel, dates, **Status** (**Received**, **Confirmed**, **Waitlisted**, **Cancelled** or **No Show**), **Reservation #** and guests. The primary guest has a **Manage reservation** button; other guests see an **Additional guest** badge.</Result>

2. As the primary guest, click **Manage reservation**.

   <Result>The reservation page opens, titled **Reservation #** and the number, with the room, rates, guests and policies.</Result>

3. Click **Update / Cancel reservation**.

   <Result>Passkey or MeetingMax opens to change or cancel the booking. Changes reach ConCat on the next sync.</Result>

**Update / Cancel reservation** appears only while **Open Hotels** is on; otherwise the page says *Modifications to existing reservations are no longer being accepted.* A canceled reservation says *This reservation has been canceled and cannot be modified.* Guests are added or removed with the provider, not in ConCat.

Your **Hotel Reservation Additional Info** text (**Terms** tab) shows at the top of the reservation page.

### Find a reservation made elsewhere

An attendee who booked directly with the hotel, or is an extra guest on someone else's booking, can link the reservation to their account.

1. On the hotel page, click **Find my reservation**.

   <Result>The **Find my reservation** dialog opens with a **Reservation ID** field and a warning that the reservation's guest name must match the name under **Personal details**.</Result>

2. Enter the reservation number and click **Find reservation**.

   <Result>*Your reservation has been found and linked to your account!* appears and the reservation is listed under **My reservation**. If it isn't found: *We could not find a reservation matching the provided reservation ID.*</Result>

Name matching ignores capitals, not spelling: *alex smith* matches *Alex Smith*; *Alexander Smith* doesn't. Linking a reservation as its primary guest withdraws the attendee's other entries that haven't been picked.
