# Events and Payloads

You can create webhooks that subscribe to one or more events listed on this page. Each webhook event listed here includes a description of the properties and an example payload.

## Common properties

Each webhook, in addition to the event-specific properties, will include the following common properties:

<attribute id="ep-cp-event" name="event" type="string" response>
  The name of the event that triggered the webhook.
</attribute>
<attribute id="ep-cp-data" name="data" type="object" response>
  The event-specific data. See the corresponding section under <strong>event types</strong> for more information.
</attribute>

## Common headers

Each POST request will include the following headers:

<attribute id="ep-ch-user-agent" name="user-agent" type="string" response>
  The HTTP client used to send the request. This will always be <code>ConCat/AxiosHTTPClient</code>.
</attribute>
<attribute id="ep-ch-authorization" name="authorization" type="string" response>
  A bearer token with a signed JWT payload containing a base64-encoded sha256 hash of the <code>data</code> property. See <link to="/docs/api/webhooks/validating"><strong>Validating Payloads</strong></link> for more information.
</attribute>

## Event types

### `volunteer-submitted`
<splitColumn>
  <div>
    <p>When a user creates a new volunteer application.</p>
    <parentAttribute id="ep-et-vs-volunteer" name="volunteer" type="object" response>
      <span>The volunteer record containing the user's application.</span>
      <>
        <attribute id="ep-et-vs-v-id" name="id" type="string" response>
          The unique identifier of the volunteer application.
        </attribute>
        <attribute id="ep-et-vs-v-contactMethod" name="contactMethod" type="string" response>
          The preferred method of contact for the volunteer.
        </attribute>
        <parentAttribute id="ep-et-vs-v-contactMethods" name="contactMethods" type="key-value pair of strings" response>
          <span>The contact methods for the volunteer.</span>
          <>
            <attribute id="ep-et-vs-v-cm-key" name="key" type="string" response>
              A string representing the type of contact method.
            </attribute>
            <attribute id="ep-et-vs-v-cm-value" name="value" type="string" response>
              An arbitrary string provided by the user for the contact method.
            </attribute>
          </>
        </parentAttribute>
        <attribute id="ep-et-vs-v-availableBeforeCon" name="availableBeforeCon" type="boolean" response>
          Whether the volunteer is available before the event.
        </attribute>
        <attribute id="ep-et-vs-v-anythingElse" name="anythingElse" type="string" response optional>
          Any additional information the user provided.
        </attribute>
        <attribute id="ep-et-vs-v-previousConExperience" name="previousConExperience" type="string" response optional>
          The user's previous convention experience.
        </attribute>
        <attribute id="ep-et-vs-v-previousOtherExperience" name="previousOtherExperience" type="string" response optional>
          The user's previous experience outside of events that may relate to their preferred departments.
        </attribute>
        <attribute id="ep-et-vs-v-eventsCanNotMiss" name="eventsCanNotMiss" type="string" response optional>
          Any panels or events the user would not want to miss.
        </attribute>
        <attribute id="ep-et-vs-v-createdAt" name="createdAt" type="ISO-8601 Date" response>
          The date the volunteer application was created.
        </attribute>
        <attribute id="ep-et-vs-v-updatedAt" name="updatedAt" type="ISO-8601 Date" response>
          The date the volunteer application was last updated.
        </attribute>
      </>
    </parentAttribute>
    <parentAttribute id="ep-et-vs-user" name="user" type="object" response>
      <span>The user who created the volunteer application.</span>
      <>
        <attribute id="ep-et-vs-u-id" name="id" type="string" response>
          The unique identifier of the user.
        </attribute>
        <attribute id="ep-et-vs-u-username" name="username" type="string" response>
          The username of the user.
        </attribute>
        <attribute id="ep-et-vs-u-firstName" name="firstName" type="string" response>
          The first name of the user.
        </attribute>
        <attribute id="ep-et-vs-u-preferredName" name="preferredName" type="string" response optional>
          The preferred name of the user. If provided, this should be used instead of the first and last name, except where legally required.
        </attribute>
        <attribute id="ep-et-vs-u-lastName" name="lastName" type="string" response>
          The last name of the user.
        </attribute>
        <attribute id="ep-et-vs-u-email" name="email" type="string" response>
          The email address of the user.
        </attribute>
        <attribute id="ep-et-vs-u-verified" name="verified" type="boolean" response>
          Whether the user's email address has been verified.
        </attribute>
        <attribute id="ep-et-vs-u-createdAt" name="createdAt" type="ISO-8601 Date" response>
          The date the user was created.
        </attribute>
        <attribute id="ep-et-vs-u-updatedAt" name="updatedAt" type="ISO-8601 Date" response>
          The date the user was last updated.
        </attribute>
      </>
    </parentAttribute>
  </div>
  <div>
    <exampleBox header='Response' headerSubText='application/json'>
      {`{
  "event": "volunteer-submitted",
  "data": {
    "volunteer": {
      "id": "1234",
      "contactMethod": "email",
      "contactMethods": {
        "email": "johnny.test@concat.systems",
        "discord": "JohnnyTest#1234",
      },
      "availableBeforeCon": true,
      "anythingElse": "I'm a pretty cool guy.",
      "previousConExperience": "I've been to a few conventions.",
      "previousOtherExperience": "I've worked at a few conventions.",
      "eventsCanNotMiss": "I really want to see the panel on how to make a better sandwich.",
      "createdAt": "2020-01-01T00:00:00.000Z",
      "updatedAt": "2020-01-01T00:00:00.000Z"
    },
    "user": {
      "id": "1234",
      "username": "JohnnyTest",
      "firstName": "Johnny",
      "preferredName": "Johnny",
      "lastName": "Test",
      "email": "johnny.test@concat.systems",
      "verified": true,
      "createdAt": "2020-01-01T00:00:00.000Z",
      "updatedAt": "2020-01-01T00:00:00.000Z"
    }
  }
}`}
    </exampleBox>
  </div>
