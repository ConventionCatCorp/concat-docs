---
sidebar_position: 5
hide_table_of_contents: true
textbook: true
---

# What dealers see when they apply

This guide follows a dealer application from the dealer's side: saving a dealer profile, applying for a table, paying for it, and naming assistants and neighbours. Follow it with a test attendee account to check your dealer setup before you open applications.

:::info[In this guide]
Opening the dealer application (section 1), the dealer profile (section 2), applying for space (section 3), the application status and paying for the table (section 4), naming assistants (section 5), how an assistant confirms (section 6), and seating preferences (section 7).
:::

## Open the dealer application

<Sidenote title="Use a test account">
Sign in as an ordinary attendee with a verified email address, in a private browser window, so you see exactly what dealers see.
</Sidenote>

The application is open when **Enable Dealers Module** is on (see [Dealer settings, policy and form](./settings.md), section 1) and at least one dealer area is **Enabled** (see [Dealer areas and table types](./areas-and-products.md), section 4).

1. As an attendee, click **Dealing** under **Applications** in the homepage sidebar.

   <Result>The **Dealer Application** page opens at `/dealer`, with the dealer form. An alert says *You haven't yet submitted an application this year.*</Result>

If the dealer can't apply, the page says why, as Table 1.1 shows.

<TableFigure title="When a dealer can't apply">

| Situation | The page says |
| --- | --- |
| **Enable Dealers Module** is off | *We are not currently accepting applications.* and *Please check back later.* <small>The **Dealing** item is hidden too, so this shows only at the address `/dealer`.</small> |
| No dealer area is enabled | *No dealer areas are currently accepting applications.* and *Please check back later.* |
| The attendee hasn't confirmed their email address | **Email verification required**, *Please verify your email address before applying.*, with a **Resend verification email** button. |
| The attendee is banned from dealing | *You are currently banned from dealing at the convention.* and *Please contact* your dealers address *if you think this is in error.* |

</TableFigure>

## The dealer profile

The first page is the dealer form you set up in [Dealer settings, policy and form](./settings.md), section 4: the business details, your questions and the Dealer Policy agreement. A dealer who applied at one of your earlier conventions finds it filled in, with the alert *We've automatically filled in some of the details from a previous application.*

1. Fill in the form, tick the **Dealer Policy** agreement, and click **Continue**. **Continue** stays greyed out until every required agreement is ticked.

   <Result>A **Your dealer information has been saved.** message appears, and the space application opens at `/dealer/space`.</Result>

If the form asks the dealer to type their full name to agree, it must match the first and last name on their account. Otherwise the field shows *Name does not match user profile* and the name expected.

To change their details later, the dealer clicks **Edit Dealer** on the space page, which takes them back to this form. The policy agreement is already ticked and can't be unticked.

## Apply for space

With one enabled area, the dealer goes straight to that area's application. With several, they first see a card for each area, with a button: **Create** for a new application, **Select** for an existing one, **Full** or **CLOSED**. A closed area's button can't be clicked. Each card also shows the application's status, such as **Pending approval**, **Approved** and **Pending payment**, **Waitlisted**, **Rejected** or **Canceled**.

1. *(Several areas)* Click **Create** on an area's card.

   <Result>A **Go back** button and the area's **Space Information** card are shown.</Result>

2. In **Space Information**, enter any **Special Requests**, choose a **Table Type** (each is listed with its price, and its description is shown below), tick any add-ons, and answer the table type's questions. Then click **Submit**.

   <Result>A **Your application has been updated.** message appears. A **Next Steps** card appears beside the form: *Your application has been submitted and is pending approval by the event. No action is required at this time.* The **Submit** button becomes **Update**, with **Delete Application** below it.</Result>

3. *(Optional)* To withdraw a pending application, click **Delete Application**.

   <Result>A **Your dealer application has been deleted.** message appears.</Result>

While an application is **Pending**, the dealer can change it with **Update** or delete it. After your team sets any other status, the form is greyed out with *The application is* followed by the status, *and can not be modified.* In a **Full** area the form says *The* area *is full. Applications can still be made in case a seat becomes available.* In a closed area it says only that the area *is closed.*

## Status and paying for the table

Your team sets the status in Housekeeping, as [Dealers](./managment.md), section 4, explains. ConCat doesn't email the dealer when it changes. The dealer sees it as an alert at the top of the **Dealing** page, one for each area.

