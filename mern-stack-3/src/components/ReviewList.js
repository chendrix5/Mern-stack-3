import React from 'react';

function ReviewList({ reviews }) {
    return (
        <div>
            <h2>Reviews</h2>
            <ul>
                {review.map((review) => (
                    <li key={review.id}>
                        <h3>{review.title}</h3>
                        <p>{review.body}</p>
                        <p>Rating: {review.rating}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ReviewList;