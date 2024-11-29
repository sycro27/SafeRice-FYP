import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from './style';

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Sign Up" onPress={() => navigation.navigate('Login')} />
      <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
        Already have an account? Log In
      </Text>
    </View>
  );
};

export default SignUp;
