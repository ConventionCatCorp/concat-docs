---
sidebar_position: 7
hide_table_of_contents: true
textbook: true
---

# Exports

Export your event's data as CSV or JSON, get approval to include personal information, and build exports with the columns you choose.

:::info[In this guide]
Where to export (section 1), standard exports (section 2), personal information and its approval (section 3), approving, rejecting and cancelling requests (section 4), Dynamic Export (section 5).
:::

## Ways to export

<Sidenote title="Who can do this">
Standard exports need **system:export**. Dynamic Export needs **system:export:dynamic:full**, marked *DANGEROUS.* in Roles because it can export any data. The default **admin** role has both.
</Sidenote>

<TableFigure title="Where to export">

| Where | What it exports |
| --- | --- |
| **Housekeeping › System › Export** | The standard exports: users, registrations, volunteers, dealers, order items and orders. |
| **Housekeeping › Registration › Settings**, **Export Data** card | The registration export. |
| **Housekeeping › Volunteers › Volunteer Settings**, **General** tab, **Export Data** card | The volunteer export. |
| **Housekeeping › Dealers › Dealer Settings**, **General** tab, **Export Data** card | The dealer export. |
| **Housekeeping › System › Dynamic Export** | Your choice of user fields. |
| **Housekeeping › Registration › Dynamic Export** | Your choice of registration fields. |
| **Housekeeping › Dealers › Dynamic Export** | Your choice of dealer application fields. |

</TableFigure>

Exports cover the convention you're signed in to, except the user export, which covers every account in your organization.

## Standard exports

1. Go to **Housekeeping › System › Export**.

   <Result>The **Export Data** page opens with a card for each export, each with **CSV** and **JSON** buttons.</Result>

2. On the card for the data you need, click **CSV** or **JSON**.

   <Result>The export downloads, named after it, such as `registration.csv`.</Result>

3. *(Optional)* On the **Export Data** card of **Housekeeping › Registration › Settings**, click **CSV** or **JSON**.

   <Result>The same registration export downloads.</Result>

4. *(Optional)* On the **Export Data** card of **Housekeeping › Volunteers › Volunteer Settings** (**General** tab), click **CSV** or **JSON**.

   <Result>The volunteer export downloads.</Result>

5. *(Optional)* On the **Export Data** card of **Housekeeping › Dealers › Dealer Settings** (**General** tab), click **CSV** or **JSON**.

   <Result>The dealer export downloads.</Result>

<TableFigure title="The standard exports">

| Card | What it contains |
| --- | --- |
| User data | All user data, including address, date of birth, notes and ban status. <small>Shown only while you have approved PII access (section 3).</small> |
| Registration | Registrations, with user names, address, payment status and badge name. |
| Volunteer | Volunteers, with names, departments and contact methods. |
| Dealer | Dealers, with names, approval status, and product and table options. |
| Order items | Each order item, when its order was finished, and whether it was refunded. |
| Orders | Each order, with its user, products, refunds and payments. <small>Best read as JSON.</small> |

</TableFigure>

The **Export Data** cards on settings pages also need **system:export**, unlike the rest of those pages.

## Personal information and its approval

<Sidenote title="Timing">
Another admin approves the request, or it's approved automatically after 24 hours if no one rejects it. Access lasts until 48 hours after the request.
</Sidenote>

Exports leave out personal information (PII) until your PII access is approved, which also adds the user data card. Every request is announced to your admins, and any of them can stop it.

1. On the **Export Data** page, click **Request PII access**.

   <Result>The button changes to **Pending PII access approval**. A note below it says the request will be approved automatically after a 24-hour safety delay, and ends with *Auto-approval date/time:* and that date and time. Everyone with the **admin** role globally gets a *Data Export Request* email.</Result>

2. Ask another admin to approve the request (section 4), or wait 24 hours, then reload the **Export Data** page.

   <Result>The button reads **Request PII access**, green and not clickable. A user data card appears, and the other exports include personal information.</Result>

:::note[If your organization always exports PII]
ConCat can set your organization to always include personal information. The **Request PII access** card is then hidden and the user data card always shown.
:::

