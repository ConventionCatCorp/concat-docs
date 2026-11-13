# ConCat admin (Housekeeping) feature inventory

- **Source:** clean extract of ConCat `master`, commit `f4d531f` (2026-11-04), at a clean `git archive` extract of ConCat master (paths are relative to the ConCat repo root). Only code in this extract counts.
- **Method:** read-only review of routes, sidebars, page components and backend route scopes. Every UI label is resolved from `src/shared/translations/en-US.json`, a flat key map. Where a string is hard-coded in JSX, that string is quoted.
- **Paths:** all source paths are relative to the extract root. Brace notation `dir/{a.tsx, b.tsx}` stands for several files in one folder.
- **Placeholders:** `{name}`, `{id}` and `n` mark values filled in at runtime.

## How to read the tables

- **UI path** uses `›` and the exact rendered labels. It starts at the **Housekeeping** item in the main site sidebar, then the module chosen in the module-switcher dropdown at the top of the Housekeeping sidebar, then the sidebar item, then tabs, buttons and modals.
- **Permission** column:
  - **SB** is the sidebar item gate (`requiredPermissions`). A hidden item is simply not rendered.
  - **RT** is the React route gate (`UserRoute requirePermissions`). A user who fails it sees the page text "You do not have the required permissions to view this page."
  - **API** is the backend route scope.
  - In-page gates (`PermissionBoundary`, `checkPermission`) follow these.
  - A permission array without `matchAny` means the user needs every permission in it.
  - `checkPermission` has no superuser bypass. Deny always beats Allow.
- **Express Editor** rows are prefixed EDT. **System › Settings** rows are prefixed SET. **Onboarding** and **Ops** rows (ONB, OPS) sit outside Housekeeping but are included because they bracket the admin journey.

## 0. Navigation map

**Entry.** In the main site sidebar, **Housekeeping** (icon `supervised_user_circle`) is shown with `system:login`. Department leads who lack `volunteer:read` instead get **My Department(s)**, which goes to `/housekeeping/volunteers/lead`. Source: `src/frontend/containers/corecontainer.tsx`. All routes sit under `/housekeeping/*`. Source: `src/frontend/containers/housekeeping/HousekeepingRoutes.tsx`.

**Who has `system:login`.** These default roles grant it: `admin`, `user` ("Allows access to the Housekeeping system") and `roleManager`. Attendees do **not** get the `user` role at signup, so ordinary attendees cannot open Housekeeping.

**Module switcher.** A dropdown at the top of every Housekeeping sidebar that shows the active module's icon and label. Source: `src/frontend/containers/housekeeping/ModuleSwitcher.tsx`, rendered by `src/frontend/components/SidenavModuleSwitcher.tsx`. A module is listed only if the user can open at least one of its pages, and it opens the first page they can.

| Switcher label | Listed when the user has | Opens (first permitted, in order) |
|---|---|---|
| **Attendees** | always | `/housekeeping` |
| **Registration** | any of `registration:stats`, `system:settings:update`, `product:read`, `product:manage`, (`asset:create` + `system:badgeart:update`), `system:badgedesign:update`, `registration:update` | Dashboard › Settings › Badge Products › Options › Badge Art › Badge Designer › Registration Flags |
| **Store Management** | any of `product:read`, `product:manage`, `comp:create`, `order:view`, `raffle:manage` | Store Products › Options › Vouchers › Orders › Gatekeeping |
| **Volunteers** | `volunteer:read` or `user.isDepartmentLead` | Applications (`/housekeeping/volunteers`), or **My Department(s)** for leads |
| **Dealers** | `vendor:read` | Dashboard |
| **System** | any of `system:settings:update`, `system:export:dynamic:full`, `system:export`, `user:create`, `audit:read`, `webhook:manage` or `oauth:manage`, `system:permission:read`, `isRoleManager` | Settings › Dynamic Export › Export › User Creation › Audit Logs › Developers › Roles |

**Sidebars.** Every sidebar starts with the switcher and **Back to Homepage**. Items are listed in order; headers are in *italics*; gates are in brackets.

- **Attendees** (`src/frontend/containers/housekeeping/housekeepingcontainer.tsx`)
  - *Housekeeping*
    - Dashboard [system:login]
    - Cashier UI [registration:cashier]
    - Devices [system:login; hidden when `disableQuikTicket`]
  - *Module Management*, shown only when `hotelsEnabled`
    - Hotel Management [hotel:view or hotel:manage]
  - *Attendee Management*
    - User Search [system:login]
    - User Notes [system:login]
    - Fee Management [fee:read]
    - Refund Requests [refund:create]
    - Mass Email [massemail]
    - Event Statistics [registration:stats]
- **Registration** (`src/frontend/containers/housekeeping/registration/container.tsx`)
  - *Registration*
    - Dashboard [system:login]
    - Registration Statistics [registration:stats]
    - Mass Email [massemail]
    - Settings [system:settings:update]
    - Dynamic Export [system:export:dynamic:full]
  - *Badges and Tiers*
    - Badge Products [product:read]
    - Options [product:manage]
    - Badge Art [asset:create + system:badgeart:update]
    - Badge Designer [system:badgedesign:update]
    - Registration Flags [registration:update]
- **Store Management** (`src/frontend/containers/housekeeping/store/container.tsx`)
  - *Store Management*
    - Store Products [product:read]
    - Options [product:manage]
    - Surcharges [product:manage]
    - Vouchers [comp:create]
    - Orders [order:view]
    - Gatekeeping [raffle:manage]
- **Volunteers** (`src/frontend/containers/housekeeping/volunteers/volunteerContainer.tsx`)
  - *Volunteers*
    - Dashboard [volunteer:read]
    - Applications [volunteer:read]
    - My Department(s) [isDepartmentLead]
    - Mass Email [massemail]
    - Volunteer Stats [volunteer:admin]
  - *Settings* [volunteer:update]
    - Options [volunteer:update]
    - Volunteer Settings [volunteer:admin]
- **Dealers** (`src/frontend/modules/dealer/dealerContainer.tsx`)
  - *Dealers*
    - Dashboard [vendor:read]
    - Applications [vendor:read]
    - Areas [vendor:update]
    - Products [vendor:read]
    - Mass Email [vendor:massemail]
    - Options [vendor:update]
    - Dynamic Export [system:export:dynamic:full]
  - *Settings* [vendor:update]
    - Dealer Settings [vendor:update]
- **System** (`src/frontend/containers/housekeeping/system/container.tsx`)
  - *System*
    - Dynamic Export [system:export:dynamic:full]
    - Export [system:export]
    - User Creation [user:create]
    - Audit Logs [audit:read]
    - Developers [webhook:manage or oauth:manage]
    - Settings [system:settings:update]
    - Roles [isRoleManager or system:permission:read]

**Module route gates** (`src/frontend/containers/housekeeping/HousekeepingRoutes.tsx`):

| Route | Gate |
|---|---|
| `cashier/*` | `registration:cashier` |
| `volunteers/*` | logged in only (**no `system:login`**, so leads can enter) |
| `dealers/*` | `vendor:read` |
| `registration/*`, `store/*`, `system/*`, `editor/registration/*`, `editor/dealers/*`, `editor/volunteers/*` | `system:login` |
| everything else (Attendees) | `system:login` |

**Legacy redirects.** These old paths redirect, with a TODO dated 2026-09-21 to remove them:

| Old `/housekeeping/...` path | Redirects to |
|---|---|
| `auditlog`, `developers`, `dynamicexport`, `export`, `roles`, `settings`, `user/create` | `/housekeeping/system/...` |
| `gatekeeping`, `options`, `orders`, `products`, `surcharges`, `vouchers` | `/housekeeping/store/...` |

## 1. Attendees module (ATT, CSH, DEV, HTL)

The Attendees module is the default landing at `/housekeeping`; pick **Attendees** in the switcher to return to it. The user profile is reached from User Search and from many links elsewhere (`/housekeeping/attendees/user/{id}`).

### Dashboard, user search, user profile, notes, fees, refunds, mass email, statistics

| ID | Feature | What it does (one line) | UI path | Route | Permission | Key sub-features / tabs / form sections (exact labels) | Source files |
|---|---|---|---|---|---|---|---|
| ATT-01 | Housekeeping dashboard | Registration and identity counters | Housekeeping › Attendees › Dashboard | `/housekeeping` | SB+RT system:login; data registration:stats (otherwise "No Stats Available") | Header "Dashboard". Cards "Total Registrations", "Total Paid Registrations", "Badges Printed" (if >0), "Accounts Pending Review" → "View" (user:note:delete, if >0), "Pending Refund Requests" (refund:create, if >0), one "{product} (Paid)" card per product. Identity cards ("Identity Verifications Left", "Identity: {status}") only when `identityVerification` ≠ none. **No setup checklist** | `src/frontend/containers/housekeeping/home.tsx`, `src/frontend/components/UserListModal.tsx`, `src/backend/app/server/routes/api/stats.ts` |
| ATT-02 | Search for a user | Free-text, ID-scan or NFC search that opens a profile | Housekeeping › Attendees › User Search | `/housekeeping/attendees/search` | SB+RT system:login | Header "User Search". "Search users...". Filter (tune icon) → "Configure User Search Filters": "Only show badge printed users", "Only show paid users", "Only show dealers", "Only show volunteers", "Search badge name + UID". Help "Search Parameters" (Badge ID e.g. B101, Username, names, phone, email, date of birth YYYY-MM-DD). Result badges: "Paid in Full", "Registered, Not Paid", "Not Registered", "Pending Review", "Banned", "Restriction", "Staff Member", "Staff Alumni", "Sub-account", "Child", "Returning attendee" | `src/frontend/containers/housekeeping/attendee/{usersearch.tsx, searchUserFilterModal.tsx, utils.tsx}`, `src/frontend/components/AttendeeSearch.tsx` |
| ATT-03 | View a user profile | Tabbed admin view of one account | Housekeeping › Attendees › User Search › (result) | `/housekeeping/attendees/user/:id/*` | RT system:login; per-tab gates (ATT-14 to ATT-21) | Header: name, "[ID: n]", status badges. Tabs: **Name**, **Notes**, **Orders**, **Roles**, **Permissions**, **Volunteer**, **Dealer**, **Emergency Contacts**, **Audit**. Name tab cards: "User Profile", "Information" (Registration, Dealer, Volunteer, Hotel rows), "Actions". Sub-accounts have no Notes, Orders, Volunteer or Dealer tab and show "Owner account". Owners list "Other Accounts:" | `src/frontend/containers/housekeeping/attendee/{userprofile.tsx, usertab.tsx}` |
| ATT-04 | Edit personal details | Updates name, date of birth, email, phone and address | …profile › Name › User Profile › Edit (pencil) | same | user:update | Modal "Edit User": Preferred Name, Date of birth (minor warning "Attendee is a MINOR. Check for Parental Consent Form."), First Name, Last Name, Email, Phone, Address Line 1, Address Line 2 (Optional), City, Country, State / province, Zip / postal code → "Update User" | `src/frontend/containers/housekeeping/attendee/profileEditModal.tsx` |
| ATT-05 | Create or edit a registration | Sets attendance type, badge name, flags and options | …profile › Name › Information › Registration › Edit (pencil) | same | registration:update + product:read | Modal "Edit Registration": Badge Name ("Badge name contains a banned word."), Attendance Type, Registration Flags, "Registration Options", "Product Options", "Silo Options" (Status: raw values). Submit "Create Registration" / "Update Registration". Unavailable product → "Force Registration" confirm ("This will override any product stock limits, expired products, and age restrictions.") | `src/frontend/containers/housekeeping/attendee/registrationEditModal.tsx` |
| ATT-06 | Remove payment, transfer or delete a registration | Footer actions of Edit Registration | …› Edit Registration (footer) | same | as ATT-05 | Paid: "Remove Payment" ("Delete Registration Payment?" → "Delete"), "Transfer" ("Transfer Registration Payment?", "Select user to transfer this registration to:" → "Transfer"). Unpaid: "Delete" ("Delete Registration") | same |
| ATT-07 | Let an unverified user log in | Marks the email as verified | …profile › Name › Actions › Allow user to login | same | Actions card: registration:cashier or user:update; this button user:update | Modal "Verify user" → "Verify" | `src/frontend/containers/housekeeping/attendee/usertab.tsx` |
| ATT-08 | Reset a password | Sends a reset email, or creates an at-con code | …› Actions › Send password reset email / At-Con Password Reset | same | user:update | "Password Reset" → "Confirm". "At-Con Password Reset" (marked deprecated) → button shows "Reset code: XXXX" | same |
| ATT-09 | Reset 2FA | Removes the user's second factor | …› Actions › Reset 2FA | same | Actions card only | Modal "Remove Second Factor" → "Remove" | `src/frontend/containers/housekeeping/attendee/resetSecondFactorButton.tsx` |
| ATT-10 | Export one user's data | Downloads the user's full data as JSON | …› User Profile › Download (icon) | same | user:update + system:export | Modal "Export for User ID n" ("This export will contain PII, and be logged. Handle with care."), "Do not include audit log entries." → "Download" | `src/frontend/containers/housekeeping/attendee/usertab.tsx` |
| ATT-11 | Request or cancel account deletion | Schedules deletion in 24 h, or cancels it | …› User Profile › Delete (icon) | same | user:update + staff:admin:update + pii:admin:read + pii:admin:delete | "Request to delete account?" → "Delete". Banner "This account is marked for deletion and will be deleted on …" → "Cancel Request" → "Confirm Cancellation" | same |
| ATT-12 | Complete an account review | Clears "Pending Review" on a possible duplicate of a banned user | …› Information › "Possible duplicate account with a ban" › ✓ | same | user:note:delete | "Complete account review?" → "Complete review" | same |
| ATT-13 | Create a dealer application for a user | Starts a dealer application on the user's behalf | …› Information › Dealer › Add (+) | same | row vendor:read; Add/Edit vendor:update | Modal "Create Dealer Application" → "Create" (opens `/housekeeping/dealers/list/:id`). Volunteer row Edit → Volunteer tab; Hotel row Edit → HTL-07 | same |
| ATT-14 | User notes on a profile | Notes, cashier notes, restrictions, bans | …profile › Notes | `…/user/:id/notes` | tab user:note:read or user:note:read:hr or system:login; add user:note:create; edit user:note:edit; delete user:note:delete | Cards "Notes", "Add Note": "Note Category", "Apply only to this convention.", "Text" → "Add New Note". A ban adds "Ban Category" (Registration / Dealer / Volunteer / Other), First Name, Last Name. "Edit User Note". "Delete note?" | `src/frontend/containers/housekeeping/attendee/notestab.tsx`, `src/frontend/modules/notes/{addNoteForm.tsx, noteItem.tsx}` |
| ATT-15 | User orders | Order cards; can open a blank order | …profile › Orders | `…/user/:id/orders` | order:view | "Create New Order" (if no unpaid order). Empty: "There are no orders for this user." Card "Show details" → STO-30; "View Refund History" | `src/frontend/containers/housekeeping/attendee/orderstab.tsx`, `src/frontend/components/OrderItemElement.tsx` |
| ATT-16 | Assign roles to a user | Toggles each role per convention or globally | …profile › Roles | `…/user/:id/roles` | user:roles:update or role manager | One card per role with toggles "Convention" and "Global" (untranslated). Toasts "Role added" / "Role removed" | `src/frontend/containers/housekeeping/attendee/rolestab.tsx` |
| ATT-17 | Per-user permission overrides | Allow, deny or default each permission for one user | …profile › Permissions | `…/user/:id/permissions` | view system:permission:read; edit system:permission:update | "Search...", "Default" / "Allow" / "Deny"; "Granted"/"Denied" "via" role badges | `src/frontend/containers/housekeeping/attendee/permissionstab.tsx`, `src/frontend/containers/housekeeping/roles/PermissionList.tsx` |
| ATT-18 | User's volunteer application | Volunteer form for this user | …profile › Volunteer | `…/user/:id/volunteer` | volunteer:read | Same form as the Volunteers module (§5) | `src/frontend/containers/housekeeping/attendee/volunteertab.tsx` |
| ATT-19 | User's dealer application | Dealer form, or the ban notice | …profile › Dealer | `…/user/:id/dealer` | vendor:read | Same form as the Dealers module (§6) | `src/frontend/containers/housekeeping/attendee/dealertab.tsx` |
| ATT-20 | Emergency contacts | Shows contacts after a logged PII confirmation | …profile › Emergency Contacts | `…/user/:id/contacts` | admin:read:emergencycontacts; registered users only | "PII Access Warning" ("This access will be logged…") → "Continue" → "Emergency Contact Info" | `src/frontend/containers/housekeeping/attendee/useremergencytab.tsx`, `src/frontend/components/PIIAccessWarning.tsx` |
| ATT-21 | User audit history | Audit log for this user | …profile › Audit | `…/user/:id/auditlogs` | audit:read | SYS-10 component | `src/frontend/containers/housekeeping/attendee/auditlogs.tsx` |
| ATT-22 | Search notes across users; create a note | Org-wide notes list | Housekeeping › Attendees › User Notes | `/housekeeping/attendees/notes` | SB+RT system:login; create user:note:create | "Search notes...", category select "(All)", "Hide Notes for Other Conventions". "Create Note" → "Create New User Note" (fields as ATT-14 + User; User is optional for a ban) → "Create" | `src/frontend/containers/housekeeping/attendee/usernotes/UserNotesComponent.tsx`, `src/frontend/modules/notes/*` |
| ATT-23 | Charge a user a fee | Creates an unpaid fee | Housekeeping › Attendees › Fee Management (right card) | `/housekeeping/attendees/fees` | SB fee:read; RT system:login; API fee:create | Header "Fee Management". "User", "Amount", "Reason for Fee" → "Create Fee"; toast "New fee has been created" | `src/frontend/containers/housekeeping/attendee/{fees.tsx, createFee.tsx}` |
| ATT-24 | Review or delete fees | Fee table; unpaid fees can be deleted | …Fee Management › (row) | same | list fee:read; delete fee:delete | Columns ID ("Fee #n"), User, Amount, Status (Paid / Unpaid / Deleted / Archived), Reason, Created at. Row → "Delete Fee" | `src/frontend/containers/housekeeping/attendee/fees.tsx` |
| ATT-25 | Refund request queue | All refund requests, with filters | Housekeeping › Attendees › Refund Requests | `/housekeeping/attendees/refund` | SB+RT+API refund:create | Columns Refund #n, Order ID, User ID, Reason for Request, Status (Pending / Approved / Denied), Requested At. Empty: "There are currently no pending refund requests." Row → "Refund #n" (Products, "Request Info", "Related Payments"), "Profile", "Approve", "Reject" (hidden unless Pending, and for chargebacks) | `src/frontend/containers/housekeeping/attendee/{refund.tsx, refundInfo.tsx}` |
| ATT-26 | Approve a refund | Refunds selected payments and items | …Refund Requests › (row) › Approve | same | refund:create | "Refund #n — Approve": per-payment "Amount to Refund", "Products to be Refunded", "Return item to available stock?", "Revoke Digital Grants?", "Reason for Approval", "Message to Customer" → "Approve Refund". Same modal as STO-36 | `src/frontend/modules/order/refund/{ApproveModal.tsx, RefundPaymentTable.tsx, RefundOrderItems.tsx}` |
| ATT-27 | Reject a refund | Denies a request | …Refund Requests › (row) › Reject | same | refund:create | "Refund #n — Reject": "Reason for Rejection" (audit only), "Message to Customer" → "Reject Refund" | `src/frontend/modules/order/refund/RejectModal.tsx` |
| ATT-28 | **Send a mass email (shared flow)** | Builds recipients, previews, sends | Housekeeping › Attendees › Mass Email (also REG-12, VOL-12, DLR-11) | `/housekeeping/attendees/massemail` | SB+RT massemail; API massemail or vendor:massemail | Header "Mass Email". Card "Preview — n recipients" → "View List". "From Address" ("(Pick One)"; senders from SET-13 @ domain), recipient section (ATT-29 to ATT-32), "Subject", "Body" (rendered preview). "Prepare Email" → card "Review Email" ("The email will be sent to n individual(s)", disqualified count) → "Send Email" → "Email Sent" → "Reset Form". **No scheduling, test send or history** | `src/frontend/containers/housekeeping/massemail/{index.tsx, form.tsx}`, `src/backend/app/server/routes/api/emails/*` |
| ATT-29 | Mass email recipients: Attendees | Audience by target | …Attendees › Mass Email › Email Target | same | Attendees target registration:update + product:manage; Gatekeeping raffle:manage; Roles system:permission:read | "Email Target" ("Select an Email Target"): "Custom (Individual Users)" ("Individual User(s)"), "Attendees", "Gatekeeping" (silo + "Ticket status" Redeemed / Rescinded / Waiting / Winner), "Roles" ("Role"), and server groups under raw optgroups `newsletter` (Newsletter Subscribers, Unpaid Newsletter Subscribers, All Unpaid Users), `paidAttendees` (Fursuiters (all), Requesting ASL Interpreters, with a Badge Printed), `volunteers` (Leads Only) | `src/frontend/containers/housekeeping/massemail/attendee.tsx`, `src/backend/app/static/massMails.ts` |
| ATT-30 | Mass email recipients: Registration | Product and paid-status filters | Housekeeping › Registration › Mass Email | `/housekeeping/registration/massemail` | massemail | "Products"; "Registration Status": Paid, Unpaid, Only With Children | `src/frontend/containers/housekeeping/massemail/registration.tsx` |
| ATT-31 | Mass email recipients: Volunteers | Department and assignment filters | Housekeeping › Volunteers › Mass Email | `/housekeeping/volunteers/massemail` | SB massemail; RT none | See VOL-12 | `src/frontend/containers/housekeeping/massemail/volunteer.tsx` |
| ATT-32 | Mass email recipients: Dealers | Area, table and status filters | Housekeeping › Dealers › Mass Email | `/housekeeping/dealers/massemail` | vendor:massemail | See DLR-11 | `src/frontend/containers/housekeeping/massemail/dealer.tsx` |
| ATT-33 | Event statistics: Sales | Sales, payments, discounts and refunds | Housekeeping › Attendees › Event Statistics › Sales | `/housekeeping/attendees/statistics` | SB+RT+API registration:stats | Header "Event Statistics"; tabs Sales / Payouts / Options. "Month" select. Cards "Order Item Products" ("Product Category"), "Payments" ("ConCat Fees:", "External Fees:"), "Discounts", "Refunds" | `src/frontend/modules/stats/{statistics.tsx, SalesStatistics.tsx, PaymentPieChart.tsx, Graph.tsx}` |
| ATT-34 | Event statistics: Payouts | Stripe payouts and their breakdown | …Event Statistics › Payouts › (payout) | `…/statistics/payouts[/:id]` | registration:stats | Only with automatic Stripe payouts. Columns Date Created, Description, Reference, Status, Amount. Detail: Category / Product, Order Total, ConCat fees, Payment processor fees, Fee / Surcharge, Payout | `src/frontend/modules/stats/PayoutsStatistics.tsx` |
| ATT-35 | Event statistics: Options | Answers per option, with download | …Event Statistics › Options | `…/statistics/options` | registration:stats | "Option", "Product", "Order Status" (All / Paid / Unpaid / With Grant (not refunded)); "Download" CSV / JSON; cards "By Paid Status", "By Grant Status", "By product", "Totals" | `src/frontend/modules/stats/OptionsStats.tsx` |