</splitColumn>

### `volunteer-updated`
<splitColumn>
  <div>
    <p>When an existing volunteer application is updated.</p>
    <parentAttribute id="ep-et-vu-volunteer" name="volunteer" type="object" response>
      <span>The volunteer record containing the user's application.</span>
      <>
        <attribute id="ep-et-vu-v-id" name="id" type="string" response>
          The unique identifier of the volunteer application.
        </attribute>
        <attribute id="ep-et-vu-v-contactMethod" name="contactMethod" type="string" response>
          The preferred method of contact for the volunteer.
        </attribute>
        <parentAttribute id="ep-et-vu-v-contactMethods" name="contactMethods" type="key-value pair of strings" response>
          <span>The contact methods for the volunteer.</span>
          <>
            <attribute id="ep-et-vu-v-cm-key" name="key" type="string" response>
              A string representing the type of contact method.
            </attribute>
            <attribute id="ep-et-vu-v-cm-value" name="value" type="string" response>
              An arbitrary string provided by the user for the contact method.
            </attribute>
          </>
        </parentAttribute>
        <attribute id="ep-et-vu-v-availableBeforeCon" name="availableBeforeCon" type="boolean" response>
          Whether the volunteer is available before the event.
        </attribute>
        <attribute id="ep-et-vu-v-anythingElse" name="anythingElse" type="string" response optional>
          Any additional information the user provided.
        </attribute>
        <attribute id="ep-et-vu-v-previousConExperience" name="previousConExperience" type="string" response optional>
          The user's previous convention experience.
        </attribute>
        <attribute id="ep-et-vu-v-previousOtherExperience" name="previousOtherExperience" type="string" response optional>
          The user's previous experience outside of events that may relate to their preferred departments.
        </attribute>
        <attribute id="ep-et-vu-v-eventsCanNotMiss" name="eventsCanNotMiss" type="string" response optional>
          Any panels or events the user would not want to miss.
        </attribute>
        <attribute id="ep-et-vu-v-createdAt" name="createdAt" type="ISO-8601 Date" response>
          The date the volunteer application was created.
        </attribute>
        <attribute id="ep-et-vu-v-updatedAt" name="updatedAt" type="ISO-8601 Date" response>
          The date the volunteer application was last updated.
        </attribute>
      </>
    </parentAttribute>
    <parentAttribute id="ep-et-vu-user" name="user" type="object" response>
      <span>The user who created the volunteer application.</span>
      <>
        <attribute id="ep-et-vu-u-id" name="id" type="string" response>
          The unique identifier of the user.
        </attribute>
        <attribute id="ep-et-vu-u-username" name="username" type="string" response>
          The username of the user.
        </attribute>
        <attribute id="ep-et-vu-u-firstName" name="firstName" type="string" response>
          The first name of the user.
        </attribute>
        <attribute id="ep-et-vu-u-preferredName" name="preferredName" type="string" response optional>
          The preferred name of the user. If provided, this should be used instead of the first and last name, except where legally required.
        </attribute>
        <attribute id="ep-et-vu-u-lastName" name="lastName" type="string" response>
          The last name of the user.
        </attribute>
        <attribute id="ep-et-vu-u-email" name="email" type="string" response>
          The email address of the user.
        </attribute>
        <attribute id="ep-et-vu-u-verified" name="verified" type="boolean" response>
          Whether the user's email address has been verified.
        </attribute>
        <attribute id="ep-et-vu-u-createdAt" name="createdAt" type="ISO-8601 Date" response>
          The date the user was created.
        </attribute>
        <attribute id="ep-et-vu-u-updatedAt" name="updatedAt" type="ISO-8601 Date" response>
          The date the user was last updated.
        </attribute>
      </>
    </parentAttribute>
  </div>
  <div>
    <exampleBox header='Response' headerSubText='application/json'>
      {`{
  "event": "volunteer-updated",
  "data": {
    "volunteer": {
      "id": "1234",
      "contactMethod": "email",
      "contactMethods": {
        "email": "johnny.test@concat.systems",
        "discord": "JohnnyTest#1234",
      },
      "availableBeforeCon": true,
      "anythingElse": "I'm a pretty cool guy.",
      "previousConExperience": "I've been to a few conventions.",
      "previousOtherExperience": "I've worked at a few conventions.",
      "eventsCanNotMiss": "I really want to see the panel on how to make a better sandwich.",
      "createdAt": "2020-01-01T00:00:00.000Z",
      "updatedAt": "2020-01-01T00:00:00.000Z"
    },
    "user": {
      "id": "1234",
      "username": "JohnnyTest",
      "firstName": "Johnny",
      "preferredName": "Johnny",
      "lastName": "Test",
      "email": "johnny.test@concat.systems",
      "verified": true,
      "createdAt": "2020-01-01T00:00:00.000Z",
      "updatedAt": "2020-01-01T00:00:00.000Z"
    }
  }
}`}
    </exampleBox>
  </div>
