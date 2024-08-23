import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonGroup, Dropdown, Row, Col } from 'react-bootstrap';
import { BsGridFill, BsGrid3X3GapFill } from 'react-icons/bs';

function TVShowsSection() {
  return (
    <Row className="d-flex justify-content-between align-items-center mb-4">
      <Col className="d-flex align-items-center">
        <h2 className="mb-0">TV Shows</h2>
        <ButtonGroup className="ms-4 mt-1">
          <Dropdown>
            <Dropdown.Toggle
              variant="secondary"
              size="sm"
              className="rounded-0"
              style={{ backgroundColor: '#221f1f' }}
            >
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Comedy</Dropdown.Item>
              <Dropdown.Item href="#">Drama</Dropdown.Item>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ButtonGroup>
      </Col>
      <Col className="d-flex justify-content-end align-items-center">
        <BsGridFill className="icons me-3" />
        <BsGrid3X3GapFill className="icons" />
      </Col>
    </Row>
  );
}

export default TVShowsSection;
