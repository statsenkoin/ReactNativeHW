import React from 'react';
import { TouchableOpacity } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PostsScreen from '../SubScreens/PostsScreen';
import CommentsScreen from '../SubScreens/CommentsScreen';
import MapScreen from '../SubScreens/MapScreen';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeStack = createNativeStackNavigator();

export default function HomeScreen({ navigation }) {
  return (
    <HomeStack.Navigator
      screenOptions={{
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
          // marginTop: 10,
          height: 60,
        },
      }}>
      <HomeStack.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity
              // onPress={() => navigation.navigate('Login')}
              title="Press me"
              color="#fff"
              style={{
                padding: 10,
                transform: [{ rotate: '90deg' }],
              }}>
              <MaterialCommunityIcons
                name="tray-arrow-up"
                size={24}
                color="#bdbdbd"
              />
            </TouchableOpacity>
          ),
        }}
      />
      <HomeStack.Screen name="Comments" component={CommentsScreen} />
      <HomeStack.Screen name="Map" component={MapScreen} />
    </HomeStack.Navigator>
  );
}