</splitColumn>

### `volunteer-assigned`
<splitColumn>
  <div>
    <p>When a volunteer is assigned to a department.</p>
    <parentAttribute id="ep-et-va-volunteer" name="volunteer" type="object" response>
      <span>The volunteer record containing the user's application.</span>
      <>
        <attribute id="ep-et-va-v-id" name="id" type="string" response>
          The unique identifier of the volunteer application.
        </attribute>
        <attribute id="ep-et-va-v-contactMethod" name="contactMethod" type="string" response>
          The preferred method of contact for the volunteer.
        </attribute>
        <parentAttribute id="ep-et-va-v-contactMethods" name="contactMethods" type="key-value pair of strings" response>
          <span>The contact methods for the volunteer.</span>
          <>
            <attribute id="ep-et-va-v-cm-key" name="key" type="string" response>
              A string representing the type of contact method.
            </attribute>
            <attribute id="ep-et-va-v-cm-value" name="value" type="string" response>
              An arbitrary string provided by the user for the contact method.
            </attribute>
          </>
        </parentAttribute>
        <attribute id="ep-et-va-v-availableBeforeCon" name="availableBeforeCon" type="boolean" response>
          Whether the volunteer is available before the event.
        </attribute>
        <attribute id="ep-et-va-v-anythingElse" name="anythingElse" type="string" response optional>
          Any additional information the user provided.
        </attribute>
        <attribute id="ep-et-va-v-previousConExperience" name="previousConExperience" type="string" response optional>
          The user's previous convention experience.
        </attribute>
        <attribute id="ep-et-va-v-previousOtherExperience" name="previousOtherExperience" type="string" response optional>
          The user's previous experience outside of events that may relate to their preferred departments.
        </attribute>
        <attribute id="ep-et-va-v-eventsCanNotMiss" name="eventsCanNotMiss" type="string" response optional>
          Any panels or events the user would not want to miss.
        </attribute>
        <attribute id="ep-et-va-v-createdAt" name="createdAt" type="ISO-8601 Date" response>
          The date the volunteer application was created.
        </attribute>
        <attribute id="ep-et-va-v-updatedAt" name="updatedAt" type="ISO-8601 Date" response>
          The date the volunteer application was last updated.
        </attribute>
      </>
    </parentAttribute>
    <parentAttribute id="ep-et-va-user" name="user" type="object" response>
      <span>The user who created the volunteer application.</span>
      <>
        <attribute id="ep-et-va-u-id" name="id" type="string" response>
          The unique identifier of the user.
        </attribute>
        <attribute id="ep-et-va-u-username" name="username" type="string" response>
          The username of the user.
        </attribute>
        <attribute id="ep-et-va-u-firstName" name="firstName" type="string" response>
          The first name of the user.
        </attribute>
        <attribute id="ep-et-va-u-preferredName" name="preferredName" type="string" response optional>
          The preferred name of the user. If provided, this should be used instead of the first and last name, except where legally required.
        </attribute>
        <attribute id="ep-et-va-u-lastName" name="lastName" type="string" response>
          The last name of the user.
        </attribute>
        <attribute id="ep-et-va-u-email" name="email" type="string" response>
          The email address of the user.
        </attribute>
        <attribute id="ep-et-va-u-verified" name="verified" type="boolean" response>
          Whether the user's email address has been verified.
        </attribute>
        <attribute id="ep-et-va-u-createdAt" name="createdAt" type="ISO-8601 Date" response>
          The date the user was created.
        </attribute>
        <attribute id="ep-et-va-u-updatedAt" name="updatedAt" type="ISO-8601 Date" response>
          The date the user was last updated.
        </attribute>
      </>
    </parentAttribute>
    <parentAttribute id="ep-et-va-department" name="department" type="object" response>
      <span>The department the volunteer was assigned to.</span>
      <>
        <attribute id="ep-et-va-d-id" name="id" type="string" response>
          The unique identifier of the department.
        </attribute>
        <attribute id="ep-et-va-d-name" name="name" type="string" response>
          The name of the department.
        </attribute>
        <attribute id="ep-et-va-d-email" name="email" type="string" response>
          The email address for contacting the department lead.
        </attribute>
        <attribute id="ep-et-va-d-publiclyVisible" name="publiclyVisible" type="boolean" response>
          Whether the department is publicly visible.
        </attribute>
        <attribute id="ep-et-va-d-createdAt" name="createdAt" type="ISO-8601 Date" response>
          The date the department was created.
        </attribute>
        <attribute id="ep-et-va-d-updatedAt" name="updatedAt" type="ISO-8601 Date" response>
          The date the department was last updated.
        </attribute>
      </>
    </parentAttribute>
  </div>
  <div>
    <exampleBox header='Response' headerSubText='application/json'>
      {`{
  "event": "volunteer-assigned",
  "data": {
    "volunteer": {
      "id": "1234",
      "contactMethod": "email",
      "contactMethods": {
        "email": "johnny.test@concat.systems",
        "discord": "JohnnyTest#1234",
      },
      "availableBeforeCon": true,
      "anythingElse": "I'm a pretty cool guy.",
      "previousConExperience": "I've been to a few conventions.",
      "previousOtherExperience": "I've worked at a few conventions.",
      "eventsCanNotMiss": "I really want to see the panel on how to make a better sandwich.",
      "createdAt": "2020-01-01T00:00:00.000Z",
      "updatedAt": "2020-01-01T00:00:00.000Z"
    },
    "user": {
      "id": "1234",
      "username": "JohnnyTest",
      "firstName": "Johnny",
      "preferredName": "Johnny",
      "lastName": "Test",
      "email": "johnny.test@concat.systems",
      "verified": true,
      "createdAt": "2020-01-01T00:00:00.000Z",
      "updatedAt": "2020-01-01T00:00:00.000Z"
    },
    "department": {
      "id": "1234",
      "name": "Registration",
      "email": "registration@concat.event",
      "publiclyVisible": true,
      "createdAt": "2020-01-01T00:00:00.000Z",
      "updatedAt": "2020-01-01T00:00:00.000Z"
    }
  }
}`}
    </exampleBox>
  </div>
