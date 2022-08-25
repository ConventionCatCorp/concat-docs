# Events and Payloads

You can create webhooks that subscribe to one or more events listed on this page. Each webhook event listed here includes a description of the properties and an example payload.

## Common properties

Each webhook, in addition to the event-specific properties, will include the following common properties:

<attribute id="ep-cp-event" name="event" type="string" response>
  The name of the event that triggered the webhook.
</attribute>
<attribute id="ep-cp-data" name="data" type="object" response>
  The event-specific data. See the corresponding section under **event types** for more information.
</attribute>

## Common headers

Each POST request will include the following headers:

<attribute id="ep-ch-user-agent" name="user-agent" type="string" response>
  The HTTP client used to send the request. This will always be `ConCat/AxiosHTTPClient`.
</attribute>
<attribute id="ep-ch-authorization" name="authorization" type="string" response>
  A bearer token with a signed JWT payload containing a base64-encoded sha256 hash of the `data` property. See [Validating Payloads](/docs/api/webhooks/validating) for more information.
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

### `volunteer-assigned`

### `volunteer-unassigned`

### `volunteer-deleted`

### `registration-created`

### `registration-updated`

### `user-updated`