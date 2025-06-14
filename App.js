import { use, useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'; 
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

function addGoalHandler(enteredGoalText) {
  setCourseGoals((currentCourseGoals) => [
    ...currentCourseGoals,
    {text: enteredGoalText, id: Math.random().toString()}
  ]);
  };

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <Button title='Add new goal' color="#5e0acc" onPress={startAddGoalHandler}/>
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} 
        renderItem={itemData => {
          return (
            <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler.bind(this, itemData.item.id)}  /> 
          )
        }} 
        keyExtractor={(item, index) => {
          return item.id;
        }}
        alwaysBounceVertical={false}/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  }
});
