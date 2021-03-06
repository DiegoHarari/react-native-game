import React from 'react';
import {StyleSheet, TextInputProps, View, Text} from 'react-native';
import Colors from '../../Constants/Colors';

const NumberContainer: JSX.Element = ({selectedNumber}: number) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{selectedNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  },
});
export default NumberContainer;
