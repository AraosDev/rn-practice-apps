import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpenses from './Screens/AllExpenses';
import RecentExpenses from './Screens/RecentExpenses';
import ManageExpenses from './Screens/ManageExpense';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../Globals/Styles/colors';
import IconButton from '../Globals/components/IconButton';

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ExpenseScreen() {
  return (
    <BottomTab.Navigator screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: colors.primary500 },
        tabBarActiveTintColor: colors.accent500,
        tabBarLabelStyle: { marginBottom: 6 },
        headerRight: ({ tintColor }) => <IconButton color={tintColor} icon='add' onPress={() => navigation.navigate('ManageExpenses')} />,
        headerRightContainerStyle: { padding: 8 },
    })}>
        <BottomTab.Screen component={AllExpenses} name='AllExpenses' options={({ navigation }) => ({
            tabBarIcon: ({ color, size }) => <IconButton icon='calendar' size={size} color={color} onPress={() => navigation.navigate('AllExpenses')} />,
            title: 'All Expenses'
        })}/>
        <BottomTab.Screen component={RecentExpenses} name='RecentExpenses' options={({ navigation }) => ({
            tabBarIcon: ({ color, size }) => <IconButton icon='time' size={size} color={color} onPress={() => navigation.navigate('RecentExpenses')} />,
            title: 'Recent Expenses'
        })}/>
    </BottomTab.Navigator>
  );
}

function ExpenseTracker() {
    return (
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: colors.primary500 } }}>
            <Stack.Screen component={ExpenseScreen} name='ExpenseScreen' options={{ headerShown: false }} />
            <Stack.Screen component={ManageExpenses} name='ManageExpenses' options={{ presentation: 'modal' }} />
        </Stack.Navigator>
    )
}

export default ExpenseTracker
