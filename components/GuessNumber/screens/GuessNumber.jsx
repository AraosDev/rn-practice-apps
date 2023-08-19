import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function GuessNumber({ gameMode, currentScreen, guesser, noOfGuesses, guessNumber }) {
  return (
    <View>
      <Text>{gameMode}, {currentScreen}, {guesser}, {noOfGuesses}, {guessNumber}</Text>
    </View>
  )
}

export default GuessNumber;

const styles = StyleSheet.create({})