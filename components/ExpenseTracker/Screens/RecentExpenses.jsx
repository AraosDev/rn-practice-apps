import { View, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../Globals/Styles/colors';
import { dummyExpenses } from './AllExpenses';
import ExpenseOutput from '../components/ExpenseOutput';

function RecentExpenses() {
    return (
        <View style={styles.rootScreen}>
            <ExpenseOutput expenses={dummyExpenses} period='Last 7 days' />
        </View>
    );
}

export default RecentExpenses

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
        backgroundColor: colors.primary200,
        padding: 24,
    }
});