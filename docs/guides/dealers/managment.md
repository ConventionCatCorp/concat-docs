---
sidebar_position: 1
hide_table_of_contents: true
textbook: true
---

# Dealers

Dealers apply to sell at your event, and your team reviews their applications in Housekeeping. This guide covers that review: the dealer dashboard, finding an application, approving it, and looking after assistants and seating requests.

:::info[In this guide]
How dealing works and its statuses (section 1), the dealer dashboard (section 2), finding an application (section 3), reviewing an application (section 4), changing a paid application (section 5), adding an application in another area (section 6), editing a dealer's details (section 7), assistants and seating requests (section 8), and dealers on a user's profile (section 9).
:::

## How dealing works

<Sidenote title="Who can do this">
Viewing the Dealers module needs the permission to read vendor applications. Changing applications, assistants and seating needs the permission to update them. The default *dealersden* role has both.
</Sidenote>

A dealer has one **dealer profile**, with their business details, and one **application** for each dealer area they apply to. Each application names a table type, any add-ons the dealer asks for, and a status. Areas and table types are set up in [Dealer areas and table types](./areas-and-products.md). What dealers fill in is shown in [What dealers see when they apply](./applying.md).

An application goes through these steps:

- The dealer saves their profile and applies for space in an area. The application is **Pending**.
- Your team sets the status. When you approve it, ConCat puts the table type and the requested add-ons into the dealer's cart.
- The dealer clicks **Pay for Table** and pays. The application is now paid, and its table type can no longer change.

<TableFigure title="Application statuses">

| Status | Housekeeping shows | The dealer sees on their **Dealing** page |
| --- | --- | --- |
| **Pending** | *pending* | *Your application for* the area *has not been approved yet.* |
| **Approved**, not paid | *approved*, with a warning icon | *Your* area *application has been approved and is pending payment.*, with a **Pay for Table** button |
| **Approved**, paid | *approved*, with a tick <small>The applications list shows *approved (Paid)*.</small> | **Your application has been approved!**, with their table number once you assign one |
| **Waitlisted** | *waitlisted* | *Your application for* the area *is waitlisted.* |
| **Rejected** | *rejected* | *Your application for* the area *was rejected.* |
| **Cancelled** | *cancelled* | *Your application for* the area *was canceled.* |

</TableFigure>

:::caution[Watch out]
ConCat doesn't email dealers when their status changes. Tell them yourself, for example with a mass email to the dealers (see [Mass email](../attendees/mass-email.md) in the Attendees section).
:::

ConCat also keeps two roles in step with the applications: everyone with an application gets the *vendor* role, and everyone with an approved application gets *vendorApproved*. You don't assign these by hand.

## The dealer dashboard

1. Go to **Housekeeping › Dealers › Dashboard**. The Dealers module menu is explained in [Start here](../quickstart/start-here.md), section 2.

   <Result>The **Dashboard** page shows the cards in Table 2.1. Below them, the **Applications** card lists each area with the columns **Area**, **Count**, **Confirmed** and **Unpaid**, and a **View all applications** button.</Result>

2. On the **Dealers without Applications** card, click **View**. The button is shown only when the count is above 0.

   <Result>A dialog titled **Dealers without Applications** lists those users, with a **Close** button.</Result>

3. Click an area's row in the **Applications** card.

   <Result>The **Dealers** page opens, listing only that area's applications.</Result>

<TableFigure title="The dashboard cards">

| Card | What it counts |
| --- | --- |
| **Total Dealers** | Dealer profiles saved for this convention. |
| **Approved Dealers** | Approved applications, in all areas. |
| **Paid Dealers** | Approved applications whose dealer has paid for their convention registration. <small>This counts the badge, not the table.</small> |
| **Dealers without Applications** | Dealers who saved a profile but haven't applied in any area. **View** lists them. |
| **Confirmed with No Paid Registration** | Approved dealers who haven't paid for their convention registration. **View** lists them. |

</TableFigure>

