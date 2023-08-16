import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function SetNumber({ gameMode, currentScreen, guesser, noOfGuesses }) {
  return (
    <View>
      <Text>{gameMode}, {currentScreen}, {guesser}, {noOfGuesses}</Text>
    </View>
  )
}

export default SetNumber;

const styles = StyleSheet.create({})