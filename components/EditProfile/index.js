import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import { BlurView } from 'expo-blur';  // Importing BlurView from expo-blur

const EditProfile = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    // Handle saving the updated profile info (e.g., API call)
    alert('Profile updated!');
  };

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
        <Text style={styles.title}>Edit Your Profile</Text>

        {/* Editable Box for User Name */}
        <View style={styles.inputBox}>
          <TextInput
            style={styles.inputText}
            value={userName}
            onChangeText={setUserName}  // Update the state when text changes
            placeholder="Username:"
            placeholderTextColor="#aaa"
          />
        </View>

        {/* Editable Box for Email */}
        <View style={styles.inputBox}>
          <TextInput
            style={styles.inputText}
            value={email}
            onChangeText={setEmail}  // Update the state when text changes
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="#aaa"
          />
        </View>

        {/* Save Changes Button */}
        <View style={styles.buttonContainer}>
          <Button
            title="Save Changes"
            onPress={handleSave}
            color="#fff" // Button text color
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
    width: '90%',  // Set to 90% of the screen width
    height: 100,    // Increased height for taller boxes
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
  buttonContainer: {
    width: '90%',  // Make the button box wider
    marginTop: 30, // Space between inputs and button
    borderRadius: 15,
    backgroundColor: '#4CAF50', // Green background for the button
    paddingVertical: 15,         // Increase the button's height
    justifyContent: 'center',   // Center button text
    alignItems: 'center',       // Center the button horizontally
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,               // Elevation for Android
  }
});

export default EditProfile;
