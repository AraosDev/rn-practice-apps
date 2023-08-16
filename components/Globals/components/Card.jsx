import { StyleSheet, View } from 'react-native'
import React from 'react'

function Card({ children, style = {} }) {
  return (
    <View style={[styles.cardContainer, style]}>
      {children}
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#300958',
        borderColor: '#300958',
        borderWidth: 2,
        borderRadius: 8,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: 200,
    },
})