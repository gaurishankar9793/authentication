
import React,{useRef,useState} from 'react';
import {Button, Card, Form, Alert } from 'react-bootstrap';
import { useAuth } from "../context/AuthContext";
import { Link ,useHistory} from 'react-router-dom';
export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const {signup} = useAuth()
  const [error,setError] = useState('')
  const [loading,setLoading] = useState(false)
  const history = useHistory();
 async  function HandleSubmit(e)
  {
      e.preventDefault();
      if(passwordRef.current.value !== passwordConfirmRef.current.value)
      return setError("Passwords do not match")

      try{
        setError('')
        setLoading(true)
        await signup(emailRef.current.value,passwordRef.current.value);
        history.push("/");
        }catch{
          setError("Signup failed Please Retry")
        }
        setLoading(false)
}
  return (
    <>
    
    <Card>
    <Card.Body>
    <h1 className ="text-center mb-4 ">
        Sign up
      
    </h1>
    <h2 className ="text-center mb-4 ">
      
   
    {error && <Alert variant ="dan">{error}</Alert> }
    </h2>
    <Form onSubmit = {HandleSubmit}>
        <Form.Group id = "email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" ref={emailRef} required></Form.Control>
        </Form.Group>
        <Form.Group id = "password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" ref={passwordRef} required></Form.Control>
        </Form.Group>
        <Form.Group id = "password-confirm">
        <Form.Label>Password Confirmation</Form.Label>
        <Form.Control type="password" ref={passwordConfirmRef} required></Form.Control>
        </Form.Group>
        <Button disabled = {loading} className = "w-100" type ="submit"  >Submit</Button>
    </Form>
    </Card.Body>
    </Card>
    <div className = "w-100 text-center mt-2">
    Already have an account ?  <Link to = "/login">Login</Link> 
    </div>
    </>
  );
}
