import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Card from '../../Globals/components/Card';
import NumberInput from '../../Globals/components/NumberInput';
import Button from '../../Globals/components/Button';

function GuessNumber({ guesser, noOfGuesses, guessNumber, setWinner, setcurrentScreen }) {
  const opponent = guesser === 'Player 1' ? 'Player 2' : 'Player 1';

  const [remaningGuesses, setRemainingGuesses] = useState(Number(noOfGuesses));
  const [guessLogs, setGuessLogs] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(0);

  const onSubmitGuessNumber = () => {
    if (remaningGuesses !== 0) {
      if (currentNumber !== Number(guessNumber)) {
        setGuessLogs([...guessLogs, Number(currentNumber)]);
        setRemainingGuesses(remaningGuesses - 1);
        setCurrentNumber(0);
      } else {
        setWinner(guesser);
        setcurrentScreen('GAME_OVER');
      }
    } else {
      setWinner(opponent);
      setcurrentScreen('GAME_OVER');
    }
  }

  return (
    <View style={styles.rootScreen}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Hi {guesser}</Text>
      </View>
      <View style={styles.instructionContainer}>
        <Text style={styles.instructionText}>Guess the number set by {opponent}</Text>
      </View>
      <View style={styles.instructionContainer}>
        <Text style={styles.instructionText}>Guesses Remaining - {remaningGuesses}</Text>
      </View>
      <View style={styles.guessNumberInputContainer}>
        <Card style={[styles.rootScreen, styles.cardContainer]}>
          <View>
            <View style={styles.inputContainer}>
              <NumberInput
                value={currentNumber.toString()}
                onChangeValue={setCurrentNumber}
                defaultValue={'1'}
              />
            </View>
            <View style={styles.actionBtns}>
              <Button onPress={() => setCurrentNumber(0)}>Reset</Button>
              <Button onPress={onSubmitGuessNumber}>Submit</Button>
            </View>
          </View>
        </Card>
      </View>
      <View style={styles.guessLogsContainer}>
        <FlatList 
          data={guessLogs}
          keyExtractor={(item) => item}
          renderItem={(itemInfo) => (
            <View><Text>Guess{itemInfo.index + 1} - {itemInfo.item}</Text></View>
          )}
        />
      </View>
    </View>
  )
}

export default GuessNumber;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  instructionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructionText: {
    fontSize: 18
  },
  guessNumberInputContainer: {
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cardContainer: {
    margin: 32,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  guessLogsContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
})