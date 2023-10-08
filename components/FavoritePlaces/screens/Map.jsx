import { StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
import IconButton from '../../Globals/components/IconButton';
// import MapView from 'expo-location'

function Map({ navigation, route }) {
    const region = {
        latitude: route.params?.latitude || 37.78,
        longitude: route.params?.longitude || -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    const [selectedLocation, setSelectedLocation] = useState();

    function onSaveLocation() {
        navigation.navigate('addFavPlaces', { ...selectedLocation });
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: ({ tintColor }) => <IconButton icon='save' color={tintColor} onPress={onSaveLocation} />
        });
    }, [navigation, selectedLocation, selectedLocation?.latitude, selectedLocation?.longitude]);

    function selectLocationHandler(event) {
        const latitude = event.nativeEvent.coordinate.latitude;
        const longitude = event.nativeEvent.coordinate.longitude;

        setSelectedLocation({ latitude, longitude });
    }
    return (
        <MapView onPress={selectLocationHandler} style={styles.root} initialRegion={region}>
            {selectedLocation && <Marker title='Picked Location' coordinate={selectedLocation} />}
        </MapView>
    );
}

export default Map;

const styles = StyleSheet.create({
    root: { flex: 1 }
})