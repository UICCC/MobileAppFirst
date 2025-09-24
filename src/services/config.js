// src/services/config.js

// Import environment variables from react-native-config
import Config from 'react-native-config';

// Define an AppConfig object to store app-wide configuration values
export const AppConfig = {
  apiBaseUrl: Config.API_BASE_URL, // Base URL for API requests
  appName: Config.APP_NAME, // Application name (from .env)
  debugMode: Config.DEBUG_MODE === 'true', // Convert string to boolean
  version: Config.VERSION, // App version (from .env)
};

// Export AppConfig for use throughout the project
export default AppConfig;
