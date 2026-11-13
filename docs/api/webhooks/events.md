---
sidebar_position: 2
displayed_sidebar: apiSidebar
---

# Events and Payloads

A webhook subscribes to one or more of the events on this page. Each request's body is `{"data": …, "event": "<event name>"}`; this page describes `data` for each event.

| Event | Sent when |
| --- | --- |
| [`test`](#test) | Someone clicks **Test** on the webhook in Housekeeping. |
| [`volunteer-submitted`](#volunteer-submitted) | A volunteer application is created. |
| [`volunteer-updated`](#volunteer-updated) | A volunteer application changes. |
| [`volunteer-assigned`](#volunteer-assigned) | A volunteer is assigned to a department. |
| [`volunteer-unassigned`](#volunteer-unassigned) | A volunteer is removed from a department they were assigned to. |
| [`volunteer-deleted`](#volunteer-deleted) | A volunteer application is deleted. |
| [`registration-created`](#registration-created) | Never sent. |
| [`registration-updated`](#registration-updated) | A registration is created or changes. |
| [`user-updated`](#user-updated) | A user account is created or changes. |
| [`order-complete`](#order-complete) | An order is completed. |
| [`order-canceled`](#order-canceled) | An order is canceled. |
| [`dealer-upsert`](#dealer-upsert) | A dealer profile is created or changes. |
| [`application-upsert`](#application-upsert) | A dealer application is created or changes. |
| [`application-deleted`](#application-deleted) | A dealer application is deleted. |
| [`nfc-badge-scanned`](#nfc-badge-scanned) | An NFC badge is scanned. |

## Payload conventions

- Unlike the v0 API, IDs in webhook payloads are **numbers**. Organization IDs are UUID strings.
- Dates are ISO 8601 strings.

## Shared objects

### The user object

Most events include the user the event is about, with these properties.

<Attribute id="wh-user-id" name="id" type="number" response>
  The ID of the user.
</Attribute>
<Attribute id="wh-user-username" name="username" type="string" response>
  The user's username.
</Attribute>
<Attribute id="wh-user-firstName" name="firstName" type="string" response>
  The user's first name.
</Attribute>
<Attribute id="wh-user-preferredName" name="preferredName" type="string" optional response>
  The user's preferred name. If provided, this should be used instead of the first and last name, except where legally required.
</Attribute>
<Attribute id="wh-user-lastName" name="lastName" type="string" response>
  The user's last name.
</Attribute>
<Attribute id="wh-user-email" name="email" type="string" response>
  The user's email address.
</Attribute>
<Attribute id="wh-user-verified" name="verified" type="boolean" response>
  Whether the user's account has been verified.
</Attribute>
<Attribute id="wh-user-createdAt" name="createdAt" type="string" response>
  When the account was created.
</Attribute>
<Attribute id="wh-user-updatedAt" name="updatedAt" type="string" response>
  When the account was last updated.
</Attribute>

### The volunteer object

The volunteer events include the volunteer application as it's stored.

<Attribute id="wh-vol-id" name="id" type="number" response>
  The ID of the volunteer application.
</Attribute>
<Attribute id="wh-vol-userId" name="userId" type="number" response>
  The ID of the user who applied.
</Attribute>
<Attribute id="wh-vol-conventionId" name="conventionId" type="number" response>
  The ID of the convention.
</Attribute>
<Attribute id="wh-vol-organizationId" name="organizationId" type="string" response>
  The ID of the organization.
</Attribute>
<Attribute id="wh-vol-contactMethod" name="contactMethod" type="string" response>
  The name of the volunteer's preferred contact method, such as <code>email</code>.
</Attribute>
<Attribute id="wh-vol-contactMethods" name="contactMethods" type="object" response>
  The volunteer's contact methods, as an object whose keys are contact method names and whose values are what the volunteer entered.
</Attribute>
<Attribute id="wh-vol-createdAt" name="createdAt" type="string" response>
  When the application was created.
</Attribute>
<Attribute id="wh-vol-updatedAt" name="updatedAt" type="string" response>
  When the application was last updated.
</Attribute>

### The department object

Volunteer events about a department include it as it's stored.

<Attribute id="wh-dept-id" name="id" type="number" response>
  The ID of the department.
</Attribute>
<Attribute id="wh-dept-conventionId" name="conventionId" type="number" response>
  The ID of the convention.
</Attribute>
<Attribute id="wh-dept-organizationId" name="organizationId" type="string" response>
  The ID of the organization.
</Attribute>
<Attribute id="wh-dept-name" name="name" type="string" response>
  The name of the department.
</Attribute>
<Attribute id="wh-dept-email" name="email" type="string" response>
  The department's email address.
</Attribute>
<Attribute id="wh-dept-publiclyVisible" name="publiclyVisible" type="boolean" response>
  <code>false</code> if the department is hidden.
</Attribute>
<Attribute id="wh-dept-createdAt" name="createdAt" type="string" response>
  When the department was created.
</Attribute>
<Attribute id="wh-dept-updatedAt" name="updatedAt" type="string" response>
  When the department was last updated.
</Attribute>

### Order items

The order events list the order's items, each with these properties.

<Attribute id="wh-oi-orderItemId" name="orderItemId" type="number" response>
  The ID of the order item.
</Attribute>
<Attribute id="wh-oi-product" name="product" type="object" response>
  The product: <code>productId</code> (number), <code>name</code> (string) and <code>displayName</code> (string or <code>null</code>).
</Attribute>
<Attribute id="wh-oi-options" name="options" type="array of object" response>
  The item's option answers: <code>optionId</code> (number), <code>name</code> (string), <code>value</code> and, for options with a display name, <code>valueDisplayName</code>. <code>value</code> and <code>valueDisplayName</code> are left out when they aren't set.
</Attribute>
<Attribute id="wh-oi-price" name="price" type="number" response>
  The price of the item.
</Attribute>

## Event types

### `test`

<SplitColumn>
  <div>
    <p>Sent only to the webhook whose <strong>Test</strong> button was clicked in Housekeeping. <code>data</code> is always the same.</p>
  </div>
  <div>
    <ExampleBox header="Request body" headerSubText="application/json">
      {`{
  "data": {
    "test": 123
  },
  "event": "test"
}`}
    </ExampleBox>
  </div>
</SplitColumn>

### `volunteer-submitted`

<SplitColumn>
  <div>
    <p>A user creates a volunteer application.</p>
    <Attribute id="wh-vs-volunteer" name="volunteer" type="object" response>
      The new application. See <a href="#the-volunteer-object">the volunteer object</a>.
    </Attribute>
    <Attribute id="wh-vs-user" name="user" type="object" response>
      The applicant. See <a href="#the-user-object">the user object</a>.
    </Attribute>
  </div>
  <div>
    <ExampleBox header="Request body" headerSubText="application/json">
      {`{
  "data": {
    "volunteer": {
      "id": 812,
      "contactMethod": "email",
      "contactMethods": {
        "email": "johnny.test@example.com",
        "discord": "johnnytest"
      },
      "conventionId": 7,
      "organizationId": "0b7c2f4e-5d3a-4c1b-9e8f-1a2b3c4d5e6f",
      "userId": 1234,
      "createdAt": "2026-03-01T17:04:11.000Z",
      "updatedAt": "2026-03-01T17:04:11.000Z"
    },
    "user": {
      "id": 1234,
      "username": "JohnnyTest",
      "firstName": "Johnny",
      "preferredName": null,
      "lastName": "Test",
      "email": "johnny.test@example.com",
      "verified": true,
      "createdAt": "2024-01-15T09:30:00.000Z",
      "updatedAt": "2026-02-20T12:00:00.000Z"
    }
  },
  "event": "volunteer-submitted"
}`}
    </ExampleBox>
  </div>
</SplitColumn>

### `volunteer-updated`

<SplitColumn>
  <div>
    <p>A volunteer application changes. This happens when:</p>
    <ul>
      <li>the volunteer edits their application;</li>
      <li>the volunteer is made staff, or is no longer staff;</li>
      <li>a department request is added or removed. Only these include <code>department</code>.</li>
    </ul>
    <Attribute id="wh-vu-volunteer" name="volunteer" type="object" response>
      The application. See <a href="#the-volunteer-object">the volunteer object</a>.
    </Attribute>
    <Attribute id="wh-vu-user" name="user" type="object" response>
      The applicant. See <a href="#the-user-object">the user object</a>.
    </Attribute>
    <Attribute id="wh-vu-department" name="department" type="object" optional response>
      The department that was requested, or whose request was removed. See <a href="#the-department-object">the department object</a>.
    </Attribute>
  </div>
  <div>
    <p>The body has the same shape as <a href="#volunteer-assigned"><code>volunteer-assigned</code></a>, with <code>"event": "volunteer-updated"</code>, and <code>department</code> only when a department request changed.</p>
  </div>
</SplitColumn>

### `volunteer-assigned`

<SplitColumn>
  <div>
    <p>A volunteer is assigned to a department.</p>
    <Attribute id="wh-va-volunteer" name="volunteer" type="object" response>
      The application. See <a href="#the-volunteer-object">the volunteer object</a>.
    </Attribute>
    <Attribute id="wh-va-user" name="user" type="object" response>
      The volunteer. See <a href="#the-user-object">the user object</a>.
    </Attribute>
    <Attribute id="wh-va-department" name="department" type="object" response>
      The department. See <a href="#the-department-object">the department object</a>.
    </Attribute>
  </div>
  <div>
    <ExampleBox header="Request body" headerSubText="application/json">
      {`{
  "data": {
    "volunteer": {
      "id": 812,
      "contactMethod": "email",
      "contactMethods": {
        "email": "johnny.test@example.com"
      },
      "conventionId": 7,
      "organizationId": "0b7c2f4e-5d3a-4c1b-9e8f-1a2b3c4d5e6f",
      "userId": 1234,
      "createdAt": "2026-03-01T17:04:11.000Z",
      "updatedAt": "2026-03-01T17:04:11.000Z"
    },
    "user": {
      "id": 1234,
      "username": "JohnnyTest",
      "firstName": "Johnny",
      "preferredName": null,
      "lastName": "Test",
      "email": "johnny.test@example.com",
      "verified": true,
      "createdAt": "2024-01-15T09:30:00.000Z",
      "updatedAt": "2026-02-20T12:00:00.000Z"
    },
    "department": {
      "id": 3,
      "conventionId": 7,
      "organizationId": "0b7c2f4e-5d3a-4c1b-9e8f-1a2b3c4d5e6f",
      "name": "Registration",
      "email": "registration@example.com",
      "publiclyVisible": true,
      "createdAt": "2025-11-02T10:00:00.000Z",
      "updatedAt": "2025-11-02T10:00:00.000Z"
    }
  },
  "event": "volunteer-assigned"
}`}
    </ExampleBox>
  </div>
</SplitColumn>

### `volunteer-unassigned`

A volunteer is removed from a department they were assigned to. The body has the same shape as [`volunteer-assigned`](#volunteer-assigned), with `"event": "volunteer-unassigned"`, and `department` is the department they were removed from.

### `volunteer-deleted`

<SplitColumn>
  <div>
    <p>A volunteer application is deleted. The application no longer exists when the event is sent, so <code>data</code> holds only its ID: there is no <code>user</code>.</p>
    <ParentAttribute id="wh-vd-volunteer" name="volunteer" type="object" response>
      <span>The deleted application.</span>
      <>
        <Attribute id="wh-vd-volunteer-id" name="id" type="number" response>
          The ID of the deleted volunteer application.
        </Attribute>
      </>
    </ParentAttribute>
  </div>
  <div>
    <ExampleBox header="Request body" headerSubText="application/json">
      {`{
  "data": {
    "volunteer": {
      "id": 812
    }
  },
  "event": "volunteer-deleted"
}`}
    </ExampleBox>
  </div>
</SplitColumn>

### `registration-created`

This event can be selected when you create a webhook, but ConCat never sends it. New registrations are sent as [`registration-updated`](#registration-updated).

### `registration-updated`

<SplitColumn>
  <div>
    <p>A registration is created or changes, including when it's paid for or the payment is revoked, when the badge is printed or checked in, and when the user links a social account.</p>
    <ParentAttribute id="wh-ru-registration" name="registration" type="object" response>
      <span>The registration.</span>
      <>
        <Attribute id="wh-ru-reg-id" name="id" type="number" response>
          The ID of the registration.
        </Attribute>
        <Attribute id="wh-ru-reg-userId" name="userId" type="number" response>
          The ID of the registered user.
        </Attribute>
        <Attribute id="wh-ru-reg-conventionId" name="conventionId" type="number" response>
          The ID of the convention.
        </Attribute>
        <Attribute id="wh-ru-reg-attendanceTypeId" name="attendanceTypeId" type="number" response>
          The ID of the registration product the user selected.
        </Attribute>
        <Attribute id="wh-ru-reg-badgeArtId" name="badgeArtId" type="number" optional response>
          The ID of the badge art the user selected.
        </Attribute>
        <Attribute id="wh-ru-reg-badgeName" name="badgeName" type="string" response>
          The name to print on the badge.
        </Attribute>
        <Attribute id="wh-ru-reg-createdAt" name="createdAt" type="string" response>
          When the registration was created.
        </Attribute>
        <Attribute id="wh-ru-reg-updatedAt" name="updatedAt" type="string" response>
          When the registration was last updated.
        </Attribute>
      </>
    </ParentAttribute>
    <ParentAttribute id="wh-ru-user" name="user" type="object" response>
      <span>The registered user: <a href="#the-user-object">the user object</a>, plus these properties.</span>
      <>
        <Attribute id="wh-ru-user-organizationId" name="organizationId" type="string" response>
          The ID of the organization.
        </Attribute>
        <Attribute id="wh-ru-user-socialLinks" name="socialLinks" type="object" response>
          The user's linked social accounts, as an object whose keys are the services and whose values are the account IDs on them. Empty if there are none.
        </Attribute>
      </>
    </ParentAttribute>
    <Attribute id="wh-ru-conventionId" name="conventionId" type="number" response>
      The ID of the convention.
    </Attribute>
  </div>
  <div>
    <ExampleBox header="Request body" headerSubText="application/json">
      {`{
  "data": {
    "registration": {
      "attendanceTypeId": 41,
      "badgeArtId": null,
      "conventionId": 7,
      "badgeName": "Johnny",
      "id": 5521,
      "userId": 1234,
      "createdAt": "2026-02-20T12:00:00.000Z",
      "updatedAt": "2026-02-21T08:15:00.000Z"
    },
    "user": {
      "id": 1234,
      "username": "JohnnyTest",
      "firstName": "Johnny",
      "preferredName": null,
      "lastName": "Test",
      "email": "johnny.test@example.com",
      "verified": true,
      "createdAt": "2024-01-15T09:30:00.000Z",
      "updatedAt": "2026-02-20T12:00:00.000Z",
      "organizationId": "0b7c2f4e-5d3a-4c1b-9e8f-1a2b3c4d5e6f",
      "socialLinks": {}
    },
    "conventionId": 7
  },
  "event": "registration-updated"
}`}
    </ExampleBox>
  </div>
</SplitColumn>

### `user-updated`

<SplitColumn>
  <div>
    <p>A user account is created or changes. This happens when a user signs up or is created in Housekeeping, activates their account, resets their password, confirms a new email address, verifies their email by logging in with an email link, or updates their profile, and when a role is granted to them or removed.</p>
    <p>The event isn't tied to a convention, so only webhooks that fire for every convention receive it. Webhooks set to <strong>Only fire for this convention</strong> never do.</p>
    <ParentAttribute id="wh-uu-user" name="user" type="object" response>
      <span>The user: <a href="#the-user-object">the user object</a>, plus this property.</span>
      <>
        <Attribute id="wh-uu-user-organizationId" name="organizationId" type="string" response>
          The ID of the organization.
        </Attribute>
      </>
    </ParentAttribute>
  </div>
  <div>
    <ExampleBox header="Request body" headerSubText="application/json">
      {`{
  "data": {
    "user": {
      "id": 1234,
      "username": "JohnnyTest",
      "firstName": "Johnny",
      "preferredName": null,
      "lastName": "Test",
      "email": "johnny.test@example.com",
      "verified": true,
      "createdAt": "2024-01-15T09:30:00.000Z",
      "updatedAt": "2026-02-20T12:00:00.000Z",
      "organizationId": "0b7c2f4e-5d3a-4c1b-9e8f-1a2b3c4d5e6f"
    }
  },
  "event": "user-updated"
}`}
    </ExampleBox>
  </div>
</SplitColumn>

### `order-complete`

<SplitColumn>
  <div>
    <p>An order is completed.</p>
    <Attribute id="wh-oc-orderId" name="orderId" type="number" response>
      The ID of the order.
    </Attribute>
    <Attribute id="wh-oc-status" name="status" type="string" response>
      The order's status.
    </Attribute>
    <ParentAttribute id="wh-oc-user" name="user" type="object" response>
      <span>The user who placed the order.</span>
      <>
        <Attribute id="wh-oc-user-id" name="id" type="number" response>
          The ID of the user.
        </Attribute>
        <Attribute id="wh-oc-user-email" name="email" type="string" response>
          The user's email address.
        </Attribute>
      </>
    </ParentAttribute>
    <Attribute id="wh-oc-orderItems" name="orderItems" type="array of object" response>
      The items in the order. See <a href="#order-items">order items</a>.
    </Attribute>
    <Attribute id="wh-oc-breakdown" name="breakdown" type="object" response>
      The order's totals: <code>paid</code>, <code>subtotal</code>, <code>fees</code>, <code>taxAndSurcharges</code>, <code>refunds</code>, <code>total</code> and <code>voucherTotal</code>.
    </Attribute>
    <Attribute id="wh-oc-conventionId" name="conventionId" type="number" response>
      The ID of the convention.
    </Attribute>
  </div>
  <div>
    <ExampleBox header="Request body" headerSubText="application/json">
      {`{
  "data": {
    "orderId": 90210,
    "status": "paid",
    "user": {
      "id": 1234,
      "email": "johnny.test@example.com"
    },
    "orderItems": [
      {
        "orderItemId": 155001,
        "product": {
          "productId": 41,
          "name": "Weekend Badge",
          "displayName": null
        },
        "options": [
          {
            "optionId": 12,
            "name": "T-shirt size",
            "value": "m",
            "valueDisplayName": "Medium"
          }
        ],
        "price": 6500
      }
    ],
    "breakdown": {
      "paid": 6500,
      "subtotal": 6500,
      "fees": 0,
      "taxAndSurcharges": 0,
      "refunds": 0,
      "total": 6500,
      "voucherTotal": 0
    },
    "conventionId": 7
  },
  "event": "order-complete"
}`}
    </ExampleBox>
  </div>
</SplitColumn>

### `order-canceled`

<SplitColumn>
  <div>
    <p>An order is canceled.</p>
    <ParentAttribute id="wh-ocx-orderId" name="orderId" type="object" response>
      <span>Unlike <code>order-complete</code>, <code>orderId</code> here is an object.</span>
      <>
        <Attribute id="wh-ocx-orderId-id" name="id" type="number" response>
          The ID of the order.
        </Attribute>
        <Attribute id="wh-ocx-orderId-conventionId" name="conventionId" type="number" response>
          The ID of the convention.
        </Attribute>
        <Attribute id="wh-ocx-orderId-organizationId" name="organizationId" type="string" response>
          The ID of the organization.
        </Attribute>
      </>
    </ParentAttribute>
    <Attribute id="wh-ocx-automated" name="automated" type="boolean" response>
      <code>true</code> when ConCat canceled the order on its own, from a scheduled task, rather than a person canceling it.
    </Attribute>
    <Attribute id="wh-ocx-user" name="user" type="object" response>
      The user who placed the order: <code>id</code> and <code>email</code>.
    </Attribute>
    <Attribute id="wh-ocx-orderItems" name="orderItems" type="array of object" response>
      The items in the order. See <a href="#order-items">order items</a>.
    </Attribute>
    <Attribute id="wh-ocx-conventionId" name="conventionId" type="number" response>
      The ID of the convention.
    </Attribute>
  </div>
  <div>
    <ExampleBox header="Request body" headerSubText="application/json">
      {`{
  "data": {
    "orderId": {
      "id": 90211,
      "conventionId": 7,
      "organizationId": "0b7c2f4e-5d3a-4c1b-9e8f-1a2b3c4d5e6f"
    },
    "automated": true,
    "user": {
      "id": 1234,
      "email": "johnny.test@example.com"
    },
    "orderItems": [
      {
        "orderItemId": 155002,
        "product": {
          "productId": 41,
          "name": "Weekend Badge",
          "displayName": null
        },
        "options": [],
        "price": 6500
      }
    ],
    "conventionId": 7
  },
  "event": "order-canceled"
}`}
    </ExampleBox>
  </div>
</SplitColumn>

### `dealer-upsert`

<SplitColumn>
  <div>
    <p>A dealer profile is created or changes.</p>
    <Attribute id="wh-du-conventionId" name="conventionId" type="number" response>
      The ID of the convention.
    </Attribute>
    <Attribute id="wh-du-user" name="user" type="object" response>
      The user who owns the dealer profile. See <a href="#the-user-object">the user object</a>.
    </Attribute>
    <ParentAttribute id="wh-du-dealer" name="dealer" type="object" response>
      <span>The dealer profile.</span>
      <>
        <Attribute id="wh-du-dealer-id" name="id" type="number" response>
          The ID of the dealer.
        </Attribute>
        <Attribute id="wh-du-dealer-name" name="name" type="string" response>
          The dealer's business name.
        </Attribute>
      </>
    </ParentAttribute>
  </div>
  <div>
    <ExampleBox header="Request body" headerSubText="application/json">
      {`{
  "data": {
    "conventionId": 7,
    "user": {
      "id": 1234,
      "username": "JohnnyTest",
      "firstName": "Johnny",
      "preferredName": null,
      "lastName": "Test",
      "email": "johnny.test@example.com",
      "verified": true,
      "createdAt": "2024-01-15T09:30:00.000Z",
      "updatedAt": "2026-02-20T12:00:00.000Z"
    },
    "dealer": {
      "id": 301,
      "name": "Johnny's Art Shop"
    }
  },
  "event": "dealer-upsert"
}`}
    </ExampleBox>
  </div>
</SplitColumn>

### `application-upsert`

<SplitColumn>
  <div>
    <p>A dealer application is created or changes. <code>data</code> has the same properties as <a href="#dealer-upsert"><code>dealer-upsert</code></a>, plus <code>application</code>.</p>
    <ParentAttribute id="wh-au-application" name="application" type="object" response>
      <span>The application.</span>
      <>
        <Attribute id="wh-au-application-id" name="id" type="number" response>
          The ID of the application.
        </Attribute>
        <Attribute id="wh-au-application-status" name="status" type="string" response>
          <code>approved</code>, <code>pending</code>, <code>rejected</code> or <code>waitlisted</code>.
        </Attribute>
        <Attribute id="wh-au-application-areaId" name="areaId" type="number" response>
          The ID of the dealer area the application is for.
        </Attribute>
        <Attribute id="wh-au-application-paidOrderItemId" name="paidOrderItemId" type="number" optional response>
          The ID of the order item that paid for the application, or <code>null</code> if it hasn't been paid for.
        </Attribute>
      </>
    </ParentAttribute>
  </div>
  <div>
    <ExampleBox header="Request body" headerSubText="application/json">
      {`{
  "data": {
    "conventionId": 7,
    "user": {
      "id": 1234,
      "username": "JohnnyTest",
      "firstName": "Johnny",
      "preferredName": null,
      "lastName": "Test",
      "email": "johnny.test@example.com",
      "verified": true,
      "createdAt": "2024-01-15T09:30:00.000Z",
      "updatedAt": "2026-02-20T12:00:00.000Z"
    },
    "dealer": {
      "id": 301,
      "name": "Johnny's Art Shop"
    },
    "application": {
      "id": 402,
      "status": "pending",
      "areaId": 2,
      "paidOrderItemId": null
    }
  },
  "event": "application-upsert"
}`}
    </ExampleBox>
  </div>
</SplitColumn>

### `application-deleted`

<SplitColumn>
  <div>
    <p>A dealer application is deleted. <code>data</code> has the same properties as <a href="#application-upsert"><code>application-upsert</code></a>, but the application no longer exists, so <code>application</code> holds only its <code>id</code>.</p>
  </div>
  <div>
    <ExampleBox header="Request body" headerSubText="application/json">
      {`{
  "data": {
    "conventionId": 7,
    "user": {
      "id": 1234,
      "username": "JohnnyTest",
      "firstName": "Johnny",
      "preferredName": null,
      "lastName": "Test",
      "email": "johnny.test@example.com",
      "verified": true,
      "createdAt": "2024-01-15T09:30:00.000Z",
      "updatedAt": "2026-02-20T12:00:00.000Z"
    },
    "dealer": {
      "id": 301,
      "name": "Johnny's Art Shop"
    },
    "application": {
      "id": 402
    }
  },
  "event": "application-deleted"
}`}
    </ExampleBox>
  </div>
</SplitColumn>

### `nfc-badge-scanned`

<SplitColumn>
  <div>
    <p>An NFC badge is scanned: a scanner asks ConCat for the password of the badge's NFC card.</p>
    <Attribute id="wh-nfc-cardUUID" name="cardUUID" type="string" response>
      The UUID of the NFC card.
    </Attribute>
    <Attribute id="wh-nfc-conventionId" name="conventionId" type="number" response>
      The ID of the convention.
    </Attribute>
    <Attribute id="wh-nfc-nfcTokenId" name="nfcTokenId" type="number" response>
      The ID of ConCat's record of the card.
    </Attribute>
    <Attribute id="wh-nfc-scannedByUserId" name="scannedByUserId" type="number" response>
      The ID of the user whose scanner made the request.
    </Attribute>
    <Attribute id="wh-nfc-userId" name="userId" type="number" response>
      The ID of the user the badge belongs to.
    </Attribute>
  </div>
  <div>
    <ExampleBox header="Request body" headerSubText="application/json">
      {`{
  "data": {
    "cardUUID": "04a1b2c3d4e5f6",
    "conventionId": 7,
    "nfcTokenId": 77,
    "scannedByUserId": 42,
    "userId": 1234
  },
  "event": "nfc-badge-scanned"
}`}
    </ExampleBox>
  </div>
</SplitColumn>
