import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Input from './Input';
import Button from '../../Globals/components/Button';
import { colors } from '../../Globals/Styles/colors';

function ExpenseForm({ defaults = {}, onSubmit, onCancel, submitLabel }) {
    const [inputs, setInputs] = useState({
        amount: { value: defaults?.amount?.toString() || '', isValid: true },
        date: { value: defaults?.date || '', isValid: true },
        description: { value: defaults?.description || '', isValid: true },
    });

    function inputChangeHandler(inputProp, inputVal) {
        setInputs((currentInput) => ({
            ...currentInput,
            [inputProp]: { value: inputVal, isValid: true },
        }));
    };

    function onSubmitHandler() {
        const { amount, date, description } = inputs;
        const expenseData = {
            amount: Number(amount.value),
            date: date.value,
            description: description.value
        };

        onSubmit(expenseData);
    }

    return (
        <View>
            <Input
                label='Amount'
                textInputConfig={{ keyboardType: 'decimal-pad', value: inputs.amount.value, onChangeText: inputChangeHandler.bind(this, 'amount') }}
            />
            <Input
                label='Date'
                textInputConfig={{ placeholder: 'YYYY-MM-DD', maxLength: 10, value: inputs.date.value, onChangeText: inputChangeHandler.bind(this, 'date') }}
            />
            <Input
                label='Description'
                textInputConfig={{ multiLine: true, value: inputs.description.value, onChangeText: inputChangeHandler.bind(this, 'description') }}
            />
            <View style={styles.actionBtnContainer}>
                <Button style={{ backgroundColor: 'transparent' }} onPress={onCancel}>Cancel</Button>
                <Button onPress={onSubmitHandler}>{submitLabel}</Button>
            </View>
        </View>
    );
}

export default ExpenseForm;

const styles = StyleSheet.create({
    actionBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 16,
        borderBottomColor: colors.primary100,
        borderBottomWidth: 4
    },
})