---
sidebar_position: 1
hide_table_of_contents: true
textbook: true
---

# Volunteers

This guide covers the day-to-day work on volunteer applications: finding them, reading them, assigning volunteers to departments, making them staff, and tidying up. Departments, settings and the application form have their own guides.

:::info[In this guide]
How volunteering works (section 1), finding applications (section 2), reviewing an application (section 3), assigning departments (section 4), staff (section 5), clearing requests and deleting applications (section 6), and the **Volunteer** tab on a user's profile (section 7).
:::

## How volunteering works

<Sidenote title="Who can do this">
Viewing applications needs the `volunteer:read` permission. Assigning, changing staff status and editing answers need `volunteer:update`, and deleting needs `volunteer:delete`. The default *admin* and *hr* roles have all three.
</Sidenote>

Attendees apply to volunteer from your homepage (see [What volunteers see when they apply](./applying.md)). Each application says how the volunteer relates to each of your departments. Department leads can then request volunteers, and your volunteer staff assign them. Departments and their leads are set up in [Departments and leads](./departments.md).

<TableFigure title="How a volunteer relates to a department">

| Relation | Who sets it | Shown on the application as |
| --- | --- | --- |
| Interest | The volunteer, with the **Interest** box on the form. At most 5. | **Interested in** <small>Badge tooltip: *Interested in* and the department</small> |
| Experience | The volunteer, with the **Experience** box. | **Past experience** <small>Tooltip: *Has past experience with*</small> |
| Avoid | The volunteer, with the **Avoid** box. | **Will not volunteer for** <small>Hidden in the list until you click the red badge (**Show avoid selections**)</small> |
| Request | A department lead, with **Recruit Request** or **Staff Request**. | **Requested by** <small>Tooltip: *Requested by*</small> |
| Assignment | Your volunteer staff, with **Assign** (section 4). | **Assigned to** <small>Tooltip: *Assigned to*</small> |

</TableFigure>

The **Applications** list also sums each application up in a few columns, shown in Table 1.2.

<TableFigure title="Columns in the Applications list">

| Column | Values |
| --- | --- |
| **Volunteer Type** | **Staff** (has the *staff* role), **Staff Alumni** (was staff at your previous convention) or **Recruit**. |
| **Registration Status** | **Paid**, **Unpaid** or **Not Registered**, for this convention's badge. |
| **Status** | **Assigned** to at least one department, **Pending Request** from a lead, or **Unassigned**. |
| **Restrictions** | **Yes** if the person has a note in the *Restriction* category. See [User Notes](../usernotes/usernotes.md). |
| **Department(s)** | A coloured badge per relation in Table 1.1, or **No Preferences / Assignments**. |

</TableFigure>

## Find applications

1. Go to **Housekeeping › Volunteers › Dashboard**.

   <Result>The **Dashboard** shows three cards: **Volunteer Applications** (all applications), **Department(s)** and **Pending Applications** (applications not yet assigned to any department).</Result>

2. Click **Applications** in the sidebar.

   <Result>The **Volunteer Applications** page lists every application, with the columns **Name**, **Volunteer Type**, **Registration Status**, **Status**, **Restrictions** and **Department(s)**. The address ends in `/housekeeping/volunteers`.</Result>

3. Type in **Search...**: part of a name, username, email address, contact detail or department name.

   <Result>Only matching applications are listed. If none match, the table says *No results found.*</Result>

4. *(Optional)* Click the filter button in the **Status** column header. In the list that opens, untick **Assigned** and **Pending Request** so that only **Unassigned** is ticked, then click **Apply**.

   <Result>Only volunteers with no assignment are listed, and the column's filter button is highlighted. To remove the filter, open it again and click **Clear**.</Result>

:::note[Filtering by department and status together]
The **Status** and **Department(s)** filters work together. With **Assigned** and *Art Show* ticked, the list shows volunteers assigned to Art Show, not volunteers assigned anywhere who are interested in Art Show.
:::

## Review an application

1. On **Applications**, click a volunteer's name.

   <Result>A dialog headed with their name opens, with the sections **Volunteer**, **Contact**, **Registration**, **Department Preferences**, **Assignments & Requests**, **Application Answers** and **Notes**. Its footer has **Profile**, **Assign**, **Make Staff** (or **Remove Staff**) and a **…** button (**Options**). The address gains `?user=` and the person's user ID, so you can share a link to it.</Result>

2. *(If the button is shown)* Click **Previous years**.

   <Result>Each earlier convention they applied to has a section, named after that convention, listing **Assigned to**, **Requested by**, **Interested in**, **Past experience**, **Will not volunteer for**, their answers, **Date Created** and **Date Updated**. A **Staff** badge marks a year in which they were staff.</Result>

3. Click **Go back**.

   <Result>The application's details are shown again.</Result>

4. Under **Application Answers**, click the pencil (**Edit**) next to a question.

   <Result>The answer becomes an input, with **Save** and **Cancel** buttons.</Result>

5. Change the answer and click **Save**.

   <Result>The input closes and the new answer is shown under the question.</Result>

