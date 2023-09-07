import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../../Globals/components/Card';
import NumberInput from '../../Globals/components/NumberInput';
import Button from '../../Globals/components/Button';

function SetNumber({ guesser, guessNumber, setGuessNumber, navigateTo }) {
  const opponent = guesser === 'Player 1' ? 'Player 2' : 'Player 1';

  const resetGuessNumber = () => {
    setGuessNumber('1');
  };

  const onSubmit = () => {
    if (Number(guessNumber) < 1 || Number(guessNumber) > 99)
      Alert.alert('In valid guess number', 'Number should be between 1 and 99');
    else navigateTo('GUESS_NUMBER');
  };

  return (
    <View style={styles.rootScreen}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Hi {opponent}</Text>
      </View>
      <View style={styles.instructionContainer}>
        <Text style={styles.instructionText}>Set the number to be guessed by {guesser}</Text>
      </View>
      <View style={styles.guessNumberInputContainer}>
        <Card style={[styles.rootScreen, styles.cardContainer]}>
          <View>
            <View style={styles.inputContainer}>
              <NumberInput
                value={guessNumber.toString()}
                onChangeValue={setGuessNumber}
                defaultValue={'1'}
              />
            </View>
            <View style={styles.actionBtns}>
              <Button onPress={resetGuessNumber}>Reset</Button>
              <Button onPress={onSubmit}>Submit</Button>
            </View>
          </View>
        </Card>
      </View>
      <View style={styles.instructionContainer}>
        <Text style={styles.instructionText}>Note: Number should be between 1 and 100 (exclusive)</Text>
      </View>
    </View>
  )
}

export default SetNumber;

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
    flex: 2,
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
  }
})