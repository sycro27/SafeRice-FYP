import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';  // Ensure correct import statement
import styles from './style';  // Assuming you have a separate styles file

const CameraFeature = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [facing, setFacing] = useState(Camera.Constants.Type.back);  // Use Camera.Constants.Type.back for default camera

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();  // Correct method for requesting permissions
      setHasPermission(status === 'granted');
    })();
  }, []);

  // Handle loading and permission checking
  if (hasPermission === null) {
    // Camera permissions are still loading
    return <Text>Requesting camera permission...</Text>;
  }

  if (!hasPermission) {
    // Camera permissions are not granted
    return (
      <View style={styles.container}>
        <Text style={styles.title}>We need your permission to show the camera</Text>
        <Button title="Grant Permission" onPress={() => Camera.requestPermissionsAsync()} />
      </View>
    );
  }

  // Toggle camera facing between front and back
  const toggleCameraFacing = () => {
    setFacing((prev) => (prev === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Camera</Text>
      <Camera style={styles.camera} type={facing}>
        <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
          <TouchableOpacity style={{ alignSelf: 'center' }} onPress={toggleCameraFacing}>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default CameraFeature;