</splitColumn>

### `volunteer-unassigned`
<splitColumn>
  <div>
    <p>When a volunteer is removed from a department.</p>
    <parentAttribute id="ep-et-vu-volunteer" name="volunteer" type="object" response>
      <span>The volunteer record containing the user's application.</span>
      <>
        <attribute id="ep-et-vun-v-id" name="id" type="string" response>
          The unique identifier of the volunteer application.
        </attribute>
        <attribute id="ep-et-vun-v-contactMethod" name="contactMethod" type="string" response>
          The preferred method of contact for the volunteer.
        </attribute>
        <parentAttribute id="ep-et-vun-v-contactMethods" name="contactMethods" type="key-value pair of strings" response>
          <span>The contact methods for the volunteer.</span>
          <>
            <attribute id="ep-et-vun-v-cm-key" name="key" type="string" response>
              A string representing the type of contact method.
            </attribute>
            <attribute id="ep-et-vun-v-cm-value" name="value" type="string" response>
              An arbitrary string provided by the user for the contact method.
            </attribute>
          </>
        </parentAttribute>
        <attribute id="ep-et-vun-v-availableBeforeCon" name="availableBeforeCon" type="boolean" response>
          Whether the volunteer is available before the event.
        </attribute>
        <attribute id="ep-et-vun-v-anythingElse" name="anythingElse" type="string" response optional>
          Any additional information the user provided.
        </attribute>
        <attribute id="ep-et-vun-v-previousConExperience" name="previousConExperience" type="string" response optional>
          The user's previous convention experience.
        </attribute>
        <attribute id="ep-et-vun-v-previousOtherExperience" name="previousOtherExperience" type="string" response optional>
          The user's previous experience outside of events that may relate to their preferred departments.
        </attribute>
        <attribute id="ep-et-vun-v-eventsCanNotMiss" name="eventsCanNotMiss" type="string" response optional>
          Any panels or events the user would not want to miss.
        </attribute>
        <attribute id="ep-et-vun-v-createdAt" name="createdAt" type="ISO-8601 Date" response>
          The date the volunteer application was created.
        </attribute>
        <attribute id="ep-et-vun-v-updatedAt" name="updatedAt" type="ISO-8601 Date" response>
          The date the volunteer application was last updated.
        </attribute>
      </>
    </parentAttribute>
    <parentAttribute id="ep-et-vun-user" name="user" type="object" response>
      <span>The user who created the volunteer application.</span>
      <>
        <attribute id="ep-et-vun-u-id" name="id" type="string" response>
          The unique identifier of the user.
        </attribute>
        <attribute id="ep-et-vun-u-username" name="username" type="string" response>
          The username of the user.
        </attribute>
        <attribute id="ep-et-vun-u-firstName" name="firstName" type="string" response>
          The first name of the user.
        </attribute>
        <attribute id="ep-et-vun-u-preferredName" name="preferredName" type="string" response optional>
          The preferred name of the user. If provided, this should be used instead of the first and last name, except where legally required.
        </attribute>
        <attribute id="ep-et-vun-u-lastName" name="lastName" type="string" response>
          The last name of the user.
        </attribute>
        <attribute id="ep-et-vun-u-email" name="email" type="string" response>
          The email address of the user.
        </attribute>
        <attribute id="ep-et-vun-u-verified" name="verified" type="boolean" response>
          Whether the user's email address has been verified.
        </attribute>
        <attribute id="ep-et-vun-u-createdAt" name="createdAt" type="ISO-8601 Date" response>
          The date the user was created.
        </attribute>
        <attribute id="ep-et-vun-u-updatedAt" name="updatedAt" type="ISO-8601 Date" response>
          The date the user was last updated.
        </attribute>
      </>
    </parentAttribute>
    <parentAttribute id="ep-et-vun-department" name="department" type="object" response>
      <span>The department the volunteer was removed from.</span>
      <>
        <attribute id="ep-et-vun-d-id" name="id" type="string" response>
          The unique identifier of the department.
        </attribute>
        <attribute id="ep-et-vun-d-name" name="name" type="string" response>
          The name of the department.
        </attribute>
        <attribute id="ep-et-vun-d-email" name="email" type="string" response>
          The email address for contacting the department lead.
        </attribute>
        <attribute id="ep-et-vun-d-publiclyVisible" name="publiclyVisible" type="boolean" response>
          Whether the department is publicly visible.
        </attribute>
        <attribute id="ep-et-vun-d-createdAt" name="createdAt" type="ISO-8601 Date" response>
          The date the department was created.
        </attribute>
        <attribute id="ep-et-vun-d-updatedAt" name="updatedAt" type="ISO-8601 Date" response>
          The date the department was last updated.
        </attribute>
      </>
    </parentAttribute>
  </div>
  <div>
    <exampleBox header='Response' headerSubText='application/json'>
      {`{
  "event": "volunteer-unassigned",
  "data": {
    "volunteer": {
      "id": "1234",
      "contactMethod": "email",
      "contactMethods": {
        "email": "johnny.test@concat.systems",
        "discord": "JohnnyTest#1234",
      },
      "availableBeforeCon": true,
      "anythingElse": "I'm a pretty cool guy.",
      "previousConExperience": "I've been to a few conventions.",
      "previousOtherExperience": "I've worked at a few conventions.",
      "eventsCanNotMiss": "I really want to see the panel on how to make a better sandwich.",
      "createdAt": "2020-01-01T00:00:00.000Z",
      "updatedAt": "2020-01-01T00:00:00.000Z"
    },
    "user": {
      "id": "1234",
      "username": "JohnnyTest",
      "firstName": "Johnny",
      "preferredName": "Johnny",
      "lastName": "Test",
      "email": "johnny.test@concat.systems",
      "verified": true,
      "createdAt": "2020-01-01T00:00:00.000Z",
      "updatedAt": "2020-01-01T00:00:00.000Z"
    },
    "department": {
      "id": "1234",
      "name": "Registration",
      "email": "registration@concat.event",
      "publiclyVisible": true,
      "createdAt": "2020-01-01T00:00:00.000Z",
      "updatedAt": "2020-01-01T00:00:00.000Z"
    }
  }
}`}
    </exampleBox>
  </div>
