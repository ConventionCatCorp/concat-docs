---
sidebar_position: 12
hide_table_of_contents: true
textbook: true
---

# Kiosk

Set up a device at your registration desk where walk-up attendees create an account, register and, if you allow it, pay, before collecting their badge at the cashier.

:::info[In this guide]
What the kiosk is (section 1), the **Kiosk** settings card (section 2), starting a kiosk (section 3), registering at the kiosk (section 4), and the automatic reset (section 5).
:::

## What the kiosk is

<Sidenote title="Not a check-in">
Attendees still collect their badge at the Cashier UI. Scanning tickets on staff devices is QuikTicket; see [Devices and QuikTicket](./cashier/devices.md).
</Sidenote>

The kiosk is the page at your instance's address followed by `/kiosk`. Nothing links to it: staff open it on the device. It takes each attendee through **Policies**, **User info**, **Badge Info** and **Payment**, then signs them out and resets.

It uses your registration form ([Registration form editor](./form-editor.md)) and public badge tiers, and needs registration to be open.

## The Kiosk settings card

<Sidenote title="Who can do this">
The **Kiosk** card is on **Registration Settings**, which needs `system:settings:update`.
</Sidenote>

<TableFigure title="Settings in the Kiosk card">

| Setting | What it does |
| --- | --- |
| **Disable QuikTicket** | Hides **Devices** from the Attendees module's sidebar. <small>Not a kiosk setting, but it's on this card.</small> |
| **Allow Online Payments in Kiosk Mode** | Attendees can pay by card at the kiosk. Without it, the payment step is skipped and they pay at the cashier desk. <small>Leave it off on shared devices that aren't secure.</small> |
| **Kiosk mode timeout** | Resets the kiosk when nobody uses it for a while (section 5). |

</TableFigure>

1. In **Housekeeping › Registration › Settings**, tick the settings you need in the **Kiosk** card, then click **Save** in that card.

   <Result>A **Kiosk settings saved** message appears.</Result>

## Start a kiosk

1. On the kiosk device, open your instance's address followed by `/kiosk`.

   <Result>The kiosk opens on an **Age check**, with **Policies**, **User info**, **Badge Info** and **Payment** along the top.</Result>

If the kiosk can't start, it shows **Kiosk Unavailable** and the reasons in Table 3.1.

<TableFigure title="Why a kiosk won't start">

| Reason shown | What to do |
| --- | --- |
| *System is currently in maintenance mode.* | Turn off maintenance mode in **Housekeeping › System › Settings**. |
| *No attendance types are available for registration.* | Create at least one badge tier ([Badge Products](./attendance/attendance.md)). |
| *Kiosk registration is not supported while captcha is enabled.* | ConCat sets captcha for your instance: contact ConCat Support. |

</TableFigure>

## Register at the kiosk

Do these steps on the kiosk, as an attendee.

1. Choose the age option that applies.

   <Result>The **Convention Policies** step shows your convention policy and two agreement checkboxes. If the attendee is too young, an error is shown and the kiosk resets after 10 seconds.</Result>

2. Tick both checkboxes and click **Continue**.

   <Result>The **User info** step shows a login form and, below it, a sign-up form starting with **Email Address**.</Result>

3. Log in with an existing account, or fill in the sign-up form and click **Continue**. *(Optional)* To keep the account after the event, tick **I would like to create an account.** and choose a **Username** and password.

   <Result>The **Badge Info** step shows your badge tiers and registration form.</Result>

4. Choose a tier, fill in the form and click **Register**.

   <Result>The **Payment** step shows **Pay at Cashier**, **Pay now** and the checkout. With online payments off, the kiosk goes straight to the last screen.</Result>

5. Click **Pay at Cashier**, or pay in the checkout.

   <Result>The kiosk says **Please Proceed to the Cashier Desk!** and that the attendee is logged out (and, if unpaid, must pay at the cashier desk), ending with **This kiosk will reset shortly.**</Result>

6. Wait 10 seconds.

   <Result>A **You are now logged out.** message appears, and the kiosk is back at the **Age check**.</Result>

An attendee who doesn't tick **I would like to create an account.** gets an account with a generated username and password, which they can't sign in to. *If you choose not to register an account, your information will be deleted after the end of the convention.* If the **Email Address** is already in use, the field tells the attendee to go to the registration desk.

If ConCat Support has turned on identity verification for your instance, the kiosk asks for it after the age check.

## Automatic reset

With **Kiosk mode timeout** ticked, after 45 seconds without input (120 seconds just after identity verification), the kiosk shows a warning, then resets.

1. Start a registration on the kiosk, then leave it untouched for 45 seconds.

   <Result>An **Are You Still There?** box counts down from 30 seconds to an automatic reset.</Result>

2. Let the countdown finish.

   <Result>A **You are now logged out.** message appears, and the kiosk is back at the **Age check**.</Result>

Any key press or mouse movement during the countdown closes the box and continues the registration. If something goes wrong on the kiosk, an error page offers **Reset Kiosk**.
