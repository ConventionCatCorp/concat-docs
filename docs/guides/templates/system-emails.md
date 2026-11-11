---
sidebar_position: 3
hide_table_of_contents: true
textbook: true
---

# Emails ConCat sends

This is a reference list of the 33 emails ConCat sends for your convention: when each is sent, who gets it, and whether you can turn it off. To change an email's wording or turn it off, see [Email Template Overrides](./templates.md), section 1.

:::info[In this guide]
How to read this list (section 1), then the emails for accounts (section 2), orders and tickets (section 3), refunds (section 4), volunteers and staff (section 5), dealers (section 6), administration (section 7) and hotels (section 8).
:::

## How to read this list

<Sidenote title="Global admins">
Some emails go to your global admins: everyone with the *admin* role for all conventions, rather than for one.
</Sidenote>

Each table gives the template's name, as listed on **System › Settings › Email Settings**, with its default subject below it. **Can be turned off** says whether you can disable the template with an override. Templates marked **No** are required and can only be reworded.

- **Subject:** every subject starts with your **Notification Prefix** and a dash, except the hotel raffle results.
- **Sender:** each section says which contact address its emails come from. The addresses are set in [Sending domain, senders and contact addresses](./email-settings.md), section 3.
- **Who receives it:** an email to a person is only sent if their email address is confirmed and they aren't banned from registration. Password reset, sign-in link, account confirmation, account migration, email-change request, refund, hotel entry and hotel guest-removed emails are sent regardless.
- **Sub-accounts:** an email for a sub-account without its own address goes to the account owner.
- **Language:** emails aren't translated; they're sent as written.

## Accounts and sign-in

These emails come from your **Registration Email** address.

<TableFigure title="Account emails">

| Template | Sent when | Sent to | Can be turned off |
| --- | --- | --- | --- |
| `register` <small>Account Creation Confirmation</small> | Someone creates an account, or asks for a new confirmation email. Also when staff create an account with **Send the user an account confirmation email.** ticked. | The new account | No <small>Locked unless ConCat enables editing</small> |
| `emailLogin` <small>Your Login Link</small> | Someone asks for a one-time sign-in link instead of using their password. | The person | No |
| `passwordReset` <small>Password Reset</small> | Someone asks to reset their password, or staff send them a password reset email. | The person | No |
| `passwordChange` <small>Password Changed</small> | Someone changes their password. | The person | No |
| `requestChangeEmail` <small>Request email change</small> | Someone changes their email address. It holds the link that confirms the change. | The new address | No |
| `emailChange` <small>E-Mail Address Updated</small> | The new email address is confirmed. | The new and the old address | No |
| `migrationConfirmation` <small>Account Migration Confirmation</small> | An account owner asks to turn a sub-account into a full account with its own email. | The sub-account's new address | No |

</TableFigure>

## Orders, tickets and registrations

These emails come from your **Registration Email** address.

<TableFigure title="Order emails">

| Template | Sent when | Sent to | Can be turned off |
| --- | --- | --- | --- |
| `paymentSuccess` <small>Order #*n* Payment Successful</small> | An order is completed with at least one item that costs more than nothing. Staff can also resend it from the order. | The order's owner | No |
| `ticketIssued` <small>Your Event Ticket for *product*</small> | An order is completed: one email for each ticketed product in it. | The buyer | Yes |
| `registrationQR` <small>Registration Confirmation for *name*</small> | A badge is paid for (not an upgrade), when **Enable Registration QR Codes** is on in **Registration › Settings**. | The registrant | Yes |
| `forcedRegistration` <small>Registration Created</small> | Staff create a registration for someone. | The person | Yes |
| `disputeCreated` <small>Order #*n* - Payment Dispute Opened</small> | A card payment is disputed in Stripe. | Global admins | No |

</TableFigure>

## Refunds

These emails come from your **Registration Email** address.

<TableFigure title="Refund emails">

