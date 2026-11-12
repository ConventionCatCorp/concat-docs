---
sidebar_position: 5
hide_table_of_contents: true
textbook: true
---

# Sub-accounts, children and minors

Let one account register and pay for a family or group, set who counts as a child or minor, and hand a sub-account to a grown-up dependent.

:::info[In this guide]
Sub-accounts, children and minors (section 1), turning on sub-accounts (section 2), age thresholds (section 3), registering other attendees (section 4), migrating to a full account (section 5), dealer assistants (section 6), minors who sign up themselves (section 7), and the old child registration (section 8).
:::

## Sub-accounts, children and minors

<Sidenote title="Who can do this">
The **Sub-accounts** and **Minimum Age and Children** cards need `system:settings:update`, which the default *admin* role has.
</Sidenote>

A **sub-account** is a person owned by another account, the account holder. It has no username or password: the account holder registers, edits and pays for them, and gets their email. There are two kinds:

- **Named attendee**: a first and last name, date of birth, address and phone number, but no email or username.
- **PII-free child**: no name, email, username or date of birth. Shown as *Child#* and a number with a **Child** badge, and treated as one year under the child age threshold.

Two age thresholds, counted on the convention's start date, decide who is a child or a minor (Table 1.1).

<TableFigure title="The two age thresholds">

| Threshold | Below it | Policy attendees see |
| --- | --- | --- |
| **Child Age Threshold** | The person can't create an account and can attend only as a sub-account. Nobody under 13 can create an account, whatever this is set to. | **Child Registration Error** |
| **Minor Age Threshold** | The person is a minor: they need a parent's consent and must give an emergency contact. Set it equal to **Child Age Threshold** to turn this off. | **Minor Registration Warning** |

</TableFigure>

Write these policies, and **Parent agreement for child registration**, on the **Terms** tab of **Housekeeping › System › Settings** ([Convention setup](../quickstart/convention-setup.md), section 3).

## Turn on sub-accounts

1. In **Housekeeping › Registration › Settings**, in the **Sub-accounts** card, set **Max Sub-Accounts Registration** and tick the options you need (Table 2.1), then click **Save** in that card.

   <Result>A **Sub-account settings saved** message appears.</Result>

<TableFigure title="Settings in the Sub-accounts card">

| Setting | What it does |
| --- | --- |
| **Max Sub-Accounts Registration** | How many attendees an account may register besides the account holder. **0** turns sub-accounts off. |
| **Allow PII-free child registration** | Account holders can add a child with no name, email, username or date of birth, with a **Register child (under** *age***)** button. |
| **Only allow child sub-accounts** | Every additional attendee must be a PII-free child; the account holder still registers themselves. <small>Needs **Allow PII-free child registration** ticked.</small> |

</TableFigure>

With **Allow PII-free child registration** ticked, anyone under the child age threshold must be registered as a child, not as a named attendee.

## Set the age thresholds

1. In the **Minimum Age and Children** card, set **Child Age Threshold** and **Minor Age Threshold**, then click **Save** in that card.

   <Result>A **Registration settings saved** message appears.</Result>

The thresholds also decide what a person sees at sign-up (section 7), which tiers they're offered (through each tier's **Minimum Purchase Age** and **Maximum Purchase Age**), and the minor and child warnings in the Cashier UI.

## Register other attendees

<Sidenote title="The limit">
The **Attendees** box counts the account holder too: *2 / 4* when **Max Sub-Accounts Registration** is 3.
</Sidenote>

The account holder must register themselves first; until then, the **Attendees** box asks them to.

1. As an attendee who has registered, open **Attendance** in the homepage sidebar.

   <Result>Under **Your registrations**, an **Attendees** box says *You can register 1 more attendee under your account.* (or the number left), with a **Register another attendee** button.</Result>

2. Click **Register another attendee** (**Register another attendee (Ages** *age***+)** when PII-free children are allowed).

   <Result>The **Event registration** page opens on a **New user** step, asking for the person's names and **Date of birth**.</Result>

3. Fill in the details. *(Optional)* Tick **Use different mailing address** and enter the address and **Phone number**; otherwise the account holder's address is used. Click **Continue**.

   <Result>**Registration Type** lists the tiers for this person's age; from here, see [How attendees register](./registering.md), sections 3 to 5.</Result>

4. Choose a tier, fill in the form and click **Register**, then click **Go to dashboard**.

   <Result>**Attendance** shows a second card, numbered 2, with the person's name, tier and **Unpaid**.</Result>

5. *(If PII-free children are allowed)* Click **Register child (under** *age***)**.

   <Result>**Registration Type** opens directly. **Select** stays unavailable until the checkbox above the tiers, with your **Parent agreement for child registration** text, is ticked.</Result>

6. Tick the checkbox, choose a tier, fill in the form including the emergency contact, and click **Register**.

   <Result>**Attendance** shows a card named *Child#* and a number, with a **Child** badge and **Unpaid**.</Result>

