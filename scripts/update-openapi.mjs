// Refreshes static/openapi/concat.json from a running ConCat instance's Swagger spec.
// Usage: node scripts/update-openapi.mjs <instance origin, e.g. http://localhost:8082>
// The instance must run ConCat master. Afterwards regenerate the reference pages with
// `npm run gen-api-docs`.
import { writeFileSync } from 'node:fs';

const origin = process.argv[2];
if (!origin) {
  console.error('Usage: node scripts/update-openapi.mjs <instance origin>');
  process.exit(1);
}
const response = await fetch(new URL('/api/swagger.json', origin));
if (!response.ok) throw new Error(`GET /api/swagger.json: ${response.status}`);
const spec = await response.json();
// The host is the instance the spec was fetched from; every convention has its own.
delete spec.host;
// basePath "/" would be prepended to every path, giving "//api/...".
delete spec.basePath;
spec.schemes = ['https'];
writeFileSync(new URL('../static/openapi/concat.json', import.meta.url), `${JSON.stringify(spec, null, 2)}\n`);
console.log(`Wrote ${Object.keys(spec.paths).length} paths from ${origin}`);
