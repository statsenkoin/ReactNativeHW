import React, { useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PostsScreen from '../SubScreens/PostsScreen';
import CommentsScreen from '../SubScreens/CommentsScreen';
import MapScreen from '../SubScreens/MapScreen';
import CreatePostScreen from './CreatePostsScreen';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const HomeStack = createNativeStackNavigator();

export default function HomeScreen({ route, navigation }) {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (
      routeName == 'Comments' ||
      routeName == 'Map' ||
      routeName == 'Create Post'
    ) {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: 'flex', height: 60 } });
    }
  }, [navigation, route]);

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
      {/* <HomeStack.Screen name="Create Post" component={CreatePostScreen} /> */}
    </HomeStack.Navigator>
  );
}
