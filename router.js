import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TouchableOpacity } from 'react-native';

import Login from './screens/Auth/Login';
import Registration from './screens/Auth/Registration';
import HomeScreen from './screens/MainScreens/HomeScreen';
import ProfileScreen from './screens/MainScreens/ProfileScreen';
import CreatePostScreen from './screens/MainScreens/CreatePostsScreen';

import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

const mainTabNavigatorOptions = {
  headerStyle: {
    backgroundColor: '#fff',
    height: 88,
  },
  headerTintColor: '#212121',
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 17,
  },
  tabBarShowLabel: false,
  tabBarStyle: {
    height: 60,
  },
};
const mainTabHomeScreenOptions = {
  headerShown: false,
  tabBarIcon: ({ focused, size, color }) => (
    <Feather name="grid" size={24} color="#21212177" />
  ),
};
// const mainTabCreatePostScreenOptions = ({ navigation }) => ({
//   tabBarButton: (props) => (
//     <TouchableOpacity
//       onPress={() => navigation.navigate('Create Post')}
//       title="Press me"
//       color="#fff"
//       style={{
//         backgroundColor: '#FF6C00',
//         width: 70,
//         height: 40,
//         borderRadius: 20,
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginTop: 10,
//       }}>
//       <AntDesign name="plus" size={20} color="#fff" />
//     </TouchableOpacity>
//   ),
// });
const mainTabCreatePostScreenOptions = {
  tabBarIcon: ({ focused, size, color }) => (
    <AntDesign name="plus" size={20} color="#fff" />
  ),
  tabBarIconStyle: {
    backgroundColor: '#FF6C00',
    width: 70,
    height: 40,
    borderRadius: 20,
    margin: 10,
  },
};
const mainTabProfileScreenOptions = {
  tabBarIcon: ({ focused, size, color }) => (
    <Feather name="user" size={24} color="#21212177" />
  ),
};

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
    <MainTab.Navigator screenOptions={mainTabNavigatorOptions}>
      <MainTab.Screen
        name="Home"
        component={HomeScreen}
        options={mainTabHomeScreenOptions}
      />
      <MainTab.Screen
        name="Create Post"
        component={CreatePostScreen}
        options={mainTabCreatePostScreenOptions}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={mainTabProfileScreenOptions}
      />
    </MainTab.Navigator>
  );
};
