import React from 'react'
import Card from 'react-bootstrap/Card';
import titleimage from '../assets/titleimage.gif'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ModalBody, Row , Col} from 'react-bootstrap';

function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
<>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={titleimage} onClick={handleShow} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
       
      </Card.Body>
    </Card>
    
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
                    <img style={{height:"200px"}} className='img=fluid' src={titleimage} alt="" />
                </Col>
                <Col md={6}>
                    <h2>Project Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut cum debitis 
                        harum itaque ratione exercitationem
                         distinctio nobis, eius corrupti natus quaerat, quia molestias iusto corporis vero molesti
                         ae, beatae praesentium culpa.</p>
                         <p>Language used : <span className='fw-bolder'> Html, CSS, React</span></p>
                </Col>
               <a href="" className='me-3 text-danger'> <i class="fa-brands fa-github"></i></a>
               <a href="" className='me-3 text-danger'><i class="fa-solid fa-link"></i></a>
            </Row>
        </Modal.Body>
     
      </Modal>
    </>

    )
}

export default ProjectCard