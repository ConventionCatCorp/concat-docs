---
sidebar_position: 1
hide_table_of_contents: true
textbook: true
---

# Email Template Overrides

ConCat sends your attendees and staff emails for many actions, such as a successful payment or a changed email address. This guide changes the wording of those emails for one convention or for your whole organization, and turns off the ones you don't want.

:::info[In this guide]
How templates and overrides work (section 1), finding a template (section 2), writing an override (section 3), disabling and reactivating an email (section 4), the variables you can use (section 5), and errors in a template (section 6).
:::

## How templates work

<Sidenote title="Who can do this">
Email templates need the `email:templates` permission, which the default *admin* role has. The **Email Settings** tab is on **System › Settings**, so you also need the permission to open that page.
</Sidenote>

Every email ConCat sends comes from one of 33 templates. [Emails ConCat sends](./system-emails.md) lists them all. Each template has ConCat's **Default Template**, and you can add up to two overrides:

- A **convention** override applies to this convention only. It isn't copied to next year's convention.
- An **organization** override applies to every convention in your organization.

ConCat uses the first that exists, in this order: **convention override, then organization override, then the default.** On a template's page, the version in use has a green **Current** badge. Table 1.1 shows the order with disabled overrides (section 4).

<TableFigure title="Which version is sent">

| Convention override | Organization override | What is sent |
| --- | --- | --- |
| None | None | The default template |
| None | Exists, not disabled | The organization override |
| Exists, not disabled | Either | The convention override |
| Disabled | Either | Nothing |
| None | Disabled | Nothing |

</TableFigure>

The template list marks each template with a badge: **Default** (no overrides), **Overridden** or **Disabled**.

