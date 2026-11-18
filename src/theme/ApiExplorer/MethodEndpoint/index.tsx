// Shadows MethodEndpoint from docusaurus-theme-openapi-docs (pinned at 5.2.0) so that a long path wraps at its
// slashes. A path such as /api/v0/users/:userId/roles/:roleId has no line-break opportunity of its own, so on a
// narrow screen it would split inside a name. A <wbr> before each slash adds one without adding characters, so
// copying the path still gives it exactly. The markup and classes are otherwise the theme's. The theme's
// server-URL prefix is left out: scripts/gen-api-docs.mjs removes the spec's host (each convention has its own),
// so there's never one to show. Styles: src/css/_api-reference.scss.
import clsx from 'clsx';
import React, { Fragment, type ReactNode } from 'react';

interface Props {
  method: string;
  path: string;
  context?: 'endpoint' | 'callback';
}

// The theme's Infima badge variant for each method.
const BADGE: Record<string, string> = {
  get: 'primary',
  post: 'success',
  delete: 'danger',
  put: 'info',
  patch: 'warning',
  head: 'secondary',
  event: 'secondary',
};

function pathWithBreaks(path: string): ReactNode[] {
  // Path parameters read as :name, as the theme writes them ({userId} → :userId).
  const segments = path.replace(/{([a-z0-9-_]+)}/gi, ':$1').split('/');
  return segments.map((segment, i) => (
    <Fragment key={i}>
      {i > 1 && <wbr />}
      {i > 0 && '/'}
      {segment}
    </Fragment>
  ));
}

export default function MethodEndpoint({ method, path }: Props): React.JSX.Element {
  const variant = BADGE[method.toLowerCase()];
  return (
    <>
      <pre className="openapi__method-endpoint">
        <span className={clsx('badge', variant && `badge--${variant}`)}>
          {method === 'event' ? 'Webhook' : method.toUpperCase()}
        </span>{' '}
        {method !== 'event' && <h2 className="openapi__method-endpoint-path">{pathWithBreaks(path)}</h2>}
      </pre>
      <div className="openapi__divider" />
    </>
  );
}
