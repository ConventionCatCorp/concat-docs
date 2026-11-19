---
sidebar_position: 10
hide_table_of_contents: true
textbook: true
---

# Transfer Registration

Let attendees who can't come give their paid registration to another attendee instead of asking for a refund.

:::info[In this guide]
How transfers work, turning transfers on, transferring as an attendee, and transfers by staff.
:::

## How transfers work

A transfer moves the _payment_ for a registration to another attendee. The recipient's own registration becomes paid, for the sender's tier. They keep their badge name and answers, and anything for the registration in their cart is removed.

A transfer works only when:

- **Enable Registration Transfers** is ticked.
- The sender's registration is paid, and their badge hasn't been printed.
- The recipient has an account with the email address the sender enters, and has registered but not paid.
- The registration wasn't bought with a discount that prevents transfers ([Discounts](../products/discounts.md)).

:::caution[Watch out]
The attendee can't undo a transfer. The sender's registration becomes unpaid, and the payment stays with the recipient.
:::

## Turn on transfers

1. In **Housekeeping › Registration › Settings**, tick **Enable Registration Transfers** in the **General** card, then click **Save** in that card.

   <Result>A **Registration settings saved** message appears. Attendees with a paid registration now see **Transfer registration** in their card's menu.</Result>

## Transfer a registration as an attendee

First, the recipient creates an account and registers for any tier, without paying.

1. As the sender, open **Attendance** in the homepage sidebar, open the menu on the arrow next to **Modify** on your card, and choose **Transfer registration**.

   <Result>A **Transfer registration** dialog says _You can only transfer a registration to an existing user with a verified email address._, warns that it's **PERMANENT**, and asks for **Target Email** and **Enter Your Password**.</Result>

2. Enter the recipient's email address and your own password, then click **Transfer registration**.

   <Result>A **Registration has been transferred!** message appears. The sender's card shows **Unpaid**, and the status card asks them to **Complete registration**.</Result>

3. As the recipient, open **Attendance**.

   <Result>The recipient's card shows the transferred tier and **Registered**.</Result>

<TableFigure title="When a transfer is refused">

| Message                                                                                                                                                             | Why                                                | What to do                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------ |
| _This registration cannot be transferred, as the badge has already been printed._ <small>Shown in the dialog, in place of the fields.</small>                       | The sender's badge has been printed.               | Staff can still transfer it (section 4).                                 |
| _This registration cannot be transferred, as it was purchased with a discount that prevents transfers._ <small>Shown in the dialog, in place of the fields.</small> | The registration's discount prevents transfers.    | Nothing: even staff can't transfer it.                                   |
| _Target user email not found._                                                                                                                                      | No account uses that email address.                | Check the address with the recipient, who may need to create an account. |
| _User has not yet registered._                                                                                                                                      | The recipient has no registration.                 | The recipient registers for any tier, without paying.                    |
| _Target user registration already has a grant._                                                                                                                     | The recipient has already paid for a registration. | Choose a recipient who hasn't paid.                                      |
| _Incorrect password._                                                                                                                                               | The sender's password was wrong.                   | Enter the sender's own password again.                                   |

</TableFigure>

## Transfers by staff

Staff with the `registration:update` permission can move a paid registration with **Transfer** in the **Edit Registration** dialog on the attendee's profile. This works even with **Enable Registration Transfers** off and after the badge is printed, but not for a registration locked by its discount, and the recipient still needs an unpaid registration. See [Managing an attendee's registrations and orders](../attendees/user-registrations.md).
