---
sidebar_position: 4
hide_table_of_contents: true
textbook: true
---

# Discounts

A discount sells a product at a lower price for a set period, and can be limited to members of a role. Use it for an early-bird price, or a staff or volunteer price.

:::info[In this guide]
How discounts work and their statuses (section 1), creating a discount (section 2), editing one (section 3), and deleting one (section 4).
:::

## How discounts work

<Sidenote title="Who can do this">
Discounts need the `product:discount:manage` permission, which the default *admin* and *productEditor* roles have. Limiting a discount to roles also needs `system:permission:read`; without it, the role field is disabled.
</Sidenote>

- **The price, not the saving:** a discount's **Discounted Price** is what buyers pay, not the amount taken off.
- **Always dated:** every discount has an **Available From** and an **Available Until**, and both are required. A discount can't run indefinitely.
- **Roles:** a discount limited to a role only applies when the person the item is for has that role.
- **Several discounts:** when more than one discount applies, the buyer gets the lowest price.
- **Unpaid and paid orders:** unpaid carts always use the discounts active right now, so an item in a cart gains or loses a discount as discounts start, end or are deleted. Paid orders keep the price that was paid.

Each discount in the **Discounts** card reads *Discounted to* the price, *from* the start, *until* the end, with its **Name** above it if it has one. Its badge is one of those in Table 1.1, and a role-limited discount also has a badge reading **Restricted to role** and the role's name.

<TableFigure title="Discount statuses">

| Badge | Means |
| --- | --- |
| **Not yet active** | **Available From** is still to come. |
| **Active** | The discount applies now. |
| **Expired** | **Available Until** has passed. |
| **Deleted** | The discount was deleted (section 4). It stays listed, without edit or delete buttons. |

</TableFigure>

## Create a discount

1. Open the product's page (see [Products](./products.md), section 4), and in the **Discounts** card click the green **Add** button (<MaterialIcon name="add" />).

   <Result>A form shows the **Current Price** (which you can't change), **Discounted Price**, **Available From**, **Available Until**, **Limit Discount to Role(s)** (Optional) and **Name** (Optional), with a **Create Discount Price** button. On a badge product it also shows **Restrict registrations created with this discount from being transferred to other users.**</Result>

2. Enter the **Discounted Price**, and set **Available From** and **Available Until**. *(Optional)* Select roles in **Limit Discount to Role(s)**, and enter a **Name** to tell the discount apart. Then click **Create Discount Price**.

   <Result>The form closes. The discount is listed as *Discounted to* the price *from* the start *until* the end, marked **Active**, **Not yet active** or **Expired**.</Result>

:::caution[Watch out]
**Available From** and **Available Until** both start at the same date: today, or the product's own **Available From** if that's later. Move **Available Until** to the end of your offer, or the discount is **Expired** as soon as you save it.
:::

:::note[Several roles]
If you select several roles, ConCat creates one discount for each role, and each is listed separately.
:::

On a badge product, ticking **Restrict registrations created with this discount from being transferred to other users.** stops attendees from transferring a registration they bought at this price. It only matters if registration transfers are turned on; see [Transfer Registration](../registration/transfer.md).

## Edit a discount

You can change a discount's dates and name. Its price can't be changed: to offer a different price, create a new discount and delete the old one.

1. On the discount's row, click the edit button (<MaterialIcon name="edit" />).

   <Result>The form opens with the discount's values. **Discounted Price** can't be changed, and the button reads **Save Discount Price**.</Result>

2. Change **Available From**, **Available Until** or **Name**, then click **Save Discount Price**.

   <Result>The form closes, and the discount's row shows the new dates or name.</Result>

:::note[Roles when editing]
If the discount has no role, you can add one while editing. Once a role is set, the field is locked and the role can't be changed.
:::

## Delete a discount

1. On the discount's row, click the delete button (<MaterialIcon name="delete" />).

   <Result>A **Delete Discount** dialog asks *Are you sure you want to delete this discount?*</Result>

2. Click **Delete**.

   <Result>The discount stays in the list, marked **Deleted**, without edit or delete buttons.</Result>

A deleted discount stops applying to unpaid carts at once. Paid orders keep the price they were paid at.
