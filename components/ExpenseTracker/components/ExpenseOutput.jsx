import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../../Globals/Styles/colors';
import { dateFormatter } from '../../Globals/utils/date';
import { useNavigation } from '@react-navigation/native';

function ExpenseItem({ id, description, amount, date }) {
    const navigation = useNavigation();

    const navigateToUpdateScreen = () => {
        navigation.navigate(
            'ManageExpenses',
            { expenseId: id }
        );
    };
    return (
        <Pressable style={({ pressed }) => pressed && { opacity: 0.7 }} onPress={navigateToUpdateScreen}>
            <View style={styles.expenseItemContainer}>
                <View>
                    <Text style={styles.expenseItemDescription}>{description}</Text>
                    <Text style={styles.expenseItemDate}>{dateFormatter(date)}</Text>
                </View>
                <View style={styles.expenseItemAmountContainer}>
                    <Text style={styles.expenseItemAmountText}>{amount}</Text>
                </View>
            </View>
        </Pressable>
    );
}

function ExpenseOutput({ period, expenses = [] }) {
    const expensesSum = expenses.reduce((sum, expense) => sum + expense.amount, 0).toFixed(2);
    return (
        <View style={styles.rootScreen}>
            <View style={styles.summaryContainer}>
                <Text style={styles.summaryPeriod}>{period}</Text>
                <Text style={styles.summarySum}>${expensesSum}</Text>
            </View>
            <View>
                <FlatList
                    data={expenses}
                    keyExtractor={(item) => item.id}
                    renderItem={(data) => <ExpenseItem {...data.item} />}
                />
            </View>
        </View>
    );
}

export default ExpenseOutput;

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
        marginBottom: 50,
    },
    summaryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.primary100,
        padding: 16,
        borderRadius: 4,
        elevation: 16,
        marginBottom: 8,
    },
    summaryPeriod: {
        color: colors.primary800,
        fontSize: 14,
        fontWeight: 'bold'
    },
    summarySum: {
        color: colors.primary800,
        fontSize: 18,
        fontWeight: 'bold'
    },
    expenseItemContainer: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8,
        backgroundColor: colors.primary700
    },
    expenseItemDescription: {
        color: 'white'
    },
    expenseItemDate: {
        color: '#cccc'
    },
    expenseItemAmountContainer: {
        backgroundColor: 'white',
        padding: 8,
        minWidth: 80,
        borderRadius: 4,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    expenseItemAmountText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black'
    }
})