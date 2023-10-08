import { View, Text, StyleSheet, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import Button from '../../Globals/components/Button';
import { colors } from '../../Globals/Styles/colors';
import { useCameraPermissions, PermissionStatus, launchCameraAsync } from 'expo-image-picker';

function TakeImage() {
    const { cameraContainer, cameraPreviewContainer, cameraButton } = styles;

    const [camPermissionStatus, requireCamPermission] = useCameraPermissions();

    const [pickedImageUri, setPickedImageUri] = useState(null);

    async function verifyCameraPermission() {
        if (camPermissionStatus.status === PermissionStatus.UNDETERMINED) {
            const response = await requireCamPermission();
            return response.granted;
        } else if (camPermissionStatus.status === PermissionStatus.DENIED) {
            Alert.alert('No camera permission granted', 'Please give camera permissions to use this feature');
            return false;
        }

        return true;
    }

    async function openCamHandler() {
        if (!(await verifyCameraPermission())) {
            return;
        }

        const pickedImage = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.4
        });

        setPickedImageUri(pickedImage.assets[0].uri);

    }

    let previewFallback = <Text style={styles.imageFallback}>Please Select an image</Text>
    if (pickedImageUri) previewFallback = <Image style={styles.image} source={{ uri: pickedImageUri }} />

    return (
        <View style={cameraContainer}>
            <View style={cameraPreviewContainer}>{previewFallback}</View>
            <Button style={cameraButton} onPress={openCamHandler}>Take Image</Button>
        </View>
    );
}

export default TakeImage;

export const styles = StyleSheet.create({
    cameraContainer: { flex: 1, marginVertical: 10, width: '100%' },
    cameraPreviewContainer: {
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
    image: {
        width: '100%',
        height: '100%'
    },
    imageFallback: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    cameraButton: {
        flex: 1,
        width: '100%',
        margin: 0,
        marginVertical: 10,
    }
});