7. Click **Complete registration** at the top of **Attendance** and pay.

   <Result>One checkout pays for every unpaid attendee. The status card says, for example, *All set! You and 1 others are ready to attend* and your convention's name.</Result>

<TableFigure title="Messages in the Attendees box and on Register">

| Message | Why |
| --- | --- |
| *You have reached the maximum number of attendees under one account.* | The account has reached **Max Sub-Accounts Registration**. |
| *This event does not allow that kind of sub-account.* | That kind isn't allowed, such as a named attendee when **Only allow child sub-accounts** is ticked. |
| *Attendees under* *age* *cannot be registered with a name. Register them as a child instead.* | On **New user**, the date of birth is under the child threshold and PII-free children are allowed. A **Register child** link follows. |
| *No products available for this age range. Please contact the event organizers for more information.* | No tier allows this person's age. |

</TableFigure>

If PII-free children aren't allowed and a named attendee is under the child threshold, **New user** adds a checkbox with your **Parent agreement for child registration** text, which must be ticked to continue.

### Manage a sub-account

Each sub-account's card has **Register** or **Modify**, and a menu on the arrow next to it:

- **Edit personal details**: **Update** in the dialog shows *Personal details updated*. Not for children.
- **View order** and its number: opens the order, once paid.
- **Delete registration**: removes an unpaid registration, without confirmation.
- **Transfer registration**: if transfers are on; see [Transfer Registration](./transfer.md).
- **Migrate Sub-Account**: section 5.
- **Delete attendee**: removes an unpaid sub-account, after a confirmation that it can't be undone, and shows **Account deleted**.

## Migrate a sub-account to a full account

Migration hands a sub-account to the dependent, who then signs in with their own username and password. The account holder can no longer register or pay for them.

It isn't possible for a PII-free child, anyone under 13 or under the child age threshold, or an email address already in use.

1. As the account holder, on **Attendance**, open the menu on the arrow next to the sub-account's **Modify** or **Register** button and choose **Migrate Sub-Account**.

   <Result>A **Migrate Sub-Account** dialog asks for **Enter Your Password** and the dependent's email address.</Result>

2. Enter your own password and the dependent's email address, then click **Migrate**.

   <Result>An **Account migration started.** message appears, and the dependent is emailed a link.</Result>

3. As the dependent, open the link in the email.

   <Result>The **Account Migration** page says **Almost Done!** and asks for a username and password.</Result>

4. Enter a **Username** and a password, then click **Submit**.

   <Result>An **Account successfully migrated.** message appears, and the dependent is signed in to their own account.</Result>

<TableFigure title="Messages when migration is refused">

| Message | Why |
| --- | --- |
| *This user is not old enough to have an individual account for the convention.* | The dependent is under the child age threshold. |
| *This user is under the age of 13 and therefore is unable to be migrated. Please wait until the user is 13 years of age.* | The dependent is under 13, or is a PII-free child. |
| *Email already in use.* | Another account uses that email address. |
| *Incorrect password.* | The account holder's password was wrong. |

</TableFigure>

## Sub-accounts as dealer assistants

An approved dealer whose table type allows assistants can add their sub-accounts as assistants instantly, without the confirmation email other assistants need.

1. As an approved dealer, on your dealer page, click **Manage Assistants**.

   <Result>Below **Add Assistant**, a **Your Sub-accounts** card lists your sub-accounts, each with **Add**.</Result>

2. Click **Add** next to a sub-account.

   <Result>An **Assistant added.** message appears, and the sub-account is listed under **Current Assistants** by name, as **Accepted**.</Result>

## Minors who sign up themselves

People between the child and minor thresholds can sign up themselves, as minors. If the child threshold is below the minor threshold, the sign-up age check offers three choices: over the minor age, between the two, or under the child age.

1. In a private browser window, start creating an account, and at the age check choose the middle option: *I was born before* a date, followed by an age range such as *(16 to 18 years old)*.

   <Result>Sign-up continues. On the **Convention Policies** step, your **Minor Registration Warning** appears below your terms and conditions.</Result>

The last option stops sign-up with **We're sorry**. Identity verification, where ConCat Support has turned it on, replaces this age check. Full sign-up: [Attendee accounts and sign-in](../attendees/accounts.md).

## The old child registration

The deprecated *Child registration* feature, on a **Child registration** page in the attendee sidebar, added badge-name-only child badges to a parent's registration. It will be removed.

:::caution[Watch out]
If the **Minimum Age and Children** card shows *Child Registrations are going away.* and a **Max Child Registration** field marked **Deprecated**, your event still uses the old feature. Move to sub-accounts: it won't be available for your next convention, and once **Max Child Registration** is 0 it can't be turned back on. New conventions start with it off, and the card says *Looking for "Max Child Registration"?* instead.
:::
