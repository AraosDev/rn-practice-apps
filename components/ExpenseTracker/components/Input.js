import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { colors } from '../../Globals/Styles/colors';

function Input({ label = '', textInputConfig = {} }) {
    const { multiLine } = textInputConfig;

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>{label}</Text>
            <TextInput style={[styles.input, multiLine && styles.multiLineInput]} {...textInputConfig} />
        </View>
    );
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        margin: 8,
        padding: 8,
    },
    inputLabel: {
        fontSize: 16,
        color: colors.primary800,
        padding: 4,
        borderBottomColor: colors.primary400,
        borderBottomWidth: 4,
    },
    input: {
        backgroundColor: colors.primary100,
        padding: 8,
        marginVertical: 8,
        borderRadius: 8,
    },
    multiLineInput: {
        minHeight: 100,
        textAlignVertical: 'top',
    }
});