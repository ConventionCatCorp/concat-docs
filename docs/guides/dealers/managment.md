---
sidebar_position: 1
hide_table_of_contents: true
textbook: true
---

# Dealers

Review dealer applications in Housekeeping: the dealer dashboard, finding and approving applications, and assistants and seating requests.

:::info[In this guide]
How dealing works, the dashboard, finding and reviewing an application, paid applications, other areas, dealer details, assistants and seating, and user profiles.
:::

## How dealing works

<Sidenote title="Who can do this">
Viewing the Dealers module needs the permission to read vendor applications; changing applications, assistants and seating needs the permission to update them. The default *dealersden* role has both.
</Sidenote>

A dealer has one **dealer profile** (business details) and one **application** per area, each with a table type, add-ons and a status. For setup, see [Dealer areas and table types](./areas-and-products.md); for the dealer's side, [What dealers see when they apply](./applying.md). An application moves through three steps:

- The dealer applies in an area. The application is **Pending**.
- Your team sets the status. Approving puts the table type and requested add-ons into the dealer's cart.
- The dealer clicks **Pay for Table** and pays. The table type can no longer change.

<TableFigure title="Application statuses">

| Status | Housekeeping shows | The dealer sees on their **Dealing** page |
| --- | --- | --- |
| **Pending** | *pending* | *Your application for* the area *has not been approved yet.* |
| **Approved**, not paid | *approved*, with a warning icon | *Your* area *application has been approved and is pending payment.*, with **Pay for Table** |
| **Approved**, paid | *approved*, with a tick <small>The applications list shows *approved (Paid)*.</small> | **Your application has been approved!**, with their table number once assigned |
| **Waitlisted** | *waitlisted* | *Your application for* the area *is waitlisted.* |
| **Rejected** | *rejected* | *Your application for* the area *was rejected.* |
| **Cancelled** | *cancelled* | *Your application for* the area *was canceled.* |

</TableFigure>

:::caution[Watch out]
ConCat doesn't email dealers when their status changes. Tell them yourself, for example with a [Mass email](../attendees/mass-email.md).
:::

ConCat assigns two roles automatically: *vendor* to everyone with an application, and *vendorApproved* to everyone with an approved one.

## The dealer dashboard

1. Go to **Housekeeping › Dealers › Dashboard** (the menu is explained in [Start here](../quickstart/start-here.md), section 2).

   <Result>The **Dashboard** shows the cards in Table 2.1 and an **Applications** card with a row per area.</Result>

2. On **Dealers without Applications**, click **View** (shown when the count is above 0).

   <Result>A **Dealers without Applications** dialog lists those users.</Result>

3. Click an area's row in the **Applications** card.

   <Result>The **Dealers** page opens, listing only that area's applications.</Result>

<TableFigure title="The dashboard cards">

| Card | What it counts |
| --- | --- |
| **Total Dealers** | Dealer profiles saved for this convention. |
| **Approved Dealers** | Approved applications, in all areas. |
| **Paid Dealers** | Approved applications whose dealer has paid for their convention registration. <small>The badge, not the table.</small> |
| **Dealers without Applications** | Dealers with a profile but no application. **View** lists them. |
| **Confirmed with No Paid Registration** | Approved dealers who haven't paid for their convention registration. **View** lists them. |

</TableFigure>

In the **Applications** card, **Count** is every application in the area, **Confirmed** the approved ones, and **Unpaid** the approved ones whose table isn't paid.

## Find an application

1. Go to **Housekeeping › Dealers › Applications**.

   <Result>The **Dealers** page lists one row per application, with a **Search...** box and the columns **Store**, **User**, **Status**, **Registration**, **Area**, **Table Type** and **Table**.</Result>

2. Type a business name, a user's name or a table type in **Search...**.

   <Result>Only matching rows are listed.</Result>

3. *(Optional)* To filter by **Status**, **Registration**, **Area** or **Table Type**, click the filter button in that column's header, untick the values you don't want (or untick **(Select all)** and tick the ones you do), and click **Apply**.

   <Result>Only matching rows are listed, and the filter button is highlighted. **Clear** in the same filter removes it.</Result>

4. Click the business name in the **Store** column.

   <Result>The dealer's page opens, with **Dealer Information**, **Seating Requests** and an application card for each area, such as *Dealers' Den application*.</Result>

**Registration** shows whether the dealer's convention registration is paid; an approved dealer without one gets a warning icon. A **Restriction** badge means the profile has a note in the restriction category.

## Review an application

1. On the dealer's page, click the pencil button (**Edit**) on the area's application card.

   <Result>The card becomes a form with **Status**, **Table**, **Requests**, **Table Number** and **Special Requests**, and **Save** at the top.</Result>

2. Choose the new **Status** (**Approved**, **Waitlisted**, **Rejected** or **Cancelled**), check the **Table** and the add-ons ticked under **Requests**, and click **Save**.

   <Result>A **The application has been updated.** message appears. An approved application shows *approved* with a warning icon until the dealer pays.</Result>

