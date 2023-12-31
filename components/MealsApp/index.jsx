import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesView from './Components/CategoriesView';
import MealsOverview from './Components/MealsOverview';
import MealDetails from './Components/MealDetails';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favorites from './Components/Favorites';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function CategoriesScreen() {
  return (
    <Drawer.Navigator screenOptions={{ swipeEnabled: false }}>
      <Drawer.Screen component={CategoriesView} name='Categories' options={{ title: 'Categories' }} />
      <Drawer.Screen component={Favorites} name='favorites' options={{ title: 'Favorites' }} />
    </Drawer.Navigator>
  );
}

function MealsApp() {
  return (
      <Stack.Navigator>
        <Stack.Screen component={CategoriesScreen} name='CategoriesScreen' options={{ headerShown: false }} />
        <Stack.Screen component={MealsOverview} name='MealsOverview' />
        <Stack.Screen component={MealDetails} name='MealsDetails' />
      </Stack.Navigator>
  );
}

export default MealsApp;