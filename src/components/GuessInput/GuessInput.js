import React from 'react';

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [currentGuess, setCurrentGuess] = React.useState('');
  const handleSubmit = e => {
    e.preventDefault();
    handleSubmitGuess(currentGuess);
    setCurrentGuess('');
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== 'playing'}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        value={currentGuess}
        onChange={e => setCurrentGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
