import React from 'react';
import Default from '../views/default';
import './styles.css'

function Reviews(data) {
  return (

    <Default>
      <div className="submitContainer">
      <form action='/reviews' method="POST"> 
            <div className='submitForm'>
            <label class="form-label" htmlFor='title' id='title'>BOOTCAMP:</label>
            <input class="form-constrol-sm" type="text" name='name' id="title"/>
            
            <label class="form-label" htmlFor='review' id='review'>REVIEW</label>
            <input class="form-constrol-sm" type="text" name='review' id="review"/>
            
            <label class="form-label" htmlFor='rating' id='rating'>RATING</label>
            <input class="form-constrol-sm" type="number" name='starrating' id="rating"/>
            
            <input class="btn btn-primary" type='submit' value="SUBMIT REVIEW"></input>
            </div>
        </form>
      </div>
    </Default>
  );
}

export default Reviews;