---
sidebar_position: 2
hide_table_of_contents: true
textbook: true
---

# Departments and leads

Departments are the teams volunteers apply to, such as *Registration* or *Art Show*. Their leads see the volunteers and request the ones they want.

:::info[In this guide]
Department fields (section 1), managing departments and leads (section 2), and what leads see on **My Department(s)** (section 3).
:::

## Departments

<Sidenote title="Who can do this">
Managing departments needs `volunteer:admin`. Hidden departments, and every department's email and leads, are only listed for people with `volunteer:dept:hidden`. The default *admin* and *hr* roles have both.
</Sidenote>

A new convention starts with common departments, such as *Art Show* and *Gophers*, with the placeholder email `support@concat.org`. Change each to your own address or delete it. Next year's convention copies its departments and leads from this one.

<TableFigure title="Department fields">

| Field | What it holds |
| --- | --- |
| **Name** | The name applicants see. At most 64 characters. |
| **Email** | A full email address. <small>It gets an email each time a volunteer is assigned to the department.</small> |
| **Leads** | Up to 10 people who lead the department (section 3). |
| **Show on public application form** | When unticked, applicants aren't offered the department. Staff still see it, marked *This is a hidden department.* |

</TableFigure>

## Manage departments and leads

1. Go to **Housekeeping › Volunteers › Volunteer Settings** and click the **Department(s)** tab.

   <Result>A **Department(s)** card lists your departments, with a green **+** button (**Create**) at its top right.</Result>

2. Click the green **+** button (Figure 2.1).

   <Result>An **Edit Entry** dialog opens with the fields in Table 1.1.</Result>

3. Fill in **Name** and **Email**, then click **Add**.

   <Result>An **Item created** message appears, and the department is listed.</Result>

4. On the department's row, click the blue pencil button (**Edit**).

   <Result>The **Edit Entry** dialog opens with the department's values.</Result>

5. In **Leads**, type part of a person's name and select them (shown as `#`, user ID and name). Repeat for each lead, then click **Save**.

   <Result>An **Item edited** message appears, and the **Leads** column lists each lead.</Result>

   To remove a lead, click the **×** on their name and click **Save**. The last lead can't be removed: saving with **Leads** empty fails with *leads does not contain 1 required value(s)*. Add the replacement first, or ask ConCat Support to clear the leads.

6. *(Optional: to hide a department from applicants)* Click **Edit**, untick **Show on public application form**, and click **Save**.

   <Result>An **Item edited** message appears, and the **Show on public application form** column reads **No**.</Result>

7. *(Optional: to delete a department)* Click the red trash button (**Delete**) on its row.

   <Result>A **Delete entry** dialog asks *Are you sure you want to delete? Data for this option from users will be erased.*</Result>

8. Click **Delete**.

   <Result>An **Item deleted** message appears, and the department is no longer listed.</Result>

<Figure
  src="/img/guides/volunteers/departments.webp"
  alt="The Department(s) card: a green add button, a search box, and a table of departments with Name, Email, Leads, Show on public application form and Actions, each row with a blue pencil and a red trash button."
  title="The Department(s) card"
  markers={[
    { n: 1, x: 94.5, y: 5.8, w: 3.4, h: 12.3 },
    { n: 2, x: 85.7, y: 60.5, w: 5.5, h: 15.5 },
    { n: 3, x: 90.9, y: 60.5, w: 5.5, h: 15.5 },
  ]}
>

1. The green **+** button (**Create**).
2. **Edit**.
3. **Delete**.

</Figure>

:::caution[Watch out]
Deleting a department also removes its leads and every volunteer's interest, experience, avoid, request and assignment for it. It can't be undone.
:::

## What leads see and do

<Sidenote title="No Housekeeping access needed">
A lead gets ConCat's internal *lead* role, which lets them use Mass Email and read volunteers' contact details. They need no other role to reach **My Department(s)**.
</Sidenote>

A lead sees volunteers who chose **Interest** or **Experience** for one of their departments, or were requested for or assigned to it. Leads only *request* volunteers; your volunteer staff assign them (see [Volunteers](./volunteers.md), section 4). To try these steps, name yourself a lead (section 2, step 5).

1. As the lead, click **My Department(s)** under your convention's name in the homepage sidebar. A lead who can already see all applications uses **Housekeeping › Volunteers › My Department(s)** instead.

   <Result>**My Department(s)** lists the lead's volunteers, in the same table as **Applications**.</Result>

2. Click a volunteer's name.

   <Result>The application dialog opens, with **Manage Requests** instead of **Assign**.</Result>

3. Click **Manage Requests**.

   <Result>Each of the lead's departments has **Recruit Request** and **Staff Request** buttons, or a disabled **Assigned** button if the volunteer is assigned there.</Result>

4. Click **Recruit Request**, or **Staff Request** to suggest them as staff.

   <Result>That department now shows a single yellow-outlined button, **Recruit Request** or **Staff Request**.</Result>

5. Click **Go back**.

   <Result>**Requested by** lists the department, with *(Staff Request)* after it for a staff request, and **Status** reads **Pending Request**.</Result>

6. *(Optional: to withdraw a request)* Click **Manage Requests**, then the yellow request button.

   <Result>The department shows both **Recruit Request** and **Staff Request** again.</Result>

Staff then see **Pending Request** on **Volunteers › Applications** and a yellow-outlined button in the **Assign** view. Clicking it assigns the volunteer.

Leads can also use **Mass Email** for their own departments' volunteers (see [Mass email](../attendees/mass-email.md)). They don't see answers to questions marked **Visible to admins only** unless they have `volunteer:update` (see [Volunteer settings and form](./settings.md), section 4).
