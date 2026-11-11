---
sidebar_position: 2
hide_table_of_contents: true
textbook: true
---

# Product Images

Images show attendees what they're buying. You upload them on the product's page and choose which one leads in the store.

:::info[In this guide]
How images are used, and their limits (section 1), uploading images (section 2), choosing what each image is for (section 3), and deleting an image (section 4).
:::

## How images are used

<Sidenote title="Who can do this">
Uploading and changing images needs the `product:manage` permission. The default *admin* and *productEditor* roles have it.
</Sidenote>

Each image on a product has a role, shown as a badge under it. Table 1.1 lists the four roles.

<TableFigure title="Image roles">

| Badge | Where it's used |
| --- | --- |
| **Primary** | The picture on the product's card in the store, and the first image on its page. <small>A product has one. The first image you upload becomes **Primary** automatically.</small> |
| **Image** | Shown on the product's page after the primary image, as a slideshow. |
| **Hidden** | Kept on the product but not shown to attendees. |
| **Badge Art** | Not shown in the store. A badge design can print it for attendees whose badge product it belongs to; see [Badge Designer](../registration/badge_designer.md). <small>A product has at most one.</small> |

</TableFigure>

Any image file works. ConCat converts each image to PNG and scales it down to fit within 2048 × 2048 pixels, keeping its proportions, before uploading it. A product can have up to 10 images.

## Upload images

1. Open the product's page (see [Products](./products.md), section 4).

   <Result>The **Product Images** card shows the product's images, or *There are no images for this product.*</Result>

2. In **Product Images**, click the green add button (<MaterialIcon name="add" />).

   <Result>The card shows an upload area, **Choose or drop images to upload.**, with the notes *Max 10 images.*, *Will convert to PNG.* and *Will resize to fit 2048 x 2048.*</Result>

3. Click the upload area and choose one or more image files, or drag them onto it.

   <Result>An **Upload Complete!** message appears, and the card lists the new images, each with its role badge. The first image on a product is marked **Primary**, and the others **Image**.</Result>

:::note[At the limit]
Once a product has 10 images, the add button is no longer shown. Delete an image (section 4) to make room.
:::

## Choose what each image is for

1. Under the image, open its gear menu (<MaterialIcon name="settings" />).

   <Result>The menu offers **Set Primary**, **Set Hidden**, **Set Badge Art** and **Delete**, leaving out the role the image already has.</Result>

2. Choose **Set Primary**.

   <Result>The image is marked **Primary**. The image that was primary before is now marked **Image**.</Result>

3. *(Optional)* To keep an image without showing it, open its gear menu and choose **Set Hidden**.

   <Result>The image is marked **Hidden**.</Result>

4. *(Optional, badge products)* To use an image on printed badges, open its gear menu and choose **Set Badge Art**.

   <Result>The image is marked **Badge Art**. Any image that was badge art before is now marked **Image**.</Result>

:::caution[Watch out]
The menu has no way to turn a **Hidden** or **Badge Art** image back into a plain **Image**. You can make it **Primary**, or delete it and upload it again.
:::

## Delete an image

1. Open the image's gear menu (<MaterialIcon name="settings" />) and choose **Delete**.

   <Result>The image is removed from the card straight away. There's no confirmation.</Result>

:::caution[Watch out]
Deleting the primary image doesn't make another image primary. Until you choose one with **Set Primary**, the product's card in the store has no picture.
:::
