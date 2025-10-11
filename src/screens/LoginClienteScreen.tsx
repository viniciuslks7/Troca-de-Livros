import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styled from 'styled-components/native';
import { RootStackParamList } from '../navigation/AppNavigator';

type LoginClienteScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LoginCliente'>;

const Container = styled.ScrollView`
  flex: 1;
  background-color: #ffffff;
`;

const Content = styled.View`
  padding: 40px 20px;
  justify-content: center;
  min-height: 100%;
`;

const Header = styled.View`
  align-items: center;
  margin-bottom: 40px;
`;

const Logo = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 10px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 10px;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  color: #666666;
  text-align: center;
`;

const Form = styled.View`
  margin-bottom: 30px;
`;

const InputContainer = styled.View`
  margin-bottom: 20px;
`;

const Label = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 8px;
`;

const Input = styled.TextInput`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px;
  font-size: 16px;
  background-color: #f8f9fa;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 15px;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 20px;
`;

const LoginButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;

const BackButton = styled.TouchableOpacity`
  align-items: center;
  padding: 10px;
`;

const BackButtonText = styled.Text`
  color: #007bff;
  font-size: 16px;
`;

const ForgotPasswordButton = styled.TouchableOpacity`
  align-items: center;
  margin-bottom: 20px;
`;

const ForgotPasswordText = styled.Text`
  color: #666666;
  font-size: 14px;
`;

const LoginClienteScreen: React.FC = () => {
  const navigation = useNavigation<LoginClienteScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implementar lógica de login
    console.log('Login com:', { email, password });
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleForgotPassword = () => {
    // Implementar recuperação de senha
    console.log('Esqueci minha senha');
  };

  return (
    <Container>
      <Content>
        <Header>
          <Logo>Troca-Troca</Logo>
          <Title>Entrar</Title>
          <Subtitle>Acesse sua conta para continuar</Subtitle>
        </Header>

        <Form>
          <InputContainer>
            <Label>Email</Label>
            <Input
              value={email}
              onChangeText={setEmail}
              placeholder="Digite seu email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </InputContainer>

          <InputContainer>
            <Label>Senha</Label>
            <Input
              value={password}
              onChangeText={setPassword}
              placeholder="Digite sua senha"
              secureTextEntry
            />
          </InputContainer>

          <ForgotPasswordButton onPress={handleForgotPassword}>
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </ForgotPasswordButton>

          <LoginButton onPress={handleLogin}>
            <LoginButtonText>Entrar</LoginButtonText>
          </LoginButton>
        </Form>

        <BackButton onPress={handleBack}>
          <BackButtonText>Voltar</BackButtonText>
        </BackButton>
      </Content>
    </Container>
  );
};

export default LoginClienteScreen;