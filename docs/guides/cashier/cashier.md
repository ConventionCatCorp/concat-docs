---
sidebar_position: 1
---

# Cashier

Cashiers are part of the staff who are responsible for checking users in, and giving out badges to attendees.  

# Supported Barcode Scanner

Convention Cat's supported scanner is the [TEEMI 2D Barcode Scanner](https://www.amazon.com/gp/product/B074KH88Z7/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1). The scanner behaves as a keyboard, and within the United States, it may scan attendees driver license to output into the search bar, to more quickly find the user, and verify their information.

The scanner only works with Google Chrome or Microsoft Edge. Firefox does not suppport the web serial API, which is required for the scanner to work.


# Configuring the TEEMI

Scan the following barcodes with the TEEMI scanner to configure it to be used with the ConCat search bar: 

<div>
  <ol>
    <li>
      Factory reset the scanner to the base settings.
      <br/>
      <img src="/img/cashier/barcodes/01_factory_reset.PNG" />
    </li>
    <li>
      Reduce the noise of the beeps.
      <br/>
      <img src="/img/cashier/barcodes/02_low_volume.PNG" />
    </li>
    <li>
      Disable all barcode scan types.
      <br/>
      <img src="/img/cashier/barcodes/03_disable_all.PNG" />
    </li>
    <li>
      Enable PDF417 to be scanned. (Used by driver's licenses)
      <br/>
      <img src="/img/cashier/barcodes/04_enable_pdf417.PNG" />
    </li>
    <li>
      Eanble USB COM mode. This will allow the scanner to interface with the computer as a serial interface, instead of a keyboard, and allow for faster input of the driver's license information once scanned.
      <br/>
      <img src="/img/cashier/barcodes/05_usb_com.png" />
    </li>
  </ol>
</div>

The full scanner manual can be found [here](/img/cashier/barcodes/TEEMI_2D_Barcode_Scanner_Manual.pdf).

# Configuring the cashier interface

Once the scanner is configured, you can now configure the cashier interface to use the scanner. Open the cashier interface, and click on the top left printer icon to configure devices.

<img src="/img/cashier/select_printer.png" />

Configure the Scanner, by clicking "Add Manually" and then "Scanner with Web Serial", and follow the browser's prompts to add the device.

<img src="/img/cashier/add_scanner.png" />