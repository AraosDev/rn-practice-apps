import { View, StyleSheet, Text } from 'react-native'
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

        const isAmountValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const isDateValid = new Date(expenseData.date).toString() !== 'Invalid Date';
        const isDescriptionValid = expenseData.description.trim().length > 0;

        if (!isAmountValid || !isDateValid || !isDescriptionValid) {
            setInputs((currenInputs) => ({
                amount: { value: currenInputs.amount.value, isValid: isAmountValid },
                description: { value: currenInputs.description.value, isValid: isDescriptionValid },
                date: { value: currenInputs.date.value, isValid: isDateValid },
            }));
            return;
        }

        onSubmit(expenseData);
    }

    const isInputInValid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid;

    return (
        <View>
            <Input
                label='Amount'
                textInputConfig={{ keyboardType: 'decimal-pad', value: inputs.amount.value, onChangeText: inputChangeHandler.bind(this, 'amount') }}
                isInvalid={!inputs.amount.isValid}
            />
            <Input
                label='Date'
                textInputConfig={{ placeholder: 'YYYY-MM-DD', maxLength: 10, value: inputs.date.value, onChangeText: inputChangeHandler.bind(this, 'date') }}
                isInvalid={!inputs.date.isValid}
            />
            <Input
                label='Description'
                textInputConfig={{ multiLine: true, value: inputs.description.value, onChangeText: inputChangeHandler.bind(this, 'description') }}
                isInvalid={!inputs.description.isValid}
            />
            {isInputInValid && <Text style={styles.invalidText}>Please type in correct value !</Text>}
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
    invalidText: {
        color: colors.error500,
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 8
    }
})