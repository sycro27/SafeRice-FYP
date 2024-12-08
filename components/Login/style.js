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
    width: '90%',  // Box width (adjust as needed)
    backgroundColor: 'rgba(255, 255, 255, 0.8)',  // Semi-transparent white background for the box
    padding: 20,  // Padding inside the box
    borderRadius: 10,  // Rounded corners
    alignItems: 'center',  // Centers the form content
    zIndex: 1,  // Ensure the form is above the blur
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slight transparency for readability
    borderRadius: 5,
  },
  link: {
    color: '#007bff',  // Blue color for the link
    marginTop: 20,
    fontSize: 16,
    textDecorationLine: 'underline',  // Underlined text for the link
  },
  // Custom green button style
  button: {
    width: '100%',  // Full width button
    backgroundColor: 'green',  // Green color
    padding: 10,  // Padding inside the button
    borderRadius: 5,  // Rounded corners for the button
    alignItems: 'center',  // Center text inside the button
    marginBottom: 10,  // Space between the button and the next element
  },
  buttonText: {
    color: 'white',  // White text color
    fontSize: 16,  // Font size for the button text
    fontWeight: 'bold',  // Bold text
  },
});

export default styles;
