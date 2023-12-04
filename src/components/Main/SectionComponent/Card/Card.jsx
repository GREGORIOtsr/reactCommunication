import React from "react";
import './Card.css';

const Card = ({user, logout}) => {
  return (
    <section>
      <article id="profile">
        <img src={user.url} alt="Profile Picture" width='200'/>
        <h1>{user.name}</h1>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
      </article>
      <button onClick={logout} id="logout">Sign out</button> 
    </section> 
  );
};

export default Card;
