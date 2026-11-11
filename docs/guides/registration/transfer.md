---
sidebar_position: 10
hide_table_of_contents: true
textbook: true
---

# Transfer Registration

If an attendee can't come or no longer wants to, they can transfer their registration to another attendee instead of asking for a refund. This guide turns transfers on, shows how attendees transfer, and explains what can stop a transfer.

:::info[In this guide]
How transfers work (section 1), turning transfers on (section 2), transferring a registration as an attendee (section 3), and transfers by staff (section 4).
:::

## How transfers work

<Sidenote title="Permanent">
A transfer can't be undone by the attendee. The person who transferred no longer has a paid registration, and can't edit it.
</Sidenote>

A transfer moves the *payment* for a registration from one attendee to another. The recipient's own registration becomes paid, for the tier the sender paid for. The recipient keeps their own badge name and answers, and anything for the registration in their cart is removed.

A transfer works only when all of these are true:

- **Enable Registration Transfers** is ticked in **Housekeeping › Registration › Settings** (section 2).
- The sender's registration is paid.
- The recipient already has an account, with the email address the sender enters, and has registered but not yet paid.
- The sender's badge hasn't been printed.
- The registration wasn't bought with a discount that prevents transfers ([Discounts](../products/discounts.md)).

## Turn on transfers

1. Go to **Housekeeping › Registration › Settings**. In the **General** card, tick **Enable Registration Transfers**, then click **Save** in that card.

   <Result>A **Registration settings saved** message appears. Attendees with a paid registration now see **Transfer registration** in their card's menu.</Result>

## Transfer a registration as an attendee

Before the sender starts, the recipient must create an account and register, choosing any tier, but not pay.

1. As the sender, open **Attendance** in the homepage sidebar. On your card, open the menu on the arrow next to **Modify** and choose **Transfer registration**.

   <Result>A **Transfer registration** dialog says *You can only transfer a registration to an existing user with a verified email address.* and that the action is **PERMANENT** and can't be undone. It has the fields **Target Email** (*Email of Intended Recipient*) and **Enter Your Password**.</Result>

2. Enter the recipient's email address and your own password, then click **Transfer registration**.

   <Result>A **Registration has been transferred!** message appears. The sender's card no longer shows the status **Registered**.</Result>

3. As the recipient, open **Attendance**.

   <Result>The recipient's card shows the transferred tier and the status **Registered**.</Result>

<TableFigure title="When a transfer is refused">

| Message | Why |
| --- | --- |
| *This registration cannot be transferred, as the badge has already been printed.* <small>Shown in the dialog, in place of the fields.</small> | The sender's badge has been printed. |
| *This registration cannot be transferred, as it was purchased with a discount that prevents transfers.* <small>Shown in the dialog, in place of the fields.</small> | The registration is locked by its discount. |
| *Target user email not found.* | No account uses that email address. |
| *User has not yet registered.* | The recipient has an account but no registration. |
| *Target user registration already has a grant.* | The recipient has already paid for a registration. |
| *Incorrect password.* | The sender's password was wrong. |

</TableFigure>

Both blocked dialogs end with *If you have any questions, please contact the registration team.*

## Transfers by staff

Staff can also move a paid registration to another attendee from the attendee's profile in Housekeeping, with **Transfer** in the **Edit Registration** dialog. This needs the `registration:update` permission. It works even when **Enable Registration Transfers** is off and after the badge has been printed, but not for a registration locked by its discount, and the recipient must still have an unpaid registration. See the *Managing an attendee's registrations and orders* guide (Attendees section).
