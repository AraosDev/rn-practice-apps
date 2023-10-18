import { View, Text, StyleSheet, Alert, Image } from 'react-native'
import React, { useEffect } from 'react'
import Button from '../../Globals/components/Button';
import { colors } from '../../Globals/Styles/colors';
import { useForegroundPermissions, PermissionStatus, getCurrentPositionAsync, getLastKnownPositionAsync } from 'expo-location';
import { getMapPreview } from '../../Globals/utils/location';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setPlaceProps } from '../../../appStore/redux/FavoritePlaces/favoritePlaces';

export default function MapPreview() {
    const { latitude, longitude } = useSelector((state) => state.favoritePlaces);
    const [locationPermisionInfo, requestLocationPermission] = useForegroundPermissions();
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const { latitude: selectedLat, longitude: selectedLong } = route.params || {};

    useEffect(() => {
        if (selectedLat && selectedLong)
            dispatch(setPlaceProps({ latitude: selectedLat, longitude: selectedLong }));
    }, [selectedLat, selectedLong])

    async function verifyLocationPermission() {
        if (locationPermisionInfo.status === PermissionStatus.UNDETERMINED) {
            const locationRes = await requestLocationPermission();
            return locationRes.granted;
        } else if (locationPermisionInfo.status === PermissionStatus.DENIED) {
            Alert.alert('Location Permission denied', 'Please give location permission to use this feature');
            return false;
        }

        return true;
    }

    async function getCurrentLocation() {
        const hasPermission = await verifyLocationPermission();
        if (!hasPermission) {
            return;
        }
        const location = await getLastKnownPositionAsync();
        return location;
    }

    async function setCurrentGeoLocation() {
        const location = await getCurrentLocation();
        dispatch(setPlaceProps({ latitude: location.coords.latitude, longitude: location.coords.longitude }));
    }

    async function openMapView() {
        let currentLoc;
        if (latitude && longitude) currentLoc = { latitude, longitude };
        else {
            const location = await getCurrentLocation();
            currentLoc = { latitude: location.coords.latitude, longitude: location.coords.longitude }
        }
        navigation.navigate('map', { ...currentLoc });
    }

    let mapPreview = <Text style={styles.mapImageFallback}>No Map Preview available</Text>;
    if (latitude && longitude) mapPreview = <Image style={styles.mapImage} source={{ uri: getMapPreview({ latitude, longitude }) }} />
    return (
        <View style={styles.mapContainer}>
            <View style={styles.mapPreviewContainer}>{mapPreview}</View>
            <View style={styles.mapBtnContainer}>
                <Button style={styles.mapButton} onPress={setCurrentGeoLocation}>Current location</Button>
                <Button style={styles.mapButton} onPress={openMapView}>Pick on Map</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mapContainer: { flex: 1, marginVertical: 10, width: '100%' },
    mapPreviewContainer: {
        flex: 1,
        minHeight: 200,
        maxHeight: 200,
        width: '100%',
        marginVertical: 15,
        backgroundColor: colors.primary100,
        borderColor: colors.primary100,
        borderWidth: 4,
        borderRadius: 4,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mapImage: {
        width: '100%',
        height: '100%'
    },
    mapImageFallback: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    mapBtnContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40,
    },
    mapButton: {
        maxWidth: '45%',
        margin: 0,
        padding: 8,
    }
});