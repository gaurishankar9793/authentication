
import React,{useRef,useState} from 'react';
import {Button, Card, Form, Alert } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

export default function ForgotPassword() {
  const emailRef = useRef()
  
  const { resetPassword } = useAuth()
  const [error,setError] = useState('')
  const [message,setMessage] = useState('')
  const [loading,setLoading] = useState(false)
  //const history = useHistory();
 async  function HandleSubmit(e)
  {
      e.preventDefault();
    //  if(passwordRef.current.value !== passwordConfirmRef.current.value)
    //    return setError("Passwords do not match")

      try{
        setError('')
        setMessage('')
        setLoading(true)
        await resetPassword(emailRef.current.value)
        setMessage("check your email to Reset password ")
        }catch{
          setError("Failed to reset password")
           console.log(e)
        }
        setLoading(false)
}
  return (
    <>
    
    <Card>
    <Card.Body>
    <h1 className ="text-center mb-4 ">
        Reset Password 
      
    </h1>
    <h2 className ="text-center mb-4 ">
     {message &&<Alert variant ="success">{message}</Alert> } 
   
    {error && <Alert variant ="danger">{error}</Alert> }
    </h2>
    <Form onSubmit = {HandleSubmit}>
        <Form.Group id = "email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" ref={emailRef} required></Form.Control>
        </Form.Group>
        
        <Button disabled = {loading} className = "w-100" type ="submit"  >Reset</Button>
    </Form>
    <div className = "w-100 text-center mt-2">
         <Link to = "/login">Login</Link> 
    </div>
    </Card.Body>
    </Card>
    <div className = "w-100 text-center mt-2">
        New User Please  <Link to = "/signup">Signup</Link> 
    </div>
    </>
  );
}
