import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { BlurView } from 'expo-blur';  // Importing BlurView from expo-blur

const Profile = () => {
  // States for displaying text fields
  const [userName] = useState('John Doe');
  const [email] = useState('john.doe@example.com');

  return (
    <ImageBackground
      source={require('../../assets/riceback.jpg')}  // Path to your background image
      style={styles.backgroundImage}
    >
      <BlurView
        style={styles.absolute}  // Ensures the blur covers the entire screen
        intensity={50}  // Adjust the intensity of the blur (0 to 100)
        tint="light"    // Can be 'light' or 'dark' depending on your theme
      />
      
      <View style={styles.container}>
        <Text style={styles.title}>Your Profile</Text>

        {/* Non-editable Box for User Name */}
        <View style={styles.inputBox}>
          <TextInput
            style={styles.inputText}
            value={userName}
            editable={false}  // Make it non-editable
            placeholder="Enter your name"
            placeholderTextColor="#aaa"
          />
        </View>

        {/* Non-editable Box for Email */}
        <View style={styles.inputBox}>
          <TextInput
            style={styles.inputText}
            value={email}
            editable={false}  // Make it non-editable
            placeholder="Enter your email"
            keyboardType="email-address"
            placeholderTextColor="#aaa"
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',  // Ensures the image fills the screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    ...StyleSheet.absoluteFillObject, // Makes the blur cover the entire screen
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    zIndex: 1, // Ensures content is above the blurred background
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
    color: '#fff', // Make title text white for visibility
  },
  inputBox: {
    width: '90%',  // Make the boxes wider
    height: 80,    // Increased height for longer boxes
    marginBottom: 20, // Space between the boxes
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slight transparency for readability
    borderRadius: 15,  // More rounded corners
    borderWidth: 1,   // Border around the box
    borderColor: '#ccc',  // Border color
    paddingHorizontal: 15, // Padding inside the box
    justifyContent: 'center', // Center text inside the input
    shadowColor: '#000',   // Shadow for a floating effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,          // Elevation for Android
  },
  inputText: {
    fontSize: 18,
    color: '#333', // Dark text color for better visibility
    height: '100%',  // Make the text fill the box vertically
    textAlignVertical: 'center', // Vertically center the text inside the input
  },
});

export default Profile;
