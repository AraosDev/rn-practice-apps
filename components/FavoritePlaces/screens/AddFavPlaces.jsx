import { ScrollView, View } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import TakeImage from '../components/TakeImage';
import MapPreview from '../components/MapPreview';

function AddFavPlaces() {
    return (
        <ScrollView style={styles.root}>
            <TakeImage />
            <MapPreview />
        </ScrollView>
    );
}

export default AddFavPlaces;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        /* justifyContent: 'center',
        alignItems: 'center', */
        padding: 20
    }
});