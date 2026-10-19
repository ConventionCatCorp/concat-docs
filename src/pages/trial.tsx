import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React, { useRef, useState, type SubmitEvent } from 'react';
import Card from '../components/Card';
import Recaptcha, { type RecaptchaHandle } from '../components/Recaptcha';
import SplitColumn from '../components/SplitColumn';
import { countries } from '../data/countries';

import styles from './trial.module.scss';

interface SignupRequest {
  country: string;
  email: string;
  firstName: string;
  lastName: string;
  orgName: string;
}

type Status =
  | { state: 'idle' }
  | { state: 'submitting' }
  | { state: 'success'; email: string }
  | { state: 'error'; message: string };

const GENERIC_ERROR = 'Something went wrong while creating your trial. Please try again in a moment.';

function useTrialConfig() {
  const { customFields } = useDocusaurusContext().siteConfig;
  const origin = customFields?.['onboardingApiOrigin'];
  const siteKey = customFields?.['recaptchaSiteKey'];
  return {
    signupUrl: typeof origin === 'string' && origin ? new URL('/api/signups', origin).href : null,
    siteKey: typeof siteKey === 'string' && siteKey ? siteKey : null,
  };
}

async function readErrorMessage(response: Response): Promise<string> {
  try {
    const body: unknown = await response.json();
    if (body && typeof body === 'object' && 'message' in body && typeof body.message === 'string') {
      return body.message;
    }
  } catch {
    // Not JSON; fall through to the generic message.
  }
  return GENERIC_ERROR;
}

function TrialForm() {
  const { signupUrl, siteKey } = useTrialConfig();
  const recaptchaRef = useRef<RecaptchaHandle>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaFailed, setCaptchaFailed] = useState(false);
  const [status, setStatus] = useState<Status>({ state: 'idle' });

  if (!signupUrl || !siteKey) {
    return (
      <p className={styles['notice']} role="status">
        Trial signups are temporarily unavailable. Please contact{' '}
        <a href="mailto:sales@concat.systems">sales@concat.systems</a> to get started.
      </p>
    );
  }

  if (status.state === 'success') {
    return (
      <div className={styles['success']} role="status">
        <i className="material-symbols-outlined" aria-hidden="true">
          mark_email_read
        </i>
        <h2>Check your inbox</h2>
        <p>
          We're provisioning your instance now. When it's ready, we'll send a sign-in link to{' '}
          <strong>{status.email}</strong>.
        </p>
      </div>
    );
  }

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!signupUrl) return;
    if (!captchaToken) {
      setStatus({ state: 'error', message: 'Please confirm that you are not a robot.' });
      return;
    }

    const data = new FormData(event.currentTarget);
    const field = (name: keyof SignupRequest) => String(data.get(name) ?? '').trim();
    const payload: SignupRequest = {
      country: field('country'),
      email: field('email'),
      firstName: field('firstName'),
      lastName: field('lastName'),
      orgName: field('orgName'),
    };

    setStatus({ state: 'submitting' });
    try {
      const response = await fetch(signupUrl, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'X-Recaptcha-Token': captchaToken,
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        setStatus({ state: 'error', message: await readErrorMessage(response) });
        recaptchaRef.current?.reset();
        return;
      }
      setStatus({ state: 'success', email: payload.email });
    } catch {
      setStatus({ state: 'error', message: GENERIC_ERROR });
      recaptchaRef.current?.reset();
    }
  }

  const submitting = status.state === 'submitting';

  return (
    <form onSubmit={handleSubmit}>
      <p className={styles['legend']}>Administrator</p>

      <div className={styles['field']}>
        <div className={styles['field-row']}>
          <div>
            <label htmlFor="firstName">
              First name<span className={styles['required']}>*</span>
            </label>
            <input type="text" id="firstName" name="firstName" autoComplete="given-name" placeholder="Alex" required />
          </div>
          <div>
            <label htmlFor="lastName">
              Last name<span className={styles['required']}>*</span>
            </label>
            <input type="text" id="lastName" name="lastName" autoComplete="family-name" placeholder="Rivera" required />
          </div>
        </div>
      </div>

      <div className={styles['field']}>
        <label htmlFor="email">
          Email address<span className={styles['required']}>*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          placeholder="alex@yourevent.org"
          aria-describedby="email-help"
          required
        />
        <span id="email-help" className={styles['help']}>
          This becomes your sign-in and where we send the instance link.
        </span>
      </div>

      <hr />

      <p className={styles['legend']}>Organization</p>

      <div className={styles['field']}>
        <label htmlFor="orgName">
          Business or entity name<span className={styles['required']}>*</span>
        </label>
        <input
          type="text"
          id="orgName"
          name="orgName"
          autoComplete="organization"
          placeholder="Cascadia Events LLC"
          aria-describedby="orgName-help"
          required
        />
        <span id="orgName-help" className={styles['help']}>
          The legal entity that will run the event. You can add events and change display names later.
        </span>
      </div>

      <div className={styles['field']}>
        <label htmlFor="country">
          Country of registration<span className={styles['required']}>*</span>
        </label>
        <select id="country" name="country" defaultValue="" aria-describedby="country-help" required>
          <option value="" disabled>
            Select a country
          </option>
          {countries.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
        <span id="country-help" className={styles['help']}>
          Where the entity is registered. This determines which Stripe payment methods and tax handling apply.
        </span>
      </div>

      <hr />

      <div className={styles['captcha']}>
        {captchaFailed ? (
          <p className={styles['error']} role="alert">
            The reCAPTCHA check couldn't load. Disable any blockers for google.com and reload the page.
          </p>
        ) : (
          <Recaptcha
            ref={recaptchaRef}
            siteKey={siteKey}
            onChange={setCaptchaToken}
            onLoadError={() => setCaptchaFailed(true)}
          />
        )}
      </div>

      {status.state === 'error' && (
        <p className={styles['error']} role="alert">
          {status.message}
        </p>
      )}

      <button
        type="submit"
        className="button button--primary button--lg button--block"
        disabled={submitting || captchaFailed}
      >
        {submitting ? 'Creating your instance…' : 'Create my trial instance'}
      </button>
      <p className={styles['fine-print']}>
        No credit card required. By continuing you agree to the <Link to="/policy/terms">Terms of Service</Link> and{' '}
        <Link to="/policy/privacy">Privacy Policy</Link>.
      </p>
    </form>
  );
}

