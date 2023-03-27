import React from 'react';
import '../styles.css'


function Login() {
  return (
    <h1>LOGIN</h1>
  );
}

const para = document.createElement("p");
para.innerText = "Login to leave your review!"
document.body.appendChild(para)



export default Login;