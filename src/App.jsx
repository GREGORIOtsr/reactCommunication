import { useState } from "react";
import { EmailContext } from "./context/EmailContext";
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

function App() {
  const [email, setEmail] = useState('');

  const updateEmail = (email) => {
    setEmail(email);
  };

  const data = { email, updateEmail };

  return (
    <>
      <EmailContext.Provider value={data}>
        <Header />
        <Main />
      </EmailContext.Provider>
    </>
  );
};

export default App;
