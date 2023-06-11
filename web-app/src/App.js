import "./App.css";

function App() {

  const getRandomEmojis = () => {
    var rand = 0;
    switch(rand){
      case 0:
        return (<h3>🚗💨⏰👴🏻🦕</h3>);
        break;
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
      <input class="input" placeholder="Please enter guess"></input>
      <button class="button">Submit</button>
      <button class="button">Get another movie!</button>
    </>
  );
}

export default App;
