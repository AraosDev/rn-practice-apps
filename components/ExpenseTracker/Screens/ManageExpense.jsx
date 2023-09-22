import { View, StyleSheet } from 'react-native';
import React/* , { useContext } */ from 'react';
import { colors } from '../../Globals/Styles/colors';
import Button from '../../Globals/components/Button';
// import { ExpenseCtx } from '../../../appStore/context/ExpenseTracker/expenses';
import IconButton from '../../Globals/components/IconButton';
import { useDispatch } from 'react-redux';
import { addExpense, deleteExpense, updateExpense } from '../../../appStore/redux/ExpenseTracker/expenses';

function ManageExpenses({ route, navigation }) {
  const { expenseId } = route.params || {};
  const isUpdateScreen = !!expenseId;

  // const expenseCtx = useContext(ExpenseCtx);
  const dispatch = useDispatch();
  const goBack = () => navigation.goBack();

  const onConfirm = () => {
    if (isUpdateScreen) {
      const updatableVal = {
        description: 'Updated Value',
        amount: 200,
        date: new Date().toISOString(),
      };

      // expenseCtx.updateExpense(expenseId, updatableVal);
      dispatch(updateExpense({ id: expenseId, data: updatableVal }));
    } else {
      const newVal = {
        description: 'New Value',
        amount: 200,
        date: new Date().toISOString(),
      };

      // expenseCtx.addExpense(newVal);
      dispatch(addExpense({data: newVal}));
    }
    goBack();
  };

  const onDelete = () => {
    // expenseCtx.deleteExpense(expenseId);
    dispatch(deleteExpense({ id: expenseId }));
    goBack();
  };
  
  return (
    <View style={styles.rootScreen}>
      <View style={styles.actionBtnContainer}>
        <Button style={{ backgroundColor: 'transparent' }} onPress={goBack}>Cancel</Button>
        <Button onPress={onConfirm}>{isUpdateScreen ? 'Update' : 'Add'}</Button>
      </View>
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
  actionBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 16,
    borderBottomColor: colors.primary100,
    borderBottomWidth: 4
  },
  deleteBtnContainer: {
    marginVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
