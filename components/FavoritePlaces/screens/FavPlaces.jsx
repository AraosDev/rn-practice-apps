import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import PlaceItem from '../components/PlaceItem';

function FavPlaces() {
    const { addedPlaces } = useSelector((state) => state.favoritePlaces);

    if (addedPlaces?.length === 0)
        return (
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>Please add your favorite places !</Text>
            </View>
        );

    return (
        <FlatList
            style={styles.list}
            data={addedPlaces}
            keyExtractor={(place) => place.id}
            renderItem={(data) => <PlaceItem place={data.item} />}
        />
    )
}

export default FavPlaces;

const styles = StyleSheet.create({
    fallbackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fallbackText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    list: {
        margin: 24,
    }
});