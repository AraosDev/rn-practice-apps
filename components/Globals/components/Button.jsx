import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Button({ children, onPress }) {
  return (
    <Pressable 
      style={styles.buttonContainer} 
      android_ripple={{ color: '#d4b6df' }}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    borderColor: '#ca72ea',
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: '#ca72ea',
    padding: 16,
    maxHeight: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  },
})