import { View, Text } from 'react-native'
import React from 'react'
import Button from '../../Globals/components/Button';
import { styles } from './TakeImage';

export default function MapPreview() {
    return (
        <View style={styles.cameraPreviewContainer}>
            <View style={styles.cameraContainer}></View>
            <Button style={styles.cameraButton}>Get location</Button>
        </View>
    );
}