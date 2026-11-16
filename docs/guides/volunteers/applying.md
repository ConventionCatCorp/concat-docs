---
sidebar_position: 4
hide_table_of_contents: true
textbook: true
---

# What volunteers see when they apply

See the volunteer application as your attendees do. Follow the steps with an attendee account.

:::info[In this guide]
Prerequisites, applying, status, changing or withdrawing, and blocked applications.
:::

## Before attendees can apply

<Sidenote title="Who sees which departments">
Applicants are offered only departments ticked **Show on public application form**. See [Departments and leads](./departments.md).
</Sidenote>

Attendees apply from **Volunteering**, under **Applications** in the homepage sidebar. They need **Enable Volunteers** on (see [Volunteer settings and form](./settings.md), section 1), and must be signed in with a confirmed email address.

The form is the one you build in [Volunteer settings and form](./settings.md), section 4. These steps assume a new convention's form.

## Apply

1. As an attendee, click **Volunteering** under **Applications** in the homepage sidebar.

   <Result>The **Volunteer Application** form opens. **Submit** is grayed out.</Result>

2. Read the Code of Conduct and tick **Volunteer Terms**.

   <Result>**Submit** can now be clicked.</Result>

3. In the department grid, tick **Interest** for six departments.

   <Result>The sixth box stays unticked, and _You can only select up to 5 interests_ appears.</Result>

4. Tick **Avoid** for a department that has **Interest** or **Experience** ticked.

   <Result>**Interest** and **Experience** are cleared for that department.</Result>

5. Choose a preferred contact method, fill in the rest of the form, and click **Submit**.

   <Result>_Your volunteer application has been saved!_ appears, and the top of the page says _Your application is awaiting assignment._</Result>

With **Enable Volunteer Emails** on, the applicant gets a _Volunteer Confirmation_ email. Staff see the application on **Housekeeping › Volunteers › Applications** (see [Volunteers](./volunteers.md), section 2).

## Application status

1. In Housekeeping, assign the volunteer to a department (see [Volunteers](./volunteers.md), section 4). Then, as the attendee, open **Volunteering** again.

   <Result>A green box says _Your application has been approved!_ and lists the assigned departments.</Result>

With **Enable Volunteer Emails** on, the volunteer also gets an email titled _Volunteer Assignment:_ and the department's name.

## Change or withdraw the application

1. On **Volunteering**, change an answer and click **Submit**.

   <Result>_Your volunteer application has been saved!_ appears, and, with **Enable Volunteer Emails** on, another _Volunteer Confirmation_ email is sent.</Result>

2. Click **Delete Application**.

   <Result>An **Are you sure?** dialog asks _Are you sure you want to delete this volunteer application?_</Result>

3. Click **Delete**.

   <Result>_Your volunteer application has been deleted._ appears, and the homepage opens. An assigned volunteer's application stays instead, with _You are currently assigned to a department. Please contact_ your HR address _if you no longer wish to volunteer._</Result>

Answers to questions set to **Disable after approval** can't be changed once the volunteer is assigned.

## When applying is blocked

Instead of the form, the page can show a message from Table 5.1. The HR address in a message is the **HR Email** from [Sending domain, senders and contact addresses](../templates/email-settings.md), section 3.

<TableFigure title="Why an attendee can't apply">

| Message                                                                                                                                          | Why                                                                              | What to do                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| _Volunteer applications for the convention are currently closed._                                                                                | **Enable Volunteers** is off. The sidebar item is hidden too.                    | Turn it on (see [Volunteer settings and form](./settings.md), section 1).  |
| **Email verification required** <small>_Please verify your email address before applying._</small>                                               | The attendee hasn't confirmed their email address.                               | They click **Resend verification email** and follow the link in the email. |
| _You are currently banned from volunteering at the convention._ <small>_Please contact_ your HR address _if you think this is in error._</small> | The attendee has a volunteer ban note.                                           | See [User Notes](../usernotes/usernotes.md).                               |
| _Volunteering while chaperoning a child is not allowed at this event._ <small>_Thanks for offering, but your kids are more important._</small>   | The attendee has child registrations, and **Allow Parents to Volunteer** is off. | Turn on **Allow Parents to Volunteer** if parents may volunteer.           |

</TableFigure>
