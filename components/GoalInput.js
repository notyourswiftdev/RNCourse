import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';
import { useState } from 'react'; 

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState(''); 

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} value={enteredGoalText}/>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title='Add Goal' onPress={addGoalHandler}/>
                </View>
                <View style={styles.button}>
                    <Button title='Cancel' />
                </View>
            </View>
            </View>
        </Modal>
    ) 
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomColor: 1,
        borderBottomColor: '#cccccc'
      },
      textInput: { 
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
      },
      buttonContainer: {
        flexDirection: 'row',
      },
      button: {
        width: '40%',
        marginHorizontal: 8
      }
}); 