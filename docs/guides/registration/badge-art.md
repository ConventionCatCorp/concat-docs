---
sidebar_position: 6
hide_table_of_contents: true
textbook: true
---

# Badge art

Badge art is a set of background images attendees choose from for their badge. This guide uploads badge art, limits how many badges can use each image, and deletes images.

:::info[In this guide]
How badge art works (section 1), uploading images (section 2), limiting an image (section 3), and deleting an image (section 4).
:::

## How badge art works

<Sidenote title="Who can do this">
**Badge Art** needs both the `asset:create` and `system:badgeart:update` permissions. The default *admin* role has them.
</Sidenote>

Attendees choose their art on the registration form, if the form has a **Badge art selector** element ([Registration form editor](./form-editor.md), section 5). Each image is shown with a **Select** button; the chosen one says **Selected**. If the attendee doesn't choose, one of the available images is picked at random for them. If you haven't uploaded any art, the element says *There is currently no badge art to choose. Check back closer to the convention.*

A limit caps how many registrations can use an image. Once it's reached, the image is no longer offered, except to attendees who already have it.

Badge art reaches the printed badge through the [Badge Designer](./badge_designer.md): an **Image** element whose **Source** is `badgeDesign` prints the attendee's chosen art. The designer's **Pre-Printed Canvas** can also show a badge art image behind your design, for badges pre-printed with background art.

## Upload badge art

1. Go to **Housekeeping › Registration › Badge Art** (the module menu is explained in [Start here](../quickstart/start-here.md), section 2).

   <Result>The **Badge Art Settings** page opens, with an upload box that says *Choose or drop images to upload.* and lists its limits: a maximum size of 5 MB per image, and conversion to PNG. Uploaded images are listed below it.</Result>

2. Click the upload box and choose one or more images, or drop them on it.

   <Result>The box says *Uploading...*, then an **Upload Complete!** message appears. Each image is listed in its own card with *Limit:* followed by *0 / ∞*, a **Configure limit** button and a delete button.</Result>

The first number under each image is how many registrations use it; the second is its limit.

## Limit an image

1. On an image's card, click **Configure limit**.

   <Result>A **Set a limit for** dialog opens, with the image's ID and an **Enable limit** checkbox.</Result>

2. Tick **Enable limit**, enter the number in the box (*The total number of badges allowed for this art.*), and click **Update**.

   <Result>A **Badge art has been updated** message appears, and the card shows the new limit, such as *Limit: 0 / 100*.</Result>

To remove a limit, open **Configure limit**, untick **Enable limit** and click **Update**. The card shows *∞* again.

## Delete an image

1. On an image's card, click the delete button.

   <Result>A dialog titled **Delete** and the image's ID asks *Are you sure you want to delete* the image.</Result>

2. Click **Delete**.

   <Result>A **Badge art has been deleted** message appears, and the image is no longer listed.</Result>

:::caution[Watch out]
Deleting an image can't be undone. Check the count on its card first: it shows how many registrations have chosen it.
:::
