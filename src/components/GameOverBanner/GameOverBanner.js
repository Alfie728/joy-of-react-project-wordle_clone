import React from 'react';
import LostBanner from '../LostBanner/LostBanner';
import WonBanner from '../WonBanner/WonBanner';

function GameOverBanner({ gameStatus, answer, numOfGuesses }) {
  if (gameStatus === 'won') {
    return (
      <div className="happy banner">
      </div>
    );
  } else if (gameStatus === 'lost') {
    return (
      <div className="sad banner">
      </div>
    );
  }
}

export default GameOverBanner;
