---
sidebar_position: 6
hide_table_of_contents: true
---

# Claim Tickets

Claim Tickets are a new feature for digital product in ConCat, where users can have a voucher printed for them live.
:::caution Notice
Claim Tickets are unrelated to "Tickets", which is used to securely gate entry to events.
:::

### Brief Overview

For attendees, this feature is transparent until the day of the event. Online purchasing still works the same, the magic happens during badge pickup. An additional label will be printed when the attendee is checked in via the Cashier UI. This label can then be placed on any ticket template you choose, or use the label standalone. This ticket can then be used and validated anywhere in the event using ConCat.

Use this for T-Shirt vouchers, private events, or anything that you may want to have a physical ticket to guarentee valid claims!
This feature is generally ideal for situations where payment can only be collected online or before the event, but can only be fulfilled at the event itself.

#### Example Label

<div>
  <img className="bordered-img" src="/img/tutorial/claimTicketsExample.jpg" />
</div>

## Get Started with Claim Tickets

Claim tickets can be configured on products that have already been for sale, or on brand new ones; They only effect the check-in process.

### Configuring ticket design

The design and format of the labels for the claim tickets are based on the existing Badge Designer. If you want to re-use your badge design, you can skip designing a new label and proceed. If you do not have a badge design yet, or are unfamiliar with the Badge Designer, head [here](/docs/guides/registration/badge_designer).

### Adding to a product

<ol class="numbered-list">
  <li>
    <span>
      In <strong>Housekeeping</strong>, navigate to the product page for the product you want to add the ticket to.
      <small>Or, if you are creating a new product, open the product creation page for the respective category.</small>
    </span>
  </li>
  <li>
    <span>
      Locate the `Badge Print Design` field, and select your desired design for the label.
      <img className="bordered-img" style={{ maxWidth: '50%' }} src="/img/tutorial/productLabelPrintDesign.png" />
    </span>
  </li>
  <li>
    <span>
      Save the product. Configuration is complete! (It really is that simple!)
    </span>
  </li>
</ol>

### Handling check-in (Printing)

There are no changes necessary to handle these prints! They are printed exactly the same as if they were normal badges - a user just can have multiple of them!

Simply select the "Print Badge" button on the Cashier UI and their labels will be printed directly after the design.
