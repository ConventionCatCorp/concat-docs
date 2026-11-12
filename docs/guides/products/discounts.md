---
sidebar_position: 4
hide_table_of_contents: true
textbook: true
---

# Discounts

Sell a product for less during a set period, optionally only to some roles: an early-bird, staff or volunteer price.

:::info[In this guide]
How discounts work and their statuses, creating a discount, editing one, and deleting one.
:::

## How discounts work

<Sidenote title="Who can do this">
Discounts need `product:discount:manage`, which the default *admin* and *productEditor* roles have. Limiting one to roles also needs `system:permission:read`, or the role field is disabled.
</Sidenote>

- **The price, not the saving:** **Discounted Price** is what buyers pay.
- **Always dated:** **Available From** and **Available Until** are both required.
- **Roles:** a role-limited discount only applies if the person the item is for has the role.
- **Several discounts:** the buyer gets the lowest price.
- **Unpaid and paid orders:** unpaid carts always use the discounts active now, gaining or losing them as discounts start, end or are deleted. Paid orders keep the price paid.

Each discount in the **Discounts** card shows its price and dates, a status badge (Table 1.1), and **Restricted to role** with the role, if it has one.

<TableFigure title="Discount statuses">

| Badge | Means |
| --- | --- |
| **Not yet active** | **Available From** is still to come. |
| **Active** | The discount applies now. |
| **Expired** | **Available Until** has passed. |
| **Deleted** | Deleted (section 4). Stays listed, without edit or delete buttons. |

</TableFigure>

## Create a discount

1. Open the product's page (see [Products](./products.md), section 4) and click the green **Add** button (<MaterialIcon name="add" />) in **Discounts**.

   <Result>A discount form opens, showing the **Current Price**.</Result>

2. Enter the **Discounted Price**, **Available From** and **Available Until**. *(Optional)* Select roles in **Limit Discount to Role(s)** and add a **Name**. Click **Create Discount Price**.

   <Result>The discount is listed as *Discounted to* the price *from* the start *until* the end, with its status badge.</Result>

:::caution[Watch out]
**Available From** and **Available Until** both start at the same date: today, or the product's own **Available From** if that's later. Move **Available Until** to the end of your offer, or the discount is **Expired** as soon as you save it.
:::

:::note[Several roles]
Selecting several roles creates one discount per role.
:::

On a badge product, the form also has **Restrict registrations created with this discount from being transferred to other users.**, which stops attendees transferring a registration bought at this price. It only matters if transfers are on; see [Transfer Registration](../registration/transfer.md).

## Edit a discount

You can change a discount's dates and name, not its price. For a new price, create a new discount and delete the old one.

1. Click the edit button (<MaterialIcon name="edit" />) on the discount's row.

   <Result>The form opens with the discount's values. **Discounted Price** is locked.</Result>

2. Change **Available From**, **Available Until** or **Name**, then click **Save Discount Price**.

   <Result>The row shows the new dates or name.</Result>

:::note[Roles when editing]
A discount without a role can be given one while editing. Once set, the role is locked.
:::

## Delete a discount

1. Click the delete button (<MaterialIcon name="delete" />) on the discount's row.

   <Result>A **Delete Discount** dialog asks you to confirm.</Result>

2. Click **Delete**.

   <Result>The discount stays listed, marked **Deleted**.</Result>
