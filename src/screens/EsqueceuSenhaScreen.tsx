import React, { useState } from 'react';
import { StatusBar, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { CustomStatusBar } from '../components/CommonComponents';

type EsqueceuSenhaScreenNavigationProp = StackNavigationProp<RootStackParamList, 'EsqueceuSenha'>;

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Container = styled.View`
  position: relative;
  width: ${screenWidth}px;
  height: ${screenHeight}px;
  background: #F8F9FA;
  border-radius: 30px;
`;

const Title = styled.Text`
  position: absolute;
  left: 62px;
  top: 128px;
  width: 251px;
  height: 36px;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  text-transform: capitalize;
  color: #1A2530;
`;

const Subtitle = styled.Text`
  position: absolute;
  left: 23px;
  top: 168px;
  width: 329px;
  height: 48px;
  font-family: 'Poppins';
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #707B81;
`;

const InputGroup = styled.View`
  position: absolute;
  width: 335px;
  height: 80px;
  left: 20px;
  top: 266px;
`;

const Label = styled.Text`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 54px;
  height: 20px;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1A2530;
`;

const Input = styled.TextInput`
  position: absolute;
  left: 0px;
  top: 32px;
  width: 335px;
  height: 48px;
  background: #FFFFFF;
  border-radius: 50px;
  padding: 16px 14px;
  font-family: 'Poppins';
  font-size: 14px;
  color: #1A2530;
`;

const SendButton = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  top: 386px;
  width: 335px;
  height: 54px;
  background: #074477;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

const SendButtonText = styled.Text`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
`;

const EsqueceuSenhaScreen: React.FC = () => {
  const navigation = useNavigation<EsqueceuSenhaScreenNavigationProp>();
  const [email, setEmail] = useState('');

  const handleSendCode = () => {
    // Implementar lógica de envio do código
    console.log('Enviando código para:', email);
    // Aqui você pode navegar para uma tela de confirmação de código
    // navigation.navigate('ConfirmarCodigo');
  };

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <CustomStatusBar 
        showBackButton={true} 
        onBackPress={() => navigation.goBack()} 
      />
      
      <Title>Recupere sua senha</Title>
      <Subtitle>Por favor, digite seu e-mail, nós enviaremos o código de confirmação</Subtitle>
      
      <InputGroup>
        <Label>E-mail</Label>
        <Input 
          value={email}
          onChangeText={setEmail}
          placeholder="glaucon.k@gmail.com"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </InputGroup>
      
      <SendButton onPress={handleSendCode}>
        <SendButtonText>Enviar</SendButtonText>
      </SendButton>
    </Container>
  );
};

export default EsqueceuSenhaScreen;