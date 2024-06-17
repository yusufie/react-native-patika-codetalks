import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign';
import Content from './pages/Odalar';
import CustomOda from './pages/CustomOda';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Stack = createNativeStackNavigator();
const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginPage"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignPage"
          component={Sign}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Odalar"
          component={Content}
          options={{headerTintColor: 'orange', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="CustomOda"
          component={CustomOda}
          options={{
            headerTintColor: 'orange',
            headerTitleAlign: 'center',
            headerRight: () => <Icon name="logout" color="orange" size={30} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
