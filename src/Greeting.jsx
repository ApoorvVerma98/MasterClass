import React, { useState } from "react";

const Greeting = () => {
  const greetings = [
    "Hello",
    "Hi",
    "Hola",
    "Bonjour",
    "Ciao",
    "こんにちは",
    "안녕하세요",
  ];

  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);

  const handleClick = () => {
    const currentIndex = greetings.indexOf(currentGreeting);

    setCurrentGreeting(greetings[(currentIndex + 1) % greetings.length]);
  };

  return (
    <div>
      <h1>{currentGreeting}!</h1>
      <button onClick={handleClick}>Next Greeting</button>
    </div>
  );
};

export default Greeting;
