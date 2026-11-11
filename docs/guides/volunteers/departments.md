---
sidebar_position: 2
hide_table_of_contents: true
textbook: true
---

# Departments and leads

Departments are the teams volunteers apply to, such as *Registration* or *Art Show*. Each department can have leads, who see the volunteers for their departments and ask for the ones they want.

:::info[In this guide]
What a department holds (section 1), creating, editing and deleting departments and naming leads (section 2), and what a lead sees and does on **My Department(s)** (section 3).
:::

## Departments

<Sidenote title="Who can do this">
Managing departments needs the `volunteer:admin` permission. Hidden departments, and every department's email and leads, are only listed for people with `volunteer:dept:hidden`. The default *admin* and *hr* roles have both.
</Sidenote>

A new convention starts with a list of common departments, such as *Art Show*, *Gophers* and *Registration*. Their email addresses are a placeholder, `support@concat.org`, so change each one to an address of your own, or delete the departments you don't need. When you start next year's convention, its departments and leads are copied from this one.

<TableFigure title="Department fields">

| Field | What it holds |
| --- | --- |
| **Name** | The department's name, as applicants see it. At most 64 characters. |
| **Email** | A full email address for the department. <small>It receives an email each time a volunteer is assigned to the department.</small> |
| **Leads** | Up to 10 people who lead the department (section 3). |
| **Show on public application form** | When unticked, applicants aren't offered the department. On the application form, staff still see it, marked *This is a hidden department.* |

</TableFigure>

## Manage departments and leads

1. Go to **Housekeeping › Volunteers › Volunteer Settings** and click the **Department(s)** tab.

   <Result>A **Department(s)** card lists your departments with the columns **Name**, **Email**, **Leads**, **Show on public application form** and **Actions**. A green **+** button (**Create**) is at the top right of the card. The address ends in `/housekeeping/volunteers/settings/departments`.</Result>

2. Click the green **+** button.

   <Result>An **Edit Entry** dialog opens with **Name**, **Email**, **Leads** and **Show on public application form**, and the buttons **Add** and **Cancel**.</Result>

3. Fill in **Name** and **Email**, then click **Add**.

   <Result>An **Item created** message appears, and the department is listed.</Result>

4. On the department's row, click the blue pencil button (**Edit**).

   <Result>The **Edit Entry** dialog opens with the department's current values, and the buttons **Save** and **Cancel**.</Result>

5. In **Leads**, type part of a person's name and select them from the results, which are shown as `#` and the user ID, then the name. Repeat for each lead, then click **Save**.

   <Result>An **Item edited** message appears. The **Leads** column lists each lead's name, linked to their profile.</Result>

   To remove a lead, click the **×** on their name in **Leads** and click **Save**. You can't remove a department's last lead this way: saving with **Leads** empty fails with *leads does not contain 1 required value(s)*. Add the replacement lead first, or ask ConCat Support to clear the leads.

6. *(Optional: to hide a department from applicants)* Click **Edit** again, untick **Show on public application form**, and click **Save**.

   <Result>An **Item edited** message appears, and the department's **Show on public application form** column reads **No**.</Result>

7. *(Optional: to delete a department)* On its row, click the red trash button (**Delete**).

   <Result>A **Delete entry** dialog asks *Are you sure you want to delete? Data for this option from users will be erased.*, with **Delete** and **Cancel**.</Result>

8. Click **Delete**.

   <Result>An **Item deleted** message appears, and the department is no longer listed.</Result>

:::caution[Watch out]
Deleting a department also removes every volunteer's interest, experience, avoid, request and assignment for it, and its leads. It can't be undone.
:::

## What leads see and do

<Sidenote title="No Housekeeping access needed">
Naming someone a lead gives them ConCat's internal *lead* role, which lets them use Mass Email and read volunteers' contact details. They don't need any other role to reach **My Department(s)**.
</Sidenote>

A lead sees the volunteers who chose **Interest** or **Experience** for one of their departments, plus anyone requested for or assigned to it. Leads can *request* volunteers, but only your volunteer staff can assign them (see [Volunteers](./volunteers.md), section 4).

These steps are what a lead does. To try them yourself, name yourself a lead (section 2, step 5).

1. As the lead, click **My Department(s)** in the homepage sidebar, under your convention's name. A lead who can already see all applications uses **Housekeeping › Volunteers › My Department(s)** instead.

   <Result>The **My Department(s)** page lists the volunteers for the lead's departments, in the same table as **Applications**. The address ends in `/housekeeping/volunteers/lead`.</Result>

2. Click a volunteer's name.

   <Result>The application dialog opens. Its footer has **Manage Requests** instead of **Assign**, and no **Make Staff** or **…** button.</Result>

3. Click **Manage Requests**.

   <Result>Each of the lead's departments is listed with a **Recruit Request** button and a **Staff Request** button. A department the volunteer is already assigned to shows a disabled **Assigned** button instead.</Result>

4. Click **Recruit Request**, or **Staff Request** to suggest them as staff.

   <Result>That department now shows a single yellow-outlined button, **Recruit Request** or **Staff Request**.</Result>

5. Click **Go back**.

   <Result>**Requested by** lists the department, with *(Staff Request)* after it for a staff request, and **Status** reads **Pending Request**.</Result>

6. *(Optional: to withdraw a request)* Click **Manage Requests**, then the yellow request button.

   <Result>The department shows both **Recruit Request** and **Staff Request** again.</Result>

Staff see the request on **Volunteers › Applications**: the row's **Status** is **Pending Request**, and in the **Assign** view the department's button has a yellow outline. Clicking it assigns the volunteer.

Leads also see **Mass Email** in the Volunteers sidebar, limited to the volunteers of their own departments. See [Mass email](../attendees/mass-email.md). Answers to questions marked **Visible to admins only** are not shown to leads, unless they also have `volunteer:update` (see [Volunteer settings and form](./settings.md), section 4).
