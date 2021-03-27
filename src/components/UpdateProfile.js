
import React,{useRef,useState} from 'react';
import {Button, Card, Form, Alert } from 'react-bootstrap';
import { useAuth } from "../context/AuthContext";
import { Link ,useHistory} from 'react-router-dom';
export default function UpadateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const {currentUser,updatePassword,updateEmail } = useAuth();
   
  const [error,setError] = useState('')
  const [loading,setLoading] = useState(false)
  const history = useHistory();
 function HandleSubmit(e)
  { e.preventDefault();
    if(passwordRef.current.value !== passwordConfirmRef.current.value)
    return setError("Passwords do not match")
   
 
   
    const promises =[]
    if(emailRef.current.value !== currentUser.email)
    {
     promises.push(updateEmail(emailRef.current.value ))
    }
    if(passwordRef.current.value !== currentUser.password)
    {
     promises.push(updatePassword(passwordRef.current.value))
    } 
    setError('')
        setLoading(true)
    Promise.all(promises).then(() =>{
        history.push("/");
    }).catch(()=>{
      
        setError("Failed to login in")
         console.log(error)  
    }).finally(()=>{ setLoading(false)})
      
    
}
  return (
    <>
    
    <Card>
    <Card.Body>
    <h1 className ="text-center mb-4 ">
        Update Profile
      
    </h1>
    <h2 className ="text-center mb-4 ">
      
   
    {error && <Alert variant ="dan">{error}</Alert> }
    </h2>
    <Form onSubmit = {HandleSubmit}>
        <Form.Group id = "email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" ref={emailRef} required defaultValue = {currentUser.email}></Form.Control>
        </Form.Group>
        <Form.Group id = "password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" ref={passwordRef} placeholder = "leave blank to keep the same"></Form.Control>
        </Form.Group>
        <Form.Group id = "password-confirm">
        <Form.Label>Password Confirmation</Form.Label>
        <Form.Control type="password" ref={passwordConfirmRef}  required placeholder = "leave blank to keep the same"></Form.Control>
        </Form.Group>
        <Button disabled = {loading} className = "w-100" type ="submit"  >Update</Button>
    </Form>
    </Card.Body>
    </Card>
    <div className = "w-100 text-center mt-2">
 <Link to = "/">Cancel</Link> 
    </div>
    </>
  );
}
