import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'

function Signup({show,setShow}) {

  //states
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');

  const navigate = useNavigate();

  //handlers
  const handleClose = () => setShow(false);
  const handleSubmit = ()=>{

    if (password !== confirmPassword){
      alert("Passwords do not match");
      handleClose();
      return;
    }
    const userData = {
      'name':name,
      'phone':phone,
      'email':email,
      'password':password
    }


    console.log(userData);
    //post request
    axios.post("http://localhost:5001/auth/signup",userData)
    .then((res)=>{
      localStorage.setItem("token",res.data);
      navigate("/home")

    }).catch((err)=>{
      console.log(err);
    })
  }


  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={(e)=>{setName(e.target.value)}}
              />
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                autoFocus
                onChange={(e)=>{setPhone(e.target.value)}}
              />
              <Form.Label>E-Mail</Form.Label>
              <Form.Control
                type="email"
                placeholder='name@example.com'
                autoFocus
                onChange={(e)=>{setEmail(e.target.value)}}
              />
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                autoFocus
                onChange={(e)=>{setPassword(e.target.value)}}
              />
               <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                autoFocus
                onChange={(e)=>{setConfirmPassword(e.target.value)}}
              />
             
            </Form.Group>
        
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Signup;