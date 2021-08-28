import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
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
