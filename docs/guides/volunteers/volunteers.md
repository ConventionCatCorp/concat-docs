---
sidebar_position: 1
hide_table_of_contents: true
textbook: true
---

# Volunteers

Find and review volunteer applications, assign volunteers to departments, make them staff, and clean up.

:::info[In this guide]
How volunteering works, finding applications, reviewing one, assigning departments, staff, clearing requests and deleting, and the profile's **Volunteer** tab.
:::

## How volunteering works

<Sidenote title="Who can do this">
Viewing applications needs `volunteer:read`. Assigning, staff changes and editing answers need `volunteer:update`; deleting needs `volunteer:delete`. The default *admin* and *hr* roles have all three.
</Sidenote>

Attendees apply from your homepage (see [What volunteers see when they apply](./applying.md)), saying how they relate to each department. Department leads request volunteers; your volunteer staff assign them. Departments and leads are set up in [Departments and leads](./departments.md).

<TableFigure title="How a volunteer relates to a department">

| Relation | Who sets it | Shown on the application as |
| --- | --- | --- |
| Interest | The volunteer. At most 5. | **Interested in** <small>Badge tooltip: *Interested in* and the department</small> |
| Experience | The volunteer. | **Past experience** <small>Tooltip: *Has past experience with*</small> |
| Avoid | The volunteer. | **Will not volunteer for** <small>Hidden in the list until you click the red badge (**Show avoid selections**)</small> |
| Request | A lead, with **Recruit Request** or **Staff Request**. | **Requested by** <small>Tooltip: *Requested by*</small> |
| Assignment | Your volunteer staff (section 4). | **Assigned to** <small>Tooltip: *Assigned to*</small> |

</TableFigure>

<TableFigure title="Columns in the Applications list">

| Column | Values |
| --- | --- |
| **Volunteer Type** | **Staff** (has the *staff* role), **Staff Alumni** (staff at your previous convention) or **Recruit**. |
| **Registration Status** | **Paid**, **Unpaid** or **Not Registered**, for this convention's badge. |
| **Status** | **Assigned** to at least one department, **Pending Request** from a lead, or **Unassigned**. |
| **Restrictions** | **Yes** if the person has a note in the *Restriction* category. See [User Notes](../usernotes/usernotes.md). |
| **Department(s)** | A coloured badge per relation in Table 1.1, or **No Preferences / Assignments**. |

</TableFigure>

## Find applications

1. Go to **Housekeeping › Volunteers › Dashboard**.

   <Result>Cards show the number of **Volunteer Applications**, **Department(s)** and **Pending Applications** (not yet assigned).</Result>

2. Click **Applications** in the sidebar.

   <Result>The **Volunteer Applications** page lists every application, with the columns in Table 1.2.</Result>

3. Type part of a name, username, email address, contact detail or department name in **Search...**.

   <Result>Only matching applications are listed, or *No results found.*</Result>

4. *(Optional)* Click the filter button in the **Status** column header (Figure 2.1), leave only **Unassigned** ticked, and click **Apply**.

   <Result>Only volunteers with no assignment are listed, and the filter button is highlighted. To remove the filter, open it and click **Clear**.</Result>

<Figure
  src="/img/guides/volunteers/status-filter.webp"
  alt="The Applications table header with the Status column's filter open: a search box, (Select all), Assigned, Pending Request and Unassigned, all ticked, and Clear and Apply buttons."
  title="A column filter"
  markers={[
    { n: 1, x: 55.6, y: 8.3, w: 2.9, h: 11.5 },
    { n: 2, x: 55.6, y: 18.9, w: 27.4, h: 77.5 },
    { n: 3, x: 68.4, y: 79.5, w: 13.5, h: 12 },
  ]}
>

1. The **Status** column's filter button. It's highlighted while a filter is active.
2. The values to keep. Untick **(Select all)** to start from none.
3. **Clear** removes the filter; **Apply** applies it.

</Figure>

:::note[Filtering by department and status together]
The **Status** and **Department(s)** filters combine. **Assigned** plus *Art Show* lists volunteers assigned to Art Show, not volunteers assigned anywhere who are interested in it.
:::

## Review an application

1. On **Applications**, click a volunteer's name.

   <Result>A dialog with their application opens. Its footer has **Profile**, **Assign**, **Make Staff** (or **Remove Staff**) and a **…** button (**Options**). The address gains `?user=` and their user ID, so you can share a link to it.</Result>

2. *(If the button is shown)* Click **Previous years**.

   <Result>Each earlier convention they applied to has a section with their choices, answers and dates. A **Staff** badge marks a year they were staff.</Result>

