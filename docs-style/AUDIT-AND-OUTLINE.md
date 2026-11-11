# Audit and outline: ConCat docs

This document is the review gate before any new pages are written. It lists every user-facing feature on ConCat master and audits every existing page in `docs/` against master. It maps issue 3090 to master and checks the old unmerged docs branches. It ends with the proposed outline and the start of the testing inventory.

**Status:** awaiting approval. No pages have been written or changed for this step.

## Sources and method

- **Product source: ConCat `master` at `f4d531f`** (2026-11-04, "Merge pull request #3413 from ConventionCatCorp/develop"). On 2026-11-10, `git ls-remote` confirmed that the local copy matched the remote. I read master from a clean `git archive` extract. Nothing from `develop`, open PRs or issue plans counts as evidence that a feature exists.
- **Issue:** [ConventionCatCorp/ConCat#3090](https://github.com/ConventionCatCorp/ConCat/issues/3090), its body and the attached `concat-setup-wizard-mockup.html`, read with `gh`.
- **Docs:** this repo's working tree on `docs/textbook-guides` at `499f352`.
- **Method:**
  - Four read-only research passes over the master extract: admin features, attendee features, the guides audit and the API audit. Each pass cites master paths.
  - I then re-checked the claims this document leans on (Appendix B).
  - On-screen labels come from master's `src/shared/translations/en-US.json`. A convention can override any interface string (`i18nOverrides`), so a live site can differ. The labels here are the defaults.
- **Evidence files:** the research notes, with `path:line` citations, are committed next to this file:

  | File | Contents |
  | --- | --- |
  | [`audit/admin-features.md`](audit/admin-features.md) | Admin features, the settings structure, payment and email flows, and the permission catalogue |
  | [`audit/attendee-features.md`](audit/attendee-features.md) | Attendee and public features, system emails, and sub-accounts |
  | [`audit/guides-audit.md`](audit/guides-audit.md) | Per-page discrepancies for `docs/guides`, images, and three branches |
  | [`audit/api-audit.md`](audit/api-audit.md) | Per-endpoint discrepancies for `docs/api`, and three branches |

  Paths in those files are relative to the root of the ConCat repository.

## Summary

- **Master has 331 user-facing features.** That is 224 in Housekeeping, onboarding and Ops, plus 107 on the attendee and public side. Six of them are ConCat-staff-only Ops screens, which leaves 325 features for customer docs. The existing guides cover 86 of those.
- **The existing guides are mostly out of date, but nothing in them is wholly absent from master.**
  - Of the 22 guide pages, 2 are Accurate, 20 Need update and none is entirely Not in master.
  - The main cause is that master moved Housekeeping to a module menu (Attendees, Registration, Store Management, Volunteers, Dealers, System). Most guides still give the old top-level menu paths.
  - Of the 12 API pages, 1 is Accurate and 11 Need update. The API docs cover 12 of master's 20 public routes, and webhooks aren't documented at all.
- **Raffles exist on master, renamed.** The Raffles page was written in 2022. In 2023 raffles became **Store Management › Gatekeeping** ("silos"). In August 2026 the weights, ticket points and random draws were removed: organisers now pick the winners. See section 2.2.
- **Issue 3090's wizard and checklist are not on master.**
  - The issue was closed by PR #3404, which merged into `develop` on 2026-11-09, after master's last update.
  - Of the 22 functions the issue lists, 21 are on master and one is only partly there. Payment works, but the "upgrade to paid" gate and the locked debug mode don't exist.
  - So the Quickstart can follow 3090's order and document the screens master has today (decision D1).
- **Proposed outline:** 70 guide pages: the 22 existing ones (kept at their URLs) and 48 new ones. They sit in 12 sidebar groups: the 8 existing ones and 4 new ones. A five-page Quickstart follows 3090. The API section gets updated pages and three new endpoint pages, and webhooks pages return.
- **Testing inventory started:** `~/code/concat-docs-reference/docs-test-inventory.csv` has 397 rows, all *Not tested*. See section 6.
- **The local instance (`localhost:8082`) runs master.** The backend and database match `f4d531f`. The frontend dev server has been running since before the switch to master, so it should be restarted before screenshots. See section 7.
- **Issues for the platform team:** reading master turned up one possible security gap. Any user can approve the `admin:ticket:read` and `admin:ticket:scan` scopes for an OAuth app, because these scopes require no permission. There are also a few defects. See Appendix A.

## Decisions needed

| # | Question | Recommendation |
| --- | --- | --- |
| D1 | 3090's setup wizard and Housekeeping checklist aren't on master. Should the Quickstart be written now, or wait for the release? | **Write it now**, in 3090's order, against master's screens. Add a section on the wizard once PR #3404 reaches master. |
| D2 | Two additions to 3090's list (section 5.2). Chapter 0, *Start here*: trial sign-up and finding your way around Housekeeping, taken from step 0.1 of 3090's mockup. Two switch-on steps, without which the setup has no visible effect: **Open Registration** and **Enable Event Store**. | **Include them**, marked as additions to 3090. |
| D3 | Four new sidebar groups: Quickstart, Attendees, Hotels and System. The 8 existing groups keep their names and positions. | **Approve.** New groups use fractional positions, so no existing group moves. |
| D4 | Old pages whose titles no longer match the app (Raffles → Gatekeeping, Attendance Tiers → Badge products). Moving them changes URLs, and this site has no redirect plugin. | **Retitle in place and keep every existing URL.** The app links to three docs URLs; these must keep working (section 5.1). |
| D5 | `dealers/tickets.md` describes dealer-den tickets that master doesn't have. Ticketed products are a general feature. | **Document ticketed products on a new page,** `products/tickets.md`. Turn `dealers/tickets.md` into a short pointer, so its URL keeps working. |
| D6 | Hotels: no customer setting turns hotel booking on. ConCat does it (`hotelsEnabled`). | **Document it, last,** with a note to ask ConCat to turn it on. |
| D7 | Attendee-side features: requirement 2 says *all* functionality. | **Document them next to the admin feature they belong to,** for example `registration/registering.md` next to badge products. The account and homepage pages go under Attendees. |
| D8 | API reference: patch the hand-written endpoint pages, or generate them from master's OpenAPI spec, as `feat/openapi-docs` tried? | **Generate the endpoint pages** from the spec master serves at `/api/swagger.json`. The local instance runs master, so it can supply the spec. Keep hand-written pages for getting started, OAuth, scopes, errors and webhooks. This adds a dependency (`docusaurus-plugin-openapi-docs`), and its compatibility with Docusaurus 3.10 and React 19 is unverified. **Needs your OK before I add it.** |
| D9 | Platform issues found while reading master (Appendix A) | I don't touch ConCat or file issues. **Raise A1 with the platform team.** |

---

## 1. Feature inventory

Every feature an organizer, staff member, attendee, applicant or visitor can reach on master, with the files it lives in. **Planned page** links each feature to its place in the outline (section 5).

- **IDs:**
  - Admin IDs: ATT, CSH, DEV and HTL (the Attendees module), REG, EDT (form editor), STO (Store Management), VOL, DLR, SYS and SET (the System module), ONB (trial onboarding) and OPS (ConCat staff).
  - Attendee IDs: NAV, ACC, DASH, REGF, SUB, STORE, ORD, VAPP (volunteer application), DEAL, HOTEL, KIOSK, OAUTH and PLAT.
- **The Access column:**
  - For admin features it gives the permission, as master checks it. **SB** is the sidebar item, **RT** the route and **API** the server.
  - For attendee features it gives the conditions and settings that switch the feature on.
- **Detail:** the sub-features, tabs, form fields and exact labels for each row are in the two feature files under `audit/`.

### 1.1 Housekeeping (admin), onboarding and Ops


#### Attendees module (ATT, CSH, DEV, HTL): Dashboard, user search, user profile, notes, fees, refunds, mass email, statistics

| ID | Feature | Where | Access | Source files | Planned page |
| --- | --- | --- | --- | --- | --- |
| ATT-01 | Housekeeping dashboard | Housekeeping › Attendees › Dashboard | SB+RT system:login; data registration:stats (otherwise "No Stats Available") | `src/frontend/containers/housekeeping/home.tsx`, `src/frontend/components/UserListModal.tsx`, `src/backend/app/server/routes/api/stats.ts` | `registration/statistics.md` |
| ATT-02 | Search for a user | Housekeeping › Attendees › User Search | SB+RT system:login | `src/frontend/containers/housekeeping/attendee/{usersearch.tsx, searchUserFilterModal.tsx, utils.tsx}`, `src/frontend/components/AttendeeSearch.tsx` | `attendees/user-search.md` |
| ATT-03 | View a user profile | Housekeeping › Attendees › User Search › (result) | RT system:login; per-tab gates (ATT-14 to ATT-21) | `src/frontend/containers/housekeeping/attendee/{userprofile.tsx, usertab.tsx}` | `attendees/user-search.md` |
| ATT-04 | Edit personal details | …profile › Name › User Profile › Edit (pencil) | user:update | `src/frontend/containers/housekeeping/attendee/profileEditModal.tsx` | `attendees/user-accounts.md` |
| ATT-05 | Create or edit a registration | …profile › Name › Information › Registration › Edit (pencil) | registration:update + product:read | `src/frontend/containers/housekeeping/attendee/registrationEditModal.tsx` | `attendees/user-registrations.md` |
| ATT-06 | Remove payment, transfer or delete a registration | …› Edit Registration (footer) | as ATT-05 | same | `attendees/user-registrations.md` |
| ATT-07 | Let an unverified user log in | …profile › Name › Actions › Allow user to login | Actions card: registration:cashier or user:update; this button user:update | `src/frontend/containers/housekeeping/attendee/usertab.tsx` | `attendees/user-accounts.md` |
| ATT-08 | Reset a password | …› Actions › Send password reset email / At-Con Password Reset | user:update | same | `attendees/user-accounts.md` |
| ATT-09 | Reset 2FA | …› Actions › Reset 2FA | Actions card only | `src/frontend/containers/housekeeping/attendee/resetSecondFactorButton.tsx` | `attendees/user-accounts.md` |
| ATT-10 | Export one user's data | …› User Profile › Download (icon) | user:update + system:export | `src/frontend/containers/housekeeping/attendee/usertab.tsx` | `attendees/user-accounts.md` |
| ATT-11 | Request or cancel account deletion | …› User Profile › Delete (icon) | user:update + staff:admin:update + pii:admin:read + pii:admin:delete | same | `attendees/user-accounts.md` |
| ATT-12 | Complete an account review | …› Information › "Possible duplicate account with a ban" › ✓ | user:note:delete | same | `usernotes/usernotes.md` |
| ATT-13 | Create a dealer application for a user | …› Information › Dealer › Add (+) | row vendor:read; Add/Edit vendor:update | same | `dealers/managment.md` |
| ATT-14 | User notes on a profile | …profile › Notes | tab user:note:read or user:note:read:hr or system:login; add user:note:create; edit user:note:edit; delete user:note:delete | `src/frontend/containers/housekeeping/attendee/notestab.tsx`, `src/frontend/modules/notes/{addNoteForm.tsx, noteItem.tsx}` | `usernotes/usernotes.md` |
| ATT-15 | User orders | …profile › Orders | order:view | `src/frontend/containers/housekeeping/attendee/orderstab.tsx`, `src/frontend/components/OrderItemElement.tsx` | `attendees/user-registrations.md` |
| ATT-16 | Assign roles to a user | …profile › Roles | user:roles:update or role manager | `src/frontend/containers/housekeeping/attendee/rolestab.tsx` | `system/roles.md` |
| ATT-17 | Per-user permission overrides | …profile › Permissions | view system:permission:read; edit system:permission:update | `src/frontend/containers/housekeeping/attendee/permissionstab.tsx`, `src/frontend/containers/housekeeping/roles/PermissionList.tsx` | `system/roles.md` |
| ATT-18 | User's volunteer application | …profile › Volunteer | volunteer:read | `src/frontend/containers/housekeeping/attendee/volunteertab.tsx` | `volunteers/volunteers.md` |
| ATT-19 | User's dealer application | …profile › Dealer | vendor:read | `src/frontend/containers/housekeeping/attendee/dealertab.tsx` | `dealers/managment.md` |
| ATT-20 | Emergency contacts | …profile › Emergency Contacts | admin:read:emergencycontacts; registered users only | `src/frontend/containers/housekeeping/attendee/useremergencytab.tsx`, `src/frontend/components/PIIAccessWarning.tsx` | `attendees/user-accounts.md` |
| ATT-21 | User audit history | …profile › Audit | audit:read | `src/frontend/containers/housekeeping/attendee/auditlogs.tsx` | `attendees/user-accounts.md` |
| ATT-22 | Search notes across users; create a note | Housekeeping › Attendees › User Notes | SB+RT system:login; create user:note:create | `src/frontend/containers/housekeeping/attendee/usernotes/UserNotesComponent.tsx`, `src/frontend/modules/notes/*` | `usernotes/usernotes.md` |
| ATT-23 | Charge a user a fee | Housekeeping › Attendees › Fee Management (right card) | SB fee:read; RT system:login; API fee:create | `src/frontend/containers/housekeeping/attendee/{fees.tsx, createFee.tsx}` | `orders/fees.md` |
| ATT-24 | Review or delete fees | …Fee Management › (row) | list fee:read; delete fee:delete | `src/frontend/containers/housekeeping/attendee/fees.tsx` | `orders/fees.md` |
| ATT-25 | Refund request queue | Housekeeping › Attendees › Refund Requests | SB+RT+API refund:create | `src/frontend/containers/housekeeping/attendee/{refund.tsx, refundInfo.tsx}` | `orders/refunds.md` |
| ATT-26 | Approve a refund | …Refund Requests › (row) › Approve | refund:create | `src/frontend/modules/order/refund/{ApproveModal.tsx, RefundPaymentTable.tsx, RefundOrderItems.tsx}` | `orders/refunds.md` |
| ATT-27 | Reject a refund | …Refund Requests › (row) › Reject | refund:create | `src/frontend/modules/order/refund/RejectModal.tsx` | `orders/refunds.md` |
| ATT-28 | **Send a mass email (shared flow)** | Housekeeping › Attendees › Mass Email (also REG-12, VOL-12, DLR-11) | SB+RT massemail; API massemail or vendor:massemail | `src/frontend/containers/housekeeping/massemail/{index.tsx, form.tsx}`, `src/backend/app/server/routes/api/emails/*` | `attendees/mass-email.md` |
| ATT-29 | Mass email recipients: Attendees | …Attendees › Mass Email › Email Target | Attendees target registration:update + product:manage; Gatekeeping raffle:manage; Roles system:permission:read | `src/frontend/containers/housekeeping/massemail/attendee.tsx`, `src/backend/app/static/massMails.ts` | `attendees/mass-email.md` |
| ATT-30 | Mass email recipients: Registration | Housekeeping › Registration › Mass Email | massemail | `src/frontend/containers/housekeeping/massemail/registration.tsx` | `attendees/mass-email.md` |
| ATT-31 | Mass email recipients: Volunteers | Housekeeping › Volunteers › Mass Email | SB massemail; RT none | `src/frontend/containers/housekeeping/massemail/volunteer.tsx` | `attendees/mass-email.md` |
| ATT-32 | Mass email recipients: Dealers | Housekeeping › Dealers › Mass Email | vendor:massemail | `src/frontend/containers/housekeeping/massemail/dealer.tsx` | `attendees/mass-email.md` |
| ATT-33 | Event statistics: Sales | Housekeeping › Attendees › Event Statistics › Sales | SB+RT+API registration:stats | `src/frontend/modules/stats/{statistics.tsx, SalesStatistics.tsx, PaymentPieChart.tsx, Graph.tsx}` | `registration/statistics.md` |
| ATT-34 | Event statistics: Payouts | …Event Statistics › Payouts › (payout) | registration:stats | `src/frontend/modules/stats/PayoutsStatistics.tsx` | `registration/statistics.md` |
| ATT-35 | Event statistics: Options | …Event Statistics › Options | registration:stats | `src/frontend/modules/stats/OptionsStats.tsx` | `registration/statistics.md` |

#### Attendees module (ATT, CSH, DEV, HTL): Cashier UI: Registration Station (CSH)

| ID | Feature | Where | Access | Source files | Planned page |
| --- | --- | --- | --- | --- | --- |
| CSH-01 | Open the station; find an attendee | Housekeeping › Attendees › Cashier UI; also profile › Actions › Open Cashier Interface | SB+RT registration:cashier | `src/frontend/containers/cashier/{cashiercontainer.tsx, home.tsx, header.tsx, scanner.tsx}` | `registration/cashier/cashier.md` |
| CSH-02 | Set up Zebra badge printers | Cashier UI › Configure Devices › Available Badge Printers | registration:cashier | `src/frontend/containers/cashier/{printerModal.tsx, zebra/configure.tsx, zebra/ZebraPrinter.tsx}` | `registration/cashier/printers.md` |
| CSH-03 | Add a barcode scanner | Cashier UI › Configure Devices › Scanners | same | `src/frontend/containers/cashier/{printerModal.tsx, scanner.tsx}` | `registration/cashier/scanner.md` |
| CSH-04 | Add a receipt printer or cash drawer | Cashier UI › Configure Devices › Receipt Printers | same | `src/frontend/containers/cashier/printers/{ReceiptPrinter.tsx, PrinterContext.tsx}` | `registration/cashier/printers.md` |
| CSH-05 | Set up an NFC writer | Cashier UI › Configure Devices › NFC Tag Interfaces | only with `enableNfcBadges`; API system:nfc_token:program / :password | `src/frontend/containers/cashier/nfc/{configure.tsx, NFC.tsx, NFCProxy.tsx}` | `registration/cashier/nfc.md` |
| CSH-06 | Configure the registration station | Cashier UI › Settings (gear) | registration:cashier | `src/frontend/containers/cashier/{settingsModal.tsx, cashiercontext.tsx}` | `registration/cashier/cashier.md` |
| CSH-07 | Check an attendee in (status screen) | Cashier UI › (attendee) | registration:cashier | `src/frontend/containers/cashier/{profile.tsx, attendeeStatus.tsx, messages.tsx}` | `registration/cashier/cashier.md` |
| CSH-08 | Take payment at the register | Cashier UI › (attendee) › Payment of $X Required | API registration:cashier; station "Enable payment acceptance" | `src/frontend/containers/cashier/attendeeStatus.tsx`, `src/backend/app/server/routes/api/pay/gateways.ts` | `registration/cashier/cashier.md` |
| CSH-09 | Print a badge | Cashier UI › (attendee) › Print Badge | registration:cashier | `src/frontend/containers/cashier/{attendeeStatus.tsx, zebra/ZebraPrintButton.tsx, osprint/*}` | `registration/cashier/cashier.md` |
| CSH-10 | Reprint a badge with a reason | Cashier UI › (attendee) › Re-print Badge | registration:cashier | `src/frontend/containers/cashier/ReprintBadge.tsx` | `registration/cashier/cashier.md` |
| CSH-11 | Program, print or revoke an NFC badge | Cashier UI › (attendee) | `enableNfcBadges`; API system:nfc_token:* | `src/frontend/containers/cashier/nfc/{NfcPrintButton.tsx, NfcRevokeBadgeButton.tsx}` | `registration/cashier/nfc.md` |
| CSH-12 | Check in without printing | Cashier UI › (attendee) | `cashierCheckIn` | `src/frontend/containers/cashier/attendeeStatus.tsx` | `registration/cashier/cashier.md` |
| CSH-13 | Verify an attendee's ID | Cashier UI › (attendee) › scan ID | registration:cashier | `src/frontend/containers/cashier/{IDValidationModal.tsx, scanner.tsx}` | `registration/cashier/cashier.md` |
| CSH-14 | Attendee actions menu | Cashier UI › (attendee) › actions menu | personal details need user:update | `src/frontend/containers/cashier/{profile.tsx, attendeeInformation.tsx, PrintLogs.tsx}` | `registration/cashier/cashier.md` |
| CSH-15 | Add child badges | Cashier UI › (attendee) › Child Badges › Add new child badge | `maxChildren` > 0 and registered | `src/frontend/containers/cashier/profile.tsx`, `src/frontend/components/ChildRegistrations.tsx` | `registration/cashier/cashier.md` |
| CSH-16 | Hand out undelivered products | Cashier UI › (attendee) › Undelivered products | API order:fulfill | `src/frontend/modules/order/fulfillment/FulfillmentList.tsx` | `products/claimtickets.md` |

#### Attendees module (ATT, CSH, DEV, HTL): Devices (DEV)

| ID | Feature | Where | Access | Source files | Planned page |
| --- | --- | --- | --- | --- | --- |
| DEV-01 | List my authorised devices | Housekeeping › Attendees › Devices | SB+RT system:login; hidden when `disableQuikTicket` | `src/frontend/containers/housekeeping/devices/index.tsx` | `registration/cashier/devices.md` |
| DEV-02 | Authorise a new device | …Devices › Authorize New Device › Request Code | any of admin:ticket:scan, admin:ticket:read, system:devices:manage (else "You do not have permission to authorize a new device.") | `src/frontend/containers/housekeeping/devices/authorize.tsx`, `src/backend/app/server/routes/api/devices.ts` | `registration/cashier/devices.md` |
| DEV-03 | Authorise a device for another user | …Devices › Authorize New Device › Admin Authorize for User | system:devices:manage (no default role has it) | same | `registration/cashier/devices.md` |

#### Attendees module (ATT, CSH, DEV, HTL): Hotel Management (HTL)

| ID | Feature | Where | Access | Source files | Planned page |
| --- | --- | --- | --- | --- | --- |
| HTL-01 | Hotel dashboard | Housekeeping › Attendees › *Module Management* › Hotel Management › Home | SB+RT hotel:view or hotel:manage | `src/frontend/containers/housekeeping/hotel/{hotel.tsx, dashboard.tsx}` | `hotels/hotel-management.md` |
| HTL-02 | Hotels and room inventory | …Hotel Management › Hotels | hotel:view | `src/frontend/containers/housekeeping/hotel/hotels.tsx` | `hotels/hotel-management.md` |
| HTL-03 | Create a release group | …Hotel Management › Release Groups › Create Release Group | API hotel:manage (no UI gate); needs an integration | `src/frontend/containers/housekeeping/hotel/releasegroups/ReleaseGroupList.tsx` | `hotels/hotel-management.md` |
| HTL-04 | Edit a release group | …Release Groups › Edit | API hotel:manage | same | `hotels/hotel-management.md` |
| HTL-05 | Review release-group entries | …Release Groups › View Details | view hotel:view; delete hotel:manage | `src/frontend/containers/housekeeping/hotel/releasegroups/ReleaseGroupView.tsx` | `hotels/hotel-management.md` |
| HTL-06 | List reservations | …Hotel Management › Reservations | hotel:view | `src/frontend/containers/housekeeping/hotel/reservations.tsx` | `hotels/hotel-management.md` |
| HTL-07 | Manage a user's hotel entry | …Reservations › (user); profile › Hotel › Edit | hotel:view; actions hotel:manage | `src/frontend/containers/housekeeping/hotel/user.tsx` | `hotels/hotel-management.md` |

#### Registration module (REG)

| ID | Feature | Where | Access | Source files | Planned page |
| --- | --- | --- | --- | --- | --- |
| REG-01 | Registration dashboard | Housekeeping › Registration › Dashboard | SB system:login; RT none; API registration:stats (otherwise card "No Stats Available" / "You don't have access to view any statistics information.") | `src/frontend/containers/housekeeping/registration/dashboard.tsx`, `src/backend/app/server/routes/api/stats.ts` | `registration/statistics.md` |
| REG-02 | Registration statistics | Housekeeping › Registration › Registration Statistics › General / Cashier | SB+RT registration:stats; tab "Cashier" also needs registration:cashier | `src/frontend/containers/housekeeping/registration/statistics.tsx`, `src/frontend/modules/stats/{CashierStats.tsx, PaymentPieChart.tsx}` | `registration/statistics.md` |
| REG-03 | Open/close registration and general options | Housekeeping › Registration › Settings › General › Save | SB system:settings:update; RT none (logged in); API system:settings:update | `src/frontend/containers/housekeeping/registration/settings.tsx` | `registration/settings.md` |
| REG-04 | Sub-accounts | Housekeeping › Registration › Settings › Sub-accounts › Save | same as REG-03 | `src/frontend/containers/housekeeping/registration/SubAccountSection.tsx` | `registration/sub-accounts.md` |
| REG-05 | Age thresholds | Housekeeping › Registration › Settings › Minimum Age and Children › Save | same as REG-03 | `src/frontend/containers/housekeeping/registration/settings.tsx` | `registration/sub-accounts.md` |
| REG-06 | Attendee notice | Housekeeping › Registration › Settings › Attendee Notice › Save | page system:settings:update; API (announcements) registration:update | `src/frontend/containers/housekeeping/registration/settings.tsx`, `src/backend/app/server/routes/api/announcements.ts` | `registration/settings.md` |
| REG-07 | Kiosk and QuikTicket | Housekeeping › Registration › Settings › Kiosk › Save | same as REG-03 | `src/frontend/containers/housekeeping/registration/settings.tsx` | `registration/kiosk.md` |
| REG-08 | Cashier UI behaviour | Housekeeping › Registration › Settings › Cashier UI › Save | same as REG-03 | `src/frontend/containers/housekeeping/registration/settings.tsx` | `registration/cashier/cashier.md` |
| REG-09 | Banned words | Housekeeping › Registration › Settings › Banned Words › Save | same as REG-03 | `src/frontend/containers/housekeeping/registration/settings.tsx` | `registration/settings.md` |
| REG-10 | Open the registration form editor | Housekeeping › Registration › Settings › Form Editor › Go to Registration Form Editor | card only with registration:form:manage | `src/frontend/containers/housekeeping/registration/settings.tsx` | `registration/form-editor.md` |
| REG-11 | Export registration data | Housekeeping › Registration › Settings › Export Data › CSV / JSON | card always shown; API system:export | `src/frontend/containers/housekeeping/registration/settings.tsx`, `src/frontend/containers/housekeeping/export.tsx`, `src/backend/app/server/routes/api/export.ts` | `system/exports.md` |
| REG-12 | Registration mass email | Housekeeping › Registration › Mass Email | SB+RT massemail | `src/frontend/containers/housekeeping/massemail/{index.tsx, registration.tsx}` | `attendees/mass-email.md` |
| REG-13 | Registration dynamic export | Housekeeping › Registration › Dynamic Export | SB+RT system:export:dynamic:full | `src/frontend/containers/housekeeping/dynamic-export/index.tsx` | `system/exports.md` |
| REG-14 | Badge products list and create a badge tier | Housekeeping › Registration › Badge Products › Create New Product → "New Product" form → Create Product | SB product:read; RT none; API product:read or product:category:manage; create needs product:manage | `src/frontend/containers/housekeeping/registration/productwrapper.tsx`, `src/frontend/containers/housekeeping/products/category/{categoryInfo.tsx, categoryCreateProduct.tsx}`, `src/backend/app/server/routes/api/products/category/registration/get.ts` | `registration/attendance/attendance.md` |
| REG-15 | Badge product page and registration-only fields | Housekeeping › Registration › Badge Products › (product) › Product / Orders / Audit Logs | RT none; edits need product:manage (API); Audit Logs tab needs audit:read | `src/frontend/containers/housekeeping/products/productForm.tsx`, `src/frontend/containers/housekeeping/products/viewer/{viewer.tsx, upgradeinfo.tsx}` | `registration/attendance/attendance.md` |
| REG-16 | Options | Housekeeping › Registration › Options | SB product:manage; RT product:read; API product:manage | `src/frontend/containers/housekeeping/options/options.tsx` | `products/options.md` |
| REG-17 | Upload badge art | Housekeeping › Registration › Badge Art › "Choose or drop images to upload." | SB+RT asset:create + system:badgeart:update (both) | `src/frontend/containers/housekeeping/badgeArt.tsx`, `src/frontend/components/ImageUpload/ImageUpload.tsx`, `src/backend/app/server/routes/api/badgeArt.ts` | `registration/badge-art.md` |
| REG-18 | Limit or delete badge art | Housekeeping › Registration › Badge Art › (card) › Configure limit / delete icon | same as REG-17 | `src/frontend/containers/housekeeping/badgeArt.tsx` | `registration/badge-art.md` |
| REG-19 | Badge design list and default design | Housekeeping › Registration › Badge Designer | SB system:badgedesign:update; RT system:badgedesign:read; API list/get read, create/update/delete/default update | `src/frontend/containers/housekeeping/registration/badgedesignercontainer.tsx`, `src/frontend/containers/housekeeping/settings/badgedesigner/{designerrouter.tsx, list.tsx}`, `src/backend/app/server/routes/api/badge/designer.ts` | `registration/badge_designer.md` |
| REG-20 | Badge designer editor | Housekeeping › Registration › Badge Designer › + (New) or design name | same as REG-19 | `src/frontend/containers/housekeeping/settings/badgedesigner/{designer.tsx, SideBar.tsx, renderTree.tsx, DesignerNodeDetails.tsx, model.ts, font.tsx}`, `src/frontend/modules/badgerenderer/{BadgeRender.tsx, renderBadgesForPrint.tsx}`, `src/shared/user/badgeDesign.ts` | `registration/badge_designer.md` |
| REG-21 | Registration flags | Housekeeping › Registration › Registration Flags › + (Create) / Edit / Delete | SB+RT+API registration:update | `src/frontend/containers/housekeeping/registration/registrationflagscontainer.tsx`, `src/frontend/containers/housekeeping/settings/CrudTable.tsx`, `src/backend/app/server/routes/api/flag.ts` | `registration/flags.md` |
| REG-22 | Users with a flag | Housekeeping › Registration › Registration Flags › (row) › "List users" | registration:update | `src/frontend/containers/housekeeping/registration/registrationflagscontainer.tsx`, `src/frontend/components/UserListModal.tsx` | `registration/flags.md` |
| REG-23 | Request "nukeme" PII clear | Housekeeping › Registration › Registration Flags › (nukeme row) › group_off icon → Request to Clear PII | UI registration:update; API system:export; cancelling (SET-03) needs pii:admin:delete and others | `src/frontend/containers/housekeeping/registration/registrationflagscontainer.tsx`, `src/backend/app/server/routes/api/conventions/{id}/nuke.ts` | `registration/flags.md` |

#### Express Editor: form builder (EDT)

| ID | Feature | Where | Access | Source files | Planned page |
| --- | --- | --- | --- | --- | --- |
| EDT-01 | Editor layout | (entry via EDT-07/08/09) | RT system:login; the real gate is per form (below) | `src/frontend/containers/housekeeping/expressEditor/{expresseditorcontainer.tsx, EditorDragContext.tsx, toolbox.tsx, PageRenderer.tsx}` | `registration/form-editor.md` |
| EDT-02 | Manage sections | Form Editor › Add New Section; section header › pencil (Edit) → Save; "Half Width"/"Full Width"; Delete | same | `src/frontend/containers/housekeeping/expressEditor/PageRenderer.tsx` | `registration/form-editor.md` |
| EDT-03 | Add, move and remove elements | Toolbox › drag into a section; drag handle; Delete | same | `src/frontend/containers/housekeeping/expressEditor/{EditorDragContext.tsx, PageRenderer.tsx}` | `registration/form-editor.md` |
| EDT-04 | Edit element properties | (element) › Edit → "Update node: {name}" › Save / Cancel | same | `src/frontend/containers/housekeeping/expressEditor/{EditModal.tsx, elements/*}` | `registration/form-editor.md` |
| EDT-05 | Preview | Registration: View Preview / Back to Editor. Dealer and volunteer: always-on Preview pane | same | `src/frontend/containers/housekeeping/expressEditor/preview.tsx`, `src/frontend/modules/dynamicform/{PreviewSwitcher.tsx, registration/preview.tsx, dealer/preview.tsx, volunteer/preview.tsx}` | `registration/form-editor.md` |
| EDT-06 | Save and exit | Form Editor › Save Changes; back arrow → modal | per form | `src/frontend/containers/housekeeping/expressEditor/expresseditorcontainer.tsx`, `src/backend/app/server/routes/api/dynamicForm.ts` | `registration/form-editor.md` |
| EDT-07 | Registration form editor | Housekeeping › Registration › Settings › Form Editor › Go to Registration Form Editor | entry card and API registration:form:manage | `src/frontend/containers/housekeeping/expressEditor/{expresseditorcontainer.tsx, OptionContext.tsx}`, `src/backend/app/services/SeedService.registration.ts` | `registration/form-editor.md` |
| EDT-08 | Dealer application form editor | Housekeeping › Dealers › Dealer Settings › General › Form Editor › Go to Dealer Form Editor | entry under SB vendor:update; API PATCH vendor:update | `src/frontend/modules/dealer/{dealerForm.tsx, dealerSettings.tsx}`, `src/frontend/modules/dealer/form/{DealerPii.tsx, SimpleLinkedTerms.tsx}` | `dealers/settings.md` |
| EDT-09 | Volunteer application form editor | Housekeeping › Volunteers › Volunteer Settings › General › Form Editor › Go to Volunteer Form Editor | entry and API volunteer:admin | `src/frontend/containers/housekeeping/volunteers/{volunteerForm.tsx, settings/General.tsx}` | `volunteers/settings.md` |

#### Store Management module (STO): Products and categories

| ID | Feature | Where | Access | Source files | Planned page |
| --- | --- | --- | --- | --- | --- |
| STO-01 | Browse store categories | Housekeeping › Store Management › Store Products | SB product:read; RT system:login | `src/frontend/containers/housekeeping/products/{categories.tsx, categoryItem.tsx, CategoryBadges.tsx}` | `products/products.md` |
| STO-02 | Create category | … › Store Products › Create New Category | API product:category:manage | `src/frontend/containers/housekeeping/products/createCategory.tsx` | `products/products.md` |
| STO-03 | Hide or show a category | … › Store Products › (card) … › Hide Category / Show Category | API product:category:manage | `src/frontend/containers/housekeeping/products/categoryItem.tsx` | `products/products.md` |
| STO-04 | Delete a category | … › Store Products › (card) … › Delete Category | API product:category:manage | `src/frontend/containers/housekeeping/products/categoryItem.tsx` | `products/products.md` |
| STO-05 | Category surcharges | … › View Products › Category Surcharges | product:category:manage + product:manage | `src/frontend/containers/housekeeping/products/category/{categorySurcharges.tsx, assignCategorySurchargeModal.tsx, categorySurchargeItem.tsx}` | `products/surcharges.md` |
| STO-06 | Product list in a category | … › Store Products › View Products | RT system:login; API product:read or registration:update or vendor:update | `src/frontend/containers/housekeeping/products/category/{categoryView.tsx, categoryInfo.tsx}`, `src/frontend/containers/housekeeping/products/utils.tsx` | `products/products.md` |
| STO-07 | **Create a product (the product form)** | … › View Products › Create New Product | API product:manage | `src/frontend/containers/housekeeping/products/{productForm.tsx, createProduct.tsx}`, `src/frontend/containers/housekeeping/products/category/categoryCreateProduct.tsx` | `products/products.md` |
| STO-08 | Product page and edit info | … › View Products › (product) › Product Information › Edit (pencil) | RT system:login; API product:manage (buttons not hidden by permission) | `src/frontend/containers/housekeeping/products/viewer/{viewer.tsx, productinfo.tsx}` | `products/products.md` |
| STO-09 | Change price | … › (product) › Prices › Change Price | API product:manage | `src/frontend/containers/housekeeping/products/viewer/priceinfo.tsx` | `products/products.md` |
| STO-10 | Delete (archive) a product | … › (product) › Product Information › Delete (trash) | API product:manage | `src/frontend/containers/housekeeping/products/viewer/productinfo.tsx` | `products/products.md` |
| STO-11 | Product images | … › (product) › Product Images › + | API product:manage | `src/frontend/containers/housekeeping/products/viewer/imageEditor/*` | `products/productimages.md` |
| STO-12 | Addons | … › (product) › Addons › + | API product:manage | `src/frontend/containers/housekeeping/products/viewer/addoninfo.tsx` | `products/addons.md` |
| STO-13 | Discounts | … › (product) › Discounts › + | API product:discount:manage; role limit needs system:permission:read | `src/frontend/containers/housekeeping/products/viewer/discountinfo.tsx` | `products/discounts.md` |
| STO-14 | Upgrade paths (registration only) | Registration › Badge Products › (product) › Upgrade Paths › + | API product:manage | `src/frontend/containers/housekeeping/products/viewer/upgradeinfo.tsx` | `registration/attendance/attendance.md` |
| STO-15 | Assign options to a product | … › (product) › Options › + | API product:manage | `src/frontend/containers/housekeeping/products/viewer/productoptions.tsx` | `products/options.md` |
| STO-16 | Assign surcharges to a product | … › (product) › Surcharges › + | API product:manage | `src/frontend/containers/housekeeping/products/viewer/surchargeinfo.tsx` | `products/surcharges.md` |
| STO-17 | Clear unpaid orders | … › (product) › Actions › Clear unpaid orders? | UI+API product:manage | `src/frontend/containers/housekeeping/products/viewer/actions.tsx` | `products/products.md` |
| STO-18 | Product orders and history | … › (product) › Orders / Audit Logs | API order:view; audit:read | `src/frontend/containers/housekeeping/products/viewer/orders.tsx` | `products/products.md` |

#### Store Management module (STO): Options

| ID | Feature | Where | Access | Source files | Planned page |
| --- | --- | --- | --- | --- | --- |
| STO-19 | Options list | Housekeeping › Store Management › Options | SB product:manage; RT system:login; API product:manage | `src/frontend/containers/housekeeping/options/{options.tsx, utils.tsx}` | `products/options.md` |
| STO-20 | Create an option | … › Options › Create New Option | API product:manage | `src/frontend/containers/housekeeping/options/createOption.tsx`, `src/frontend/components/OptionEditor.tsx`, `src/frontend/components/optionEditorComponents/*`, `src/shared/options/index.ts` | `products/options.md` |
| STO-21 | Edit or delete an option | … › Options › (row) | API product:manage | `src/frontend/containers/housekeeping/options/optionElement.tsx` | `products/options.md` |

#### Store Management module (STO): Surcharges, vouchers, orders, gatekeeping

| ID | Feature | Where | Access | Source files | Planned page |
| --- | --- | --- | --- | --- | --- |
| STO-22 | List and create surcharges | Housekeeping › Store Management › Surcharges › Create New Surcharge | SB product:manage; RT system:login; API list product:read, create product:manage | `src/frontend/containers/housekeeping/surcharges/{index.tsx, surchargesList.tsx, surchargesListItem.tsx, CreateModal.tsx, SurchargeForm.tsx}` | `products/surcharges.md` |
| STO-23 | Surcharge detail: assign, unassign, delete | … › Surcharges › View / Edit Details | RT system:login; API product:manage | `src/frontend/containers/housekeeping/surcharges/{surchargeItem.tsx, AssignModal.tsx}` | `products/surcharges.md` |
| STO-24 | Voucher list | Housekeeping › Store Management › Vouchers | SB+RT+API comp:create | `src/frontend/containers/housekeeping/products/vouchers.tsx` | `products/vouchers.md` |
| STO-25 | Create a voucher | … › Vouchers › Create New Voucher | comp:create | same | `products/vouchers.md` |
| STO-26 | Voucher detail | … › Vouchers › (row) | comp:create; Audit tab needs audit:read | same | `products/vouchers.md` |
| STO-27 | Issue a voucher to users | … › (voucher) › Issue | comp:create | same | `products/vouchers.md` |
| STO-28 | Edit or delete a voucher | … › (voucher) › Edit | comp:create | same | `products/vouchers.md` |
| STO-29 | Order list | Housekeeping › Store Management › Orders | SB+RT+API order:view | `src/frontend/containers/housekeeping/attendee/orders/{orderList.tsx, components/OrderListItem.tsx, utils.ts}` | `orders/orders.md` |
| STO-30 | Order detail | … › Orders › (row) | order:view | `src/frontend/containers/housekeeping/attendee/orders/{orderInfo.tsx, components/*}` | `orders/orders.md` |
| STO-31 | Mark an order as paid | … › (order) › Mark as Paid | registration:cashier | `src/frontend/containers/housekeeping/attendee/orders/orderInfo.tsx` | `orders/orders.md` |
| STO-32 | Add or remove items on an unpaid order | … › (order) › Pending payment › + | registration:cashier | `src/frontend/containers/housekeeping/attendee/orders/orderAddProductModal.tsx`, `src/frontend/containers/cart/utils.tsx` | `orders/orders.md` |
| STO-33 | Cancel an order | … › (order) › Cancel Order | order:delete | `src/frontend/containers/housekeeping/attendee/orders/orderInfo.tsx` | `orders/orders.md` |
| STO-34 | Fulfill items | … › (order) › Mark as Fulfilled | order:fulfill | `src/frontend/containers/housekeeping/attendee/orders/orderFulfillModal.tsx` | `orders/orders.md` |
| STO-35 | Resend order confirmation | … › (order) › Resend Email | order:view | `src/frontend/containers/housekeeping/attendee/orders/orderInfo.tsx` | `orders/orders.md` |
| STO-36 | Refund an order or decide a refund request | … › (order) › Refund Order / Approve Refund / Reject Refund | refund:create | `src/frontend/modules/order/refund/{ApproveModal.tsx, RejectModal.tsx, RefundOrderItems.tsx, RefundPaymentTable.tsx}` | `orders/refunds.md` |
| STO-37 | Order comp voucher | … › (order) › Vouchers › + / − | comp:create | `src/frontend/containers/housekeeping/attendee/orders/{voucherModal.tsx, components/OrderVouchers.tsx}` | `products/vouchers.md` |
| STO-38 | Order item admin menu | … › (order) › (item) ⋯ | as listed | `src/frontend/containers/cart/utils.tsx` | `orders/orders.md` |
| STO-39 | Gatekeeping silo list | Housekeeping › Store Management › Gatekeeping | SB+RT+API raffle:manage | `src/frontend/containers/housekeeping/raffles/{list.tsx, raffleListItem.tsx}` | `registration/raffle.md` |
| STO-40 | Create a silo | … › Gatekeeping › Create New Silo | RT system:login; API raffle:manage | `src/frontend/containers/housekeeping/raffles/editor/{raffleEditor.tsx, productSelector.tsx, roleSelector.tsx}` | `registration/raffle.md` |
| STO-41 | Edit or delete a silo | … › Gatekeeping › Manage Silo | API raffle:manage | `src/frontend/containers/housekeeping/raffles/editor/raffleEditor.tsx` | `registration/raffle.md` |
| STO-42 | Silo entrants | … › Manage Silo › Entrants | raffle:manage | `src/frontend/containers/housekeeping/raffles/editor/raffleEntrants.tsx` | `registration/raffle.md` |
| STO-43 | Silo wording | … › Manage Silo › Wording | raffle:manage | `src/frontend/containers/housekeeping/raffles/editor/RaffleTextEdit.tsx` | `registration/raffle.md` |
| STO-44 | Run a draw | … › Manage Silo › Run | API raffle:manage | `src/frontend/containers/housekeeping/raffles/editor/runRaffle.tsx`, `src/backend/app/services/RaffleService.ts` | `registration/raffle.md` |

#### Volunteers module (VOL)

| ID | Feature | Where | Access | Source files | Planned page |
| --- | --- | --- | --- | --- | --- |
| VOL-01 | Volunteer dashboard | Housekeeping › Volunteers › Dashboard | SB+RT+API volunteer:read | `src/frontend/containers/housekeeping/volunteers/dashboard.tsx` | `volunteers/volunteers.md` |
| VOL-02 | Browse and filter applications | Housekeeping › Volunteers › Applications | SB+RT volunteer:read | `src/frontend/containers/housekeeping/volunteers/{volunteers.tsx, columns.tsx, utils.tsx}` | `volunteers/volunteers.md` |
| VOL-03 | View a volunteer application | … › Applications › (row) | volunteer:read | `src/frontend/containers/housekeeping/volunteers/{volunteerInfo.tsx, components/ApplicationSummary.tsx}` | `volunteers/volunteers.md` |
| VOL-04 | Edit an application answer | … › (row) › Application Answers › pencil (Edit) | API volunteer:update (pencil not gated) | `src/frontend/containers/housekeeping/volunteers/VolunteerAvailability.tsx` (component `VolunteerOptions`) | `volunteers/volunteers.md` |
| VOL-05 | Assign or unassign departments | … › (row) › Assign | buttons disabled without volunteer:update | `src/frontend/containers/housekeeping/volunteers/components/VolunteerAssign.tsx`, `src/backend/app/services/VolunteerService.ts` | `volunteers/volunteers.md` |
| VOL-06 | Make Staff | … › (row) › Make Staff | volunteer:update | `src/frontend/containers/housekeeping/volunteers/components/MakeStaffModal.tsx` | `volunteers/volunteers.md` |
| VOL-07 | Remove Staff | … › (staff row) › Remove Staff | volunteer:update + refund:create | `src/frontend/containers/housekeeping/volunteers/components/RemoveStaffModal.tsx` | `volunteers/volunteers.md` |
| VOL-08 | Clear department requests | … › (row) › … › Clear requests | shown with volunteer:read; API volunteer:update | `src/frontend/containers/housekeeping/volunteers/volunteerInfo.tsx` | `volunteers/volunteers.md` |
| VOL-09 | Delete an application | … › (row) › … › Delete Application | volunteer:delete | same | `volunteers/volunteers.md` |
| VOL-10 | Previous years | … › (row) › Previous years | volunteer:read | same | `volunteers/volunteers.md` |
| VOL-11 | Department lead view | Housekeeping › Volunteers › My Department(s); also main sidebar › My Department(s) | SB isDepartmentLead; RT none; API grants leads volunteer:read for these endpoints | `src/frontend/containers/housekeeping/volunteers/{mydepartment.tsx, components/VolunteerRequests.tsx}`, `src/backend/app/server/plugins/grantLeadScope.ts` | `volunteers/departments.md` |
| VOL-12 | Volunteer mass email | Housekeeping › Volunteers › Mass Email | SB massemail; **RT none**; API massemail or vendor:massemail | `src/frontend/containers/housekeeping/massemail/volunteer.tsx` | `attendees/mass-email.md` |
| VOL-13 | Volunteer statistics | Housekeeping › Volunteers › Volunteer Stats | SB volunteer:admin; **RT none**; API volunteer:read | `src/frontend/containers/housekeeping/volunteers/VolunteerStats.tsx` | `volunteers/settings.md` |
| VOL-14 | Volunteer custom questions (Options) | Housekeeping › Volunteers › Options › Create New Option | SB+RT+API volunteer:update | `src/frontend/containers/housekeeping/options/options.tsx`, `src/shared/options/index.ts` | `volunteers/settings.md` |
| VOL-15 | Volunteer general settings | Housekeeping › Volunteers › Volunteer Settings › General | SB+RT+API volunteer:admin | `src/frontend/containers/housekeeping/volunteers/settings/{VolunteerSettings.tsx, General.tsx}` | `volunteers/settings.md` |
| VOL-16 | Export volunteer data | … › Volunteer Settings › General › Export Data › CSV / JSON | page volunteer:admin; **API system:export** | `src/frontend/containers/housekeeping/volunteers/settings/General.tsx`, `src/backend/app/server/routes/api/export.ts` | `system/exports.md` |
| VOL-17 | Manage departments and leads | … › Volunteer Settings › Department(s) › + (Create) / Edit / Delete | volunteer:admin; hidden departments and their email and leads data need volunteer:dept:hidden | `src/frontend/containers/housekeeping/volunteers/settings/Departments.tsx`, `src/frontend/containers/housekeeping/settings/CrudTable.tsx` | `volunteers/departments.md` |
| VOL-18 | Volunteer Code of Conduct | … › Volunteer Settings › Terms | volunteer:admin | `src/frontend/containers/housekeeping/volunteers/settings/Terms.tsx` | `volunteers/settings.md` |
| VOL-19 | Volunteer form editor (entry) | … › Volunteer Settings › General › Form Editor › Go to Volunteer Form Editor | RT system:login; API volunteer:admin | `src/frontend/containers/housekeeping/volunteers/volunteerForm.tsx` | `volunteers/settings.md` |

#### Dealers module (DLR)

| ID | Feature | Where | Access | Source files | Planned page |
| --- | --- | --- | --- | --- | --- |
| DLR-01 | Dealer dashboard | Housekeeping › Dealers › Dashboard | SB+RT+API vendor:read | `src/frontend/modules/dealer/{dashboard.tsx, links.ts}` | `dealers/managment.md` |
| DLR-02 | Browse dealer applications | Housekeeping › Dealers › Applications | SB+RT+API vendor:read | `src/frontend/containers/housekeeping/dealers/{dealers.tsx, util.tsx}` | `dealers/managment.md` |
| DLR-03 | Edit dealer information | … › Applications › (Store) › Dealer Information › pencil (Edit) | pencil shown with vendor:read; API vendor:update | `src/frontend/containers/housekeeping/dealers/{dealerDetails.tsx, dealerEdit.tsx}` | `dealers/managment.md` |
| DLR-04 | Review, approve, waitlist or reject an application | … › (Store) › "{Area} application" card › pencil (Edit) | API vendor:update | `src/frontend/containers/housekeeping/dealers/applicationDetails.tsx`, `src/backend/app/services/Dealer.ts` | `dealers/managment.md` |
| DLR-05 | Delete an application payment | … › (Store) › application edit › trash next to Status | API vendor:update | `src/frontend/containers/housekeeping/dealers/applicationDetails.tsx` | `dealers/managment.md` |
| DLR-06 | Add an application in another area | … › (Store) › area card ("No application.") › + (Add) | API vendor:update | `src/frontend/containers/housekeeping/dealers/dealerDetails.tsx` | `dealers/managment.md` |
| DLR-07 | Manage dealer assistants | … › (Store) › application card › Assistants › Manage Assistants | vendor:update | `src/frontend/containers/housekeeping/dealers/dealerDetails.tsx` | `dealers/managment.md` |
| DLR-08 | Seating requests | … › (Store) › Seating Requests | API vendor:update | `src/frontend/containers/apply/dealer/DealerSeating.tsx` | `dealers/managment.md` |
| DLR-09 | Dealer areas | Housekeeping › Dealers › Areas › Create New Dealer Area | SB+RT vendor:update; **delete needs staff:admin:update** | `src/frontend/modules/dealer/dealerAreas.tsx` | `dealers/areas-and-products.md` |
| DLR-10 | Dealer products (table types and add-ons) | Housekeeping › Dealers › Products › Create New Category | SB+RT vendor:read; create category product:category:manage; product edits product:manage | `src/frontend/modules/dealer/dealerProducts.tsx` | `dealers/areas-and-products.md` |
| DLR-11 | Dealer mass email | Housekeeping › Dealers › Mass Email | SB+RT vendor:massemail | `src/frontend/containers/housekeeping/massemail/dealer.tsx` | `attendees/mass-email.md` |
| DLR-12 | Dealer custom questions (Options) | Housekeeping › Dealers › Options › Create New Option | SB vendor:update; **RT none**; API vendor:update | `src/frontend/modules/dealer/dealerContainer.tsx`, `src/shared/options/index.ts` | `dealers/settings.md` |
| DLR-13 | Dealer dynamic export | Housekeeping › Dealers › Dynamic Export | system:export:dynamic:full | `src/frontend/modules/dealer/dealerContainer.tsx` | `system/exports.md` |
| DLR-14 | Dealer general settings | Housekeeping › Dealers › Dealer Settings › General | SB+RT+API vendor:update | `src/frontend/modules/dealer/dealerSettings.tsx` | `dealers/settings.md` |
| DLR-15 | Export dealer data | … › Dealer Settings › General › Export Data › CSV / JSON | **API system:export** | `src/frontend/modules/dealer/dealerSettings.tsx` | `system/exports.md` |
| DLR-16 | Dealer form editor (entry) | … › Dealer Settings › General › Form Editor › Go to Dealer Form Editor | RT system:login; API vendor:update | `src/frontend/modules/dealer/dealerForm.tsx` | `dealers/settings.md` |
| DLR-17 | Dealer Policy | … › Dealer Settings › Terms | page vendor:update; **save/delete need system:settings:update** | `src/frontend/modules/dealer/dealerSettings.tsx`, `src/frontend/containers/housekeeping/settings/Terms.tsx` | `dealers/settings.md` |

#### System module (SYS, SET): Data, users, audit, developers

| ID | Feature | Where | Access | Source files | Planned page |
| --- | --- | --- | --- | --- | --- |
| SYS-01 | Dynamic Export: user data | Housekeeping › System › Dynamic Export | SB+RT+API system:export:dynamic:full ("…DANGEROUS.") | `src/frontend/containers/housekeeping/dynamic-export/{index.tsx, dynamicform.tsx}`, `src/shared/dynamic-export/index.ts`, `src/shared/dynamic-export/pivots/UserPivot.ts`, `src/backend/app/server/routes/api/dynamicexport.ts` | `system/exports.md` |
| SYS-02 | Dynamic Export: registration data | Housekeeping › Registration › Dynamic Export | system:export:dynamic:full | `src/shared/dynamic-export/pivots/RegistrationPivot.ts` | `system/exports.md` |
| SYS-03 | Dynamic Export: dealer data | Housekeeping › Dealers › Dynamic Export | system:export:dynamic:full (+ vendor:read for the module) | `src/shared/dynamic-export/pivots/DealerApplicationPivot.ts` | `system/exports.md` |
| SYS-04 | Configure an export column | Any Dynamic Export › tick field › pencil ("Rename column") / tune ("Adjust modifiers") | as above | `src/frontend/containers/housekeeping/dynamic-export/{FieldModifierModal.tsx, filters.tsx}`, `src/frontend/containers/housekeeping/dynamic-export/pivots/FilterContext.ts`, `src/shared/dynamic-export/pivots/*` | `system/exports.md` |
| SYS-05 | Request PII access for exports | Housekeeping › System › Export › Request PII access | SB+RT+API system:export | `src/frontend/containers/housekeeping/export.tsx`, `src/backend/app/server/routes/api/export.ts`, `src/backend/app/services/ExportService.ts` | `system/exports.md` |
| SYS-06 | Approve, reject or delete export requests | … › Export › Pending Requests | system:export (you cannot approve your own) | same | `system/exports.md` |
| SYS-07 | Download standard exports | … › Export › (card) › CSV / JSON | system:export | same | `system/exports.md` |
| SYS-08 | Cancel an export request from the email | Email "Data Export Request" › BLOCK | RT system:login only; API system:export | `src/frontend/containers/housekeeping/export.tsx` (`ExportBlock`) | `system/exports.md` |
| SYS-09 | Manually create a user (optionally a sub-account) | Housekeeping › System › User Creation | SB user:create; **RT system:login**; API user:create | `src/frontend/containers/housekeeping/attendee/createUser.tsx`, `src/backend/app/server/routes/api/users/manual/post.ts` | `system/users.md` |
| SYS-10 | Browse audit logs | Housekeeping › System › Audit Logs › (pivot) › (object) | SB+RT+API audit:read | `src/frontend/containers/housekeeping/audit/{log.tsx, TimePicker.tsx, query.ts}`, `src/backend/app/server/routes/api/auditlogs.ts` | `system/audit-logs.md` |
| SYS-11 | Filter audit logs | same | audit:read | same | `system/audit-logs.md` |
| SYS-12 | Create a webhook | Housekeeping › System › Developers › Webhooks › Create New | SB+RT webhook:manage or oauth:manage; tab+API webhook:manage | `src/frontend/containers/housekeeping/developers/{index.tsx, webhooks/WebhookPage.tsx, webhooks/WebhookModal.tsx}`, `src/backend/app/services/WebHooksService.ts` | `technical/developers.md` |
| SYS-13 | Test, delete and verify webhooks | … › Developers › Webhooks (table) / View Verification Key | webhook:manage | `src/frontend/containers/housekeeping/developers/webhooks/{WebhookTable.tsx, KeyView.tsx}` | `technical/developers.md` |
| SYS-14 | Create an OAuth application | … › Developers › OAuth Applications › Create New | tab+API oauth:manage | `src/frontend/containers/housekeeping/developers/oauthApps/{OAuthPage.tsx, OAuthModal.tsx}`, `src/frontend/components/RevealSecretModal.tsx`, `src/backend/app/server/routes/api/oauth.ts` | `technical/developers.md` |
| SYS-15 | Edit or delete an OAuth application | … › OAuth Applications › Edit / trash | oauth:manage | `src/frontend/containers/housekeeping/developers/oauthApps/OAuthTable.tsx` | `technical/developers.md` |

#### System module (SYS, SET): Roles

| ID | Feature | Where | Access | Source files | Planned page |
| --- | --- | --- | --- | --- | --- |
| SYS-16 | View roles | Housekeeping › System › Roles | SB isRoleManager or system:permission:read; RT logged in; data system:permission:read (else "No Roles to Manage") | `src/frontend/containers/housekeeping/roles/{Roles.tsx, RoleList.tsx}`, `src/shared/user/roles.ts` | `system/roles.md` |
| SYS-17 | Create a role | … › Roles › Add new role | system:permission:update | `src/frontend/containers/housekeeping/roles/RoleForm.tsx`, `src/backend/app/server/routes/api/roles/post.ts` | `system/roles.md` |
| SYS-18 | Assign or remove users on a role | … › Roles › {role} › Users › Assign | API user:roles:update or role manager (Assign button not gated) | `src/frontend/containers/housekeeping/roles/RoleUserList.tsx` | `system/roles.md` |
| SYS-19 | Set a role's permissions | … › {role} › Permissions | view system:permission:read; edit system:permission:update | `src/frontend/containers/housekeeping/roles/{RoleEdit.tsx, PermissionList.tsx}`, `src/shared/user/permissions.ts` | `system/roles.md` |
| SYS-20 | Edit role settings | … › {role} › Settings | system:permission:update; not for internal roles | `src/frontend/containers/housekeeping/roles/RoleForm.tsx` | `system/roles.md` |
| SYS-21 | Create and share role invite links | … › {role} › Invites › Create Invite | system:permission:update | `src/frontend/containers/housekeeping/roles/RoleInvites.tsx` | `system/roles.md` |
| SYS-22 | Accept a role invite (invitee) | Invite link | logged-in user | `src/frontend/containers/account/RoleInviteCode.tsx` | `system/roles.md` |
| SYS-23 | Delete a role | … › {role} › Delete | system:permission:update | `src/frontend/containers/housekeeping/roles/RoleEdit.tsx` | `system/roles.md` |
| SYS-24 | Role history | … › {role} › History | audit:read | same | `system/roles.md` |
| SYS-25 | Role managers (delegated assignment) | Housekeeping › System › Roles › {role} › Users; also profile › Roles (ATT-16) | isRoleManager + `roleManager` role | `src/frontend/containers/housekeeping/ModuleSwitcher.tsx`, `src/backend/app/server/routes/api/roles/**` | `system/roles.md` |

#### System module (SYS, SET): System › Settings (SET)

| ID | Feature | Where | Access | Source files | Planned page |
| --- | --- | --- | --- | --- | --- |
| SET-01 | System Settings page | Housekeeping › System › Settings | SB+RT system:settings:update | `src/frontend/containers/housekeeping/settings/{index.tsx, settings.tsx}` | `system/settings.md` |
| SET-02 | Convention tab | … › Settings › Convention | system:settings:update | `src/frontend/containers/housekeeping/settings/{Convention.tsx, AbstractLiveSettings.tsx}` | `system/settings.md` |
| SET-03 | Cancel a pending PII clear | … › Settings › Convention › (red banner) › Cancel Request | staff:admin:update + pii:admin:read + pii:admin:delete + system:settings:update | `src/frontend/containers/housekeeping/settings/Convention.tsx` | `system/settings.md` |
| SET-04 | Terms tab | … › Settings › Terms | system:settings:update | `src/frontend/containers/housekeeping/settings/Terms.tsx` | `system/terms.md` |
| SET-05 | Links tab | … › Settings › Links | system:settings:update | `src/frontend/containers/housekeeping/settings/{MenuLinkSettings.tsx, CrudTable.tsx}` | `system/settings.md` |
| SET-06 | Contact tab | … › Settings › Contact | system:settings:update | `src/frontend/containers/housekeeping/settings/Contact.tsx` | `templates/email-settings.md` |
| SET-07 | Platform Info tab | … › Settings › Platform Info | system:settings:update; data product:read | `src/frontend/containers/housekeeping/settings/PlatformInfoSettings.tsx` | `system/settings.md` |
| SET-08 | Conventions tab | … › Settings › Conventions › + ("Create a New Convention") | system:settings:update | `src/frontend/containers/housekeeping/settings/ConventionList.tsx`, `src/backend/app/server/routes/api/conventions/post.ts` | `system/conventions.md` |
| SET-09 | Connect Stripe | … › Settings › Payment Gateways › Connect to Stripe | system:settings:update | `src/frontend/containers/housekeeping/settings/ExternalPaymentSettings.tsx`, `src/backend/app/server/routes/api/pay/config.ts`, `src/backend/app/services/payments/gateways/Stripe.ts` | `system/payments.md` |
| SET-10 | PagSeguro Checkout | … › Settings › Payment Gateways › PagSeguro Checkout | system:settings:update | same | `system/payments.md` |
| SET-11 | Hotels tab | … › Settings › Hotels | tab `hotelsEnabled` + hotel:manage; route system:settings:update | `src/frontend/containers/housekeeping/settings/HotelSettings.tsx` | `hotels/hotel-management.md` |
| SET-12 | Email sending domain | … › Settings › Email Settings › Configure a Domain | tab email:templates; section system:settings:update | `src/frontend/containers/housekeeping/settings/emails/{EmailSettings.tsx, EmailDomain.tsx}`, `src/backend/app/services/EmailDomainService.ts` | `templates/email-settings.md` |
| SET-13 | Mass-email senders | … › Email Settings › Email Senders for Mass Email | system:settings:update | `src/frontend/containers/housekeeping/settings/emails/EmailSenders.tsx` | `templates/email-settings.md` |
| SET-14 | Email templates | … › Email Settings › Email Templates › Modify | email:templates | `src/frontend/containers/housekeeping/settings/emails/templates/*`, `src/backend/app/services/templates/*` | `templates/templates.md` |
| SET-15 | Note Categories tab | … › Settings › Note Categories › Create New Category | user:note:categories:manage (+ page system:settings:update) | `src/frontend/containers/housekeeping/settings/notecategories/index.tsx` | `usernotes/usernotes.md` |

#### Outside Housekeeping: Onboarding (ONB) and Ops (OPS)

| ID | Feature | Where | Access | Source files | Planned page |
| --- | --- | --- | --- | --- | --- |
| ONB-01 | Trial intake | concat.app/trial (this docs repo `src/pages/trial.tsx`) | none; reCAPTCHA; origin concat.app; 10 signups/day; 3 emails/address/day | `src/backend/app/server/routes/api/signups.ts`, `src/backend/app/services/SignupService.ts`, `src/shared/signup.ts` | `quickstart/start-here.md` |
| ONB-02 | Set password | onboarding.concat.app › confirm link | token + reCAPTCHA | `src/frontend/containers/onboarding/SignupConfirm.tsx` | `quickstart/start-here.md` |
| ONB-03 | Provisioning status and handoff | onboarding.concat.app › status | status cookie | `src/frontend/containers/onboarding/SignupStatus.tsx`, `src/backend/app/services/tasks/ProvisionOrganizationTask.ts` | `quickstart/start-here.md` |
| ONB-04 | Onboarding dead ends | onboarding.concat.app | none | `src/frontend/containers/onboarding/SignupMessages.tsx` | `quickstart/start-here.md` |
| ONB-05 | Trial banner | all pages | — | `src/frontend/components/TrialBanner.tsx` | `quickstart/start-here.md` |
| OPS-01 | Ops sign-in and shell | ops.concat.app | SAML (concat.systems / concat.app) | `src/frontend/OpsApp.tsx`, `src/frontend/containers/ops/{login.tsx, logout.tsx}` | `(not documented)` |
| OPS-02 | Ops dashboard | ConCat Ops › Ops Dashboard | any agent | `src/frontend/containers/ops/dashboard.tsx` | `(not documented)` |
| OPS-03 | Organizations | ConCat Ops › Organizations › New organization | any agent | `src/frontend/containers/ops/customer-list/{ListOrganizations.tsx, CreateOrganizationModal.tsx}` | `(not documented)` |
| OPS-04 | Organization detail (Ops-only settings) | ConCat Ops › Organizations › {org} › Details / Conventions | any agent | `src/frontend/containers/ops/customer-list/{OrganizationForm.tsx, ViewOrganization.tsx}`, `src/shared/ops.ts` | `(not documented)` |
| OPS-05 | Support login | Ops › Organizations › {org} › Conventions › Login as support | Support or Developers SAML group | `src/frontend/components/ops/SupportLoginButton.tsx`, `src/frontend/components/SupportAgentBanner.tsx` | `(not documented)` |
| OPS-06 | Tasks | Ops › Tasks | any agent | `src/frontend/containers/ops/tasks/*` | `(not documented)` |

### 1.2 Attendee and public side


#### Navigation and shell (NAV)

| ID | Feature | How the user gets there | Conditions | Source files | Planned page |
| --- | --- | --- | --- | --- | --- |
| NAV-01 | Homepage sidebar | Always visible on desktop; on mobile, header button "Open Menu" | Logged in. Items are conditional, see the next column | `src/frontend/containers/corecontainer.tsx`; `src/frontend/components/SideNav.tsx`; `src/frontend/components/SidenavItem.tsx` | `attendees/homepage.md` |
| NAV-02 | Custom menu links | Sidebar, under Attendance, Event store or Applications, depending on the link type | Created by staff. Links flagged `paidRegistrationOnly` are hidden server-side until the user has a paid registration. URL placeholders `{{user.id}}` and `{{user.username}}` are filled in. Each link can open in a new tab | `corecontainer.tsx` (`MenuLinkList`); `src/backend/app/server/routes/api/config/get.ts` (menuLinks query) | `system/settings.md` |
| NAV-03 | Log out | Sidebar › ⋮ "User menu" › "Log out" | Logged in | `src/frontend/components/SideNav.tsx` (`UserMenu`, `UserInfo.logout`) | `attendees/accounts.md` |
| NAV-04 | Theme (light/dark) | Sidebar › **Theme Settings** › sun icon ("Light mode") or moon icon ("Dark mode") | Logged in (the sidebar only shows then) | `SideNav.tsx` | `attendees/homepage.md` |
| NAV-05 | Footer | Bottom of every page except body-only pages (OAuth) | Public | `src/frontend/components/Footer.tsx` | `attendees/homepage.md` |
| NAV-06 | Policy pages | Footer links. Also the sign-up "Privacy Policy" link, which opens a new tab | Public. `?conventionId=` shows another convention's text | `src/frontend/containers/policy/{terms,privacy,dealer}.tsx` | `system/terms.md` |
| NAV-07 | Changelog | Footer › "Version: {n}" | Public | `src/frontend/containers/changelog/Changelog.tsx` | `attendees/homepage.md` |
| NAV-08 | Unknown page | Any unmatched path | — | `src/frontend/containers/error/notfound` | `(not documented)` |

#### Accounts (ACC)

| ID | Feature | How the user gets there | Conditions | Source files | Planned page |
| --- | --- | --- | --- | --- | --- |
| ACC-01 | Login page (password) | Any protected page while logged out; or direct to `/login` | Logged out. Maintenance mode replaces the form (see PLAT-04). An optional login announcement from the organizer shows under the event card | `src/frontend/containers/account/login.tsx`, `LoginForm.tsx` | `attendees/accounts.md` |
| ACC-02 | Account sign-up | Login › "Create Your Account" | Logged out. `?conventionId=` signs up for another convention of the same organization. reCAPTCHA if enabled (PLAT-05). PII fields only if `registrationRequirePii` | `src/frontend/containers/account/register/workflow.tsx`, `form.tsx`, `complete.tsx`; `src/frontend/components/agecheck.tsx`, `PolicyComponent.tsx`, `RegisterUserInfo.tsx` | `attendees/accounts.md` |
| ACC-03 | Identity verification during sign-up | Part of ACC-02, between policies and the form | `convention.identityVerification` is `'optional'` or `'required'`. **There is no admin UI to set it** (DB/support only). Limited by the org's `remainingIdentityVerifications` | `src/frontend/containers/account/register/stripeIdentity.tsx`, `stripeIdentity/*`; `src/backend/app/server/routes/api/users/post.ts` | `attendees/accounts.md` |
| ACC-04 | Email confirmation link | Link in the "Account Creation Confirmation" email | — | `src/frontend/containers/account/confirm.tsx` | `attendees/accounts.md` |
| ACC-05 | Resend verification email | Dashboard banner "Verify your account's email address!" › "Resend verification email". Also on the Volunteer and Dealer pages when unverified | `user.emailVerified` = false | `src/frontend/containers/dashboard.tsx`; `src/frontend/components/EmailNotVerifiedMessage.tsx` | `attendees/accounts.md` |
| ACC-06 | Log in with an email link | Login › "Email me a login link" | Server-wide config `emailLogin.enabled` (default **true**; not per convention). Link: single use, 15 minutes. Max 5 sends per user per window. Not sent for sub-accounts or unknown logins | `src/frontend/containers/account/EmailLoginModal.tsx`, `emailLogin.tsx`; `config/default.js` | `attendees/accounts.md` |
| ACC-07 | Forgot password | Login › "Forgot Password?" | — | `src/frontend/containers/account/login.tsx` (`ResetPasswordModal`) | `attendees/accounts.md` |
| ACC-08 | Reset password with code | Email link; or Login › "Already Got a Reset Code?" | Code valid 24 hours | `src/frontend/containers/account/reset.tsx` | `attendees/accounts.md` |
| ACC-09 | Two-factor authentication setup | Sidebar › Account › "Two-factor authentication" | Logged in | `src/frontend/containers/account/secondFactor/*` | `attendees/accounts.md` |
| ACC-10 | 2FA prompt at login | Appears in the Login form or email-login page after the password | User has 2FA | `src/frontend/containers/account/secondFactor/SecondFactorPrompt.tsx` | `attendees/accounts.md` |
| ACC-11 | Account settings | Sidebar › Account › "Account settings" | Logged in. "Current Password" is required to save | `src/frontend/containers/account/editaccount.tsx` | `attendees/accounts.md` |
| ACC-12 | Confirm email change | Link in the "Request email change" email | Max one pending change per 24 hours | `src/frontend/containers/account/emailconfirm.tsx` | `attendees/accounts.md` |
| ACC-13 | Personal details | Sidebar › Account › "Personal details"; Dashboard › "Update personal info"; own attendee card › ▾ › "Edit personal details" | Logged in. Names are locked once identity-verified. DOB is read-only once set | `src/frontend/containers/account/editpersonal.tsx`, `profilePictureEditor.tsx` | `attendees/accounts.md` |
| ACC-14 | Social links | Sidebar › Account › "Social links" | **Flagged.** Needs both:<br>- org `socialLinks`, which only ConCat Ops can set<br>- server config `externalOauth.sampleProvider`, which is not in the default config<br>See (a) | `src/frontend/containers/account/sociallinks.tsx`, `sociallink/provider.tsx`; `src/frontend/components/ExternalOauthLoginComponent.tsx`; `src/backend/app/server/routes/api/externalOauth.ts` | `(not documented)` |
| ACC-15 | Finish account migration | Link in the "Account Migration Confirmation" email (started by the parent, SUB-06) | — | `src/frontend/containers/account/migrate.tsx` | `attendees/accounts.md` |
| ACC-16 | Accept a role invite | Link shared by staff (Housekeeping › Roles › invite) | Logged in (*inference*: `api.acceptInvite` needs a session; the page itself is under `LoginBoundary`). Invites can expire or hit a use limit | `src/frontend/containers/account/RoleInviteCode.tsx` | `attendees/accounts.md` |

#### Attendance dashboard (DASH)

| ID | Feature | How the user gets there | Conditions | Source files | Planned page |
| --- | --- | --- | --- | --- | --- |
| DASH-01 | Attendance dashboard and status card | After login; Sidebar › "Attendance" | Logged in | `src/frontend/containers/dashboard.tsx`; `src/frontend/containers/attendee-dashboard/RegistrationStatusCard/*` | `attendees/homepage.md` |
| DASH-02 | Organizer notice | Top of the dashboard | An announcement is set by staff | `src/frontend/containers/attendee-dashboard/AttendeeNotice/AttendeeNoticeCard.tsx` | `attendees/homepage.md` |
| DASH-03 | Attendee registration cards | Dashboard › "Your registration(s)" | — | `src/frontend/containers/attendee-dashboard/AttendeeRegistration/AttendeeRegistrationCard.tsx`, `modals/UUIDModal.tsx` | `attendees/homepage.md` |
| DASH-04 | Attendee card actions | Attendee card › primary button and ▾ split menu | Depends on status, and on whether the card is your own or a sub-account | same file; `modals/EditPersonalDetailsModal.tsx` | `attendees/homepage.md` |
| DASH-05 | Tickets on dashboard | Dashboard › "Tickets" | The user owns tickets (ticketed products) | `src/frontend/containers/dashboard.tsx` (`TicketList`) | `products/tickets.md` |
| DASH-06 | Badge pickup / QuikTicket check-in (attendee side) | Dashboard › card › "Show details" › "QR code" (registration); "Tickets" › "Show details" (tickets); emailed QR (`registrationQR`) | Registration QR needs `enableRegQR` ("Enable Registration QR Codes"). Scanning is done by staff on QuikTicket devices or the cashier UI. `disableQuikTicket` only hides the staff "Devices" tab | `AttendeeRegistrationCard.tsx`; `src/backend/app/services/OrderService.ts` (`sendRegistrationQR`) | `registration/cashier/scanner.md` |
| DASH-07 | Transfer registration | Attendee card › ▾ › "Transfer registration" | `enableRegTransfer`. Paid registration. Recipient: an existing user with a verified email. Blocked if the badge has been printed or the registration is `locked` (bought with a non-transferable discount) | `src/frontend/containers/attendee-dashboard/modals/TransferRegistrationModal.tsx` | `registration/transfer.md` |
| DASH-08 | Waiting room | Dashboard or `/event/*` while not admitted | `convention.waitingRoomStartTime` set. **No admin UI sets it, and no app code admits users** (DB/support only), see (a) | `src/frontend/containers/attendee-dashboard/RegistrationStatusCard/WaitingRoomCard.tsx`; `src/backend/app/services/WaitingRoomService.ts` | `attendees/homepage.md` |

#### Registration flow (REGF)

| ID | Feature | How the user gets there | Conditions | Source files | Planned page |
| --- | --- | --- | --- | --- | --- |
| REGF-01 | Registration wizard | Dashboard › "Start registration"; own card › "Register" / "Modify" | Logged in, admitted (DASH-08), registration open | `src/frontend/containers/register/{index,new,edit}.tsx`; `src/frontend/modules/registration/EventRegistration.tsx` | `registration/registering.md` |
| REGF-02 | Choose a badge product (registration type) | Wizard step "Registration Type" | Only public products, filtered by age on the convention start date, required/excluded grants and upgrade paths. Sold-out products are disabled | `src/frontend/components/RegTypeSelectList.tsx`, `RegTypeSelect.tsx`; `src/frontend/utils/product.tsx` (`BuyButton`) | `registration/registering.md` |
| REGF-03 | Registration form ("Additional Information") | After picking a tier | The form layout is built by the organizer (dynamic form). Node types: badge name, badge art selector, badge preview, "Randomize" button, profile picture, product options and addons ("otherOptions"/"option"), attendance flags, emergency contacts, terms agreements (checkbox or linked), Markdown/text/subheaders, PII | `src/frontend/modules/dynamicform/registration/form.tsx`, `helpers.tsx`, `reducer.tsx`; `src/frontend/modules/registration/*`; `src/shared/dynamic-form/index.ts` | `registration/registering.md` |
| REGF-04 | Review / result | After "Register" / "Update Registration" | — | `src/frontend/modules/registration/EventRegistrationComplete.tsx`; `src/frontend/components/AddedToCart.tsx` | `registration/registering.md` |
| REGF-05 | Modify or upgrade a registration | Card › "Modify" or name link | For paid registrations only the paid tier plus its configured upgrades are listed | `RegTypeSelectList.tsx`, `RegTypeSelect.tsx`; e2e `src/backend/test/e2e/browser/con-registration.upgrades.test.ts` | `registration/registering.md` |
| REGF-06 | Raffle (silo) entry for gated registration tiers | Pick a raffled tier and submit the form | Product has a raffle. Staff/volunteer `roleOverride` bypasses it. A raffled tier is not held in the cart | `src/frontend/containers/register/raffleregstate.tsx`; `EventRegistration.tsx`; e2e `src/backend/test/e2e/browser/raffles.test.ts` | `registration/raffle.md` |
| REGF-07 | Registration closed / empty | Any registration entry point | `registrationOpen` off, or no products | `src/frontend/containers/register/RegistrationClosed.tsx`; `EventRegistration.tsx` | `registration/registering.md` |

#### Sub-accounts, minors and dependents (SUB)

| ID | Feature | How the user gets there | Conditions | Source files | Planned page |
| --- | --- | --- | --- | --- | --- |
| SUB-01 | Attendees counter | Dashboard › under "Your registrations" | `maxSubAccounts > 0` (Housekeeping › Registration settings › "Sub-accounts" › "Max Sub-Accounts Registration") | `src/frontend/containers/dashboard.tsx` (`AttendeeCount`); `src/frontend/containers/attendee-dashboard/subAccountLimit.ts` | `registration/sub-accounts.md` |
| SUB-02 | Register another (named) attendee | Dashboard › "Register another attendee" | `maxSubAccounts > 0`, own registration exists, cap not reached, `onlyChildSubAccounts` off | `src/frontend/modules/registration/EventRegistration.tsx` (`EnterSubUserDetails`); `src/frontend/components/RegisterUserInfo.tsx` (`RegisterSubUserInfo`) | `registration/sub-accounts.md` |
| SUB-03 | Register a child (PII-free) | Dashboard › "Register child (under {n})" | `allowPiiFreeChildRegistration` ("Allow PII-free child registration"). With "Only allow child sub-accounts" on, every extra attendee goes this way | `EventRegistration.tsx` (`ChildGuardianConfirm`); `src/frontend/containers/register/new.tsx` | `registration/sub-accounts.md` |
| SUB-04 | Manage a sub-account | Dashboard › sub-account card › "Register" / "Modify" / ▾ | — | `AttendeeRegistrationCard.tsx` | `registration/sub-accounts.md` |
| SUB-05 | Migrate a sub-account to a full account | Sub-account card › ▾ › "Migrate Sub-Account" | Not for PII-free children. Dependent must be at least the child age threshold and at least 13 (COPPA). Email must be unused | `src/frontend/containers/attendee-dashboard/modals/MigrateAccountModal.tsx`; `src/backend/app/server/routes/api/subaccounts.ts` | `registration/sub-accounts.md` |
| SUB-06 | Dependents in other modules | Dealer › "Manage Assistants" › "Your Sub-accounts" | Approved dealer | `src/frontend/containers/apply/dealer/DealerAssistant.tsx` | `registration/sub-accounts.md` |
| SUB-07 | Legacy child badges ("Child registration") | Sidebar › "Child registration" | **Deprecated.** Shown only if `maxChildren > 0`. Once it is 0, admins cannot turn it back on ("Child Registrations have been deprecated… Please utilize the "Sub Account" system"), and new conventions start with it off. Parent must be registered. Blocked if the parent volunteers and `allowParentsToVolunteer` is off | `src/frontend/containers/convention/children.tsx`; `src/frontend/components/ChildRegistrations.tsx`; `src/backend/app/services/ChildRegisterService.ts`; `src/frontend/containers/housekeeping/registration/settings.tsx` | `registration/sub-accounts.md` |
| SUB-08 | Minor (teen) sign-up | ACC-02 age check, middle button "I was born before {date} ({child} to {minor} years old)" | Only when child threshold < minor threshold and identity verification is off | `src/frontend/components/agecheck.tsx`, `PolicyComponent.tsx` | `registration/sub-accounts.md` |

#### Store, cart and checkout (STORE)

| ID | Feature | How the user gets there | Conditions | Source files | Planned page |
| --- | --- | --- | --- | --- | --- |
| STORE-01 | Event store | Sidebar › Event store › "Event store" | `enableEventStore`; otherwise `/store` redirects to `/`. `hideEventStoreAllProducts` removes "All Products". Hidden categories are not listed | `src/frontend/containers/store/index.tsx`; `src/frontend/components/ProductCard.tsx` | `products/store.md` |
| STORE-02 | Product page | Store › product card | Store-category products only (others redirect to `/store`) | `src/frontend/containers/store/productPage.tsx`, `ProductConfigurator.tsx`, `productPageHOC.tsx`; `src/frontend/components/AddToCartButton.tsx`, `AgeRestrictedProductBadge.tsx` | `products/store.md` |
| STORE-03 | Raffle entry for gated store products | Product page of a raffled product | Product has a raffle; `roleOverride` skips it | `src/frontend/components/Raffle.tsx` | `registration/raffle.md` |
| STORE-04 | Cart / checkout | Sidebar › "Cart"; "View cart"; Dashboard › "Complete registration" (`/pay`) | Logged in | `src/frontend/containers/cart/cart.tsx`, `utils.tsx`; `src/frontend/components/BillingAddress.tsx`, `OrderPaymentList.tsx` | `orders/checkout.md` |
| STORE-05 | Vouchers / discount codes | Checkout › "Have a voucher to redeem?" | Voucher exists (created by staff) | `src/frontend/containers/cart/VoucherComponent.tsx`, `cart.tsx` | `products/vouchers.md` |
| STORE-06 | Card payment (Stripe) | Checkout › "Pay by Credit / Debit Card with Stripe" | Stripe connected. Afterpay messaging if org `enableAfterPay` (Ops-set) | `src/frontend/components/payment/StripePayment.tsx`, `PaymentGateway.tsx` | `orders/checkout.md` |
| STORE-07 | PagSeguro (Brazil) | Checkout › "Pay with PagSeguro" | Org has a connected PagSeguro account **and** billing country = BR. This replaces Stripe | `src/frontend/containers/cart/cart.tsx` (`PagSeguroCheckoutArea`); `src/backend/app/services/payments/checkouts/PagSeguroService.ts` | `orders/checkout.md` |
| STORE-08 | Free or zero-balance orders | Checkout | Subtotal 0, or fully covered by a voucher | `cart.tsx` | `orders/checkout.md` |
| STORE-09 | Payment result page | Automatic return from Stripe redirect methods or PagSeguro | Logged in | `src/frontend/components/payment/Complete.tsx` | `orders/checkout.md` |
| STORE-10 | Checkout blockers | Checkout | `forceDealerRegistration` with a dealer table in the cart and no registration; or an incomplete item | `cart.tsx` (`PaymentOptions`) | `orders/checkout.md` |

#### Orders, tickets, refunds (ORD)

| ID | Feature | How the user gets there | Conditions | Source files | Planned page |
| --- | --- | --- | --- | --- | --- |
| ORD-01 | Transaction history | Sidebar › Event store › "Transaction history"; "View transaction history"; card › "View order (#…)" | Logged in | `src/frontend/containers/account/orderhistory.tsx`; `src/frontend/components/OrderItemElement.tsx` | `orders/checkout.md` |
| ORD-02 | Request a refund | Transaction history › order › "⋯" ("Options") › "Request refund" | Order paid, amount paid > 0. If `disableRefunds` has a message, the item is struck through and shows the toast "Refunds are disabled: {message}" | `src/frontend/modules/order/refund/RefundRequestModal.tsx`; `src/frontend/models/order.tsx` | `orders/refunds.md` |
| ORD-03 | Refund status and history | Transaction history › order banner; "⋯" › "View Refund History" | Order has refunds | `src/frontend/containers/account/orderhistory.tsx`; `OrderItemElement.tsx` (`RefundState`) | `orders/refunds.md` |
| ORD-04 | Order tickets (print) | Transaction history › "Retrieve Ticket(s)" | Own order (others are redirected to `/account/orders`; staff see "You are in staff mode…") | `src/frontend/containers/order/tickets.tsx` | `products/tickets.md` |

#### Volunteer application (VAPP)

| ID | Feature | How the user gets there | Conditions | Source files | Planned page |
| --- | --- | --- | --- | --- | --- |
| VAPP-01 | Volunteer application | Sidebar › Applications › "Volunteering" | `enableVolunteers` (sidebar item and page); verified email | `src/frontend/containers/apply/volunteer/index.tsx`; `src/frontend/modules/dynamicform/volunteer/form.tsx`; `src/frontend/modules/volunteer/form/*` | `volunteers/applying.md` |
| VAPP-02 | Volunteer status | Same page, top | Application exists | same | `volunteers/applying.md` |
| VAPP-03 | Edit / delete the application | Same page | Withdrawal is blocked once assigned | same | `volunteers/applying.md` |
| VAPP-04 | Blocked states | Same page | — | same; `src/frontend/components/EmailNotVerifiedMessage.tsx` | `volunteers/applying.md` |

#### Dealer application (DEAL)

| ID | Feature | How the user gets there | Conditions | Source files | Planned page |
| --- | --- | --- | --- | --- | --- |
| DEAL-01 | Dealer area entry | Sidebar › Applications › "Dealing" (`/vendor/*` redirects here) | `enableDealers`; at least one enabled dealer area; verified email | `src/frontend/containers/apply/dealer/DealerArea.tsx`, `DealersClosed.tsx`, `DealerBan.tsx` | `dealers/applying.md` |
| DEAL-02 | Dealer profile | Dealer area (index) | Form layout is organizer-defined (dealer PII, linked terms that require typing your name, options) | `src/frontend/modules/dynamicform/dealer/form.tsx`; `src/frontend/modules/dealer/form/*` | `dealers/applying.md` |
| DEAL-03 | Space (table) application | After "Continue"; or the area link in alerts | Multiple areas show an area list first (states "Approved", "Pending approval", "Pending payment", "Waitlisted", "Rejected", "Canceled", "Full", "CLOSED") | `src/frontend/containers/apply/dealer/SpaceApplicationForm.tsx`, `AreaSelection.tsx` | `dealers/applying.md` |
| DEAL-04 | Application status and table payment | Dealer area alerts | Approved application is added to the cart for payment. `forceDealerRegistration` requires a convention registration first (STORE-10) | `src/frontend/modules/dynamicform/dealer/form.tsx` (`FormAlerts`); `src/frontend/containers/apply/dealer/DealerButtons.tsx` | `dealers/applying.md` |
| DEAL-05 | Dealer assistants | Dealer › "Manage Assistants"; Next Steps link "Dealer Assistants" | Approved application whose table type has `dealerAssistantLimit > 0` | `src/frontend/containers/apply/dealer/DealerAssistant.tsx` | `dealers/applying.md` |
| DEAL-06 | Assistant confirmation | Link in the "Dealer Assistant Confirmation" email | Logged in as the nominee | `src/frontend/containers/apply/dealer/DealerAssistantConfirm.tsx` | `dealers/applying.md` |
| DEAL-07 | Seating preferences | Dealer › "Seating Preferences" (shown once approved) | Route needs `system:vendor`, which comes from the auto-assigned "vendor" role (any user with a dealer application, `Dealer.verifyDealerRole`) | `src/frontend/containers/apply/dealer/DealerSeating.tsx`; `src/backend/defaults/rolePermissions.ts`; `src/backend/app/services/Dealer.ts` | `dealers/applying.md` |

#### Hotel booking (HOTEL)

| ID | Feature | How the user gets there | Conditions | Source files | Planned page |
| --- | --- | --- | --- | --- | --- |
| HOTEL-01 | Entry and gating | Sidebar › "Hotel reservations" | `hotelsEnabled`, logged in (each sub-route uses `UserRoute`), integration enabled | `src/frontend/containers/hotel/routehandler.tsx`; `corecontainer.tsx` | `hotels/booking.md` |
| HOTEL-02 | Hotel dashboard | Sidebar › "Hotel reservations" | Blocks are listed if Ready, not finished, and "Always Visible", or "Eligible Only" with the user eligible | `.../hotel/dashboard.tsx`, `HotelReservationList/*`, `HotelReleaseList/*`; `src/backend/app/services/HotelService.ts` | `hotels/booking.md` |
| HOTEL-03 | Hotels closed | Dashboard | `hotelsOpen` off | `.../HotelReleaseList/HotelReleaseList.tsx` | `hotels/booking.md` |
| HOTEL-04 | Block card | Dashboard › Active blocks | — | `.../HotelBlockCard/HotelBlockCard.tsx` | `hotels/booking.md` |
| HOTEL-05 | Block states before booking | Block card | Dates and eligibility | same | `hotels/booking.md` |
| HOTEL-06 | Booking link on the card | Block card badge "Book now" / "Ready for booking" | Selected, booking period | `.../HotelReservationLinkCard/HotelReservationLinkCard.tsx` | `hotels/booking.md` |
| HOTEL-07 | Block detail page | Card › "Enter block" / "View my entry" | — | `.../hotel/WaveInfo.tsx`, `WaveStatus.tsx`, `WaveEligibility.tsx`, `util.tsx` | `hotels/booking.md` |
| HOTEL-08 | Enter a random-draw block | Detail page | Random type, entry period, eligible, not auto-entry | `.../hotel/WaveEntry.tsx`; `src/backend/app/services/tasks/HotelReleaseRandomDrawTask.ts` | `hotels/booking.md` |
| HOTEL-09 | Enter an FCFS block | Detail page | FCFS type, early-entry or booking period | `.../hotel/WaveEntry.tsx`, `WaveLeave.tsx` | `hotels/booking.md` |
| HOTEL-10 | Booking preferences | Detail page | Block `requirePreferences` (API-only, see (a)) | `.../hotel/WaveEntryPreferences.tsx` | `hotels/booking.md` |
| HOTEL-11 | Entry and result state | Card › "View my entry" | Has an entry | `.../hotel/WaveLeave.tsx` | `hotels/booking.md` |
| HOTEL-12 | Leave block | Detail page › "Leave block" card | Not auto-entry; random: entry period only; not yet selected | same | `hotels/booking.md` |
| HOTEL-13 | Automatic entry | Badge "Automatic entry" | Force Entry ≠ None | `.../hotel/WaveEntry.tsx`; `.../tasks/HotelReleaseStartCreatingLinksTask.ts` | `hotels/booking.md` |
| HOTEL-14 | Closed or not eligible (detail) | Detail page | — | `.../hotel/WaveClosed.tsx` | `hotels/booking.md` |
| HOTEL-15 | Book via portal | Detail page | Selected, link pending | `.../hotel/WaveSelected.tsx` | `hotels/booking.md` |
| HOTEL-16 | Booking completed | Detail page | Reservation New, Confirmed or Waitlisted | same | `hotels/booking.md` |
| HOTEL-17 | Re-enter after cancellation | Detail page | Reservation cancelled; effectively FCFS only *(inference)* | same | `hotels/booking.md` |
| HOTEL-18 | Room availability | Card › "View room availability" | Block "Show Room Availability" | `.../hotel/HotelAvailability.tsx`, `HotelAvailabilityCard/*` | `hotels/booking.md` |
| HOTEL-19 | My reservation cards | Dashboard › My reservation | Not Pending | `.../HotelReservationCard/HotelReservationCard.tsx` | `hotels/booking.md` |
| HOTEL-20 | Find my reservation | Dashboard › "Find my reservation" | Name, and email if present, must match "Personal details" | `.../hotel/FindMyReservation.tsx` | `hotels/booking.md` |
| HOTEL-21 | Reservation detail | "Manage reservation" / "Go to my reservation" | Primary owner only | `.../hotel/MyReservation.tsx` | `hotels/booking.md` |
| HOTEL-22 | Update or cancel in the portal | Detail › "Update / Cancel reservation" | Link present, not cancelled, `hotelsOpen` on | `.../hotel/MyReservation.tsx`; `src/backend/app/services/hotel/integrations/Base.ts` | `hotels/booking.md` |

#### On-site kiosk (KIOSK)

| ID | Feature | How the user gets there | Conditions | Source files | Planned page |
| --- | --- | --- | --- | --- | --- |
| KIOSK-01 | Self-registration kiosk | Staff open `/kiosk` on a device. There is no link in the app | It refuses to start ("Kiosk Unavailable" / "The following errors are preventing this kiosk from starting:" … "Please contact a member of staff for assistance.") if:<br>- maintenance mode is on: "System is currently in maintenance mode."<br>- there are no registration products: "No attendance types are available for registration."<br>- captcha is enabled: "Kiosk registration is not supported while captcha is enabled."<br>Settings: Housekeeping › Registration › Kiosk (`kioskPaymentsEnabled`, `kioskTimeout`). Uses a separate kiosk form layout | `src/frontend/containers/kiosk/KioskComponent.tsx`, `UserInfo.tsx`, `BadgeInfo.tsx`, `KioskChildBadges.tsx` | `registration/kiosk.md` |
| KIOSK-02 | Kiosk payment and completion | Kiosk step "Payment" | With `kioskPaymentsEnabled` off, payment is skipped (as if "Pay at Cashier" was chosen) | `src/frontend/containers/kiosk/KioskPayment.tsx`, `KioskComplete.tsx` | `registration/kiosk.md` |
| KIOSK-03 | Kiosk idle reset | Automatic | `kioskTimeout`. Idle 45 s (120 s after identity), then a 30 s countdown | `KioskComponent.tsx`; `src/frontend/containers/kiosk/index.tsx` | `registration/kiosk.md` |

#### OAuth (third-party apps) (OAUTH)

| ID | Feature | How the user gets there | Conditions | Source files | Planned page |
| --- | --- | --- | --- | --- | --- |
| OAUTH-01 | Authorize consent screen | Redirect from a third-party app (an OAuth application the organizer registered) | Logged in (else login, then back). Already authorized: auto-approves silently | `src/frontend/containers/oauth/authorize/*` | `technical/developers.md` |
| OAUTH-02 | OAuth logout | Redirect from an app, or from NAV-03 on a secondary convention domain | — | `src/frontend/containers/oauth/logout.tsx` | `technical/developers.md` |

#### Platform-level features (PLAT)

| ID | Feature | How the user gets there | Conditions | Source files | Planned page |
| --- | --- | --- | --- | --- | --- |
| PLAT-01 | Multi-language UI | Footer › language dropdown ("Language") | Always available | `src/shared/translations/index.ts`, `*.json`; `src/frontend/translations.tsx`; `src/frontend/components/Footer.tsx` | `technical/languages.md` |
| PLAT-02 | Organization vs convention | — | Each convention has its own `domain`. New conventions default to `{year}.{org prefix}.concat.app`. The organization's `activeConventionId` is its primary convention | `src/backend/app/services/InstanceDomainService.ts`; `src/frontend/containers/housekeeping/settings/ConventionList.tsx` | `system/conventions.md` |
| PLAT-03 | Multi-convention login | Visiting a non-primary convention's domain | — | `src/frontend/containers/account/login.tsx`; `src/frontend/components/UserState.tsx` (`ConventionRedirect`); e2e `multi-convention.test.ts` | `attendees/accounts.md` |
| PLAT-04 | Maintenance mode | Login page | Org or convention `maintenanceMode` | `login.tsx` | `system/settings.md` |
| PLAT-05 | Captcha | ACC-02 form | Server config: Google reCAPTCHA v2 | `src/frontend/utils/useCaptcha.tsx`; `src/backend/app/server/plugins/recaptcha.ts` | `attendees/accounts.md` |
| PLAT-06 | Custom domain / CNAME | Admin-side | (a) Cloudflare custom hostnames; Housekeeping › Conventions shows the domain status (`active` / other). (b) Housekeeping › System › Settings › "Email Settings" › "Email Sending Domain": SES DKIM shown as 3 CNAME records `<token>._domainkey.<domain>` → `<token>.dkim.amazonses.com`, then "Verify". The page links `concat.app/docs/guides/technical/cname`. Attendee impact: the site URL, and the From address `registration@` / `hr@` / `dealers@` / `hotel@` `<email domain>` (fallback `concat.app`) | `src/backend/app/services/CloudflareService.ts`, `EmailDomainService.ts` | `technical/cname.md` |
| PLAT-07 | Contact addresses | Many messages ("Contact {registration email}…") | Defaults `registration@`, `hr@`, `dealers@` on the email domain; renamable in Settings › Contact | `src/backend/app/server/routes/api/config/get.ts` (`contact.email`) | `templates/email-settings.md` |
| PLAT-08 | Banners (not attendee-facing) | Top of the page | Trial org (`trialEndsAt`), or a ConCat support agent impersonating | `src/frontend/components/TrialBanner.tsx`, `SupportAgentBanner.tsx` | `quickstart/start-here.md` |

---

## 2. Audit of existing pages

Each page is classified against master:

- **Accurate:** every path, label and behaviour matches master.
- **Needs update:** the feature is on master, but the page is wrong or incomplete.
- **Not in master:** the page describes functionality master doesn't have.

### 2.1 Guides (`docs/guides`)

| Page | Class | Main discrepancies (master labels in bold) |
| --- | --- | --- |
| `intro.md` | Accurate | Rewritten on this branch. It covers how to read the guides, and its links resolve. Nit: the docs site's toggle tooltip also says "(currently … mode)". |
| `convention_checklist.md` | Needs update | Paths such as "Settings > Reg flags" and "Settings > Badge Designer" are old. There is no "Attendee Statistics > Dealers" tab. |
| `products/options.md` | Needs update (minor) | Rewritten on this branch, and every label matches master. One fix: the Store Products path needs the category's **View Products** step. |
| `products/products.md` | Needs update | The path is wrong. The field list is outdated: **Product visibility** (Public / Unlisted / Hidden), **Stock Control**, **Product Role Whitelist** / **Blacklist**, **Product Label Print Design** and **Deliverable** are missing. Lowercase tags. |
| `products/addons.md` | Needs update | Checkbox and button labels have changed, and **Add-on is hidden and should not appear in users' carts** is missing. "Any product can be an addon" is false. |
| `products/claimtickets.md` | Needs update (minor) | The field is **Product Label Print Design**, behind a checkbox. |
| `products/discounts.md` | Needs update | **Name**, Edit and the transfer lock are new. **Available Until** is required, so discounts can't run indefinitely. Old screenshot. Lowercase tag. |
| `products/productimages.md` | Needs update | The 1 MB and PNG-only limits are wrong: images are stored as PNG, at most 2048 px and up to 10 per product. The main image is chosen with **Set Primary**. |
| `products/surcharges.md` | Needs update | The path is now **Store Management › Surcharges**. **Type** and **Amount Type** are separate fields. Category surcharges are missing. It reuses the wrong screenshot (`productOptionAssign.png`). Lowercase tags. |
| `registration/attendance/attendance.md` | Needs update | The registration category has become **Registration › Badge Products**. "Make Product Publicly Visible" is now **Product visibility**. |
| `registration/badge_designer.md` | Needs update | The path and permissions are wrong. The Limitations list is obsolete: images, placeholder text, option variables and Zebra printers all exist. |
| `registration/cashier/cashier.md` | Needs update | Station settings have been renamed or added (**Print separate dealer badge**). NFC and QR are missing. |
| `registration/cashier/scanner.md` | Needs update | There's a **Configure Devices** button, not a printer icon. QR scanning isn't covered. The Firefox claim conflicts with the code (Appendix A7). |
| `registration/raffle.md` | Needs update (rewrite) | Now **Store Management › Gatekeeping**, with silos and hand-picked winners. The *weights* and *ticket points* sections are Not in master. See 2.2. |
| `registration/transfer.md` | Needs update | The sidebar item is **Attendance**, and the menu is a caret, not "…". Transfers need **Enable Registration Transfers**. Housekeeping has a **Transfer** button now. Old GIF. |
| `dealers/managment.md` | Needs update | The wording is now **Dealing**, not "Vendor". There is no "Approved (Paid)" status. Assistants confirm by email. |
| `dealers/tickets.md` | Needs update | Timed QR tickets exist, but as general ticketed products scanned with QuikTicket, not as a dealers'-den feature. There is no admin screen for ticket groups. See D5. |
| `orders/orders.md` | Needs update | Paths and labels have changed (**Requires Fulfillment**). Fulfilment follows **Deliverable**. **Cart Timeout** contradicts "unpaid orders don't expire". Lowercase tag. |
| `technical/cname.md` | Accurate | Matches the Email Settings screen. The app links to this page. The `customers.concat.app` claim is unverified. |
| `templates/templates.md` | Needs update | The path is now **System › Settings › Email Settings**. The page says "Active" where the app shows **Current**. **Reactivate Template** is missing. Lowercase tags. The app links to its `#variables` anchor. |
| `usernotes/usernotes.md` | Needs update (minor) | The ban-review matching rule is wrong. A review starts when the first 3 letters of the first name and the first letter of the last name match, plus year and month of birth when both are known. Ban types and paths are missing. |
| `volunteers/volunteers.md` | Needs update | The form is now self-serve (**Volunteer Form Editor**). The state labels differ. The claim that applicants need the `user` role is doubtful. |

**Images.** Every referenced image file exists. These are out of date: `transfer-registration.gif`, `select_printer.png`, `productDiscount.png` and both `productOption*.png`. `surcharges.md` shows the wrong image. New screenshots will come from the local instance (section 7).

**Rendering bug.** Lowercase component tags (`<splitColumn>`, `<bigButton>`, `<admonition>` and so on) render as unknown HTML elements, so those blocks never appeared on the live site. They're in:
- `products.md`, `discounts.md`, `surcharges.md`, `badge_designer.md`, `transfer.md`, `orders.md` and `templates.md`;
- `api/gettingstarted/oauth.md`.

`addons`, `claimtickets` and `discounts` also use `class=` instead of `className`. Each page gets fixed when it's rewritten.

### 2.2 Where the Raffles page came from

`docs/guides/registration/raffle.md` was written once, in the first import of the guides (`55a661d`, 2022-08-15), and was never updated. The feature has changed twice since, and both changes are on master:

| Date | ConCat change | Effect on the page |
| --- | --- | --- |
| 2020-05-22 | `e2140d6`, #266 "Initial Raffle implementation" | The feature the page describes |
| 2023-07-24 | `845feade`, #1104 "Transform into gatekeeping system" | Raffles moved to **Store Management › Gatekeeping** and became "silos". **Create New Raffle** became **Create New Silo**. The staff/volunteer bypass checkbox became **Role override**. |
| 2026-08-17 | `84579d5`, #2908 "Remove raffle editor" | The weight wizard, ticket points and random draws were removed. Organisers pick winners with **Select users to win**, and **Run Raffle Draw** stays disabled until at least one winner is chosen. |

That's why the user couldn't find raffles: the menu item is **Gatekeeping**, and the page says "Raffles" under a "Product Management" section that no longer exists.

Still on master and worth keeping:
- the five ticket states (waiting shows as "Entered / Waiting");
- the options for existing winners and for non-winners;
- **Close the raffle to new entries** and the test-run option;
- **Associated Products**.

The attendee side still uses the word "raffle": **Enter raffle**, **Leave raffle**. The page is rewritten in place (D4).

### 2.3 API reference (`docs/api`)

| Page | Class | Main discrepancies |
| --- | --- | --- |
| `intro.md` | Accurate | v0 is the only versioned API, and the Swagger UI at `/api/docs` exists. It mentions an "API Release Notes page" that doesn't exist. |
| `gettingstarted/gettingstarted.md` | Needs update | Service integrations can change data (create users, grant roles, manage orders). Customers create OAuth apps themselves in **System › Developers**. |
| `gettingstarted/oauth.md` | Needs update | The token's `scope` is an array, and the default lifetime is 900 s, not 3600. PKCE, HTTP Basic client authentication, origin-only redirect checks, 10-minute codes and `error=access_denied` are undocumented. Lowercase tags. The app links to this page. |
| `gettingstarted/scopes.md` | Needs update | Lists 4 of 11 service scopes and 8 of 9 on-behalf-of scopes. Missing: `user:create`, `user:note:read`, `vendor:read`, `order:view`, `order:manage`, `system:export:sqlite`, `user:note:categories:manage` and `dashboard:read`. |
| `errors/errors.mdx` | Needs update | `logic` is an array. Access errors have a `code`. Logic errors can carry `args`. `serviceUnavailable` is missing. 6 of 10 error categories aren't described. |
| `errors/logicerrorcodes.mdx` | Needs update | Codes 1–7 match, but master has 238, and none of the codes the API actually returns are listed. Generate the list from master. |
| `endpoints/legacy/users.mdx` | Needs update (minor) | The path, scope and personal-data gating match. Six response fields are missing. |
| `endpoints/v0/users.mdx` | Needs update | The address field names are wrong (`city`, `line1`, …). `phone` is typed as boolean. 3 fields, 3 filters and `hasMore` are missing. The limit is 1000, not 100. `POST /api/v0/users` isn't covered. |
| `endpoints/v0/roles.mdx` | Needs update | `hasMore` is missing, and `scope` is optional. `POST /api/v0/roles/{roleId}/users` isn't covered. One anchor is broken. |
| `endpoints/v0/registration.mdx` (+ partial) | Needs update | The model lacks `uuid`, `badgeId`, `badgePrinted`, `order`, the option `id` and `profilePictureURL`. `userIds` is an array of strings. The `paidProductId` filter is missing. |
| `endpoints/v0/volunteers.mdx` (+ partial) | Needs update | The search wrapper, `hasMore` and `user.isStaff` are missing. The department fields are described wrongly. |
| `endpoints/v0/dealers.mdx` | Needs update | The closest of all to master. The limit is 1000, and `filter` is optional and ignored. `email` is required, address fields can be null, and `phone` is typed as boolean. One example shows the wrong path. |

**Not documented:**
- **Public routes:** `POST /api/v0/users`, `POST /api/v0/roles/{roleId}/users`, `POST /api/v0/users/notes/search`, `POST /api/v0/orders/search`, `DELETE /api/v0/orders/items/{id}`, `POST /api/v0/orders/items/{id}/revoke`, `POST /api/v0/vouchers/search` and `GET /.well-known/jwks.json`.
- **Webhooks:** 15 event types and `/api/webhooks/key`.
- **Routes outside the public spec:** master marks its public routes with the `api` tag and publishes only those in its spec. Ticket, device and SQLite-export routes accept OAuth tokens but carry no tag, so they're internal (D8).

---

## 3. Issue 3090 mapped to master

Issue 3090 ("Event Setup Wizard and Configuration Checklist") asks for two things:
- a guided setup workflow;
- a checklist on the Housekeeping page;

both covering the functions listed below. It was closed as completed on 2026-11-09 by PR #3404 ("feat(onboarding): setup wizard for new customers"). That PR merged into **`develop`**. Its commit `9d23089` is not part of master `f4d531f`, so **neither the wizard nor the checklist exists on master.** The related issue #3275 ("Upgrade readiness check service") is still open.

The mockup attached to the issue takes its screen locations from an older live instance. For example, it shows a "Product Management" sidebar group and Settings under the Attendees module. The table below gives master's locations, and the Quickstart will use those.

| 3090 item | Master feature(s) | Where on master | Status |
| --- | --- | --- | --- |
| Guided setup workflow (the wizard) | none | none | **Not in master** (PR #3404, `develop` only) |
| Configuration checklist on the Housekeeping page | none. The Housekeeping **Dashboard** (ATT-01) shows only counters. | none | **Not in master.** This site's [Checklist](../docs/guides/convention_checklist.md) page is the only checklist. |
| **Convention Setup** 1. Event Info | SET-01, SET-02 | System › Settings › Convention: *Logo*, *Event info* | In master |
| 2. Venue and dates | SET-02, SET-08 | System › Settings › Convention › *Venue & dates*, plus the **Conventions** tab (domain) | In master |
| 3. Terms | SET-04, NAV-06 | System › Settings › Terms (12 policies, each organization-wide or convention-specific) | In master |
| 4. Payment, with an "Upgrade to Paid" gate, locked to debug/dev mode, and credentials confirmed to upgrade | SET-09, SET-10 | System › Settings › Payment Gateways: **Connect to Stripe**, *PagSeguro Checkout* | **Partly.** Stripe Connect and PagSeguro are on master. The gate, the debug/dev lock and the credential check are **not**. The customer UI has no test mode; only ConCat staff can set a test flag. A trial gets only a banner (ONB-05). |
| 5. Email | SET-12, SET-13, SET-14, SET-06 | System › Settings › Email Settings (sending domain, mass-email senders, templates) and the **Contact** tab | In master. No email account or server is configured: all mail goes through ConCat's Amazon SES. The "infrastructure" the issue mentions is done by ConCat. |
| **Registration Setup** 1. Badge Products | REG-14, REG-15 | Registration › Badge Products | In master |
| 2. Badge Product Options | REG-16, STO-15, STO-19, STO-20 | Registration › Options; the product's **Options** card | In master |
| 3. Addons | STO-12 | The badge product's **Addons** card | In master |
| 4. Registration Form | REG-10, EDT-01 to EDT-07 | Registration › Settings › Form Editor › **Go to Registration Form Editor** | In master |
| 5a. Explain Sub Accounts | REG-04, SUB-01 to SUB-06, SYS-09 | Registration › Settings › *Sub-accounts*; for attendees, **Register another attendee** | In master |
| 5b. Explain Minor/Dependent Registration Workflows | REG-05, SUB-03, SUB-07, SUB-08, SET-04 | Registration › Settings › *Minimum Age and Children*; age policies under System › Settings › Terms | In master. The old "Child registration" is deprecated. |
| **Store and Products Setup** 1. Category | STO-01 to STO-04 | Store Management › Store Products | In master |
| 2. Product | STO-06 to STO-10 | … › **View Products** › **Create New Product** | In master |
| 2a. Images | STO-11 | Product › **Product Images** | In master |
| 2b. Addons | STO-12 | Product › **Addons** | In master |
| 2c. Discounts | STO-13 | Product › **Discounts** | In master |
| 2d. Options | STO-15 | Product › **Options** | In master |
| 2e. Surcharges | STO-05, STO-16, STO-22, STO-23 | Store Management › Surcharges; product › **Surcharges**; **Category Surcharges** | In master |
| 3. Vouchers | STO-24 to STO-28 | Store Management › Vouchers | In master |
| User Creation | SYS-09 | System › User Creation | In master |
| User Search | ATT-02, ATT-03 | Attendees › User Search | In master |
| User Roles and Permissions | SYS-16 to SYS-25, ATT-16, ATT-17 | System › Roles; the user profile's **Roles** and **Permissions** tabs | In master |
| The payment and email setup flows, treated as wizards | SET-09, SET-12 | The **Connect to Stripe** flow; the **Configure a Domain** flow | In master |

---

## 4. Unmerged docs branches

I applied the same check to each branch: does master have what the branch documents?

| Branch | Last commit | What it adds | Check against master | Verdict |
| --- | --- | --- | --- | --- |
| `feat/taskBasedDocs` | 2025-07-31 | A task-based skeleton under `docs/new/`: 22 files, 19 of them empty | One page has content, `banning-an-attendee.md`. It names the permission `user:notes:hr`, which doesn't exist; master has `user:note:create` and `user:note:read:hr`. It also says "Notes Category", where master has **Note Category**. I found no "defer registration" feature on master. | **Discard the branch.** Reuse the banning page, corrected, in `usernotes/usernotes.md`. The stub topics (Stripe, permissions and roles, opening registration, email, printer and scanner troubleshooting) are in the outline. |
| `docs/webhooks` | 2022-08-25 | `docs/api/webhooks/` (about, events, validating) | Webhooks exist (15 events). 8 events are missing from the branch. Its volunteer fields no longer exist. The validation steps are wrong: the hash covers the whole body, `aud` is the host, the key is a JWK, and `iss` comes from configuration. | **Reuse after substantial edits.** Keep the three-page split and `about.md`. Rebuild events and validation from master. |
| `feat/NFCDocs` | 2026-04-27 | A Docusaurus 3 migration and tag re-casing for the API pages | Same tree as `a72b818`, already on `main` (PR #69). It has no NFC content. | **Discard.** |
| `feat/NFCDocs2` | 2026-04-27 | `registration/nfc/nfc.md` | NFC badges exist: the **Enable NFC Badges** setting, **NFC Tag Interfaces** in Configure Devices, a local proxy on port 7070, and program and revoke buttons. | **Reuse after edits** as `registration/cashier/nfc.md`. Add the setting and the device steps. |
| `feat/openapi-docs` | 2026-10-29 | Replaces the v0 pages with pages generated from `static/openapi/concat.json` | The spec's 20 operations match master's 20 public routes. But the snapshot predates master's documentation pass (#3373), so it has no summaries and only 7 of 10 scopes. The branch never installs or configures the plugin, so its build would fail, and it moves the pages out of the API sidebar. | **Reuse the approach, not the files.** Regenerate the spec from master, install and pin the plugin, and generate into `docs/api/` (D8). |
| `feat/regQR` | 2025-06-04 | A step in `scanner.md` about QR codes in confirmation emails | Registration QR codes exist: **Enable Registration QR Codes**, and the cashier reads the QR in confirmation emails. | **Reuse after edits.** The step reuses the PDF417 barcode image and still has a TODO. |

---

## 5. Proposed outline

### 5.1 Principles

- **Keep every existing URL.**
  - Existing pages are updated or retitled in place (D4).
  - The app links to `/docs/guides/technical/cname`, `/docs/guides/templates#variables` and `/docs/api/gettingstarted/oauth`. Those paths and that anchor must survive.
  - Existing sidebar groups keep their names and positions. New groups get fractional positions.
- **One page per task area.**
  - Each master feature has exactly one *home page*, where every one of its steps is documented in full (section 5.6 checks this).
  - The Quickstart walks through the 3090 functions in order. Each section gives the steps needed for first-time setup and links to the home page for everything else.
- **All pages use the textbook style** (`textbook: true`), with numbered steps, a `<Result>` under each step, and exact labels and menu paths from master.
  - Every step becomes a row in the testing inventory.
  - Screenshots come from the local instance once the user has signed in (section 7).
- **Attendee-side features** sit next to the admin feature they belong to (D7).
- **Not documented:**
  - ConCat-staff-only screens (Ops);
  - screens that can't be reached;
  - developer-only routes (section 5.5).

  Where a setting can only be changed by ConCat, the page says to ask ConCat.

### 5.2 Quickstart (mirrors issue 3090)

A new **Quickstart** group follows the Introduction, with one page per 3090 chapter. Each numbered section is one 3090 function. Sections marked *added* aren't in 3090 (D2).

| Page | Sections | Features walked through | Then see |
| --- | --- | --- | --- |
| `quickstart/start-here.md` *(added, from the mockup's step 0.1)* | 1 Start a trial · 2 Find your way around Housekeeping | ONB-01 to ONB-05, ATT-01, NAV-01, module menu | Introduction |
| `quickstart/convention-setup.md` | 1 Event info · 2 Venue and dates · 3 Terms · 4 Payment · 5 Email | SET-01, SET-02, SET-08, SET-04, SET-09, SET-10, SET-12, SET-13, SET-14, SET-06 | `system/settings`, `system/conventions`, `system/terms`, `system/payments`, `templates/email-settings`, `templates/templates` |
| `quickstart/registration-setup.md` | 1 Badge products · 2 Badge product options · 3 Addons · 4 Registration form · 5 Sub-accounts · 6 Minors and dependents · 7 Open registration *(added)* | REG-14, REG-15, REG-16, STO-15, STO-12, REG-10, EDT-03, EDT-06, EDT-07, REG-04, SUB-02, SUB-03, SUB-05, REG-05, REG-03 | `registration/attendance/attendance`, `products/options`, `products/addons`, `registration/form-editor`, `registration/sub-accounts`, `registration/settings` |
| `quickstart/store-setup.md` | 0 Turn on the store *(added)* · 1 Category · 2 Product (2a Images · 2b Addons · 2c Discounts · 2d Options · 2e Surcharges) · 3 Vouchers | SET-02, STO-01, STO-02, STO-06, STO-07, STO-08, STO-09, STO-11, STO-12, STO-13, STO-15, STO-22, STO-16, STO-05, STO-25, STO-27 | `products/*`, `products/vouchers` |
| `quickstart/users-and-access.md` | 1 User creation · 2 User search · 3 Roles and permissions | SYS-09, ATT-02, ATT-03, SYS-16, SYS-17, SYS-18, SYS-19, SYS-21, ATT-16 | `system/users`, `attendees/user-search`, `system/roles` |

Each Quickstart page ends with **What's next**. It points to the steps 3090 doesn't cover that a convention needs before opening:
- a default badge design (the Cashier can't print without one);
- badge art;
- registration flags;
- volunteers and dealers;
- the [Checklist](../docs/guides/convention_checklist.md).

### 5.3 Guides sidebar

Groups are shown in sidebar order.
- **Status:** **Keep** means accurate and only restyled. **Update** means a fix in place. **Rewrite** means new content at the same URL. **New** means a new page.
- **Features:** each feature listed is homed on that page.


#### Introduction (position 1)

| Page | Title | Status | Features homed here | Notes |
| --- | --- | --- | --- | --- |
| `intro.md` | Introduction | Keep | — | Restyled on this branch. |

#### Quickstart (position 1.5, new)

| Page | Title | Status | Features homed here | Notes |
| --- | --- | --- | --- | --- |
| `quickstart/start-here.md` | Start here | New | ONB-01 ONB-02 ONB-03 ONB-04 ONB-05 PLAT-08 | Trial sign-up and Housekeeping orientation (added, D2). |
| `quickstart/convention-setup.md` | Convention setup | New | — | 3090 Convention Setup 1–5. Walks through features homed elsewhere (5.2). |
| `quickstart/registration-setup.md` | Registration setup | New | — | 3090 Registration Setup 1–5b, plus Open Registration (added). |
| `quickstart/store-setup.md` | Store and products setup | New | — | 3090 Store and Products Setup 1–3, plus Enable Event Store (added). |
| `quickstart/users-and-access.md` | Users and access | New | — | 3090 User Creation, User Search, Roles and Permissions. |

#### Attendees (position 1.7, new)

| Page | Title | Status | Features homed here | Notes |
| --- | --- | --- | --- | --- |
| `attendees/user-search.md` | Finding attendees | New | ATT-02 ATT-03 |  |
| `attendees/user-accounts.md` | Managing an attendee's account | New | ATT-04 ATT-07 ATT-08 ATT-09 ATT-10 ATT-11 ATT-20 ATT-21 |  |
| `attendees/user-registrations.md` | Managing an attendee's registrations and orders | New | ATT-05 ATT-06 ATT-15 |  |
| `attendees/mass-email.md` | Mass email | New | ATT-28 ATT-29 ATT-30 ATT-31 ATT-32 REG-12 VOL-12 DLR-11 | One page for all four modules. |
| `attendees/accounts.md` | Attendee accounts and sign-in | New | ACC-01 ACC-02 ACC-03 ACC-04 ACC-05 ACC-06 ACC-07 ACC-08 ACC-09 ACC-10 ACC-11 ACC-12 ACC-13 ACC-15 ACC-16 NAV-03 PLAT-03 PLAT-05 | Attendee side. |
| `attendees/homepage.md` | The attendee homepage | New | NAV-01 NAV-04 NAV-05 NAV-07 DASH-01 DASH-02 DASH-03 DASH-04 DASH-08 | Attendee side. |

#### Registration (position 2)

| Page | Title | Status | Features homed here | Notes |
| --- | --- | --- | --- | --- |
| `registration/attendance/attendance.md` | Badge products (was Attendance Tiers) | Update | REG-14 REG-15 STO-14 | Retitled in place (D4). |
| `registration/registering.md` | How attendees register | New | REGF-01 REGF-02 REGF-03 REGF-04 REGF-05 REGF-07 | Attendee side. |
| `registration/settings.md` | Registration settings | New | REG-03 REG-06 REG-09 |  |
| `registration/form-editor.md` | Registration form editor | New | REG-10 EDT-01 EDT-02 EDT-03 EDT-04 EDT-05 EDT-06 EDT-07 | Also the shared editor reference for dealer and volunteer forms. |
| `registration/sub-accounts.md` | Sub-accounts, children and minors | New | REG-04 REG-05 SUB-01 SUB-02 SUB-03 SUB-04 SUB-05 SUB-06 SUB-07 SUB-08 |  |
| `registration/badge-art.md` | Badge art | New | REG-17 REG-18 |  |
| `registration/badge_designer.md` | Badge Designer | Update | REG-19 REG-20 |  |
| `registration/flags.md` | Registration flags | New | REG-21 REG-22 REG-23 |  |
| `registration/statistics.md` | Dashboards and statistics | New | ATT-01 REG-01 REG-02 ATT-33 ATT-34 ATT-35 |  |
| `registration/transfer.md` | Transfer Registration | Update | DASH-07 |  |
| `registration/raffle.md` | Gatekeeping (was Raffles) | Rewrite | STO-39 STO-40 STO-41 STO-42 STO-43 STO-44 REGF-06 STORE-03 | Retitled in place (D4); see 2.2. |
| `registration/kiosk.md` | Kiosk | New | REG-07 KIOSK-01 KIOSK-02 KIOSK-03 |  |
| `registration/cashier/cashier.md` | Cashier UI | Update | CSH-01 CSH-06 CSH-07 CSH-08 CSH-09 CSH-10 CSH-12 CSH-13 CSH-14 CSH-15 REG-08 |  |
| `registration/cashier/scanner.md` | Scanner | Update | CSH-03 DASH-06 | Adds the QR step from `feat/regQR`. |
| `registration/cashier/printers.md` | Badge and receipt printers | New | CSH-02 CSH-04 |  |
| `registration/cashier/nfc.md` | NFC badges | New | CSH-05 CSH-11 | From `feat/NFCDocs2`, after edits. |
| `registration/cashier/devices.md` | Devices and QuikTicket | New | DEV-01 DEV-02 DEV-03 |  |

#### Products (position 3)

| Page | Title | Status | Features homed here | Notes |
| --- | --- | --- | --- | --- |
| `products/addons.md` | Addons | Update | STO-12 |  |
| `products/claimtickets.md` | Claim Tickets | Update | CSH-16 |  |
| `products/discounts.md` | Discounts | Update | STO-13 |  |
| `products/options.md` | Product Options | Update | STO-15 STO-19 STO-20 STO-21 REG-16 | Restyled on this branch; one fix (View Products step). |
| `products/productimages.md` | Product Images | Update | STO-11 |  |
| `products/products.md` | Products | Update | STO-01 STO-02 STO-03 STO-04 STO-06 STO-07 STO-08 STO-09 STO-10 STO-17 STO-18 |  |
| `products/surcharges.md` | Surcharges | Update | STO-05 STO-16 STO-22 STO-23 |  |
| `products/vouchers.md` | Vouchers | New | STO-24 STO-25 STO-26 STO-27 STO-28 STO-37 STORE-05 |  |
| `products/tickets.md` | Ticketed products | New | DASH-05 ORD-04 | Replaces the content of `dealers/tickets.md` (D5). |
| `products/store.md` | What attendees see in the store | New | STORE-01 STORE-02 | Attendee side. |

#### Dealers (position 4)

| Page | Title | Status | Features homed here | Notes |
| --- | --- | --- | --- | --- |
| `dealers/managment.md` | Dealers | Update | DLR-01 DLR-02 DLR-03 DLR-04 DLR-05 DLR-06 DLR-07 DLR-08 ATT-13 ATT-19 | Filename kept (D4). |
| `dealers/tickets.md` | Tickets | Rewrite | — | Short pointer to `products/tickets` (D5). |
| `dealers/areas-and-products.md` | Dealer areas and table types | New | DLR-09 DLR-10 |  |
| `dealers/settings.md` | Dealer settings, policy and form | New | DLR-12 DLR-14 DLR-16 DLR-17 EDT-08 |  |
| `dealers/applying.md` | What dealers see when they apply | New | DEAL-01 DEAL-02 DEAL-03 DEAL-04 DEAL-05 DEAL-06 DEAL-07 | Attendee side. |

#### Orders (position 4)

| Page | Title | Status | Features homed here | Notes |
| --- | --- | --- | --- | --- |
| `orders/orders.md` | Orders | Update | STO-29 STO-30 STO-31 STO-32 STO-33 STO-34 STO-35 STO-38 |  |
| `orders/refunds.md` | Refunds | New | ATT-25 ATT-26 ATT-27 STO-36 ORD-02 ORD-03 |  |
| `orders/fees.md` | Fees | New | ATT-23 ATT-24 |  |
| `orders/checkout.md` | Checkout and payment | New | STORE-04 STORE-06 STORE-07 STORE-08 STORE-09 STORE-10 ORD-01 | Attendee side. |

#### Volunteers (position 4)

| Page | Title | Status | Features homed here | Notes |
| --- | --- | --- | --- | --- |
| `volunteers/volunteers.md` | Volunteers | Update | VOL-01 VOL-02 VOL-03 VOL-04 VOL-05 VOL-06 VOL-07 VOL-08 VOL-09 VOL-10 ATT-18 |  |
| `volunteers/departments.md` | Departments and leads | New | VOL-11 VOL-17 |  |
| `volunteers/settings.md` | Volunteer settings and form | New | VOL-13 VOL-14 VOL-15 VOL-18 VOL-19 EDT-09 |  |
| `volunteers/applying.md` | What volunteers see when they apply | New | VAPP-01 VAPP-02 VAPP-03 VAPP-04 | Attendee side. |

#### Email Templates (position 4)

| Page | Title | Status | Features homed here | Notes |
| --- | --- | --- | --- | --- |
| `templates/templates.md` | Email Template Overrides | Update | SET-14 | URL and `#variables` anchor kept (the app links to them). |
| `templates/email-settings.md` | Sending domain, senders and contact addresses | New | SET-12 SET-13 SET-06 PLAT-07 |  |
| `templates/system-emails.md` | Emails ConCat sends | New | — | Reference list of the 33 templates and when each is sent. |

#### Hotels (position 4.5, new)

| Page | Title | Status | Features homed here | Notes |
| --- | --- | --- | --- | --- |
| `hotels/hotel-management.md` | Hotel management | New | HTL-01 HTL-02 HTL-03 HTL-04 HTL-05 HTL-06 HTL-07 SET-11 | Needs ConCat to turn hotels on (D6). |
| `hotels/booking.md` | What attendees see when booking | New | HOTEL-01 HOTEL-02 HOTEL-03 HOTEL-04 HOTEL-05 HOTEL-06 HOTEL-07 HOTEL-08 HOTEL-09 HOTEL-10 HOTEL-11 HOTEL-12 HOTEL-13 HOTEL-14 HOTEL-15 HOTEL-16 HOTEL-17 HOTEL-18 HOTEL-19 HOTEL-20 HOTEL-21 HOTEL-22 | Attendee side. |

#### Checklist (position 5)

| Page | Title | Status | Features homed here | Notes |
| --- | --- | --- | --- | --- |
| `convention_checklist.md` | Checklist | Update | — | Fix paths; link the Quickstart. |

#### User Notes (position 5)

| Page | Title | Status | Features homed here | Notes |
| --- | --- | --- | --- | --- |
| `usernotes/usernotes.md` | User Notes | Update | ATT-12 ATT-14 ATT-22 SET-15 | Adds banning, from `feat/taskBasedDocs`. |

#### System (position 6, new)

| Page | Title | Status | Features homed here | Notes |
| --- | --- | --- | --- | --- |
| `system/settings.md` | Convention settings | New | SET-01 SET-02 SET-03 SET-05 SET-07 NAV-02 PLAT-04 |  |
| `system/conventions.md` | Conventions and next year | New | SET-08 PLAT-02 |  |
| `system/terms.md` | Terms and policies | New | SET-04 NAV-06 |  |
| `system/payments.md` | Payment gateways | New | SET-09 SET-10 |  |
| `system/users.md` | Creating user accounts | New | SYS-09 |  |
| `system/roles.md` | Roles and permissions | New | SYS-16 SYS-17 SYS-18 SYS-19 SYS-20 SYS-21 SYS-22 SYS-23 SYS-24 SYS-25 ATT-16 ATT-17 |  |
| `system/exports.md` | Exports | New | SYS-01 SYS-02 SYS-03 SYS-04 SYS-05 SYS-06 SYS-07 SYS-08 REG-11 REG-13 VOL-16 DLR-13 DLR-15 | All modules’ exports in one place. |
| `system/audit-logs.md` | Audit logs | New | SYS-10 SYS-11 |  |

#### Technical Guides (position 9)

| Page | Title | Status | Features homed here | Notes |
| --- | --- | --- | --- | --- |
| `technical/cname.md` | CNAME Records | Keep | PLAT-06 | URL kept (the app links to it). |
| `technical/developers.md` | OAuth applications and webhooks | New | SYS-12 SYS-13 SYS-14 SYS-15 OAUTH-01 OAUTH-02 |  |
| `technical/languages.md` | Languages and wording | New | PLAT-01 |  |

### 5.4 API sidebar

| Page | Status | Covers |
| --- | --- | --- |
| `api/intro.md` | Update (minor) | Overview. Remove the "API Release Notes" mention. |
| `api/gettingstarted/gettingstarted.md` | Update | Service and on-behalf-of integrations; creating an OAuth app in System › Developers |
| `api/gettingstarted/oauth.md` (URL kept) | Update | Authorization code with PKCE, client authentication, token lifetime, the `scope` array, errors, `GET /.well-known/jwks.json` |
| `api/gettingstarted/scopes.md` | Update | All 11 service scopes and 9 on-behalf-of scopes, from master's permission catalogue |
| `api/errors/errors.mdx` | Update | Error shape and all 10 categories |
| `api/errors/logicerrorcodes.mdx` | Update | All 238 logic-error codes, generated from master |
| `api/endpoints/legacy/users.mdx` | Update (minor) | Legacy users endpoint |
| `api/endpoints/v0/*` | Update, or generated (D8) | users (+ `POST /api/v0/users`), roles (+ `POST …/roles/{roleId}/users`), registration, volunteers, dealers |
| `api/endpoints/v0/orders.mdx` | New, or generated | Orders search, delete an item, revoke an item |
| `api/endpoints/v0/vouchers.mdx` | New, or generated | Vouchers search |
| `api/endpoints/v0/usernotes.mdx` | New, or generated | User notes search |
| `api/webhooks/about.md` | New (from `docs/webhooks`) | What webhooks are; creating one (links to `technical/developers`) |
| `api/webhooks/events.md` | New (rebuilt from master) | All 15 event types and their payloads |
| `api/webhooks/validating.md` | New (rebuilt from master) | Signature validation with the JWK from `/api/webhooks/key` |

### 5.5 Not documented

| Feature(s) | Reason |
| --- | --- |
| OPS-01 to OPS-06 | The Ops app (`ops.concat.app`) is for ConCat staff, who sign in with SAML. Pages that depend on an Ops-only setting say to ask ConCat: currency, Afterpay, identity verification, hotel booking, the `register` email template, and organization banned words. |
| NAV-08 | The not-found page. There is nothing to do on it. |
| ACC-14 | Social links. The screen is a placeholder, and it needs two settings that only ConCat can set. |
| Developer-only and unreachable code | `/dev/crash`, onboarding `/dev/request`, the NFC Debug interface, the Express Editor's drag-to-trash stub, and the audit `?view=` modal. See `audit/admin-features.md` (a). |

### 5.6 Coverage check

The outline above is generated from one mapping. A script checks that every feature in section 1 has exactly one home page:

| Check | Result |
| --- | --- |
| Features in section 1 | 331 |
| Homed on exactly one page | 323 |
| Not documented (5.5) | 8: OPS-01, OPS-02, OPS-03, OPS-04, OPS-05, OPS-06, NAV-08, ACC-14 |
| Homed on a page that exists today | 86 |
| Homed on a new page | 237 |
| Also walked through in the Quickstart | 54 |
| Features without a home | 0 |

---

## 6. Testing inventory

The file is `~/code/concat-docs-reference/docs-test-inventory.csv`. It's internal, so it stays outside the repo and is never committed.

**Columns:** page, section/step, feature, Quickstart (Y/N), expected result, tester, date tested, status, notes. Every row starts as **Not tested**, with tester and date left empty.

| Row kind | Rows | What it holds |
| --- | --- | --- |
| Written | 13 | The real steps on the two pages already written on this branch: `products/options` and `intro`. The expected result is the page's `<Result>` text. |
| Quickstart, planned | 67 | One row per planned Quickstart step. The expected result uses master's labels, all checked against `en-US.json`. Rows marked "confirm on instance" have an expected message I couldn't pin down from source. |
| How-to, planned | 317 | One row per feature, on its home page. The expected result is the feature's outcome. When a page is written, its step rows replace the planned rows. |

The inventory grows as pages are written. Each step gets its own row, and the Result lines are checked on the local instance.

---

## 7. Local test instance

Checked on 2026-11-10, without signing in. The instance at `http://localhost:8082` runs ConCat master.

| Part | What runs | Matches master `f4d531f`? |
| --- | --- | --- |
| Source | `~/code/ConCat` working tree, branch `master`, HEAD `f4d531f`. No tracked changes; there's an untracked `.claude/agents/`, which has no effect on the app. It was checked out from `feat/contact-support` at 16:04. | Yes |
| Backend (`:8081`) | `tsc-watch` running `dist/backend/app/single.js`, restarted at 16:09. All 1,102 compiled files were written after the checkout. | Yes |
| Database | `concat_reg` has all 4 of master's migrations. The 30 older rows are history from before master squashed its migrations on 2026-10-22 (#3339). | Yes |
| Frontend (`:8082`) | Vite dev server, running since **2026-11-08 15:02**, when `feat/contact-support` was checked out. Vite serves the working tree on demand, so it should now serve master's code, but the version string reads "DEV" and can't confirm it. | Probably. **Restart it before screenshots.** |

`feat/contact-support` is 5 commits ahead of master and 46 behind. Its only visible addition is a "contact support" menu item. That item is not on master, so a screenshot showing it would mean the frontend is stale. I don't run ConCat commands, so restarting the dev server is yours to do. After that, a sign-in is needed (memory: the user types the password).

---

## Appendix A. Issues for the ConCat platform team

These came up while reading master. They're recorded here because some affect what the docs can say. I haven't filed anything.

| # | Issue | Evidence (master) |
| --- | --- | --- |
| A1 | **Possible security gap.** Any user who consents can grant `admin:ticket:read` and `admin:ticket:scan` to an OAuth app. The seed gives these scopes no required permission, and consent only checks gated scopes. Only `dashboard:read` is gated. I can't see what production's database holds. | `src/backend/defaults/permissions.ts:85-93`; `src/backend/app/db/migrations/20170903T133604892-user.ts:2919`; `src/backend/app/services/OAuthService.ts:640-668` |
| A2 | **System › Settings › Danger zone › "Enable rate limit"** never saves, because the save handler sends only `maintenanceMode`. | `audit/admin-features.md` (a) |
| A3 | API: the dealers `filter.userIds` and user-notes `filter.ids` are accepted but ignored. User-note ids are declared as numbers but returned as strings. Revoke is documented as 201 but returns an empty body. | `src/backend/app/server/routes/public/v0/dealer.ts:57,241-242` and `…/public/v0/userNotes.ts:20,118-119` (declared and validated, never read by the handler) |
| A4 | No default role has `system:devices:manage`, not even `admin`. | `audit/admin-features.md` (a) |
| A5 | Wording that the docs mustn't copy as is:<br>- the long-name field is labelled "Convention Long Type";<br>- in-app help points to old paths ("Housekeeping > Settings > Terms", "Housekeeping -> Settings -> Registration");<br>- the customer and staff refund-denied messages are swapped;<br>- the account-migration message says "Email and password";<br>- a cashier toggle is labelled "No ID barcode has been scanned.";<br>- the first-come-first-served hotel text has a typo. | `audit/admin-features.md` (a4); `audit/attendee-features.md` (a) |
| A6 | *Inference, not confirmed:* registration QR emails for sub-accounts may never be sent. The verified-email check looks at the sub-account, which never gets verified. | `audit/attendee-features.md` (a) |
| A7 | The scanner's **Add Manually** menu only renders when WebUSB exists, so the documented Firefox support may not work. Needs a runtime test. | `printerModal.tsx:32,86-88` |

## Appendix B. Spot checks

On top of the research passes, I re-checked these against master myself:

- **Raffle history:**
  - `e2140d6` (#266), `845feade` (#1104) and `84579d5` (#2908) are all ancestors of `origin/master`. #2908 removed `raffles/editor` weights.
  - The docs page was last changed in `55a661d`, on 2022-08-15.
- **3090:** GitHub's GraphQL shows the issue closed by PR #3404, whose base is `develop`. `git merge-base --is-ancestor 9d23089 origin/master` fails.
- **A1:** I read the consent check in `OAuthService.verifyScopeAuthorization`, the permission seed, and every migration. Only `dashboard:read` is given a `requiredPermissionId`.
- **Quickstart labels:** 22 labels and toasts used in section 5.2 and in the inventory's Quickstart rows are exact values in master's `en-US.json`. Examples: "Convention Long Type", "Event info saved", "Venue & dates", "Yes, I want to enable Stripe Connect.", "Continue to Stripe", "Your domain was successfully validated.", "Sub-account settings saved", "New category has been created.", "Upload Complete!", "Created new surcharge.", "New voucher has been created!", "Manual Account Creation", "Account created." and "Role created successfully". "Go to Registration Form Editor" is built from two keys.
- **Docs links from the app:**
  - `server.ts:448` links to `/docs/api/gettingstarted/oauth`.
  - `EmailDomain.tsx:192` links to `/docs/guides/technical/cname`.
  - `TemplateEditor.tsx:292` links to `/docs/guides/templates#variables`.
- **Instance:** checked with `git reflog`, process start times, `dist/` file times compared with the checkout, and a read-only query of the `migrations` table.