</splitColumn>

### `volunteer-deleted`
<splitColumn>
  <div>
    <p>When a volunteer has their volunteer application deleted.</p>
    <parentAttribute id="ep-et-vd-volunteer" name="volunteer" type="object" response>
      <span>The volunteer record containing the user's application.</span>
      <>
        <attribute id="ep-et-vd-v-id" name="id" type="string" response>
          The unique identifier of the volunteer application.
        </attribute>
        <attribute id="ep-et-vd-v-contactMethod" name="contactMethod" type="string" response>
          The preferred method of contact for the volunteer.
        </attribute>
        <parentAttribute id="ep-et-vd-v-contactMethods" name="contactMethods" type="key-value pair of strings" response>
          <span>The contact methods for the volunteer.</span>
          <>
            <attribute id="ep-et-vd-v-cm-key" name="key" type="string" response>
              A string representing the type of contact method.
            </attribute>
            <attribute id="ep-et-vd-v-cm-value" name="value" type="string" response>
              An arbitrary string provided by the user for the contact method.
            </attribute>
          </>
        </parentAttribute>
        <attribute id="ep-et-vd-v-availableBeforeCon" name="availableBeforeCon" type="boolean" response>
          Whether the volunteer is available before the event.
        </attribute>
        <attribute id="ep-et-vd-v-anythingElse" name="anythingElse" type="string" response optional>
          Any additional information the user provided.
        </attribute>
        <attribute id="ep-et-vd-v-previousConExperience" name="previousConExperience" type="string" response optional>
          The user's previous convention experience.
        </attribute>
        <attribute id="ep-et-vd-v-previousOtherExperience" name="previousOtherExperience" type="string" response optional>
          The user's previous experience outside of events that may relate to their preferred departments.
        </attribute>
        <attribute id="ep-et-vd-v-eventsCanNotMiss" name="eventsCanNotMiss" type="string" response optional>
          Any panels or events the user would not want to miss.
        </attribute>
        <attribute id="ep-et-vd-v-createdAt" name="createdAt" type="ISO-8601 Date" response>
          The date the volunteer application was created.
        </attribute>
        <attribute id="ep-et-vd-v-updatedAt" name="updatedAt" type="ISO-8601 Date" response>
          The date the volunteer application was last updated.
        </attribute>
      </>
    </parentAttribute>
    <parentAttribute id="ep-et-vd-user" name="user" type="object" response>
      <span>The user who created the volunteer application.</span>
      <>
        <attribute id="ep-et-vd-u-id" name="id" type="string" response>
          The unique identifier of the user.
        </attribute>
        <attribute id="ep-et-vd-u-username" name="username" type="string" response>
          The username of the user.
        </attribute>
        <attribute id="ep-et-vd-u-firstName" name="firstName" type="string" response>
          The first name of the user.
        </attribute>
        <attribute id="ep-et-vd-u-preferredName" name="preferredName" type="string" response optional>
          The preferred name of the user. If provided, this should be used instead of the first and last name, except where legally required.
        </attribute>
        <attribute id="ep-et-vd-u-lastName" name="lastName" type="string" response>
          The last name of the user.
        </attribute>
        <attribute id="ep-et-vd-u-email" name="email" type="string" response>
          The email address of the user.
        </attribute>
        <attribute id="ep-et-vd-u-verified" name="verified" type="boolean" response>
          Whether the user's email address has been verified.
        </attribute>
        <attribute id="ep-et-vd-u-createdAt" name="createdAt" type="ISO-8601 Date" response>
          The date the user was created.
        </attribute>
        <attribute id="ep-et-vd-u-updatedAt" name="updatedAt" type="ISO-8601 Date" response>
          The date the user was last updated.
        </attribute>
      </>
    </parentAttribute>
    <parentAttribute id="ep-et-vd-department" name="department" type="object" response>
      <span>The department the volunteer was assigned to.</span>
      <>
        <attribute id="ep-et-vd-d-id" name="id" type="string" response>
          The unique identifier of the department.
        </attribute>
        <attribute id="ep-et-vd-d-name" name="name" type="string" response>
          The name of the department.
        </attribute>
        <attribute id="ep-et-vd-d-email" name="email" type="string" response>
          The email address for contacting the department lead.
        </attribute>
        <attribute id="ep-et-vd-d-publiclyVisible" name="publiclyVisible" type="boolean" response>
          Whether the department is publicly visible.
        </attribute>
        <attribute id="ep-et-vd-d-createdAt" name="createdAt" type="ISO-8601 Date" response>
          The date the department was created.
        </attribute>
        <attribute id="ep-et-vd-d-updatedAt" name="updatedAt" type="ISO-8601 Date" response>
          The date the department was last updated.
        </attribute>
      </>
    </parentAttribute>
  </div>
  <div>
    <exampleBox header='Response' headerSubText='application/json'>
      {`{
  "event": "volunteer-deleted",
  "data": {
    "volunteer": {
      "id": "1234"
    }
  }
}`}
    </exampleBox>
  </div>
