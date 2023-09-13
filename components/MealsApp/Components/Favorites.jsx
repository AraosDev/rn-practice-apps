import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { FavoritesCtx } from '../store/context/favorites';
import { MEALS } from '../data/dummy-data';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

function Favorites() {
    // const favoritesCtx = useContext(FavoritesCtx);
    const { favIds } = useSelector((state) => state.favorites);
    const favMeals = MEALS.filter(({ id }) => favIds.includes(id)); // favoritesCtx.isFavorite(id));
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