In the **Applications** card, **Count** is every application in the area, **Confirmed** the approved ones, and **Unpaid** the approved ones whose table isn't paid yet.

## Find an application

1. Go to **Housekeeping › Dealers › Applications**.

   <Result>The **Dealers** page lists one row per application, with the columns **Store**, **User**, **Status**, **Registration**, **Area**, **Table Type** and **Table**, and a **Search...** box above them.</Result>

2. Type a business name, a user's name or a table type in **Search...**.

   <Result>Only matching rows are listed.</Result>

3. *(Optional)* To narrow the list by **Status**, **Registration**, **Area** or **Table Type**, click the filter button in that column's header. In the list that opens, untick the values you don't want (or untick **(Select all)** and tick the ones you do), then click **Apply**.

   <Result>Only rows with those values are listed, and the column's filter button is highlighted. To remove the filter, open it again and click **Clear**.</Result>

4. Click the business name in the **Store** column.

   <Result>The dealer's page opens, titled with the business name. On the left are the **Dealer Information** card and the **Seating Requests** card. On the right is a card titled with the area name and *application* for each area, such as *Dealers' Den application*.</Result>

The **Registration** column shows whether the dealer has paid for their convention registration. An approved dealer without a paid registration gets a warning icon there. A **Restriction** badge next to a user's name means their profile has a note in the restriction category.

## Review an application

1. On the dealer's page, click the pencil button (**Edit**) on the area's application card.

   <Result>The card becomes a form with **Special Requests**, **Table Number**, **Status**, **Table** and **Requests**, and **Save** and **Cancel** buttons at the top.</Result>

2. Choose the new **Status**: **Approved**, **Waitlisted**, **Rejected** or **Cancelled**. Check the **Table** and the add-ons ticked under **Requests**, and change them if needed. Then click **Save**.

   <Result>A **The application has been updated.** message appears, and the card's **Status** row shows the new status. An approved application shows *approved* with a warning icon until the dealer pays.</Result>

3. To check the dealer's cart, click their name in the **User** row of **Dealer Information**, then click the **Orders** tab.

   <Result>The dealer's unpaid order lists the table type, and each add-on ticked under **Requests**.</Result>

4. *(Optional)* Once you've planned the floor, edit the application again, enter the **Table Number**, and click **Save**.

   <Result>A **The application has been updated.** message appears, and the **Table** column of the applications list shows the number. A dealer who has paid sees *Your table assignment for* the area and the number.</Result>

The **Table** list includes every table type in the area's category. Types marked **(Hidden)** or **(Unlisted)** are ones dealers can't choose themselves, so you can give a dealer a table type that isn't on offer.

:::note[Changing your mind]
Changing an approved, unpaid application back to another status takes its table type and add-ons out of the dealer's cart. There is no way to delete an application from Housekeeping: set it to **Rejected** or **Cancelled** instead.
:::

## Change a paid application

Once the dealer has paid, the application's **Status**, **Table** and **Requests** are locked. To change them, first delete the payment from the application.