### Cashier UI: Registration Station (CSH)

The Cashier UI is full-screen with no sidebar. Its header shows:
- "Registration Station"
- "Printer Status" (or "OS Controlled")
- "NFC Card Status: …"
- **Configure Devices**
- the gear (Settings) button
- the user name and a clock

Device and station settings are saved in the browser's localStorage, so each station keeps its own.

| ID | Feature | What it does (one line) | UI path | Route | Permission | Key sub-features (exact labels) | Source files |
|---|---|---|---|---|---|---|---|
| CSH-01 | Open the station; find an attendee | Search, or scan an ID or NFC badge | Housekeeping › Attendees › Cashier UI; also profile › Actions › Open Cashier Interface | `/housekeeping/cashier` | SB+RT registration:cashier | Search box with "Enable Auto Navigate". "Exit Registration Station" (→ Registration Dashboard). "Search Help". Scanning a driver's licence (`@ANSI`) or a ConCat QR code (`@CONCAT`) runs a search | `src/frontend/containers/cashier/{cashiercontainer.tsx, home.tsx, header.tsx, scanner.tsx}` |
| CSH-02 | Set up Zebra badge printers | Pairs label printers; sets primary and secondary | Cashier UI › Configure Devices › Available Badge Printers | (modal) | registration:cashier | Modal "Configure Devices". "Add Manually" › "Add zebra printer" / "Add Test printer". Gear: "Remove", "Test Print". "Set as Primary" / "Set as Secondary". Check-in mode alert: "Badge printing is disabled. To re-enable, head to Housekeeping -> Settings -> Registration." | `src/frontend/containers/cashier/{printerModal.tsx, zebra/configure.tsx, zebra/ZebraPrinter.tsx}` |
| CSH-03 | Add a barcode scanner | Web Serial scanner (USB keyboard scanners need no setup) | Cashier UI › Configure Devices › Scanners | (modal) | same | "Add Manually" › "Scanner with Web Serial"; "(Connected)"/"(Disconnected)"; "Remove" | `src/frontend/containers/cashier/{printerModal.tsx, scanner.tsx}` |
| CSH-04 | Add a receipt printer or cash drawer | WebUSB receipt printer | Cashier UI › Configure Devices › Receipt Printers | (modal) | same | "Add Manually", "Test Print", "Kick Cash Drawer". Without WebUSB: "It seems like your browser does not support WebUSB…" | `src/frontend/containers/cashier/printers/{ReceiptPrinter.tsx, PrinterContext.tsx}` |
| CSH-05 | Set up an NFC writer | NFC tag interface for NFC badges | Cashier UI › Configure Devices › NFC Tag Interfaces | (modal) | only with `enableNfcBadges`; API system:nfc_token:program / :password | "Add Manually" › "NFC Tag Interface with Web Serial"; "Local HTTP Proxy" (localhost:7070) is added automatically; "Set as Primary", "Remove" | `src/frontend/containers/cashier/nfc/{configure.tsx, NFC.tsx, NFCProxy.tsx}` |
| CSH-06 | Configure the registration station | Per-browser station policy | Cashier UI › Settings (gear) | (modal) | registration:cashier | Modal "Configure Registration Station": "Enable payment acceptance" (default off), [require-ID toggle labelled "No ID barcode has been scanned."], "Enable staff check-in", "Restrict Product Check-in", "Print separate staff badge", "Print separate dealer badge", "Show reprint modal", "Override badge design" ("(Default)"), "Badge type printer preferences" (Staff / Attendee / Dealer / Minor → Primary Printer or Secondary Printer) | `src/frontend/containers/cashier/{settingsModal.tsx, cashiercontext.tsx}` |
| CSH-07 | Check an attendee in (status screen) | Shows blockers, warnings and notes | Cashier UI › (attendee) | `/housekeeping/cashier/:id` | registration:cashier | Status "Check-In OK" / "Check-In Warning" / "Check-In Blocked" / "Check-In Complete". "Error(s)", "Warning(s)", "Info", "User Notes" (cashier notes), "Role Messages" (role "Cashier message"). Details: ID, Preferred, First Name, Last Name, Date of birth, Registration Level, Badge Name. "Badge Print Preview". "Back to user search" (Esc) | `src/frontend/containers/cashier/{profile.tsx, attendeeStatus.tsx, messages.tsx}` |
| CSH-08 | Take payment at the register | Records a manual cash or card payment | Cashier UI › (attendee) › Payment of $X Required | same | API registration:cashier; station "Enable payment acceptance" | "Cash Payment" / "Card Payment" (recorded only; no processor charge). Otherwise "This registration station is not configured to accept payments." | `src/frontend/containers/cashier/attendeeStatus.tsx`, `src/backend/app/server/routes/api/pay/gateways.ts` |
| CSH-09 | Print a badge | Prints to Zebra, or the browser print dialog | Cashier UI › (attendee) › Print Badge | same | registration:cashier | "Print Badge" (Space). "Print Next Badge (n badge remaining)". "Which badges to print?". "Badge has been queued to print. No further action is required!". Without a default design: "Cannot check-in as no badge design is configured…" | `src/frontend/containers/cashier/{attendeeStatus.tsx, zebra/ZebraPrintButton.tsx, osprint/*}` |
| CSH-10 | Reprint a badge with a reason | Reprints, with an audit reason | Cashier UI › (attendee) › Re-print Badge | same | registration:cashier | Modal "Re-print Badge": "Reprint Reason" (Printer malfunction, Badge was lost or damaged, Name was misspelled, Badge type was incorrect, Other, Unspecified), "Override badge design?" → "Print". Required when `forceReprintReason` is on | `src/frontend/containers/cashier/ReprintBadge.tsx` |
| CSH-11 | Program, print or revoke an NFC badge | Writes the chip, then prints | Cashier UI › (attendee) | same | `enableNfcBadges`; API system:nfc_token:* | "Program & Print Badge" / "Program & Re-print Badge", "Print Only"; "Warning" (Yes / No); "Revoke NFC Badge" → "Confirm Badge Revocation" | `src/frontend/containers/cashier/nfc/{NfcPrintButton.tsx, NfcRevokeBadgeButton.tsx}` |
| CSH-12 | Check in without printing | For pre-printed badges | Cashier UI › (attendee) | same | `cashierCheckIn` | "Check-in Registration" / "Remove Check-in". "User has been marked as checked-in. No further action is required!" | `src/frontend/containers/cashier/attendeeStatus.tsx` |
| CSH-13 | Verify an attendee's ID | Compares a scanned licence with the record | Cashier UI › (attendee) › scan ID | same | registration:cashier | "Verify Attendee ID": "ID Matched!", "ID Mismatch", "ID Expired", "Expired ID Matched" → "Mark ID as Valid" | `src/frontend/containers/cashier/{IDValidationModal.tsx, scanner.tsx}` |
| CSH-14 | Attendee actions menu | Shortcuts from the station | Cashier UI › (attendee) › actions menu | same | personal details need user:update | "View user profile", "Create registration"/"Update registration" (ATT-05), "Update personal details" (ATT-04), "View print logs" ("Badge Print Logs for User": Cashier, Date, Product, Reason) | `src/frontend/containers/cashier/{profile.tsx, attendeeInformation.tsx, PrintLogs.tsx}` |
| CSH-15 | Add child badges | Legacy child registrations under a parent | Cashier UI › (attendee) › Child Badges › Add new child badge | same | `maxChildren` > 0 and registered | Modal "Add child badge": Badge Name → "Add Child" | `src/frontend/containers/cashier/profile.tsx`, `src/frontend/components/ChildRegistrations.tsx` |
| CSH-16 | Hand out undelivered products | Fulfils deliverable order items | Cashier UI › (attendee) › Undelivered products | same | API order:fulfill | Item checklist, "Print Pick List" (receipt printer), "Mark as Delivered" | `src/frontend/modules/order/fulfillment/FulfillmentList.tsx` |

### Devices (DEV)

The Devices page is for QuikTicket, ConCat's mobile ticket-scanning app.

| ID | Feature | What it does (one line) | UI path | Route | Permission | Key sub-features (exact labels) | Source files |
|---|---|---|---|---|---|---|---|
| DEV-01 | List my authorised devices | Lists the current user's devices only | Housekeeping › Attendees › Devices | `/housekeeping/devices` | SB+RT system:login; hidden when `disableQuikTicket` | Device cards: "Device ID: …", "Running QuikTicket", make, model, OS. No remove action. Disabled text "Device authorization has been disabled for this convention…" | `src/frontend/containers/housekeeping/devices/index.tsx` |
| DEV-02 | Authorise a new device | Shows a QR code to scan with the device | …Devices › Authorize New Device › Request Code | same | any of admin:ticket:scan, admin:ticket:read, system:devices:manage (else "You do not have permission to authorize a new device.") | "Authorization Code" + QR + expiry; "Request New Code". Authorisation lasts 6 hours | `src/frontend/containers/housekeeping/devices/authorize.tsx`, `src/backend/app/server/routes/api/devices.ts` |
| DEV-03 | Authorise a device for another user | Admin issues a code for someone else | …Devices › Authorize New Device › Admin Authorize for User | same | system:devices:manage (no default role has it) | User picker (blank = yourself) | same |

### Hotel Management (HTL)

Hotel Management exists only when `hotelsEnabled` is on, and customers cannot turn that on themselves (see (a1)).

| ID | Feature | What it does (one line) | UI path | Route | Permission | Key sub-features (exact labels) | Source files |
|---|---|---|---|---|---|---|---|
| HTL-01 | Hotel dashboard | Counts | Housekeeping › Attendees › *Module Management* › Hotel Management › Home | `/housekeeping/hotel` | SB+RT hotel:view or hotel:manage | Tabs Home / Hotels / Release Groups / Reservations. Cards Total hotels, Total rooms, Total reservations, Total blocks, Total block entries | `src/frontend/containers/housekeeping/hotel/{hotel.tsx, dashboard.tsx}` |
| HTL-02 | Hotels and room inventory | Read-only list (configured in SET-11) | …Hotel Management › Hotels | `/housekeeping/hotel/hotels` | hotel:view | "List of Hotels"; Visible; Phone; "Rooms" (Count, Rate, Available On, Group ID) | `src/frontend/containers/housekeeping/hotel/hotels.tsx` |
| HTL-03 | Create a release group | Room-block lottery or first-come-first-served release | …Hotel Management › Release Groups › Create Release Group | `/housekeeping/hotel/groups/new` | API hotel:manage (no UI gate); needs an integration | Release Group Name, Display Name, Description, Status (Draft / Ready), Type (Random Draw / First Come First Serve), Number of Winners, Entry Start At, Entry End At, Release Start At, Release End At, Validity Period, Require Registration (Hidden* / Required / Required Paid), Force Entry, Require Not Won, Show Room Availability, Visibility (Hidden / Always Visible / Eligible Only), Hotel Integration, Restrict to Roles, Restrict to Products, Meeting Max Group Code, Passkey Attendee / Access Code → "Submit" | `src/frontend/containers/housekeeping/hotel/releasegroups/ReleaseGroupList.tsx` |
| HTL-04 | Edit a release group | Same form | …Release Groups › Edit | `/housekeeping/hotel/groups/:id/edit` | API hotel:manage | "Update Release Group" | same |
| HTL-05 | Review release-group entries | Group info, statistics and entries | …Release Groups › View Details | `/housekeeping/hotel/groups/:id/view` | view hotel:view; delete hotel:manage | "Group Information", "Release Entry Statistics", "Release Entries" (View Reservation / No Reservation; "Delete Entry") | `src/frontend/containers/housekeeping/hotel/releasegroups/ReleaseGroupView.tsx` |
| HTL-06 | List reservations | All reservations | …Hotel Management › Reservations | `/housekeeping/hotel/reservations` | hotel:view | "n Results"; per-user link | `src/frontend/containers/housekeeping/hotel/reservations.tsx` |
| HTL-07 | Manage a user's hotel entry | Deletes a pending entry or reissues a booking link | …Reservations › (user); profile › Hotel › Edit | `/housekeeping/hotel/user/:id` | hotel:view; actions hotel:manage | "Summary for …"; status badges (Pending, New, Confirmed, Cancelled, Expired, No-show, Waitlisted); "Delete", "Reissue Link" | `src/frontend/containers/housekeeping/hotel/user.tsx` |

## 2. Registration module (REG)

Pick **Registration** in the switcher. The page header for Settings is "Registration Settings".

