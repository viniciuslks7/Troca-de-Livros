import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styled from 'styled-components/native';
import { RootStackParamList } from '../navigation/AppNavigator';

type InicialScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Inicial'>;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
`;

const Logo = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 40px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  text-align: center;
  margin-bottom: 20px;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  color: #666666;
  text-align: center;
  margin-bottom: 40px;
  line-height: 22px;
`;

const ButtonContainer = styled.View`
  width: 100%;
  max-width: 300px;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  align-items: center;
`;

const RegisterButton = styled.TouchableOpacity`
  background-color: transparent;
  border: 2px solid #007bff;
  padding: 15px;
  border-radius: 8px;
  align-items: center;
`;

const LoginButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;

const RegisterButtonText = styled.Text`
  color: #007bff;
  font-size: 16px;
  font-weight: bold;
`;

const InicialScreen: React.FC = () => {
  const navigation = useNavigation<InicialScreenNavigationProp>();

  const handleLogin = () => {
    navigation.navigate('LoginCliente');
  };

  const handleRegister = () => {
    // Implementar navegação para tela de registro
    console.log('Navegar para registro');
  };

  return (
    <Container>
      <Logo>Troca-Troca</Logo>
      <Title>Sua plataforma de trocas</Title>
      <Subtitle>
        Conecte-se com pessoas da sua região e faça trocas incríveis!
      </Subtitle>
      
      <ButtonContainer>
        <LoginButton onPress={handleLogin}>
          <LoginButtonText>Entrar</LoginButtonText>
        </LoginButton>

        <RegisterButton onPress={handleRegister}>
          <RegisterButtonText>Criar Conta</RegisterButtonText>
        </RegisterButton>
      </ButtonContainer>
    </Container>
  );
};

export default InicialScreen;