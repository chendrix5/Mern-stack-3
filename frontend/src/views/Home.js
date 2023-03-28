import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Def = require('./default')


function Home() {
  return (
    <>
    <h1>WELCOME TO BOOTCAMP REVIEWS</h1>
    <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">CODE ACADEMY RATING: 5</h5>
        <p class="card-text">This was such a good learning experience, I learned a lot and recommend this to everyone. Definitely worth the time!<br></br>-Jane</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">TYPING TEST RATING: 4</h5>
        <p class="card-text">My typing skills improved very quickly, I went from 50 WPM to 120 WPM and don't even have to look at my keyboard.<br></br>-Bob</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">SOFTWARE DEVELOPMENT BOOTCAMP RATING: 5</h5>
        <p class="card-text">Pretty cool, learned a lot but hate getting up early on Saturdays.<br></br>-Jim</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">VERY RANDOM BOOTCAMP NAME RATING: 3</h5>
        <p class="card-text">This is a bootcamp that I went to to learn to hack. I learned html but not how to hack. Fun still.<br></br>-Not Very Good Hacker</p>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default Home;