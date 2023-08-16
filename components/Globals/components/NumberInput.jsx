import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react'

function NumberInput({ value, onChangeValue, defaultValue = '0' }) {

    const onChangeText = (currentValue, flag = '') => {
        const currentNumber = Number(currentValue || defaultValue);
        const finalValue = 
            flag === 'ADD_NUM' 
            ? currentNumber + 1 : flag === 'SUB_NUM' 
            ? currentNumber - (currentNumber === Number(defaultValue) ? 0 : 1) : currentNumber;
        onChangeValue(finalValue);
    };

    return (
        <View style={styles.numberInputContainer}>
            <Pressable onPress={() => onChangeText(value, 'ADD_NUM')}>
                <Ionicons name="add" size={40} color="white" />
            </Pressable>
            <TextInput 
                value={value || defaultValue}
                inputMode='numeric'
                style={styles.numberInput}
                onChangeText={onChangeText}
            />
            <Pressable onPress={() => onChangeText(value, 'SUB_NUM')}>
                <Ionicons name="remove" size={40} color="white" />
            </Pressable>
        </View>
    );
}

export default NumberInput

const styles = StyleSheet.create({
    numberInputContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: 16,
      },
      numberInput: {
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        width: 50,
        textAlign: 'center',
        padding: 4
      }
})