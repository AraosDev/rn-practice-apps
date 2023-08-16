import { StyleSheet, View } from 'react-native'
import React from 'react'
import Card from '../../Globals/components/Card'
import Button from '../../Globals/components/Button';
import Title from '../../Globals/components/Title';

function GameMode({ onChangeMode }) {
    return (
        <>
            <Title>Guess Number</Title>
            <View style={styles.modeContainer}>
                <Card style={styles.cardStyles}>
                    <View style={styles.buttonsContainer}>
                        <Button onPress={() => onChangeMode('COMP_MODE')}>Play with Computer</Button>
                        <Button onPress={() => onChangeMode('PARTNER_MODE')}>Play with Partner</Button>
                    </View>
                </Card>
            </View>
        </>
    );
}

export default GameMode;

const styles = StyleSheet.create({
    modeContainer: {
        flex: 4,
        paddingTop: 75,
    },
    cardStyles: {
        margin: 20,
    },
    buttonsContainer: {
        width:'auto',
        height: 'auto',
    },
});