import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

import './Home.css';

export function Home({
  postTitles
}) {
  return (
    <div className="home">
      <Container fluid>
        <Row style={{ marginBottom: "10px;" }}>
          <Col className="home-top-section">
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-grid gap-2">
              <Button variant="danger" size="lg">Share New Post</Button>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Col>
            <h2>Posts</h2>
          </Col>
        </Row>
        {postTitles.length > 0 ?
          postTitles.map((title, index) => (
            <PostMetadata
              key={index}
              title={title}
            />
          )) :
          <div>No posts yet.  =(</div>
        }
      </Container>
    </div>
  );
}

function PostMetadata({
  title
}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="danger">Read Post</Button>
      </Card.Body>
    </Card>
  );
}

export function HomeWrapper() {
  return (
    <Home/>
  );
}