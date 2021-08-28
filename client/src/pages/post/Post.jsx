import React, { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import getImageForPost from '../utils/get-image-for-post';

import './Post.css';

export default function Post({
  index,
  post,
  title
}) {
  return (
    <Container className="post" fluid="lg">
      <div xs={12} className="image" style={{ backgroundImage: `url("${getImageForPost(index)}")` }}></div>
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{post}</p>
        </Col>
      </Row>
    </Container>
  )
}

export function PostWrapper() {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({ content: '', title: '', index: 0});

  // To be used for fetching data 
  const { postIndex } = useParams();

  useEffect(() => {
    // mock
    setPost({ content: 'This is a mock post', title: 'Mock Post Title', index: postIndex });
    setLoading(true);
  }, []);

  return (
    loading ?
      <Post
        index={post.index}
        post={post.content}
        title={post.title}
      /> :
      <div>Loading...</div>
  )
}