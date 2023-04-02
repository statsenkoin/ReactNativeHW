import React from 'react';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
} from '@expo-google-fonts/roboto';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Auth/Login';
import Registration from './screens/Auth/Registration';

const AuthStack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Lobster_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AuthStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login">
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Registration" component={Registration} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
