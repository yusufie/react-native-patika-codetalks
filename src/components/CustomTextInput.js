import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const CustomTextInput = ({placeholder, onChangeText, value}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: 'white',
    marginHorizontal: 10,
    marginTop: 10,
  },
  input: {},
});
