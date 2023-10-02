import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Button from './Button';

function ErrorOverlay({ message, actionBtnText, feedbackAction, showActionBtn = true }) {
    return (
        <View style={styles.root}>
            <Text style={styles.title}>Error !!</Text>
            <Text>{message}</Text>
            {showActionBtn && <Button onPress={feedbackAction}>{actionBtnText || 'Try Again'}</Button>}
        </View>
    );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});