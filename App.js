import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import SignUp from './components/Signup';
import MainMenu from './components/MainMenu';
import CameraFeature from './components/CameraFeature';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="MainMenu" component={MainMenu} options={{ headerShown: false }} />
        <Stack.Screen name="CameraFeature" component={CameraFeature} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
