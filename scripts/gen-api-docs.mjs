// Fetches the v0 Swagger spec from a running ConCat instance and generates the endpoint
// reference in docs/api/endpoints/v0/reference/ from it. Both the spec and the pages are
// gitignored; `prestart` and `prebuild` run this.
//
// OPENAPI_ORIGIN picks the instance (default https://demo.concat.app). If the fetch fails
// and a spec from an earlier run exists, that one is used, so `npm start` works offline.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const origin = process.env.OPENAPI_ORIGIN || 'https://demo.concat.app';
const specPath = 'static/openapi/concat.json';
const outputDir = 'docs/api/endpoints/v0/reference';
// Hand-written; `docusaurus clean-api-docs` would delete it, so stale output is removed here.
const keep = new Set(['_category_.json']);

try {
  const url = new URL('/api/swagger.json', origin);
  const response = await fetch(url, { signal: AbortSignal.timeout(30_000) });
  if (!response.ok) throw new Error(`GET ${url}: ${response.status}`);
  const spec = await response.json();
  // The host is the instance the spec was fetched from; every convention has its own.
  delete spec.host;
  // basePath "/" would be prepended to every path, giving "//api/...".
  delete spec.basePath;
  spec.schemes = ['https'];
  mkdirSync(dirname(specPath), { recursive: true });
  writeFileSync(specPath, `${JSON.stringify(spec, null, 2)}\n`);
  console.log(`[gen-api-docs] ${Object.keys(spec.paths).length} paths from ${url}`);
} catch (error) {
  if (!existsSync(specPath)) throw error;
  console.warn(`[gen-api-docs] ${error.message}; using the existing ${specPath}`);
}

for (const entry of readdirSync(outputDir)) {
  if (!keep.has(entry)) rmSync(join(outputDir, entry), { recursive: true });
}
execFileSync('docusaurus', ['gen-api-docs', 'concat'], { stdio: ['ignore', 'ignore', 'inherit'] });
