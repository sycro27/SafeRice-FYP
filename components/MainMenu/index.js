import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const MainMenu = ({ navigation }) => {
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
