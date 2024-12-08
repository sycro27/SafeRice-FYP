import React from 'react';
import { View, TextInput, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';  // Importing BlurView from expo-blur
import styles from './style';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Background image */}
      <ImageBackground
        source={require('../../assets/riceback.jpg')}  // Path to your image
        style={styles.backgroundImage}
      >
        {/* Apply blur effect */}
        <BlurView
          style={styles.absolute}  // Ensures the blur covers the entire screen
          intensity={30}  // Adjust the intensity of the blur (0 to 100)
          tint="light"    // Can be 'light' or 'dark' depending on your theme
        />

        {/* Form container with a big box effect */}
        <View style={styles.formBoxContainer}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />
          
          {/* Custom green button */}
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainMenu')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
            Don't have an account? Sign Up
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
