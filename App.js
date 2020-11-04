import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false);

  const addEnteredGoal = goalTitle => {
    if(goalTitle.length === 0){
      return;
    }
    setCourseGoals(correntGoals => [
      ...correntGoals, 
      { id: Math.random().toString(), value: goalTitle }
     ]);
     setIsAddModal(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(correntGoals => {
      return correntGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const toggleModal = () => {
    setIsAddModal(true);
  };

  const closeModal = () => {
    setIsAddModal(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add new Goal" onPress={toggleModal} />
      <GoalInput isModalOpen={isAddModal} onAddGoal={addEnteredGoal} cancelModal={closeModal} />
      <FlatList 
        keyExtractor={(item, i) => item.id}
        data={courseGoals} 
        renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
