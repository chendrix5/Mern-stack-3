import React from 'react';
import Default from '../views/default';

function Signup() {
  return (
    
    <Default>
    <container>
    <form action="/signup" method="POST">
    <div class="mb-3">
      <label for="ussername" class="form-label">USERNAME</label>
      <input type="text" class="form-control" id="username" aria-describedby="username" name="username" required></input>
    </div>
    <div class="mb-3">
      <label for="passsword" class="form-label">PASSWORD</label>
     <input type="password" class="form-control" id="password" name="pass" required></input>
    </div>
<button type="submit" class="btn btn-primary">REGISTER</button>
</form>
</container>
</Default>
  );
}

export default Signup;