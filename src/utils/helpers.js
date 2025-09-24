// Function to format a date into a readable format (e.g., "September 24, 2025")
export const formatDate = date => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric', // Show full year (e.g., 2025)
    month: 'long', // Show full month name (e.g., September)
    day: 'numeric', // Show day number (e.g., 24)
  });
};

// Function to validate if a string is a proper email format
export const validateEmail = email => {
  // Regex pattern to match common email format (text@domain.com)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email); // Returns true if valid, false otherwise
};

// Function to capitalize the first letter of a given string
export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
  // Example: "hello" → "Hello"
};
