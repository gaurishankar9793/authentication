
import React,{useRef,useState} from 'react';
import {Button, Card, Form, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
 
  const {login} = useAuth()
  const [error,setError] = useState('')
  const [loading,setLoading] = useState(false)
  const history = useHistory();
 async  function HandleSubmit(e)
  {
      e.preventDefault();
    //  if(passwordRef.current.value !== passwordConfirmRef.current.value)
    //    return setError("Passwords do not match")

      try{
        setError('')
        setLoading(true)
        await login(emailRef.current.value,passwordRef.current.value);
        history.push("/");
        }catch{
          setError("Failed to login in")
           console.log(error)
        }
        setLoading(false)
}
  return (
    <>
    
    <Card>
    <Card.Body>
    <h1 className ="text-center mb-4 ">
        Login
      
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
        <Button disabled = {loading} className = "w-100" type ="submit"  >Login</Button>
    </Form>
    <div className = "w-100 text-center mt-2">
         <Link to = "/forgot-password">forgot password?</Link> 
    </div>
    </Card.Body>
    </Card>
    <div className = "w-100 text-center mt-2">
        New User Please  <Link to = "/signup">Signup</Link> 
    </div>
    </>
  );
}
