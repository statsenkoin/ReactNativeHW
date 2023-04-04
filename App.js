import React from 'react';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
} from '@expo-google-fonts/roboto';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';

import { NavigationContainer } from '@react-navigation/native';

import { useRoute } from './router';

export default function App() {
  const routung = useRoute(null);

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Lobster_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }

  return <NavigationContainer>{routung}</NavigationContainer>;
}
