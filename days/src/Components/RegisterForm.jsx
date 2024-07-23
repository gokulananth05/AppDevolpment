import React, { useState } from 'react'
import './RegisterForm.css';
const RegisterForm = () => {
  const[username,setusername]=useState('');
  const[password,setpassword]=useState('');
  const handlesubmit=(event)=>
  {
    console.log(event);
    event.preventDefault();
    alert(`Register with UserName ${username} and Password ${password}`);
    setusername('');
    setpassword('');
  };
  return(
    <div className='first'>
      <h2>REGISTER</h2>
      <form >
        <div className='second'>
          <label>USERNAME: </label>
          <input type='text' value={username} onChange={(e)=>setusername(e.target.value)} required></input>
        </div>
        <div className='third'>
          <label>PASSWORD: </label>
          <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} required></input>
        </div>
        <div className='fourth'>
          <button type='submit' onClick={handlesubmit}>REGISTER</button>
        </div>
      </form>
    </div>
  );

}

export default RegisterForm
