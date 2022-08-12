---
sidebar_position: 1
hide_table_of_contents: true
---

# Orders

An order is a collection of products (such as an event registration, vendor table, or event store purchase) a given attendee wants to purchase. Order are created automatically when an attendee has a product added to their cart.

Orders can be viewed through the Orders page in Housekeeping, or through the Orders tab on an attendee's profile.

### Order States

Orders can be in one of two states: **unpaid** and **paid**. Orders will transition from the unpaid to paid state whenever payment is made in full, a voucher meets or exceeds the order total, or the order is manually marked as paid via the Order page.

Unpaid orders currently do not expire, but can be edited and cancelled at any time through the Housekeeping interface.

### Creating an Order

Most of the time, an order is created automatically when an attendee adds a product to their cart. However, if you need to manually add a product to an attendee's cart, but they don't have an existing unpaid order, you can create one using the following steps:

<ol className="numbered-list">
  <li>
    <span>
      Navigate to your event website, then click "<strong>Housekeeping</strong>" from the left-hand sidebar.
    </span>
  </li>
  <li>
    <span>
      Click "<strong>User Search</strong>" from the left-hand sidebar, then click the "<strong>Orders</strong>" tab.
    </span>
  </li>
  <li>
    <span>
      Click "<strong>Create New Order</strong>".
    </span>
  </li>
  <li>
    <span>
      Click "<strong>Show Details</strong>" on the newly created order to open it in the Orders page. Click the plus (<i className="material-symbols-outlined">add</i>) icon next to "<strong>Pending Payment</strong>" to add a product to the order.
    </span>
  </li>
</ol>

### Modifying an Order

While an order is **unpaid**, you can add, modify, or remove products and vouchers on the order. You can also mark the order as paid, or cancel the order.

:::note Limitations
It is not currently possible to:
* Override the line item price of a product
* Change the Reference ID for an Attendance Type product
* Add an existing voucher to an order
* Request shipping details that differ from the attendee's address
:::

### Order Fulfillment 

<splitColumn>
  <div>
    <p>
      If a paid order contains a fulfillable product, the order will be shown in yellow on the Order list as "<strong>Pending Fulfillment</strong>". Fulfillable products are any products outside of the Registration and Vendor / Dealer categories, with the exception of QuikTicket-enabled products.
    </p>
    <p>To fulfill an order, follow the steps below:</p>
    <ol className="numbered-list">
      <li>
        <span>
          Navigate to the order you want to fulfill.
        </span>
      </li>
      <li>
        <span>
          Click "<strong>Mark as Fulfilled</strong>".
        </span>
      </li>
      <li>
        <span>
          Click the checkbox next to each product you want to fulfill.
        </span>
      </li>
      <li>
        <span>
          Click "<strong>Fulfill Order</strong>".
        </span>
      </li>
    </ol>
  </div>
  <div>
    <img src='/img/tutorial/fulfillOrder.png' />
  </div>
</splitColumn>
