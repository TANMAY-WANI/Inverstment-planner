import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login({show,setShow}) {
  //states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //handlers
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const navigate = useNavigate();
  const handleClose = () =>{
    setShow(false);
    const data = {
      "email": email,
      "password": password
    }
    console.log(data);
    axios.post("http://localhost:5010/auth/login", data)
    .then((res)=>{
      console.log(res.data);
      localStorage.setItem("invest_iq_access_token",res.data["invest_iq_login_token"]);
      navigate("/Home");
    }).catch((err)=>{
      console.log(err);
    });
  }

  useEffect(() => {
    if(localStorage.getItem("invest_iq_access_token")){
      navigate("/Home");
    }
  }
  , []);
  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                autoFocus
                onChange={handleEmail}
              />
               <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={handlePassword}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;