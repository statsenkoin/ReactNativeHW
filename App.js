import React from 'react';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
} from '@expo-google-fonts/roboto';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';

import { NavigationContainer } from '@react-navigation/native';

// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Login from './screens/Auth/Login';
// import Registration from './screens/Auth/Registration';
// import Home from './screens/MainScreens/Home';
// import PostsScreen from './screens/MainScreens/PostsScreen';
// import ProfileScreen from './screens/MainScreens/ProfileScreen';
// import CreatePostScreen from './screens/MainScreens/CreatePostsScreen';

// const AuthStack = createNativeStackNavigator();
// const MainTab = createBottomTabNavigator();

// const useRoute = (isAuth) => {
//   if (!isAuth) {
//     return (
//       <AuthStack.Navigator
//         screenOptions={{ headerShown: false }}
//         initialRouteName="Login">
//         <AuthStack.Screen name="Login" component={Login} />
//         <AuthStack.Screen name="Registration" component={Registration} />
//       </AuthStack.Navigator>
//     );
//   }
//   return (
//     <MainTab.Navigator>
//       <MainTab.Screen name="Posts" component={PostsScreen} />
//       <MainTab.Screen name="Profile" component={ProfileScreen} />
//       <MainTab.Screen name="Create Post" component={CreatePostScreen} />
//     </MainTab.Navigator>
//   );
// };

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

  // return (
  //   <NavigationContainer>
  //     <MainTab.Navigator>
  //       <MainTab.Screen name="Posts" component={PostsScreen} />
  //       <MainTab.Screen name="Profile" component={ProfileScreen} />
  //       <MainTab.Screen name="Create Post" component={CreatePostScreen} />
  //     </MainTab.Navigator>
  //   </NavigationContainer>
  // );

  // return (
  //   <NavigationContainer>
  //     <AuthStack.Navigator
  //       screenOptions={{ headerShown: false }}
  //       initialRouteName="Login">
  //       <AuthStack.Screen name="Login" component={Login} />
  //       <AuthStack.Screen name="Registration" component={Registration} />
  //     </AuthStack.Navigator>
  //   </NavigationContainer>
  // );
}
