import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Title from '../../Globals/components/Title';
import Card from '../../Globals/components/Card';
import Dropdown from '../../Globals/components/Dropdown';
import NumberInput from '../../Globals/components/NumberInput';
import Button from '../../Globals/components/Button';

function GameConfig({
  guesser,
  setGuesser,
  currentMode,
  navigateTo,
  noOfGuesses,
  setNoOfGuesses,
}) {
  const players = ['Player 1', 'Player 2'];

  const resetValues = () => {
    setNoOfGuesses('1');
    if (currentMode === 'PARTNER_MODE') setGuesser(players[0]);
  };

  const navigateBack = () => {
    resetValues();
    navigateTo('GAME_MODE');
  }

  const navigateToNextScreen = () => {
    navigateTo('SET_NUMBER');
  }

  return (
    <ScrollView style={styles.rooScreen}>
      <View style={styles.configTitleContainer}>
        <Pressable onPress={navigateBack}>
          <Text style={styles.navigationTexts}>Back</Text>
        </Pressable>
        <Title>Guess Number</Title>
        <Pressable onPress={navigateBack}>
          <Text style={styles.navigationTexts}>Exit</Text>
        </Pressable>
      </View>
      <View style={styles.configContainer}>
        <Card style={styles.card}>
          <View style={styles.cardContainers}>
            <Text style={styles.instructionText}>Number of guesses</Text>
            <NumberInput
              value={noOfGuesses.toString()}
              onChangeValue={setNoOfGuesses}
              defaultValue={'1'}
            />
          </View>
          {currentMode === 'PARTNER_MODE' ? (
            <View style={styles.cardContainers}>
              <Text style={styles.instructionText}>Who is guessing?</Text>
              <Dropdown value={guesser} onChangeValue={setGuesser} dropDownValues={players}  />
            </View>
          ) : null}
          <View style={styles.actionBtns}>
            <Button onPress={resetValues}>Reset</Button>
            <Button onPress={navigateToNextScreen}>Submit</Button>
          </View>
        </Card>
      </View>
    </ScrollView>
  )
}

export default GameConfig;

const styles = StyleSheet.create({
  rooScreen: {
    flex: 1,
    marginTop: 10
  },
  navigationTexts: {
    color: 'white',
    fontSize: 16,
  },
  configTitleContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  configContainer: {
    flex: 4
  },
  instructionText: {
    color: 'white',
    fontSize: 16,
    margin: 8
  },
  card: {
    maxHeight: 350,
    margin: 32
  },
  cardContainers: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})