| ID | Feature | What it does (one line) | UI path | Route | Permission | Key sub-features / tabs / form sections (exact labels) | Source files |
|---|---|---|---|---|---|---|---|
| REG-01 | Registration dashboard | Per-tier registration table and stacked bar chart | Housekeeping › Registration › Dashboard | `/housekeeping/registration/dashboard` | SB system:login; RT none; API registration:stats (otherwise card "No Stats Available" / "You don't have access to view any statistics information.") | Card "Registration Breakdown by Tier": columns Product, Total Registrations, Paid, Printed, Picked Up, "(Children)" suffix, Total row. Card "Count of Registrations per Tier": stacked bars Paid / Unpaid / Refunds, titled "Registrations" | `src/frontend/containers/housekeeping/registration/dashboard.tsx`, `src/backend/app/server/routes/api/stats.ts` |
| REG-02 | Registration statistics | Time-series charts, payment and refund breakdowns, cashier print volume | Housekeeping › Registration › Registration Statistics › General / Cashier | `/housekeeping/registration/statistics`, `…/statistics/cashier` | SB+RT registration:stats; tab "Cashier" also needs registration:cashier | Tab "General": "Registrations per day (all time)", "Registrations per hour (last week)", "Registrations per 15min (last 48h)", "Registrations Over Year" (Current year vs Previous year), "Payments by Payment Gateway", "Refunds by Payment Gateway". Tab "Cashier": "Print Volume Over Time" with a "Day" selector ("ALL" or a day) | `src/frontend/containers/housekeeping/registration/statistics.tsx`, `src/frontend/modules/stats/{CashierStats.tsx, PaymentPieChart.tsx}` |
| REG-03 | Open/close registration and general options | Opens registration and sets transfers, NFC, QR emails, refund block and cart timeout | Housekeeping › Registration › Settings › General › Save | `/housekeeping/registration/settings` | SB system:settings:update; RT none (logged in); API system:settings:update | "Enable Registration Transfers", "Enable NFC Badges", "Open Registration", "Enable Registration QR Codes", "Disable refunds" (checkbox → message text), "Limit attendance count" (Deprecated, read-only, shown only if set), "Cart Timeout" (Experimental, minutes). Toast "Registration settings saved" | `src/frontend/containers/housekeeping/registration/settings.tsx` |
| REG-04 | Sub-accounts | Lets one account register extra attendees, including PII-free children | Housekeeping › Registration › Settings › Sub-accounts › Save | same | same as REG-03 | "Max Sub-Accounts Registration", "Allow PII-free child registration", "Only allow child sub-accounts" (disabled until PII-free is on). Toast "Sub-account settings saved" | `src/frontend/containers/housekeeping/registration/SubAccountSection.tsx` |
| REG-05 | Age thresholds | Sets the minimum account age and the parental-consent age | Housekeeping › Registration › Settings › Minimum Age and Children › Save | same | same as REG-03 | "Max Child Registration" (Deprecated, shown only when non-zero; otherwise an info alert: Looking for "Max Child Registration"?), "Child Age Threshold", "Minor Age Threshold" | `src/frontend/containers/housekeeping/registration/settings.tsx` |
| REG-06 | Attendee notice | Shows a titled banner at the top of every attendee dashboard | Housekeeping › Registration › Settings › Attendee Notice › Save | same | page system:settings:update; API (announcements) registration:update | "Show attendee notice" (Experimental) → "Title", "Message", "Date" (optional), "Importance": Normal / High / Critical. Turning it off and saving deletes the notice. Toasts "Attendee notice saved", "Title is required", "Message is required" | `src/frontend/containers/housekeeping/registration/settings.tsx`, `src/backend/app/server/routes/api/announcements.ts` |
| REG-07 | Kiosk and QuikTicket | Sets kiosk payments and timeout, and can disable QuikTicket (which hides Devices) | Housekeeping › Registration › Settings › Kiosk › Save | same | same as REG-03 | "Disable QuikTicket", "Allow Online Payments in Kiosk Mode", "Kiosk mode timeout" (30 s back to homepage). Toast "Kiosk settings saved" | `src/frontend/containers/housekeeping/registration/settings.tsx` |
| REG-08 | Cashier UI behaviour | Check-in-only mode for pre-printed badges; can require a reprint reason | Housekeeping › Registration › Settings › Cashier UI › Save | same | same as REG-03 | "Disable badge prints and check-in users instead" (`cashierCheckIn`), "Force Badge Re-Print reason" (`forceReprintReason`). Toast "Cashier UI settings saved" | `src/frontend/containers/housekeeping/registration/settings.tsx` |
| REG-09 | Banned words | Blocks words in badge names and species | Housekeeping › Registration › Settings › Banned Words › Save | same | same as REG-03 | One word per line. Toast "Banned words saved" | `src/frontend/containers/housekeeping/registration/settings.tsx` |
| REG-10 | Open the registration form editor | Entry point to the Express Editor (EDT-07) | Housekeeping › Registration › Settings › Form Editor › Go to Registration Form Editor | → `/housekeeping/editor/registration` | card only with registration:form:manage | "Edit the registration form, to add custom text, add/remove elements, or add other options." | `src/frontend/containers/housekeeping/registration/settings.tsx` |
| REG-11 | Export registration data | Downloads all registrations as CSV or JSON | Housekeeping › Registration › Settings › Export Data › CSV / JSON | `GET /api/export/download/registration?format=csv\|json` | card always shown; API system:export | "Export registration data, including user names, address, registration payment status, badge name, and other details." | `src/frontend/containers/housekeeping/registration/settings.tsx`, `src/frontend/containers/housekeeping/export.tsx`, `src/backend/app/server/routes/api/export.ts` |
| REG-12 | Registration mass email | Shared Mass Email (see ATT mass-email row) with registration filters | Housekeeping › Registration › Mass Email | `/housekeeping/registration/massemail` | SB+RT massemail | Extra filters: "Products" (checkbox per product); "Registration Status": Paid / Unpaid / Only With Children | `src/frontend/containers/housekeeping/massemail/{index.tsx, registration.tsx}` |
| REG-13 | Registration dynamic export | Shared Dynamic Export over registration records (SYS-02) | Housekeeping › Registration › Dynamic Export | `/housekeeping/registration/dynamicexport` | SB+RT system:export:dynamic:full | See SYS-02 and SYS-04 | `src/frontend/containers/housekeeping/dynamic-export/index.tsx` |
| REG-14 | Badge products list and create a badge tier | Lists the single registration category and creates tiers in it | Housekeeping › Registration › Badge Products › Create New Product → "New Product" form → Create Product | `/housekeeping/registration/products` | SB product:read; RT none; API product:read or product:category:manage; create needs product:manage | Header "Badge Products". No category list and no "Back to Categories". Buttons "Create New Product", "Category Surcharges", "Show Deleted Products"/"Hide Deleted Products". Searchable table. The form is the same as STO-07, plus the registration-only fields in REG-15. Toast "New product has been created" | `src/frontend/containers/housekeeping/registration/productwrapper.tsx`, `src/frontend/containers/housekeeping/products/category/{categoryInfo.tsx, categoryCreateProduct.tsx}`, `src/backend/app/server/routes/api/products/category/registration/get.ts` |
| REG-15 | Badge product page and registration-only fields | Product viewer for a tier; adds Expires On, badge label design and Upgrade Paths | Housekeeping › Registration › Badge Products › (product) › Product / Orders / Audit Logs | `/housekeeping/registration/products/:id` | RT none; edits need product:manage (API); Audit Logs tab needs audit:read | Form › "Stock Control" › "Expires On". "Cashier" › "Product Label Print Design" ("Override the default badge design layout."). Card "Upgrade Paths" (STO-14). No "Maximum purchases per user" and no "Deliverable". All other cards are as in STO-08 to STO-18 | `src/frontend/containers/housekeeping/products/productForm.tsx`, `src/frontend/containers/housekeeping/products/viewer/{viewer.tsx, upgradeinfo.tsx}` |
| REG-16 | Options | The same option list as Store › Options (both use `source="product"`); see STO-19 to STO-21 | Housekeeping › Registration › Options | `/housekeeping/registration/options[/new\|/:id]` | SB product:manage; RT product:read; API product:manage | Header "Options" | `src/frontend/containers/housekeeping/options/options.tsx` |
| REG-17 | Upload badge art | Uploads background images attendees can choose for their badge | Housekeeping › Registration › Badge Art › "Choose or drop images to upload." | `/housekeeping/registration/badgeart` | SB+RT asset:create + system:badgeart:update (both) | Header "Badge Art Settings". Images are converted to PNG, 5 MB max each, and upload on selection. Toast "Upload Complete!" | `src/frontend/containers/housekeeping/badgeArt.tsx`, `src/frontend/components/ImageUpload/ImageUpload.tsx`, `src/backend/app/server/routes/api/badgeArt.ts` |
| REG-18 | Limit or delete badge art | Caps the use of an art, or removes it | Housekeeping › Registration › Badge Art › (card) › Configure limit / delete icon | same | same as REG-17 | Card shows "Limit: n / ∞". Modal "Set a limit for {id}": "Enable limit", number ("The total number of badges allowed for this art."), Update/Cancel; toast "Badge art has been updated". Modal "Delete {id}" → Delete; toast "Badge art has been deleted" | `src/frontend/containers/housekeeping/badgeArt.tsx` |
| REG-19 | Badge design list and default design | Manages badge label designs; sets the convention default (`badgeDesignId`) | Housekeeping › Registration › Badge Designer | `/housekeeping/registration/badgedesigner` | SB system:badgedesign:update; RT system:badgedesign:read; API list/get read, create/update/delete/default update | Columns Name, Created, Last Updated. Header "+" (title "New"). Row icons: "See history" (audit:read → System › Audit Logs), "Set as default" (star), "Copy" (modal "Duplicate: {name}": "Choose a name for the clone of: '{name}'", "Name:", Duplicate), "Delete" | `src/frontend/containers/housekeeping/registration/badgedesignercontainer.tsx`, `src/frontend/containers/housekeeping/settings/badgedesigner/{designerrouter.tsx, list.tsx}`, `src/backend/app/server/routes/api/badge/designer.ts` |
| REG-20 | Badge designer editor | Visual label-layout editor with live preview, test print and JSON import/export | Housekeeping › Registration › Badge Designer › + (New) or design name | `/housekeeping/registration/badgedesigner/edit[/:id]` | same as REG-19 | Top bar: "Save", "Export", "Import", "Print", "Load users" (modal "Select Preview Users", up to 10, Submit). "Render tree": "Add Text", "Add Node", "Add Image", "Delete Node?", drag to reorder. Property groups: "Root" (Display Name, Page break, Y spacing, X Start, Y Start), "Pre-Printed Canvas" (Preview, Preview Art Id, Width, Height, From Bottom), "Details" (X, Y, Width, Height in inches), "Text" (Placeholder, Variable Type, Variable, Option Id, Conditionals, Transform, Font Weight, Text Color, Prefix padding), "Font" (Font Size, Horizontal Binding, Vertical Binding, Text Align, Font: Krona One / Armata / datamatrix / custom → "Custom Font"), "Text Autoscale" (Enable Autoscale, Grow Text, Shrink Text, Grow Min, Grow Max), "Image" (Placeholder, Source: url/badgeDesign/product/profilePic, Size, Repeat, Position, Rounded Border, Ignore Empty), "Node" (Rotate, Conditional, Debug Preview, Invert; conditions Volunteer/Dealer/Dealer Assistants/Underage/Minor/Product ID/Roles/Option). Variable types: registration, user, special, option, placeholder | `src/frontend/containers/housekeeping/settings/badgedesigner/{designer.tsx, SideBar.tsx, renderTree.tsx, DesignerNodeDetails.tsx, model.ts, font.tsx}`, `src/frontend/modules/badgerenderer/{BadgeRender.tsx, renderBadgesForPrint.tsx}`, `src/shared/user/badgeDesign.ts` |
| REG-21 | Registration flags | Defines attendee-settable flags (newsletter, ASL, …) | Housekeeping › Registration › Registration Flags › + (Create) / Edit / Delete | `/housekeeping/registration/flags` | SB+RT+API registration:update | Card "Registration Flags". Modal "Edit Entry" (Add/Save, Cancel). Fields "Short Name" (locked after create), "Description", "Enabled description", "Sort order", "Make visible to attendees". Delete modal "Delete entry"; delete is hidden for internal `nukeme`. Seeded: fursuits, mailswag, asl, newsletter, picrelease, nukeme | `src/frontend/containers/housekeeping/registration/registrationflagscontainer.tsx`, `src/frontend/containers/housekeeping/settings/CrudTable.tsx`, `src/backend/app/server/routes/api/flag.ts` |
| REG-22 | Users with a flag | Lists the attendees who set a flag | Housekeeping › Registration › Registration Flags › (row) › "List users" | same | registration:update | Modal "Users with the flag", with profile links | `src/frontend/containers/housekeeping/registration/registrationflagscontainer.tsx`, `src/frontend/components/UserListModal.tsx` |
| REG-23 | Request "nukeme" PII clear | Schedules a PII wipe of users with the `nukeme` flag, to run in 24 h | Housekeeping › Registration › Registration Flags › (nukeme row) › group_off icon → Request to Clear PII | `POST /api/conventions/{id}/nuke` | UI registration:update; API system:export; cancelling (SET-03) needs pii:admin:delete and others | Modal 'Clear "nukeme" PII?': "Delete Dealer Data", "Delete Volunteer Data", "Exclude specific users?" (user selector). Toast "Request successfully created." | `src/frontend/containers/housekeeping/registration/registrationflagscontainer.tsx`, `src/backend/app/server/routes/api/conventions/{id}/nuke.ts` |

## 3. Express Editor: form builder (EDT)

There is no sidebar item for the Express Editor. It is reached only from the three settings cards (EDT-07, EDT-08, EDT-09).

| ID | Feature | What it does (one line) | UI path | Route | Permission | Key sub-features / tabs / form sections (exact labels) | Source files |
|---|---|---|---|---|---|---|---|
| EDT-01 | Editor layout | Full-screen drag-and-drop builder shared by all three forms | (entry via EDT-07/08/09) | `/housekeeping/editor/{registration\|dealers\|volunteers}` | RT system:login; the real gate is per form (below) | Header "Express Mode Editor" with back arrow. Panes "Toolbox", "Form Editor", "Preview" (dealer and volunteer only). Empty hint "Drag components from the toolbox to start designing your Express Mode page." | `src/frontend/containers/housekeeping/expressEditor/{expresseditorcontainer.tsx, EditorDragContext.tsx, toolbox.tsx, PageRenderer.tsx}` |
| EDT-02 | Manage sections | Add, rename, resize, reorder and delete sections | Form Editor › Add New Section; section header › pencil (Edit) → Save; "Half Width"/"Full Width"; Delete | same | same | New section is named "New section". Reorder by drag. Section delete has no confirmation | `src/frontend/containers/housekeeping/expressEditor/PageRenderer.tsx` |
| EDT-03 | Add, move and remove elements | Builds the form from toolbox elements | Toolbox › drag into a section; drag handle; Delete | same | same | Moves work within and across sections. Delete → modal "Delete Node?" ("Are you sure you want to delete this node?") → Delete. Inline pencil sets "Display Name (optional)" | `src/frontend/containers/housekeeping/expressEditor/{EditorDragContext.tsx, PageRenderer.tsx}` |
| EDT-04 | Edit element properties | Per-element settings modal | (element) › Edit → "Update node: {name}" › Save / Cancel | same | same | Only for elements with a panel (palette below). Errors show as "Error(s): …"; toast "There are errors in your form. Please fix them before saving again." | `src/frontend/containers/housekeeping/expressEditor/{EditModal.tsx, elements/*}` |
| EDT-05 | Preview | Renders the form as attendees see it | Registration: View Preview / Back to Editor. Dealer and volunteer: always-on Preview pane | same | same | Registration preview uses the first registration product; with none: "Add a product to this convention before you can preview the registration form." | `src/frontend/containers/housekeeping/expressEditor/preview.tsx`, `src/frontend/modules/dynamicform/{PreviewSwitcher.tsx, registration/preview.tsx, dealer/preview.tsx, volunteer/preview.tsx}` |
| EDT-06 | Save and exit | Saves the layout; guards unsaved changes | Form Editor › Save Changes; back arrow → modal | `PATCH /api/convention/{registration\|dealer\|volunteer}/form` | per form | Toast "Saved". Modal "Unsaved Changes" ("You have unsaved changes! If you leave now, your changes will be lost.") with "Save and Exit", "Exit without Saving", "Cancel" | `src/frontend/containers/housekeeping/expressEditor/expresseditorcontainer.tsx`, `src/backend/app/server/routes/api/dynamicForm.ts` |
| EDT-07 | Registration form editor | Edits the attendee registration form | Housekeeping › Registration › Settings › Form Editor › Go to Registration Form Editor | `/housekeeping/editor/registration` (back → Registration Settings) | entry card and API registration:form:manage | Toolbox (15): Text block, Divider, Option, Subheader, Terms agreement, Link to terms page, Registration flags, Emergency contacts, Badge preview, Submit button, Randomize button, Badge art selector, Other options, Profile picture, Personal information. Seeded sections include "Badge Info", "Badge Preview", "Additional Options", "Emergency Contacts", "Other options" | `src/frontend/containers/housekeeping/expressEditor/{expresseditorcontainer.tsx, OptionContext.tsx}`, `src/backend/app/services/SeedService.registration.ts` |
| EDT-08 | Dealer application form editor | Edits the dealer application form | Housekeeping › Dealers › Dealer Settings › General › Form Editor › Go to Dealer Form Editor | `/housekeeping/editor/dealers` (back → Dealer Settings) | entry under SB vendor:update; API PATCH vendor:update | Toolbox (5): Text block, Divider, Terms and conditions, Dealer PII, Option. To save, the form must contain Dealer PII elements with subtypes `name` and `email` (toasts "At least one field must be of type 'Dealer PII' with subtype 'email'." / "…'name'.") | `src/frontend/modules/dealer/{dealerForm.tsx, dealerSettings.tsx}`, `src/frontend/modules/dealer/form/{DealerPii.tsx, SimpleLinkedTerms.tsx}` |
| EDT-09 | Volunteer application form editor | Edits the volunteer application form | Housekeeping › Volunteers › Volunteer Settings › General › Form Editor › Go to Volunteer Form Editor | `/housekeeping/editor/volunteers` (back → Volunteer Settings) | entry and API volunteer:admin | Toolbox (6): Text block, Divider, Terms and conditions, Volunteer contacts, Option, Volunteer departments | `src/frontend/containers/housekeeping/volunteers/{volunteerForm.tsx, settings/General.tsx}` |

**Element palette** (name — description — property panel):

| Element | Description | Property panel |
|---|---|---|
| Text block | "Markdown-enabled text" | markdown |
| Divider | "Horizontal bar to separate parts of the page" | none |
| Subheader | "Subheader" | none (inline display name) |
| Terms agreement | "Terms agreement" | "Input type" (policy key) and "Text to be displayed by the checkbox:" (default "I have read and agree to the policies above.") |
| Link to terms page | "Link to terms page" | markdown |
| Submit button | "Submit button" | none |
| Personal information | "User enter personal information" | "Input type" (Real Name, Date of Birth, Phone, Address, Email, Badge Name) and markdown |
| Registration flags | "Checkboxes for the registration flags an attendee can set" | none |
| Badge preview | "Let users see how their badge will look" | none |
| Emergency contacts | "Emergency contacts" | "Required?" |
| Option | "Display an option related to the form" | Registration: option select (incl. "Badge Name"), "Display full width". Dealer: "Option", "Display Name (optional)", "Required?", "Prevent changes to this option after application is submitted?", "Display full width". Volunteer: "Option", "Display Name (optional)", "Required for submission", "Visible to admins only", "Disable after approval", "Display full width" |
| Other options | "Include all other options not directly listed" | none |
| Profile picture | "Allow users to update their profile picture" | "Title", "Ignore Gravatar default image" |
| Randomize button | "Randomize the badge name and species" | none |
| Badge art selector | "Allow user to choose background picture for their badge" | none |
| Dealer PII | "Dealer PII" | "Type" (addressCity, addressCountry, addressLine1, addressLine2, addressState, addressZipcode, email, name: raw values) and "Display Name" (default "Business Name") |
| Terms and conditions | "Customizable terms and conditions component." | "Term Key", "Display Name (optional)" (default "Dealer Terms"), "Agreement Method" (Checkbox / Full Name), "Agreement line" + Reset, "Require Agreement To Submit", "Show Preview of Terms" |
| Volunteer contacts | "Volunteer contact entry" | "Contact Methods" table (Name, "Display Name (optional)"); defaults telegram, discord, bluesky |
| Volunteer departments | "Volunteer department selection" | none |

## 4. Store Management module (STO)

Pick **Store Management** in the switcher. Its folder prefix is `src/frontend/containers/housekeeping/`. `ProductViewer` and `ProductForm` are shared with Registration › Badge Products and Dealers › Products; the differences are listed after the first table.

### Products and categories