3. Click **Go back**.

   <Result>The application is shown again.</Result>

4. Under **Application Answers**, click the pencil (**Edit**) next to a question.

   <Result>The answer becomes an input, with **Save** and **Cancel**.</Result>

5. Change the answer and click **Save**.

   <Result>The new answer is shown under the question.</Result>

**Previous years** only appears for people who applied to an earlier convention in your organization; **Application Answers** only when your form has questions (see [Volunteer settings and form](./settings.md), section 3).

## Assign departments

<Sidenote title="Emails on assignment">
With **Enable Volunteer Emails** on, an assignment emails the volunteer (*Volunteer Assignment:* and the department), and the department's address and leads (*New Volunteer Assigned*).
</Sidenote>

Assigning approves the application for that department, and the volunteer sees *Your application has been approved!* A volunteer can have several departments.

1. In the application dialog, click **Assign**.

   <Result>A button appears for each department: grey with a **+** for not assigned, green for assigned, a yellow outline for requested by a lead, and red and disabled for avoided.</Result>

2. Click a grey or yellow department button.

   <Result>The button turns green. Any request for that department is replaced by the assignment.</Result>

3. *(Optional: to unassign)* Click a green department button.

   <Result>The button turns grey with a **+** again.</Result>

4. Click **Go back**.

   <Result>**Assigned to** lists the department, and **Status** reads **Assigned**.</Result>

## Staff

<Sidenote title="Remove Staff needs more">
**Remove Staff** also needs `refund:create`, because it can take back a badge and issue a voucher. The default *admin* role has it; *hr* doesn't.
</Sidenote>

**Make Staff** gives the person the *staff* role for this convention. When you start next year's convention, they get the *staffAlumni* role and show as **Staff Alumni**.

1. In the application dialog, click **Make Staff**.

   <Result>A **Make Staff:** dialog asks *Are you sure you want to mark this user as staff?*</Result>

2. Click **Make Staff**.

   <Result>**Volunteer Type** shows a **Staff** badge, and the button now reads **Remove Staff**.</Result>

3. To undo it later, click **Remove Staff**.

   <Result>A **Remove Staff:** dialog opens. If the person has a paid badge, it shows a ticked *Remove paid* … *registration from* box and a voucher amount set to what they paid.</Result>

4. Untick the registration box to let them keep their badge, correct the voucher amount if needed (`0` for no voucher), and click **Remove Staff**.

   <Result>The **Staff** badge is gone, and the button reads **Make Staff** again.</Result>

:::caution[Watch out]
With the registration box ticked, **Remove Staff** unlinks their paid badge and puts it back in their cart, unpaid. An amount above 0 issues a single-use voucher named *Remove staff Voucher*. With **Enable Volunteer Emails** on, they also get the email *Staff status have been removed*.
:::

To give staff a lower badge price, add a discount limited to the *staff* role. See [Discounts](../products/discounts.md).

## Clear requests or delete an application

<Sidenote title="Delete needs its own permission">
**Delete Application** only appears in the **…** menu for people with `volunteer:delete`.
</Sidenote>

1. In the application dialog, click the **…** button and choose **Clear requests**.

   <Result>A **Clear department requests** dialog asks *Are you sure you want to clear all the department requests?*</Result>

2. Click **Clear**.

   <Result>**Requested by** shows *None*.</Result>

3. Click the **…** button and choose **Delete Application**.

   <Result>A **Delete Application** dialog asks *Are you sure you want to delete this volunteer application?*</Result>

4. Click **Delete**.

   <Result>The application is no longer listed on **Applications**.</Result>

:::caution[Watch out]
- An assigned volunteer's application can't be deleted: it fails with *You are currently assigned to a department.* Unassign every department first (section 4, step 3).
- Deleting removes the application, its answers, preferences and requests. It can't be undone.
:::

## From a user's profile

Staff with `volunteer:read` see a person's application on their profile; with `volunteer:update` they can fill it in or change it for them.

1. Open the person's profile, as in [Users and access](../quickstart/users-and-access.md), section 2, and click the **Volunteer** tab.

   <Result>The volunteer form shows the person's status and answers, or is empty if they haven't applied.</Result>

2. Change the form, tick the Code of Conduct agreement if asked, and click **Submit**.

   <Result>*Your volunteer application has been saved!* appears. If the form was empty, the person now has an application on **Applications**.</Result>

Sub-accounts have no **Volunteer** tab. Saving here sends the person no confirmation email.

To email volunteers, see [Mass email](../attendees/mass-email.md).