## Approve, reject or cancel a request

While a request waits, a **Pending Requests** card on the **Export Data** page lists it. You can't approve your own request.

1. *(Another admin)* On a request in **Pending Requests**, click **Approve**.

   <Result>An **Approve Request** dialog asks you to confirm, naming the requester.</Result>

2. Click **Approve** in the dialog.

   <Result>A **Request approved!** message appears and the request leaves **Pending Requests**.</Result>

3. *(Instead of approving)* Click **Reject**, then **Reject** in the **Reject Request** dialog.

   <Result>A **Request rejected!** message appears and the request leaves the list.</Result>

4. *(The requester)* To withdraw your own request, click **Delete** on it, then **Delete** in the **Delete Request** dialog.

   <Result>A **Request deleted!** message appears and the request leaves the list.</Result>

5. *(Any admin, from the email)* In the *Data Export Request* email, click the link below *Click below to BLOCK the request*, and sign in if asked.

   <Result>A page says *The data export request* followed by the request's ID and *has been canceled.*</Result>

## Dynamic Export

<Sidenote title="Beta">
Dynamic Export is marked **Beta** and has no saved presets: set up the columns each time.
</Sidenote>

Pick fields, rename columns, filter rows and change how values are shown. Columns follow the order you tick them and can't be reordered afterwards. Field names are as ConCat stores them, such as `bornAt` for the date of birth.

1. Go to **Housekeeping › System › Dynamic Export**.

   <Result>A **User Data — Fields** card shows fields grouped under **User**, **Registration** and **Option Values**, with `id` already ticked.</Result>

2. Tick each field you want, in the order you want the columns.

   <Result>Each ticked field shows a pencil button; fields that can be configured also show a tune button.</Result>

3. *(Optional)* To rename a column, click the field's pencil button (**Rename column**), type the new name and press Enter.

   <Result>The field shows the new name, which becomes the column heading. Escape cancels.</Result>

4. *(Optional)* To filter or change a column, click the field's tune button (**Adjust modifiers**), choose a modifier or set a filter in **Field Settings**, and click **Save**. For example, **To Age (convention start)** on `bornAt` exports ages instead of dates of birth.

   <Result>The dialog closes and the tune button is highlighted.</Result>

5. Under **Manage Form**, click **Preview Export Results**.

   <Result>A **Preview** dialog shows up to the first 5 rows.</Result>

6. Under **Download Export**, enter a file name (it starts as `export`), choose `csv` or `json`, and click **Download**.

   <Result>The file downloads, such as `export.csv`.</Result>

7. *(Optional)* To start over, click **Reset Form**, then **Reset** in the dialog.

   <Result>Everything is cleared except `id`.</Result>

8. *(Optional)* In **Housekeeping › Registration › Dynamic Export** or **Housekeeping › Dealers › Dynamic Export**, repeat steps 2 to 6.

   <Result>The card is titled **Registration Data — Fields** (groups **Registration** and **Badge**) or **Dealer Data — Fields** (groups **Application**, **Business**, **Dealer** and **Option Values**).</Result>

<TableFigure title="Some useful modifiers and filters">

| Export | Field settings |
| --- | --- |
| User data | **Convert from ISO to Name** (country and state), **To Age (now)**, **To Age (convention start)**, **Minimum Age** and **Maximum Age**, **Restrict to Account Owners**, **Restrict to Roles** with **Operator:** **Any**, **All** or **None**, **Role Name (default)** or **Role ID**, **Product Name (default)** or **Product ID**. |
| Registration data | **Full Legal Name**, **Preferred Name**, **Age (today)**, **Age (Convention Start)**, **Filter by User ID**, **Filter by Attendance Tier**, **Filter by Payment Status**. |
| Dealer data | **Filter by Application Status**, **Filter by Table Payment Status**, **Filter by Dealer Area**, **Filter by Registration Status**, **Area ID**, **Product ID**. |

</TableFigure>

Option values have no filters or modifiers yet. The Volunteers module has no Dynamic Export; use the standard volunteer export (section 2).
