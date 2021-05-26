import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

interface Props {
  enteredGoal: String;
  onAddGoal: (enteredgoal: string) => void;
}

const GoalInput: React.FC<Props> = ({onAddGoal}) => {
  const [enteredGoal, setEnteredGoal] = React.useState<string>('');

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Course Goal"
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <View style={styles.buttonContainer}>
        <Button title="ADD" onPress={() => onAddGoal(enteredGoal)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '60%',
  },
  button: {width: '70%'},
});

export default GoalInput;
