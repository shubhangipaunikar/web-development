import { style } from '@mui/system'
import React, { useState } from 'react'
import './style.css';

const Login = () => {
 const [Registration,setregistration]=useState({
  Fullname : "",
  Email :  "",
  Phone  : "",
  Password : "",

 })

  const handleInput = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
     setregistration({...Registration,[name] : value});

  }

  const handleSubmit = (e) =>{
    e.prevemtDefault();

  }
  return (
    <>
    <div className='form-sign'>
    <h4>Sign Up form</h4>
    <form onSubmit={handleSubmit}>
    <div>
        <lable htmlFor="Fullname">Fullname</lable>
        <input type="text" autoComplete="off" placeholder='FullName'
        value={Registration.Fullname}
       onChange={handleInput}
        name="Fullname" id="fullname"></input>
      </div>

      <div>
        <lable htmlFor="Email">Email</lable>
        <input type="text" autoComplete="off" placeholder='Email'
        value={Registration.Email}
        onChange={handleInput}
        name="Email" id="Email"></input>
      </div>
      <div>
        <lable htmlFor="Phone no">Phone No</lable>
        <input type="text" autoComplete="off"  placeholder='Phone No' 
        value={Registration.Phone}
        onChange={handleInput}
        name="Phone" id="Phone No"></input>
      </div>
      <div>
        <lable htmlFor="Password">Password</lable>
        <input type="text" autoComplete="off"  placeholder='Password'
        value={Registration.Password}
        onChange={handleInput}
        name="Password" id="Password"></input>
      </div>
      <button className= "btn btn-primary my-3"  type="Submit">Submit</button>
    </form>
      
    </div>
    
    </>
  )
}

export default Login

