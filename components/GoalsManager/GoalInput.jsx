import { View, StyleSheet, Modal, TextInput, Button, Image } from 'react-native'
import GoalImg from '../../assets/images/goal.png';
import { useState } from 'react';

export default function GoalInput({ isOpenModal = false, onCloseModal = () => {}, onAddGoal = () => {} }) {
    const [goalText, setGoalText] = useState('');
  return (
    <Modal visible={isOpenModal}>
        <View style={styles.inputContainer}>
            <View style={styles.imageContainer}>
                <Image style={{resizeMode: 'center'}} source={GoalImg} />
            </View>
            <View style={styles.inputWrapper}>
                <TextInput value={goalText} onChangeText={setGoalText} style={styles.inputElement} placeholder='Type your goall' />
            </View>
            <View style={styles.buttonContainer}>
                <Button title='Add Goal' color="#ada0dd" onPress={onAddGoal.bind(this, goalText)} />
                <Button title='Cancel' color="#ada0dd" onPress={onCloseModal} />
            </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#232031'
    },
    inputWrapper:{
        flex: 1,
        width: '80%',
    },
    inputElement: {
        borderWidth: 2,
        borderColor: '#ada0dd',
        borderRadius: 4,
        backgroundColor: '#ada0dd',
        padding: 8,
        color: '#fff',
    },
    buttonContainer: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '60%',
    },
    imageContainer: {
        flex: 4,
    }
})