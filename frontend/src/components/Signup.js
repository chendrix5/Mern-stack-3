import { modalUnstyledClasses } from '@mui/material';
import React from 'react';

function Signup() {
  return (
    
    <>
    <h1>SIGNUP</h1>
    <form>
    <div class="mb-3">
      <label for="ussername" class="form-label">Username</label>
      <input type="text" class="form-control" id="username" aria-describedby="username"></input>
    </div>
    <div class="mb-3">
     <label for="email" class="form-label">Email address</label>
     <input type="email" class="form-control" id="email" aria-describedby="email"></input>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="passsword" class="form-label">Password</label>
     <input type="password" class="form-control" id="password"></input>
    </div>
<button type="submit" class="btn btn-primary">SIGN UP</button>
</form>
</>
  );
}

export default Signup;