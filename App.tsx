import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from './src/components/Header';
import StartGameScreen from './src/screens/StartGameScreen';

const App: React.FC = () => {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <StartGameScreen title="The Game Screen" subTitle="Select a Number" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
