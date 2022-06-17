import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { StatusBar } from 'react-native';
import Routes from './src/routes';

//const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#232330'} />
      <Routes />
    </NavigationContainer>

  );
}
