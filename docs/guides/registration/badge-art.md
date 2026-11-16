---
sidebar_position: 6
hide_table_of_contents: true
textbook: true
---

# Badge art

Upload the background images attendees choose for their badge, limit how many badges use each image, and delete images.

:::info[In this guide]
How badge art works, uploading images, limiting an image, and deleting an image.
:::

## How badge art works

<Sidenote title="Who can do this">
**Badge Art** needs both `asset:create` and `system:badgeart:update`. The default *admin* role has them.
</Sidenote>

Attendees choose their art on the registration form, if it has a **Badge art selector** element ([Registration form editor](./form-editor.md), section 5), with **Select** on an image. If they don't choose, an available image is picked at random. With no art uploaded, the element tells attendees there's none to choose yet.

A limit caps how many registrations can use an image. Once it's reached, the image is offered only to attendees who already have it.

To print the art, use an **Image** element with **Source** `badgeDesign` in the [Badge Designer](./badge_designer.md).

## Upload badge art

1. Go to **Housekeeping › Registration › Badge Art**.

   <Result>The **Badge Art Settings** page opens with an upload box for images up to 5 MB, converted to PNG.</Result>

2. Click the upload box and choose one or more images, or drop them on it.

   <Result>An **Upload Complete!** message appears. Each image gets a card with *Limit:0 / ∞*, a **Configure limit** button and a delete button.</Result>

The first number is how many registrations use the image; the second is its limit.

## Limit an image

1. On an image's card, click **Configure limit**.

   <Result>A **Set a limit for** dialog opens with the image's ID and an **Enable limit** checkbox.</Result>

2. Tick **Enable limit**, enter the number of badges allowed, and click **Update**.

   <Result>A **Badge art has been updated** message appears, and the card shows the limit, such as *Limit:0 / 100*.</Result>

:::tip[The numbers are examples]
The 100 in *Limit:0 / 100* and the image ID in **Delete 3** are examples. The app shows how many badges have used each image, the limit you set, and the image's own ID.
:::

To remove a limit, untick **Enable limit** in **Configure limit** and click **Update**; the card shows *∞* again.

## Delete an image

1. On an image's card, click the delete button.

   <Result>A dialog titled with the image's ID, such as **Delete 3**, asks *Are you sure you want to delete 3?*</Result>

2. Click **Delete**.

   <Result>A **Badge art has been deleted** message appears, and the image is no longer listed.</Result>

:::caution[Watch out]
Deleting an image can't be undone. Check the count on its card first: it shows how many registrations chose it.
:::
