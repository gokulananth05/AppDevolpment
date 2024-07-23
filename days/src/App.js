import { useState } from 'react';
import './App.css';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
function App() {
  const[isRegister,setisRegister]=useState(true);
  return(
    <div className='hoodie'>
      <button onClick={()=>setisRegister(!isRegister)}>
        {isRegister ? `Switch to Login`:`Switch to Register`}
      </button>
      {isRegister ? <RegisterForm />:<LoginForm />}
    </div>
  );
}
export default App;
