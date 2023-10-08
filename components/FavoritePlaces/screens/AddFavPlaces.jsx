import { ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import TakeImage from '../components/TakeImage';
import MapPreview from '../components/MapPreview';
import Input from '../../Globals/components/Input';

function AddFavPlaces() {
    const [placeTitle, setPlaceTitle] = useState('');
    return (
        <ScrollView style={styles.root}>
            <Input label='Add Title' textInputConfig={{ value: placeTitle, onChangeText: setPlaceTitle }} />
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