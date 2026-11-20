---
sidebar_position: 1
---

# NFC (beta)

ConCat is working in supporting NFC badges. The mechanism works by having the cashier link an NFC badge to a ConCat account. An attendee can then scan the badge against authenticated external systems and query the ConCat API to get information about a badge. The NFC badges can be used to control attendees in entering convention-only areas.

# Cashier interface

There are several methods to connect an NFC programming device to the web browser, and connect with ConCat's interface.

## Using the ACR122U (Linux/Windows/Mac)

The [ACR122U](https://www.amazon.com/ACR122U-Reader-Writer-Ntag213-Software/dp/B07KRKPWYC) is a standard NFC Reader and Writer that can be bought online. 

A hurdle with the ACR122U is that browser vendors do not allow for the device to communicate directly with ConCat. The required work around is used by running an external process (NFCRegProxy) on the computer, and then have ConCat communicate with the proxy.

Install steps:
* [Install Golang](https://go.dev/doc/install) on the computer.
* Clone [ConCatNFC](https://github.com/ConventionCatCorp/ConCatNFC) (Or [download .zip here](https://github.com/ConventionCatCorp/ConCatNFC/archive/refs/heads/main.zip)). 
* Navigate to `ConcatNFCRegProxy/go` and run `sudo go run cmd/main.go`

TODO: Provide directly download links without needing to install go.

## Using ACR122U with ChromeOS

This uses the PC/SC Smart Card Connector on ChromeOS available as a Chrome App at: [Smart Card Connector](https://chromewebstore.google.com/detail/smart-card-connector/khpfeaanjngmcnplbdlpegiifgpfgdco)

TODO: Test setup.

## ESP32 NFC Reader Application

You can program a custom ESP32 with a PN532 chip. A custom 3d printed case is also provided. See [ESP32 NFC Reader Application](https://github.com/ConventionCatCorp/ConCatNFC/blob/main/ConcatNFCRegProxy/esp32/README.md) for additional details.


## Common errors:

1. (Ubuntu) The error `scard.Error=2148532253` means `SCARD_E_NO_SERVICE`. Install and start the service with `sudo apt-get install pcscd libpcsclite1` and `sudo systemctl start pcscd`