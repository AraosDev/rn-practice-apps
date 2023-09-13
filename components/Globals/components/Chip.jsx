import { View, StyleSheet } from 'react-native'
import React from 'react'

function Chip({ children }) {
  return (
    <View style={styles.chipWrapper}>
      {children}
    </View>
  )
};

export default Chip;

const styles = StyleSheet.create({
    chipWrapper: {
        backgroundColor: '#fa8b03',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        margin: 8
    }
})