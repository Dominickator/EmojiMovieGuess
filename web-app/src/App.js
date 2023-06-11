import "./App.css";
import React, {useEffect, useState} from "react";
import ConfettiExplosion, {ConfettiProps} from 'react-confetti-explosion';

function App() {

  const [guess, setGuess] = useState("");
  let [randVar, setRandVar] = useState(0);
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    setRandVar(Math.floor(Math.random() * 10));
  }, []);

  const getRandomEmojis = () => {
    switch(randVar){
      case 0:
        return (<h3>🚗💨⏰👴🏻🕺🏻</h3>);
        break;
      case 1:
        return (<h3>🚢💔🌊🎶👨‍🦲</h3>);
        break;
      case 2:
        return (<h3>👨‍👩‍👦🍝🔫🇮🇹💼</h3>);
        break;
      case 3:
        return (<h3>🏃‍♂️🍫🚌🪙🎸</h3>);
        break;
      case 4:
        return (<h3>🦁👑🐗🌅🎵</h3>);
        break;
      case 5:
        return (<h3>🦈🌊🛥️👨‍✈️🔫</h3>);
        break;
      case 6:
        return (<h3>🚲🌌👽👦🏻🌟</h3>);
        break;
      case 7:
        return (<h3>🕰️👦🏻🦖👨‍🦳🏎️</h3>);
        break;
      case 8:
        return (<h3>🕶️💊🔫💻🌐</h3>);
        break;
      case 9:
        return (<h3>🦖🦕🚙💥🌴</h3>);
        break;
    }
  };

  const checkGuess = () => {
    if(randVar === 0){
      if(guess.toLowerCase() === "back to the future"){
        return (isExploding && <ConfettiExplosion force={0.8} duration={3000} particleCount={250} width={1600}/>);
      }
      else{
        alert("Incorrect guess! Try again!");
      }
    }
  };

  return (
    <>
      <div>
        <h1>Em😅jiGuess</h1>
        <h2>Welcome to emoji guesser! Here's how to play:</h2>
        <p>You will get five emojis in the box below.
        The five emojis represent one well-known movie.
        Try to guess the movie! You have three guesses. Good Luck!</p>
        <h4>Here are your emojis:</h4>
      </div>
      <div class="emojiContainer">
        <div class="emojis">{getRandomEmojis()}</div>
      </div>
      <div width="3vw" margin="auto">
        <input class="input" onChange={(Event) => {setGuess(Event.target.value)}} placeholder="Please enter guess"></input>
        <button class="button" onClick={() => checkGuess()}>Submit</button>
        <button class="button" onClick={() => setRandVar(Math.floor(Math.random() * 10))}>Get another movie!</button>
      </div>
    </>
  );
}

export default App;
