import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../Globals/Styles/colors';

function FavPlaces() {
    return (
        <View style={styles.fallbackContainer}>
            <Text style={styles.fallbackText}>Please add your favorite places !</Text>
        </View>
    );
}

export default FavPlaces;

const styles = StyleSheet.create({
    fallbackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fallbackText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
});