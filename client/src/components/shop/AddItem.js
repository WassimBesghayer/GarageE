import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';



function AddItem() {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newitem, setnewitem] = useState({
      
        name:"",
        coverUrl:"",
        description:""
    })

  return (
    <div>
         <>
      <Button variant="primary" onClick={handleShow} style={{backgroundColor: 'green', border: 'none'}}>
        Add Item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>So! What do you we have here ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Item Title :</Form.Label>
        <Form.Control type="text" placeholder="Enter text" onChange={(e)=>setnewitem({...newitem,name:e.target.value})}/>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Item image :</Form.Label>
        <Form.Control type="text" placeholder="insert URL" onChange={(e)=>setnewitem({...newitem,coverUrl:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Item Description :</Form.Label>
        <Form.Control type="text" placeholder="tell us about it 😁" onChange={(e)=>setnewitem({...newitem,description:e.target.value})}/>
      </Form.Group>
    </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{backgroundColor: 'red', border: 'none'}}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={()=>{dispatch(addItem(newitem));}}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default AddItem