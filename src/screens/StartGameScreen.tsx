import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from 'react-native';
import Colors from '../../Constants/Colors';
import Card from '../components/Card';
import Input from '../components//Input';

interface Props {
  title: string;
  subTitle: string;
}

const StartGameScreem: React.FC<Props> = ({title = '', subTitle = ''}) => {
  const [enteredValue, setEnteredValue] = React.useState<string>('');
  const [confirmed, setConfirmed] = React.useState<boolean>(false);
  const [selectedNumber, setSelectedNumber] = React.useState<number>();

  const numberInputHandler = (inputText: string) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputValue = () => {
    setEnteredValue('');
  };

  const confirmInputHanlder = () => {
    const chosenNumber = parseInt(enteredValue);
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    resetInputValue();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
      <View style={styles.screen}>
        <Text style={styles.title}>{title}</Text>
        <Card style={styles.inputContainer}>
          <Text>{subTitle}</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInputValue}
                color={Colors.primary}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmInputHanlder}
                color={Colors.accent}
              />
            </View>
          </View>
        </Card>
        {confirmed && <Text>Chosen Number: {selectedNumber}</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreem;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: 35,
    textAlign: 'center',
  },
});
