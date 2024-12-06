import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';  // Import Ionicons for the menu icon
import styles from './style';

const MainMenu = ({ navigation }) => {
  useEffect(() => {
    // Set up the menu icon in the header right when the screen is loaded
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={100} color="green" style={{ marginBottom: 50 }} />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#fff', // Set a background color for the header if needed
      },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main Menu</Text>
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
    </View>
  );
};

export default MainMenu;
