import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native"

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const inputTextHanler = (enteredText) => {
        setEnteredGoal(enteredText);
      };

    const addGoalHandler = () => {
      props.onAddGoal(enteredGoal);
      setEnteredGoal('');
    };

    return (
      <Modal visible={props.isModalOpen} animationType="slide">

          <View style={styles.inputContainer}>
              <TextInput placeholder="Course Goal" style={styles.input} onChangeText={inputTextHanler} value={enteredGoal} />
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Button title="CANCEL" color="red" onPress={props.cancelModal} />
                </View>
                <View style={styles.button}>
                  <Button title="ADD" onPress={addGoalHandler} />
                </View>
              </View>
          </View>
      </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: { 
        flex: 1,
        justifyContent: "center", 
        alignItems: "center" 
      },
    input: { 
        width: '80%', 
        borderBottomColor: "black", 
        borderBottomWidth: 1, 
        padding: 10,
        marginBottom: 10
      },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '60%'
    },
    button: {
      width: '40%'
    }
});

export default GoalInput;