import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',  // Ensures the image fills the screen
    justifyContent: 'center',  // Centers content
    alignItems: 'center',  // Centers content
  },
  absolute: {
    ...StyleSheet.absoluteFillObject, // Makes the blur cover the entire screen
  },
  menuButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 1,  // Ensure the menu button is above the blurred background
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    zIndex: 1,  // Ensures text is above the blur
  },
  optionBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white background
    padding: 15,
    marginBottom: 10,
    width: '80%',
    borderRadius: 8,
    alignItems: 'center',
    zIndex: 1,  // Ensures text is above the blur
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
});

export default styles;
