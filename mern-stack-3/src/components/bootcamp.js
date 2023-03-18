import React from 'react';

function Bootcamp(props) {
    const { name, description, website, phone, email, address } = props;
  
    return (
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <ul>
          <li>Website: {website}</li>
          <li>Phone: {phone}</li>
          <li>Email: {email}</li>
          <li>Address: {address}</li>
        </ul>
      </div>
    );
  }
  
  export default Bootcamp;
  