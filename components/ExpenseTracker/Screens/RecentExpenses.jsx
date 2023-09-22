import { View, StyleSheet } from 'react-native';
import React/* , { useContext } */ from 'react';
import { colors } from '../../Globals/Styles/colors';
import ExpenseOutput from '../components/ExpenseOutput';
// import { ExpenseCtx } from '../../../appStore/context/ExpenseTracker/expenses';
import { useSelector } from 'react-redux';

function RecentExpenses() {
    // const { expenses } = useContext(ExpenseCtx);
    const { expenses } = useSelector((state) => state.expenses);
    return (
        <View style={styles.rootScreen}>
            <ExpenseOutput expenses={expenses} period='Last 7 days' />
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