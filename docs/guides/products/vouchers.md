---
sidebar_position: 7
hide_table_of_contents: true
textbook: true
---

# Vouchers

A voucher is a code worth an amount of money, such as a comp, a prize or refund credit. Attendees enter it at checkout, or you issue it to their cart.

:::info[In this guide]
How vouchers work, the voucher list, creating a voucher, a voucher's page, issuing it to attendees, editing or deleting it, one-time order vouchers, and checkout.
:::

## How vouchers work

<Sidenote title="Who can do this">
Vouchers need `comp:create`, which the default *admin*, *finance* and *hr* roles have.
</Sidenote>

- **Organization-wide:** a code works in every convention in your organization, and must be unique.
- **Uses:** an attendee can't use one voucher on two paid orders.
- **Stacking:** an order can use several vouchers only if all of them allow stacking.

<TableFigure title="Voucher statuses">

| Status | Means |
| --- | --- |
| **Available** | The code can be used. |
| **Fully Claimed** | **Max Uses** orders have used it. |
| **Expired** | **Available Until** has passed. |
| **Deleted / Archived** | Deleted (section 6). |

</TableFigure>

A voucher that allows stacking also shows **Can Be Stacked**.

## The voucher list

1. Go to **Housekeeping › Store Management › Vouchers**.

   <Result>The **Vouchers** page (`/housekeeping/store/vouchers`) lists your vouchers with their code, value, uses and **Status**.</Result>

2. Type part of a code or display name in the search box (*Search...*).

   <Result>Only matching vouchers are listed.</Result>

## Create a voucher

1. On **Vouchers**, click **Create New Voucher**.

   <Result>A form opens with a random code in **Voucher Code**.</Result>

2. Keep the code, type your own, or click the dice button (**Generate random code**). Fill in the fields in Table 3.1 and click **Create Voucher**.

   <Result>**New voucher has been created!** appears, and the voucher's page opens (section 4).</Result>

<TableFigure title="Voucher fields">

| Field | What it holds |
| --- | --- |
| **Voucher Code** | What attendees type. Can't be changed later. <small>Not case-sensitive at checkout.</small> |
| **Display Name** (Optional) | Shown with the code, such as in the order summary. |
| **Amount** | Comes off the order's total. Can't be zero or changed later. |
| **Max Uses** | How many orders may use it. `-1`, the default, is unlimited. |
| **Available From** | When the code starts working. Defaults to now. |
| **Available Until** | When it stops working. <small>Tick its checkbox to set it.</small> |
| **Restrict voucher to products** | Only orders with one of these products can use it. <small>Search by product name or ID.</small> |
| **Allow Voucher Stacking** | Lets it combine with other stackable vouchers. |

</TableFigure>

:::caution[Watch out]
A code already used anywhere in your organization is refused with *The voucher code is already in use.*
:::

## A voucher's page

1. On **Vouchers**, click the voucher's row.

   <Result>The voucher's page opens with the tabs **Summary**, **Orders**, **Audit**, **Issue** and **Edit**. **Summary** shows **Product Restrictions** if it has any.</Result>

2. Click the **Orders** tab.

   <Result>Each order that used the voucher is listed, with its user and status.</Result>

**Audit** needs `audit:read`. A deleted voucher has no **Issue** or **Edit** tab.

## Issue a voucher to attendees

Issuing puts the voucher on each person's current unpaid order for this convention, so they don't need the code. Anyone without an unpaid order gets an empty one.

1. On the voucher's page, click the **Issue** tab.

   <Result>The tab shows a **User(s)** field and **Issue Voucher**.</Result>

2. Choose people in **User(s)**. Tick **Attempt to fulfill associated orders automatically.** to complete the orders the voucher covers. Click **Issue Voucher**.

   <Result>*Voucher #… has been issued to … user(s).* appears.</Result>

:::note[Completing orders automatically]
With the checkbox ticked, ConCat tries to complete each person's latest order. It doesn't if something is left to pay or the cart is empty.
:::

:::caution[Watch out]
Issuing skips the checkout checks: the voucher is added even if it's outside its dates, used up, or restricted to products that aren't in the order.
:::

## Edit or delete a voucher

1. On the voucher's page, click the **Edit** tab.

   <Result>An **Edit Voucher** card opens with the voucher's values, **Voucher Code** and **Amount** read-only, and the products it's restricted to in **Restrict voucher to products**. Edits don't affect existing orders.</Result>

2. Change the fields you need, such as the products in **Restrict voucher to products**, and click **Update Voucher**.

   <Result>**Voucher has been updated!** appears, and **Product Restrictions** on the **Summary** tab lists the products you chose.</Result>

3. To delete the voucher, click **Delete** in the **Delete Voucher** card.

   <Result>A **Delete Voucher** dialog asks you to confirm.</Result>

4. Click **Delete** in the dialog.

   <Result>**Voucher has been deleted successfully.** appears, and the **Vouchers** list shows it as **Deleted / Archived**.</Result>

:::caution[Watch out]
Deleting a voucher can't be undone.
:::

## A one-time voucher on one order

On an unpaid order, you can create a voucher only that order can use, for example to comp part of a purchase. ConCat gives it a random code.

1. Go to **Housekeeping › Store Management › Orders** and click an unpaid order.

   <Result>The order's page opens, with a **Vouchers** card that has a **+** button in its header.</Result>

2. In the **Vouchers** card, click **+**.

   <Result>A **Create voucher #** dialog opens.</Result>

3. Enter the **Amount** and, if you like, a **Display Name**, such as *Comp from the registration desk*, then click **Create**.

   <Result>The **Vouchers** card lists the voucher, with a **-** button.</Result>

4. To remove it, click **-** on its row.

   <Result>A **Delete voucher for #** dialog asks you to confirm.</Result>

5. Click **Delete**.

   <Result>The voucher is no longer listed.</Result>

**+** and **-** only appear on unpaid orders. See [Orders](../orders/orders.md) for the rest of the order's page.

## What attendees see at checkout

1. As an attendee, add a product to your cart, then click **Cart** in the homepage sidebar.

   <Result>The **Checkout** page opens. While there's something to pay, it has a **Have a voucher to redeem?** card.</Result>

2. Enter the voucher code and click **Redeem Voucher**.

   <Result>The **Order Summary** shows a **Discount:** line with the voucher and its amount. If the voucher covers everything left to pay, the order is completed.</Result>

The first three messages in Table 8.1 appear in red under the code field. The others appear after *One or more errors occurred while trying to process your request.*

<TableFigure title="When a code is refused">

| Message | Why |
| --- | --- |
| *Invalid Voucher.* | No voucher has this code, or it has reached **Max Uses**, as a one-time order voucher (section 7) has once it's on the order. |
| *This voucher cannot be used with other vouchers.* | The order already has a voucher, and one of them doesn't allow stacking. |
| *Your balance is too low to redeem another voucher.* | Nothing is left to pay. |
| *Voucher is expired.* | Before **Available From** or after **Available Until**. |
| *Voucher is restricted to only specific products* | None of its products is in the order. |
| *You already redeemed this voucher.* | The attendee used it on a paid order, or it's already on this order. |

</TableFigure>

If an issued voucher covers the whole order but the order wasn't completed, checkout shows a **Pay with Voucher Balance** card with **Confirm Order** instead. See [Checkout and payment](../orders/checkout.md).