:::note[Templates you can't turn off or change]
- Templates that ConCat needs, such as password resets and payment receipts, can't be disabled. [Emails ConCat sends](./system-emails.md) marks which ones.
- The `register` template, which confirms a new account's email address, is locked. Its card says *To modify this template, contact support.* ConCat can enable editing it for your organization.
:::

## Find a template

1. Go to **Housekeeping › System › Settings** and click the **Email Settings** tab.

   <Result>Below the sending domain and senders, the **Email Templates** heading lists every template, each in a card with its name, a **Default**, **Overridden** or **Disabled** badge, a short description and a **Modify** button. Templates with an override come first. The address ends in `/housekeeping/system/settings/emails`.</Result>

2. Click **Modify** on the `volunteerConfirm` template.

   <Result>A page titled `volunteerConfirm` opens, with the template's description and three cards: **Default Template**, with a **Current** badge and a preview of the email; **Level Convention Override**; and **Level Organization Override**. Each override card says, for example, *No convention level override exists for this template.* and has a **Create Override** button.</Result>

## Write an override

Templates are HTML with [Handlebars](https://handlebarsjs.com/) expressions in double braces, such as `{{convention.name.long}}`. Section 5 explains them.

1. On the **Level Convention Override** card, click **Create Override**. (Use **Level Organization Override** for every convention.)

   <Result>An editor titled **New Convention Level Override** opens. It has a **Subject Override (optional)** field showing the default subject, a large box holding the default template, and **Cancel** and **Submit**. Below is a **Preview** card, and beside it **Available Variables**.</Result>

2. Change the text in the large box, for example by adding a paragraph.

   <Result>About a second after you stop typing, the **Preview** shows the email with your change. **Submit** can't be clicked until the preview has updated.</Result>

3. *(Optional)* Enter a **Subject Override (optional)**, then click **Submit**.

   <Result>A *New override has been created.* message appears, and the template's page is shown again. The **Level Convention Override** card shows a preview of your version, with a **Current** badge, a pencil button (**Edit**) and a trash button (**Delete**). On **Email Settings**, the template's badge reads **Overridden**.</Result>

4. To change the override, click its pencil button (**Edit**).

   <Result>The editor opens, titled **Modifying Convention Level Override**, with your text.</Result>

5. Change the text, then click **Submit**.

   <Result>An *Override has been modified.* message appears, and the card's preview shows the change.</Result>

6. To go back to the default, click the override's trash button (**Delete**).

   <Result>A dialog titled **Delete override?** asks *Are you sure you want to delete this template override?*, with **Delete** and **Cancel**.</Result>

7. Click **Delete**.

   <Result>An *Override has been deleted.* message appears. The card says *No convention level override exists for this template.* again, and **Default Template** is **Current**.</Result>

:::note[Subjects and testing]
- Every subject starts with your **Notification Prefix** and a dash, from **System › Settings › Convention**. Leave the subject override empty to keep the default subject.
- There's no test send. The preview fills in your convention's details, your own account as the recipient, and sample values for everything else.
- Emails aren't translated. Each level holds one version, in whatever language you write it.
:::

## Disable or reactivate an email

<Sidenote title="Only when creating">
**Disable Template** is only offered in a new override. To disable an email that already has an override at that level, delete the override first (section 3, step 6).
</Sidenote>

An email that isn't required can be turned off for one convention or for the organization. These steps use `registrationQR`, which can be disabled.

1. Click **Modify** on the `registrationQR` template, then **Create Override** on the **Level Convention Override** card.

   <Result>The editor opens with a red **Disable Template** button beside its title.</Result>

2. Click **Disable Template**.

   <Result>A dialog titled **Disable email template?** says *This action will prevent the email template registrationQR from being sent at all.*, with **Disable** and **Cancel**.</Result>

3. Click **Disable**.

   <Result>A *New override has been created.* message appears. The **Level Convention Override** card says *This email will not be sent for this convention.* and has a **Reactivate Template** button. On **Email Settings**, the template's badge reads **Disabled**.</Result>

4. Click **Reactivate Template**.

   <Result>A dialog titled **Reactivate email template?** asks *Are you sure you want to reactivate "registrationQR"? This convention will be configured to send this email again.*, with **Reactivate Template** and **Cancel**.</Result>

5. Click **Reactivate Template**.

   <Result>A *Reactivation complete.* message appears, and the card says *No convention level override exists for this template.* again.</Result>

:::caution[Watch out]
A convention override wins over an organization override. If you disable an email at the organization level, a convention that has its own override still sends it. The **Reactivate email template?** dialog on the organization card warns about this.
:::

## Variables

The power of templates comes from variables: values ConCat fills in for each email, such as the recipient's name. You write a variable in double braces, with dots to reach the values inside it: `{{convention.name.long}}` is your convention's full name.

The **Available Variables** card in the editor lists every variable the template can use, with an example value for each. A variable with an arrow holds other values; one marked *list, ex:* is a list of values; one marked **Complex List** is a list of items, each with values of its own. The help icon beside the card's title opens this section.

Every template can use `user`, the person the email is for, and `convention`. Table 5.1 lists their values. Each template adds its own, such as `orderId` for refund emails or `department` for volunteer assignments.

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
- Keep the building blocks that start with `{{>`, such as `{{>greeting user}}` and `{{>footer department="Human Resources"}}`. They write the greeting and the signature.
- Web addresses in the default templates use triple braces, such as `{{{convention.publicUrl}}}`, so that they aren't changed by HTML escaping. Keep them that way.
:::

## Errors

While you edit, the editor checks your template. **Submit** can't be clicked while there's an error.

1. In the editor, type `{{notAVariable}}` in the large box.

   <Result>About a second later, a red badge beside the editor's title says *'notAVariable' is Invalid*.</Result>

2. Delete `{{notAVariable}}`, then type `{{` with no closing braces.

   <Result>A red **Parse Error** badge appears. The **Preview** card first shows a general **Something Went Wrong** box with a **Retry** button, then *Template was unable to be parsed.* and *A parsing error occurred. View the error below and remove or fix the offending expression.*, followed by the error, such as *Parse error on line 14:* with a pointer to the problem.</Result>

3. Delete the `{{`.

   <Result>The badge disappears, the preview shows the email, and **Submit** can be clicked again.</Result>

An *Invalid* variable is a name that doesn't exist for this template: check its spelling against **Available Variables**. A **Parse Error** usually means unmatched braces.
