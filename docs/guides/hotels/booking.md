---
sidebar_position: 2
hide_table_of_contents: true
textbook: true
---

# What attendees see when booking

This guide walks through the hotel pages your attendees use: the list of blocks, entering one, getting a booking link, and finding and managing their reservation. Follow it with a test attendee account to see each step as they do.

:::caution[Before you start]
Hotel booking is off until ConCat turns it on for your convention. The switch is a setting only ConCat can change: contact ConCat support to ask for it. It also needs a working **Passkey** or **MeetingMax** connection, set up in [Hotel management](./hotel-management.md), section 2. Without both, attendees have no hotel pages at all.
:::

:::info[In this guide]
The hotel page (section 1), block cards and their states (section 2), entering a block (section 3), booking a room (section 4), and finding and managing a reservation (section 5).
:::

## The hotel page

<Sidenote title="See it as attendees do">
Use a test account without staff roles, in a private browser window. Give it the registration, roles or products your block asks for.
</Sidenote>

1. Log in as a test attendee and click **Hotel reservations** in the homepage sidebar.

   <Result>The **Hotel reservations** page opens. It has a **My reservation** section, with a **Find my reservation** button, and an **Active blocks** section.</Result>

2. Look under **My reservation** before the attendee has booked.

   <Result>It says *You don't yet have a reservation.*, and suggests **Find my reservation** for a booking made elsewhere or as an additional guest.</Result>

3. Look under **Active blocks**.

   <Result>A card is shown for each block that is **Ready**, not finished, and visible to this attendee. With none, it says **No blocks available** and *Please check back later and keep an eye on the event's social media channels for updates.*</Result>

A block appears only if its **Visibility** is **Always Visible**, or **Eligible Only** and the attendee may enter it. Blocks the attendee may enter are listed first.

While **Open Hotels** is off (see [Hotel management](./hotel-management.md), section 2), **Active blocks** is replaced by *Hotel Reservations for* your convention's name *are not open at this time.* and *Reservations are not being accepted at this time.*, followed by your **Hotel Closed Message**, if you wrote one.

:::note[Automatic entry]
Opening the hotel page also enters the attendee into any block with **Force Entry** whose criteria they meet. They don't get a confirmation email for it.
:::

## Block cards and their states

Each card has a subtitle, **Random draw** or **First come, first served**, and may carry a **Private block** badge (visible only to some attendees) or an **Automatic entry** badge. **Show details** opens the description and the **Entry period** and **Booking period** dates; **Hide details** closes them. If you turned on **Show Room Availability**, the card has a **View room availability** button.

The **Status** badge on the card tells the attendee where they stand, as Table 2.1 shows.

<TableFigure title="Block card states">

| Badge | Text on the card | When |
| --- | --- | --- |
| **Not eligible** | *You are not eligible to enter this block.* | The attendee doesn't meet the block's requirements and hasn't entered. |
| **Not yet open** | **Entries not yet open**: *Entries will open on* the date. | Before the entry period. A first-come block shows this until the booking period. |
| **Entries open** | **Accepting entries**, with an **Enter block** button. | The attendee may enter now. |
| **Entered** | **Entry received**, with a **View my entry** button. After a draw's entry period: **Entry period has ended**, *Results will be available* on the booking start date. | The attendee has entered. |
| **Ready for booking** (draw) or **Book now** (first come) | **You're ready to book!**, with a **Book a room** button. | The attendee has a booking link. See section 4. |
| **Not selected** | *Sorry, but you were not randomly selected to be able to book in this block.* | The draw is over and the attendee wasn't picked. |
| **Block closed** | **Entries are closed**: *You did not enter this block and entries have now closed.* | The attendee didn't enter in time. |

</TableFigure>

### Room availability

1. On a block card, click **View room availability**.

   <Result>A **Hotel availability** page opens, saying *Availability is updated every 30 minutes and may not reflect real-time availability.* Each hotel shows **Good availability**, **Limited availability** or **Low availability**.</Result>

2. Click **Show breakdown** on a hotel.

   <Result>Each night is marked **Available**, **Low stock** or **Sold out**. **Hide breakdown** closes the list.</Result>

## Enter a block

<Sidenote title="The policy">
The text attendees agree to is your **Hotel Reservation Policy**, on the **Terms** tab of **Housekeeping › System › Settings**.
</Sidenote>

1. On a card showing **Entries open**, click **Enter block**.

   <Result>The block's page opens, titled **Hotel—** and the block's name. A timeline shows **Accepting entries**, **Entries close**, **Booking period starts** and **Booking period ends**, with a **Current stage** marker. Below it: *You are eligible to enter this block!*, and an **Enter block** card explaining how the draw or the queue works, followed by your hotel reservation policy.</Result>

2. Tick **I have read and agree to the hotel reservation policy.**

   <Result>The **Enter block** button at the bottom of the card becomes active.</Result>

