import "./App.css";
import React, {useEffect, useState} from "react";

function App() {

  const [guess, setGuess] = useState("");
  let [randVar, setRandVar] = useState(0);

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
        return (<h3>👨‍🦱🚗⏭️🕰️🔥</h3>);
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
        alert("Correct guess! You win!");
        setGuess("");
        setRandVar(Math.floor(Math.random() * 10))
      }
      else{
        alert("Incorrect guess! Try again!");
      }
    }
    else if(randVar === 1){
      if(guess.toLowerCase() === "titanic"){
        alert("Correct guess! You win!");
        setGuess("");
        setRandVar(Math.floor(Math.random() * 10))
      }
      else{
        alert("Incorrect guess! Try again!");
      }
    }
    else if(randVar === 2){
      if(guess.toLowerCase() === "the godfather"){
        alert("Correct guess! You win!");
        setGuess("");
        setRandVar(Math.floor(Math.random() * 10))
      }
      else{
        alert("Incorrect guess! Try again!");
      }
    }
    else if(randVar === 3){
      if(guess.toLowerCase() === "forrest gump"){
        alert("Correct guess! You win!");
        setGuess("");
        setRandVar(Math.floor(Math.random() * 10))
      }
      else{
        alert("Incorrect guess! Try again!");
      }
    }
    else if(randVar === 4){
      if(guess.toLowerCase() === "the lion king"){
        alert("Correct guess! You win!");
        setGuess("");
        setRandVar(Math.floor(Math.random() * 10))
      }
      else{
        alert("Incorrect guess! Try again!");
      }
    }
    else if(randVar === 5){
      if(guess.toLowerCase() === "jaws"){
        alert("Correct guess! You win!");
        setGuess("");
        setRandVar(Math.floor(Math.random() * 10))
      }
      else{
        alert("Incorrect guess! Try again!");
      }
    }
    else if(randVar === 6){
      if(guess.toLowerCase() === "e.t."){
        alert("Correct guess! You win!");
        setGuess("");
        setRandVar(Math.floor(Math.random() * 10))
      }
      else{
        alert("Incorrect guess! Try again!");
      }
    }
    else if(randVar === 7){
      if(guess.toLowerCase() === "back to the future ii"){
        alert("Correct guess! You win!");
        setGuess("");
        setRandVar(Math.floor(Math.random() * 10))
      }
      else{
        alert("Incorrect guess! Try again!");
      }
    }
    else if(randVar === 8){
      if(guess.toLowerCase() === "the matrix"){
        alert("Correct guess! You win!");
        setGuess("");
        setRandVar(Math.floor(Math.random() * 10))
      }
      else{
        alert("Incorrect guess! Try again!");
      }
    }
    else if(randVar === 9){
      if(guess.toLowerCase() === "jurassic park"){
        alert("Correct guess! You win!");
        setGuess("");
        setRandVar(Math.floor(Math.random() * 10))
      }
      else{
        alert("Incorrect guess! Try again!");
      }
    }
    
  };

  return (
    <>
      <title>Emoji Mover Guesser</title>
      <div>
        <h1>Em😅ji Guess</h1>
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
        <input class="input" value={guess} onChange={(Event) => {setGuess(Event.target.value)}} placeholder="Please enter guess"></input>
        <button class="button" onClick={() => checkGuess()}>Submit</button>
        <button class="button" onClick={() => setRandVar(Math.floor(Math.random() * 10))}>Try Another!</button>
      </div>
    </>
  );
}

export default App;
