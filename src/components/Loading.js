import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View>
      <ActivityIndicator size="large" color="tomato" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
