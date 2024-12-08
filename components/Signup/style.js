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
  formBoxContainer: {
    width: '90%',  // Adjust width of the form box (can change based on preference)
    backgroundColor: 'rgba(255, 255, 255, 0.8)',  // Slightly transparent white background
    padding: 20,  // Padding inside the form box
    borderRadius: 10,  // Rounded corners
    alignItems: 'center',  // Center form content
    zIndex: 1,  // Ensure the form stays above the blur effect
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',  // Dark text for visibility
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent background for inputs
    borderRadius: 5,
  },
  button: {
    width: '100%',  // Full width for the button
    height: 50,  // Button height
    backgroundColor: '#4CAF50',  // Green background
    justifyContent: 'center',  // Center text vertically
    alignItems: 'center',  // Center text horizontally
    borderRadius: 5,  // Rounded corners
    marginBottom: 15,  // Space between buttons
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,  // Elevation for Android
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,  // Text size for the button
  },
  link: {
    color: '#007bff',  // Blue link color
    marginTop: 20,
    fontSize: 16,
    textDecorationLine: 'underline',  // Underlined text
  },
});

export default styles;
