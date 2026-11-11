---
sidebar_position: 7
hide_table_of_contents: true
textbook: true
---

# Vouchers

A voucher is a code worth an amount of money, such as a comped registration, a prize or a refund as credit. Attendees enter the code at checkout, or you issue the voucher straight to their cart.

:::info[In this guide]
How vouchers work (section 1), the voucher list (section 2), creating a voucher (section 3), a voucher's page (section 4), issuing a voucher to attendees (section 5), editing or deleting a voucher (section 6), a one-time voucher on a single order (section 7), and what attendees see at checkout (section 8).
:::

## How vouchers work

<Sidenote title="Who can do this">
Vouchers need the `comp:create` permission. The default *admin*, *finance* and *hr* roles have it.
</Sidenote>

- **Organization-wide:** vouchers belong to your organization, so a code works in every convention in it, and codes must be unique.
- **Value:** the voucher's **Amount** comes off the order's total.
- **Uses:** **Max Uses** is how many orders may use the code; `-1` means unlimited. One attendee can't use the same voucher on two paid orders.
- **Dates:** the code works from **Available From**, and until **Available Until** if you set one.
- **Products:** with **Restrict voucher to products**, the code is only accepted on an order that includes one of those products.
- **Stacking:** an order can use more than one voucher only if every one of them allows stacking.

<TableFigure title="Voucher statuses">

| Status | Means |
| --- | --- |
| **Available** | The code can be used. |
| **Fully Claimed** | It has been used by **Max Uses** orders. |
| **Expired** | **Available Until** has passed. |
| **Deleted / Archived** | The voucher was deleted (section 6). |

</TableFigure>

A voucher that allows stacking also shows a **Can Be Stacked** badge.

## The voucher list

1. Go to **Housekeeping › Store Management › Vouchers**.

   <Result>The **Vouchers** page opens, with a **Create New Voucher** button above a searchable table. Its columns are **Code**, **Display Name**, **Value**, **Total Uses** (uses out of the maximum, or **Unlimited**), **Available To**, **Status** and **Internal**. The address ends in `/housekeeping/store/vouchers`.</Result>

2. Type part of a code or display name in the search box (*Search...*).

   <Result>Only the matching vouchers are listed.</Result>

## Create a voucher

1. On **Vouchers**, click **Create New Voucher**.

   <Result>A form opens under the breadcrumb **Vouchers › Create**. **Voucher Code** already holds a random code in three groups of five characters. The other fields are **Display Name** (Optional), **Amount**, **Max Uses** (*For unlimited uses, use -1.*), **Available From**, **Available Until**, **Restrict voucher to products** and **Allow Voucher Stacking**.</Result>

2. Keep the code, type your own, or click the dice button (**Generate random code**) for a new one. Fill in the fields in Table 3.1, then click **Create Voucher**.

   <Result>A **New voucher has been created!** message appears, and the voucher's page opens on its **Summary** tab (section 4).</Result>

<TableFigure title="Voucher fields">

| Field | What it holds |
| --- | --- |
| **Voucher Code** | The code attendees type. It can't be changed later. <small>Codes aren't case-sensitive at checkout.</small> |
| **Display Name** (Optional) | A name shown with the code, for example in the attendee's order summary. |
| **Amount** | The voucher's value. It can't be zero, and can't be changed later. |
| **Max Uses** | How many orders may use it. `-1`, the default, is unlimited. |
| **Available From** | When the code starts working. It starts at the current time. |
| **Available Until** | When the code stops working. <small>Tick its checkbox to set it.</small> |
| **Restrict voucher to products** | The code is only accepted on orders that include one of these products. <small>Search by product name or ID.</small> |
| **Allow Voucher Stacking** | *Voucher Stacking allows users to use multiple vouchers at once. All vouchers being used by the user must be stackable for this to work.* |

</TableFigure>

:::caution[Watch out]
If a code is already used anywhere in your organization, the voucher isn't created and *The voucher code is already in use.* is shown. Pick another code.
:::

## A voucher's page

1. On **Vouchers**, click the voucher's row.

   <Result>The voucher's page opens under the breadcrumb **Vouchers** › the code, with the tabs **Summary**, **Orders**, **Audit**, **Issue** and **Edit**. **Summary** lists **Value**, **Available From**, **Available To**, **Code**, **Issuer ID**, **Max Number of Uses**, **Can Voucher Be Stacked?**, **Total Uses** and **Created at**, and **Product Restrictions** if it has any.</Result>

2. Click the **Orders** tab.

   <Result>A table lists each order that used the voucher, with the columns **User**, **Order ID**, **Order Status** and **Paid At**.</Result>

The **Audit** tab, which shows the voucher's history, needs the `audit:read` permission. A deleted voucher has no **Issue** or **Edit** tab.

## Issue a voucher to attendees

Issuing puts the voucher on each chosen person's current unpaid order for this convention, so they don't need the code. If someone has no unpaid order, an empty one is started for them.