| ID | Feature | What it does (one line) | UI path | Route | Permission | Key sub-features / tabs / form sections (exact labels) | Source files |
|---|---|---|---|---|---|---|---|
| STO-01 | Browse store categories | Lists store categories as cards | Housekeeping › Store Management › Store Products | `/housekeeping/store/products` | SB product:read; RT system:login | Header "Product Categories". Button "Create New Category". Card shows "{name} (ID: n)", badges "Hidden" and "General Products", "View Products", and a "…" menu with "Delete Category", "View History" (audit:read), "Hide Category"/"Show Category". Alert "Looking for the Registration category?" / "It moved! Registration has its own module now." → "Go to Badge Products" | `src/frontend/containers/housekeeping/products/{categories.tsx, categoryItem.tsx, CategoryBadges.tsx}` |
| STO-02 | Create category | Creates a store category, then opens it | … › Store Products › Create New Category | same → `/housekeeping/store/products/category/:id` | API product:category:manage | Card "New Category": "Name" (placeholder "Category Name"), "Hide this category". Button "Create Category"; toast "New category has been created." Button "Back to Categories" | `src/frontend/containers/housekeeping/products/createCategory.tsx` |
| STO-03 | Hide or show a category | Toggles attendee visibility | … › Store Products › (card) … › Hide Category / Show Category | — | API product:category:manage | Store categories only | `src/frontend/containers/housekeeping/products/categoryItem.tsx` |
| STO-04 | Delete a category | Permanently deletes the category; its products are deleted or moved | … › Store Products › (card) … › Delete Category | — | API product:category:manage | Panel "Delete Category: {name}": "Delete all existing items" **OR** "New Category" selector, then "Delete Category". Not offered for the registration category | `src/frontend/containers/housekeeping/products/categoryItem.tsx` |
| STO-05 | Category surcharges | Applies a surcharge to every product in the category | … › View Products › Category Surcharges | (modal) | product:category:manage + product:manage | Modal "Category Surcharges" (empty: "There are no category level surcharges."). "Assign Category Level Surcharge" → modal "Assign Category Level Surcharges": "Surcharge Search" → "Assign Surcharges". Toast "Removed Category Level surcharge: {name}" | `src/frontend/containers/housekeeping/products/category/{categorySurcharges.tsx, assignCategorySurchargeModal.tsx, categorySurchargeItem.tsx}` |
| STO-06 | Product list in a category | Table of products with status badges | … › Store Products › View Products | `/housekeeping/store/products/category/:id` | RT system:login; API product:read or registration:update or vendor:update | Header "Category: {name}". Buttons "Create New Product", "Category Surcharges", "Back to Categories", "Show Deleted Products"/"Hide Deleted Products". Badges: "Public / Visible", "Unlisted", "Hidden", "Deleted / Archived", "In Stock: x/y Available", "Out of Stock", "Limit per user: n", "Role Restriction", "Product Role Blacklist", "Grant Restriction", "Not Yet Available", "Expired", "Age Restricted: …", "Unused Stock: n". Empty: "No Products Here!" | `src/frontend/containers/housekeeping/products/category/{categoryView.tsx, categoryInfo.tsx}`, `src/frontend/containers/housekeeping/products/utils.tsx` |
| STO-07 | **Create a product (the product form)** | Creates a product in the category | … › View Products › Create New Product | same (inline) | API product:manage | Card "New Product". Top fields: "Name", "Display Name Optional", "Description", [dealer only] "Dealer assistant count limit", "Product visibility" (Public / Unlisted / Hidden). **Pricing**: "Base Price" (create only), "Pass Platform Fee to Customer". **Stock Control**: [registration only] "Expires On"; [store only] "Maximum purchases per user"; "Limit Available Stock". **Cashier** (store and registration): "Product Label Print Design" (+ "Please select a design..."); [store only] "Deliverable". **Restrictions**: "Available From", "Available Until", "Minimum Purchase Age Optional", "Maximum Purchase Age Optional", "Product Role Whitelist", "Product Role Blacklist" (system:permission:read, otherwise "You do not have sufficient permission to limit products by role."), [not dealer] "Restrict product to grants". Submit "Create Product"; toast "New product has been created". "Back to Products" | `src/frontend/containers/housekeeping/products/{productForm.tsx, createProduct.tsx}`, `src/frontend/containers/housekeeping/products/category/categoryCreateProduct.tsx` |
| STO-08 | Product page and edit info | Product detail; Edit reuses the STO-07 form without Base Price | … › View Products › (product) › Product Information › Edit (pencil) | `/housekeeping/store/products/:id` | RT system:login; API product:manage (buttons not hidden by permission) | Header "Product: {name} (ID: n)". Tabs "Product", "Orders", "Audit Logs" (audit:read). Left cards: "Product Information", "Product Images", "Addons", "Discounts", ["Upgrade Paths" for registration], "Options", "Surcharges". Right cards: "Prices", "Actions". Info shows Platform Fee "Fees Passed On via Surcharge"/"Fees Absorbed / Included". Submit "Update Product" | `src/frontend/containers/housekeeping/products/viewer/{viewer.tsx, productinfo.tsx}` |
| STO-09 | Change price | Sets a new base price | … › (product) › Prices › Change Price | — | API product:manage | "Current Price", "New Price", "Save New Price" / "Cancel" | `src/frontend/containers/housekeeping/products/viewer/priceinfo.tsx` |
| STO-10 | Delete (archive) a product | Soft-deletes the product | … › (product) › Product Information › Delete (trash) | — | API product:manage | Modal "Delete product?" → "Delete". Product then shows "Deleted / Archived". No restore or duplicate UI | `src/frontend/containers/housekeeping/products/viewer/productinfo.tsx` |
| STO-11 | Product images | Uploads images and sets their role | … › (product) › Product Images › + | — | API product:manage | PNG, max 2048 px, at most 10 per product. Toast "Upload Complete!". Gear menu: "Set Primary", "Set Hidden", "Set Badge Art", "Delete". Badges "Primary", "Image", "Badge Art", "Hidden" | `src/frontend/containers/housekeeping/products/viewer/imageEditor/*` |
| STO-12 | Addons | Attaches another product as an add-on | … › (product) › Addons › + | — | API product:manage | "Product Search", "Add-on is complimentary and should be provided free", "Add-on is hidden and should not appear in users' carts", "Create Add-On". Rows: "Included / Free" or "Not Included / Extra Purchase"; delete confirm "Are you sure you want to delete this product addon?" | `src/frontend/containers/housekeeping/products/viewer/addoninfo.tsx` |
| STO-13 | Discounts | Time-boxed reduced price, optionally limited to roles | … › (product) › Discounts › + | — | API product:discount:manage; role limit needs system:permission:read | "Current Price", "Discounted Price", "Available From", "Available Until", "Limit Discount to Role(s) Optional", [registration] "Restrict registrations created with this discount from being transferred to other users.", "Name Optional". "Create Discount Price" / "Save Discount Price" / "Delete Discount". Badges "Active", "Not yet active", "Expired", "Deleted" | `src/frontend/containers/housekeeping/products/viewer/discountinfo.tsx` |
| STO-14 | Upgrade paths (registration only) | Lists the tiers a badge can upgrade to | Registration › Badge Products › (product) › Upgrade Paths › + | — | API product:manage | "Product Search" → "Create Upgrades"; badge "Upgrade"; empty "There are currently no upgrade paths." | `src/frontend/containers/housekeeping/products/viewer/upgradeinfo.tsx` |
| STO-15 | Assign options to a product | Attaches product-source options | … › (product) › Options › + | — | API product:manage | "Option Search" (with inline "Create New"), "Mark selected options as required.", [not dealer] "Prevent changes to this option after purchase is complete.", "Assign Options". Row lock icon "Toggle Mutability". Badges "Required", "Immutable". Required can be set only when assigning | `src/frontend/containers/housekeeping/products/viewer/productoptions.tsx` |
| STO-16 | Assign surcharges to a product | Adds surcharges to one product | … › (product) › Surcharges › + | — | API product:manage | "Surcharge Search" (with inline "Create New Surcharge"), "Assign Surcharges" | `src/frontend/containers/housekeeping/products/viewer/surchargeinfo.tsx` |
| STO-17 | Clear unpaid orders | Removes this product from all unpaid carts | … › (product) › Actions › Clear unpaid orders? | — | UI+API product:manage | Confirm "Are you sure you want to remove this product from all carts in which the payment has not yet been completed?"; toast "Order items removed" | `src/frontend/containers/housekeeping/products/viewer/actions.tsx` |
| STO-18 | Product orders and history | Orders containing the product, and its audit trail | … › (product) › Orders / Audit Logs | `…/:id/orders`, `…/:id/auditlogs` | API order:view; audit:read | Filter badges "Paid", "Unpaid", "Cancelled", "With grant", "No grant", "With stock", "No stock", "Requires Fulfillment" | `src/frontend/containers/housekeeping/products/viewer/orders.tsx` |

**Shared product views, compared:**

| Context | Header and list | Form differences | Product page differences |
|---|---|---|---|
| **Registration** (`/housekeeping/registration/products[/:id]`) | "Badge Products". Goes straight to the single registration category. | Adds "Expires On". Cashier help reads "Override the default badge design layout.". No "Deliverable" and no "Maximum purchases per user". | Adds "Upgrade Paths" and the discount transfer-lock checkbox. The category cannot be deleted or hidden. |
| **Dealer** (`/housekeeping/dealers/products[/category/:id\|/:id]`) | "Dealer Product Categories". Same category UI, without Hide/Show. | Adds "Dealer assistant count limit" ("…0 to disable."). No Cashier section and no "Restrict product to grants". | No immutability checkbox when assigning options. |

### Options

| ID | Feature | What it does (one line) | UI path | Route | Permission | Key sub-features (exact labels) | Source files |
|---|---|---|---|---|---|---|---|
| STO-19 | Options list | Reusable attendee input fields that are attached to products | Housekeeping › Store Management › Options | `/housekeeping/store/options` | SB product:manage; RT system:login; API product:manage | Header "Options". "Create New Option". Searchable table (badges "Required", "Immutable", "Max:", "Values:", "Min:"). Click a row to edit | `src/frontend/containers/housekeeping/options/{options.tsx, utils.tsx}` |
| STO-20 | Create an option | Defines a new option | … › Options › Create New Option | `…/options/new` | API product:manage | Card "Creating Option": "Name"; "Type" (help "Option Type Information"): Single Select, Multi Select, Free text Field, Number, Currency, Phone Number, Address, Files; "Style" (Radio/Dropdown; Checkboxes/Blocks; Text/Textarea); "Description (Optional)"; "Display on cashier interface" (product only). Select types: "Select Options" table ("Value", "Display Name (optional)", "Price Modifier" product only, "Drag to reorder", multi: "Max Number of Options (Optional)"). Text/number: Min/Max Length or Value. Files: "Max files" (1–4). "Create"; "Back to Options" | `src/frontend/containers/housekeeping/options/createOption.tsx`, `src/frontend/components/OptionEditor.tsx`, `src/frontend/components/optionEditorComponents/*`, `src/shared/options/index.ts` |
| STO-21 | Edit or delete an option | Edits or removes an option | … › Options › (row) | `…/options/:id` | API product:manage | "Editing Option: {name}"; Type is locked after creation; "Save Changes"; "Delete" → "Delete Option" | `src/frontend/containers/housekeeping/options/optionElement.tsx` |

**Option sources.** Registration › Options and Store › Options are the **same list** (`source="product"`). Volunteers › Options uses `source="volunteer"` and Dealers › Options uses `source="dealer"`. Those two have no Currency type, no Price Modifier and no "Display on cashier interface". Only product-source options attach to products, including dealer products.

### Surcharges, vouchers, orders, gatekeeping

| ID | Feature | What it does (one line) | UI path | Route | Permission | Key sub-features (exact labels) | Source files |
|---|---|---|---|---|---|---|---|
| STO-22 | List and create surcharges | Defines fees or taxes | Housekeeping › Store Management › Surcharges › Create New Surcharge | `/housekeeping/store/surcharges` | SB product:manage; RT system:login; API list product:read, create product:manage | Cards "{name} (ID: n)" with "View / Edit Details". Modal "Create Surcharge": "Name", "Display Name", "Type" (Surcharge / Tax Rate), "Amount Type" (Fixed Amount / Percentage), "Amount" → "Create Surcharge"; toast "Created new surcharge." | `src/frontend/containers/housekeeping/surcharges/{index.tsx, surchargesList.tsx, surchargesListItem.tsx, CreateModal.tsx, SurchargeForm.tsx}` |
| STO-23 | Surcharge detail: assign, unassign, delete | Shows where a surcharge is used; links it to products | … › Surcharges › View / Edit Details | `/housekeeping/store/surcharges/:id` | RT system:login; API product:manage | Info: "Name / Key", "Type", "Rate", "Calculation Method", "Created". "Assign to Product" → modal "Assign Surcharge #n" → "Assign Surcharge". "Delete" ("Cannot Be Deleted" for the platform fee). Panels "Associated Products" ("View product", "Unassign") and "Associated Order Items". **No edit form** | `src/frontend/containers/housekeeping/surcharges/{surchargeItem.tsx, AssignModal.tsx}` |
| STO-24 | Voucher list | All voucher codes | Housekeeping › Store Management › Vouchers | `/housekeeping/store/vouchers` | SB+RT+API comp:create | Header "Vouchers". "Create New Voucher". Columns "Code", "Display Name", "Value", "Total Uses", "Available To", "Status" (Available / Fully Claimed / Expired / Deleted / Archived; badge "Can Be Stacked"), "Internal" | `src/frontend/containers/housekeeping/products/vouchers.tsx` |
| STO-25 | Create a voucher | Creates a redeemable code | … › Vouchers › Create New Voucher | `…/vouchers/new` | comp:create | "Voucher Code" (dice: "Generate random code"), "Display Name Optional", "Amount", "Max Uses" ("For unlimited uses, use -1."), "Available From", "Available Until", "Restrict voucher to products", "Allow Voucher Stacking" → "Create Voucher"; toast "New voucher has been created!" | same |
| STO-26 | Voucher detail | Summary, usage and history | … › Vouchers › (row) | `…/vouchers/:id[/orders\|/auditlogs]` | comp:create; Audit tab needs audit:read | Tabs "Summary", "Orders", "Audit", "Issue", "Edit" | same |
| STO-27 | Issue a voucher to users | Applies it to selected users' current orders | … › (voucher) › Issue | `…/:id/issue` | comp:create | "User(s)", "Attempt to fulfill associated orders automatically." → "Issue Voucher"; toast "Voucher #x has been issued to n user(s)." | same |
| STO-28 | Edit or delete a voucher | Updates terms or deletes | … › (voucher) › Edit | `…/:id/manage` | comp:create | "Edit Voucher" (Code and Amount read-only) → "Update Voucher". "Delete Voucher" → "Delete" → "Are you sure you want to delete the voucher?" | same |
| STO-29 | Order list | All orders, 100 per page, filterable; no text search | Housekeeping › Store Management › Orders | `/housekeeping/store/orders?page=&filters=` | SB+RT+API order:view | "Filters": "Paid", "Unpaid", "Cancelled", "Previously refunded", "Requires Fulfillment". Rows "Order #n — k Item(s)" with status badges | `src/frontend/containers/housekeeping/attendee/orders/{orderList.tsx, components/OrderListItem.tsx, utils.ts}` |
| STO-30 | Order detail | One order in full | … › Orders › (row) | `/housekeeping/store/orders/:id` | order:view | Breadcrumb "Orders › Order #n". Action bar; "Customer Profile"; "Transaction history" (audit:read). Groups "Pending payment" / "Canceled" / "Fulfilled" / "Unfulfilled". "Customer Info". "Payments" ("Amount", "Status", "Gateway", "Reference ID", "Date"; the Stripe link needs refund:create). "Vouchers". "PagSeguro Checkouts" (config `pagSeguroEnabled`) | `src/frontend/containers/housekeeping/attendee/orders/{orderInfo.tsx, components/*}` |
| STO-31 | Mark an order as paid | Records an offline payment | … › (order) › Mark as Paid | — | registration:cashier | Dropdown "Write-off", "Card", "Cash", "Voucher" (or single "Mark as Paid" when nothing is due); toast "Successfully marked order as paid." | `src/frontend/containers/housekeeping/attendee/orders/orderInfo.tsx` |
| STO-32 | Add or remove items on an unpaid order | Force-adds a product; edits quantities | … › (order) › Pending payment › + | — | registration:cashier | Modal "Add product to Order #n" ("Select a product to be force-added into this cart.", "Product Search", options, age and stock confirmations) → "Add". Registration products are blocked | `src/frontend/containers/housekeeping/attendee/orders/orderAddProductModal.tsx`, `src/frontend/containers/cart/utils.tsx` |
| STO-33 | Cancel an order | Cancels an unpaid order | … › (order) › Cancel Order | — | order:delete | Toast "Order has been canceled!" | `src/frontend/containers/housekeeping/attendee/orders/orderInfo.tsx` |
| STO-34 | Fulfill items | Marks "Deliverable" items as handed over | … › (order) › Mark as Fulfilled | — | order:fulfill | Modal "Fulfill Order #n" (table "Product name" / "Fulfilled?") → "Fulfill Order #n". Per-item "Undo Delivery" | `src/frontend/containers/housekeeping/attendee/orders/orderFulfillModal.tsx` |
| STO-35 | Resend order confirmation | Re-sends the order email | … › (order) › Resend Email | — | order:view | Modal "Resend Order Confirmation Email" → "Resend". Paid orders only | `src/frontend/containers/housekeeping/attendee/orders/orderInfo.tsx` |
| STO-36 | Refund an order or decide a refund request | Issues a refund, or approves or rejects a request | … › (order) › Refund Order / Approve Refund / Reject Refund | — | refund:create | Approve modal "Refund #n — Approve": "Products to be Refunded" ("Product", "Quantity", "Revoke Digital Grants?", "Amount to Refund"), "Related Payments", "Return item to available stock?", "Reason for Approval", "Message to Customer" → "Approve Refund". Reject: "Reason for Rejection", "Message to Customer" → "Reject Refund". Hidden during a dispute | `src/frontend/modules/order/refund/{ApproveModal.tsx, RejectModal.tsx, RefundOrderItems.tsx, RefundPaymentTable.tsx}` |
| STO-37 | Order comp voucher | Adds a one-time voucher to an unpaid order | … › (order) › Vouchers › + / − | — | comp:create | Modal "Create voucher #{orderId}" ("Create a one-time use voucher for this order.", "Display Name Optional", "Amount") → "Create"; remove → "Delete voucher for #{orderId}" | `src/frontend/containers/housekeeping/attendee/orders/{voucherModal.tsx, components/OrderVouchers.tsx}` |
| STO-38 | Order item admin menu | Per-item corrections | … › (order) › (item) ⋯ | — | as listed | "Set as active registration" (refund:create), "Remove Unused Stock" (registration:cashier), "Edit Option Values" → "Update Order Item Option Values" (registration:cashier), "Undo Delivery" (order:fulfill) | `src/frontend/containers/cart/utils.tsx` |
| STO-39 | Gatekeeping silo list | Lists silos. A silo is a raffle attached to products; buying a siloed product enters the buyer, and winners may then buy | Housekeeping › Store Management › Gatekeeping | `/housekeeping/store/gatekeeping` | SB+RT+API raffle:manage | Header "Gatekeeping". "Create New Silo". Cards "{name} (ID: n)" → "Manage Silo" | `src/frontend/containers/housekeeping/raffles/{list.tsx, raffleListItem.tsx}` |
| STO-40 | Create a silo | Creates a silo | … › Gatekeeping › Create New Silo | `…/gatekeeping/new` | RT system:login; API raffle:manage | Header "Creating Silo". "Silo Information": "Name", "Allow new entries to the silo?", "Overflow stock silo". "Associated Products" (a product can be in only one silo). "Role override" (system:permission:read). "Create Silo"; toast "Silo successfully created!" | `src/frontend/containers/housekeeping/raffles/editor/{raffleEditor.tsx, productSelector.tsx, roleSelector.tsx}` |
| STO-41 | Edit or delete a silo | Changes settings; deletes | … › Gatekeeping › Manage Silo | `…/gatekeeping/:id` | API raffle:manage | Header "Editing Silo: {name}". Badges "Open to Entries", "Closed to Entries", "Recently Drawn". "Update Silo"; "Delete Silo" → "Are you sure?" → "Delete Silo" | `src/frontend/containers/housekeeping/raffles/editor/raffleEditor.tsx` |
| STO-42 | Silo entrants | Lists tickets; overrides their status | … › Manage Silo › Entrants | — | raffle:manage | "Search...", "Ticket status". Badges "Entered / Waiting", "Winner", "Redeemed", "Rescinded", "Deleted". Row menu "Reset ticket", "Revoke / Void ticket", "Reset ticket to winner", "Set ticket to winner" | `src/frontend/containers/housekeeping/raffles/editor/raffleEntrants.tsx` |
| STO-43 | Silo wording | Attendee-facing messages | … › Manage Silo › Wording | — | raffle:manage | "Entry confirmation title", "Entry confirmation body", "Not yet entered message", "Entry rescinded message", "Entry winner message", "Entry lost message", "Raffle open message", "Raffle pending draw message"; saved with "Update Silo" | `src/frontend/containers/housekeeping/raffles/editor/RaffleTextEdit.tsx` |
| STO-44 | Run a draw | Marks hand-picked users as winners (**not random**) | … › Manage Silo › Run | — | API raffle:manage | "Select users to win"; "What should happen to existing winners?" (Do Nothing / Revoke existing wins / Reset existing wins / Delete existing wins); "What should happen to non-winners in this draw?" (Do Nothing / Revoke tickets / Delete tickets); "Close the raffle to new entries"; "Perform a test run (Don't save the results)" → "Run Raffle Draw". Results: "Raffle Draw Complete!" / "Test Run Draw Results", "Number of Winners", "Total Entries", "Win Percentage", "Winning User IDs". No notification is sent | `src/frontend/containers/housekeeping/raffles/editor/runRaffle.tsx`, `src/backend/app/services/RaffleService.ts` |

