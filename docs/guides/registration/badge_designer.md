---
sidebar_position: 7
hide_table_of_contents: true
textbook: true
---

# Badge Designer

The Badge Designer lays out the label printed on each attendee's badge, using layers of positioned elements so it works with a wide range of printers and badge stock. This guide covers the list of designs, the default design, and building a design in the editor.

:::info[In this guide]
How badge designs work (section 1), the list of designs (section 2), creating a design (section 3), text elements (section 4), images and containers (section 5), previewing and test printing (section 6), and pre-printed badges, export and import (section 7).
:::

## How badge designs work

<Sidenote title="Who can do this">
Opening the Badge Designer needs `system:badgedesign:read`; the sidebar item and saving need `system:badgedesign:update`. The default *admin* role has both; the *registration* role can only read designs.
</Sidenote>

A badge design is a label layout measured in inches. It's a tree of elements: **text** (a badge name, a badge number, the tier), **images** (badge art, a profile picture, a logo) and **nodes**, which are containers that group and position other elements. Text can show your attendees' details, such as their real name, badge ID, badge name and tier, or the answer to a [product option](../products/options.md).

The Cashier UI prints each badge with the convention's **default design**, unless the attendee's tier has its own **Product Label Print Design** ([Badge Products](./attendance/attendance.md), section 3). Badges are printed through the browser's print dialog or straight to a Zebra printer; see [Cashier UI](./cashier/cashier.md). Set a default design before you open badge pickup.

You can keep any number of designs, for example to try new layouts.

## The list of designs

1. Go to **Housekeeping › Registration › Badge Designer** (the module menu is explained in [Start here](../quickstart/start-here.md), section 2).

   <Result>The **Badge Designer** page lists your designs with the columns **Name**, **Created** and **Last Updated**, and a green **New** (+) button at the right of the header. Each row has the buttons **Set as default** (a star), **Copy** and **Delete**, and **See history** if you have the `audit:read` permission.</Result>

2. Click **Set as default** on a design.

   <Result>That design's star is filled in, and the other designs' stars are empty.</Result>

3. *(Optional)* To copy a design, click **Copy**, enter a **Name** in the **Duplicate** dialog, and click **Duplicate**.

   <Result>The dialog closes, and the copy is listed under its new name.</Result>

4. *(Optional)* To delete a design, click **Delete**, then **Delete** in the dialog.

   <Result>The dialog asks *Are you sure you want to delete* and the design's name. After you confirm, the design is no longer listed.</Result>

**See history** opens the design's entries in **System › Audit Logs**.

## Create a design

1. On **Badge Designer**, click the green **New** (+) button.

   <Result>The editor opens with a starter layout: a badge number, a tier label and the attendee's name. The top bar has **Save**, **Export**, **Import**, **Print** and **Load users**. On the left is the **Render tree** with the properties of the selected element; on the right, a preview of the label.</Result>

2. With **Root** selected in the **Render tree**, enter a **Display Name** in the **Root** group, and under **Details** set the label's **X**, **Y**, **Width** and **Height**, in inches.

   <Result>The preview resizes to the label size you entered.</Result>

3. Add elements with the buttons on a node in the **Render tree**: **Add Text**, **Add Node** or **Add Image**.

   <Result>The new element appears in the tree under that node, and in the preview. Click it in the tree to show its property groups.</Result>

4. Set each element's properties (sections 4 and 5). Drag an element in the **Render tree** to reorder it, or click its **Delete Node?** button to remove it and anything inside it.

   <Result>The preview updates as you change each property. The selected element is outlined in the preview.</Result>

5. Click **Save**.

   <Result>The design is saved and **Save** is unavailable until you change something. The address ends in `/housekeeping/registration/badgedesigner/edit/` and the design's ID, and the design is listed on **Badge Designer** under its display name.</Result>

Every field in the property groups must have a value, including placeholders. If one is empty, the browser marks it and the design isn't saved.

<TableFigure title="Property groups">

