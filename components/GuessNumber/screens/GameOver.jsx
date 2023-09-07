import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function GameOver({ winner }) {
  return (
    <View>
      <Text>GameOver. Winner is {winner}</Text>
    </View>
  )
}

export default GameOver;

const styles = StyleSheet.create({})