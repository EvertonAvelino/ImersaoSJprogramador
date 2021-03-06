import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Routes from './src/routes'

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#232330'} />
      <Routes />
    </NavigationContainer>
  );
};
export default App;
