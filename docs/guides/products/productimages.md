---
sidebar_position: 2
hide_table_of_contents: true
textbook: true
---

# Product Images

Upload a product's images and choose which one leads in the store.

:::info[In this guide]
Image roles and limits (section 1), uploading images (section 2), setting an image's role (section 3), and deleting an image (section 4).
:::

## How images are used

<Sidenote title="Who can do this">
Images need `product:manage`, which the default *admin* and *productEditor* roles have.
</Sidenote>

Each image has a role, shown as a badge under it (Table 1.1).

<TableFigure title="Image roles">

| Badge | Where it's used |
| --- | --- |
| **Primary** | On the product's store card, and first on its page. <small>One per product. The first image uploaded becomes **Primary**.</small> |
| **Image** | On the product's page after the primary, as a slideshow. |
| **Hidden** | Kept, but not shown to attendees. |
| **Badge Art** | Not in the store. A badge design can print it for holders of this badge product; see [Badge Designer](../registration/badge_designer.md). <small>At most one per product.</small> |

</TableFigure>

ConCat converts any image to PNG and scales it to fit 2048 × 2048 pixels. A product can have up to 10 images.

## Upload images

1. Open the product's page (see [Products](./products.md), section 4).

   <Result>The **Product Images** card shows its images, or *There are no images for this product.*</Result>

2. In **Product Images**, click the green add button (<MaterialIcon name="add" />).

   <Result>An upload area appears: **Choose or drop images to upload.**</Result>

3. Click the upload area and choose image files, or drag them onto it.

   <Result>**Upload Complete!** appears and the images are listed. A product's first image is marked **Primary**, the rest **Image**.</Result>

:::note[At the limit]
At 10 images the add button disappears. Delete one (section 4) to make room.
:::

## Choose what each image is for

1. Under the image, open its gear menu (<MaterialIcon name="settings" />) (Figure 3.1).

   <Result>The menu offers **Set Primary**, **Set Hidden**, **Set Badge Art** and **Delete**, minus the image's current role.</Result>

2. Choose **Set Primary**.

   <Result>The image is marked **Primary**; the old primary becomes **Image**.</Result>

3. *(Optional)* To keep an image out of sight, choose **Set Hidden** in its gear menu.

   <Result>The image is marked **Hidden**.</Result>

4. *(Optional, badge products)* To print an image on badges, choose **Set Badge Art** in its gear menu.

   <Result>The image is marked **Badge Art**; any previous badge art becomes **Image**.</Result>

:::caution[Watch out]
A **Hidden** or **Badge Art** image can't go back to **Image**. Make it **Primary**, or delete it and upload it again.
:::

<Figure
  src="/img/guides/products/product-images-menu.webp"
  alt="The Product Images card with two images: the first marked Primary, the second marked Image with its gear menu open, offering Set Primary, Set Hidden, Set Badge Art and Delete."
  title="An image's gear menu"
  width="642px"
  markers={[
    { n: 1, x: 87.9, y: 4.6, w: 8.3, h: 10.5 },
    { n: 2, x: 5.8, y: 55.9, w: 9.7, h: 6 },
    { n: 3, x: 39.3, y: 55.3, w: 8.3, h: 15.8 },
    { n: 4, x: 39.3, y: 64.3, w: 33.6, h: 33.9 },
  ]}
>

1. The green add button (section 2).
2. The image's role: **Primary** here.
3. The gear menu of an image…
4. …listing the roles it doesn't have yet, and **Delete**. This is a badge product, so **Set Badge Art** is offered.

</Figure>

## Delete an image

1. In the image's gear menu (<MaterialIcon name="settings" />), choose **Delete**.

   <Result>The image is removed at once, with no confirmation.</Result>

:::caution[Watch out]
Deleting the primary image doesn't make another one primary. The product's store card has no picture until you use **Set Primary**.
:::
