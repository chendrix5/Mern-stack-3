import React from 'react';
import '../styles.css'


function Login() {
  return (
    <>
    <h1>LOGIN</h1>
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="ussername" class="form-label">Username</label>
        <input type="text" class="form-control" id="username" aria-describedby="username">
       </input>
      </div>
      <div class="mb-3">
        <label for="passsword" class="form-label">Password</label>
       <input type="password" class="form-control" id="password">
       
       </input>
      </div>
  <button type="submit" class="btn btn-primary">LOGIN</button>
</form>
</>
  );
}


export default Login;