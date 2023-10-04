import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'
import MealsApp from './components/MealsApp';
import GoalsManager from './components/GoalsManager';
import GuessNumberGame from './components/GuessNumber';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ExpenseTracker from './components/ExpenseTracker';
import { store } from './appStore/redux/store';
import { Provider } from 'react-redux';
import { ExpenseProvider } from './appStore/context/ExpenseTracker/expenses';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';
import { colors } from './components/Globals/Styles/colors';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function AuthenticatedNavigators() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='mealsApp' component={MealsApp} options={{ headerShown: false, title: 'Meals App' }} />
      <Drawer.Screen name='goalsManager' component={GoalsManager} options={{ title: 'Goals Manager' }} />
      <Drawer.Screen name='guessNumberGame' component={GuessNumberGame} options={{ title: 'Guess Number Game' }} />
      <Drawer.Screen name='expenseTracker' component={ExpenseTracker} options={{ title: 'Expense Tracker', headerShown: false }} />
    </Drawer.Navigator>
  );
}

function NonAuthenticatedNavigators() {
  return (
    <Stack.Navigator screenOptions={{ contentStyle: styles.nonAuthContent, headerStyle: styles.nonAuthHeader }}>
      <Stack.Screen name='login' component={Login} options={{ title: 'Login' }} />
      <Stack.Screen name='signUp' component={SignUp} options={{ title: 'Sign Up' }} />
    </Stack.Navigator>
  );
}

function RootAppComp() {
  return (
    <NavigationContainer>
      {/* <AuthenticatedNavigators /> */}
      <NonAuthenticatedNavigators />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <View style={styles.container}>
        <Provider store={store}>
          <ExpenseProvider>
            <RootAppComp />
          </ExpenseProvider>
        </Provider>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 50,
    // paddingHorizontal: 16,
  },
  nonAuthContent: {
    backgroundColor: colors.primary50,
  },
  nonAuthHeader: {
    backgroundColor: colors.primary100
  }
});
