---
sidebar_position: 7
hide_table_of_contents: true
textbook: true
---

# Badge Designer

Lay out the label printed on each attendee's badge, from positioned layers that suit a wide range of printers and badge stock.

:::info[In this guide]
How badge designs work (section 1), the list of designs (section 2), creating a design (section 3), text elements (section 4), images and containers (section 5), previewing and test printing (section 6), and pre-printed badges, export and import (section 7).
:::

## How badge designs work

<Sidenote title="Who can do this">
Opening the Badge Designer needs `system:badgedesign:read`; the sidebar item and saving need `system:badgedesign:update`. The default *admin* role has both; *registration* can only read.
</Sidenote>

A badge design is a label layout in inches, built as a tree of elements: **text** (badge name, number, tier), **images** (badge art, profile picture, logo) and **nodes**, containers that group and position other elements. Text can show attendee details or the answer to a [product option](../products/options.md).

The Cashier UI prints each badge with the convention's **default design**, unless the tier has its own **Product Label Print Design** ([Badge Products](./attendance/attendance.md), section 3). Badges print through the browser's print dialog or straight to a Zebra printer ([Cashier UI](./cashier/cashier.md)). Set a default design before badge pickup opens.

## The list of designs

1. Go to **Housekeeping › Registration › Badge Designer** ([Start here](../quickstart/start-here.md), section 2).

   <Result>The **Badge Designer** page lists your designs, each with **Set as default** (a star), **Copy** and **Delete**, and **See history** if you have `audit:read`.</Result>

2. Click **Set as default** on a design.

   <Result>That design's star is filled; the others are empty.</Result>

3. *(Optional)* To copy a design, click **Copy**, enter a **Name** in the **Duplicate** dialog, and click **Duplicate**.

   <Result>The copy is listed under its new name.</Result>

4. *(Optional)* To delete a design, click **Delete**, then **Delete** in the dialog.

   <Result>The dialog asks *Are you sure you want to delete* and the design's name. After you confirm, the design is no longer listed.</Result>

**See history** opens the design's entries in **System › Audit Logs**.

## Create a design

1. On **Badge Designer**, click the green **New** (+) button (Figure 3.1).

   <Result>The editor opens with a starter layout: the **Render tree** and properties on the left, a preview on the right, and **Save**, **Export**, **Import**, **Print** and **Load users** in the top bar.</Result>

2. With **Root** selected in the **Render tree**, enter a **Display Name** in the **Root** group, and set the label's **X**, **Y**, **Width** and **Height** in inches under **Details**.

   <Result>The preview resizes to the label size.</Result>

3. Add elements with the buttons on a node in the **Render tree**: **Add Text**, **Add Node** or **Add Image**.

   <Result>The element appears under that node in the tree and in the preview. Click it in the tree to show its properties.</Result>

4. Set each element's properties (sections 4 and 5). Drag an element in the **Render tree** to reorder it, or click its **Delete Node?** button to remove it and everything inside it.

   <Result>The preview updates as you go, with the selected element outlined.</Result>

5. Click **Save**.

   <Result>**Save** is unavailable until you change something. The address ends in `/housekeeping/registration/badgedesigner/edit/` and the design's ID, and **Badge Designer** lists the design under its display name.</Result>

Every field in the property groups needs a value, placeholders included. If one is empty, the browser marks it and the design isn't saved.

<TableFigure title="Property groups">

| Group | Shown for | Fields |
| --- | --- | --- |
| **Root** | The root node | **Display Name**; **Page break** <small>Uses the printer's own page break between labels.</small>; **Y spacing**, **X Start**, **Y Start** <small>Only without **Page break**.</small> |
| **Pre-Printed Canvas** | The root node | Section 7 |
| **Details** | Every element | **X**, **Y**, **Width**, **Height**, in inches |
| **Text**, **Font**, **Text Autoscale** | Text elements | Section 4 |
| **Image** | Image elements | Section 5 |
| **Node** | Nodes | Section 5 |

</TableFigure>

