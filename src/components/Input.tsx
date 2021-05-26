import React from 'react';
import {StyleSheet, TextInputProps, TextInput} from 'react-native';

const Input: React.FC<TextInputProps> = props => (
  <TextInput
    {...props}
    style={StyleSheet.flatten({...styles.input, ...props.style})}
  />
);
const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
export default Input;
