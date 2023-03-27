import React from 'react';
import Default from '../views/default';
import '../styles.css'


function Login() {
  return (
    <Default>
    <form>
      <div class="mb-3">
        <label for="username" class="form-label">USERNAME</label>
        <input type="text" class="form-control" id="username">
       </input>
      </div>
      <div class="mb-3">
        <label for="passsword" class="form-label">PASSWORD</label>
       <input type="password" class="form-control" id="password">
       
       </input>
      </div>
  <button type="submit" class="btn btn-primary">LOGIN</button>
</form>

</Default>
  );
}


export default Login;