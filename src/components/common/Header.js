// Import required components from React Native
import {StyleSheet, Text, View} from 'react-native';

// Functional component Header that receives "title" as a prop
const Header = ({title}) => {
  return (
    // View container styled as a header
    <View style={styles.header}>
      {/* Display the title text passed as a prop */}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

// Define styles for the Header component
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3498db', // Blue background color
    padding: 20, // Space inside the header
    alignItems: 'center', // Center content horizontally
    elevation: 4, // Adds shadow effect (Android)
    shadowColor: '#000', // Shadow color (iOS)
    shadowOffset: {width: 0, height: 2}, // Shadow offset (iOS)
    shadowOpacity: 0.25, // Shadow transparency (iOS)
    shadowRadius: 3.84, // Shadow blur (iOS)
  },
  title: {
    fontSize: 20, // Text size
    fontWeight: 'bold', // Bold text
    color: 'white', // White text color
  },
});

// Export the Header component for use in other files
export default Header;
