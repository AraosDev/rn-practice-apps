import { SafeAreaView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'
import MealsApp from './components/MealsApp';
import GoalsManager from './components/GoalsManager';
import GuessNumberGame from './components/GuessNumber';
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import ExpenseTracker from './components/ExpenseTracker';
import { store } from './appStore/redux/store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { ExpenseProvider } from './appStore/context/ExpenseTracker/expenses';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';
import { colors } from './components/Globals/Styles/colors';
import Button from './components/Globals/components/Button';
import { logout, setToken } from './appStore/redux/UserAuth/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import React, { useEffect, useState } from 'react';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function AuthenticatedDrawer(props) {
  const dispatch = useDispatch();

  async function onLogout() {
    await AsyncStorage.removeItem('token');
    dispatch(logout());
  }

  return (
    <SafeAreaView style={styles.authDrawerContainer}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.logoutBtnContainer}>
        <Button onPress={onLogout} style={styles.logoutBtn}>Logout</Button>
      </View>
    </SafeAreaView>
  );
}

function AuthenticatedNavigators() {
  return (
    <Drawer.Navigator drawerContent={(props) => <AuthenticatedDrawer {...props} />}>
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
  const dispatch = useDispatch();
  const { idToken } = useSelector((state) => state.userAuth.token);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isGettingToken, setGettingToken] = useState(true);

  useEffect(() => {
    const fetchToken = async () => {
      let storedToken = null;
      if (idToken === null) {
        const getTokenItem = await AsyncStorage.getItem('token');
        storedToken = JSON.parse(!!getTokenItem ? getTokenItem : '{}');
      }
      const hasLoggedIn = (idToken && typeof idToken === 'string') || (storedToken && storedToken.idToken && typeof storedToken.idToken === 'string');

      if (storedToken && storedToken.idToken && idToken === null) dispatch(setToken(storedToken));
      setIsLoggedIn(hasLoggedIn);
      setGettingToken(false);
    };

    fetchToken();
  }, [idToken]);

  if (isGettingToken) return <AppLoading />;

  return (
    <NavigationContainer>
      {isLoggedIn ? <AuthenticatedNavigators /> : <NonAuthenticatedNavigators />}
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
  },
  authDrawerContainer: {
    flex: 1,
  },
  logoutBtnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 8,
  },
  logoutBtn: {
    backgroundColor: colors.gray500,
    borderColor: colors.gray700
  }
});
