---
sidebar_position: 8
hide_table_of_contents: true
textbook: true
---

# Audit logs

See who changed settings, roles, orders, registrations and accounts, and when, and narrow the log to the entries you need.

:::info[In this guide]
What the audit log records (section 1), browsing it (section 2), filtering by tag and type (section 3), jumping to a date (section 4).
:::

## What the audit log records

<Sidenote title="Who can do this">
The audit log needs **audit:read**, which the default **admin** and **hr** roles have.
</Sidenote>

Each entry records when an action happened, who did it and what changed. Entries are grouped by what they're about, called a *pivot*, such as users, roles or conventions; within a pivot you can view one object, such as one user.

Entries made by ConCat Support staff while helping you are shaded pink and marked with a support agent icon.

Audit entries also appear on a role's **History** tab, a person's **Audit** tab, and product and voucher pages.

## Browse the log

1. Go to **Housekeeping › System › Audit Logs**.

   <Result>The page says *Select a pivot to browse logs by:* above pivot names such as **User** and **Role**.</Result>

2. Click a pivot.

   <Result>The pivot's entries are listed with date, time and description, under a **Search all tags...** box.</Result>

3. Click the arrow at the left of an entry (**Toggle details**).

   <Result>The entry opens with a **Show Raw** button, its type as a link, and its tags, each with **+** and **−** buttons.</Result>

4. *(Optional)* Click **Show Raw**.

   <Result>The entry's full data shows as JSON, and the button reads **Hide Raw**.</Result>

The arrows at the bottom page through newer and older entries, 30 per page.

## Filter by tag and type

<Sidenote title="Older entries">
Tags were added later, so older entries may have none. To find them, filter by type, then exclude tags that newer entries have.
</Sidenote>

Tags describe an entry: **admin** for admin activity, **create**, **edit** or **delete** for the action, **order** or **volunteer** for the part of ConCat. An entry's type names the exact action.

1. Click in **Search all tags...** and type part of a tag, such as `admin`.

   <Result>Matching tags are listed, each with **+** and **−** buttons.</Result>

2. Click **+** next to a tag to show only entries with it, or **−** to hide them.

   <Result>Only matching entries are listed, and the tag shows under the search box as a filter.</Result>

3. Open an entry's details (section 2, step 3) and click its type.

   <Result>Only entries of that type are listed, under **Type Filter:**, the type and **[remove]**.</Result>

4. Click **[remove]**, and the remove button on each tag filter.

   <Result>The filters are gone and the pivot's full list is back.</Result>

## Jump to a date

1. At the bottom of the page, click the date between the arrows (Figure 4.1).

   <Result>A **Pick a time to browse from** dialog opens with a **Date** field.</Result>

2. Choose a date, then click **Update**.

   <Result>The log lists entries from before that date, newest first (it can start with a few from just after it), and the date between the arrows changes.</Result>

<Figure
  src="/img/guides/system/audit-date.webp"
  alt="The page controls below the log: first and previous arrows, the date Thu, November 12, 2026, and next and last arrows."
  title="The date between the arrows"
  width="336px"
  markers={[{ n: 1, x: 21.3, y: 13, w: 59, h: 73.1 }]}
>

1. The date, which opens **Pick a time to browse from**. The arrows page through newer and older entries.

</Figure>
