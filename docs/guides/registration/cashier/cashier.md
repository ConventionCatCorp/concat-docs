---
sidebar_position: 1
---

# Cashier UI

Cashier Mode is a special interface designed to optimize the workflow of checking users into the convention and giving out badges.

Cashiers can use a handheld barcode scanner (PDF417) to scan driver’s licenses for faster check-ins.

The interface is specifically tailored for faster check-ins, such as pinpointing mismatched information with the driver’s license, pointing out if the user is underage, missing payments, if they are a guardian, if there are any notes/bans on the user’s profile, if the badge contains banned words, etc...

Much like the user search in Housekeeping, the search box will automatically navigate to the matched user if only one search result is found. Otherwise, the cashier will need to pick from a list of matching users.

## Banned Words and Updating Registrations

You may see an alert that a user has a banned word in their name. If the cashier deems it appropriate they can go ahead and print the badge anyways (no filter is perfect), but in most cases it may not be appropriate and the cashier needs to update the registration.

Registration Updating is done by going to Actions -> Update registration. You can change any details about the attendee's registration including the tier. The badge preview and warnings will update appropriately.

## Product Delivery

If a guest has physical products to pickup at registation, they will be displayed under **Undelivered products**

## Configure Registration Station

Within the settings of the registration station, there are multiple options that can be configured.

<table>
  <tr>
    <th>Option</th>
    <th>Explanation</th>
  </tr>
  <tr>
    <td>Enable payment acceptance</td>
    <td>If enabled, this registration station will be able to accept payments. This will allow cashiers to take payments for any balance due on an attendee's account. Otherwise, cashiers will be informed they should direct the attendee to a different registration station.</td>
  </tr>
  <tr>
    <td>Require ID barcode scan</td>
    <td>If enabled, this registration station require an ID barcode to be scanned before a badge can be printed. Otherwise, cashiers will be informed they should direct the attendee to a different registration station.</td>
  </tr>
  <tr>
    <td>Enable staff check-in</td>
    <td>If enabled, this registration station will be able to print staff and volunteer badges. This affects printing badges for anyone with an approved volunteer application. Otherwise, cashiers will be informed they should direct the attendee to a different registration station.</td>
  </tr>
  <tr>
    <td>Print separate staff badge</td>
    <td>If enabled, this registration station will print two badges, one with the attendee's chosen attendance type, and one with the "STAFF" text. Otherwise, a combination badge will be printed with the attendee's chosen attendance type and the "STAFF" text together, separated by a slash.</td>
  </tr>
  <tr>
    <td>Print separate vendor badge</td>
    <td>If enabled, this registration station will print two badges, one with the attendee's chosen attendance type, and one with the "VENDOR" text. Otherwise, a combination badge will be printed with the attendee's chosen attendance type and the "VENDOR" text together, separated by a slash.</td>
  </tr>
</table>

## Badge type printer preferences

You can configure which badge type is printed on which printer by selecting the badge type from the menu and using the arrows to move between the two printers listed.

<img className="bordered-img" src="/img/cashier/badgeTypePrinter.png" />