| Group | Shown for | Fields |
| --- | --- | --- |
| **Root** | The root node | **Display Name**; **Page break** <small>Use the printer's own page break between labels.</small>; **Y spacing**, **X Start**, **Y Start** <small>Only without **Page break**.</small> |
| **Pre-Printed Canvas** | The root node | Section 7 |
| **Details** | Every element | **X**, **Y**, **Width**, **Height**, in inches |
| **Text**, **Font**, **Text Autoscale** | Text elements | Section 4 |
| **Image** | Image elements | Section 5 |
| **Node** | Nodes | Section 5 |

</TableFigure>

## Text elements

A text element shows either a fixed **Placeholder** or a value about the attendee, chosen with **Variable Type** and **Variable** (Table 4.1).

<TableFigure title="Variable types">

| Variable Type | Shows |
| --- | --- |
| `registration` | From the registration: `attendanceType` (the tier), `badgeArt`, `badgeId`, `badgeName` or `species` |
| `user` | From the account: `id`, `username`, `email`, `firstName`, `lastName`, `preferredName`, `bornAt`, `addressCity`, `addressCountry`, `addressState` or `addressCityState` |
| `option` | The attendee's answer to a product option. Enter its number in **Option Id**. |
| `special` | Words for the attendee's status, such as the tier's name, *Dealer*, *Staff*, *Minor* or *Guardian*. Tick which ones under **Conditionals**. |
| `placeholder` | The **Placeholder** text itself, the same on every badge |

</TableFigure>

The **Text** group also has **Transform** (such as `uppercase`), **Font Weight**, **Text Color** and **Prefix padding**, which pads a number to a set length with a character, for example `00042`. The **Font** group sets **Font Size** (in inches), **Horizontal Binding**, **Vertical Binding**, **Text Align** and the **Font**: `Krona One`, `Armata`, `datamatrix` for a 2D barcode, or `custom` with a **Custom Font** name. **Text Autoscale** grows or shrinks text to fit its box, between **Grow Min** and **Grow Max**.

:::note[Badge ID or user ID]
Choosing `badgeId` shows a warning: the badge ID differs from the user ID and is printed with a B in front, for example *B101*, which can confuse staff.
:::

## Images and nodes

An image element's **Source** decides what it shows:

- `url`: the address in **Placeholder**. It can include `{{user.id}}` or `{{user.username}}`.
- `badgeDesign`: the attendee's chosen [badge art](./badge-art.md).
- `product`: a badge image set on the attendee's paid tier.
- `profilePic`: the attendee's profile picture. **Ignore Empty** uses the **Placeholder** instead when they have none.

**Size**, **Repeat** and **Position** place the image in its box, and **Rounded Border** makes it a circle.

A node's **Node** group has **Rotate**, which turns its contents 90 degrees, and **Conditional**, which prints the node only for some attendees: **Volunteer**, **Dealer**, **Dealer Assistants**, **Underage**, **Minor**, a **Product ID**, **Roles** or an **Option** value. **Invert** prints it only when none of them apply, and **Debug Preview** shows the node in the preview whatever the conditions.

## Preview and test print

1. Click **Load users**. In the **Select Preview Users** dialog, search for up to 10 attendees by name or ID and select each one, then click **Submit**.

   <Result>The preview shows the sample label, filled in with the elements' placeholders, followed by a label for each attendee you chose, filled in with their details.</Result>

2. Click **Print**.

   <Result>Your browser's print dialog opens with the labels of the attendees you loaded.</Result>

:::tip
Because of how browsers print, set the print dialog's paper size and scaling to match your labels, and turn off headers and footers. The browser usually remembers these for next time.
:::

## Pre-printed badges, export and import

If your badges are pre-printed with background art by a third-party service, the **Pre-Printed Canvas** group shows the art behind your design, so you can check the label doesn't print over it. It needs at least one [badge art](./badge-art.md) image.

1. With **Root** selected, tick **Pre-Printed Canvas** in its group, then tick **Preview**, choose a **Preview Art Id**, and set the pre-printed badge's **Width**, **Height** and **From Bottom** in inches.

   <Result>The preview shows your label on top of the chosen badge art, at the position you set.</Result>

2. Click **Export**.

   <Result>Your browser downloads the design as a JSON file named after its display name.</Result>

3. To use a shared design, open a new or existing design, click **Import** and choose a JSON file.

   <Result>The editor loads the imported design. Click **Save** to keep it.</Result>

Design files are plain JSON and can be shared freely.
