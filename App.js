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
const Drawer = createDrawerNavigator();

function RNPractiseApps() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='mealsApp' component={MealsApp} options={{ headerShown: false, title: 'Meals App' }} />
      <Drawer.Screen name='goalsManager' component={GoalsManager} options={{ title: 'Goals Manager' }} />
      <Drawer.Screen name='guessNumberGame' component={GuessNumberGame} options={{ title: 'Guess Number Game' }} />
      <Drawer.Screen name='expenseTracker' component={ExpenseTracker} options={{ title: 'Expense Tracker', headerShown: false }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <View style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <RNPractiseApps />
        </NavigationContainer>
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
  }
});
