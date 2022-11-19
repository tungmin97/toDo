import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import {RootStackParamList} from '../types/types';
import DetailScreen from '../screens/DetailScreen';

export default function RootNavigation() {
  const HomeStack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <HomeStack.Navigator screenOptions={{headerShown: false}}>
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen
          name="Details"
          component={DetailScreen}
          options={{
            presentation: 'transparentModal',
            animation: 'slide_from_bottom',
          }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
