import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavPlaces from './screens/FavPlaces';
import AddFavPlaces from './screens/AddFavPlaces';
import Map from './screens/Map';
import { StyleSheet } from 'react-native';
import { colors } from '../Globals/Styles/colors';
import IconButton from '../Globals/components/IconButton';
import { useEffect } from 'react';
import { database } from '../Globals/utils/database';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { setAddPlaces } from '../../appStore/redux/FavoritePlaces/favoritePlaces';

const Stack = createNativeStackNavigator();

function FavoritePlaces() {
    const { headerStyle, contentStyle } = styles;
    const dispatch = useDispatch();

    useEffect(() => {
        database.fetchPlaces()
            .then((places) => {
                console.log({ places });
                dispatch(setAddPlaces(places));
            })
            .catch(() => {
                Alert.alert('Error in fetching your places', 'Please try again.');
            })
    }, []);

    return (
        <Stack.Navigator screenOptions={{ headerStyle, contentStyle }}>
            <Stack.Screen
                name='favPlaces'
                component={FavPlaces}
                options={({ navigation }) => (
                    {
                        title: 'Favorite Places',
                        headerRight: ({ tintColor }) => <IconButton icon='add' color={tintColor} size={24} onPress={() => navigation.navigate('addFavPlaces')} />
                    }
                )}
            />
            <Stack.Screen name='addFavPlaces' component={AddFavPlaces} options={{ title: 'Add Favorite Places' }} />
            <Stack.Screen name='map' component={Map} options={{ title: 'Map' }} />
        </Stack.Navigator>
    );
}

export default FavoritePlaces;

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: colors.primary200,
    },
    contentStyle: {
        backgroundColor: colors.primary50,
    },
});