import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function Title({children}) {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{children}</Text>
        </View>
    )
}

export default Title;

const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 8,
        padding: 24,
    },
})