| Template | Sent when | Sent to | Can be turned off |
| --- | --- | --- | --- |
| `refundRequested` <small>Order #*n* - New Refund Request</small> | An attendee requests a refund. | The order's owner, and your **Registration Email** address | No |
| `refundCompleted` <small>Refund Request Approved for Order #*n*</small> | Staff refund an order. | The order's owner | No |
| `refundDenied` <small>Refund Request Denied for Order #*n*</small> | Staff deny a refund request. | The order's owner | No |

</TableFigure>

## Volunteers and staff

These emails are only sent while **Enable Volunteer Emails** is on (see [Volunteer settings and form](../volunteers/settings.md), section 1). They come from your **HR Email** address, except `undoAdmin`, which comes from **Registration Email**.

<TableFigure title="Volunteer emails">

| Template | Sent when | Sent to | Can be turned off |
| --- | --- | --- | --- |
| `volunteerConfirm` <small>Volunteer Confirmation</small> | A volunteer submits or changes their own application. | The volunteer | No <small>Stops when **Enable Volunteer Emails** is off</small> |
| `volunteerAssignedToVolunteer` <small>Volunteer Assignment: *department*</small> | Staff assign a volunteer to a department. | The volunteer | Yes |
| `volunteerAssignedToLead` <small>New Volunteer Assigned</small> | Staff assign a volunteer to a department. | The department's email address and each of its leads | Yes |
| `undoAdmin` <small>Staff status have been removed</small> | Staff use **Remove Staff** on a volunteer. | The person | Yes |

</TableFigure>

## Dealers

This email comes from your **Dealers Email** address.

<TableFigure title="Dealer emails">

| Template | Sent when | Sent to | Can be turned off |
| --- | --- | --- | --- |
| `dealerAssistant` <small>Dealer Assistant Confirmation</small> | A dealer adds an assistant by username. | The assistant | No |

</TableFigure>

## Administration

These emails come from your **HR Email** address, except `registerNewReview` (from **Registration Email**) and `massEmail` (from the **From Address** chosen when sending).

<TableFigure title="Administration emails">

| Template | Sent when | Sent to | Can be turned off |
| --- | --- | --- | --- |
| `registerNewReview` <small>Registration Requires Review</small> | A new account needs manual review, for example because it looks like a banned person's. See [User Notes](../usernotes/usernotes.md). | Your **Registration Email** address | Yes |
| `exportRequest` <small>Data Export Request</small> | An admin requests access to personal data in exports. | Global admins | No |
| `exportRequestApproved` <small>Data export request approved</small> | Another admin approves the request. | Global admins | No |
| `exportRequestRejected` <small>Data export request rejected</small> | Another admin rejects the request. | Global admins | Yes |
| `exportRequestDeleted` <small>Data export request deleted</small> | The request is deleted. | Global admins | Yes |
| `clearPiiRequest` <small>PII Clear Requested</small> | Someone requests that personal data be cleared from the accounts that asked for it. | Global admins | No |
| `massEmail` <small>The subject staff write</small> | Staff send a mass email. This template is the frame around their message. | The recipients staff choose | No |

</TableFigure>

## Hotels

Hotel booking is turned on by ConCat. These emails come from the `hotel` mailbox at your sending domain, which can't be renamed.

<TableFigure title="Hotel emails">

| Template | Sent when | Sent to | Can be turned off |
| --- | --- | --- | --- |
| `hotelRaffleConfirmation` <small>Hotel Raffle Entry Confirmation</small> | An attendee enters a hotel room raffle. | The attendee | No |
| `hotelFCFSConfirmation` <small>Hotel Entry Confirmation</small> | An attendee enters a first-come, first-served room pool. | The attendee | No |
| `hotelRaffleWinner` <small>Hotel Raffle Winner</small> | Booking opens for a hotel block: one email for each selected entry with a booking link. | The attendee | No |
| `hotelRaffleLoser` <small>Hotel Raffle Not a Winner</small> | Booking opens for a raffle block: one email for each entry that wasn't selected. | The attendee | Yes |
| `hotelGuestRemoved` <small>Hotel Reservation Update: Guest Removed</small> | A sync with the hotel's booking system removes a guest from a reservation. | The removed guest | Yes |
| `hotelGroupOpen` <small>Reservation Group Open</small> | Not sent at present. | — | No |

</TableFigure>
