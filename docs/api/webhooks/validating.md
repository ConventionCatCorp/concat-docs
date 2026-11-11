---
sidebar_position: 3
displayed_sidebar: apiSidebar
---

# Validating Payloads

Each webhook request carries a JWT, signed by ConCat, in its `authorization` header: `Bearer <JWT>`. The JWT includes a base64 SHA-256 hash of the request body. Check both before you trust a request: the signature proves ConCat sent it, and the hash proves the body wasn't changed.

## JWT format

The JWT header names the signing key in `kid`, and the algorithm in `alg`. The payload contains these claims:

| Claim | Description |
| --- | --- |
| `int` | The base64-encoded SHA-256 hash of the **entire request body**, exactly as sent: the JSON text of `{"data": …, "event": …}`. |
| `aud` | The **host** of the webhook's URL: the host name, plus the port if the URL has one. For `https://hooks.example.com/concat`, it's `hooks.example.com`. |
| `iss` | The domain ConCat is configured with. It's the same on every request, so note it from a test event and check it. |
| `sub` | Always `webhook`. |
| `iat` | When the JWT was created. |
| `exp` | When the JWT expires: 120 seconds after it was created. |

## The signing key

ConCat publishes its public keys, without authentication, in two places on every instance:

- `GET /.well-known/jwks.json` returns every key as a JWK Set (`{"keys": [ … ]}`). Pick the key whose `kid` matches the JWT header. See [Get signing keys](/docs/api/endpoints/v0/reference/get-signing-keys).
- `GET /api/webhooks/key` returns only the key ConCat signs with now, as a single JWK.

The keys are JSON Web Keys, not PEM files. Fetch the JWK Set and cache it; fetch it again when a JWT names a `kid` you don't have. **View Verification Key** in Housekeeping shows the key from `/api/webhooks/key`.

The signing algorithm comes from the key's `alg`, and is RS256 when the key doesn't name one. Accept only the key's algorithm; don't hard-code one.

## Verifying a request

1. Read the raw request body as bytes, before any JSON parsing, and the `authorization` header.
2. Take the JWT from after `Bearer `, read `kid` from its header, and find the matching key in the JWK Set.
3. Verify the JWT's signature with that key and the key's `alg`. Check that `exp` hasn't passed, `sub` is `webhook`, `aud` is your webhook URL's host, and `iss` is the issuer you expect.
4. Compute the SHA-256 hash of the raw body, encode it as base64, and compare it with the `int` claim.
5. Only then parse the body and act on `event` and `data`.

Re-serializing a parsed body can change it (spacing, key order, escaping), so always hash the bytes you received.

We recommend using one of the supported JWT libraries listed on the [jwt.io](https://jwt.io/libraries) website. For example, in Node.js with [`jose`](https://github.com/panva/jose):

```js
import { createHash } from 'node:crypto';
import { createRemoteJWKSet, jwtVerify } from 'jose';

const jwks = createRemoteJWKSet(new URL('https://reg.mybigevent.org/.well-known/jwks.json'));

// rawBody: the request body as a Buffer; authorization: the header value
export async function verifyWebhook(rawBody, authorization) {
  const token = authorization.replace(/^Bearer /, '');
  const { payload } = await jwtVerify(token, jwks, {
    audience: 'hooks.example.com', // your webhook URL's host
    issuer: process.env.CONCAT_ISSUER, // the iss you noted from a test event
    subject: 'webhook',
  });

  const hash = createHash('sha256').update(rawBody).digest('base64');
  if (hash !== payload.int) {
    throw new Error('Webhook body does not match its signature');
  }

  return JSON.parse(rawBody.toString('utf8'));
}
```
