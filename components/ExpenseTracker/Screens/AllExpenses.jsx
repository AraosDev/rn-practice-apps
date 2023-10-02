import { View, StyleSheet } from 'react-native';
import React/* , { useContext } */ from 'react';
import { colors } from '../../Globals/Styles/colors';
import ExpenseOutput from '../components/ExpenseOutput';
import { useGetExpensesQuery } from '../../../appStore/redux/ExpenseTracker/apiSlice';
import Loader from '../../Globals/components/Loader';
import ErrorOverlay from '../../Globals/components/ErrorOverlay';
// import { ExpenseCtx } from '../../../appStore/context/ExpenseTracker/expenses';
// import { useSelector } from 'react-redux';

function AllExpenses() {
  // const { expenses } = useContext(ExpenseCtx);
  // const { expenses } = useSelector((state) => state.expenses);
  const { isLoading, data: expenses, isError } = useGetExpensesQuery();

  const screenContent = () => {
    const errorMsg = expenses?.length === 0 || !expenses ? 'No Expenses to show' : 'Unknown Error Occurred';
    if (isLoading) return <Loader />;
    else if (isError || !expenses || expenses?.length === 0)
      return (
        <ErrorOverlay message={errorMsg} showActionBtn={false} />
      );
    else if (expenses) return <ExpenseOutput expenses={expenses} period='All Expenditures' />;
  };

  return (
    <View style={styles.rootScreen}>
      {screenContent()}
    </View>
  );
}

export default AllExpenses;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: colors.primary200,
    padding: 24,
  }
});
