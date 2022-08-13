---
sidebar_position: 3
hide_table_of_contents: true
---

# Product Options

Product options allow you to request additional information from attendees when they purchase a product, such as a T-Shirt size, or a color. Product options are generic and can be used with any product.

### Types of Product Options

<ul>
  <li>
    <strong>Single Select</strong> - A dropdown list of options that the attendee can select from.
  </li>
  <li>
    <strong>Multi Select</strong> - A checkbox list of options that the attendee can select from.
  </li>
  <li>
    <strong>Freetext Field</strong> - An text input field that the attendee can enter their own value, with a customizable minimum and maximum length.
  </li>
  <li>
    <strong>Number</strong> - A number field that the attendee can enter their own value, with a customizable minimum and maximum value.
  </li>
  <li>
    <strong>Currency</strong> - A currency field that allows the attendee to enter their own value, with a customizable minimum and maximum value. The line item price of the product will be increased by the entered amount.
  </li>
</ul>

### Creating a Product Option

<splitColumn>
  <ol className="numbered-list">
    <li>
      <span>
        Navigate to your event website, then click "<strong>Housekeeping</strong>" from the left-hand sidebar.
      </span>
    </li>
    <li>
      <span>
        Click "<strong>Options</strong>" from the left-hand sidebar, then click "<strong>Create New Option</strong>".
      </span>
    </li>
    <li>
      <div>
        <div>Enter a name for your option, and select the type of option you want to create.</div>
        <div>
          <small>Note: The chosen name will be displayed to the attendee when they customize a product with this option.</small>
        </div>
      </div>
    </li>
    <li>
      <span>
        Customize the option based on the type of option you selected. Fields that are optional are marked with a <i>(Optional)</i> label.
      </span>
    </li>
    <li>
      <span>
        Click "<strong>Create</strong>".
      </span>
    </li>
  </ol>
  <div>
    <img src='/img/tutorial/productOptionCreate.png' />
  </div>
</splitColumn>

### Associating a Product Option with a Product

After a product option has been created, you'll need to associate it with a product using the following steps:

<splitColumn>
  <ol className="numbered-list">
    <li>
      <span>
        In <strong>Housekeeping</strong>, navigate to the product's page.
      </span>
    </li>
    <li>
      <span>
        Click the green plus (<i className="material-symbols-outlined">add</i>) button next to the "<strong>Options</strong>" section.
      </span>
    </li>
    <li>
      <span>
        Search for the product options you want to add and select them from the dropdown.
      </span>
    </li>
    <li>
      <span>
        <i>(Optional)</i> If you want to require the attendee to select or fill in a value for this option, check the "<strong>Mark Selected Options as Required</strong>" checkbox.
      </span>
    </li>
    <li>
      <span>
        Click "<strong>Assign Options</strong>".
      </span>
    </li>
  </ol>
  <div>
    <img src='/img/tutorial/productOptionAssign.png' />
  </div>
</splitColumn>

:::note Note
Disassociating a product option from a product will not remove the attendee selected / entered value, or modify the line item price, on any existing orders.
:::