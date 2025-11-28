import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import CriarContaScreen from '../screens/CriarContaScreen';
import DetalheLivrosScreen from '../screens/DetalheLivrosScreen';
import EsqueceuSenhaScreen from '../screens/EsqueceuSenhaScreen';
import HistoricoComprasScreen from '../screens/HistoricoComprasScreen';
import InicialScreen from '../screens/InicialScreen';
import LoginClienteScreen from '../screens/LoginClienteScreen';
import NavigationScreen from '../screens/NavigationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PropagandaScreen from '../screens/PropagandaScreen';
import SplashScreen from '../screens/SplashScreen';
import FavoritosScreen from '../screens/FavoritosScreen';

export type RootStackParamList = {
  Splash: undefined;
  Propaganda: undefined;
  Inicial: undefined;
  Favoritos: undefined;
  LoginCliente: undefined;
  CriarConta: undefined;
  EsqueceuSenha: undefined;
  Navigation: undefined;
  Profile: undefined;
  HistoricoCompras: undefined;
  DetalheLivros: { book: any };  // << RECEBE O LIVRO
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
      <Stack.Screen name="Favoritos" component={FavoritosScreen} />
      <Stack.Screen name="LoginCliente" component={LoginClienteScreen} />
      <Stack.Screen name="CriarConta" component={CriarContaScreen} />
      <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenhaScreen} />
      <Stack.Screen name="Navigation" component={NavigationScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
       <Stack.Screen name="HistoricoCompras" component={HistoricoComprasScreen} />
       <Stack.Screen name="DetalheLivros" component={DetalheLivrosScreen} />

    </Stack.Navigator>
  );
};

export default AppNavigator;