</splitColumn>

### `registration-updated`
<splitColumn>
  <div>
    <p>The user created or updated their attendee registration.</p>
    <parentAttribute id="ep-et-ru-registration" name="registration" type="object" response>
      <span>The registration record containing the user's event registration.</span>
      <>
        <attribute id="ep-et-ru-r-attendanceTypeId" name="attendanceTypeId" type="string" response>
          The unique identifier of the attendance type product.
        </attribute>
        <attribute id="ep-et-ru-r-badgeArtId" name="badgeArtId" type="number" response>
          The unique identifier for the user's chosen badge art.
        </attribute>
        <attribute id="ep-et-ru-r-badgeName" name="badgeName" type="string" response>
          The user's chosen badge name.
        </attribute>
        <attribute id="ep-et-ru-r-id" name="id" type="string" response>
          The unique identifier of the registration.
        </attribute>
        <attribute id="ep-et-ru-r-userId" name="userId" type="string" response>
          The unique identifier of the user.
        </attribute>
        <attribute id="ep-et-ru-r-createdAt" name="createdAt" type="ISO-8601 Date" response>
          The date the registration was created.
        </attribute>
        <attribute id="ep-et-ru-r-updatedAt" name="updatedAt" type="ISO-8601 Date" response>
          The date the registration was last updated.
        </attribute>
      </>
    </parentAttribute>
    <parentAttribute id="ep-et-ru-user" name="user" type="object" response>
      <span>The user who created the registration.</span>
      <>
        <attribute id="ep-et-ru-u-id" name="id" type="string" response>
          The unique identifier of the user.
        </attribute>
        <attribute id="ep-et-ru-u-username" name="username" type="string" response>
          The username of the user.
        </attribute>
        <attribute id="ep-et-ru-u-firstName" name="firstName" type="string" response>
          The first name of the user.
        </attribute>
        <attribute id="ep-et-ru-u-preferredName" name="preferredName" type="string" response optional>
          The preferred name of the user. If provided, this should be used instead of the first and last name, except where legally required.
        </attribute>
        <attribute id="ep-et-ru-u-lastName" name="lastName" type="string" response>
          The last name of the user.
        </attribute>
        <attribute id="ep-et-ru-u-email" name="email" type="string" response>
          The email address of the user.
        </attribute>
        <attribute id="ep-et-ru-u-verified" name="verified" type="boolean" response>
          Whether the user's email address has been verified.
        </attribute>
        <attribute id="ep-et-ru-u-createdAt" name="createdAt" type="ISO-8601 Date" response>
          The date the user was created.
        </attribute>
        <attribute id="ep-et-ru-u-updatedAt" name="updatedAt" type="ISO-8601 Date" response>
          The date the user was last updated.
        </attribute>
        <parentAttribute id="ep-et-ru-u-socialLinks" name="socialLinks" type="key-value pair of strings" response>
          <span>The social accounts the user has linked to their user profile.</span>
          <>
            <attribute id="ep-et-ru-u-sl-key" name="key" type="string" response>
              The name of the social account (e.g. "twitter" or "discord").
            </attribute>
            <attribute id="ep-et-ru-u-sl-value" name="value" type="string" response>
              The unique identifier of the social account (e.g. "1234" or "JohnnyTest#1234"), with the format depending on the third-party service.
            </attribute>
          </>
        </parentAttribute>
      </>
    </parentAttribute>
  </div>
  <div>
    <exampleBox header='Response' headerSubText='application/json'>
      {`{
  "event": "registration-updated",
  "data": {
    "registration": {
      "attendanceTypeId": "91011",
      "badgeArtId": 12,
      "badgeName": "Test User",
      "id": "1234",
      "userId": "5678",
      "createdAt": "2020-01-01T00:00:00.000Z",
      "updatedAt": "2020-01-01T00:00:00.000Z"
    },
    "user": {
      "id": "5678",
      "username": "JohnnyTest",
      "firstName": "Johnny",
      "lastName": "Test",
      "preferredName": "Johnny",
      "email": "johnny.test@concat.systems",
      "verified": true,
      "createdAt": "2020-01-01T00:00:00.000Z",
      "updatedAt": "2020-01-01T00:00:00.000Z",
      "socialLinks": {
        "twitter": "1234",
        "discord": "JohnnyTest#1234"
      }
    }
  }
}`}
    </exampleBox>
  </div>
