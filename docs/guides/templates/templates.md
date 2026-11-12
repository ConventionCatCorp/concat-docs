---
sidebar_position: 1
hide_table_of_contents: true
textbook: true
---

# Email Template Overrides

Reword ConCat's emails for one convention or your whole organization, and turn off the ones you don't want.

:::info[In this guide]
How overrides work, finding a template, writing an override, disabling and reactivating an email, variables, and template errors.
:::

## How templates work

<Sidenote title="Who can do this">
Email templates need `email:templates`, which the default *admin* role has, and access to **System › Settings**.
</Sidenote>

Every email comes from one of 33 templates, listed in [Emails ConCat sends](./system-emails.md). Each has ConCat's **Default Template** and up to two overrides:

- A **convention** override applies to this convention only, and isn't copied to next year's.
- An **organization** override applies to every convention in your organization.

ConCat sends the first that exists: **convention override, then organization override, then the default.** The version in use has a green **Current** badge. Table 1.1 includes disabled overrides (section 4).

<TableFigure title="Which version is sent">

| Convention override | Organization override | What is sent |
| --- | --- | --- |
| None | None | The default template |
| None | Exists, not disabled | The organization override |
| Exists, not disabled | Either | The convention override |
| Disabled | Either | Nothing |
| None | Disabled | Nothing |

</TableFigure>

:::note[Templates you can't turn off or change]
- Required templates, such as password resets and payment receipts, can't be disabled. [Emails ConCat sends](./system-emails.md) marks them.
- The `register` template (new account confirmation) is locked: its card says *To modify this template, contact support.* ConCat can enable editing it for your organization.
:::

## Find a template

1. Go to **Housekeeping › System › Settings** and click the **Email Settings** tab.

   <Result>Under **Email Templates**, each template has a card with a **Default**, **Overridden** or **Disabled** badge and a **Modify** button. Overridden templates come first.</Result>

2. Click **Modify** on the `volunteerConfirm` template.

   <Result>The `volunteerConfirm` page opens with three cards: **Default Template** (marked **Current**), **Level Convention Override** and **Level Organization Override**. Each override card has **Create Override**.</Result>

## Write an override

Templates are HTML with [Handlebars](https://handlebarsjs.com/) expressions in double braces, such as `{{convention.name.long}}` (section 5).

1. On the **Level Convention Override** card, click **Create Override**. (Use **Level Organization Override** for every convention.)

   <Result>The **New Convention Level Override** editor opens with the default template in a large box, a **Preview** and **Available Variables**.</Result>

2. Change the text in the large box, for example by adding a paragraph.

   <Result>About a second after you stop typing, the **Preview** shows your change. **Submit** can't be clicked until the preview has updated.</Result>

3. *(Optional)* Enter a **Subject Override (optional)**, then click **Submit**.

   <Result>*New override has been created.* appears. The **Level Convention Override** card shows your version, marked **Current**, with a pencil button (**Edit**) and a trash button (**Delete**). On **Email Settings**, the badge reads **Overridden**.</Result>

4. To change the override, click its pencil button (**Edit**).

   <Result>The **Modifying Convention Level Override** editor opens with your text.</Result>

5. Change the text, then click **Submit**.

   <Result>*Override has been modified.* appears, and the card's preview shows the change.</Result>

6. To go back to the default, click the override's trash button (**Delete**).

   <Result>A **Delete override?** dialog asks *Are you sure you want to delete this template override?*</Result>

7. Click **Delete**.

   <Result>*Override has been deleted.* appears. The card says *No convention level override exists for this template.* again, and **Default Template** is **Current**.</Result>

:::note[Subjects and testing]
- Every subject starts with your **Notification Prefix** and a dash (**System › Settings › Convention**). Leave the subject override empty to keep the default.
- There's no test send. The preview uses your convention's details, your account as the recipient, and sample values for the rest.
- Emails aren't translated: each level holds one version, in the language you write it.
:::

## Disable or reactivate an email

<Sidenote title="Only when creating">
**Disable Template** is only offered in a new override. To disable an email that already has an override at that level, delete the override first (section 3, step 6).
</Sidenote>

An email that isn't required can be turned off for one convention or the organization. These steps use `registrationQR`.

1. Click **Modify** on the `registrationQR` template, then **Create Override** on the **Level Convention Override** card.

   <Result>The editor opens with a red **Disable Template** button beside its title.</Result>

2. Click **Disable Template**.

   <Result>A **Disable email template?** dialog says *This action will prevent the email template registrationQR from being sent at all.*</Result>

3. Click **Disable**.

   <Result>*New override has been created.* appears. The card says *This email will not be sent for this convention.* and has a **Reactivate Template** button. On **Email Settings**, the badge reads **Disabled**.</Result>

4. Click **Reactivate Template**.

   <Result>A **Reactivate email template?** dialog opens.</Result>

5. Click **Reactivate Template**.

   <Result>*Reactivation complete.* appears, and the card says *No convention level override exists for this template.* again.</Result>

:::caution[Watch out]
A convention override wins over an organization override. If you disable an email for the organization, a convention with its own override still sends it.
:::

## Variables

Variables are values ConCat fills in for each email, such as the recipient's name. Write them in double braces, with dots to reach values inside: `{{convention.name.long}}` is your convention's full name.

The editor's **Available Variables** card lists the template's variables with example values. An arrow means the variable holds other values; *list, ex:* marks a list of values; **Complex List** marks a list of items with values of their own.

Every template can use `user` (the recipient) and `convention` (Table 5.1). Each template adds its own, such as `orderId` for refund emails or `department` for volunteer assignments.

<TableFigure title="Variables in every template">

| Variable | Holds |
| --- | --- |
| `user.name` | The name ConCat uses to address the person. |
| `user.firstName`, `user.lastName`, `user.preferredName`, `user.username`, `user.email`, `user.id` | The person's account details. |
| `user.address.line1`, `.line2`, `.city`, `.state`, `.zipcode`, `.country` | The person's address. |
| `convention.name.long`, `convention.name.short` | Your convention's full and short names. |
| `convention.notificationPrefix` | The text that starts every subject. |
| `convention.publicUrl` | Your instance's web address. |
| `convention.marketingUrl` | Your **Marketing URL**. |
| `convention.emailDomain` | The domain your email is sent from. |
| `convention.start.year` | The year your convention starts. |

</TableFigure>

:::tip
- Keep the building blocks starting with `{{>`, such as `{{>greeting user}}` and `{{>footer department="Human Resources"}}`: they write the greeting and signature.
- Keep the triple braces around web addresses, such as `{{{convention.publicUrl}}}`, so HTML escaping doesn't change them.
:::

## Errors

The editor checks your template as you type. **Submit** can't be clicked while there's an error.

1. In the editor, type `{{notAVariable}}` in the large box.

   <Result>About a second later, a red badge beside the editor's title says *'notAVariable' is Invalid*.</Result>

2. Delete `{{notAVariable}}`, then type `{{` with no closing braces.

   <Result>A red **Parse Error** badge appears. The **Preview** shows *Template was unable to be parsed.* and *A parsing error occurred. View the error below and remove or fix the offending expression.*, then the error, such as *Parse error on line 14:* with a pointer to the problem.</Result>

3. Delete the `{{`.

   <Result>The badge disappears, the preview shows the email, and **Submit** can be clicked again.</Result>

*Invalid* means the variable doesn't exist for this template: check its spelling against **Available Variables**. A **Parse Error** usually means unmatched braces.
