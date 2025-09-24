// Import necessary components from React Native
import {ScrollView, StyleSheet, Text, View} from 'react-native';

// Import custom Header component
import Header from '../../components/common/Header';

// Import application configuration (example service/config file)
import AppConfig from '../../services/config';

// HomeScreen functional component
const HomeScreen = () => {
  // Debug log to check if AppConfig is loaded properly
  console.log('App Config:', AppConfig);

  return (
    // Main container View with background and layout
    <View style={styles.container}>
      {/* Reusable Header component with a title prop */}
      <Header title="Home Screen" />

      {/* Scrollable area for the content */}
      <ScrollView style={styles.content}>
        {/* Welcome message */}
        <Text style={styles.welcomeText}>Welcome was up to CPAN 213!</Text>

        {/* Description text with a React Native example inside */}
        <Text style={styles.description}>
          return(
          <View>
            <Text>Hello</Text>
          </View>
          ); This is your properly structured React Native application.
        </Text>
      </ScrollView>
    </View>
  );
};

// Styles for HomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1, // Full screen height
    backgroundColor: '#f5f5f5', // Light gray background
  },
  content: {
    flex: 1, // Take remaining space
    padding: 20, // Inner spacing
  },
  welcomeText: {
    fontSize: 24, // Large text size
    fontWeight: 'bold', // Bold font
    color: '#2c3e50', // Dark blue/gray color
    marginBottom: 20, // Space below the text
    textAlign: 'center', // Center align text
  },
  description: {
    fontSize: 16, // Medium text size
    color: '#7f8c8d', // Gray text
    textAlign: 'center', // Center align text
    lineHeight: 24, // Spacing between lines
  },
});

// Export HomeScreen so it can be used in navigation
export default HomeScreen;
