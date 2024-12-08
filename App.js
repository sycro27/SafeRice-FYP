import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen'; // Import splash screen

import Login from './components/Login';
import SignUp from './components/SignUp';
import MainMenu from './components/MainMenu';
import CameraFeature from './components/CameraFeature';
import About from './components/About';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import SplashScreenComponent from './components/SplashScreenComponent'; // Import your splash screen component

const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set the login state
  const [isSplashScreenVisible, setSplashScreenVisible] = useState(true); // State for controlling splash screen visibility

  // Handle splash screen visibility
  useEffect(() => {
    setTimeout(() => {
      setSplashScreenVisible(false); // Hide splash screen after 3 seconds
    }, 3000); // 3 seconds for splash screen
  }, []);

  return (
    <NavigationContainer>
      {isSplashScreenVisible ? (
        // Show the splash screen if it's visible
        <SplashScreenComponent />
      ) : (
        // If the splash screen is hidden, show the appropriate navigation stack
        <Stack.Navigator>
          {!isLoggedIn ? (
            <>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }} // No header for Login
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }} // No header for SignUp
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="MainMenu"
                component={MainMenu}
                options={{ headerShown: false }} // No header for MainMenu
              />
              <Stack.Screen
                name="CameraFeature"
                component={CameraFeature}
              />
              <Stack.Screen
                name="About"
                component={About}
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
              />
              <Stack.Screen
                name="EditProfile"
                component={EditProfile}
              />
            </>
          )}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
