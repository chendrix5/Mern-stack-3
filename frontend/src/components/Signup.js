import { modalUnstyledClasses } from '@mui/material';
import React from 'react';

function Signup() {
  return (
    <h1>SIGNUP</h1>
  );
}

const para = document.createElement("h3");
para.innerText = "Create an account to get started!"
document.body.appendChild(para)

function Def (html) {
  return (
    <html>
      <head>
        <title>Sign Up Here!</title>
      </head>
      <main>
        <div>
          <label for="email">Email:</label>
          <span class="required-field">*</span>
          <input type="email" id="email" name="email" required />
          <label for="username">Username:</label>
          <span class="required-field">*</span>
          <input type="text" id="username" name="username" required minlength="2" maxlength="35" />
          <label>Password:</label>
          <span class="required-field">*</span>
          <input type="password" required />
          <input type="submit" value="Sign Up" />
        </div>
      </main>
    </html>
  )
}

export {Def}
export default Signup;