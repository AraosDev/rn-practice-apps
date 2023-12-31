import { View, StyleSheet, Alert } from 'react-native';
import React/* , { useContext } */ from 'react';
import { colors } from '../../Globals/Styles/colors';
// import { ExpenseCtx } from '../../../appStore/context/ExpenseTracker/expenses';
import IconButton from '../../Globals/components/IconButton';
// import { useDispatch, useSelector } from 'react-redux';
// import { addExpense, deleteExpense, updateExpense } from '../../../appStore/redux/ExpenseTracker/expenses';
import ExpenseForm from '../components/ExpenseForm';
import { useAddExpensesMutation, useDeleteExpenseMutation, useGetExpensesQuery, useUpdateExpenseMutation } from '../../../appStore/redux/ExpenseTracker/apiSlice';

function ManageExpenses({ route, navigation }) {
  const { expenseId } = route.params || {};
  const isUpdateScreen = !!expenseId;

  // const expenseCtx = useContext(ExpenseCtx);
  // const dispatch = useDispatch();
  // const { expenses } = useSelector((state) => state.expenses);
  const [addExpenseTrigger] = useAddExpensesMutation();
  const [updateExpenseTrigger] = useUpdateExpenseMutation();
  const [deleteExpenseTrigger] = useDeleteExpenseMutation();

  const { data: expenses } = useGetExpensesQuery();

  const goBack = () => navigation.goBack();

  const onConfirm = (expenseData) => {
    if (isUpdateScreen) {
      // expenseCtx.updateExpense(expenseId, expenseData);
      // dispatch(updateExpense({ id: expenseId, data: expenseData }));
      if (expenseData) {
        updateExpenseTrigger({ id: expenseId, data: expenseData })
          .unwrap()
          .then((data) => data && goBack())
          .catch(() => Alert.alert('Updating Expense failed. Try again!'))
      }
    } else {
      // expenseCtx.addExpense(expenseData);
      // dispatch(addExpense({ data: expenseData }));
      addExpenseTrigger(expenseData)
        .unwrap()
        .then((data) => data && goBack())
        .catch(() => Alert.alert('Adding Expense failed. Try again!'));
    }
  };

  const onDelete = () => {
    // expenseCtx.deleteExpense(expenseId);
    // dispatch(deleteExpense({ id: expenseId }));
    deleteExpenseTrigger(expenseId)
      .unwrap()
      .then(() => goBack())
      .catch(() => Alert.alert('Deleting Expense failed. Try again!'));

  };

  const currentExpense = expenses?.find(({ id }) => id === expenseId) || {};

  return (
    <View style={styles.rootScreen}>
      <ExpenseForm
        defaults={currentExpense}
        onCancel={goBack}
        onSubmit={onConfirm}
        submitLabel={isUpdateScreen ? 'Update' : 'Add'}
      />
      <View style={styles.deleteBtnContainer}>
        <IconButton icon='trash' color={colors.error500} size={30} onPress={onDelete} />
      </View>
    </View>
  );
}

export default ManageExpenses;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: colors.primary200,
    padding: 24,
  },
  deleteBtnContainer: {
    marginVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