**Previous years** only appears for people who applied to an earlier convention in your organization. **Application Answers** only appears when your form has questions (see [Volunteer settings and form](./settings.md), section 3). **Profile** opens the person's Housekeeping profile.

## Assign departments

<Sidenote title="Emails on assignment">
With **Enable Volunteer Emails** on, an assignment emails the volunteer (*Volunteer Assignment:* and the department), the department's email address and each of its leads (*New Volunteer Assigned*).
</Sidenote>

Assigning a volunteer to a department approves their application for that department. You can assign one volunteer to several departments.

1. In the application dialog, click **Assign**.

   <Result>A button for each department replaces the details. A grey button with a **+** is a department they aren't assigned to, green means assigned, a yellow outline means a lead has requested them, and a red, disabled button is a department they avoid. The footer shows **Go back**.</Result>

2. Click a grey or yellow department button.

   <Result>The button turns green. A request for that department, if there was one, is replaced by the assignment.</Result>

3. *(Optional: to unassign)* Click a green department button.

   <Result>The button turns grey with a **+** again.</Result>

4. Click **Go back**.

   <Result>**Assigned to** lists the department, and **Status** reads **Assigned**. On the **Applications** list, the row's **Status** is **Assigned**.</Result>

The volunteer now sees *Your application has been approved!* and their departments on their **Volunteer Application** page.

## Staff

<Sidenote title="Remove Staff needs more">
**Remove Staff** also needs the `refund:create` permission, because it can take back a badge and issue a voucher. The default *hr* role doesn't have it; *admin* does.
</Sidenote>

**Make Staff** gives the person the *staff* role for this convention, which marks them as a staff member. When you start next year's convention, last year's staff get the *staffAlumni* role and show as **Staff Alumni**.

1. In the application dialog, click **Make Staff**.

   <Result>A dialog titled **Make Staff:** and the person's name asks *Are you sure you want to mark this user as staff?*, with **Make Staff** and **Cancel**.</Result>

2. Click **Make Staff**.

   <Result>You're back on the application. **Volunteer Type** shows a **Staff** badge, and the button now reads **Remove Staff**.</Result>

3. To undo it later, click **Remove Staff**.

   <Result>A dialog titled **Remove Staff:** and the name says *Removing the user from staff will remove the 'staff' role.* If the person has a paid badge, **Registration Options** shows a ticked box, *Remove paid* … *registration from* with the order number and price, and *Vouchers already used by the user:*. Below is an amount for a voucher, filled in with what they paid.</Result>

4. Untick the registration box if they should keep their badge, and change the voucher amount if it's wrong (`0` for no voucher). Then click **Remove Staff**.

   <Result>You're back on the application. The **Staff** badge is gone and the button reads **Make Staff** again.</Result>

:::caution[Watch out]
With the registration box ticked, **Remove Staff** unlinks their paid badge and puts the badge product back in their cart, unpaid. With an amount above 0, it issues them a single-use voucher named *Remove staff Voucher* for that amount. With **Enable Volunteer Emails** on, they also get the email *Staff status have been removed*.
:::

To give staff a lower badge price, add a discount limited to the *staff* role. See [Discounts](../products/discounts.md).

## Clear requests or delete an application

<Sidenote title="Delete needs its own permission">
**Delete Application** only appears in the **…** menu for people with `volunteer:delete`.
</Sidenote>

1. In the application dialog, click the **…** button and choose **Clear requests**.

   <Result>A dialog titled **Clear department requests** asks *Are you sure you want to clear all the department requests?*, with **Clear** and **Cancel**.</Result>

2. Click **Clear**.

   <Result>You're back on the application. **Requested by** shows *None*.</Result>

3. Click the **…** button and choose **Delete Application**.

   <Result>A dialog titled **Delete Application** asks *Are you sure you want to delete this volunteer application?*, with **Delete** and **Cancel**.</Result>

4. Click **Delete**.

   <Result>The dialog closes and the application is no longer listed on **Applications**.</Result>

:::caution[Watch out]
- An assigned volunteer's application can't be deleted. The attempt fails with *You are currently assigned to a department.* Unassign every department first (section 4, step 3).
- Deleting removes the application, its answers and all its department preferences and requests. It can't be undone.
:::

## From a user's profile

Staff with `volunteer:read` also see a person's application on their Housekeeping profile. Staff with `volunteer:update` can fill it in or change it on the person's behalf.

1. Open the person's profile, as in [Users and access](../quickstart/users-and-access.md), section 2, and click the **Volunteer** tab.

   <Result>The tab shows the volunteer application form with the person's answers. If they've applied, it starts with *Your application is awaiting assignment.* or *Your application has been approved!*. If they haven't, the form is empty.</Result>

2. Change the form, tick the Code of Conduct agreement if the form asks for it, and click **Submit**.

   <Result>A *Your volunteer application has been saved!* message appears. If the form was empty, the person now has an application, listed on **Applications**.</Result>

The **Volunteer** tab isn't shown for sub-accounts. When staff save the form, no confirmation email is sent to the person.

To email volunteers, see [Mass email](../attendees/mass-email.md).
