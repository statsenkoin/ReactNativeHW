import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './screens/Auth/Login';
import Registration from './screens/Auth/Registration';
import Home from './screens/MainScreens/Home';
import PostsScreen from './screens/MainScreens/PostsScreen';
import ProfileScreen from './screens/MainScreens/ProfileScreen';
import CreatePostScreen from './screens/MainScreens/CreatePostsScreen';

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Registration" component={Registration} />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="Posts" component={PostsScreen} />
      <MainTab.Screen name="Profile" component={ProfileScreen} />
      <MainTab.Screen name="Create Post" component={CreatePostScreen} />
    </MainTab.Navigator>
  );
};
