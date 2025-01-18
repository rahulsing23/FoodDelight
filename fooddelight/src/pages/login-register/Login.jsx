import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import './LoginStyle.css'
const Login = () => {

  return (
    <div className="w-[100%] h-[90vh] flex justify-center items-center bg-transparent">
      {
        <SignIn/>
      }
    </div>
  )
  
};

export default Login;
