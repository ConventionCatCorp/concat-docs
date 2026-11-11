---
sidebar_position: 5
hide_table_of_contents: true
textbook: true
---

# Sub-accounts, children and minors

Sub-accounts let one account register a family or group and pay for everyone in one checkout. This guide sets them up, sets the ages that decide who is a child or a minor, and shows what account holders see, including handing an account over to a dependent who has grown up.

:::info[In this guide]
Sub-accounts, children and minors explained (section 1), turning on sub-accounts (section 2), the age thresholds (section 3), registering other attendees (section 4), migrating a sub-account to a full account (section 5), sub-accounts as dealer assistants (section 6), minors who sign up themselves (section 7), and the old child registration (section 8).
:::

## Sub-accounts, children and minors

<Sidenote title="Who can do this">
The **Sub-accounts** and **Minimum Age and Children** cards need the `system:settings:update` permission, which the default *admin* role has.
</Sidenote>

A **sub-account** is a person owned by another account, the account holder. A sub-account has no username or password of its own. The account holder registers, edits and pays for them, and email meant for them goes to the account holder. There are two kinds:

- **Named attendee**: has a first and last name, a date of birth, an address and a phone number, but no email or username.
- **PII-free child**: has no name, email, username or date of birth. They're shown as *Child#* and a number, with a **Child** badge, and are treated as one year under the child age threshold.

Two age thresholds, counted on the convention's start date, decide who is a child or a minor (Table 1.1).

<TableFigure title="The two age thresholds">

| Threshold | Below it | Policy attendees see |
| --- | --- | --- |
| **Child Age Threshold** | A person can't create their own account, and can only attend as a sub-account. Nobody under 13 can create an account, whatever this is set to. | **Child Registration Error** |
| **Minor Age Threshold** | A person is a minor: they need a parent's consent, and must give an emergency contact when they register. Set it to the same value as **Child Age Threshold** to turn this off. | **Minor Registration Warning** |

</TableFigure>

You write these policies, and **Parent agreement for child registration**, on the **Terms** tab of **Housekeeping › System › Settings** ([Convention setup](../quickstart/convention-setup.md), section 3).

## Turn on sub-accounts

1. Go to **Housekeeping › Registration › Settings**. In the **Sub-accounts** card, set **Max Sub-Accounts Registration** to the number of *additional* attendees one account may register, and tick the options you need from Table 2.1. Then click **Save** in that card.

   <Result>A **Sub-account settings saved** message appears.</Result>

<TableFigure title="Settings in the Sub-accounts card">

| Setting | What it does |
| --- | --- |
| **Max Sub-Accounts Registration** | How many attendees an account may register besides the account holder. **0** turns sub-accounts off. |
| **Allow PII-free child registration** | Account holders can add a child with no name, email, username or date of birth. Adds a **Register child (under** *age***)** button. |
| **Only allow child sub-accounts** | Every additional attendee must be a PII-free child. The account holder still registers themselves. <small>Available only once **Allow PII-free child registration** is ticked.</small> |

</TableFigure>

With **Allow PII-free child registration** ticked, a named attendee must be at least the child age threshold: anyone younger has to be registered as a child.

## Set the age thresholds

1. In the **Minimum Age and Children** card, set **Child Age Threshold** and **Minor Age Threshold**, then click **Save** in that card.

   <Result>A **Registration settings saved** message appears.</Result>

The thresholds also decide what a person sees when they create an account (section 7), which tiers they're offered (through each tier's **Minimum Purchase Age** and **Maximum Purchase Age**), and the minor and child warnings in the Cashier UI.

## Register other attendees

<Sidenote title="The limit">
The **Attendees** box counts the account holder and their sub-accounts against the maximum, for example *2 / 4* when **Max Sub-Accounts Registration** is 3.
</Sidenote>

Follow these steps as an attendee to see what account holders see. The account holder must register themselves first; until then the **Attendees** box says *Enter your own registration details first before adding other attendees.*

1. As an attendee who has registered, open **Attendance** in the homepage sidebar.

   <Result>Under the heading **Your registrations**, an **Attendees** box shows how many people the account has out of the maximum, and *You can register 1 more attendee under your account.* (or the number left). Below it are **Register another attendee** and, if PII-free children are allowed, **Register child (under** *age***)**.</Result>

2. Click **Register another attendee** (**Register another attendee (Ages** *age***+)** when PII-free children are allowed).

   <Result>The **Event registration** page opens on the **New user** step, followed by **Registration Type**, **Additional Information** and **Review**. It asks for **First Name**, **Last Name**, **Preferred Name** (optional) and **Date of birth**, with a **Use different mailing address** checkbox.</Result>

3. Fill in the details. *(Optional)* Tick **Use different mailing address** and enter the address and **Phone number**; otherwise the account holder's address is used. Click **Continue**.

   <Result>The **Registration Type** step lists the tiers for this person's age. From here, registering works as in [How attendees register](./registering.md), sections 3 to 5.</Result>

4. Choose a tier, fill in the form and click **Register**, then click **Go to dashboard**.

   <Result>**Attendance** shows a second card, numbered 2, with the person's name, tier and the status **Unpaid**.</Result>

