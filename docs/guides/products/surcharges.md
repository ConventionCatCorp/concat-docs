---
sidebar_position: 5
hide_table_of_contents: true
---

# Surcharges

Surcharges can be used to add additional flat-rate or percentage-based fees to a product, such as sales tax, shipping, and handling fees.

:::caution Important
In some jurisdictions, charging processing fees to your customers may be prohibited by law. It is <strong>your responsibility</strong> to act in accordance with applicable law.
:::

### Creating a Surcharge

<splitColumn>
  <ol className="numbered-list">
    <li>
      <span>
        Navigate to your event website, then click "<strong>Housekeeping</strong>" from the left-hand sidebar.
      </span>
    </li>
    <li>
      <span>
        Click "<strong>Surcharges</strong>" from the left-hand sidebar, then click "<strong>Create New Surcharge</strong>".
      </span>
    </li>
    <li>
      <span>
        Enter an internal name and display name for your surcharge.
      </span>
    </li>
    <li>
      <div>
        <div>Select the type of surcharge you want to create.</div>
        <ul>
          <li>
            <strong>Surcharge - Fixed Amount</strong> - A fixed amount that is added to the line item price of the product.
          </li>
          <li>
            <strong>Surcharge - Percentage</strong> - A percentage that is calculated from the base line item price of a product.
          </li>
          <li>
            <strong>Tax Rate</strong> - A Government tax rate that is calculated from the base line item price of a product and added to the order total.
          </li>
        </ul>
      </div>
    </li>
    <li>
      <span>
        Enter the amount or percentage rate of the surcharge.
      </span>
    </li>
    <li>
      <span>
        Click "<strong>Create Surcharge</strong>".
      </span>
    </li>
  </ol>
  <div style={{ textAlign: 'center' }}>
    <img className="bordered-img" src='/img/tutorial/surchargeAddTaxRate.png' />
  </div>
</splitColumn>

### Associating a Surcharge with a Product

After a surcharge has been created, you'll need to associate it with a product using the following steps:

<splitColumn>
  <ol className="numbered-list">
    <li>
      <span>
        In <strong>Housekeeping</strong>, navigate to the product's page.
      </span>
    </li>
    <li>
      <span>
        Click the green plus (<i className="material-symbols-outlined">add</i>) button next to the "<strong>Surcharges</strong>" section.
      </span>
    </li>
    <li>
      <span>
        Search for the surcharges you want to add and select them from the dropdown.
      </span>
    </li>
    <li>
      <span>
        Click "<strong>Assign Surcharges</strong>".
      </span>
    </li>
  </ol>
  <div>
    <img className="bordered-img" src='/img/tutorial/productOptionAssign.png' />
  </div>
</splitColumn>

### Passing Platform Fees to Customers

By default, the platform fees charged by ConCat are absorbed into your pricing and subtracted from the order total when the payment is processed. You can choose to pass the platform fees to the customer instead by checking the "<strong>Pass Platform Fees to Customer</strong>" checkbox on a product's page.

When you pass platform fees to the customer, the platform fees are added on top of the attendee's order total and will be visible on the checkout and order history pages.

You can change this setting at any time, but it will only apply to orders processed after the change was made.