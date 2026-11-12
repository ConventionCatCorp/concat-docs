---
sidebar_position: 4
hide_table_of_contents: true
textbook: true
---

# What volunteers see when they apply

See the volunteer application as your attendees do. Follow the steps with an attendee account.

:::info[In this guide]
Prerequisites (section 1), applying (section 2), status (section 3), changing or withdrawing (section 4), and blocked applications (section 5).
:::

## Before attendees can apply

<Sidenote title="Who sees which departments">
Applicants are offered only departments ticked **Show on public application form**. See [Departments and leads](./departments.md).
</Sidenote>

Attendees apply from **Volunteering**, under **Applications** in the homepage sidebar. They need **Enable Volunteers** on (see [Volunteer settings and form](./settings.md), section 1), and must be signed in with a confirmed email address.

The form is the one you build in [Volunteer settings and form](./settings.md), section 4. These steps assume a new convention's form.

## Apply

1. As an attendee, click **Volunteering** under **Applications** in the homepage sidebar.

   <Result>The **Volunteer Application** form opens. **Submit** is greyed out.</Result>

2. Read the Code of Conduct and tick **Volunteer Terms**.

   <Result>**Submit** can now be clicked.</Result>

3. In the department grid, tick **Interest** for six departments.

   <Result>The sixth box stays unticked, and *You can only select up to 5 interests* appears.</Result>

4. Tick **Avoid** for a department that has **Interest** or **Experience** ticked.

   <Result>**Interest** and **Experience** are cleared for that department.</Result>

5. Choose a preferred contact method, fill in the rest of the form, and click **Submit**.

   <Result>*Your volunteer application has been saved!* appears, and the top of the page says *Your application is awaiting assignment.*</Result>

With **Enable Volunteer Emails** on, the applicant gets a *Volunteer Confirmation* email. Staff see the application on **Housekeeping › Volunteers › Applications** (see [Volunteers](./volunteers.md), section 2).

## Application status

1. In Housekeeping, assign the volunteer to a department (see [Volunteers](./volunteers.md), section 4). Then, as the attendee, open **Volunteering** again.

   <Result>A green box says *Your application has been approved!* and lists the assigned departments.</Result>

With **Enable Volunteer Emails** on, the volunteer also gets an email titled *Volunteer Assignment:* and the department's name.

## Change or withdraw the application

1. On **Volunteering**, change an answer and click **Submit**.

   <Result>*Your volunteer application has been saved!* appears, and, with **Enable Volunteer Emails** on, another *Volunteer Confirmation* email is sent.</Result>

2. Click **Delete Application**.

   <Result>An **Are you sure?** dialog asks *Are you sure you want to delete this volunteer application?*</Result>

3. Click **Delete**.

   <Result>*Your volunteer application has been deleted.* appears, and the homepage opens. An assigned volunteer's application stays instead, with *You are currently assigned to a department. Please contact* your HR address *if you no longer wish to volunteer.*</Result>

Answers to questions set to **Disable after approval** can't be changed once the volunteer is assigned.

## When applying is blocked

Instead of the form, the page can show a message from Table 5.1. The HR address in a message is the **HR Email** from [Sending domain, senders and contact addresses](../templates/email-settings.md), section 3.

<TableFigure title="Why an attendee can't apply">

| Message | Why | What to do |
| --- | --- | --- |
| *Volunteer applications for the convention are currently closed.* | **Enable Volunteers** is off. The sidebar item is hidden too. | Turn it on (see [Volunteer settings and form](./settings.md), section 1). |
| **Email verification required** <small>*Please verify your email address before applying.*</small> | The attendee hasn't confirmed their email address. | They click **Resend verification email** and follow the link in the email. |
| *You are currently banned from volunteering at the convention.* <small>*Please contact* your HR address *if you think this is in error.*</small> | The attendee has a volunteer ban note. | See [User Notes](../usernotes/usernotes.md). |
| *Volunteering while chaperoning a child is not allowed at this event.* <small>*Thanks for offering, but your kids are more important.*</small> | The attendee has child registrations, and **Allow Parents to Volunteer** is off. | Turn on **Allow Parents to Volunteer** if parents may volunteer. |

</TableFigure>