3. Click **Enter block**.

   <Result>A *You have successfully entered this block.* message appears and the page shows **You've entered this block!** A confirmation email is sent: *Hotel Raffle Entry Confirmation* for a draw, *Hotel Entry Confirmation* for a first-come block.</Result>

For a draw, the page then says **Entry received** with the entry's date, and how long a winner will have to book. For a first-come block during the booking period, it says the page will refresh when the link is ready, and counts down: *Your queue status will automatically refresh in 30 seconds.*

### Leave a block

1. *(Optional)* On the block's page, under **Leave block**, click **Leave block**.

   <Result>A *You have successfully withdrawn your entry from this wave.* message appears. There's no confirmation dialog.</Result>

**Leave block** is shown only while the block still takes entries, and never on an automatic-entry block.

If the attendee isn't eligible, the page says **Not eligible to enter** and *You currently do not meet the criteria to enter this block.* If entries are closed, it says **Block closed** and *This block is currently closed for new entries at this time.* On an automatic-entry block, it shows **Automatic entries** instead of the **Enter block** card.

## Book a room

<Sidenote title="Draw timing">
The draw runs a day before the booking period. Winners get their link by email when the booking period starts.
</Sidenote>

When an attendee is picked in a draw, or reaches the front of a first-come queue, ConCat makes their personal booking link.

1. On the hotel page, look at the block's card once the booking period has started.

   <Result>The badge reads **Ready for booking** (draw) or **Book now** (first come). The card says **You're ready to book!** and *You have until* the booking deadline *to book your room.*, with a **Book a room** button and a copy button. While the link is being made, it says **Processing reservation** and refreshes itself every 30 seconds.</Result>

2. *(Optional)* Click the copy button.

   <Result>A *Booking link copied to clipboard!* message appears.</Result>

3. Open the block's page.

   <Result>It says *Your entry has been processed and your unique reservation link is ready!* (first come) or *Congratulations, you've been randomly selected to book a room!* (draw), then **You're ready to book!**, an **Important** note not to share the link, and a **Proceed to booking platform** button.</Result>

4. Click **Proceed to booking platform** and book the room in Passkey or MeetingMax.

   <Result>The provider's booking page opens with the attendee's details filled in. Once the booking reaches ConCat, the block's page says **Booking completed!** with the reservation number, and a **Go to my reservation** button.</Result>

After the link has been used, the card says **Reservation link used** and points to **My reservation**. If a reservation was canceled and the attendee is still eligible, the block's page offers **Re-enter block** to ask for a new link. You can also give a new link yourself with **Reissue Link** (see [Hotel management](./hotel-management.md), section 7).

## Find and manage a reservation

### My reservation

Once the booking has synced, it's listed under **My reservation** on the hotel page.

1. Look at the reservation's card under **My reservation**.

   <Result>The card shows the hotel, the dates and the number of nights, and **Status**: **Received**, **Confirmed**, **Waitlisted**, **Cancelled** or **No Show**. It also shows **Reservation #**, **Primary guest** and **Guests**. The primary guest has a **Manage reservation** button; other guests see an **Additional guest** badge instead.</Result>

2. As the primary guest, click **Manage reservation**.

   <Result>The reservation page opens, titled **Reservation #** and the number. It shows **Reservation information** (hotel, room type, guests, nights, check-in and check-out), **Rate breakdown**, **Room total** and **Guests**, then your **Event hotel reservation policy** and the provider's **Reservation agreements**. A **Back to hotel reservations** button returns to the hotel page.</Result>

3. Click **Update / Cancel reservation**.

   <Result>The attendee is taken to Passkey or MeetingMax to change or cancel the booking. Changes come back to ConCat on the next sync.</Result>

**Update / Cancel reservation** is offered only while **Open Hotels** is on. Otherwise the page says *Modifications to existing reservations are no longer being accepted.* A canceled reservation says *This reservation has been canceled and cannot be modified.* Guests can't be added or removed in ConCat; that's done with the provider.

Text you write as **Hotel Reservation Additional Info**, on the **Terms** tab, is shown at the top of the reservation page.

### Find a reservation made elsewhere

An attendee who booked directly with the hotel, or who is an extra guest on someone else's booking, can link the reservation to their account.

1. On the hotel page, click **Find my reservation**.

   <Result>A **Find my reservation** dialog opens. It warns that the guest name on the reservation must match the name under **Personal details**, and has a **Reservation ID** field and a **Find reservation** button.</Result>

2. Enter the reservation number and click **Find reservation**.

   <Result>*Your reservation has been found and linked to your account!* appears, and the reservation is listed under **My reservation**. If it isn't found: *We could not find a reservation matching the provided reservation ID.*</Result>

Name matching ignores capital letters, but not spelling: *alex smith* matches *Alex Smith*, *Alexander Smith* doesn't. Linking a reservation as its primary guest withdraws the attendee's other entries that haven't been picked.
