# Validating Payloads

Each webhook POST request will include a signed JWT payload in the `authorization` header. The payload contains a Base64 **sha256** hash of the `data` property. You can use this hash to verify that the payload was sent by ConCat.

## JWT format

The JWT payload will contain the following properties:

| Key | Description |
| --- | ----------- |
| `int` | The SHA256 hash of the `data` property. |
| `exp` | The expiration time of the JWT payload. JWT events are valid for 120 seconds from creation. |
| `iat` | The time the JWT payload was created. |
| `aud` | The URL of the webhook. |
| `iss` | Always `concat.app`. |
| `sub` | Always `webhook`. |

## Verifying the JWT

We **strongly** recommend verifying the JWT payload before processing the webhook event. At a minimum, you should verify the following:

  * The `aud` property matches the URL of the webhook.
  * The `exp` property is greater than the current time.
  * The `iss` property is `concat.app`.
  * The `sub` property is `webhook`.

### Verifiying the JWT signature

The JWT payload will be signed by ConCat and can be validated with the public key found at the `/api/webhooks/key` endpoint of your ConCat instance. The public key is a PEM-encoded X.509 RSA public key.

We recommend using one of the supported JWT libraries listed on the [jwt.io](https://jwt.io/libraries) website.

## Verifying the payload hash

The `int` property of the JWT payload is a Base64-encoded SHA256 hash of the `data` property of the webhook payload. You can use this hash to verify that the payload was not modified by a third-party or damaged in transit.