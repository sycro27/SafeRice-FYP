import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { BlurView } from 'expo-blur';  // Importing BlurView from expo-blur
import SideMenu from 'react-native-side-menu'; // Import side menu
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import styles from './style'; // Assuming you are using styles from style.js

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track menu open/close
  const navigation = useNavigation(); // Access navigation hook for navigation within this component

  // Side menu content
  const menu = (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 20, marginTop: 50 }}>
      {/* Profile Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        style={{
          backgroundColor: '#4CAF50',  // Green background
          borderRadius: 10,             // Rounded corners
          paddingVertical: 15,          // Vertical padding
          paddingHorizontal: 20,        // Horizontal padding
          marginBottom: 15,             // Space between buttons
          alignItems: 'center',        // Center text inside button
          shadowColor: '#000',         // Shadow effect
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,                // Elevation for Android
        }}
      >
        <Text style={{ color: '#fff', fontSize: 18 }}>Profile</Text>
      </TouchableOpacity>

      {/* Edit Profile Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate('EditProfile')}
        style={{
          backgroundColor: '#2196F3',  // Blue background
          borderRadius: 10,             // Rounded corners
          paddingVertical: 15,          // Vertical padding
          paddingHorizontal: 20,        // Horizontal padding
          marginBottom: 15,             // Space between buttons
          alignItems: 'center',        // Center text inside button
          shadowColor: '#000',         // Shadow effect
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,                // Elevation for Android
        }}
      >
        <Text style={{ color: '#fff', fontSize: 18 }}>Edit Profile</Text>
      </TouchableOpacity>

      {/* About Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate('About')}
        style={{
          backgroundColor: '#FF5722',  // Orange background
          borderRadius: 10,             // Rounded corners
          paddingVertical: 15,          // Vertical padding
          paddingHorizontal: 20,        // Horizontal padding
          marginBottom: 15,             // Space between buttons
          alignItems: 'center',        // Center text inside button
          shadowColor: '#000',         // Shadow effect
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,                // Elevation for Android
        }}
      >
        <Text style={{ color: '#fff', fontSize: 18 }}>About</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SideMenu
      menu={menu}  // Pass the menu to SideMenu
      isOpen={isOpen}  // Controls whether the menu is open
      onChange={(isOpen) => setIsOpen(isOpen)} // Update state when menu is opened/closed
      menuPosition="left" // Optional: Left or right for menu position
    >
      <View style={styles.container}>
        {/* Image Background with Blur */}
        <ImageBackground
          source={require('../../assets/riceback.jpg')}  // Path to your image
          style={styles.backgroundImage}
        >
          <BlurView
            style={styles.absolute}  // Ensures the blur covers the entire screen
            intensity={50}  // Adjust the intensity of the blur (0 to 100)
            tint="light"    // Can be 'light' or 'dark' depending on your theme
          />
          
          {/* Menu Button at the top left */}
          <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={styles.menuButton}>
            <Text style={{ fontSize: 30, color: 'black', padding: -5, marginTop: 20 }}>☰</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Main Menu</Text>

          {/* Options */}
          <TouchableOpacity
            style={styles.optionBox}
            onPress={() => navigation.navigate('CameraFeature', { feature: 'Rice Classification' })}
          >
            <Text style={styles.optionText}>Rice Classification</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionBox}
            onPress={() => navigation.navigate('CameraFeature', { feature: 'Check Plant Disease' })}
          >
            <Text style={styles.optionText}>Check Plant Disease</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionBox}
            onPress={() => navigation.navigate('CameraFeature', { feature: 'Check Plant Health Status' })}
          >
            <Text style={styles.optionText}>Check Plant Health Status</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </SideMenu>
  );
};

export default MainMenu;
