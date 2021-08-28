import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function CreatePostModal({
  onClose,
  show
}) {
  return (
    <Modal show={show}>
      <Modal.Header closeButton onClick={onClose}>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
}