import React from "react";
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CustomAccordion.css";
export default function CustomAccordion() {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="accordion-header">
            Why won't my credit card transaction complete payment?
          </Accordion.Header>
          <Accordion.Body className="accordion-body">
            <ul>
              <li>
                Discover Card Holders: The system does not accept Discover Card.
              </li>
              <li>
                American Express Holders: The four digit security code can be
                found on the front of your card.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Are refunds available for online courses?
          </Accordion.Header>
          <Accordion.Body>
            Online (asynchronous) courses are non-refundable after purchase.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Does my state board accept online courses for CE credit?
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Our online (asynchronous) courses are COPE (Council on Optometric
              Practitioner Education) approved and accepted nationwide for
              license renewal, with the exception of The Glaucoma Specialist
              Course, which only has Texas Optometry Board approval. A reference
              list of State CE Requirements can be found on the COPE website at{" "}
              <a href="https://www.arbo.org/cestateinfo">
                https://www.arbo.org/cestateinfo
              </a>
              . Not all states accept online courses for CE credit, therefore we
              advise you to check with your State Board of Optometry for
              complete eligibility requirements. Course descriptions are
              available on the Online Course List Page.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>How do I earn online CE credit?</Accordion.Header>
          <Accordion.Body>
            <p>
              To receive credit for any of our online (asynchronous) courses:
            </p>

            <ol>
              <li>Create a user account</li>
              <li>Purchase a course </li>
              <li>View the course in its entirety </li>
              <li>
                Complete and pass the post-course exam with a grade of 70% or
                higher{" "}
              </li>
              <li>
                Print out your Certificate of Completion and submit that
                certificate directly to your State Board of Optometry to receive
                credit{" "}
              </li>
            </ol>

            <p>
              Note: UHCO will report successful completion directly to COPE and
              CE Broker for the Texas Optometry Board. Reporting occurs on a
              monthly basis. Texas ODs may also self-report to CE Broker.{" "}
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            How do I receive my Certificate of Completion?
          </Accordion.Header>
          <Accordion.Body>
            <p>
              A printable Certificate of Completion will be issued directly to
              you once you successfully pass the exam associated with your
              online (asynchronous) coursework. Certificates are available
              through your online account and can be accessed by logging into
              your account at any time.
            </p>

            <p>
              UHCO will report successful completion directly to COPE and CE
              Broker for the Texas Optometry Board. Reporting occurs on a
              monthly basis. Texas ODs may also self-report to CE Broker.
            </p>

            <p>
              Online CE participants licensed outside of Texas are responsibile
              for submitting their certificate(s) of completion directly to
              their state board of optometry to receive credit.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>What if I do not pass the exam?</Accordion.Header>
          <Accordion.Body>
            <p>
              Online (asynchronous) course exams are completed through an
              automated system. Once you click to submit your answers, the
              system will instantaneously grade the exam and provide you with a
              Pass/Fail notice. If you do not pass, you may retake the exam.
              Questions will randomize each attempt. No additional charge will
              occur with each retake.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
