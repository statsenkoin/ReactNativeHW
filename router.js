import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TouchableOpacity } from 'react-native';

import Login from './screens/Auth/Login';
import Registration from './screens/Auth/Registration';
// import Home from './screens/MainScreens/Home';
import PostsScreen from './screens/MainScreens/PostsScreen';
import ProfileScreen from './screens/MainScreens/ProfileScreen';
import CreatePostScreen from './screens/MainScreens/CreatePostsScreen';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

// temporary before redux ===================================
function MainRoot({ navigation }) {
  return (
    <MainTab.Navigator
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
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
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
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="grid" size={24} color="#21212177" />
          ),
        }}
      />
      <MainTab.Screen
        name="Create Post"
        component={CreatePostScreen}
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Create Post')}
              title="Press me"
              color="#fff"
              style={{
                backgroundColor: '#FF6C00',
                width: 70,
                height: 40,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
              }}>
              <AntDesign name="plus" size={20} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={24} color="#21212177" />
          ),
        }}
      />
    </MainTab.Navigator>
  );
}

export const useRoute = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Registration" component={Registration} />
      <AuthStack.Screen name="MainRoot" component={MainRoot} />
    </AuthStack.Navigator>
  );
};

// ======================================================
// export const useRoute = (isAuth) => {
// if (!isAuth) {
//   return (
//     <AuthStack.Navigator screenOptions={{ headerShown: false }}>
//       <AuthStack.Screen name="Login" component={Login} />
//       <AuthStack.Screen name="Registration" component={Registration} />
//     </AuthStack.Navigator>
//   );
// }
// return (
//   <MainTab.Navigator>
//     <MainTab.Screen name="Posts" component={PostsScreen} />
//     <MainTab.Screen name="Profile" component={ProfileScreen} />
//     <MainTab.Screen name="Create Post" component={CreatePostScreen} />
//   </MainTab.Navigator>
// );
// };
