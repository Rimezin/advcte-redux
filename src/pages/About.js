import React from "react";
import { Container, Accordion } from "react-bootstrap";

export default function About() {
  return (
    <Container fluid className="mx-0 px-0">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>An Evolving Landscape</h5>
          </Accordion.Header>
          <Accordion.Body>
            Electronic Health Records (EHR's) have risen in popularity in the
            last 10-15 years as professionals in medical, behavioral health,
            addiction treatment, and other fields have been under increasing
            pressure to modernize documentation standards while continuing to
            provide quality services to their clients. Several recent
            legislative measures have increased regulatory pressure, so the need
            for quality information systems has also increased. Providers have
            long been drowning in paperwork and unfortunately the swell of
            information needed to be collected and transmitted in these lines of
            work is only increasing.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h5>Reimagining the EHR</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              EHR solutions unfortunately have not kept up with the rising tide
              of documentation needs, and that's where <b>Advcte</b> comes in.
              Just like hard-working service providers <i>advocate</i> for the
              needs of vulnerable children, families, and all patients alike:
              Advcte is here to finally meet the needs of service providers.
            </p>
            <p>
              The are plenty of systems out there that were on the forefront of
              innovative technology at the dawn of electronic health records,
              but many of these systems are now outdated. Some are built to{" "}
              <i>still</i> run only on Internet Explorer 11 and other aging
              internet standards, which makes the user experience generally
              terrible. And on top of that, most solutions don't work with
              mobile platforms that well, or offer mobile versions separately
              (for an additional cost).
            </p>
            <p>
              Advcte is primarily built with <b>JavaScript/ECMAScript 2018</b>,
              Meta's <b>React</b> JavaScript library, and{" "}
              <b>Bootstrap 5 (with Popper)</b> - a front-end design framework.
              The result is a fast, responsive user experience that provides a
              clean and easy-to-use interface. Plus, Advcte works on mobile
              devices (even your smartphone) out of the box. No additional costs
              or hidden fees.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h5>Explore Advcte</h5>
          </Accordion.Header>
          <Accordion.Body>
            Currently Advte is{" "}
            <b>
              <u>in development</u>
            </b>
            . It was created by Rimezin as a concept for a better electronic
            health record solution. Advcte is open-source (and open for
            suggestions/improvement ideas), see the source code on{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Rimezin/advcte"
            >
              GitHub
            </a>
            .
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
