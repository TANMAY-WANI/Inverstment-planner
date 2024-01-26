import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const PlanBox = ({ show, setShow, onSubmit }) => {
  const [saving, setSaving] = useState('');
  const [goalAmt, setGoalAmt] = useState('');
  const [goalDesc, setGoalDesc] = useState('');
  const [goalAge, setGoalAge] = useState('');

  const handleClose = () => setShow(false);

  const handleSubmit = () => {
    if (saving === '' || goalAmt === '' || goalDesc === '' || goalAge === '') {
      alert('Please fill all the fields');
      return;
    }
    // Create a javascript object of data
    const data = {
        saving,
        goalAmt,
        goalDesc,
        goalAge,
    };

    onSubmit(data);

    // Close the modal
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please provide the following details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>What % of your salary can you save <p>*</p></Form.Label>
              <Form.Control
                type='number'
                placeholder='40'
                required={true}
                autoFocus
                onChange={(e) => setSaving(e.target.value)}
              />
              <Form.Label>What is your future goal <p>*</p></Form.Label>
              <Form.Control
                type='text'
                placeholder='Buy a house'
                required={true}
                autoFocus
                onChange={(e) => setGoalDesc(e.target.value)}
              />
              <Form.Label>What amount you require to complete it <p>*</p></Form.Label>
              <Form.Control
                type='number'
                required={true}
                placeholder='Rs. 1,00,00,000'
                autoFocus
                onChange={(e) => setGoalAmt(e.target.value)}
              />
              <Form.Label>What is the time limit for the goal <p>*</p></Form.Label>
              <Form.Control
                type='number'
                required={true}
                placeholder='20'
                autoFocus
                onChange={(e) => setGoalAge(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PlanBox;
