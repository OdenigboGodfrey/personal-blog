import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import CreatePostModal from './create-post-modal/CreatePostModal';
import getImageForPost from '../utils/get-image-for-post';

import './Home.css';

export function Home({
  closeModal,
  onChange,
  onSubmit,
  modalVisible,
  openModal,
  postTitles
}) {
  return (
    <Container fluid="lg" className="home">
      <CreatePostModal
        onChange={onChange}
        onClose={closeModal}
        onSubmit={onSubmit}
        show={modalVisible}
      />
      <Row>
        <Col className="home-top-section">
          <div className="home-top-section-overlay"></div>
          <div className="home-button-header-container">
            <h2>Welcome to the Blockchain Blog</h2>
            <p>A decentralized blog running on the blockchain.</p>
            <Button onClick={openModal} variant="primary">Create Post</Button>
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
  const history = useHistory();
  const postImage = getImageForPost(postIndex);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={postImage}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary" onClick={() => history.push(`/post/${postIndex}`)}>Read Post</Button>
      </Card.Body>
    </Card>
  );
}

export function HomeWrapper() {
  const [createPostForm, setCreatePostForm] = useState({ post: '', postTitle: '' });
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  // posts' titles
  const [posts, setPosts] = useState([]);

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

  useEffect(() => {
    (async function() {
      // mock
      setPosts(['First Post', 'Second Post', 'Third Post', 'Fourth Post']);
      setLoading(true);
    })();
  }, []);

  return (
    loading ?
      <Home
        closeModal={() => setModalVisible(false)}
        onChange={onChange}
        onSubmit={onSubmit}
        modalVisible={modalVisible}
        openModal={() => setModalVisible(true)}
        postTitles={posts}
      /> :
      <div>loading...</div>
  );
}