</splitColumn>

### `user-updated`
<splitColumn>
  <div>
    <p>The user's profile was created or updated.</p>
    <parentAttribute id="ep-et-uu-user" name="user" type="object" response>
      <span>The user's profile.</span>
      <>
        <attribute id="ep-et-uu-u-id" name="id" type="string" response>
          The unique identifier of the user.
        </attribute>
        <attribute id="ep-et-uu-u-username" name="username" type="string" response>
          The username of the user.
        </attribute>
        <attribute id="ep-et-uu-u-firstName" name="firstName" type="string" response>
          The first name of the user.
        </attribute>
        <attribute id="ep-et-uu-u-preferredName" name="preferredName" type="string" response optional>
          The preferred name of the user. If provided, this should be used instead of the first and last name, except where legally required.
        </attribute>
        <attribute id="ep-et-uu-u-lastName" name="lastName" type="string" response>
          The last name of the user.
        </attribute>
        <attribute id="ep-et-uu-u-email" name="email" type="string" response>
          The email address of the user.
        </attribute>
        <attribute id="ep-et-uu-u-verified" name="verified" type="boolean" response>
          Whether the user's email address has been verified.
        </attribute>
        <attribute id="ep-et-uu-u-createdAt" name="createdAt" type="ISO-8601 Date" response>
          The date the user was created.
        </attribute>
        <attribute id="ep-et-uu-u-updatedAt" name="updatedAt" type="ISO-8601 Date" response>
          The date the user was last updated.
        </attribute>
        <attribute id="ep-et-uu-u-organizationId" name="organizationId" type="string" response>
          A unique identifier for the organization the user account belongs to. This is used to share a single account across all events run by the same organization.
        </attribute>
      </>
    </parentAttribute>
  </div>
  <div>
    <exampleBox header='Response' headerSubText='application/json'>
      {`{
  "event": "registration-updated",
  "data": {
    "user": {
      "id": "5678",
      "username": "JohnnyTest",
      "firstName": "Johnny",
      "lastName": "Test",
      "preferredName": "Johnny",
      "email": "johnny.test@concat.systems",
      "verified": true,
      "createdAt": "2020-01-01T00:00:00.000Z",
      "updatedAt": "2020-01-01T00:00:00.000Z",
      "organizationId": "e9eb88a2-6b61-4feb-bbd7-744a05f4ace6"
    }
  }
}`}
    </exampleBox>
  </div>
</splitColumn>