Attendees redeem vouchers in their cart via "Have a voucher to redeem?" › "Redeem Voucher" (`src/frontend/containers/cart/VoucherComponent.tsx`).

## 5. Volunteers module (VOL)

**Who sees it.** Pick **Volunteers** in the switcher. It is listed when the user has `volunteer:read` or is a department lead. The `/housekeeping/volunteers/*` route checks only that the user is logged in. Leads without `volunteer:read` land on **My Department(s)**.

| ID | Feature | What it does (one line) | UI path | Route | Permission | Key sub-features / tabs / form sections (exact labels) | Source files |
|---|---|---|---|---|---|---|---|
| VOL-01 | Volunteer dashboard | Headline counts | Housekeeping › Volunteers › Dashboard | `/housekeeping/volunteers/dashboard` | SB+RT+API volunteer:read | Cards "Volunteer Applications", "Department(s)", "Pending Applications" | `src/frontend/containers/housekeeping/volunteers/dashboard.tsx` |
| VOL-02 | Browse and filter applications | Searchable grid of all volunteer applications | Housekeeping › Volunteers › Applications | `/housekeeping/volunteers` (`?user={id}` opens a detail) | SB+RT volunteer:read | Page "Volunteer Applications". Columns "Name", "Volunteer Type" (Staff / Staff Alumni / Recruit), "Registration Status" (Paid / Unpaid / Not Registered), "Status" (Assigned / Pending Request / Unassigned), "Restrictions", "Department(s)" (colour badges: "Interested in %", "Has past experience with %", "Will not volunteer for %", "Requested by %", "Assigned to %"; empty: "No Preferences / Assignments"). Search and set filters | `src/frontend/containers/housekeeping/volunteers/{volunteers.tsx, columns.tsx, utils.tsx}` |
| VOL-03 | View a volunteer application | Modal with the full application | … › Applications › (row) | same | volunteer:read | Sections "Volunteer", "Contact" ("Preferred" badge, "Not Provided"), "Registration", "Department Preferences", "Assignments & Requests", "Application Answers", "Notes". Footer "Profile" (system:login), "Previous years", "Assign", "Make Staff"/"Remove Staff", "…" (aria "Options") | `src/frontend/containers/housekeeping/volunteers/{volunteerInfo.tsx, components/ApplicationSummary.tsx}` |
| VOL-04 | Edit an application answer | Edits one custom-question answer | … › (row) › Application Answers › pencil (Edit) | same | API volunteer:update (pencil not gated) | Option input → "Save" / "Cancel" | `src/frontend/containers/housekeeping/volunteers/VolunteerAvailability.tsx` (component `VolunteerOptions`) |
| VOL-05 | Assign or unassign departments | Assigns the volunteer to departments | … › (row) › Assign | same | buttons disabled without volunteer:update | Per-department buttons: green = assigned (click to remove), yellow outline = requested by a lead, grey "+" = assign, red disabled = the volunteer avoids it. "Go back". With "Enable Volunteer Emails", the volunteer and leads are emailed | `src/frontend/containers/housekeeping/volunteers/components/VolunteerAssign.tsx`, `src/backend/app/services/VolunteerService.ts` |
| VOL-06 | Make Staff | Adds the `staff` role | … › (row) › Make Staff | same | volunteer:update | Modal "Make Staff: {name}" ("Are you sure you want to mark this user as staff?") → "Make Staff" | `src/frontend/containers/housekeeping/volunteers/components/MakeStaffModal.tsx` |
| VOL-07 | Remove Staff | Removes `staff`; can remove a paid registration and issue a voucher | … › (staff row) › Remove Staff | same | volunteer:update + refund:create | Modal "Remove Staff: {name}". "Registration Options": "Remove paid {product} registration from Order #N {price}". "Vouchers already used by the user:" table. Amount (creates "Remove staff Voucher") → "Remove Staff" | `src/frontend/containers/housekeeping/volunteers/components/RemoveStaffModal.tsx` |
| VOL-08 | Clear department requests | Removes all lead requests on an application | … › (row) › … › Clear requests | same | shown with volunteer:read; API volunteer:update | Modal "Clear department requests" → "Clear" | `src/frontend/containers/housekeeping/volunteers/volunteerInfo.tsx` |
| VOL-09 | Delete an application | Permanently deletes the application | … › (row) › … › Delete Application | same | volunteer:delete | Modal "Delete Application" → "Delete" | same |
| VOL-10 | Previous years | Read-only applications from other conventions | … › (row) › Previous years | same | volunteer:read | Per convention: assignments, requests, preferences, answers, dates ("Staff" badge). "Go back" | same |
| VOL-11 | Department lead view | A lead sees and requests volunteers for their departments, but cannot assign them | Housekeeping › Volunteers › My Department(s); also main sidebar › My Department(s) | `/housekeeping/volunteers/lead` | SB isDepartmentLead; RT none; API grants leads volunteer:read for these endpoints | Same grid as VOL-02, narrowed to the lead's departments. The modal footer has "Manage Requests" with per-department "Recruit Request" / "Staff Request" toggles, or a disabled "Assigned". **Making someone a lead:** Volunteer Settings › Department(s) › Leads. This also grants the internal `lead` role (`massemail` plus PII read) | `src/frontend/containers/housekeeping/volunteers/{mydepartment.tsx, components/VolunteerRequests.tsx}`, `src/backend/app/server/plugins/grantLeadScope.ts` |
| VOL-12 | Volunteer mass email | Shared Mass Email (ATT-28) filtered by department and assignment | Housekeeping › Volunteers › Mass Email | `/housekeeping/volunteers/massemail` | SB massemail; **RT none**; API massemail or vendor:massemail | "Department(s)" ("All Departments" with volunteer:admin, plus one checkbox per department; "This is a hidden department."). "Filters": "Only Staff", "Assigned" (default on), "Unassigned". Leads see only their own departments. Department emails are offered as senders | `src/frontend/containers/housekeeping/massemail/volunteer.tsx` |
| VOL-13 | Volunteer statistics | Department breakdown and applications over time | Housekeeping › Volunteers › Volunteer Stats | `/housekeeping/volunteers/statistics[/overtime]` | SB volunteer:admin; **RT none**; API volunteer:read | Page "Volunteer Statistics". Tab "Department": "General Stats", "Department Stats" (Name, Staff, Assigned, Pending). Tab "Over Time": "Volunteer Applications Over Time" | `src/frontend/containers/housekeeping/volunteers/VolunteerStats.tsx` |
| VOL-14 | Volunteer custom questions (Options) | Questions used on the volunteer form | Housekeeping › Volunteers › Options › Create New Option | `/housekeeping/volunteers/options[/new\|/:id]` | SB+RT+API volunteer:update | As STO-19 to STO-21, with `source="volunteer"` and no price, currency or cashier fields. Placed on the form with the "Option" element (EDT-09) | `src/frontend/containers/housekeeping/options/options.tsx`, `src/shared/options/index.ts` |
| VOL-15 | Volunteer general settings | Module on/off and behaviour toggles | Housekeeping › Volunteers › Volunteer Settings › General | `/housekeeping/volunteers/settings` | SB+RT+API volunteer:admin | See (b). Toast "Volunteer settings have been updated!" | `src/frontend/containers/housekeeping/volunteers/settings/{VolunteerSettings.tsx, General.tsx}` |
| VOL-16 | Export volunteer data | Downloads names, departments and contact methods | … › Volunteer Settings › General › Export Data › CSV / JSON | `/api/export/download/volunteer?format=csv\|json` | page volunteer:admin; **API system:export** | "Export volunteer data, their names, assigned departments, and contact methods." | `src/frontend/containers/housekeeping/volunteers/settings/General.tsx`, `src/backend/app/server/routes/api/export.ts` |
| VOL-17 | Manage departments and leads | Creates, edits and deletes departments, sets leads and public visibility | … › Volunteer Settings › Department(s) › + (Create) / Edit / Delete | `/housekeeping/volunteers/settings/departments` | volunteer:admin; hidden departments and their email and leads data need volunteer:dept:hidden | Card "Department(s)": Name, Email, Leads (user picker), "Show on public application form". Modal "Edit Entry" → "Add"/"Save". "Delete entry" | `src/frontend/containers/housekeeping/volunteers/settings/Departments.tsx`, `src/frontend/containers/housekeeping/settings/CrudTable.tsx` |
| VOL-18 | Volunteer Code of Conduct | Terms volunteers agree to | … › Volunteer Settings › Terms | `/housekeeping/volunteers/settings/terms` | volunteer:admin | "Volunteer Code of Conduct" ("Policy volunteers must agree when applying.") → "Save". Policy key `volunteerTerms` | `src/frontend/containers/housekeeping/volunteers/settings/Terms.tsx` |
| VOL-19 | Volunteer form editor (entry) | Opens EDT-09 | … › Volunteer Settings › General › Form Editor › Go to Volunteer Form Editor | `/housekeeping/editor/volunteers` | RT system:login; API volunteer:admin | "Edit the volunteer application form to add custom text, add/remove elements, or add other options." | `src/frontend/containers/housekeeping/volunteers/volunteerForm.tsx` |

## 6. Dealers module (DLR)

**Who sees it.** Pick **Dealers** in the switcher; it is listed with `vendor:read`. The UI says "Dealers", but the permissions are named `vendor:*`.

| ID | Feature | What it does (one line) | UI path | Route | Permission | Key sub-features / tabs / form sections (exact labels) | Source files |
|---|---|---|---|---|---|---|---|
| DLR-01 | Dealer dashboard | Dealer counts and applications per area | Housekeeping › Dealers › Dashboard | `/housekeeping/dealers/dashboard` (also `/dealers`, `/dealers/statistics/*`) | SB+RT+API vendor:read | Cards "Total Dealers", "Approved Dealers", "Paid Dealers", "Dealers without Applications" and "Confirmed with No Paid Registration" (each with "View" → user list). Card "Applications" (Area, Count, Confirmed, Unpaid) → "View all applications" | `src/frontend/modules/dealer/{dashboard.tsx, links.ts}` |
| DLR-02 | Browse dealer applications | One row per application, with filters | Housekeeping › Dealers › Applications | `/housekeeping/dealers/list` (`?area={id}`) | SB+RT+API vendor:read | Page "Dealers". Columns "Store", "User" ("Restriction" badge), "Status" (raw lowercase; "(Paid)"), "Registration", "Area", "Table Type", "Table". Filters: Status, Registration, Area, Table Type | `src/frontend/containers/housekeeping/dealers/{dealers.tsx, util.tsx}` |
| DLR-03 | Edit dealer information | Business details and dealer-form answers | … › Applications › (Store) › Dealer Information › pencil (Edit) | `/housekeeping/dealers/list/:id` | pencil shown with vendor:read; API vendor:update | "Business Name", "Business Email", "Address Line 1", "Address Line 2 (Optional)", "City", "State / province", "Zip / postal code", "Country", plus dealer options → "Save"; toast "The dealer has been updated." | `src/frontend/containers/housekeeping/dealers/{dealerDetails.tsx, dealerEdit.tsx}` |
| DLR-04 | Review, approve, waitlist or reject an application | Sets status, table number, table type and add-on requests for one area | … › (Store) › "{Area} application" card › pencil (Edit) | same | API vendor:update | "Special Requests", "Table Number", "Status" (Pending / Approved / Waitlisted / Rejected / Cancelled), "Table" ("(Unlisted)"/"(Hidden)" prefixes, price), "Requests" (add-on checkboxes), table options → "Save"; toast "The application has been updated." Locked once paid. Roles sync automatically: `vendor` when the dealer has any application, `vendorApproved` when one is approved. No status email found | `src/frontend/containers/housekeeping/dealers/applicationDetails.tsx`, `src/backend/app/services/Dealer.ts` |
| DLR-05 | Delete an application payment | Unlinks a payment so status and table can change again | … › (Store) › application edit › trash next to Status | same | API vendor:update | Modal "Delete Application Payment?" → "Delete"; toast "Payment deleted!" | `src/frontend/containers/housekeeping/dealers/applicationDetails.tsx` |
| DLR-06 | Add an application in another area | Creates an application for an existing dealer | … › (Store) › area card ("No application.") › + (Add) | same | API vendor:update | Same form as DLR-04; toast "The application has been created." There is no admin delete; use Rejected or Cancelled | `src/frontend/containers/housekeeping/dealers/dealerDetails.tsx` |
| DLR-07 | Manage dealer assistants | Adds or removes assistants | … › (Store) › application card › Assistants › Manage Assistants | same | vendor:update | Shown when the table type's assistant limit is above 0. Status "Accepted" / "Pending Email Confirmation." Modal "Manage Assistants": "Add Assistant" picker → "Add Assistant"; trash per assistant; "Close". Accepted assistants of approved applications get `dealerAssistant` | `src/frontend/containers/housekeeping/dealers/dealerDetails.tsx` |
| DLR-08 | Seating requests | Approves or declines "sit next to" requests | … › (Store) › Seating Requests | same | API vendor:update | Columns "Dealer", "Status" ("Pending approval", "Approved", "Rejected"); "Approve", "Decline", "Cancel"; empty "No existing requests." | `src/frontend/containers/apply/dealer/DealerSeating.tsx` |
| DLR-09 | Dealer areas | Creates, edits and deletes areas, each linked to a vendor product category | Housekeeping › Dealers › Areas › Create New Dealer Area | `/housekeeping/dealers/areas` | SB+RT vendor:update; **delete needs staff:admin:update** | Page "Dealer Areas" (empty "Nothing here yet!"). Modal "Create New"/"Edit": "Name", "Description", "Product Category", "Enabled" ("Display the option to users"), "Full", "Open". Card buttons "View applications", "Edit", "Delete" → "Delete Dealer Area" ("…This will delete ALL applications for this area."). **Prerequisite:** a vendor product category (DLR-10) | `src/frontend/modules/dealer/dealerAreas.tsx` |
| DLR-10 | Dealer products (table types and add-ons) | Vendor categories and table-type products; shared views (STO-01 to STO-18) | Housekeeping › Dealers › Products › Create New Category | `/housekeeping/dealers/products[/category/:id\|/:id]` | SB+RT vendor:read; create category product:category:manage; product edits product:manage | Page "Dealer Product Categories". The per-product assistant limit is set here ("Dealer assistant count limit") | `src/frontend/modules/dealer/dealerProducts.tsx` |
| DLR-11 | Dealer mass email | Shared Mass Email (ATT-28) filtered by area, table and status | Housekeeping › Dealers › Mass Email | `/housekeeping/dealers/massemail` | SB+RT vendor:massemail | "Areas"; "Table type" ("Filter by table type", "Filter by addons"); "Status": Pending, Approved, Waitlisted, Rejected, Cancelled, Paid, Unpaid (Approved, Paid and Unpaid on by default) | `src/frontend/containers/housekeeping/massemail/dealer.tsx` |
| DLR-12 | Dealer custom questions (Options) | Questions for the dealer form | Housekeeping › Dealers › Options › Create New Option | `/housekeeping/dealers/options` | SB vendor:update; **RT none**; API vendor:update | `source="dealer"`, no price modifiers. Placed on the form with the "Option" element (EDT-08) | `src/frontend/modules/dealer/dealerContainer.tsx`, `src/shared/options/index.ts` |
| DLR-13 | Dealer dynamic export | Dynamic Export over dealer applications (SYS-03) | Housekeeping › Dealers › Dynamic Export | `/housekeeping/dealers/dynamicexport` | system:export:dynamic:full | See SYS-03 and SYS-04 | `src/frontend/modules/dealer/dealerContainer.tsx` |
| DLR-14 | Dealer general settings | Module on/off, forced registration, "from" email | Housekeeping › Dealers › Dealer Settings › General | `/housekeeping/dealers/settings` | SB+RT+API vendor:update | See (b). Toast "Dealer settings have been updated!" | `src/frontend/modules/dealer/dealerSettings.tsx` |
| DLR-15 | Export dealer data | Names, approval status, product and table options | … › Dealer Settings › General › Export Data › CSV / JSON | `/api/export/download/dealer` | **API system:export** | "Export dealer data, their names, approval status, product options, and table options." | `src/frontend/modules/dealer/dealerSettings.tsx` |
| DLR-16 | Dealer form editor (entry) | Opens EDT-08 | … › Dealer Settings › General › Form Editor › Go to Dealer Form Editor | `/housekeeping/editor/dealers` | RT system:login; API vendor:update | "Edit the dealer application form to add custom text, add/remove elements, or add other options." | `src/frontend/modules/dealer/dealerForm.tsx` |
| DLR-17 | Dealer Policy | Organization-wide and/or convention-specific dealer policy | … › Dealer Settings › Terms | `/housekeeping/dealers/settings/terms` | page vendor:update; **save/delete need system:settings:update** | "Dealer Policy" ("Policy to be displayed to dealers when submitting an application."). Blocks "Organization-wide Policy" / "Convention-specific Policy" ("Save", "Delete"); "Create Organization-wide Policy", "Create Convention-specific Policy". Policy key `vendor` | `src/frontend/modules/dealer/dealerSettings.tsx`, `src/frontend/containers/housekeeping/settings/Terms.tsx` |

## 7. System module (SYS, SET)

**Who sees it.** Pick **System** in the switcher; see §0 for when it is listed. All `/housekeeping/system/*` routes also require `system:login`.

### Data, users, audit, developers

