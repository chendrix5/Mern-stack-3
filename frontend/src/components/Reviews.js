import React from 'react';
import './styles.css'

function Reviews() {
  return (
    <div>SUBMIT YOUR BOOTCAMP REVIEW HERE
    <form>
    <label>
    <input type="text" name="name" />
    </label>
    <input type="submit" value="Submit" />  
    </form>
    </div>
  );
}

export default Reviews;