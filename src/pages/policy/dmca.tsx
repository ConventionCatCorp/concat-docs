import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Admonition from '@theme/Admonition';
import Layout from "@theme/Layout";
import React from "react";

import styles from './policy.module.scss';

export default function Terms(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="DMCA Takedown Policy"
      description="Simple event management for events of all sizes.">
      <main className={styles.main}>
        <h1>DMCA Takedown Policy</h1>
        <div className={styles.subtitle}>
          Effective date: July 14, 2022
        </div>
        <p>
          Convention Cat Event Systems, Inc. ("ConCat") respects the intellectual property rights of others
          and expects the same from all users of its services.
        </p>

        <p>
          Title II of the Digital Millennium Copyright Act, 17 U.S.C. Section 512(c)(3) provides for the
          right of the copyright owner to notify and inform ConCat of alleged copyright infringement by its users,
          and outlines the required elements of a valid DMCA notification.
        </p>

        <h3>Designated Agent</h3>
        <p>
          Notification of alleged infringement should be sent to our Designated Agent, using one of the following
          methods (in order of expedience):
        </p>
        <ul>
          <li><strong>By Email:</strong> <a href="mailto:dmca@concat.systems">dmca@concat.systems</a></li>
          <li>
            <p>
              <strong>By Mail</strong>:<br />
              Attn: DMCA Compliance Agent<br />
              Convention Cat Event Systems, Inc.<br />
              270 S 171st<br />
              Burien, WA 98148
            </p>
            <p>
              <small>
                <i>
                  We <strong>strongly</strong> recommend that DMCA notices sent by mail are sent via Certified Mail,
                  with Return Receipt Requested.
                </i>
              </small>
            </p>
          </li>
        </ul>
        <p>
          A copy of this Designated Agent Information can be retrieved from the US Copyright Office&nbsp;
          <a href="https://dmca.copyright.gov">DMCA Designated Agent Directory</a> website.
        </p>
        <h3>DMCA Handling Process</h3>
        <ol>
          <li>
            <h4>ConCat Receives Notice and Removes Content</h4>
            <p>
              Assuming ConCat has received a valid DMCA notice, ConCat will acknowledge the notice within 24 hours
              and will forward a copy of the notice to the reported user(s).
            </p>
            <p>
              ConCat will subsequently disable access to the allegedly infringing content outlined in the DMCA notice.
            </p>
            <p>
              If the notice omits any of the required information under the DMCA, ConCat will send a rejection notice
              to both parties stating the omitted information and requesting the Copyright Owner submit a new notice.
            </p>
          </li>
          <li>
            <h4>Reported User May Send A Counter Notification</h4>
            <p>
              <strong>
                We strongly recommend users consult with a lawyer about their options before filing a counter
                notification.
              </strong>
            </p>
            <p>
              ConCat will review the counter notification and, if it is deemed sufficiently detailed, will forward
              it to the Copyright Owner.
            </p>
            <p>
              If there is no response from the Copyright Owner within ten (10) business days of the receipt of the
              counter notification, ConCat will restore access to the reported content.
            </p>
          </li>
          <li>
            <h4>Copyright Owner May File Legal Action</h4>
            <p>
              If upon the receipt of a counter notification, the Copyright Owner wishes to keep the content
              disabled, they will need to initiate a legal action seeking a court order to restrain the user
              from engaging in infringing activity relating to content on ConCat.
            </p>
          </li>
          <li>
            <h4>No Counter Notification is Received</h4>
            <p>
              If a counter notification is not received within ten (10) business days of the receipt of the
              original DMCA notice, ConCat will permanently delete the allegedly infringing content.
            </p>
          </li>
          <li>
            <h4>Reported User May Be Suspended</h4>
            <p>
              ConCat may, in appropriate circumstances, suspend or terminate a user's access to ConCat services
              in the event of repeated infringement of copyright or other intellectual property rights.
            </p>
          </li>
        </ol>
        <h3>DMCA Notice Requirements</h3>
        <p>
          As outlined in 17 U.S.C. Section 512(c)(3), in order to be effective a notice of claimed
          infringement must include the following:
        </p>
        <ul>
          <li>A description or link to the copyrighted work that has allegedly been infringed.</li>
          <li>A description of the material you claim is infringing and, if possible, a link to that material.</li>
          <li>Your legal name, title (if acting as an agent), address, telephone number, and email address.</li>
          <li>
            The following statement:
            <i>
              "I have a good faith belief that use of the copyrighted materials described in this notice as
              allegedly infringing is not authorized by the copyright owner, its agent, or the law. I have
              taken fair use into consideration."
            </i>
          </li>
          <li>
            The following statement:
            <i>
              "I swear, under penalty of perjury, that the information in this notification is accurate and
              that I am authorized to act on behalf of the owner of a right that is allegedly infringed"
            </i>
          </li>
          <li>
            A physical or digital signature of the owner, or a person authorized to act on behalf of the owner,
            of the copyright or of an exclusive right that is allegedly infringed.
          </li>
        </ul>
        <p>
          We will review your notice will take the actions outlined above as we deem appropriate under the DMCA.
        </p>
        <h3>DMCA Counter Notification Requirements</h3>
        <Admonition type="caution" title="Before You Counter Claim">
          <p>
            ConCat strongly recommends that you consult with a lawyer about your specific case and options before
            taking any action that might impact your rights.
          </p>
          <p>
            This guide is not legal advice and shouldn't be taken as such.
          </p>
        </Admonition>
        <p>
          If you are unable to come to an agreement with the copyright owner, or believe that your content has
          been disabled in error, you can submit a counter notification within ten (10) business days of the
          original notice with the following information:
        </p>
        <ul>
          <li>Your legal name, title (if acting as an agent), address, telephone number, and email address.</li>
          <li>A description or link to the content to which access has been disabled and the location where it appeared.</li>
          <li>
            The following statement:
            <i>
              "I swear, under penalty of perjury, that I have a good faith belief that the content was disabled
              as a result of a mistake or misidentification of the content to be disabled."
            </i>
          </li>
          <li>
            One of the following statements (as appropriate):
            <ul>
              <li>
                <strong>If within the United States</strong>,&nbsp;
                <i>
                  "I consent to the jurisdiction of the Federal District Court for the judicial district in
                  which my provided address is located."
                </i>
              </li>
              <li>
                <strong>If outside the United States</strong>,&nbsp;
                <i>
                  "I consent to the jurisdiction of the Federal District Court for the District of Delaware
                  in which Convention Cat Event Systems, Inc. is located."
                </i>
              </li>
            </ul>
          </li>
          <li>
            The following statement:
            <i>
              "I will accept service of process from the person who provided the original notification or
              an agent of such person."
            </i>
          </li>
          <li>Your physical or digital signature.</li>
        </ul>
      </main>
    </Layout>
  );
}
