import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FloatingButton = ({icon, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={icon} color="white" size={30} />
    </TouchableOpacity>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA040',
  },
});
