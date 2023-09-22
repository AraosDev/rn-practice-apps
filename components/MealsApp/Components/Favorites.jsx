import { View, Text } from 'react-native'
import React from 'react';
import { MEALS } from '../data/dummy-data';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

function Favorites() {
    const { favIds } = useSelector((state) => state.mealsAppFavoritesSlice);
    const favMeals = MEALS.filter(({ id }) => favIds.includes(id));
  return (
    <View>
      <FlatList
        data={favMeals}
        keyExtractor={(meal) => meal.id}
        renderItem={(mealData) => <Text>{mealData.item.title}</Text>}
      />
    </View>
  );
}

export default Favorites;