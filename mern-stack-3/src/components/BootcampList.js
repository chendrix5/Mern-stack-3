import React from 'react';

function BootcampList({ bootcamp }) {
    return (
        <div>
            <h2>Bootcamp</h2>
            <ul>
                {bootcamp.map((bootcamp) => (
                    <li key={bootcamp.id}>
                        <h3>{bootcamp.name}</h3>
                        <p>{bootcamp.description}</p>
                        <p>{bootcamp.location}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BootcampList;