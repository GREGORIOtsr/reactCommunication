import React, { useState, useContext } from "react";
import { EmailContext } from '../../../context/EmailContext';
import Form from './Form';
import Card from './Card';
import './SectionComponent.css';

const SectionComponent = () => {
  const [ user, setUser ] = useState('');
  const { updateEmail } = useContext(EmailContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      url: e.target.img.value,
      age: e.target.age.value
    };
    updateEmail(data.email);
    setUser(data);
    e.target.name.value = '';
    e.target.email.value = '';
    e.target.img.value = '';
    e.target.age.value = '';
  };

  const logout = () => {
    updateEmail('');
    setUser('');
  }

  return (
    <section id="sect">
      {!user ? <Form handleSubmit={handleSubmit}/> : ''}
      {user ? <Card user={user} logout={logout} /> : ''}
    </section>
  );
};

export default SectionComponent;