| ID | Feature | What it does (one line) | UI path | Route | Permission | Key sub-features / tabs / form sections (exact labels) | Source files |
|---|---|---|---|---|---|---|---|
| SYS-01 | Dynamic Export: user data | Builds a custom per-user export and downloads it as CSV or JSON | Housekeeping › System › Dynamic Export | `/housekeeping/system/dynamicexport` | SB+RT+API system:export:dynamic:full ("…DANGEROUS.") | Header "Dynamic Export" + "Beta" badge. Card "User Data — Fields". Groups "User" (raw field IDs such as id, firstName, email, bornAt, roles…), "Registration" (badgeName, attendanceTier), "Option Values". "Download Export": file name ("Enter a file name...", default `export`) . `csv`/`json` → "Download". "Manage Form": "Preview Export Results" (modal "Preview", first 5 rows), "Reset Form". Alert "Dynamic Exports — Quick Guide" | `src/frontend/containers/housekeeping/dynamic-export/{index.tsx, dynamicform.tsx}`, `src/shared/dynamic-export/index.ts`, `src/shared/dynamic-export/pivots/UserPivot.ts`, `src/backend/app/server/routes/api/dynamicexport.ts` |
| SYS-02 | Dynamic Export: registration data | Same tool over registration records | Housekeeping › Registration › Dynamic Export | `/housekeeping/registration/dynamicexport` | system:export:dynamic:full | Card "Registration Data — Fields". Groups "Registration" (id, user, product, emergency contacts, uuid, isPaid) and "Badge" (badgeName, badgeArtId, badgePrinted). No Option Values | `src/shared/dynamic-export/pivots/RegistrationPivot.ts` |
| SYS-03 | Dynamic Export: dealer data | Same tool over dealer applications | Housekeeping › Dealers › Dynamic Export | `/housekeeping/dealers/dynamicexport` | system:export:dynamic:full (+ vendor:read for the module) | Card "Dealer Data — Fields". Groups "Application", "Business", "Dealer", "Option Values" | `src/shared/dynamic-export/pivots/DealerApplicationPivot.ts` |
| SYS-04 | Configure an export column | Renames a column, sets a value modifier, or filters rows | Any Dynamic Export › tick field › pencil ("Rename column") / tune ("Adjust modifiers") | as above | as above | Rename inline (Enter saves, Escape cancels). Modal "Field Settings": radio "None" + modifiers (e.g. "Convert from ISO to Name", "To Age (now)", "To Age (convention start)", "Role Name (default)", "Role ID", "Product Name (default)", "Product ID", "Full Legal Name", "Area ID") and filters ("Restrict to Account Owners", "Minimum Age"/"Maximum Age" with "Now"/"Start of Convention", "Restrict to Roles" + "Operator:" Any/All/None, "Filter by Attendance Tier", "Filter by Payment Status", "Filter by Application Status", "Filter by Table Payment Status", "Filter by Dealer Area", "Filter by Registration Status") → "Cancel"/"Save" | `src/frontend/containers/housekeeping/dynamic-export/{FieldModifierModal.tsx, filters.tsx}`, `src/frontend/containers/housekeeping/dynamic-export/pivots/FilterContext.ts`, `src/shared/dynamic-export/pivots/*` |
| SYS-05 | Request PII access for exports | Starts the approval workflow for the all-user PII export | Housekeeping › System › Export › Request PII access | `/housekeeping/system/export` | SB+RT+API system:export | Header "Export Data". Requires another admin's approval or a 24-hour delay. Button then reads "Pending PII access approval". All global admins get the email "Data Export Request". Hidden when the organization flag `forceExportPii` is on | `src/frontend/containers/housekeeping/export.tsx`, `src/backend/app/server/routes/api/export.ts`, `src/backend/app/services/ExportService.ts` |
| SYS-06 | Approve, reject or delete export requests | Another admin decides; requesters can withdraw their own | … › Export › Pending Requests | same | system:export (you cannot approve your own) | Columns "Date/Time Created", "Name of Requesting User", "Actions": "Approve" ("Approve Request"), "Reject" ("Reject Request"), "Delete" on your own ("Delete Request"). Toasts "Request approved!", "Request rejected!", "Request deleted!" | same |
| SYS-07 | Download standard exports | Fixed-format CSV or JSON reports | … › Export › (card) › CSV / JSON | `/api/export/download/{type}?format=csv\|json` | system:export | Cards: user (only after approval or with `forceExportPii`), registration, volunteer, dealer, orderItems, orders | same |
| SYS-08 | Cancel an export request from the email | Email BLOCK link rejects the request | Email "Data Export Request" › BLOCK | `/housekeeping/system/export/block?code={id}` | RT system:login only; API system:export | "The data export request '{id}' has been canceled." No in-app link | `src/frontend/containers/housekeeping/export.tsx` (`ExportBlock`) |
| SYS-09 | Manually create a user (optionally a sub-account) | Creates an account without self sign-up, then opens the profile | Housekeeping › System › User Creation | `/housekeeping/system/user/create` | SB user:create; **RT system:login**; API user:create | Header "Manual Account Creation". "Owner account" (makes a sub-account), "Reason for manual creation", "Username", "Email Address", "First Name", "Last Name", "Preferred Name", "Date of birth", "Address Line 1", "Address Line 2 (Optional)", "City", "Zip / postal code", "Country", "State / province", "Phone number", "Send the user an account confirmation email." → "Create User"; toast "Account created." | `src/frontend/containers/housekeeping/attendee/createUser.tsx`, `src/backend/app/server/routes/api/users/manual/post.ts` |
| SYS-10 | Browse audit logs | Logs by entity type ("pivot"), then by object | Housekeeping › System › Audit Logs › (pivot) › (object) | `/housekeeping/system/auditlog[/:entityId[/:objectId]]` | SB+RT+API audit:read | "Select a pivot to browse logs by:". Breadcrumb "Audit Logs". Row toggle "Toggle details". Support-staff entries are pink. Pagination by date (modal "Pick a time to browse from": "Date", "Update"). Embedded as **History**/**Audit** tabs on roles, users, products and vouchers | `src/frontend/containers/housekeeping/audit/{log.tsx, TimePicker.tsx, query.ts}`, `src/backend/app/server/routes/api/auditlogs.ts` |
| SYS-11 | Filter audit logs | By tag and type; raw data | same | `?include=&exclude=&type=&time=&reverse=` | audit:read | "Search all tags..." with "+" ("Only show logs tagged X") / "−" ("Exclude logs tagged X"). "Show Raw"/"Hide Raw". "Type Filter: {type} [remove]" | same |
| SYS-12 | Create a webhook | Registers an HTTPS endpoint for event POSTs | Housekeeping › System › Developers › Webhooks › Create New | `/housekeeping/system/developers` | SB+RT webhook:manage or oauth:manage; tab+API webhook:manage | Modal "Create Webhook": "Name", "URL", "Events" (raw IDs: test, volunteer-submitted, volunteer-updated, volunteer-assigned, volunteer-unassigned, volunteer-deleted, registration-created, registration-updated, user-updated, order-complete, order-canceled, dealer-upsert, application-upsert, application-deleted, nfc-badge-scanned), "Only fire for this convention" → "Create"; toast "Webhook created!" | `src/frontend/containers/housekeeping/developers/{index.tsx, webhooks/WebhookPage.tsx, webhooks/WebhookModal.tsx}`, `src/backend/app/services/WebHooksService.ts` |
| SYS-13 | Test, delete and verify webhooks | Tests or deletes; shows the verification key | … › Developers › Webhooks (table) / View Verification Key | same | webhook:manage | Columns "#", "Name", "URL", "Events", "Fires", "Actions": "Delete" (no confirm), "Test". "View Verification Key": requests are signed JWTs, verified via `/.well-known/jwks.json`. No edit, no delivery log | `src/frontend/containers/housekeeping/developers/webhooks/{WebhookTable.tsx, KeyView.tsx}` |
| SYS-14 | Create an OAuth application | Registers an API client; shows the secret once | … › Developers › OAuth Applications › Create New | `/housekeeping/system/developers/oauth` | tab+API oauth:manage | Modal "Create OAuth Application": "Name", "Description", "Callback URIs" (+/−), "Application Permissions" (client-credentials scopes: order:manage, order:view, registration:read, system:export:sqlite, user:create, user:note:categories:manage, user:note:read, user:read, user:roles:update, vendor:read, volunteer:read) → "Save". Modal "New secret" ("…it will not be displayed again"): "ID:", "Secret:". Users consent to scopes at `/oauth/authorize` | `src/frontend/containers/housekeeping/developers/oauthApps/{OAuthPage.tsx, OAuthModal.tsx}`, `src/frontend/components/RevealSecretModal.tsx`, `src/backend/app/server/routes/api/oauth.ts` |
| SYS-15 | Edit or delete an OAuth application | Changes or removes an app | … › OAuth Applications › Edit / trash | same | oauth:manage | "Edit OAuth Application" (toast "Application updated!"); "Delete Application" (toast "Application deleted!"). No secret rotation | `src/frontend/containers/housekeeping/developers/oauthApps/OAuthTable.tsx` |

### Roles

| ID | Feature | What it does (one line) | UI path | Route | Permission | Key sub-features (exact labels) | Source files |
|---|---|---|---|---|---|---|---|
| SYS-16 | View roles | Lists roles with descriptions and managers | Housekeeping › System › Roles | `/housekeeping/system/roles` | SB isRoleManager or system:permission:read; RT logged in; data system:permission:read (else "No Roles to Manage") | Role name links and descriptions; "Managers" (system:permission:update). Internal roles (`lead`, `dealerAssistant`, `roleManager`) show "Role Reserved for Internal Use". Role names are raw strings | `src/frontend/containers/housekeeping/roles/{Roles.tsx, RoleList.tsx}`, `src/shared/user/roles.ts` |
| SYS-17 | Create a role | Adds a custom role | … › Roles › Add new role | (modal) | system:permission:update | Modal "Create new role": "Input the role name", "Describe the role:", "Cashier message" (shown in the Cashier UI), "Role Managers:" (up to 16), "User Note Categories" + "Restricted Categories" → "Save"; toast "Role created successfully" | `src/frontend/containers/housekeeping/roles/RoleForm.tsx`, `src/backend/app/server/routes/api/roles/post.ts` |
| SYS-18 | Assign or remove users on a role | Per convention or global | … › Roles › {role} › Users › Assign | `/housekeeping/system/roles/:id` | API user:roles:update or role manager (Assign button not gated) | "Convention" select; modal "Assign": user picker, "Remove Users?", "Assign '{role}' Globally?" → "Add"/"Remove". Table with "Remove Role" per row | `src/frontend/containers/housekeeping/roles/RoleUserList.tsx` |
| SYS-19 | Set a role's permissions | Sets each permission to Default, Allow or Deny | … › {role} › Permissions | `…/roles/:id/permissions` | view system:permission:read; edit system:permission:update | "Search...", segmented "Default" / "Allow" / "Deny"; toast "Saved successfully". Parent rule: `vendor:read` is the parent of vendor:massemail, vendor:stats and vendor:update (allowing a child allows the parent). Deny always wins | `src/frontend/containers/housekeeping/roles/{RoleEdit.tsx, PermissionList.tsx}`, `src/shared/user/permissions.ts` |
| SYS-20 | Edit role settings | Description, cashier message, managers, note categories | … › {role} › Settings | `…/roles/:id/settings` | system:permission:update; not for internal roles | "Enter new role description:", "Cashier message", "Role Managers:", "User Note Categories" → "Save". The name is fixed. Managers automatically get the `roleManager` role | `src/frontend/containers/housekeeping/roles/RoleForm.tsx` |
| SYS-21 | Create and share role invite links | Codes whose links grant the role | … › {role} › Invites › Create Invite | `…/roles/:id/invites[/create\|/:inviteId/edit]` | system:permission:update | Columns "Code", "Expiration", "Uses", "Actions" ("Edit", "Copy Link"). Form "Create Role Invite(s)": "Amount", "Max Uses" (−1 = unlimited), "Expires" → "Create Invite". Link `{origin}/roles/invite/{code}` | `src/frontend/containers/housekeeping/roles/RoleInvites.tsx` |
| SYS-22 | Accept a role invite (invitee) | Adds the role for the current convention | Invite link | `/roles/invite/:code` | logged-in user | Header "Role Invite Code". "Click here to accept" / "Click here to decline". Expired: "Sorry. This role code has expired." | `src/frontend/containers/account/RoleInviteCode.tsx` |
| SYS-23 | Delete a role | Removes a custom role permanently | … › {role} › Delete | `…/roles/:id/delete` | system:permission:update | Type the role name to enable "Delete"; toast "Deleted role '{name}' successfully." | `src/frontend/containers/housekeeping/roles/RoleEdit.tsx` |
| SYS-24 | Role history | Audit trail of the role | … › {role} › History | `…/roles/:id/auditlogs` | audit:read | Heading "Audit Logs" (SYS-10 component) | same |
| SYS-25 | Role managers (delegated assignment) | Named non-admins assign users to specific roles | Housekeeping › System › Roles › {role} › Users; also profile › Roles (ATT-16) | as SYS-18 | isRoleManager + `roleManager` role | Managers see only their roles: Users, read-only Permissions, History. Not Invites, Settings or Delete | `src/frontend/containers/housekeeping/ModuleSwitcher.tsx`, `src/backend/app/server/routes/api/roles/**` |

### System › Settings (SET)

Page header "System Settings". Each section of the Convention tab has its own **Save**.

| ID | Feature | What it does (one line) | UI path | Route | Permission | Key sub-features / tabs / form sections (exact labels) | Source files |
|---|---|---|---|---|---|---|---|
| SET-01 | System Settings page | Tabbed convention and organization settings | Housekeeping › System › Settings | `/housekeeping/system/settings/*` | SB+RT system:settings:update | Tabs: Convention, Terms, Links, Contact, Platform Info, Conventions, Payment Gateways, Hotels (`hotelsEnabled` + hotel:manage), Email Settings (email:templates), Note Categories (user:note:categories:manage) | `src/frontend/containers/housekeeping/settings/{index.tsx, settings.tsx}` |
| SET-02 | Convention tab | Logo, identity, venue and dates, event store, user options, danger zone | … › Settings › Convention | `/housekeeping/system/settings` | system:settings:update | Sections "Logo", "Event info", "Venue & dates", "Event store", "Users", info box "Looking for the Registration Form Editor?" → "Go to Registration Settings", "Danger zone". Fields in (b) | `src/frontend/containers/housekeeping/settings/{Convention.tsx, AbstractLiveSettings.tsx}` |
| SET-03 | Cancel a pending PII clear | Cancels a scheduled "nukeme" wipe (REG-23) | … › Settings › Convention › (red banner) › Cancel Request | same | staff:admin:update + pii:admin:read + pii:admin:delete + system:settings:update | Banner 'There is an active request to clear PII of accounts who selected "nukeme". PII will be cleared on {date}.' Modal "Cancel Request" → "Confirm Cancellation" | `src/frontend/containers/housekeeping/settings/Convention.tsx` |
| SET-04 | Terms tab | Policy texts, organization-wide or per convention | … › Settings › Terms | `…/settings/terms` | system:settings:update | Per policy: "Organization-wide Policy" / "Convention-specific Policy", "Create Organization-wide Policy", "Create Convention-specific Policy", "Save", "Delete". Warning "This policy is overridden by a convention-specific policy." → "I understand, but I want to edit this policy anyway." | `src/frontend/containers/housekeeping/settings/Terms.tsx` |
| SET-05 | Links tab | Custom links in the attendee sidebar | … › Settings › Links | `…/settings/links` | system:settings:update | Card "Menu Link" + green "+". Modal "Edit Entry": Name, URL, Icon ("Icon References"), Order, Type (Application / {convention name} / Event Store), Open in a new tab, Only show to users with a paid registration | `src/frontend/containers/housekeeping/settings/{MenuLinkSettings.tsx, CrudTable.tsx}` |
| SET-06 | Contact tab | Mailbox names for dealer, HR and registration "from" addresses | … › Settings › Contact | `…/settings/contact` | system:settings:update | "Dealers Email", "HR Email", "Registration Email" (part before @) → "Save" | `src/frontend/containers/housekeeping/settings/Contact.tsx` |
| SET-07 | Platform Info tab | Read-only ConCat platform fees | … › Settings › Platform Info | `…/settings/platform` | system:settings:update; data product:read | "Per Registration Platform Fee", "Other Product Platform Fee" | `src/frontend/containers/housekeeping/settings/PlatformInfoSettings.tsx` |
| SET-08 | Conventions tab | Lists conventions; creates a new one or next year's | … › Settings › Conventions › + ("Create a New Convention") | `…/settings/conventions` | system:settings:update | Columns Long Name, Short Name, Dates, Domain (status pill), "View". Modal "Create a New Convention" → "Create" (fields in (b)). Up to 20 per organization | `src/frontend/containers/housekeeping/settings/ConventionList.tsx`, `src/backend/app/server/routes/api/conventions/post.ts` |
| SET-09 | Connect Stripe | Connects the organization's Stripe Standard account | … › Settings › Payment Gateways › Connect to Stripe | `…/settings/payment-gateways` | system:settings:update | Badges "Status: Connected"/"Status: Disabled", "More information required". "Connect to Stripe" / "Open Stripe Connect", "Refresh". Flow in (c) | `src/frontend/containers/housekeeping/settings/ExternalPaymentSettings.tsx`, `src/backend/app/server/routes/api/pay/config.ts`, `src/backend/app/services/payments/gateways/Stripe.ts` |
| SET-10 | PagSeguro Checkout | Optional PagSeguro (Brazil) credentials | … › Settings › Payment Gateways › PagSeguro Checkout | same | system:settings:update | "Add Token": "Hostname", "Token" → "Save"; "Remove Credentials" | same |
| SET-11 | Hotels tab | Opens or closes hotel reservations; connects Passkey or MeetingMax | … › Settings › Hotels | `…/settings/hotel` | tab `hotelsEnabled` + hotel:manage; route system:settings:update | "Hotel Settings": "Open Hotels" → "Save". "Hotel Integration Management": "Connect to Passkey" (Name, Allow Group Bookings, Passkey Event ID; "Save Callback URL" modal) or "Connect to MeetingMax" (Name, Allow Group Bookings, MeetingMax Event ID, MeetingMax API Key, MeetingMax System Identifier). Then sync status, "Disable"/"Enable", "Delete" | `src/frontend/containers/housekeeping/settings/HotelSettings.tsx` |
| SET-12 | Email sending domain | Custom SES sending domain (DKIM CNAMEs) for the organization or a convention | … › Settings › Email Settings › Configure a Domain | `…/settings/emails` | tab email:templates; section system:settings:update | "Configure a Domain", "Set for Organization"/"Set for Convention", "Clear", "View Documentation", "Download CSV", "Cancel", "Verify". Flow in (c) | `src/frontend/containers/housekeeping/settings/emails/{EmailSettings.tsx, EmailDomain.tsx}`, `src/backend/app/services/EmailDomainService.ts` |
| SET-13 | Mass-email senders | Mailbox names offered in Mass Email "From Address" | … › Email Settings › Email Senders for Mass Email | same | system:settings:update | "Enter a new sender..." → ✓; trash. "These will **NOT** affect automated emails." | `src/frontend/containers/housekeeping/settings/emails/EmailSenders.tsx` |
| SET-14 | Email templates | Override, disable or reactivate the 33 system emails | … › Email Settings › Email Templates › Modify | `…/settings/emails/templates/:templateName` | email:templates | Badges Default / Overridden / Disabled; "Modify". Editor in (c) | `src/frontend/containers/housekeeping/settings/emails/templates/*`, `src/backend/app/services/templates/*` |
| SET-15 | Note Categories tab | Categories for user notes, including restricted HR ones | … › Settings › Note Categories › Create New Category | `…/settings/notecategories` | user:note:categories:manage (+ page system:settings:update) | Header "User Note Category Settings". Modal "New Category"/"Edit Category": "Category Name", "Category Display Name (Optional)", "Mark category as restricted.", "Category Icon", "Category Icon Color", "Icon Preview" → "Submit". "Delete Category" with "Delete all notes?" | `src/frontend/containers/housekeeping/settings/notecategories/index.tsx` |

## 8. Outside Housekeeping: Onboarding (ONB) and Ops (OPS)

**Onboarding** runs only on `onboarding.concat.app` (`src/frontend/OnboardingApp.tsx`, `src/frontend/containers/onboarding/`). It is the self-serve trial path that starts from this docs site's `/trial` page.

**Ops** runs only on `ops.concat.app` (`src/frontend/OpsApp.tsx`, `src/frontend/containers/ops/`). It is for **ConCat staff only**: SAML sign-in with concat.systems or concat.app accounts. Customers never see it. It is listed here because several settings customers will ask about are Ops-only.

| ID | Feature | What it does (one line) | UI path | Route | Permission | Key sub-features (exact labels) | Source files |
|---|---|---|---|---|---|---|---|
| ONB-01 | Trial intake | concat.app/trial creates a signup and emails a confirmation link | concat.app/trial (this docs repo `src/pages/trial.tsx`) | `POST onboarding.concat.app/api/signups` | none; reCAPTCHA; origin concat.app; 10 signups/day; 3 emails/address/day | Email "Confirm your email to start your ConCat trial" (valid 7 days, single use), or "You already have a ConCat trial" | `src/backend/app/server/routes/api/signups.ts`, `src/backend/app/services/SignupService.ts`, `src/shared/signup.ts` |
| ONB-02 | Set password | Confirms the email and sets the admin password; starts provisioning | onboarding.concat.app › confirm link | `/confirm/:token` | token + reCAPTCHA | Card "Email confirmed": "Email" (read-only), "Password", "Confirm Password" → "Set password & create my instance". Capacity alert "We've reached today's limit for new trial instances…" | `src/frontend/containers/onboarding/SignupConfirm.tsx` |
| ONB-03 | Provisioning status and handoff | Shows progress, then signs in on the new instance at `/housekeeping` | onboarding.concat.app › status | `/status` | status cookie | Steps "Email confirmed", "Password set", "Reserve address", "Create instance", "Apply trial settings", "Sign you in". Cards "This usually takes about a minute" / "Your instance is ready" ("Signing you in…") / "We hit a snag" ("Reference: …"). "Your address": `adjective-animal-NNNN.concat.app` | `src/frontend/containers/onboarding/SignupStatus.tsx`, `src/backend/app/services/tasks/ProvisionOrganizationTask.ts` |
| ONB-04 | Onboarding dead ends | Expired link, or no signup in progress | onboarding.concat.app | `/confirm/:token`, `*` | none | "This link is no longer valid", "No trial setup in progress" → "Request a new trial" | `src/frontend/containers/onboarding/SignupMessages.tsx` |
| ONB-05 | Trial banner | Yellow banner on every page of a trial instance | all pages | — | — | "**Trial instance.** This trial ends on {date}." (signup + 30 days). Nothing else enforces the end date | `src/frontend/components/TrialBanner.tsx` |
| OPS-01 | Ops sign-in and shell | Staff-only console | ops.concat.app | `/login`, `/logout` | SAML (concat.systems / concat.app) | Sidebar "ConCat Ops", "Your roles", "Ops Dashboard", "Customer management" › "Organizations", "Developer tools" › "Tasks" | `src/frontend/OpsApp.tsx`, `src/frontend/containers/ops/{login.tsx, logout.tsx}` |
| OPS-02 | Ops dashboard | Header only, no content | ConCat Ops › Ops Dashboard | `/` | any agent | — | `src/frontend/containers/ops/dashboard.tsx` |
| OPS-03 | Organizations | Lists and creates organizations (seeds default policies, roles, surcharges, note categories) | ConCat Ops › Organizations › New organization | `/organizations` | any agent | Columns id, Name, Maintenance mode, Active convention, Created at | `src/frontend/containers/ops/customer-list/{ListOrganizations.tsx, CreateOrganizationModal.tsx}` |
| OPS-04 | Organization detail (Ops-only settings) | Settings customers cannot change themselves | ConCat Ops › Organizations › {org} › Details / Conventions | `/organizations/:id/*` | any agent | General: Name, Currency (usd, nok, cad, aud, jpy, hkd, brl, gbp, myr), Country, Active convention, Remaining identity verifications. Email: Email senders. Features: Social links, Maintenance mode, Enable Afterpay, Allow SQLite export, Allow editing registration email template, Force export PII, Banned words | `src/frontend/containers/ops/customer-list/{OrganizationForm.tsx, ViewOrganization.tsx}`, `src/shared/ops.ts` |
| OPS-05 | Support login | Staff enter a customer instance; the reason goes to the customer's audit log | Ops › Organizations › {org} › Conventions › Login as support | `POST /api/ops/conventions/{id}/login` | Support or Developers SAML group | Modal "Login as support — {convention}": "Reason" (min 10 chars). In the instance: banner "Logged in as ConCat Support" → "End session"; audit entries shown pink | `src/frontend/components/ops/SupportLoginButton.tsx`, `src/frontend/components/SupportAgentBanner.tsx` |
| OPS-06 | Tasks | Background task console | Ops › Tasks | `/tasks` | any agent | Filters Status, From, To → "Apply filters"; Details, Reschedule, Cancel task, Requeue | `src/frontend/containers/ops/tasks/*` |

---

## (a) Present but unreachable, flagged or dev-only

### (a1) Features behind a toggle

Unless the row says otherwise, the toggle is a convention setting.

| Flag (field) | UI label and where it is set | Effect when on or off |
|---|---|---|
| `hotelsEnabled` | **No customer UI.** Set only via `PATCH /api/conventions/{id}`, seed data or ConCat staff. | Off hides the *Module Management* › Hotel Management sidebar item (HTL-01 to HTL-07; routes redirect to `/housekeeping`), the System › Settings › Hotels tab (SET-11), the profile hotel row, and attendee hotel pages. Treat Hotels as a support-enabled feature. |
| `disableQuikTicket` | Registration › Settings › Kiosk › "Disable QuikTicket" | On hides Attendees › Devices (DEV-01 to DEV-03). |
| `enableNfcBadges` | Registration › Settings › General › "Enable NFC Badges" | On shows NFC Tag Interfaces and Program & Print buttons in the Cashier UI (CSH-05, CSH-11); label printing then depends on NFC programming. |
| `cashierCheckIn` | Registration › Settings › Cashier UI › "Disable badge prints and check-in users instead" | Cashier shows Check-in Registration instead of printing (CSH-12). |
| `forceReprintReason` | Registration › Settings › Cashier UI › "Force Badge Re-Print reason" | Makes the reprint reason required (CSH-10). |
| `disableRefunds` | Registration › Settings › General › "Disable refunds" (+ message) | Blocks **attendee** refund requests only; admin refunds still work. |
| `enableEventStore`, `hideEventStoreAllProducts` | System › Settings › Convention › Event store › "Enable Event Store", "Event Store: Hide 'All Products' Tab" | Attendee store visibility. Products still exist in Housekeeping. |
| `enableVolunteers` | Volunteers › Volunteer Settings › General › "Enable Volunteers" | Hides only the public volunteer application. **Housekeeping › Volunteers stays reachable.** |
| `enableDealers` | Dealers › Dealer Settings › General › "Enable Dealers Module" | Hides only the public dealer application. **Housekeeping › Dealers stays reachable.** |
| `volunteerEmailEnabled` | Volunteer Settings › General › "Enable Volunteer Emails" | Sends the application-confirmation, assignment and remove-staff emails. |
| `allowParentsToVolunteer`, `volunteersRequireEmergencyContact` | Volunteer Settings › General › "Allow Parents to Volunteer", "Volunteers Require Emergency Contact" | Backend checks. |
| `forceDealerRegistration` | Dealer Settings › General › "Force Dealer Registration" | Enforced in the cart. |
| `maxChildren` (**Deprecated**) | Registration › Settings › Minimum Age and Children › "Max Child Registration" (shown only when non-zero) | Legacy child badges. Also gates Cashier "Child Badges" (CSH-15). Replaced by Sub-accounts (REG-04). |
| `limitAttendees` (**Deprecated**) | Registration › Settings › General › "Limit attendance count" (read-only, shown only if set) | Cannot be set from the UI. |
| `cartTimeout` (**Experimental**) | Registration › Settings › General › "Cart Timeout" | Cart expiry; "Timeout Override" order-item badge. |
| Attendee notice (**Experimental**) | Registration › Settings › Attendee Notice › "Show attendee notice" | Dashboard banner (REG-06). |
| `identityVerification` | **No customer UI** | When not `none`: dashboard identity cards (ATT-01) and the "Opt Out from Stripe Identity" policy on the Terms tab. |
| `registration:form:manage` (permission) | — | Without it, the Registration › Settings "Form Editor" card is not rendered. |
| `kioskPaymentsEnabled`, `kioskTimeout` | Registration › Settings › Kiosk | Apply only to the public `/kiosk` route, which nothing in Housekeeping links to (open it by URL). |
| Config `pagSeguroEnabled` (server config) | — | Shows the "PagSeguro Checkouts" card on order detail (STO-30). |
| Organization `forceExportPii` (**Ops-only**) | Ops › Organization › Features › "Force export PII" | Hides the PII request workflow (SYS-05, SYS-06) and always offers the user export. |
| Organization "Allow editing registration email template" (**Ops-only**) | Ops › Organization › Features | Otherwise the `register` template shows "To modify this template, contact support." |
| Organization currency, country, Afterpay, SQLite export, organization maintenance mode, organization banned words, social links, identity-verification count, Stripe test flag (**Ops-only**) | ConCat Ops › Organizations › {org} | Customers cannot change these; they must contact support. |
| Organization `trialEndsAt` | set by onboarding | Shows only the trial banner (ONB-05). **No enforcement and no "upgrade to paid" gate.** |

### (a2) Code present but not reachable, or dev-only

- **`/housekeeping/system/export/block`** (ExportBlock, SYS-08): no in-app link. It is reached only from the BLOCK link in the "Data Export Request" email.
- **Audit `LogDetailModal`** (`?view={uniqueId}`) and the `highlight` parameter: no UI sets them.
- **Dynamic Export `module="volunteer"`**: in the type, but no route uses it. The Volunteers module has no Dynamic Export.
- **Express Editor:**
  - The "Beta Feature" badge is hidden in all three editors (`hideBeta`).
  - Legacy node types `text` and `badgeName` are registered but appear in no toolbox.
  - Drag-to-trash (`TRASH_ID`) is a TODO stub with no drop target.
- **Cashier:**
  - The NFC Debug interface (`src/frontend/containers/cashier/nfc/nfcInterfaces/NFCDebug.tsx`) is only created from a saved `debug:` ID; the UI cannot add one.
  - "Add Test printer" is reachable but adds a fake printer.
- **Onboarding** `/dev/request` ("Request a trial (development only)") is routed in every environment, but only works in development.
- **Ops Dashboard** is an empty page. The "Testing Ops" string is unused.
- **Legacy redirects** for the old `/housekeeping/{products,options,orders,vouchers,surcharges,gatekeeping,settings,roles,developers,auditlog,dynamicexport,export,user/create}` paths carry a TODO dated 2026-09-21 to remove them. The Convention tab's "Looking for the Registration Form Editor?" notice is also marked temporary.
- **Deprecated in the UI:** At-Con Password Reset (ATT-08), Max Child Registration, Limit attendance count.
- **Defect:** System › Settings › Convention › Danger zone › "Enable rate limit" (`rateLimits`) **never saves**. The Save handler sends only `maintenanceMode` (`src/frontend/containers/housekeeping/settings/Convention.tsx`, around line 680).
- **Permissions with no admin grant path:**
  - `system:manage:devices`, `payment:read` and `user:delete` are used by backend routes but are missing from the seeded catalogue. They are granted only through owner scope, i.e. a user acting on their own devices, payments or account. Admins cannot use those endpoints on other users, and the permissions do not appear in Roles.
  - `system:devices:manage` is seeded but in **no default role, not even `admin`**. DEV-03 needs an explicit grant.
  - `vendor:stats` is not used anywhere in the UI or API.
  - `order:manage` is used only as an OAuth application scope.

### (a3) Gate mismatches docs should account for

| Page or action | Sidebar | Route | API / real gate | Docs impact |
|---|---|---|---|---|
| Attendees › Dashboard data | system:login | system:login | registration:stats | Without it the page shows "No Stats Available". |
| Attendees › Fee Management | fee:read | system:login | fee:create / fee:delete | The Create Fee form is visible to anyone who opens the page. |
| Registration › Dashboard | system:login | none | registration:stats | |
| Registration › Settings | system:settings:update | none | system:settings:update; Attendee Notice also needs registration:update | |
| Registration › Badge Products | product:read | none | product:read / product:manage | |
| Registration › Options | product:manage | product:read | product:manage | |
| Registration › Badge Designer | system:badgedesign:update | system:badgedesign:read | update for saves | Read-only users can open the editor, but saving fails. |
| Store › Store Products / Options / Surcharges | product:read / product:manage | system:login | product:* | |
| Store › Gatekeeping new and edit | raffle:manage (list) | system:login | raffle:manage | |
| Volunteers › Mass Email | massemail | none | massemail or vendor:massemail | |
| Volunteers › Volunteer Stats | volunteer:admin | none | volunteer:read | |
| Volunteers › Clear requests | shown with volunteer:read | — | volunteer:update | |
| Dealers › Options | vendor:update | none | vendor:update | |
| Dealers › edit pencils | shown with vendor:read | — | vendor:update | |
| Dealers › Areas › Delete | vendor:update | vendor:update | **staff:admin:update** | |
| Dealer Policy save | vendor:update | vendor:update | **system:settings:update** | |
| Volunteer, Dealer and Registration "Export Data" buttons | module gate | — | **system:export** | |
| Express Editor routes | — | system:login | registration:form:manage / vendor:update / volunteer:admin | |
| System › User Creation | user:create | system:login | user:create | |
| System › Developers | webhook:manage or oauth:manage | either | per tab | With only oauth:manage the page opens on Webhooks, which shows "access denied"; click **OAuth Applications**. |
| System › Roles | isRoleManager or system:permission:read | logged in | per tab | The default `hr` role has user:roles:update but not system:permission:read, so HR assigns roles from the profile Roles tab. |
| System › Settings › Hotels | tab: hotelsEnabled + hotel:manage | system:settings:update | | |
| System › Settings › Email Settings | tab: email:templates | page: system:settings:update | | A user with only email:templates cannot reach it. |
| Product, price, image, addon, discount and option buttons | not permission-hidden | — | product:manage / product:discount:manage | |

### (a4) Copy and label issues that affect how-to text

- **Stale paths in the app's own text:**
  - The default policy text says "Go to Housekeeping > Settings > Terms". The real path is Housekeeping › System › Settings › Terms.
  - The Cashier check-in notice says "Housekeeping -> Settings -> Registration". The real path is Housekeeping › Registration › Settings › Cashier UI.
- **Misleading labels:**
  - The Cashier station toggle meaning "require an ID scan" is labelled "No ID barcode has been scanned."
  - The Convention tab field is labelled "Convention Long Type" (it holds the long name).
  - The Platform Info help on "Per Registration Platform Fee" describes non-registration fees.
  - Surcharge "View / Edit Details" has no edit form, and its "Created" row shows "Exclusive" instead of a date.
- **Reused texts:** the product delete confirm reuses the option text "Data for this option from users will be erased.", and so does the OAuth app delete confirm.
- **Raw or untranslated values shown to users:**
  - Dynamic Export field checkboxes show raw IDs (`bornAt`, `addressLine1`).
  - Webhook events are raw IDs.
  - Dealer statuses are raw lowercase ("approved"); "(Paid)" is hard-coded English.
  - Mass Email optgroups are raw keys (`newsletter`, `paidAttendees`, `volunteers`).
  - The Roles-tab buttons "Convention"/"Global" are untranslated.
  - Role names are untranslated.
- **Spelling inconsistency:** the order filter says "Cancelled" but the badge says "Canceled".
- **Misleading behaviour:** the Gatekeeping "Run Raffle Draw" is **not random**; the admin picks the winners, and no email is sent.
- **Features docs should not promise:**
  - Mass Email: no scheduling, test send or history.
  - Webhooks: no edit, no delivery log, and Delete has no confirmation.
  - OAuth apps: no secret rotation.
  - Dynamic Export: no saved presets, CSV/JSON only.
  - Dealers: no admin delete of a dealer application.
  - Volunteers: no shift or scheduling feature.
  - Store: no category rename and no product or category reorder.

---

## (b) Settings structure: tabs → sections → fields

### System › Settings (`/housekeeping/system/settings`, header "System Settings")

- **Convention** (each section has its own Save)
  - *Logo*
    - PNG upload ("Recommended width is 64px.")
    - **Save Logo**
  - *Event info* (toast "Event info saved")
    - "Convention Long Type" → `longName`
    - "Convention Short Name" (max 6 chars) → `shortName`
    - "Notification Prefix" → `notificationPrefix`
    - "Convention Legal Name" → `legalName`
    - "Convention Legal Type" → `legalType`
    - "Marketing URL" → `marketingUrl`
  - *Venue & dates*
    - "Venue Name" → `venue`
    - "Convention Timezone" → `timeZone`
    - "Convention Start Date" → `startAt`
    - "Convention End Date" → `endAt`
  - *Event store*
    - "Enable Event Store" → `enableEventStore`
    - "Event Store: Hide 'All Products' Tab" → `hideEventStoreAllProducts` (disabled unless the store is on)
  - *Users*
    - "Require e-mail confirmation before login." → `requireActivation`
    - "Show 'Returning Attendee' badge on the user profile." → `showReturningAttendeePill`
    - "Enable Attendees to Edit Order Options" → `enableAllOIOEdit`
  - Info box "Looking for the Registration Form Editor?" → **Go to Registration Settings**
  - *Danger zone*
    - "Enable rate limit" → `rateLimits` (**does not save**)
    - "Enable maintenance mode" → `maintenanceMode`
  - Red banner, while a "nukeme" PII clear is pending → **Cancel Request** (SET-03)
- **Terms**. Each policy has organization-wide and convention-specific versions (policy key in parentheses):
  - "Privacy terms" (`privacy`)
  - "Convention Policy / Terms & Conditions" (`terms`)
  - "Child Registration Error" (`childRegistrationError`)
  - "Minor Registration Warning" (`underageWarning`)
  - "Child Badge Terms" (`childBadgeTerms`)
  - "Registration Terms" (`conventionTerms`)
  - "Login Page Announcement" (`loginAnnouncement`)
  - "Hotel Reservation Policy" (`hotelReservationTerms`)
  - "Hotel Reservation Additional Info" (`hotelReservationAnnouncement`)
  - "Hotel Closed Message" (`hotelClosedError`)
  - "Parent agreement for child registration" (`childRegistrationTerms`)
  - "Opt Out from Stripe Identity" (`optOutIdentity`; only when identity verification is on)
  - Edited elsewhere: dealer terms (`vendor`) in Dealer Settings › Terms; volunteer terms (`volunteerTerms`) in Volunteer Settings › Terms.
- **Links**: CRUD table "Menu Link" with Name, URL, Icon, Order, Type (Application / {convention long name} / Event Store), Open in a new tab, Only show to users with a paid registration.
- **Contact**: Dealers Email, HR Email, Registration Email (mailbox part only) → Save.
- **Platform Info** (read-only): Per Registration Platform Fee, Other Product Platform Fee.
- **Conventions**
  - Table: Long Name, Short Name, Dates, Domain, View.
  - Modal "Create a New Convention", with Type of creation **Next Year** or **New Convention**:
    - *Next Year*:
      - "Select a Previous Convention"
      - "Domain Action": replace (the new convention takes the old domain and the old one moves) or new
      - Domain prefix (default `{year}.{domain}`)
      - 'Request to Clear "nukeme" PII of this convention.'
      - The Stripe connection is copied over.
    - *New Convention*: domain prefix + `.concat.app`.
  - Deprecation alerts appear when `maxChildren` or `limitAttendees` is in use.
- **Payment Gateways**
  - *Stripe Connect*: status badges, Connect to Stripe / Open Stripe Connect, Refresh.
  - *PagSeguro Checkout*: Hostname, Token → Save; Remove Credentials.
- **Hotels** (shown when `hotelsEnabled` + hotel:manage)
  - *Hotel Settings*: Open Hotels (`hotelsOpen`) → Save.
  - *Hotel Integration Management*: Connect to Passkey / Connect to MeetingMax (fields in SET-11).
- **Email Settings** (email:templates)
  - *Email Sending Domain* (Configure a Domain…)
  - *Email Senders for Mass Email*
  - *Email Templates* (list → Modify)
- **Note Categories** (user:note:categories:manage): category list → New Category / Edit Category / Delete Category.

### Registration › Settings (`/housekeeping/registration/settings`, header "Registration Settings")

A single page with no tabs. Each card has its own Save.

1. **General** ("Configure registration options and features.")
   - Enable Registration Transfers (`enableRegTransfer`)
   - Enable NFC Badges (`enableNfcBadges`)
   - Open Registration (`registrationOpen`)
   - Enable Registration QR Codes (`enableRegQR`)
   - Disable refunds (`disableRefunds`, checkbox + message)
   - [Limit attendance count, Deprecated, read-only] (`limitAttendees`)
   - Cart Timeout, Experimental (`cartTimeout`)
2. **Sub-accounts** ("Let one account register additional attendees, including children with no personal details.")
   - Max Sub-Accounts Registration (`maxSubAccounts`)
   - Allow PII-free child registration (`allowPiiFreeChildRegistration`)
   - Only allow child sub-accounts (`onlyChildSubAccounts`)
3. **Minimum Age and Children** ("Configure and specify age requirements for signup.")
   - [Max Child Registration, Deprecated] (`maxChildren`)
   - Child Age Threshold (`childAgeThreshold`)
   - Minor Age Threshold (`minorAgeThreshold`)
4. **Attendee Notice** ("Set a message to display to attendees at the top of their dashboard.")
   - Show attendee notice, Experimental → Title, Message, Date, Importance (Normal / High / Critical)
5. **Kiosk** ("Configure kiosk mode and payment settings.")
   - Disable QuikTicket (`disableQuikTicket`)
   - Allow Online Payments in Kiosk Mode (`kioskPaymentsEnabled`)
   - Kiosk mode timeout (`kioskTimeout`)
6. **Cashier UI** ("Configure cashier interface settings.")
   - Disable badge prints and check-in users instead (`cashierCheckIn`)
   - Force Badge Re-Print reason (`forceReprintReason`)
7. **Banned Words**: textarea, one word per line (`bannedWords`).
8. **Form Editor** (registration:form:manage only): Go to Registration Form Editor.
9. **Export Data**: CSV / JSON.

**System › Settings vs Registration › Settings.** Both pages write the same convention record, but **no field appears on both pages**. Three related settings are split between places:
- The age thresholds are in Registration, while the age-related policy texts are in System › Terms.
- Convention banned words are in Registration, while organization banned words are Ops-only.
- "Disable QuikTicket" sits in Registration but decides whether Attendees › Devices appears.

### Volunteers › Volunteer Settings (header "Volunteer Settings")

- **General**
  - *General*:
    - "Enable Volunteers" ("Hides the Volunteer applications option from users")
    - "Enable Volunteer Emails" ("Enable emails being sent out when users create an application or are assigned to a department.")
    - "Allow Parents to Volunteer" ("Allow users with child registrations (parents and guardians) to apply to volunteer.")
    - "Volunteers Require Emergency Contact" ("Volunteers will be required to enter an emergency contact when creating a registration.")
    - Save
  - *Export Data*: CSV, JSON.
  - *Form Editor*: Go to Volunteer Form Editor.
- **Department(s)**: CRUD table with Name, Email, Leads, "Show on public application form".
- **Terms**: "Volunteer Code of Conduct" → Save.

### Dealers › Dealer Settings (header "Dealer Settings")

- **General**
  - *General*:
    - "Enable Dealers Module" ("Enables / disables the dealers module.")
    - "Force Dealer Registration" ("Whether to force dealers to pay for convention registration alongside the table payment.")
    - "Dealers Email" (placeholder "dealers"; "Contact for dealer applications. This email will be used as the 'from' address for dealer applications.")
    - Save
  - *Export Data*: CSV, JSON.
  - *Form Editor*: Go to Dealer Form Editor.
- **Terms**: "Dealer Policy" (Organization-wide / Convention-specific).
- Related settings elsewhere:
  - Areas (DLR-09).
  - Table types and add-ons, including "Dealer assistant count limit" (DLR-10).
  - "Dealers Email" here and System › Settings › Contact › "Dealers Email" edit the same field (`emailFromOverride.dealers`).

### Settings with no customer UI

- `hotelsEnabled`, `identityVerification`, `registrationRequirePii`, `i18nOverrides`, `childSubLabel`.
- Ops-only organization settings (OPS-04): Currency, Country, Active convention, Remaining identity verifications, Email senders, Social links, organization Maintenance mode, Enable Afterpay, Allow SQLite export, Allow editing registration email template, Force export PII, Banned words, plus a hidden Stripe test flag.

---

## (c) Payment and email setup flows

### Stripe (the only card processor in the customer UI)

1. Housekeeping › System › Settings › **Payment Gateways**.
2. Under "Stripe Connect", click **Connect to Stripe**.
3. In the modal "Enable Stripe Connect", click **Yes, I want to enable Stripe Connect.**
4. The modal "Stripe Connect" shows "Your country code is:" and "Your currency is:", and warns you to contact ConCat Support if either is wrong. Click **Continue to Stripe**.
5. Complete Stripe's hosted onboarding. This creates a Stripe Standard account, which is always connected for the whole organization.
6. Stripe returns you to Payment Gateways. Check that it shows:
   - "Status: Connected" (or "Status: Disabled", plus "More information required" while Stripe still needs details)
   - "You are connected to Stripe Connect with ID …"
   - "This account is configured for all conventions."
7. If details are missing, use **Open Stripe Connect** to finish them, then **Refresh**.

**Notes for docs:**
- Country and currency are Ops-only. Trial organizations default to **USD** whatever country was entered, so non-US customers must ask support to change it **before** connecting.
- Without a gateway, checkout fails with "This Payment Gateway is not yet configured for use by the event. Please contact customer support."
- "Next Year" convention creation copies the Stripe connection.
- **There is no test, debug or sandbox mode in the customer UI.** A test flag exists in the database but only ConCat can set it; trials get no Stripe account.
- **There is no "upgrade to paid" gate.** Only the trial banner appears.

### PagSeguro (optional, Brazil)

Payment Gateways › PagSeguro Checkout › "Hostname", "Token" → **Save**. To remove it, use **Remove Credentials**.

### Taking payments without a processor (for completeness)

- **Cashier UI:** turn on Settings (gear) › "Enable payment acceptance", then use **Cash Payment** / **Card Payment**. This records a manual payment and charges nothing (CSH-08).
- **Order detail:** **Mark as Paid** › Write-off / Card / Cash / Voucher (STO-31).
- **Platform fees:** shown read-only on Settings › Platform Info. "Pass Platform Fee to Customer" is set per product.

### Email: sending domain and senders

There is no SMTP and no provider choice: all email goes through Amazon SES. The default sender is `{mailbox}@concat.app`.

1. Housekeeping › System › Settings › **Email Settings**. It shows "The domain is currently set to the default, concat.app."
2. Click **Configure a Domain**, enter "Domain", choose the scope (Organization or Convention), then **Submit**.
3. Add the CNAME records shown: `{token}._domainkey.{domain}` → `{token}.dkim.amazonses.com`.
   - **View Documentation** opens `concat.app/docs/guides/technical/cname`, which is `docs/guides/technical/cname.md` in this repo.
   - **Download CSV** exports the records.
4. Click **Verify**. On success the toast reads "Your domain was successfully validated."; if DNS is not ready yet, a "not validated yet" toast appears. **Cancel** → **Confirm** abandons the request.
5. Optionally use **Set for Convention** / **Set for Organization** to apply the domain to the other scope, or **Clear** to remove it.
6. Settings › **Contact**: set "Dealers Email", "HR Email" and "Registration Email" (mailbox names). Dealer Settings › "Dealers Email" edits the same field.
7. Email Settings › **Email Senders for Mass Email**: add mailbox names ("Enter a new sender..." → ✓). These names fill the Mass Email "From Address" list. Note: "These will NOT affect automated emails."

### Email templates

1. Email Settings › **Email Templates** › **Modify** on a template.
   - For `register`, the page instead shows "To modify this template, contact support." unless Ops has enabled "Allow editing registration email template".
2. The page shows three cards: "Default Template", "Level Convention Override" and "Level Organization Override". Click **Create Override** on the card for the level you want.
3. In the editor:
   - "Subject Override (optional)", a Handlebars body, a live "Preview", and "Available Variables" with examples. The help link goes to `concat.app/docs/guides/templates#variables`, which is `docs/guides/templates/templates.md` in this repo.
   - **Disable Template** appears only for templates that are not required.
   - **Submit** stays disabled while there is a "Parse Error" or an invalid variable.
4. There is **no test send and no reset button**. To return to the default, delete the override.

**The 33 templates** (\* = required, cannot be disabled):

| Group | Templates |
|---|---|
| Account and access | register\*, emailLogin\*, emailChange\*, requestChangeEmail\*, passwordChange\*, passwordReset\*, migrationConfirmation\*, undoAdmin |
| Orders and payments | paymentSuccess\*, disputeCreated\*, ticketIssued, registrationQR, forcedRegistration |
| Refunds | refundRequested\*, refundCompleted\*, refundDenied\* |
| Data export | exportRequest\*, exportRequestApproved\*, exportRequestRejected, exportRequestDeleted |
| Admin | clearPiiRequest\*, registerNewReview, massEmail\* |
| Volunteers and dealers | volunteerConfirm\*, volunteerAssignedToLead, volunteerAssignedToVolunteer, dealerAssistant\* |
| Hotel | hotelFCFSConfirmation\*, hotelGroupOpen\*, hotelRaffleConfirmation\*, hotelRaffleWinner\*, hotelRaffleLoser, hotelGuestRemoved |

---

## (d) Setup wizard or configuration checklist

- **There is no admin setup wizard or configuration checklist in Housekeeping.**
  - `src/frontend/containers/housekeeping/settings/settingstatus/` only renders the "Experimental" and "Deprecated" badges used on Registration › Settings: Cart Timeout and Show attendee notice are Experimental; Max Child Registration and Limit attendance count are Deprecated.
  - The Housekeeping dashboard (ATT-01) shows only counters, no setup prompts.
- **The only wizard UIs are:**
  - the attendee kiosk;
  - the Onboarding status page (ONB-03), with its six steps: "Email confirmed", "Password set", "Reserve address", "Create instance", "Apply trial settings", "Sign you in".
- **What onboarding provisions:**
  - an organization with defaults, the signup country, and **USD**;
  - a convention at `adjective-animal-NNNN.concat.app`;
  - an admin user with the global roles admin, hr, finance, dealersden, registration, staff and user;
  - a 30-day trial.
  - Emails sent: "Your ConCat trial instance is ready" to the customer, and "[NEW SIGNUP] {orgName}" to support.
  - The user then lands signed in at `/housekeeping`.
- **The only checklist is in this docs repo:** `docs/guides/convention_checklist.md`.
- **Suggested first-run order** for a Quickstart, derived from what must exist before other features work:
  1. System › Settings › Convention (identity, dates, timezone).
  2. Payment Gateways (Stripe), after asking support to fix the currency if needed.
  3. Email Settings domain, then Contact.
  4. Terms.
  5. Registration › Badge Products: create tiers.
  6. Registration › Badge Designer: create a design and **Set as default**. The Cashier needs it ("Cannot check-in as no badge design is configured…").
  7. Registration › Settings › Open Registration.
  8. Roles: invite staff.
  9. Optional: Volunteers (departments), Dealers (vendor product category → Areas → Products), Store.

---

## (e) Permission model and catalogue

**How access is decided:**
- `checkPermission` checks that the user holds every listed permission (or any one, with `matchAny`). **There is no superuser bypass.**
- Roles apply per convention or globally (convention 0).
- **Deny beats Allow** from any source: a role or a per-user override (profile › Permissions, ATT-17).
- The one parent/child rule: `vendor:read` is the parent of `vendor:massemail`, `vendor:stats` and `vendor:update`.
- ConCat support uses a "break-glass" login (OPS-05). It grants roles that expire with the session, and its actions are audited as support entries.

**Default roles** and their descriptions (from `src/backend/defaults/roles.ts`), with the permissions each grants (from `rolePermissions.ts`):

| Role | Description | Grants |
|---|---|---|
| admin | "Grants access to manage convention settings" | Everything in the catalogue below, except `system:devices:manage`, `order:manage`, `user:read`, `system:export:sqlite` and the OAuth consent scopes |
| hr | "Grants access to manage staff and volunteers" | audit:read, comp:create, massemail, ratelimit:bypass, user:note:\* (incl. read:hr), user:roles:update, volunteer:\* |
| finance | "Grants access to manage financial transactions" | comp:create, fee:create, fee:read, order:view, refund:create |
| registration | "Grants access to manage and register attendees" | admin:read:emergencycontacts, order:view, registration:cashier/child:delete/read/stats/update, ratelimit:bypass, system:badgedesign:read, system:nfc_token:\*, user:create, user:note:create/edit, user:pii:\*, user:update |
| productEditor | "Grants access to manage products and categories" | product:category:manage, product:discount:manage, product:manage, product:read |
| dealersden | "Grants access to view vendor information" | vendor:massemail, vendor:read, vendor:stats, vendor:update |
| hotel | "Manage hotel system and reservations" | hotel:manage, hotel:view |
| lead (internal) | "Grants access to department lead features (Used with other roles)" | massemail, user:pii:\*. Assigned automatically via Volunteer Settings › Department(s) › Leads |
| staff | "Identifies the user as a Staff Member" | system:staff, user:note:create, user:note:edit |
| staffAlumni | "Identifies the user as trusted former staff" | system:staffalumni |
| user | "Allows access to the Housekeeping system" | registration:read, system:login, system:maintenance, user:note:read, user:pii:firstName/lastName/preferredName/username |
| badgeValidator | "Allows the user to validate NFC badges" | system:nfc_token:password |
| roleManager (internal) | "Permits a user to manage a role they have been assigned to" | system:login, system:permission:read, user:pii:firstName/lastName/preferredName/username. Assigned automatically when a user is named a role manager |
| vendor | "Identifies the user as a Vendor" | system:vendor. Synced automatically from dealer applications |
| vendorApproved | "Identifies the user as an approved Vendor" | none. Synced automatically |
| dealerAssistant (internal) | "Assistant for Dealer who are approved" | none. Synced automatically |
| cashCarrier | "Identifies the user as trusted with large sums of money" | none |
| vip | "Identifies the user as a VIP" | none |

**Permission catalogue.** The description is the text shown in Roles › Permissions; roles listed are the default roles that grant it (from `src/backend/defaults/permissions.ts`).

- admin:read:emergencycontacts — Read other user's emergency contacts — admin, registration
- admin:ticket:read — Access all issued tickets — admin [OAuth scope]
- admin:ticket:scan — Mark issued tickets as scanned — admin [OAuth scope]
- asset:create / asset:delete / asset:list — Allows creating / deleting / listing assets — admin
- audit:read — Read audit history of any part of the system — admin, hr
- comp:create — Allows addition of compensation to account — admin, finance, hr
- con:read — Access your convention registration — OAuth consent scope only
- dashboard:read — Allows accessing the statistics dashboard — admin [OAuth scope]
- email:templates — Manage email templates — admin
- fee:create — Allows creation of new fees — admin, finance
- fee:delete — Allows removal of existing, unpaid fees — admin
- fee:read — Read only access to all fees — admin, finance
- hotel:manage — Manage hotel functions — admin, hotel
- hotel:view — View hotel functions — admin, hotel
- massemail — Allows using the mass email system — admin, hr, lead
- oauth:manage — Manage OAuth applications — admin
- order:delete — Allows deleting orders — admin
- order:fulfill — Allows marking an order as fulfilled — admin
- order:manage — Allows managing orders — none [OAuth app]
- order:view — Allows viewing order information — admin, finance, registration
- pii:address / pii:basic / pii:email / pii:phone / pii:finance:read — Access your physical address / basic personal information / email address / phone number / order history — OAuth consent scopes only
- pii:admin:delete — Allows deleting all users PII — admin
- pii:admin:read — Allows reading detailed user personal information — admin
- product:category:manage — Allows managing product categories — admin, productEditor
- product:discount:manage — Allows managing product discounts — admin, productEditor
- product:manage — Allows creating and updating products — admin, productEditor
- product:read — Allows viewing product information — admin, productEditor
- raffle:manage — Allows for managing raffles — admin
- ratelimit:bypass — Allows bypassing http API rate limits — admin, hr, registration
- refund:create — Allows creating refunds — admin, finance
- registration:cashier — Allows using the cash register — admin, registration
- registration:child:delete — Allows removing child registration records — admin, registration
- registration:form:manage — Manage the registration form — admin
- registration:read — Read only access to attendee registration — admin, registration, user
- registration:stats — Allows viewing registration stats — admin, registration
- registration:update — Allows updating attendee registration — admin, registration
- staff:admin:update — Allows adding and removing admins — admin
- staff:discourse:admin — Given admin permissions in the attached Discourse instance — admin
- system:badgeart:update — Allows management of convention badge art — admin
- system:badgedesign:read — Allows for reading badge designs, and the data to print them — admin, registration
- system:badgedesign:update — Allows to create and update badge designs for printing — admin
- system:devices:manage — Allows managing authorized QuikTicket devices — **no role**
- system:export — Allows bulk export user data — admin
- system:export:dynamic:full — Allows unfettered access to export any data from your event via the Dynamic Export system. DANGEROUS. — admin
- system:export:sqlite — Read user data — none [OAuth app]
- system:login — Allows access to housekeeping panel — admin, user, roleManager
- system:maintenance — Allows access to the system during maintenance — admin, user
- system:nfc_token:password — Read password for NFC badges — admin, registration, badgeValidator
- system:nfc_token:program — Program NFC badges — admin, registration
- system:permission:read — Read user and role permissions — admin, roleManager
- system:permission:update — Create, update delete roles and their permissions — admin
- system:settings:update — Allows management of core settings — admin
- system:staff — Marks the user as visible staff member — admin, staff
- system:staffalumni — Marks the user as visible trusted staff alumni — admin, staffAlumni
- system:vendor — Allows access to vendor specific features — admin, vendor
- user:create — Allows creating accounts via housekeeping — admin, registration
- user:note:categories:manage — Permission to read and edit all user note categories — admin
- user:note:create — Allows creation of new user profile notes — admin, hr, registration, staff
- user:note:delete — Allows removal of existing user profile notes — admin, hr
- user:note:edit — Permission to edit user profile notes — admin, hr, registration, staff
- user:note:read — Read only access to user profile notes — admin, hr, user
- user:note:read:hr — Read notes related to bans and restrictions — admin, hr
- user:pii:address / bornat / email / phone — Permission to read other's physical addresses / birth date / email addresses / phone numbers — admin, lead, registration
- user:pii:firstName / lastName / preferredName / username — Permission to read other's first names / last names / preferred names / usernames — admin, lead, registration, user, roleManager
- user:read — Read user data — none [OAuth app]
- user:roles:update — Allows updating user roles — admin, hr
- user:update — Allows updating attendee user information — admin, registration
- vendor:read — Read only access to all vendor applications — admin, dealersden (parent of the next three)
- vendor:massemail — Allows sending mass emails to vendors — admin, dealersden
- vendor:stats — Allows viewing vendor statistics — admin, dealersden (unused)
- vendor:update — Allows updating, approving, and rejecting vendor applications — admin, dealersden
- volunteer:admin — Allows managing volunteer settings — admin, hr
- volunteer:delete — Allows removal of volunteer applications — admin, hr
- volunteer:dept:hidden — Allows user to see hidden departments — admin, hr
- volunteer:read — Read only access to all volunteer applications — admin, hr
- volunteer:update — Allows updating and assigning volunteers — admin, hr
- webhook:manage — Allows viewing and editing webhooks — admin
- Used in code but not in the catalogue (owner scope only): system:manage:devices, payment:read, user:delete
