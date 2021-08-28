import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

export default function CreatePostModal({
  onChange,
  onClose,
  onSubmit,
  show
}) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton onClick={onClose}>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="postTitle">
            <Form.Label>Post Title</Form.Label>
            <Form.Control type="text" name="postTitle" onChange={onChange}/>
          </Form.Group>
          <Form.Group controlId="post">
            <Form.Label>Post</Form.Label>
            <Form.Control as="textarea" name="post"  onChange={onChange}/>
          </Form.Group>
          <Button variant="secondary" onClick={onClose} className="me-1 mt-1">Close</Button>
          <Button variant="primary" type="submit" className="mt-1">Submit</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}