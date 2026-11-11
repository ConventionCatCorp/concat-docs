---
sidebar_position: 8
hide_table_of_contents: true
textbook: true
---

# Audit logs

ConCat records who did what, and when: changes to settings, roles, orders, registrations and accounts. This guide shows how to browse the audit log and narrow it down to the entries you need.

:::info[In this guide]
What the audit log records (section 1), browsing it (section 2), filtering by tag and type (section 3), and jumping to a date (section 4).
:::

## What the audit log records

<Sidenote title="Who can do this">
The audit log needs the **audit:read** permission. The default **admin** and **hr** roles have it.
</Sidenote>

Each entry records an action: when it happened, who did it, and what changed. Entries are grouped by the kind of thing they're about, called a *pivot*, such as users, roles or conventions. Within a pivot, you can look at the entries for one object, such as one user.

Entries made by ConCat Support staff while helping you are shaded pink and marked with a support agent icon.

You also see audit entries without opening the log: on a role's **History** tab, on a person's **Audit** tab, and on product and voucher pages.

## Browse the log

1. Go to **Housekeeping › System › Audit Logs**.

   <Result>The breadcrumb shows **Audit Logs**, and the page says *Select a pivot to browse logs by:* above a list of pivot names, such as **User** and **Role**.</Result>

2. Click a pivot.

   <Result>The breadcrumb shows **Audit Logs** › the pivot. The entries for that pivot are listed, each with its date and time and a description of the action. A **Search all tags...** box is at the top, and page controls are at the bottom.</Result>

3. Click the arrow at the left of an entry (**Toggle details**).

   <Result>The entry opens to show a **Show Raw** button, the entry's type as a link, and its tags, each with **+** and **−** buttons.</Result>

4. *(Optional)* Click **Show Raw**.

   <Result>The entry's full recorded data is shown as JSON, and the button reads **Hide Raw**.</Result>

The arrows at the bottom of the page move to newer and older entries, and to the first and last page. Each page holds 30 entries.

## Filter by tag and type

<Sidenote title="Older entries">
Tags were added later, so older entries may have none. To find them, filter by type, then exclude tags that newer entries have.
</Sidenote>

Tags describe an entry, such as **admin** for admin activity, **create**, **edit** or **delete** for the kind of action, or **order** and **volunteer** for the part of ConCat. Every entry also has a type, which names the exact action.

1. Click in **Search all tags...** and type part of a tag, such as `admin`.

   <Result>A list of matching tags appears, each with **+** and **−** buttons.</Result>

2. Click **+** next to a tag to show only entries with it, or **−** to hide entries with it.

   <Result>The list shows only the matching entries. The tag appears under the search box as a filter, with a button to remove it.</Result>

3. Open an entry's details (section 2, step 3) and click its type.

   <Result>Only entries of that type are listed, and a line reads **Type Filter:** followed by the type and **[remove]**.</Result>

4. Click **[remove]**, and the remove button on each tag filter.

   <Result>The filters are gone, and the full list for the pivot is shown again.</Result>

## Jump to a date

1. At the bottom of the page, click the date between the arrows.

   <Result>A dialog titled **Pick a time to browse from** opens, with a **Date** field.</Result>

2. Choose a date, then click **Update**.

   <Result>The log moves back to that date: it lists the entries from before it, newest first, and can start with a few entries from just after it. The date between the arrows changes too.</Result>
