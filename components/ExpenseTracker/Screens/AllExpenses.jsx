import { View, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../Globals/Styles/colors';
import ExpenseOutput from '../components/ExpenseOutput';

export const dummyExpenses = [
    {
        id: 'e1',
        amount: 100,
        description: 'Cups',
        date: new Date('1997-11-13')
    },
    {
        id: 'e2',
        amount: 100,
        description: 'Cups',
        date: new Date('1997-11-13')
    },
    {
        id: 'e3',
        amount: 100,
        description: 'Cups',
        date: new Date('1997-11-13')
    },
    {
        id: 'e4',
        amount: 100,
        description: 'Cups',
        date: new Date('1997-11-13')
    },
    {
        id: 'e5',
        amount: 100,
        description: 'Cups',
        date: new Date('1997-11-13')
    },
    {
        id: 'e6',
        amount: 100,
        description: 'Cups',
        date: new Date('1997-11-13')
    },
    {
        id: 'e7',
        amount: 100,
        description: 'Cups',
        date: new Date('1997-11-13')
    },
    {
        id: 'e8',
        amount: 100,
        description: 'Cups',
        date: new Date('1997-11-13')
    },
    {
        id: 'e9',
        amount: 100,
        description: 'Cups',
        date: new Date('1997-11-13')
    },
    {
        id: 'e10',
        amount: 100,
        description: 'Cups',
        date: new Date('1997-11-13')
    },
    {
        id: 'e11',
        amount: 100,
        description: 'Cups',
        date: new Date('1997-11-13')
    },
    {
        id: 'e12',
        amount: 100,
        description: 'Cups',
        date: new Date('1997-11-13')
    },
    {
        id: 'e13',
        amount: 100,
        description: 'Cups',
        date: new Date('1997-11-13')
    },
];

function AllExpenses() {
  return (
    <View style={styles.rootScreen}>
      <ExpenseOutput expenses={dummyExpenses} period='All Expenditures' />
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