1. After your team approves the application, open **Dealing** as the dealer.

   <Result>An alert says *Your* area *application has been approved and is pending payment.* It goes on: *You have been conditionally approved and are now required to make payment in order to secure your table. You must register for the convention before you will able to pay.* Below it is a **Pay for Table** button.</Result>

2. Click **Pay for Table**.

   <Result>The **Checkout** page opens, with the table type and each add-on your team approved. If **Force Dealer Registration** is on and the dealer has no convention registration, a **Convention Registration Needed** card is shown instead of the payment options.</Result>

3. Pay for the order, as [Checkout and payment](../orders/checkout.md) shows, then open **Dealing** again.

   <Result>A green alert says **Your application has been approved!** It shows *Your table assignment for* the area and the table number, or *The Dealer's Den team have not yet assigned you a table. This will be confirmed closer to the convention.* If the table type allows assistants, it ends with *Click here to manage assistants.*</Result>

Once an application is approved, the space page also shows **Seating Preferences** and, if the table type allows assistants, **Manage Assistants**, next to **Edit Dealer**.

:::note[The Next Steps card]
As soon as an application is approved, the **Next Steps** card on the space page says *Your application was approved and has been paid.*, even before the dealer pays. The alert on the **Dealing** page is the one to go by. Point dealers to it if they're unsure whether they still need to pay.
:::

## Name assistants

<Sidenote title="When dealers can do this">
Assistants open up once an application is approved, before payment, and only if its table type's **Dealer assistant count limit** is above 0.
</Sidenote>

1. On the space page, click **Manage Assistants**.

   <Result>A heading names the area and table type. The **Add Assistant** card says *You can nominate up to* the limit *other attendees to assist you at the convention.* and has an **Assistant Username** field and an **Add Assistant** button. The **Current Assistants** card says *You don't have any assistants.*</Result>

2. Enter the assistant's username in **Assistant Username** and click **Add Assistant**.

   <Result>A **We have sent your assistant request. They receive an email asking them to confirm your request.** message appears. The assistant is listed under **Current Assistants** with *Pending Email Confirmation. Please ask your assistant to check their email.*</Result>

3. *(Optional)* If the dealer has sub-accounts, click **Add** next to one in the **Your Sub-accounts** card.

   <Result>An **Assistant added.** message appears, and the sub-account is listed as **Accepted**. Sub-accounts don't need to confirm.</Result>

4. *(Optional)* To remove an assistant, click the red bin button next to them.

   <Result>An **Assistant removed.** message appears.</Result>

The assistant needs an account of their own; help under **Assistant Username** tells the dealer where the assistant can find their username. Before the application is approved, **Manage Assistants** isn't offered, and the page at `/dealer/assistants` says *As your dealer application has not yet been approved, you can't access this feature.*

## Confirm as an assistant

The person named as an assistant gets an email with *Dealer Assistant Confirmation* in the subject. It says which dealer added them and gives a confirmation link.

1. Signed in as the assistant, click the link in the email.

   <Result>The page says **Confirmed!**, *Thank you for confirming that you will be assisting in the Dealer's Den.* and *You can now close this window.* The dealer's **Current Assistants** list shows them as **Accepted**.</Result>

A link that has already been used, or is wrong, shows **Invalid Confirmation Code** and *The confirmation code provided is invalid or may already have been used.* Accepted assistants of an approved application get the *dealerAssistant* role.

## Seating preferences

Dealers who want to sit together exchange their dealer IDs. Each one can then add the other, and the other approves.

1. On the space page, click **Seating Preferences**.

   <Result>The page shows a **How it Works** card with **Your Dealer ID**, an **Add a Dealer** card with a **Dealer ID** field and an **Add** button, and a **Seating Requests** card that says *No existing requests.* A **Back to Application** button is at the top.</Result>

2. Enter another dealer's ID in **Dealer ID** and click **Add**.

   <Result>A **We have added your seating preference and it is now pending approval.** message appears. The request is listed under **Seating Requests**, marked **Pending approval**.</Result>

3. As the other dealer, open **Seating Preferences** and click **Approve** on the request.

   <Result>A **Seating preference request approved!** message appears, and the request is marked **Approved** for both dealers.</Result>

A dealer can remove a request with **Cancel** (one they sent) or **Decline** (one they received). Entering their own ID gives *Cannot run action on self.* Your team sees the same requests on the dealer's page in Housekeeping, as [Dealers](./managment.md), section 8, shows. As the **How it Works** card tells dealers, not every request can be honored.
