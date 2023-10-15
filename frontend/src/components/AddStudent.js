import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useNavigate ,useParams } from 'react-router-dom';
 
const AddStudent = () => {
  const navigate = useNavigate();
  const clickToBackHandler=()=>{
      navigate('/');
  }
    const [userField, setUserField] = useState({
        name: "",
        username: "",
        email: "",
        password: ""
    });
 
    const changeUserFieldHandler = (e) => {
        setUserField({
            ...userField,
            [e.target.name]: e.target.value
        });
        //console.log(userField);
 
    }
    const [loading,setLoading]=useState()
 
    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            const responce= await axios.post("http://127.0.0.1:8000/api/addnew", userField);
            console.log(responce)
            setLoading(true);
        } catch (err) {
            console.log("Something Wrong");
        }
    }
    if(loading){
        return <AddStudent/>
    }
 
    return (
      <div className='AddStudent'>
      <h1>Student Registration Form</h1>
      <Container sm={3}>
      <Row>
        <Col sm={3}></Col>
        <Col sm={6}>
      
      <Form.Group className="mb-3">
      <Form.Control placeholder="Full Name" id="name" name="name" onChange={e => changeUserFieldHandler(e)} />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Control placeholder="Username"id="username" name="username" onChange={e => changeUserFieldHandler(e)} />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Control placeholder="Email" type="email" id="email" name="email" onChange={e => changeUserFieldHandler(e)} required/>
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Control type="password" placeholder="Password" id="password" name="password" onChange={e => changeUserFieldHandler(e)} required />
    </Form.Group>
    <Button type="submit" size="lg" onClick={e => onSubmitChange(e)}>Submit</Button>
    </Col>
        <Col sm={3}></Col>
      </Row>
      
      </Container>
      <br/>
      <button className='btn btn-primary' onClick={ clickToBackHandler}>Back To Home</button>
    </div>
    );
};
 
export default AddStudent;