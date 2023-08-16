import { useState } from 'react';
import { View, Button, StyleSheet, FlatList, Text, Pressable } from 'react-native'
import GoalInput from './GoalInput';

function GoalsManager() {
    const [openGoalInput, setOpenGoalInput] = useState(false);
    const [enteredGoals, setEnteredGoals] = useState([]);

    const openGoalInputModal = () => {
        setOpenGoalInput(true);
    }

    const closeGoalInputModal = () => {
        setOpenGoalInput(false);
    }

    const onAddGoal = (goal) => {
        setEnteredGoals((currentEnteredGoals) => [
            ...currentEnteredGoals,
            {text: goal, id: Math.random()*10}
        ]);
        closeGoalInputModal();
    };

    const onDeleteGoal = (goalId) => {
        setEnteredGoals((currentEnteredGoals) => 
            currentEnteredGoals.filter((goal) => goal.id !== goalId)
        );
    }
  return (
    <View style={styles.goalsManagerWrapper}>
        <View style={styles.addGoadBtn}>
            <Button title='Add Goal' color='#232031' onPress={openGoalInputModal} />
        </View>
      <GoalInput onAddGoal={onAddGoal} isOpenModal={openGoalInput} onCloseModal={closeGoalInputModal} />
      <FlatList 
        data={enteredGoals}
        renderItem={(itemData) => (
            <Pressable style={styles.goalIem} onPress={onDeleteGoal.bind(this, itemData.item.id)}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>                
            </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
};

const styles = StyleSheet.create({
    goalsManagerWrapper: {
        padding: 20
    },
    addGoadBtn: {
        marginBottom: 20,
    },
    goalIem: {
        padding: 10,
        margin: 8,
        backgroundColor: '#162c33',
        justifyContent: 'center',
        alignItems: 'center'
    },
    goalText: {
        color: '#fff',
    }
})

export default GoalsManager;