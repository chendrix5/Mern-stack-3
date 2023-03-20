import React, { useState, useEffect } from 'react';
import BootcampList from './components/BootcampList';
import ReviewList from './components/ReviewList';
import { getBootcamps, getReviews } from './api';

function App() {
    const [bootcamps, setBootcamps] = useState([]);
    const [reviews, setReviews] = useState([]);


useEffect(() => {
  const fetchBootcamps = async () => {
    const data = await getBootcamps();
    setBootcamps(data);
  };

  const fetchReviews = async () => {
    const data = await getReviews();
    setReviews(data);
  };

  fetchBootcamps();
  fetchReviews();
}, []);

return (
    <div>
        <h1>Bootcamp Reviews</h1>
        <BootcampList bootcamps={bootcamps} />
        <ReviewList reviews={reviews} />
    </div>
);

}


export default App;