export default function Trial(): React.JSX.Element {
  return (
    <Layout
      title="Get a Trial Instance"
      description="Spin up a private ConCat environment preloaded with a sample event."
    >
      <main className={styles['main']}>
        <SplitColumn>
          <div>
            <h1>Get a trial instance</h1>
            <p>
              Spin up a private ConCat environment preloaded with a sample event, so you can walk through attendee
              registration, the event store, the vendor hall, and volunteer management before you commit to anything.
            </p>

            <h3>What's included</h3>
            <ul className={styles['feature-list']}>
              <li>
                <i className="material-symbols-outlined" aria-hidden="true">
                  check_circle
                </i>
                <span>Every Standard Plan module, nothing held back</span>
              </li>
              <li>
                <i className="material-symbols-outlined" aria-hidden="true">
                  check_circle
                </i>
                <span>A sample event with test attendees and products</span>
              </li>
              <li>
                <i className="material-symbols-outlined" aria-hidden="true">
                  check_circle
                </i>
                <span>Stripe test mode — no live charges</span>
              </li>
              <li>
                <i className="material-symbols-outlined" aria-hidden="true">
                  check_circle
                </i>
                <span>30 days, no card required</span>
              </li>
            </ul>

            <h3>What happens next</h3>
            <ol className={`numbered-list ${styles['steps']}`}>
              <li>We provision your instance. This usually takes a few minutes.</li>
              <li>You get an email with a sign-in link for the administrator account you create below.</li>
              <li>Explore with the sample data, or clear it and start building your real event.</li>
              <li>
                Ready to go live? Talk to sales and we'll convert the instance in place — your configuration carries
                over.
              </li>
            </ol>
          </div>
          <Card header="Start your trial" className={styles['form-card']}>
            <TrialForm />
          </Card>
        </SplitColumn>
      </main>
    </Layout>
  );
}
