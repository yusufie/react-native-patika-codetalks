import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './CustomButton.styles';
const CustomButton = ({text, onPress, theme = 'primary'}) => {
  return (
    <TouchableOpacity style={styles[theme].container} onPress={onPress}>
      <Text style={styles[theme].title}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
