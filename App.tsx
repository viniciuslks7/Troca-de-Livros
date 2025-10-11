import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import AppNavigator from './src/navigation/AppNavigator';

const Container = styled.View`
  flex: 1;
`;

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Container>
          <AppNavigator />
          <StatusBar style="auto" />
        </Container>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}