import { View, StyleSheet } from 'react-native';
import React/* , { useContext } */ from 'react';
import { colors } from '../../Globals/Styles/colors';
import ExpenseOutput from '../components/ExpenseOutput';
// import { ExpenseCtx } from '../../../appStore/context/ExpenseTracker/expenses';
// import { useSelector } from 'react-redux';
import { isDateWithin7Days } from '../../Globals/utils/date';
import Loader from '../../Globals/components/Loader';
import { useGetExpensesQuery } from '../../../appStore/redux/ExpenseTracker/apiSlice';
import ErrorOverlay from '../../Globals/components/ErrorOverlay';

function RecentExpenses() {
    // const { expenses } = useContext(ExpenseCtx);
    // const { expenses } = useSelector((state) => state.expenses);
    const { isLoading, data: expenses, isError } = useGetExpensesQuery();

    const errorMsg = expenses?.length === 0 || !expenses ? 'No Expenses to show' : 'Unknown Error Occurred';
    const recentExpenses = expenses?.filter(({ date }) => isDateWithin7Days(date));

    const screenContent = isLoading
        ? <Loader />
        : isError || !expenses || expenses?.length
            ? <ErrorOverlay message={errorMsg} showActionBtn={false} />
            : <ExpenseOutput expenses={recentExpenses} period='Last 7 days' />

    return (
        <View style={styles.rootScreen}>
            {screenContent}
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