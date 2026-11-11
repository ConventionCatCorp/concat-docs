# Audit: docs/guides vs ConCat master (f4d531f, 2026-11-04)

- Docs audited: `docs/guides/` working tree, branch `docs/textbook-guides` (22 pages).
- Source of truth: the master extract at a clean `git archive` extract of ConCat master (paths are relative to the ConCat repo root). Every `src/...` path below is relative to that folder. `en-US:N` means line N of `src/shared/translations/en-US.json` (keys are flat strings).
- History lookups used `git -C ~/code/ConCat log/show origin/master` only, read-only.
- "Unverified" = runtime behaviour or a claim that the source doesn't settle.

## Summary

| Page | Class | One-line reason |
| --- | --- | --- |
| intro.md | Accurate | Covers only how to read the guides. Links resolve. The only nit is a docs-site tooltip, which has a "(currently … mode)" suffix. |
| convention_checklist.md | Needs update | "Settings > Reg flags", "Settings > Badge Designer" and "Attendee Statistics > Dealers" predate the module switcher. There is no Dealers statistics tab. |
| products/options.md | Needs update (minor) | Every label, type, style and behaviour matches master. The one gap is that the Store Products path skips the category **View Products** step. |
| products/products.md | Needs update | Wrong path ("Products" › "View Products" for every category). The field list is outdated: visibility is now a radio, plus Stock Control section, Role Whitelist/Blacklist, Print Design and Deliverable. "View / Edit Details" doesn't exist. Uses lowercase tags. |
| products/addons.md | Needs update | Checkbox and button labels changed. A hidden-addon checkbox is missing. "Any product can be an addon" is false. |
| products/claimtickets.md | Needs update (minor) | The field is **Product Label Print Design**, behind an enabling checkbox in the **Cashier** section. Otherwise accurate. |
| products/discounts.md | Needs update | The form gained Name, an edit action and a transfer-lock checkbox. **Available Until** is required, so "run indefinitely" is wrong. Screenshot is outdated. Uses a lowercase tag. |
| products/productimages.md | Needs update | Upload constraints are wrong: any image type is converted to PNG, resized to at most 2048 px, up to 10 per product. The card is on the product page, and the main image is set with **Set Primary**. |
| products/surcharges.md | Needs update | Path is now Store Management › Surcharges, and Type and Amount Type are separate fields. Category surcharges are missing. Reuses the wrong screenshot. Uses lowercase tags. |
| registration/attendance/attendance.md | Needs update | The "Registration category" now lives at Registration › Badge Products. "Make Product Publicly Visible" is now **Product visibility**. Upgrade Paths has no steps. |
| registration/badge_designer.md | Needs update | Path is now Registration › Badge Designer. The permissions are wrong. The Limitations list is obsolete: images, placeholder text, option variables and Zebra printers all exist. |
| registration/cashier/cashier.md | Needs update | Station settings were renamed (**Print separate dealer badge**, "DEALER", **No ID barcode has been scanned.**), and three settings are new. NFC and QR are missing. |
| registration/cashier/scanner.md | Needs update | "Top left printer icon" is now the **Configure Devices** button. QR scanning isn't covered. The Firefox claim conflicts with the code, which gates on WebUSB. |
| registration/raffle.md | Needs update (major rewrite; weights and ticket points are Not in master) | Raffles are now Store Management › **Gatekeeping** "silos". Winners are picked by hand, with no random draw, weights or ticket points (removed by PR #2908 on 2026-08-17). |
| registration/transfer.md | Needs update | The sidebar item is **Attendance**, not "Register for EVENTNAME", and the menu is a caret dropdown, not "…". The **Enable Registration Transfers** setting is required. Housekeeping transfer now exists. The GIF is outdated. Uses a lowercase tag. |
| dealers/managment.md | Needs update | "Vendor" tab is now **Dealing**. There is no "Approved (Paid)" status. Button labels changed. Assistants now confirm by email. |
| dealers/tickets.md | Needs update | Ticketed products with time-window groups, QR codes and QuikTicket scanning exist, but generically, not as a dealer's-den feature. There is no admin UI for groups. |
| orders/orders.md | Needs update | Paths and labels changed ("Requires Fulfillment", "Show details", "Pending payment"). Fulfillable now means **Deliverable**. Unpaid carts can expire (**Cart Timeout**). Uses a lowercase tag. |
| technical/cname.md | Accurate | The Email Settings records, copy buttons and **Verify** match master, and the app links to this page. `customers.concat.app` is not in source (unverified). |
| templates/templates.md | Needs update | Path is now System › Settings › **Email Settings** tab. "Active" vs "Current" is inconsistent. **Reactivate Template** is missing. Uses many lowercase tags. |
| usernotes/usernotes.md | Needs update (minor) | Categories and permissions are accurate. The ban-review matching rule is wrong. Ban types, paths and front matter are missing. |
| volunteers/volunteers.md | Needs update | "Contact support to modify the form" is outdated (Volunteer Form Editor). State labels differ. The `user`-role claim is doubtful. |

Branch verdicts (detail in the Task B section):

| Branch | Feature on master? | Verdict |
| --- | --- | --- |
| `origin/feat/taskBasedDocs` | Mixed (per topic) | Discard the branch. Reuse `banning-an-attendee.md` after edits, plus the topic list. |
| `origin/feat/NFCDocs2` | Yes, NFC badges are on master | Reuse after edits (substantial additions needed) |
| `origin/feat/regQR` | Yes, registration QR codes and cashier QR scanning are on master | Reuse after edits (wrong image, TODO left in) |

Lowercase component tags (rendering bug, no further analysis):

- `products/products.md:83` `<splitColumn>`, and `:84,87,90,93,96,99` `<bigButton>` (×6)
- `products/discounts.md:14` `<splitColumn>`
- `products/surcharges.md:16,69` `<splitColumn>`
- `registration/badge_designer.md:7,79` `<splitColumn>`
- `registration/transfer.md:8` `<splitColumn>`
- `orders/orders.md:59` `<splitColumn>`
- `templates/templates.md:78,86,91,101,126,132,145` `<splitColumn>`
- Related nit: `<ol class="numbered-list">` (not `className`) at `products/addons.md:14`, `products/claimtickets.md:37`, `products/discounts.md:15`.

---

## Master navigation reference (used throughout)

- Main (attendee) sidebar: **Housekeeping** (`src/frontend/containers/corecontainer.tsx:92-98`, en `common.housekeeping`), **Attendance** (`:100`, en-US:217), **Event store**, **Transaction history**, Applications › **Volunteering** / **Dealing** (`:336-354`, en-US:231), **My Department(s)** for leads (`:360-380`).
- Housekeeping module switcher (`src/frontend/containers/housekeeping/ModuleSwitcher.tsx:10-144`), shown at the top of the side menu (`src/frontend/components/SideNav.tsx:95-97`): **Attendees** (`attendee_module`), **Registration** (`registration_management`), **Store Management**, **Volunteers**, **Dealers**, **System**.
- Attendees module sidebar (`housekeepingcontainer.tsx:26-104`): Dashboard, **Cashier UI**, **Devices** (hidden if QuikTicket disabled, `:197-211`), Attendee Management › **User Search**, **User Notes**, **Fee Management**, **Refund requests**, **Mass Email**, **Event Statistics** (`attendee_statistics` = "Event Statistics", en-US:1359).
- Registration sidebar (`registration/container.tsx:20-84`): Dashboard, Registration Statistics, Mass Email, **Settings**, Dynamic Export. Under **Badges and Tiers** (en-US:3401): **Badge Products**, **Options**, **Badge Art**, **Badge Designer**, **Registration Flags**.
- Store Management sidebar (`store/container.tsx:26-66`): **Store Products**, **Options**, **Surcharges**, **Vouchers**, **Orders**, **Gatekeeping**.
- System sidebar (`system/container.tsx:21-63`): Dynamic Export, Export, User Creation, Audit Logs, Developers, **Settings**, Roles.
- Legacy redirects for old links such as `/housekeeping/gatekeeping`, `/products`, `/settings` and `/orders` (`HousekeepingRoutes.tsx:47-62`). Old bookmarks still resolve, but they're marked for removal ("TODO(2026-09-21)").

---

## Task A: per-page detail

### intro.md: Accurate

- The page is about reading the guides, not the app. The BigButton targets `/docs/guides/convention_checklist` and `/docs/guides/registration/attendance` exist. The latter resolves through Docusaurus's folder-index convention (`attendance/attendance.md`).
- The example path **Housekeeping › Registration › Options** matches master (Registration module, `registration/container.tsx:60-65`).
- Nit, docs site only: the colour-mode tooltip reads "Switch between dark and light mode (currently light mode)" (`node_modules/@docusaurus/theme-classic/lib/theme/ColorModeToggle/index.js:60`, Docusaurus 3.10.2), not exactly *Switch between dark and light mode*. `respectPrefersColorScheme` is unset, so it's the 2-state toggle and "Click the button again to switch back" holds.
- The "Edit this page" link works (`docusaurus.config.js:43` `editUrl`).
- Images: none.

### convention_checklist.md: Needs update

Discrepancies:

1. Line 16, "Settings > Reg flags": now **Housekeeping › Registration › Registration Flags** (`registration/container.tsx:78-83`, en-US:1146). The `nukeme` flag is still there, and master adds a "Clear 'nukeme' PII" request on that page (`registration/registrationflagscontainer.tsx:93`, `convention.clearPii.modal.title`).
2. Line 28, "Settings > Badge Designer": now **Registration › Badge Designer** (`registration/container.tsx:72-77`).
3. Line 32, "Attendee Statistics > Dealers": the sidebar item is **Event Statistics** (en-US:1359), with tabs **Sales**, **Payouts** and **Options** only (`src/frontend/modules/stats/statistics.tsx:17-27`). There is no Dealers tab. The closest replacement is **Dealers › Dynamic Export**, which has the filters "Registered (paid)" / "Registered (unpaid)" (`dynamic_export.pivots.dealer.filters.registration.paid`).
4. Line 31, "ConCat does not yet have a method to directly collect payments": still broadly true. The cashier records **Cash payment** / **Card payment** (`src/frontend/containers/cashier/attendeeStatus.tsx:380-398`), and orders have **Mark as Paid** › Write-off / Card / Cash / Voucher (`attendee/orders/orderInfo.tsx:571-613`). Both are external-payment records. Worth rewording to name those buttons.
5. Line 21, "Stripe payoff schedule": Stripe is configured at System › Settings › **Payment Gateways** (`settings/settings.tsx:43`, "Connect to Stripe"). The payout schedule itself lives in Stripe (unverified).
6. Line 29, "Verify that the printer works" / line 30, "driver license scanner": now done from the cashier's **Configure Devices** dialog (see scanner.md).

Keep: the overall checklist structure and the policy items (refunds, pre-reg dates, label sizes, post-event PII).
Images: none.

### products/options.md: Needs update (minor)

Re-checked against master. Everything below matches:

- Table 1.1 types and styles. Single Select (Radio, Dropdown), Multi Select (Checkboxes, Blocks), Free text Field (Text, Textarea), Number, Currency, Phone Number, Address and Files all match `src/shared/options/index.ts:73-120` and `option_types.*`. Currency is hidden only for volunteer/dealer option sources (`OptionEditor.tsx`, `config.allowPrice`).
- Shared list: both menus render `OptionsContainer source="product"` (`registration/container.tsx:137-144`, `store/container.tsx:118-125`). Volunteer and dealer options are separate (`SourceConfig`, `options/index.ts:124-142`; Volunteers › Options, Dealers › Options).
- Sidenote "Options only appears for roles that can manage products": the sidebar item requires `product:manage` (`registration/container.tsx:60-65`, `store/container.tsx:35-41`).
- Step 1: path, "module menu at the top of the side menu" (`SideNav.tsx:95-97`), and **Options** under **Badges and Tiers**. The URL is `/housekeeping/registration/options`.
- Step 1 result: **Create New Option** (en-US:1590) above a searchable DataTable (`options/options.tsx:59-76`).
- Step 2: **Creating Option** (en-US:1588) and the "Back to" + "Options" button (`options/options.tsx:117-119`).
- Steps 3–4: **Name**, **Type**, **Style** (`components/OptionEditor.tsx:54,68,230`). Free text shows "Min Length" / "Max Length (Optional)" (`optionEditorComponents/OptionEditorMinMax.tsx:44,55`).
- Step 5: "(Optional)" fields include **Description (Optional)** (`OptionEditor.tsx:117`).
- Step 6: **Create**, then the toast **New option has been created** (en-US:1399) and a return to the list (`createOption.tsx:45-66`, `options.tsx:110-112`).
- Assigning: the **Options** card (`products/viewer/productoptions.tsx:225`), the "There are currently no product options." message (en-US:997), and the green **Add** button with the `add` icon (`:79-86`). Then **Option Search** (en-US:998), **Mark selected options as required.** (en-US:999), **Prevent changes to this option after purchase is complete.** (en-US:1000) and **Assign Options** (en-US:1001) (`:176-216`).
- Selected chips show "Name (ID: n)" (`ElementSelector.tsx:145`, `common.id_suffix`).
- The lock button is disabled for price-changing options (`:105-117`). The forced immutable checkbox is `:53-58,198-211`.

Discrepancies:

1. Line 95, Store path: "in **Housekeeping › Store Management**, click **Store Products**. Then click the product." On master, **Store Products** opens **Product Categories** (`products/categories.tsx:26`, en-US:1775). You must click **View Products** on a category (`categoryItem.tsx:203-208`, en-US:377) before the product list appears. The product name is a link (`category/categoryInfo.tsx:84-89`). Badge Products goes straight to the list (`registration/productwrapper.tsx:18-36`).
2. Step 2 result "two checkboxes": true for badge and store products. Dealer (vendor) products show only the required checkbox (`productoptions.tsx:198`). Out of the page's stated scope, so optional.
3. Omission: the Option Search dropdown has a **Create New** entry that creates an option inline from the product page (`productoptions.tsx:144-163,182`; `ElementSelector.tsx:75-90`). Optional to mention.
4. "Removing an option doesn't change existing orders" is unverified at runtime.

Images:

- `static/img/tutorial/productOptionCreate.png` (2022). The form still exists, but the screenshot lacks Description, Style and Display on cashier interface (the caption already says so).
- `productOptionAssign.png` (2022). Shows Option Search, the required checkbox and Assign Options, but not the immutable checkbox (the caption already says so).

### products/products.md: Needs update

Discrepancies:

1. Steps 2 and Modify 2 (lines 20, 120): "Click **Products** from the left-hand sidebar, then **View Products** next to the category".
   - Store products: Housekeeping › module switcher › **Store Management** › **Store Products** › **View Products** (`store/container.tsx:29-34`, `categoryItem.tsx:203-208`).
   - Registration products: **Registration** › **Badge Products**, with no category step. The store categories page shows "Looking for the Registration category? It moved! Registration has its own module now." (`products/categories.tsx:78-92`).
   - Dealer products: **Dealers** › **Products** (`modules/dealer/dealerContainer.tsx:39-43`).
2. Line 24: **Create New Product** ✓ (`category/categoryInfo.tsx:38-40`).
3. Line 31: **Name** ✓. **Display Name** is a separate field labelled "Display Name Optional" (`productForm.tsx:256,270`).
4. Line 34: **Description** ✓ (`:282`).
5. Line 37: **Base Price** ✓ (`:350`), under a **Pricing** heading (`:344`).
6. Line 40, **Stock Control**: now a section heading (`:387`, en-US:1013) with **Expires On**, **Maximum purchases per user** (en-US:1021) and **Limit Available Stock** (en-US:1014), not a yes/no field.
7. Line 43: **Pass Platform Fee to Customer** ✓ (`:378`, en-US:1030).
8. Line 46, **Make Product Publicly Visible**: replaced by **Product visibility** (en-US:1022) with three options, **Public**, **Unlisted** and **Hidden** (`productForm.tsx:311-336`). Unlisted means "available … but will not be listed … Users need the link". Hidden means "only … through automated means such as a free addon".
9. Lines 56–59: **Available From** / **Available Until** ✓, under **Restrictions** (`:485-503`).
10. Lines 62–65: **Minimum Purchase Age** / **Maximum Purchase Age** ✓ (`:519,536`), each with an "Optional" suffix.
11. Line 68, **Restrict Product to User Roles**: now two fields, **Product Role Whitelist** (en-US:1017) and **Product Role Blacklist** (en-US:2855) (`:555,579`).
12. Line 71, **Restrict Product to Grants**: the label is **Restrict product to grants** (en-US:1019), help text "…unless they have the required product in their cart, or previously purchased…" (`:605-606`).
13. Missing fields:
    - The **Cashier** section (`:451-480`): **Product Label Print Design** (en-US:3414), with a checkbox and dropdown, for store and registration products.
    - **Deliverable** (en-US:3412), store only, default on (`:181`). It decides what needs fulfilment (see orders.md).
    - **Dealer assistant count limit**, vendor only (`:293`).
14. Line 77: **Create Product** ✓ (en-US:1032).
15. Line 123, **View / Edit Details**: no such button. The product name in the list is a link (`category/categoryInfo.tsx:84-89`).
16. Lines 109/127: the edit (`edit`) icon in **Product Information** ✓ (`viewer/productinfo.tsx:34-48`). **Update Product** ✓ (en-US:1031).
17. Line 111: the card names are **Product Images**, **Addons**, **Discounts**, **Upgrade Paths** (registration only), **Options** (not "Product Options") and **Surcharges**. The right column has **Prices** and **Actions** › "Clear unpaid orders?" (`viewer/viewer.tsx:82-100`, `actions.tsx:18-33`).
18. Lines 138–144, deleting: the delete icon is in Product Information ✓ (`productinfo.tsx:49-60`). The confirm title is "Delete product?". The API removes the product from unpaid orders (`orders.removeProduct`) and soft-deletes it (`src/backend/app/server/routes/api/products/{id}/delete.ts:13-16`; `services/OrderService.ts:397-427`) ✓. Deleted products can be listed with **Show Deleted Products** (`category/categoryInfo.tsx:58-62`). No restore UI was found.
19. Lowercase `<splitColumn>` / `<bigButton>` (lines 83–102).

Keep: the field explanations for price, age limits and dates; the archive semantics.
Images: none directly; the BigButtons point to the sub-pages.

### products/addons.md: Needs update

1. Line 17, navigating to the product page: same path problem as products.md.
2. Line 22: the green `add` button next to **Addons** ✓ (`viewer/addoninfo.tsx:60-69`, en "Addons").
3. Line 27: the search field is labelled **Product Search** (`:143`), single selection.
4. Line 32, the "**Addon is complimentary**" checkbox: the label is **Add-on is complimentary and should be provided free** (en-US:993). A second checkbox is missing: **Add-on is hidden and should not appear in users' carts** (en-US:994, `:155-163`). The button is **Create Add-On** (en-US:996), not "Create Add-on".
5. Line 8, "Any product in the system can be added as an addon": false on master. The backend rejects:
   - addons that have addons ("Addon products can not have additional addons")
   - registration products ("Registration products can not be addons")
   - a product as its own addon
   - duplicates
   - dealer addons outside the same category

   Evidence: `src/backend/app/server/routes/api/products/{id}/addons/post.ts:35-54`.
6. Upsell (lines 37–41): consistent with master. After adding to cart, **Product addons** lists the non-free addons whose visibility is **Public** (`components/AddedToCart.tsx:29-30,97`). Note that only Public addons are shown.

Keep: the concept and the upsell explanation.
Images: none.

### products/claimtickets.md: Needs update (minor)

1. Line 46, "Locate the `Badge Print Design` field": the label is **Product Label Print Design** (en-US:3414). To choose a design you must first tick its checkbox, then pick from "Please select a design..." (`productForm.tsx:45-110`). It sits under the **Cashier** heading (`:451-466`). Help text for store products: "Additional badges will be printed for the user, to be used as physical vouchers." For registration products the same field means "Override the default badge design layout." Worth a warning.
2. Lines 59–61: printing via **Print Badge** (en-US:2647) ✓. The cashier adds `extraLabels` for paid items whose product has `printDesignId` (`src/backend/app/services/CashierService.ts:286-292`). With NFC enabled, the button reads **Program & Print Badge** (en-US:785).
3. "Validated anywhere in the event using ConCat" (line 15): unverified.
4. Keep: the overview, the use cases and the "unrelated to Tickets" notice (ticketed products do exist separately, see dealers/tickets.md).

Images:

- `productLabelPrintDesign.png` (2026-07) matches master: label, checkbox and placeholder.
- `claimTicketsCat.jpg` is a photo. Fine.

### products/discounts.md: Needs update

1. Line 18: product page path, as above.
2. Line 23: the green `add` button next to **Discounts** ✓ (`viewer/discountinfo.tsx:77-91`).
3. Line 28, "Enter the discounted price": **Discounted Price** ✓ (en-US:1970). The form shows **Current Price** › **Discounted Price** (`:242-268`). The price is disabled when editing (`:264`).
4. Line 33, the role limit: **Limit Discount to Role(s)** with an "Optional" suffix (en-US:1971, `:312`) ✓.
5. Line 38, "By default, discounts become active immediately … customise both dates": both **Available From** and **Available Until** are **required** and default to today, or to the product's start date (`:155-160,282-305`). So line 8, "run indefinitely", isn't possible through the form; an end date must be set.
6. New on master:
   - an optional **Name** field (`:350`)
   - for registration products, a checkbox **Restrict registrations created with this discount from being transferred to other users.** (en-US:1974, `:327-343`), which interacts with transfer.md
   - an **Edit** button per discount (`:446-455`), whose save button reads **Save Discount Price**
7. Line 43: **Create Discount Price** ✓ (en-US:1972).
8. Line 54: the red trash can deletes. Its confirm dialog is "Delete Discount" / "Are you sure you want to delete this discount?" (`:456-472`).
9. Line 57: the note on unpaid orders is unverified. The delete route only soft-deletes the discount (`src/backend/app/server/routes/api/products/{id}/discounts/{discountId}/delete.ts:30-40`).
10. Lowercase `<splitColumn>` (line 14).

Images: `productDiscount.png` (2022) is outdated. It has Discounted Price before Current Price, no Name field, no transfer-lock checkbox and an empty Available Until.

### products/productimages.md: Needs update

1. Lines 12–14, the constraints. Master:
   - The uploader accepts any `image/*` (`components/ImageUpload/ImageUpload.tsx:54`).
   - It converts to PNG and resizes to at most 2048×2048 on the client (`products/viewer/imageEditor/CreateImageComponent.tsx:50-56`).
   - It allows up to 10 images per product (`:17-19`).
   - The server accepts `image/png` up to `0xFFFFFF` bytes, about 16 MiB (`src/backend/app/server/routes/api/assets.ts:48-51`).

   So "no larger than 1MB" and "must be PNG" are wrong for users. "At least 512x512" has no check in the code (unverified as a recommendation).
2. Line 8, "Only the first image will be used as the main image": master has image types **Primary** / **Image** / **Hidden** / **Badge Art**, with **Set Primary**, **Set Hidden** and **Set Badge Art** actions (`imageEditor/ImageListItemComponent.tsx:72-144`). The store card uses the `primary` image (`components/ProductCard.tsx:20`).
3. Line 16, "uploaded or deleted from edit page … see Modifying a Product": the images are a separate **Product Images** card on the product page, with its own add button (`imageEditor/ImageListComponent.tsx:25-35`). They aren't in the edit form.
4. Lines 18–20, "not shown for registration products or on the cart page": consistent with master. Images are used only in `containers/store/` (`ProductCard.tsx`, `store/productPage.tsx:67-77`). No use was found in `containers/register` or `containers/cart`.

Images: none.

### products/surcharges.md: Needs update

1. Line 25, "Click **Surcharges** from the left-hand sidebar": now **Store Management › Surcharges** (`store/container.tsx:42-47`).
2. Line 25: **Create New Surcharge** ✓ (en-US:1280). It opens a **Create Surcharge** modal (`surcharges/CreateModal.tsx:23`).
3. Line 30, "internal name and display name": **Name** / **Display Name** ✓ (`SurchargeForm.tsx:81,94`).
4. Lines 35–46 list three types: "Surcharge - Fixed Amount", "Surcharge - Percentage", "Tax Rate". On master these are two fields:
   - **Type**: **Surcharge** / **Tax Rate** (`:130-131`, en-US:1284-1285)
   - **Amount Type**: **Fixed Amount** / **Percentage** (`:137-149`, en-US:1286-1288). Tax Rate forces Percentage.

   Then **Amount** (`:155`). The screenshot already shows this, so the text should match it.
5. Line 56: **Create Surcharge** ✓ (en-US:1289).
6. Lines 73–88, associating: the green `add` button on the product's **Surcharges** card ✓ (`viewer/surchargeinfo.tsx:36,173-186`). The search field is **Surcharge Search**, with a "Create New Surcharge" shortcut (`:149-157`). Then **Assign Surcharges** ✓ (en-US:971).
7. Missing:
   - **Category Surcharges**, applied to every product in a category (`products/category/categorySurcharges.tsx:29-30,81`, en-US:1965)
   - **Assign to Product** from the surcharge's own page (`surcharges/surchargeItem.tsx:110`)
8. Line 99: "**Pass Platform Fees to Customer**" is labelled **Pass Platform Fee to Customer** (en-US:1030). It's a checkbox in the product edit form (Pricing), not directly on the product page. The page shows **Platform Fee**: "Fees Passed On via Surcharge" / "Fees Absorbed / Included" (`viewer/productinfo.tsx:101-105`, `products/utils.tsx:40-51`).
9. Lowercase `<splitColumn>` (lines 16, 69).

Images:

- `surchargeAddTaxRate.png` (2022) matches the master form fields and labels.
- `productOptionAssign.png` at line 93 is the **wrong screenshot**: it shows the Options card, not Surcharges.

### registration/attendance/attendance.md: Needs update

1. Line 15, "follow Creating a Product and select the **Registration** category at Step 2": on master, use **Registration › Badge Products › Create New Product** (`registration/productwrapper.tsx:18-36`). The store categories page says Registration moved (`products/categories.tsx:78-92`).
2. Line 17, "**Make Product Publicly Visible**": now **Product visibility** = **Public** / **Unlisted** / **Hidden** (en-US:1022).
3. Line 21, Upgrade Paths: exists. The **Upgrade Paths** card appears on registration products only (`viewer/viewer.tsx:88-90`; `upgradeinfo.tsx:48-128`). It shows "There are currently no upgrade paths." and **Create Upgrades** (en-US:1003,1006). The page has no steps. "Charging just the price difference" is unverified. The attendee side offers selectable upgrades (`components/RegTypeSelectList.tsx:67`).
4. Lines 27–28, complimentary versus non-complimentary addons: plausible but unverified. Note that registration products can't themselves be addons (see addons.md).
5. The `/docs/guides/products#creating-a-product` link resolves.

Keep: the terminology intro and the upgrade concept.
Images: none.

### registration/badge_designer.md: Needs update

1. Line 22, "requires `system:settings:update` and `system:badgedesign:read`… update needs `system:badgedesign:update`": on master the page route needs `system:badgedesign:read` (`registration/container.tsx:161-167`). The sidebar item needs `system:badgedesign:update` (`:72-77`). `system:settings:update` isn't involved.
2. Line 37, "**Settings** › **Badge Designer** top menu": now **Housekeeping › Registration › Badge Designer** (`registration/container.tsx:72-77`, en-US:1671).
3. Line 42: the green `add` button ✓ (`settings/badgedesigner/list.tsx:118-126`, title "New").
4. Line 47: **Display Name** ✓, inside the **Root** group (`details/root.tsx:19`).
5. Line 52: **Details** with X / Y / Width / Height in inches ✓ (`details/base.tsx:85-126`).
6. Line 64, "adding nodes and text": the render tree has **Add Text**, **Add Node** and **Add Image** (`renderTree.tsx:239-264`).
7. Line 67: **Save** ✓. Line 73: **Export** / **Import** ✓. The toolbar also has **Print** and **Load users** (`designer.tsx:247-264`).
8. Line 82: the **Pre-Printed Canvas** group exists (`DesignerNodeDetails.tsx:44-48`; `details/root.tsx:80-90`). It references badge art (`sampleBadgeArtId`).
9. Lines 98–100, the Limitations list is obsolete:
   - **Images**: an **Add Image** node exists, with Source, Size, Repeat, Position and Rounded border (`details/image.tsx`).
   - **Static text**: there's a `placeholder` variable type.
   - **Product options**: there's an `option` variable type with **Option ID** (`src/shared/user/badgeDesign.ts:146-165`; `details/text.tsx:156-170`).
   - **Zebra printers**: direct printing is supported (`containers/cashier/zebra/*`, "Add zebra printer" in Configure Devices).
   - Rear-side printing: no evidence either way (unverified).
10. Lowercase `<splitColumn>` (lines 7, 79).

Images:

- `badgeDesigner.png` (2022): the toolbar and groups still match. The render-tree icons predate **Add Image**.
- `badgeDesigner-prePrintedCanvas.png` (2022): not opened in detail; the feature exists.

### registration/cashier/cashier.md: Needs update

1. Line 13, search auto-navigation: matches **Enable Auto Navigate** (`attendee_search.enable_auto_navigate`; `cashier/home.tsx:40`).
2. Line 19: **Actions › Update registration** ✓. The Actions dropdown is `components/ElementHeader.tsx:67-68`, and the item text is "Update"/"Create" plus "registration" (`cashier/profile.tsx:149-157`).
3. Line 23: **Undelivered products** ✓ (en-US:802, `attendeeStatus.tsx:272`).
4. Lines 25–54, station settings. The modal is titled **Configure Registration Station** (en-US:862) and opened by the gear button (`settingsModal.tsx:42-63`).
   - **Enable payment acceptance** ✓ (en-US:1905).
   - "Require ID barcode scan": the master label is **No ID barcode has been scanned.** (key `cashier.no_id_scanned`, en-US:1915, `settingsModal.tsx:96`). The label text looks wrong in master, but that's what the UI shows.
   - **Enable staff check-in** ✓.
   - **Print separate staff badge** ✓.
   - "Print separate vendor badge": now **Print separate dealer badge** (en-US:1908), and the badge text is "DEALER", not "VENDOR" (`if_enabled_this_registration_station_dealer`).
   - New settings: **Show reprint modal** (en-US:2243), **Override badge design** (en-US:3739) and **Restrict Product Check-in** (en-US:804) (`settingsModal.tsx:152-179,402-433`).
5. Line 58, badge type printer preferences ✓: **Badge type printer preferences**, **Primary Printer**, **Secondary Printer** (`settingsModal.tsx:360-369`).
6. Missing:
   - **Configure Devices** (Zebra / OS printers, scanners, receipt printers, NFC)
   - **Cash payment** / **Card payment** buttons (`attendeeStatus.tsx:380-398`)
   - NFC programming (**Program & Print Badge**, **Revoke NFC Badge**)
   - registration QR scanning
   - check-in-only mode ("Disable badge prints and check-in users instead")
   - **View print logs**

Keep: the purpose, the banned-word handling and the PDF417 note.
Images: `static/img/cashier/badgeTypePrinter.png` (2024-10) matches the master labels.

### registration/cashier/scanner.md: Needs update

1. Line 51, "click on the top left printer icon to configure devices": master has a **Configure Devices** button (cable icon) next to **Registration Station** / **Printer Status** in the cashier header (`cashier/header.tsx:37-46`, en-US:1647). The dialog is titled "Configure Devices".
2. Line 55: **Add Manually** › **Scanner with Web Serial** ✓ (en-US:843-844, `printerModal.tsx:86-93`).
3. Lines 9–11, browser support. The scanner's **Add Manually** menu renders only when `navigator.usb` (WebUSB) exists (`printerModal.tsx:32,86-88`). Otherwise the dialog says "It seems like your browser does not support WebUSB. Please use a supported browser." (en-US:851). The port itself is requested via `navigator.serial` (`:35`).
   - Firefox (claim added in docs PR #71): unverified. If Firefox lacks WebUSB, the menu won't render whatever its Web Serial support. Needs a runtime test.
   - Master also says "USB keyboard scanners are always connected and should be ready to use without any additional setup." (`printerModal.tsx:109`). So keyboard mode works without step 5.
4. Missing: QR codes. The scanner parser accepts `@CONCAT;UUID…` (registration QR) and `@CONCAT;UID…` (`cashier/scanner.tsx:80-87`), and keyboard-wedge input via `useTypeSequence('@CONCAT', …)` (`cashiercontainer.tsx:123`). Step 3 ("Disable all barcode scan types") plus step 4 (PDF417 only) blocks QR codes. See the regQR branch.
5. Typos: "suppport" (line 9), "Eanble" (line 40).

Images:

- Barcode images (2024-02) are TEEMI manual pages; still valid as far as the source shows.
- `select_printer.png` (2024-02) is **outdated**: it shows "Primary: OS Controlled ▾" under Registration Station, not the **Configure Devices** button.
- `add_scanner.png` (2024-02) is **partly outdated**: it says "Configure devices" in sentence case and lacks the NFC Tag Interfaces section. The Scanners section matches.

### registration/raffle.md: Needs update (major rewrite; the weights and ticket-points sections are Not in master)

The feature still exists as **Store Management › Gatekeeping** "silos" (renamed in ConCat PR #1104, 2023-07-24). Its draw mechanics changed fundamentally in **ConCat PR #2908 "feat(raffle): Remove raffle editor"** (commit `84579d55b`, 2026-08-17). That PR deleted:

- `raffles/editor/weightEditor.tsx`
- `raffles/components/{staticValue,pointsValue,randomNumber,addressDistance,prevYearsAttended,mathOperation,selectList}.tsx`
- `configureRaffleNodeModal.tsx`
- backend `services/raffle/*Criterion.ts` and `RaffleFactory.ts`

Its migration `20260814T120000000-removeRaffleWeights.ts` dropped `raffles.criterion` and `raffleTickets.points`. Winners are now chosen by hand.

Step-by-step mapping:

| Doc step | Master equivalent | Evidence |
| --- | --- | --- |
| Create 1: click **Housekeeping** | Same | `corecontainer.tsx:92-98` |
| Create 2: **Raffles** under **Product Management** | Module switcher › **Store Management** › **Gatekeeping** (needs `raffle:manage`). URL `/housekeeping/store/gatekeeping`; the old `/housekeeping/gatekeeping` redirects. | `store/container.tsx:60-65`; en-US:95; `HousekeepingRoutes.tsx:53` |
| Create 3: **Create New Raffle** | **Create New Silo** | `raffles/list.tsx:20-28`; en-US:1776 |
| Create 4: name + "allow staff and volunteers to bypass … by relevant checkbox" | **Name** in the **Silo Information** card. Bypass is a **Role override** card with a role picker: "Allow users that are members of specific roles to bypass the silo and create a registration." It is not a checkbox. New checkboxes: **Allow new entries to the silo?** and **Overflow stock silo** ("When the product is out of stock, add users to the silo for later selection.") | `editor/raffleEditor.tsx:166-214,250-252`; `editor/roleSelector.tsx`; en-US:2015,1711,1712,1733-1734 |
| Create 5: weight wizard, **Add Static Weight** = 1 | **Not in master** (removed by #2908) | `raffleEditor.tsx` has no weight editor; `shared/orders/raffle.ts:54-69` has no criterion |
| Create 6: **Associated Products** | Same label | `editor/productSelector.tsx:32`; en-US:1710 |
| Create 7: **Create Raffle** | **Create Silo** ("Create" + "Silo"). Toast "Silo successfully created!" | `raffleEditor.tsx:227,113` |
| Run 1: navigate to the raffle | **Manage Silo** button on the list | `raffleListItem.tsx:21-28`; en-US:1595 |
| Run 2: **Entrants** tab, then **Run Raffle** | The draw form is in its own **Run** tab. **Entrants** only lists tickets. There's no "Run Raffle" button. | `raffleEditor.tsx:258-305`; en-US:1597-1599 |
| Run 3: "number of winners to draw", existing winners, non-winners | Number of winners is replaced by **Select users to win**, a user picker. **Run Raffle Draw** stays disabled until at least one user is chosen, and the server marks exactly those users as winners, with no random selection. **What should happen to existing winners?**: Do Nothing / Revoke existing wins / Reset existing wins / Delete existing wins. **What should happen to non-winners in this draw?**: Do Nothing / Revoke tickets / Delete tickets. The tip "leave non-winners as Do Nothing" still uses valid labels. | `editor/runRaffle.tsx:110-155,178`; `services/RaffleService.ts:519-557`; en-US:1709,1696-1705 |
| Run 4: uncheck **Close the raffle to new entries** | Same label, ticked by default. Closing sets the status badge to **Recently Drawn**. | `runRaffle.tsx:73,156-167`; `raffleEditor.tsx:313-317`; en-US:1708 |
| Run 5: **Perform a test run** | **Perform a test run (Don't save the results)**. The server also treats a draw with no winners as a test run. | `runRaffle.tsx:168-173`; `RaffleService.ts:521-533`; en-US:1706 |
| Run 6: **Run Raffle Draw**, "could take a few minutes" | Same label. Loading text "Running Raffle. This may take a few minutes...". Results show Number of Winners, Total Entries, Win Percentage and Winning User IDs. | `runRaffle.tsx:104-108,176-183,222-250`; en-US:1707 |
| Ticket points: add a **Ticket Points** node; **Give non-winners a ticket point** | **Not in master**. There is no such checkbox, and the `points` column was dropped (#2908 "Remove the points things too"). | `runRaffle.tsx` (whole file); migration above |

Concepts that still exist:

- **Ticket states.** All five remain: `deleted`, `redeemed`, `rescinded`, `waiting`, `winner` (`shared/orders/raffle.ts:87-93`). The Entrants tab badges read **Entered / Waiting**, **Winner**, **Redeemed**, **Rescinded**, **Deleted** (`editor/raffleEntrants.tsx:184-211`, en-US:2527-2530,2521). The doc's semantics hold:
  - A `deleted` ticket can re-enter; it's reset to the default status (`RaffleService.ts:328-332`).
  - A `rescinded` ticket can't; it throws `AlreadyRedeemedError` (`:335`).
  - The UI calls rescinding "revoke": **Revoke / Void ticket**, **Revoke existing wins**, **Revoke tickets**.
  - Per-ticket actions: **Reset ticket**, **Revoke / Void ticket**, **Reset ticket to winner** / **Set ticket to winner** (`raffleEntrants.tsx:90-166`).
- **Silo statuses.** **Open to Entries**, **Closed to Entries**, **Recently Drawn** (`raffleEditor.tsx:313-317`). Closed silos still admit role-override users (`RaffleService.ts:322-326`).
- **Overflow silos.** New entries go straight to `winner` (`RaffleService.ts:307`).
- **Wording tab.** Eight attendee-facing texts, such as "Entry confirmation title" and "Entry winner message" (`editor/RaffleTextEdit.tsx`; `raffles.editor.*Text`).
- **Delete Silo**, with the warning "All ticket data will be lost." (`raffleEditor.tsx:230-243,328-368`).

Not in master: weights and the weight wizard (static, points, random, address-distance and previous-years-attended nodes), ticket points, and random or lottery draws. The page intro, "raffles allow to have a lottery for your attendee registration", no longer describes master: selection is manual. "All registrations will be given a virtual raffle ticket" is unverified; tickets are created when a user enters the silo (`RaffleService.ts:289-354`).

Keep: the ticket-state glossary (relabel it), the existing-winner and non-winner actions, the close and test-run options, and the multi-round tip.
Images: none.

### registration/transfer.md: Needs update

1. Line 16, "Click **Register for EVENTNAME**": the sidebar item is **Attendance** (en-US:217, `corecontainer.tsx:100`). It opens the dashboard with registration cards.
2. Line 19, "three-dots menu (`more_horiz`)": the card has a **Modify** button (en-US:1621) and a split caret `DropdownToggle` (`AttendeeRegistrationCard.tsx:451-465`). The item is **Transfer registration** with a lowercase r (en-US:1487). It shows only when the registration is paid and transfers are enabled (`:226-236,344-354`).
3. Line 22: the field is **Target Email** (en-US:1227), placeholder "Email of intended recipient".
4. Line 25: the label reads "Enter **Your** Password" (`user.subaccount.migration.modal.your_password.label`).
5. Line 28: the button **Transfer registration** ✓ (`TransferRegistrationModal.tsx:92-99`). The dialog text is "You can only transfer a registration to an existing user with a verified email address." and "This action is permanent and can't be undone…".
6. Line 38, the prerequisite note: the target must have registered but not paid. This matches the backend errors "User has not yet registered." and "Target user registration already has a grant." (`src/backend/app/server/routes/api/registrations/{id}/transfer/post.ts:79-93`).
7. Missing prerequisites and blocks:
   - The organiser must enable **Registration › Settings › Enable Registration Transfers** (en-US:1090, `registration/settings.tsx:254-262`).
   - Transfer is blocked once the badge is printed: "This registration cannot be transferred, as the badge has already been printed." (en-US:1222).
   - It's blocked for discount-locked registrations (en-US:1223, see discounts.md).
8. Line 42, "not possible through Housekeeping": outdated. The user profile's registration edit modal has a **Transfer** button, "Select user to transfer this registration to:" (`attendee/registrationEditModal.tsx:239-256,387-410`; en-US:917,919; API `/api/registrations/{id}/transfer/admin`).
9. Lowercase `<splitColumn>` (line 8).

Images: `static/img/gif/transfer-registration.gif` (2022) is **outdated**. Its first frame shows a "…" menu and a **Modify Registration** button; master has **Modify** plus a caret.

### dealers/managment.md: Needs update

1. Line 13, the "Approved (Paid)" status: there's no such status. Statuses are **Pending**, **Approved**, **Waitlisted**, **Rejected** and **Cancelled** (`src/shared/dealer/index.ts:8-16`). The attendee message is "Your %%0 application has been approved and is pending payment." (`dealer_form.application_approved`).
2. Lines 23–31, "Creating a Vendor Category … 'Products' tab … 'Create Category'": in the Dealers module, **Products** opens **Dealer Product Categories** (en-US:1172) with **Create New Category** (`modules/dealer/dealerProducts.tsx:26,46`). The page title says "Vendor" where master says "Dealer".
3. Dealer areas (line 21): **Dealers › Areas** › **Create New Dealer Area** (en-US:1176). Fields: **Name**, **Description**, **Product Category**, **Enabled**, **Full**, **Open** (`modules/dealer/dealerAreas.tsx:67,221-311`).
4. Line 37, the "Vendor" tab: the attendee sidebar item is **Dealing** (en-US:231, `corecontainer.tsx:347-352`; route `/dealer`, and `/vendor/*` redirects).
5. **Manage Assistants** (en-US:724) appears when an application is **approved** and its table type allows assistants (`dealerAssistantLimit` > 0), not after payment (`apply/dealer/DealerButtons.tsx:12-36`). Assistants are added by **Assistant Username** (`DealerAssistant.tsx:170`) and must confirm by email ("…they will receive an email asking them to confirm…"). Sub-accounts can be added instantly.
6. **Seating Preferences** ✓ (en-US:723) shows **Your Dealer ID** and **Seating Requests**, which the other dealer approves or declines.
7. Line 11, "approval sends an email and adds products to cart": unverified.
8. Line 15: registration discounts for dealers via Product Discount by role ✓ (`discount.limit_to_role`).
9. Missing: the Dealers module pages (Applications, Areas, Products, Mass Email, Options, Dynamic Export, **Dealer Settings** with a dealer form editor at `modules/dealer/dealerSettings.tsx:184`).

Images: none.

### dealers/tickets.md: Needs update

1. Ticketed products exist on master, but generically, not as a dealer's-den feature:
   - attendee copy "This is a Ticketed Product." / "A Ticketed Product is a one-per-person purchasable product for accessing special or limited events." (en-US:1199)
   - **Tickets** with **Ticket group** and **QR code** on the attendee dashboard (`containers/dashboard.tsx:340-413`)
   - **Retrieve Ticket(s)** (`/order/:id/tickets`, `corecontainer.tsx:238`)
2. Time slots are ticket groups with `validFrom`/`validUntil` (`src/shared/ticket.ts:3-9`). Scans return `NotYetValid` / `Expired` (`ticket.ts:56-64`; `services/TicketService.ts:517`).
3. Whether attendees "enter" or choose a slot is unverified. The cart only checks that some group has quantity left (`services/CartService.ts:1561-1571`), and the copy says "check your ticket after purchase for information on your entry group".
4. Scanning is done by QuikTicket devices, authorised through **Housekeeping › Devices** with a QR code (`housekeeping/devices/authorize.tsx:52-56`; `housekeepingcontainer.tsx:197-211`), which needs the `admin:ticket:scan` scope (`src/backend/app/server/routes/api/tickets.ts:252-273`).
5. Ticket groups have API routes only (`POST/PATCH/DELETE /api/ticketgroups`, `tickets.ts:147-224`). There's no housekeeping UI in `APIClient.ts`, so setup is presumably done by support (unverified).

Keep: the idea that it's a QR-coded timed entry that staff scan; generalise it beyond dealers.
Images: none.

### orders/orders.md: Needs update

1. Line 10, the "**Orders** page in Housekeeping": now **Store Management › Orders** (`store/container.tsx:54-59`). The profile tab is **Orders** (`attendee/userprofile.tsx:72-78`) ✓.
2. Line 14, "manually marked as paid": **Mark as Paid** › **Write-off** / **Card** / **Cash** / **Voucher** (`attendee/orders/orderInfo.tsx:571-613`).
3. Line 16, "Unpaid orders currently do not expire": outdated. **Registration › Settings** has an experimental **Cart Timeout** ("The amount of time, in minutes, an individual has to check out.", en-US:2924; `registration/settings.tsx:360-371`). It schedules cart invalidation (`services/CartService.ts:1105-1137`).
4. Line 30, "Click **User Search**, then the **Orders** tab": you must open a user from the search results first (`/housekeeping/attendees/user/:id`, `housekeepingcontainer.tsx:173-180`).
5. Line 35: **Create New Order** ✓ (en-US:473). It shows only when the user has no unpaid order for this convention (`attendee/orderstab.tsx:40-49`).
6. Line 40: "**Show Details**" is **Show details** (en-US:318). "**Pending Payment**" is **Pending payment** (en-US:130). The `add` button appears only for users with `registration:cashier` (`orders/components/OrderListItems.tsx:34-44`). The dialog reads "Add product to Order #N".
7. Line 62, "shown in yellow … as **Pending Fulfillment**": the badges are **Requires Fulfillment** / **Requires Partial Fulfillment** (en-US:456; `components/OrderListItem.tsx:85-98`). "Fulfillable products are any products outside of the registration and vendor categories, with the exception of QuikTicket-enabled products" is outdated: an item is fulfillable exactly when its product has **Deliverable** ticked (`attendee/orders/utils.ts:56-66`, whose comment says the category checks were removed).
8. Lines 73/83: **Mark as Fulfilled** ✓ (en-US:438). **Fulfill Order #N** ✓ (`orderFulfillModal.tsx:45,77`).
9. Line 94, "not possible to select all items": there's no select-all control (`orderFulfillModal.tsx:30-33,63`) ✓. "No confirmation email" is unverified.
10. Lines 50–55, Limitations: no price-override UI was found. Vouchers can be created or deleted per order (`voucherModal.tsx`). "Add an existing voucher" is unverified.
11. Lowercase `<splitColumn>` (line 59).

Images: `fulfillOrder.png` (2022). Its labels match today's modal text ("The selected items will be marked as fulfilled…", **Fulfilled?**, **Fulfill Order**).

### technical/cname.md: Accurate

- The Email Settings flow matches master. **System › Settings › Email Settings** tab (`settings/settings.tsx:50-52`, en-US:3371). The pending-validation notice reads "Please add the following CNAME records… press 'Verify'… select 'View Documentation'". The page has per-record copy buttons, **View Documentation**, **Download CSV** and **Verify** (`settings/emails/EmailDomain.tsx:166-214`).
- The app's **View Documentation** button links to `https://concat.app/docs/guides/technical/cname` (`EmailDomain.tsx:192`). **Keep this URL stable.**
- The convention CNAME target `customers.concat.app` isn't in the master source (infrastructure). Unverified.
- Images: `email_settings_cname.png` (2025-12) matches master. `email_settings_dns.png` is a third-party DNS panel.

### templates/templates.md: Needs update

1. Line 22, "Settings › Email Templates tab": now **Housekeeping › System › Settings › Email Settings** tab (needs `email:templates`), with an **Email Templates** section below Email Sending Domain and senders (`settings/settings.tsx:50-52`; `settings/emails/EmailSettings.tsx:25,38`; en-US:1688).
2. Lines 32–42, badges: **Default** / **Overridden** / **Disabled** ✓ (`templates/TemplateList.tsx:74-82`).
3. Line 49, `register` locked: the master message is "To modify this template, contact support." (`TemplateList.tsx:57`) ✓.
4. Line 53: **Modify** ✓ (`TemplateList.tsx:47`).
5. Line 53/148: the **Current** badge ✓ (`TemplateBodyEntry.tsx:25,51`). Line 93 says the green "**Active**" tag, which is wrong; it's **Current**.
6. Line 93, "Create Override next to Convention Level Override": the section label is "Level %%0 Override", capitalised, so it renders as "Level Convention Override" (`TemplateBodyEntry.tsx:49`). **Create Override** ✓ (`:62`).
7. Line 70, "Edit and Delete": these are icon buttons (`TemplateBodyEntry.tsx:92-116`).
8. Line 102, the red **Disable Template** ✓ (en-US:2224; `TemplateEditor.tsx:185-206`). Missing: disabled overrides show **Reactivate Template** (en-US:1043; `TemplateBodyEntry.tsx:67-76`). The "disabled" message is "This email will not be sent for this %%0.".
9. The editor also has **Subject Override (optional)** (`TemplateEditor.tsx:212`), **Preview** and **Available Variables** (`:259,290`). **Parse Error** ✓.
10. Lowercase `<splitColumn>` ×7.

Images: all nine in `static/img/tutorial/emailTemplates/` (2024-10). The concepts match; not compared pixel by pixel. The list and overview captures predate the System module (unverified visually).

### usernotes/usernotes.md: Needs update (minor)

1. Line 5, the eight defaults ✓, seeded per organisation (`services/SeedService.ts:507-556`). The master label is **Misc.**, with a dot.
2. Line 7: Cashier, Ban and Restriction are special and can't be deleted ✓ (`src/shared/user/notes.ts:5-11`; the Delete button is hidden for `internal` categories, `settings/notecategories/index.tsx:123-134`). Restriction and Ban are seeded as restricted (`SeedService.ts:549-556`, `restricted: true`).
3. Lines 17–19, bans: ✓. Master adds a **Ban Category**: registration, dealer, volunteer or other (`shared/user/notes.ts:13`; `modules/notes/addNoteForm.tsx:192`). Help text: "Registration bans prevent the user from logging in." (en-US:1156).
4. Line 21, "review when the first letter of first name and last name match": wrong. Master matches the first **3** letters of the first name and the first letter of the last name, case-insensitive. If both records have a date of birth, the year and month must also match (`services/Register.ts:581-621`). Any ban type matches (no `type` filter). A match sets `pendingReview`, which surfaces on the Housekeeping dashboard (`housekeeping/home.tsx:39,70-86`).
5. Lines 32–35, permissions: `user:note:read:hr`, `user:note:read` and `user:note:categories:manage` exist ✓ (`src/shared/permissions.ts:67-72`).
6. Missing:
   - paths: **Attendees › User Notes** (`housekeepingcontainer.tsx:74-79`), **Create Note**, and categories at **System › Settings › Note Categories** (en-US:1943)
   - the user-profile notes tab
7. The file has no front matter, so its sidebar order is default.

Images: none.

### volunteers/volunteers.md: Needs update

1. Line 10, "The volunteer form can be modified. Contact support": outdated. **Volunteers › Volunteer Settings** has a **Form Editor** card with **Go to Volunteer Form Editor** (`volunteers/settings/General.tsx:126-137`; route `/housekeeping/editor/volunteers`; needs `volunteer:admin`).
2. Lines 14–18, states: the master preferences are `interest`, `experience`, `avoid`, `request` and `assignment` (`src/shared/volunteer/model.ts:5`). Form labels: **Interest**, **Experience**, **Avoid**. Admin badges: "Interested in…", "Has past experience with…", "Will not volunteer for…", "Requested by…", "Assigned to…". So the concepts match but the labels differ.
3. Line 21, the `hr` role: exists, "Grants access to manage staff and volunteers" (`src/backend/defaults/roles.ts:24-26`) ✓.
4. Line 26, "leads must also be assigned the `user` role": doubtful.
   - Department leads without `volunteer:read` get **My Department(s)** in the attendee sidebar (`corecontainer.tsx:360-380`).
   - The `/housekeeping/volunteers/lead` and `/massemail` routes only require login (`volunteerContainer.tsx:95-108`).
   - The module switcher lists Volunteers for `isDepartmentLead` (`ModuleSwitcher.tsx:126-129`).
   - API-side permissions are unverified.
5. Line 30, leads' mass email: ✓, filtered to the departments they lead (`housekeeping/massemail/volunteer.tsx:71`).
6. Line 37, compensation via a role-limited discount ✓.
7. Missing: the module pages (Dashboard, Applications, Mass Email, Volunteer Stats, Settings › departments, Options, Volunteer Settings).

Images: none.

---

## Task B: unmerged branches

### origin/feat/taskBasedDocs

`bd24ef9` (2025-07-31, "feat(all): Task Based Documentation") and merge `8a5ae0f`, based on `0c75b91`.

What it adds: 22 files under `docs/new/`. 19 are empty (0 bytes); 3 have content:

- `welcome.md` (7 lines): a two-sentence welcome.
- `tasks/banning-an-attendee.md` (32 lines): a step-by-step ban. Checked against master:
  - "Select 'User Notes'" ✓ (Attendees sidebar)
  - "Create Note" ✓ (en `create.note`)
  - "Notes Category" ✗: it's **Note Category** (en-US:1931)
  - "Ban Category" ✓ (en-US:1635)
  - "User (optional)" ✓ (rendered "User (Optional)", `addNoteForm.tsx:112`)
  - First Name / Last Name ✓
  - "Text" ✓
  - "Create" ✓ (`UserNotesComponent.tsx:183`)
  - "locked out of their existing account": consistent with "Registration bans prevent the user from logging in." (en-US:1156)
  - "flagged for review" ✓ (`Register.ts:573-579`)
  - "Required Permissions: `user:notes:hr`" ✗: no such permission. Master has `user:note:create` (needed for the Create Note button, `UserNotesComponent.tsx:117`) and `user:note:read:hr` (restricted categories such as Ban).
  - Image placeholders are unfilled.
- `tasks/modify-email-templates.md` (7 lines): an intro to Handlebars, claiming it isn't available in Mass Email. The mass email UI shows no variable support (`housekeeping/massemail/index.tsx`); the claim is unverified at the backend level.

Verdict: **discard the branch as a whole.** It's mostly scaffolding and duplicates the textbook restyle. **Reuse `banning-an-attendee.md` after edits** (fix the label and permission, add the matching rule from usernotes.md, add screenshots). Fold the Handlebars intro into templates.md.

Topic ideas from the stubs, with master evidence:

- Guides:
  - configure-option: covered by options.md.
  - configure-product: products.md.
  - **configure-stripe**: System › Settings › **Payment Gateways**, "Connect to Stripe" (`settings/settings.tsx:43`; `stripe.connect.action.first`). No guide exists.
  - configure-dns: cname.md.
  - configure-teemi-scanner: scanner.md.
- References:
  - **grants**: "Restrict product to grants".
  - **handlebars**.
  - **permissions** and **roles**: System › Roles, plus default roles such as `hr`, `lead`, `user`, `badgeValidator` (`src/backend/defaults/roles.ts`).
- Tasks:
  - **defer-registration**: no "defer" string or feature found in master. The nearest is a Next Year convention copy (`settings.conventions.next_year`). Treat as not in master.
  - **open-registration**: **Open Registration** toggle at Registration › Settings ("Enables / disables convention registration.").
  - **open-dealers**: **Enable Dealers Module**, plus dealer area Enabled/Open/Full.
  - **open-volunteers**: **Enable Volunteers**.
  - **send-email**: Mass Email in the Attendees, Registration, Volunteers and Dealers modules.
- Troubleshooting: cashier, dealer-application, printer, teemi-scanner, volunteer-application. These are good gaps; scanner.md and cashier.md hold the raw material.

### origin/feat/NFCDocs2

`46db1dc` (2026-04-27, "feat(NFC): Support NFC badges"), based on `70462d0`.

What it adds:

- `docs/guides/registration/nfc/nfc.md` (39 lines). Content:
  - a beta intro
  - ACR122U via the external NFCRegProxy (Go, `sudo go run cmd/main.go`)
  - ChromeOS Smart Card Connector ("TODO: Test setup")
  - an ESP32 + PN532 reader
  - one pcscd error fix
- An **empty** `_category_.json` (0 bytes). That would break or mislabel the sidebar; it needs `label` and `position`.

Master check: NFC badges **exist on master.**

- **Registration › Settings › Enable NFC Badges**: "Requires that an NFC badge be programmed successfully before a label for the badge will be printed." (en-US:1091-1092; `registration/settings.tsx:264-273`).
- Cashier, Configure Devices › **NFC Tag Interfaces**, with **Add Manually** › **NFC Tag Interface with Web Serial** (`cashier/nfc/configure.tsx:59-70`, en-US:845).
- A default local HTTP proxy interface at `http://localhost:7070` is always added (`cashier/nfc/NFC.tsx:52-61`; `nfcInterfaces/NFCTagHTTPProxyInterface.tsx:32-141`). This matches the branch's NFCRegProxy approach.
- Header status "NFC Card Status: …" (`cashier/header.tsx:82-89`).
- **Program & Print Badge**, **Program & Re-print Badge**, **Print Only** and **Revoke NFC Badge** (en-US:785-790).
- Search prompt "Scan an ID barcode, place an NFC badge on the reader, or begin typing to search." (en-US:279).
- API `/api/badge/nfc/program`, `/api/badge/nfc/{uuid}` and `/{uuid}/password` (`src/backend/app/server/routes/api/badge/nfc.ts:65-208`), a `badgeValidator` role ("Allows the user to validate NFC badges"), and an `nfc-badge-scanned` webhook (changelog).
- ChromeOS and ESP32 specifics: no ChromeOS-specific code. ESP32 presumably uses the Web Serial interface (unverified). The external ConCatNFC repo can't be verified from master.

Verdict: **reuse after edits.** Keep the hardware and proxy install notes and the pcscd fix. Add:

- the setting
- the Configure Devices steps
- the print, program and revoke buttons
- the attendee search by badge
- the `badgeValidator` role and webhook pointer

Fix the empty `_category_.json`. Drop or finish the TODOs. The NFC beta labelling should be confirmed with the team.

### origin/feat/regQR

`1b7d8de` (2025-06-04), based on `00e8f9d`.

What it adds: 6 lines in `registration/cashier/scanner.md`. It's an optional step, "Enable QR Codes to be scanned (Used by Registration QR codes in email confirmations, if your event has enabled them.)". It **reuses `04_enable_pdf417.PNG`**, the wrong image, and carries the comment "TOOD: Get the right image, validate solely these two being enabled works".

Master check: registration QR **exists on master.**

- **Registration › Settings › Enable Registration QR Codes**: "When enabled, an email with a QR code for a registration will be sent when registration is completed. This will not apply retroactively, contact support if you wish to backfill this." (en-US:1095-1096; `registration/settings.tsx:286-295`).
- The email QR encodes `@CONCAT;UUID<uuid>` (`services/BusinessMailService.ts:1433-1439`).
- The attendee dashboard card also shows the QR code (`AttendeeRegistrationCard.tsx:614-616`).
- The cashier scanner parses `@CONCAT;UUID` and `@CONCAT;UID` (`cashier/scanner.tsx:80-87`), as does keyboard-wedge input (`cashiercontainer.tsx:123`, `components/AttendeeSearch.tsx:128-130,289-290`).
- ID validation rejects a reg QR: `cashier_ui.idvalidation.reg_qr_code_not_valid` (`IDValidationModal.tsx:28-31`).

Verdict: **reuse after edits.** It needs:

- the correct TEEMI "Enable QR Code" barcode from the manual
- the TODO removed
- a sentence pointing to the Enable Registration QR Codes setting
- the docs branch rebased: it predates the Firefox note (#71) and the textbook branch

The PDF417 plus QR combination still needs a runtime test.

---

## Images: summary

| Image | Used in | Status vs master |
| --- | --- | --- |
| tutorial/productOptionCreate.png | options.md | Screen exists; missing newer fields (already captioned) |
| tutorial/productOptionAssign.png | options.md; surcharges.md:93 | Options: OK, minus the immutable checkbox (captioned). Surcharges: **wrong screen** |
| tutorial/productDiscount.png | discounts.md | Outdated layout and fields |
| tutorial/surchargeAddTaxRate.png | surcharges.md | Matches |
| tutorial/productLabelPrintDesign.png | claimtickets.md | Matches |
| tutorial/claimTicketsCat.jpg | claimtickets.md | Photo, fine |
| tutorial/fulfillOrder.png | orders.md | Matches modal text |
| tutorial/badgeDesigner.png | badge_designer.md | Mostly matches; render tree lacks Add Image |
| tutorial/badgeDesigner-prePrintedCanvas.png | badge_designer.md | Feature exists; not compared in detail |
| gif/transfer-registration.gif | transfer.md | **Outdated** ("…" menu, "Modify Registration") |
| cashier/badgeTypePrinter.png | cashier.md | Matches |
| cashier/select_printer.png | scanner.md | **Outdated** (no Configure Devices button) |
| cashier/add_scanner.png | scanner.md | Partly outdated (no NFC section, casing) |
| cashier/barcodes/*.PNG, TEEMI PDF | scanner.md | Vendor material, OK |
| technical/email_settings_cname.png | cname.md | Matches |
| technical/email_settings_dns.png | cname.md | Third-party panel |
| tutorial/emailTemplates/* (9) | templates.md | Concepts match; captures predate the System module (unverified visually) |

All referenced image files exist in `static/img/`.
