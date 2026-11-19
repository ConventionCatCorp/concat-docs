---
sidebar_position: 4
hide_table_of_contents: true
textbook: true
---

# What volunteers see when they apply

See the volunteer application as your attendees do.

:::info[In this guide]
Prerequisites, applying, status, changing or withdrawing, and blocked applications.
:::

## Before attendees can apply

<Sidenote title="Who sees which departments">
Applicants are offered only departments ticked **Show on public application form**.
</Sidenote>

Attendees apply from **Volunteering**, under **Applications** in the homepage sidebar. They need **Enable Volunteers** on, and must be signed in with a confirmed email address.

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

With **Enable Volunteer Emails** on, the applicant gets a _<Sample>ConCat</Sample> - Volunteer Confirmation_ email. Staff see the application on **Housekeeping › Volunteers › Applications**.

## Application status

1. In Housekeeping, assign the volunteer to a department (see [Volunteers](./volunteers.md), section 4). Then, as the attendee, open **Volunteering** again.

   <Result>A green box says _Your application has been approved!_ and lists the assigned departments.</Result>

With **Enable Volunteer Emails** on, the volunteer also gets an email titled _<Sample>ConCat</Sample> - Volunteer Assignment: <Sample noMarker>Art Show</Sample>_.

:::tip[Where the HR address comes from]
The messages show your **HR Email** address, set on the **Contact** tab of **Housekeeping › System › Settings**. Email subjects start with your **Notification Prefix**, _ConCat_ unless you've changed it.
:::

## Change or withdraw the application

1. On **Volunteering**, change an answer and click **Submit**.

   <Result>_Your volunteer application has been saved!_ appears, and, with **Enable Volunteer Emails** on, another _<Sample>ConCat</Sample> - Volunteer Confirmation_ email is sent.</Result>

2. Click **Delete Application**.

   <Result>An **Are you sure?** dialog asks _Are you sure you want to delete this volunteer application?_</Result>

3. Click **Delete**.

   <Result>_Your volunteer application has been deleted._ appears, and the homepage opens. An assigned volunteer's application stays instead, with _You are currently assigned to a department. Please contact <Sample>hr@example.com</Sample> if you no longer wish to volunteer._</Result>

Answers to questions set to **Disable after approval** can't be changed once the volunteer is assigned.

## When applying is blocked

Instead of the form, the page can show a message from Table 5.1.

<TableFigure title="Why an attendee can't apply">

| Message                                                                                                                                                        | Why                                                                                                         | What to do                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| _Volunteer applications for the convention are currently closed._                                                                                              | **Enable Volunteers** is off. The sidebar item is hidden too.                                               | Turn it on (see [Volunteer settings and form](./settings.md), section 1).   |
| **Email verification required** <small>_Please verify your email address before applying._</small>                                                             | The attendee hasn't confirmed their email address.                                                          | They click **Resend verification email** and follow the link in the email.  |
| _You are currently banned from volunteering at the convention._ <small>_Please contact <Sample>hr@example.com</Sample> if you think this is in error._</small> | The attendee has a **Ban** note with **Ban Category** set to **Volunteer**.                                 | To lift the ban, delete the note ([User Notes](../usernotes/usernotes.md)). |
| _Volunteering while chaperoning a child is not allowed at this event._ <small>_Thanks for offering, but your kids are more important._</small>                 | The attendee has their own registration and child registrations, and **Allow Parents to Volunteer** is off. | Turn on **Allow Parents to Volunteer** if parents may volunteer.            |

</TableFigure>

An attendee with child registrations but no registration of their own sees the form. With **Allow Parents to Volunteer** off, **Submit** then shows _One or more errors occurred while trying to process your request._ and _Parents cannot volunteer - Your kids come first._
