---
sidebar_position: 5
hide_table_of_contents: true
textbook: true
---

# What dealers see when they apply

Follow a dealer application from the dealer's side: profile, application, payment, assistants and neighbors. Use a test attendee account to check your setup before you open applications.

:::info[In this guide]
Opening the application, the dealer profile, applying for space, status and payment, naming assistants, assistant confirmation, and seating preferences.
:::

## Open the dealer application

<Sidenote title="Use a test account">
Use an ordinary attendee account with a verified email address, in a private browser window.
</Sidenote>

The application is open when **Enable Dealers Module** is on ([Dealer settings, policy and form](./settings.md), section 1) and at least one dealer area is **Enabled** ([Dealer areas and table types](./areas-and-products.md), section 4).

1. As an attendee, click **Dealing** under **Applications** in the homepage sidebar.

   <Result>The **Dealer Application** page opens at `/dealer` with the dealer form and *You haven't yet submitted an application this year.*</Result>

If the dealer can't apply, the page says why (Table 1.1).

<TableFigure title="When a dealer can't apply">

| Situation | The page says |
| --- | --- |
| **Enable Dealers Module** is off | *We are not currently accepting applications.* and *Please check back later.* <small>**Dealing** is hidden too, so this shows only at `/dealer`.</small> |
| No dealer area is enabled | *No dealer areas are currently accepting applications.* and *Please check back later.* |
| Email address not confirmed | **Email verification required**, with a **Resend verification email** button. |
| Banned from dealing | *You are currently banned from dealing at the convention.* |

</TableFigure>

## The dealer profile

The first page is your dealer form ([Dealer settings, policy and form](./settings.md), section 4). Dealers who applied at one of your earlier conventions find it filled in, with *We've automatically filled in some of the details from a previous application.*

1. Fill in the form, tick the **Dealer Policy** agreement, and click **Continue** (grayed out until every required agreement is ticked).

   <Result>A **Your dealer information has been saved.** message appears, and the space application opens at `/dealer/space`.</Result>

A typed full-name agreement must match the first and last name on the account, or the field shows *Name does not match user profile*.

To change details later, the dealer clicks **Edit Dealer** on the space page. The policy agreement stays ticked and can't be unticked.

## Apply for space

With one enabled area, the dealer goes straight to its application. With several, each area has a card with the application's status (such as **Pending approval**, **Approved** and **Pending payment**, **Waitlisted**, **Rejected** or **Canceled**) and a button: **Create**, **Select** for an existing application, **Full**, or **CLOSED** (can't be clicked).

1. *(Several areas)* Click **Create** on an area's card.

   <Result>The area's **Space Information** card is shown.</Result>

2. In **Space Information**, enter any **Special Requests**, choose a **Table Type** (listed with its price and description), tick any add-ons, answer the table type's questions, and click **Submit**.

   <Result>A **Your application has been updated.** message and a **Next Steps** card appear. **Submit** becomes **Update**, with **Delete Application** below it.</Result>

3. *(Optional)* To withdraw a pending application, click **Delete Application**.

   <Result>A **Your dealer application has been deleted.** message appears.</Result>

A **Pending** application can be updated or deleted. Once your team sets another status, the form is grayed out with *The application is* followed by the status, *and can not be modified.* Full and closed areas show the messages in [Dealer areas and table types](./areas-and-products.md), Table 4.1.

## Status and paying for the table

Your team sets the status in Housekeeping ([Dealers](./managment.md), section 4). ConCat doesn't email the dealer; they see an alert for each area at the top of **Dealing**.

1. After your team approves the application, open **Dealing** as the dealer.

   <Result>An alert says *Your* area *application has been approved and is pending payment.*, with a **Pay for Table** button.</Result>

2. Click **Pay for Table**.

   <Result>The **Checkout** page opens with the table type and approved add-ons. If **Force Dealer Registration** is on and the dealer isn't registered, a **Convention Registration Needed** card replaces the payment options.</Result>

3. Pay ([Checkout and payment](../orders/checkout.md)), then open **Dealing** again.

   <Result>A green alert says **Your application has been approved!**, with the table number or *The Dealer's Den team have not yet assigned you a table. This will be confirmed closer to the convention.*</Result>

Once approved, the space page also shows **Seating Preferences** and, if the table type allows assistants, **Manage Assistants**.

## Name assistants

<Sidenote title="When dealers can do this">
From approval, even before payment, if the table type's **Dealer assistant count limit** is above 0.
</Sidenote>

1. On the space page, click **Manage Assistants**.

   <Result>The **Add Assistant** card says *You can nominate up to* the limit *other attendees to assist you at the convention.*</Result>

2. Enter the assistant's username in **Assistant Username** and click **Add Assistant**.

   <Result>**Current Assistants** lists them with *Pending Email Confirmation. Please ask your assistant to check their email.*</Result>

3. *(Optional)* If the dealer has sub-accounts, click **Add** next to one in **Your Sub-accounts**.

   <Result>An **Assistant added.** message appears, and the sub-account is **Accepted** without confirming.</Result>

4. *(Optional)* To remove an assistant, click the red bin button next to them.

   <Result>An **Assistant removed.** message appears.</Result>

The assistant needs their own account; help under **Assistant Username** says where they find their username. Before approval, `/dealer/assistants` says *As your dealer application has not yet been approved, you can't access this feature.*

## Confirm as an assistant

The assistant gets an email with *Dealer Assistant Confirmation* in the subject, naming the dealer, with a confirmation link.

1. Signed in as the assistant, click the link in the email.

   <Result>The page says **Confirmed!**, and the dealer's **Current Assistants** shows them as **Accepted**.</Result>

A used or wrong link shows **Invalid Confirmation Code**. Accepted assistants of an approved application get the *dealerAssistant* role.

## Seating preferences

Dealers who want to sit together exchange dealer IDs. One adds the other, and the other approves.

1. On the space page, click **Seating Preferences**.

   <Result>The page shows a **How it Works** card with **Your Dealer ID**, an **Add a Dealer** card and **Seating Requests**.</Result>

2. Enter another dealer's ID in **Dealer ID** and click **Add**.

   <Result>A **We have added your seating preference and it is now pending approval.** message appears, and the request is listed as **Pending approval**.</Result>

3. As the other dealer, open **Seating Preferences** and click **Approve** on the request.

   <Result>A **Seating preference request approved!** message appears, and both dealers see the request as **Approved**.</Result>

A dealer removes a request with **Cancel** (sent) or **Decline** (received). Entering their own ID gives *Cannot run action on self.* Your team sees the requests in Housekeeping ([Dealers](./managment.md), section 8). As the **How it Works** card tells dealers, not every request can be honored.