5. *(If PII-free children are allowed)* Click **Register child (under** *age***)**.

   <Result>The **Registration Type** step opens with no **New user** step. Above the tiers is a checkbox with your **Parent agreement for child registration** text, and the tiers' **Select** buttons are unavailable until it's ticked.</Result>

6. Tick the checkbox, choose a tier, fill in the form, including the emergency contact, and click **Register**.

   <Result>**Attendance** shows a card named *Child#* and a number, with a **Child** badge and the status **Unpaid**.</Result>

7. Click **Complete registration** at the top of **Attendance** and pay.

   <Result>Every unpaid attendee on the account is paid for in one checkout. The status card says, for example, *All set! You and 1 others are ready to attend* and your convention's name, with the number of other attendees, followed by everyone's names.</Result>

<TableFigure title="Messages in the Attendees box and on Register">

| Message | Why |
| --- | --- |
| *You have reached the maximum number of attendees under one account.* | The account has as many attendees as **Max Sub-Accounts Registration** allows. |
| *This event does not allow that kind of sub-account.* | The kind of attendee isn't allowed, for example a named attendee when **Only allow child sub-accounts** is ticked. |
| *Attendees under* *age* *cannot be registered with a name. Register them as a child instead.* | On **New user**, the date of birth is under the child threshold and PII-free children are allowed. A **Register child** link follows. |
| *No products available for this age range. Please contact the event organizers for more information.* | No tier allows this person's age. |

</TableFigure>

If PII-free children aren't allowed and a named attendee's date of birth is under the child threshold, the **New user** step adds a checkbox with your **Parent agreement for child registration** text, which must be ticked to continue.

### Manage a sub-account

Each sub-account's card has **Register** (if they haven't registered) or **Modify**, and a menu on the arrow next to it:

- **Edit personal details**: opens an **Edit Personal Details** dialog; **Update** shows *Personal details updated*. Not offered for children.
- **View order** and its number: opens the order, once paid.
- **Delete registration**: removes an unpaid registration, without confirmation.
- **Transfer registration**: if transfers are on; see [Transfer Registration](./transfer.md).
- **Migrate Sub-Account**: section 5.
- **Delete attendee**: removes an unpaid sub-account, after *Are you sure you want to delete this attendee? This action cannot be undone.* An **Account deleted** message appears.

## Migrate a sub-account to a full account

When a dependent is old enough for their own account, the account holder can hand it over. The dependent then signs in with their own username and password, and the account holder can no longer register or pay for them.

Migration isn't possible for a PII-free child, for anyone under 13, or for anyone under the child age threshold. The dependent's email address must not already be in use.

1. As the account holder, on **Attendance**, open the menu on the arrow next to the sub-account's **Modify** or **Register** button, and choose **Migrate Sub-Account**.

   <Result>A **Migrate Sub-Account** dialog asks for **Enter Your Password** and the dependent's email address, labelled with their name and *'s Email Address*.</Result>

2. Enter your own password and the dependent's email address, then click **Migrate**.

   <Result>An **Account migration started.** message appears, and the dependent is emailed a link to finish.</Result>

3. As the dependent, open the link in the email.

   <Result>The **Account Migration** page opens, saying **Almost Done!** and *In order to finish migrating your account, you need to provide a username and password.*</Result>

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

An approved dealer whose table type allows assistants can add their own sub-accounts as assistants at once, without the confirmation email other assistants need.

1. As an approved dealer, on your dealer page, click **Manage Assistants**.

   <Result>Below **Add Assistant**, a **Your Sub-accounts** card says *Add one of your sub-accounts as an assistant instantly. No confirmation is required.* and lists the sub-accounts, each with **Add**.</Result>

2. Click **Add** next to a sub-account.

   <Result>An **Assistant added.** message appears, and the sub-account is listed under **Current Assistants** as **Accepted**. Its name is blank there, because the list shows usernames and a sub-account has none.</Result>

## Minors who sign up themselves

A person between the child and minor age thresholds can create their own account, as a minor. When the child threshold is lower than the minor threshold, the age check at sign-up has three choices: born before a date (over the minor age), between the two ages, and born after a date (under the child age).

1. In a private browser window, start creating an account on your instance, and at the age check choose the middle option. It reads *I was born before* a date, followed by the age range, such as *(16 to 18 years old)*.

   <Result>The sign-up continues. On the **Convention Policies** step, your **Minor Registration Warning** is shown below your terms and conditions, above the two checkboxes.</Result>

Choosing the last option stops the sign-up with **We're sorry**. Identity verification, where ConCat Support has turned it on, replaces this age check. The full sign-up is covered in [Attendee accounts and sign-in](../attendees/accounts.md).

## The old child registration

The older *Child registration* feature added badge-name-only child badges to a parent's registration, from a **Child registration** page in the attendee sidebar. It is deprecated and will be removed.

:::caution[Watch out]
If the **Minimum Age and Children** card shows *Child Registrations are going away.* and a **Max Child Registration** field marked **Deprecated**, your event still uses the old feature. Plan to move to sub-accounts: the feature won't be available for your next convention, and once **Max Child Registration** is 0 it can't be turned back on. New conventions start with it off, and the card instead says *Looking for "Max Child Registration"?*
:::
