import React ,{useState} from 'react';
import {Card,Button ,Alert} from 'react-bootstrap';
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from 'react-router-dom';

export default function Dashboard() {
  const [error,setError] = useState("")
 const {currentUser,logout } = useAuth();
 const history = useHistory();
  async function handleLogout()
  { 
      setError('');

      try{
          await logout()
          history.push('/login')
      } catch{
        setError("logout failed")
      }
  }
  return (
    <>
   <Card>
   <Card.Body>
    <h1 className ="text-center mb-4 ">
      Profile 
      
    </h1>
    {error && <Alert variant = "danger">{error}</Alert>}
    <strong>Email id = {currentUser.email}</strong>
    <Link to = "/update-profile" className = "btn btn-primary w-100 mt-3">Update your Profile</Link>
    </Card.Body>
   </Card>
   <div className = "w-100 text-center mt-2">
       <Button variant = "Link"  onClick = {handleLogout}>Logout</Button>
    </div>

    </>
  );
}