1. On the voucher's page, click the **Issue** tab.

   <Result>The tab explains *This will issue the voucher #* (the voucher's ID) *to all of the selected users for their current order.* It has a **User(s)** field, an **Attempt to fulfill associated orders automatically.** checkbox and an **Issue Voucher** button.</Result>

2. Choose the people in **User(s)**. Tick **Attempt to fulfill associated orders automatically.** if their orders should be completed when the voucher covers them. Then click **Issue Voucher**.

   <Result>A message says *Voucher #… has been issued to … user(s).*, with the voucher's ID and the number of people.</Result>

:::note[Completing orders automatically]
With the checkbox ticked, ConCat tries to complete each person's latest order. An order isn't completed if something is still left to pay, or if the cart is empty.
:::

:::caution[Watch out]
Issuing skips the checks made at checkout: the voucher is added even if it's outside its dates, used up, or restricted to products that aren't in the order.
:::

## Edit or delete a voucher

1. On the voucher's page, click the **Edit** tab.

   <Result>An **Edit Voucher** card says *You can edit the voucher details below. Please note that editing the voucher will not affect any existing orders.* Its form has **Voucher Code** and **Amount** read-only, and an **Update Voucher** button. Below it is a **Delete Voucher** card.</Result>

2. Change **Display Name**, **Max Uses**, the dates, **Restrict voucher to products** or **Allow Voucher Stacking**, then click **Update Voucher**.

   <Result>A **Voucher has been updated!** message appears.</Result>

3. To delete the voucher, click **Delete** in the **Delete Voucher** card.

   <Result>A **Delete Voucher** dialog asks *Are you sure you want to delete the voucher?*</Result>

4. Click **Delete** in the dialog.

   <Result>A **Voucher has been deleted successfully.** message appears. The **Issue** and **Edit** tabs are gone, and the **Vouchers** list shows the voucher as **Deleted / Archived**.</Result>

:::caution[Watch out]
When you edit a voucher, **Restrict voucher to products** starts empty even if the voucher has restrictions. Leave it empty to keep the products listed under **Product Restrictions** on the **Summary** tab; choosing products replaces them. Deleting a voucher can't be undone.
:::

## A one-time voucher on one order

From an unpaid order in Housekeeping, you can create a voucher that only that order can use, for example to comp part of an attendee's purchase. ConCat gives it a random code.

1. Go to **Housekeeping › Store Management › Orders** and click an unpaid order.

   <Result>The order's page opens under the breadcrumb **Orders › Order #** and its number. Its **Vouchers** card lists the order's vouchers, or says *There are no vouchers for this order.*, and has a **+** button in its header.</Result>

2. In the **Vouchers** card, click **+**.

   <Result>A **Create voucher #** dialog opens, with the order's number. It says *Create a one-time use voucher for this order.* and has **Display Name** (Optional), **Amount**, **Cancel** and **Create**.</Result>

3. Enter a **Display Name**, such as *Comp from the registration desk*, and the **Amount**. Then click **Create**. Although **Display Name** is marked *Optional*, leaving it empty fails with *displayName is required*.

   <Result>The dialog closes. The **Vouchers** card lists the voucher's code, display name and amount, with a **-** button.</Result>

4. To remove it, click **-** on its row.

   <Result>A **Delete voucher for #** dialog asks *Are you sure you want to delete the voucher valued at* and the amount.</Result>

5. Click **Delete**.

   <Result>The voucher is no longer listed on the order.</Result>

The **+** and **-** buttons are only shown on unpaid orders. The rest of the order's page is covered in [Orders](../orders/orders.md).

## What attendees see at checkout

1. As an attendee, add a product to your cart, then click **Cart** in the homepage sidebar.

   <Result>The **Checkout** page opens. While there's something to pay, it shows a **Have a voucher to redeem?** card, with a code field and a **Redeem Voucher** button.</Result>

2. Enter the voucher code and click **Redeem Voucher**.

   <Result>The **Order Summary** shows a line **Discount:** with the voucher's display name and code, and its amount taken off. If the voucher covers everything left to pay, the order is completed.</Result>

When a code is refused, the first three messages in Table 8.1 appear in red under the code field. The others appear as an error message, after *One or more errors occurred while trying to process your request.*

<TableFigure title="When a code is refused">

| Message | Why |
| --- | --- |
| *Invalid Voucher.* | No voucher has this code, or it has reached **Max Uses**, as a one-time order voucher (section 7) has once it's on the order. |
| *This voucher cannot be used with other vouchers.* | The order already has a voucher, and one of them doesn't allow stacking. |
| *Your balance is too low to redeem another voucher.* | There's nothing left to pay. |
| *Voucher is expired.* | It's before **Available From** or after **Available Until**. |
| *Voucher is restricted to only specific products* | None of its products is in the order. |
| *You already redeemed this voucher.* | This attendee has used it on a paid order, or it's already on this order. |

</TableFigure>

If an issued voucher covers the whole order but the order hasn't been completed, the checkout shows a **Pay with Voucher Balance** card instead, with a **Confirm Order** button. The rest of checkout is covered in [Checkout and payment](../orders/checkout.md).
