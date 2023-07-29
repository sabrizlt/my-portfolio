import React, { useState } from 'react';
import { Document, Page } from '@react-pdf/renderer';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import curriculum from '../image/curriculum.png'

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className=' mb-0' style={{height: '100px', marginTop: '100px'}}>
        View Curriculum
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>MY CURRICULUM</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={curriculum} alt="" width={420} className='mx-4 curriculum' />
        </Modal.Body>
        <Modal.Footer> 
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
