import React from 'react';
import {Row, Col, Button } from 'react-bootstrap';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';

const disableLink = "javascript:void(0)";

function Footer() {
  return (
    <Col xs={12} md={6}>
      <Row className="mb-2">
        <Col>
          <BsFacebook className="footer-icon me-2" />
          <BsInstagram className="footer-icon me-2" />
          <BsTwitter className="footer-icon me-2" />
          <BsYoutube className="footer-icon" />
        </Col>
      </Row>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
        <Col>
          <Row>
            <Col className="footer-links">
              <p><a style={{ color: 'inherit', textDecoration: 'none' }} href={disableLink} alt="footer link">Audio and Subtitles</a></p>
              <p><a style={{ color: 'inherit', textDecoration: 'none' }} href={disableLink} alt="footer link">Media Center</a></p>
              <p><a style={{ color: 'inherit', textDecoration: 'none' }} href={disableLink} alt="footer link">Privacy</a></p>
              <p><a style={{ color: 'inherit', textDecoration: 'none' }} href={disableLink} alt="footer link">Contact us</a></p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col className="footer-links">
              <p><a style={{ color: 'inherit', textDecoration: 'none' }} href={disableLink} alt="footer link">Audio Description</a></p>
              <p><a style={{ color: 'inherit', textDecoration: 'none' }} href={disableLink} alt="footer link">Investor Relations</a></p>
              <p><a style={{ color: 'inherit', textDecoration: 'none' }} href={disableLink} alt="footer link">Legal Notices</a></p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col className="footer-links">
              <p><a style={{ color: 'inherit', textDecoration: 'none' }} href={disableLink} alt="footer link">Help Center</a></p>
              <p><a style={{ color: 'inherit', textDecoration: 'none' }} href={disableLink} alt="footer link">Jobs</a></p>
              <p><a style={{ color: 'inherit', textDecoration: 'none' }} href={disableLink} alt="footer link">Cookie Preferences</a></p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col className="footer-links">
              <p><a style={{ color: 'inherit', textDecoration: 'none' }} href={disableLink} alt="footer link">Gift Cards</a></p>
              <p><a style={{ color: 'inherit', textDecoration: 'none' }} href={disableLink} alt="footer link">Terms of Use</a></p>
              <p><a style={{ color: 'inherit', textDecoration: 'none' }} href={disableLink} alt="footer link">Corporate Information</a></p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <Button variant="secondary" size="sm" className="footer-button rounded-0 mt-3">
            Service Code
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="mb-2 mt-2 copyright">
          © 1997-2024 Netflix, Inc.
        </Col>
      </Row>
    </Col>
  );
}

export default Footer;