3. To check the dealer's cart, click their name in the **User** row of **Dealer Information**, then the **Orders** tab.

   <Result>The unpaid order lists the table type and each add-on ticked under **Requests**.</Result>

4. *(Optional)* Once you've planned the floor, edit the application again, enter the **Table Number**, and click **Save**.

   <Result>A **The application has been updated.** message appears, and the number shows in the applications list's **Table** column.</Result>

The **Table** list includes table types marked **(Hidden)** or **(Unlisted)**, which dealers can't choose, so you can assign one that isn't on offer.

:::note[Changing your mind]
Moving an approved, unpaid application to another status takes its table type and add-ons out of the dealer's cart. Applications can't be deleted from Housekeeping: set them to **Rejected** or **Cancelled**.
:::

## Change a paid application

Once the dealer has paid, **Status**, **Table** and **Requests** are locked. To change them, first delete the payment from the application.

:::danger[Deleting the payment doesn't refund it]
It only unlinks the payment from the application; the order stays paid. To give the money back, refund the order: see [Refunds](../orders/refunds.md).
:::

1. Click the pencil button (**Edit**) on the paid application's card.

   <Result>**Status**, **Table** and **Requests** are grayed out, with a red bin button next to **Status**.</Result>

2. Click the bin button.

   <Result>A **Delete Application Payment?** dialog opens.</Result>

3. Click **Delete**.

   <Result>A **Payment deleted!** message appears, and the status and table type can be changed.</Result>

## Add an application in another area

Areas the dealer hasn't applied to show **No application.** on their card. You can apply for the dealer, even in an area that isn't open.

1. On the dealer's page, click the plus button (**Add**) on a card that says **No application.**

   <Result>The card shows the area's application form, with **Status** set to **Pending**.</Result>

2. Fill in the form, choose the **Status**, and click **Save**.

   <Result>A **The application has been created.** message appears, and the card shows the application.</Result>

## Edit a dealer's details

1. On the dealer's page, click the pencil button (**Edit**) on **Dealer Information**.

   <Result>The business name, email, address and your dealer form's questions become editable.</Result>

2. Make your changes and click **Save**.

   <Result>A **The dealer has been updated.** message appears, and the card shows the new details.</Result>

## Assistants and seating requests

### Assistants

<Sidenote title="Assistant limit">
A table type allows assistants when its **Dealer assistant count limit** is above 0. See [Dealer areas and table types](./areas-and-products.md), section 3.
</Sidenote>

Assistants of an approved application get the *dealerAssistant* role. When the table type allows them, the application card's **Assistants** section lists each as **Accepted** or **Pending Email Confirmation.**

1. In the card's **Assistants** section, click **Manage Assistants**.

   <Result>A **Manage Assistants** dialog opens, with an **Add Assistant** search and the current assistants.</Result>

2. Search for the person in **Add Assistant**, select them, and click **Add Assistant**.

   <Result>An **Assistant added.** message appears, and the person is listed as **Accepted**: assistants your team adds don't confirm by email.</Result>

3. *(Optional)* To remove an assistant, click the red bin button next to them.

   <Result>An **Assistant removed.** message appears, and they're no longer listed.</Result>

At the table type's limit, adding fails with *Too many assistants.*

### Seating requests

The dealer's **Seating Requests** card lists their requests to sit next to other dealers, each **Pending approval** or **Approved**. You can approve or remove them for the dealer.

1. On a request the dealer has received, click **Approve**.

   <Result>A **Seating preference request approved!** message appears, and the status changes to **Approved**.</Result>

2. *(Optional)* To remove a request, click **Decline** on one the dealer received, or **Cancel** on one they sent.

   <Result>A **Seating preference request declined** (or **Seating preference request canceled**) message appears, and the request is gone.</Result>

## Dealers on a user's profile

1. Go to **Housekeeping › Attendees › User Search**, search for the person and click them.

   <Result>In the profile's **Information** card, the **Dealer** row shows their business name and each area's status, or **No application.**</Result>

2. *(If they have no dealer profile)* Click the plus button (**Add**) on the **Dealer** row.

   <Result>A **Create Dealer Application** dialog opens with the dealer's business fields and your form's questions.</Result>

3. Fill in the dealer's details and click **Create**.

   <Result>An **Application created!** message appears, and the new dealer's page opens with **No application.** in each area: add one as in section 6.</Result>

4. Back on the profile, click the **Dealer** tab.

   <Result>The tab shows the dealer form as the dealer sees it, with their answers, or *You are currently banned from dealing at the convention.* for someone banned.</Result>

:::caution[Watch out]
- Creating a dealer profile, even from Housekeeping, needs **Enable Dealers Module** on in [Dealer settings](./settings.md). Sub-accounts can't be dealers.
- Read answers on the **Dealer** tab, but change them in **Dealer Information** (section 7). **Continue** on the tab saves the form, then opens your own **Dealing** page, not the dealer's.
:::

The pencil button on the profile's **Dealer** row opens the dealer's page in **Dealers › Applications**.
