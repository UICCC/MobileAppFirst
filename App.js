import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {HomeScreen} from './src/screens';
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#3498db" />
      <HomeScreen />
    </SafeAreaView>
  );
};
export default App;

// in line 7 barstyle is connected to my phone's bar
// and changing that color, changes the color on phone as well
