import { ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react'
import { StyleSheet } from 'react-native';
import TakeImage from '../components/TakeImage';
import MapPreview from '../components/MapPreview';
import Input from '../../Globals/components/Input';
import { useDispatch, useSelector } from 'react-redux';
import { addPlace, setPlaceProps } from '../../../appStore/redux/FavoritePlaces/favoritePlaces';
import IconButton from '../../Globals/components/IconButton';
import { database } from '../../Globals/utils/database';
import { Alert } from 'react-native';
import { getAddress } from '../../Globals/utils/location';

function AddFavPlaces({ navigation }) {
    const { title, imageUrl: imageUri, latitude, longitude } = useSelector((state) => state.favoritePlaces);
    const dispatch = useDispatch();

    function setPlaceTitle(text) {
        dispatch(setPlaceProps({ title: text }));
    }

    async function saveFavoritePlace() {
        const address = await getAddress({ latitude, longitude });
        database.insertPlace({ title, imageUri, latitude, longitude, address })
            .then((res) => {
                dispatch(addPlace({ id: res.insertId, title, imageUri, latitude, longitude, address }));
                navigation.navigate('favPlaces');
            })
            .catch(() => {
                Alert.alert('Error in Adding your favorite place', 'Please try again.');
            });
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: ({ tintColor }) => <IconButton icon="add" color={tintColor} onPress={saveFavoritePlace} />
        });
    }, []);
    return (
        <ScrollView style={styles.root}>
            <Input label='Add Title' textInputConfig={{ value: title, onChangeText: setPlaceTitle }} />
            <TakeImage />
            <MapPreview />
        </ScrollView>
    );
}

export default AddFavPlaces;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 20
    }
});