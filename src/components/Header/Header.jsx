import React from "react";
import { useContext } from "react";
import { EmailContext } from "../../context/EmailContext";
import './Header.css';

const Header = () => {
  const { email } = useContext(EmailContext);

  return (
    <header>
      <section>
        {email ? (
          <p>Welcome {email}</p>
        ) : (
          <p>Sign up below</p>
        )}
      </section>
    </header>
  );
};

export default Header;
