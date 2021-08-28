import React, { useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import CreatePostModal from './create-post-modal/CreatePostModal';

import './Home.css';

export function Home({
  postTitles
}) {
  const [createPostForm, setCreatePostForm] = useState({ post: '', postTitle: '' });
  const [modalVisible, setModalVisible] = useState(false);

  /**
   * @description On change handler for post modal
   * @param {Object} event
   */
  function onChange(event) {
    const { target } = event;
    setCreatePostForm(previousState => ({ ...previousState, [target.name]: target.value }));
  }

  /**
   * @description Submit handler for new post
   * @param {Object} event 
   */
  function onSubmit(event) {
    event.preventDefault();
    console.log(createPostForm);
  }

  return (
    <Container fluid="lg" className="home">
      <CreatePostModal
        onChange={onChange}
        onClose={() => setModalVisible(false)}
        onSubmit={onSubmit}
        show={modalVisible}
      />
      <Row>
        <Col className="home-top-section">
          <div className="home-top-section-overlay"></div>
          <div className="home-button-header-container">
            <h2>Welcome to the Blockchain Blog</h2>
            <p>A decentralized blog running on the blockchain.</p>
            <Button onClick={() => setModalVisible(true)} variant="primary">Create Post</Button>
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
          <Col key={index} style={{ marginBottom: '10px' }}>
            <PostMetadata
              postIndex={index}
              title={title}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

function PostMetadata({
  postIndex,
  title
}) {
  const postImage = getImageForPost(postIndex);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={postImage}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary">Read Post</Button>
      </Card.Body>
    </Card>
  );
}

/**
 * @description Helper function to get the image for a post
 * @param {Number} postIndex
 * @returns {String}
 */
function getImageForPost(postIndex) {
  const postImages = [
    "https://decentralized-mvp.s3.amazonaws.com/blog/post-photo-1.jpg",
    "https://decentralized-mvp.s3.amazonaws.com/blog/post-photo-2.jpg",
    "https://decentralized-mvp.s3.amazonaws.com/blog/post-photo-3.jpg"
  ];
  const normalizedPostIndex = postIndex + 1;

  if (normalizedPostIndex % 3 === 0) {
    return postImages[2];
  } else if (normalizedPostIndex % 2 === 0) {
    return postImages[1];
  } else {
    return postImages[0];
  }
}

export function HomeWrapper() {
  return (
    <Home/>
  );
}