<Figure
  src="/img/guides/registration/badge-editor.webp"
  alt="The badge editor's starter layout: Save, Export, Import, Print and Load users at the top; the Root, Pre-Printed Canvas and Details property groups; the Render tree with root, 1234, Hello / Test, node, Nican and Bunny; and a preview of two sample labels."
  title="The badge editor"
  markers={[
    { n: 1, x: 3, y: 0.3, w: 49.6, h: 4.3 },
    { n: 2, x: 0, y: 4.8, w: 60, h: 51.6 },
    { n: 3, x: 62, y: 4.4, w: 35.5, h: 25.8 },
    { n: 4, x: 46.5, y: 66.6, w: 9.8, h: 4.2 },
    { n: 5, x: 56, y: 71.5, w: 3.5, h: 4.5 },
  ]}
>

1. The top bar.
2. The property groups of the selected element (Table 3.1).
3. The preview, with the selected element outlined.
4. **Add Text**, **Add Node** and **Add Image** on a node.
5. **Delete Node?**

</Figure>

## Text elements

A text element shows a fixed **Placeholder**, or an attendee value chosen with **Variable Type** and **Variable** (Table 4.1).

<TableFigure title="Variable types">

| Variable Type | Shows |
| --- | --- |
| `registration` | From the registration: `attendanceType` (the tier), `badgeArt`, `badgeId`, `badgeName` or `species` |
| `user` | From the account: `id`, `username`, `email`, `firstName`, `lastName`, `preferredName`, `bornAt`, `addressCity`, `addressCountry`, `addressState` or `addressCityState` |
| `option` | The attendee's answer to a product option, by its number in **Option Id** |
| `special` | Status words, such as the tier's name, *Dealer*, *Staff*, *Minor* or *Guardian*, ticked under **Conditionals** |
| `placeholder` | The **Placeholder** text, the same on every badge |

</TableFigure>

The **Text** group also has **Transform** (such as `uppercase`), **Font Weight**, **Text Color** and **Prefix padding**, which pads a number with a character to a set length, for example `00042`. The **Font** group sets **Font Size** (inches), **Horizontal Binding**, **Vertical Binding**, **Text Align** and the **Font**: `Krona One`, `Armata`, `datamatrix` (a 2D barcode), or `custom` with a **Custom Font** name. **Text Autoscale** fits text to its box, between **Grow Min** and **Grow Max**.

:::note[Badge ID or user ID]
Choosing `badgeId` shows a warning: the badge ID isn't the user ID, and is printed with a B in front, such as *B101*, which can confuse staff.
:::

## Images and nodes

An image element's **Source** decides what it shows:

- `url`: the address in **Placeholder**, which can include `{{user.id}}` or `{{user.username}}`.
- `badgeDesign`: the attendee's chosen [badge art](./badge-art.md).
- `product`: a badge image set on the attendee's paid tier.
- `profilePic`: the attendee's profile picture; **Ignore Empty** uses the **Placeholder** when they have none.

**Size**, **Repeat** and **Position** place the image in its box; **Rounded Border** makes it a circle.

A node's **Node** group has **Rotate**, which turns its contents 90 degrees, and **Conditional**, which prints the node only for **Volunteer**, **Dealer**, **Dealer Assistants**, **Underage**, **Minor**, a **Product ID**, **Roles** or an **Option** value. **Invert** prints it only when none apply; **Debug Preview** shows it in the preview regardless.

## Preview and test print

1. Click **Load users**. In **Select Preview Users**, search for up to 10 attendees by name or ID, select each, and click **Submit**.

   <Result>The preview shows the sample label with placeholders, then one label per chosen attendee with their details.</Result>

2. Click **Print**.

   <Result>The browser's print dialog opens with the loaded attendees' labels.</Result>

:::tip
Set the print dialog's paper size and scaling to match your labels, and turn off headers and footers. The browser usually remembers these.
:::

## Pre-printed badges, export and import

For badges pre-printed with background art by a third party, **Pre-Printed Canvas** shows the art behind your design, so you can check the label doesn't print over it. It needs at least one [badge art](./badge-art.md) image.

1. With **Root** selected, tick **Pre-Printed Canvas**, then **Preview**; choose a **Preview Art Id** and set the pre-printed badge's **Width**, **Height** and **From Bottom** in inches.

   <Result>The preview shows your label over the chosen badge art, at that position.</Result>

2. Click **Export**.

   <Result>The browser downloads the design as a JSON file named after its display name.</Result>

3. To use a shared design, open a new or existing design, click **Import** and choose a JSON file.

   <Result>The editor loads the imported design. Click **Save** to keep it.</Result>
