---
sidebar_position: 12
hide_table_of_contents: true
textbook: true
---

# Kiosk

A kiosk is a device at your registration desk where walk-up attendees create an account, register and, if you allow it, pay, before going to the cashier for their badge. This guide sets up kiosk mode and shows what attendees do at the kiosk.

:::info[In this guide]
What the kiosk is (section 1), the **Kiosk** settings card (section 2), starting a kiosk (section 3), registering at the kiosk (section 4), and the automatic reset (section 5).
:::

## What the kiosk is

<Sidenote title="Not a check-in">
The kiosk is for self-*registration*. Attendees still collect their badge at the Cashier UI. Scanning tickets on staff devices is QuikTicket, covered in [Devices and QuikTicket](./cashier/devices.md).
</Sidenote>

The kiosk is a page of your instance, at the address ending in `/kiosk`. Nothing in ConCat links to it: staff open it on the device. It walks each attendee through four steps, **Policies**, **User info**, **Badge Info** and **Payment**, then signs them out and resets for the next person.

The kiosk uses your normal registration form ([Registration form editor](./form-editor.md)) and your public badge tiers. Registration must be open.

## The Kiosk settings card

<Sidenote title="Who can do this">
The **Kiosk** card is on **Registration Settings**, which needs the `system:settings:update` permission.
</Sidenote>

<TableFigure title="Settings in the Kiosk card">

| Setting | What it does |
| --- | --- |
| **Disable QuikTicket** | Hides **Devices** from the Attendees module's sidebar. <small>Not a kiosk setting, but it lives on this card.</small> |
| **Allow Online Payments in Kiosk Mode** | Attendees can pay by card at the kiosk. Without it, the payment step is skipped and they pay at the cashier desk. <small>Leave it off if the kiosk runs on shared devices that aren't secure.</small> |
| **Kiosk mode timeout** | Resets the kiosk when nobody uses it for a while (section 5). |

</TableFigure>

1. Go to **Housekeeping › Registration › Settings**. In the **Kiosk** card, tick the settings you need, then click **Save** in that card.

   <Result>A **Kiosk settings saved** message appears.</Result>

## Start a kiosk

1. On the kiosk device, open your instance's address followed by `/kiosk`.

   <Result>The kiosk opens with the steps **Policies**, **User info**, **Badge Info** and **Payment** along the top, and an **Age check** asking the attendee to confirm their age.</Result>

If the kiosk can't start, it shows **Kiosk Unavailable**, *The following errors are preventing this kiosk from starting:*, the reasons in Table 3.1, and *Please contact a member of staff for assistance.*

<TableFigure title="Why a kiosk won't start">

| Reason shown | What to do |
| --- | --- |
| *System is currently in maintenance mode.* | Turn off maintenance mode in **Housekeeping › System › Settings**. |
| *No attendance types are available for registration.* | Create at least one badge tier ([Badge Products](./attendance/attendance.md)). |
| *Kiosk registration is not supported while captcha is enabled.* | Captcha is set for your instance by ConCat. Contact ConCat Support. |

</TableFigure>

## Register at the kiosk

Follow these steps on the kiosk as an attendee would.

1. Choose the age option that applies.

   <Result>The **Convention Policies** step shows your convention policy, with the checkboxes *I have read and agree to the convention policies above.* and *I have read and agree to the* **Privacy Policy**. If the attendee is too young, an error is shown and the kiosk resets after 10 seconds.</Result>

2. Tick both checkboxes and click **Continue**.

   <Result>The **User info** step shows a login form (**Username**, **Password**, **Login**) and, below it, a sign-up form starting with **Email Address**, then the attendee's details, an **Account Creation** card and a **Continue** button.</Result>

3. Either log in with an existing account, or fill in the sign-up form and click **Continue**. *(Optional)* To keep the account after the event, tick **I would like to create an account.** and choose a **Username** and password.

   <Result>The **Badge Info** step shows your badge tiers and your registration form.</Result>

4. Choose a tier, fill in the form and click **Register**.

   <Result>The **Payment** step shows *If you want to pay by cash or card at the cashier desk, click the Pay at Cashier button to skip this step.*, with **Pay at Cashier** and **Pay now** buttons and the checkout. If online payments are off, the kiosk goes straight to the last screen.</Result>

5. Click **Pay at Cashier**, or pay in the checkout.

   <Result>The kiosk says **Please Proceed to the Cashier Desk!**, *Your registration is now complete and you have been logged out.* and *Please ensure that you have your ID ready for the cashier to verify.* If the attendee hasn't paid, it adds *As you have not yet paid, you will need to make a cash or card payment at the cashier desk.* It ends with **This kiosk will reset shortly.**</Result>

6. Wait 10 seconds.

   <Result>A **You are now logged out.** message appears, and the kiosk is back at the **Age check** for the next attendee.</Result>

An attendee who doesn't tick **I would like to create an account.** gets an account with a generated username and password, which they can't sign in to. *If you choose not to register an account, your information will be deleted after the end of the convention.* The **Email Address** field tells attendees whose address is already in use to go to the registration desk.

If your instance requires identity verification, which ConCat Support turns on, the kiosk asks for it after the age check.

## Automatic reset

With **Kiosk mode timeout** ticked, the kiosk watches for input. After 45 seconds without any (120 seconds just after identity verification), it shows a warning, then resets.

1. Start a registration on the kiosk, then leave it untouched for 45 seconds.

   <Result>An **Are You Still There?** box says *We haven't detected any input from you in a little while.* and *For security, we'll automatically reset this kiosk in*, counting down from 30 seconds.</Result>

2. Let the countdown finish.

   <Result>A **You are now logged out.** message appears, and the kiosk is back at the **Age check**.</Result>

Any key press or mouse movement during the countdown closes the box and continues the registration. If something goes wrong on the kiosk, an error page offers **Reset Kiosk**.
