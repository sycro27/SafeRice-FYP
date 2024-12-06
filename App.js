import React, { useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'; // Import the Drawer Navigator
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen'; // Import the splash screen library

import Login from './components/Login';
import SignUp from './components/Signup';
import MainMenu from './components/MainMenu';
import CameraFeature from './components/CameraFeature';
import SplashScreenComponent from './components/SplashScreenComponent';

// Create the drawer navigator and stack navigator
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Stack Navigator for Login & SignUp screens
function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

// Drawer Navigator for MainMenu and CameraFeature
function AppDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="MainMenu"
      screenOptions={{
        headerShown: true, 
      }}
    >
      <Drawer.Screen name="MainMenu" component={MainMenu} />
      <Drawer.Screen name="CameraFeature" component={CameraFeature} />
    </Drawer.Navigator>
  );
}

export default function App() {
  const isLoggedIn = true; // Set this to your actual authentication state
  const [isAppReady, setIsAppReady] = React.useState(false);

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setIsAppReady(true); // After splash screen is done, update the state
    }, 3000); // Match this duration to your splash screen duration
  }, []);

  if (!isAppReady) {
    return <SplashScreenComponent />; // Show splash screen while the app is loading
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppDrawer /> : <AuthStack />}
    </NavigationContainer>
  );
}