:::danger[Deleting the payment doesn't refund it]
Deleting the payment only unlinks it from the application. The dealer's order stays paid. If you also need to give the money back, refund the order: see [Refunds](../orders/refunds.md).
:::

1. Click the pencil button (**Edit**) on the paid application's card.

   <Result>**Status**, **Table** and **Requests** are greyed out, and a red bin button is shown next to **Status**.</Result>

2. Click the bin button.

   <Result>A dialog titled **Delete Application Payment?** asks *Are you sure you want to delete the payment related to this registration?*</Result>

3. Click **Delete**.

   <Result>A **Payment deleted!** message appears. You can now change the application's status and table type.</Result>

## Add an application in another area

A dealer's page has a card for every dealer area. Areas the dealer hasn't applied to say **No application.** You can apply on the dealer's behalf, even in an area that isn't open to dealers.

1. On the dealer's page, click the plus button (**Add**) on a card that says **No application.**

   <Result>The card shows the application form for that area, with **Status** set to **Pending** and the first table type selected.</Result>

2. Fill in the form, choose the **Status**, and click **Save**.

   <Result>A **The application has been created.** message appears, and the card shows the new application.</Result>

## Edit a dealer's details

1. On the dealer's page, click the pencil button (**Edit**) on the **Dealer Information** card.

   <Result>**Business Name**, **Business Email**, **Address Line 1**, **Address Line 2 (Optional)**, **City**, **State / province**, **Zip / postal code** and **Country** become editable, followed by the questions from your dealer form. **Save** and **Cancel** buttons appear.</Result>

2. Make your changes and click **Save**.

   <Result>A **The dealer has been updated.** message appears, and the card shows the new details.</Result>

## Assistants and seating requests

### Assistants

<Sidenote title="Assistant limit">
A table type allows assistants when its **Dealer assistant count limit** is above 0. See [Dealer areas and table types](./areas-and-products.md), section 3.
</Sidenote>

Dealers can name other attendees as assistants. Assistants of an approved application get the *dealerAssistant* role. An application card has an **Assistants** section when its table type allows assistants. Each assistant is listed as **Accepted** or **Pending Email Confirmation.**

1. In the application card's **Assistants** section, click **Manage Assistants**.

   <Result>A **Manage Assistants** dialog opens, with an **Add Assistant** search field and button, the current assistants, and **Close**.</Result>

2. Search for the person in **Add Assistant**, select them, and click **Add Assistant**.

   <Result>An **Assistant added.** message appears. The person is listed as **Accepted**: assistants your team adds don't need to confirm by email.</Result>

3. *(Optional)* To remove an assistant, click the red bin button next to them.

   <Result>An **Assistant removed.** message appears, and they're no longer listed.</Result>

If the table type's limit is already reached, adding an assistant fails with *Too many assistants.*

### Seating requests

Dealers can ask to sit next to each other by exchanging their dealer IDs. The requests are listed in the **Seating Requests** card on the dealer's page, with the other **Dealer** and a **Status** of **Pending approval** or **Approved**. You can approve or remove a request on the dealer's behalf.

1. On a request the dealer has received, click **Approve**.

   <Result>A **Seating preference request approved!** message appears, and the status changes to **Approved**.</Result>

2. *(Optional)* To remove a request, click **Decline** on a request the dealer received, or **Cancel** on one they sent.

   <Result>A **Seating preference request declined** (or **Seating preference request canceled**) message appears, and the request is no longer listed.</Result>

## Dealers on a user's profile

1. Go to **Housekeeping › Attendees › User Search**, search for the person and click them.

   <Result>Their profile opens on the **Name** tab. In the **Information** card, the **Dealer** row shows their business name and each area's status, or **No application.**</Result>

2. *(If they have no dealer profile)* Click the plus button (**Add**) on the **Dealer** row.

   <Result>A **Create Dealer Application** dialog opens with the **Dealer Information** fields and your dealer form's questions, and **Create** and **Cancel** buttons.</Result>

3. Fill in the dealer's details, then click **Create**.

   <Result>An **Application created!** message appears, and the new dealer's page opens. Each area's card says **No application.**: add an application as in section 6.</Result>

4. Back on the profile, click the **Dealer** tab.

   <Result>The tab shows the dealer form as the dealer sees it, with their answers and their status messages. For someone banned from dealing, it shows *You are currently banned from dealing at the convention.* instead.</Result>

:::caution[Watch out]
- Creating a dealer profile, even from Housekeeping, needs **Enable Dealers Module** turned on in [Dealer settings](./settings.md). Sub-accounts can't be dealers.
- Use the **Dealer** tab to read a dealer's answers, and **Dealer Information** (section 7) to change them. **Continue** on the tab saves the form and then opens your own **Dealing** page, not the dealer's.
:::

The pencil button on the profile's **Dealer** row opens the dealer's page in **Dealers › Applications**.
