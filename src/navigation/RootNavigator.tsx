// src/navigation/RootNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalculatorScreen from '../features/calculator/Screen';
import HomeScreen from '../features/home/Screen';

export type RootStackParamList = {
  Home: undefined;
  Calculator: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: '홈' }} />
      <Stack.Screen name="Calculator" component={CalculatorScreen} options={{ title: '비용 계산기' }} />
    </Stack.Navigator>
  );
}