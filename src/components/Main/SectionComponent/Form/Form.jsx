import React from "react";
import './Form.css';

const Form = ({ handleSubmit }) => {
  return (
    <article>
      <form onSubmit={handleSubmit} id="login">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Gregorio" required />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="example@example.com" required />
        <label htmlFor="img">Image URL</label>
        <input type="text" name="img" id="img" placeholder="https://image.jpg" required />
        <label htmlFor="age">Age</label>
        <input type="number" name="age" id="age" placeholder="25" required />
        <button type="submite">Submit</button>
      </form>
    </article>
  );
};

export default Form;
