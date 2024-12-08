import React from 'react';
import { View, TextInput, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';  // Importing BlurView from expo-blur
import styles from './style';

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/riceback.jpg')}  // Path to your image
        style={styles.backgroundImage}
      >
        {/* Apply blur effect */}
        <BlurView
          style={styles.absolute}  // Ensures the blur covers the entire screen
          intensity={50}  // Adjust the intensity of the blur (0 to 100)
          tint="light"    // Can be 'light' or 'dark' depending on your theme
        />

        {/* Form content inside a transparent box */}
        <View style={styles.formBoxContainer}>
          <Text style={styles.title}>Sign Up</Text>
          <TextInput style={styles.input} placeholder="Name" />
          <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
          <TextInput style={styles.input} placeholder="Password" secureTextEntry />

          {/* Custom styled button */}
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
            Already have an account? Log In
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignUp;
