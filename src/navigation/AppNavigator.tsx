import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import PropagandaScreen from '../screens/PropagandaScreen';
import InicialScreen from '../screens/InicialScreen';
import LoginClienteScreen from '../screens/LoginClienteScreen';

export type RootStackParamList = {
  Splash: undefined;
  Propaganda: undefined;
  Inicial: undefined;
  LoginCliente: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        animationEnabled: true,
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Propaganda" component={PropagandaScreen} />
      <Stack.Screen name="Inicial" component={InicialScreen} />
      <Stack.Screen name="LoginCliente" component={LoginClienteScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;