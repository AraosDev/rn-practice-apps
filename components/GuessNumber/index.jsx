import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import GameMode from './screens/GameMode'
import GameConfig from './screens/GameConfig';
import SetNumber from './screens/SetNumber';
import GameOver from './screens/GameOver';
import GuessNumber from './screens/GuessNumber';

function GuessNumberGame() {
  let screenComponent = <GameMode />;
  const [gameMode, setGameMode] = useState();
  const [currentScreen, setcurrentScreen] = useState('GAME_MODE');
  const [guesser, setGuesser] = useState('Player 1');
  const [noOfGuesses, setNoOfGuesses] = useState('1');
  const [guessNumber, setGuessNumber] = useState('1');

  const changeScreen = (screen) => {
    setcurrentScreen(screen);
    if (screen === 'GAME_MODE') setGameMode('');
  };

  const changeGameModeHandler = (gameMode) => {
    setGameMode(gameMode);
    changeScreen('GAME_CONFIG');
  };

  switch (currentScreen) {
    case 'GAME_CONFIG':
      screenComponent = (
        <GameConfig
          guesser={guesser} 
          setGuesser={setGuesser} 
          navigateTo={changeScreen} 
          currentMode={gameMode}
          noOfGuesses={noOfGuesses}
          setNoOfGuesses={setNoOfGuesses}
        />
      );
      break;
    case 'SET_NUMBER':
      screenComponent = (
        <SetNumber
          guesser={guesser}
          guessNumber={guessNumber}
          setGuessNumber={setGuessNumber}
          navigateTo={changeScreen} 
        />
      );
      break;
    case 'GUESS_NUMBER':
      screenComponent = (
        <GuessNumber
          gameMode={gameMode}
          currentScreen={currentScreen}
          guesser={guesser}
          noOfGuesses={noOfGuesses}
          guessNumber={guessNumber}
        />
      );
      break;
    case 'GAME_CONFIG':
      screenComponent = <GameOver />;
      break;
    case 'GAME_MODE':
    default:
      screenComponent = <GameMode onChangeMode={changeGameModeHandler} />;
      break;
  };

  return (
    <View style={styles.rootScreen}>
      {screenComponent}
    </View>
  )
}

export default GuessNumberGame;

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    }
})