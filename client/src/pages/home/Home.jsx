import React, { useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import CreatePostModal from './create-post-modal/CreatePostModal';
import getImageForPost from '../utils/get-image-for-post';

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

export function HomeWrapper() {
  return (
    <Home/>
  );
}