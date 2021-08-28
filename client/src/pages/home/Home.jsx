import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

import './Home.css';

export function Home({
  onCreatePost,
  postTitles
}) {
  return (
    <div className="home">
      <Container fluid>
        <Row>
          <Col className="home-top-section">
            <div className="home-top-section-overlay"></div>
            <div className="home-button-header-container">
              <h2>Welcome to the Blockchain Blog</h2>
              <p>A decentralized blog running on the blockchain.</p>
              <Button onClick={onCreatePost} variant="primary">Create Post</Button>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Col>
            <h2>Posts</h2>
          </Col>
        </Row>
        <Row>
          {postTitles.map((title, index) => (
            <Col style={{ marginBottom: '10px' }}>
              <PostMetadata
                key={index}
                title={title}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

function PostMetadata({
  title
}) {
  const postImages = [
    "https://decentralized-mvp.s3.amazonaws.com/blog/post-photo-1.jpg",
    "https://decentralized-mvp.s3.amazonaws.com/blog/post-photo-2.jpg",
    "https://decentralized-mvp.s3.amazonaws.com/blog/post-photo-3.jpg"
  ];
  const postImageIndex = Math.floor(Math.random() * postImages.length); // random

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={postImages[postImageIndex]}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary">Read Post</Button>
      </Card.Body>
    </Card>
  );
}

export function HomeWrapper() {
  return (
    <Home/>
  );
}