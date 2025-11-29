import React, { useState } from 'react';
import { StatusBar, Dimensions, Image } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { CustomStatusBar } from '../components/CommonComponents';

type CriarContaScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CriarConta'>;

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Container = styled.View`
  position: relative;
  width: ${screenWidth}px;
  height: ${screenHeight}px;
  background: #F8F9FA;
  border-radius: 30px;
`;

const StatusBarContainer = styled.View`
  position: absolute;
  height: 44px;
  left: 0px;
  right: 0px;
  top: 0px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  top: 52px;
  width: 44px;
  height: 44px;
  background: #FFFFFF;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
`;

const BackIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

const Title = styled.Text`
  position: absolute;
  left: 82px;
  top: 128px;
  width: 213px;
  height: 36px;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  text-transform: capitalize;
  color: #1A2530;
`;

const Subtitle = styled.Text`
  position: absolute;
  left: 64px;
  top: 168px;
  width: 247px;
  height: 24px;
  font-family: 'Poppins';
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #707B81;
`;

const Label = styled.Text`
  position: absolute;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1A2530;
`;

const Input = styled.TextInput`
  position: absolute;
  width: 335px;
  height: 48px;
  left: 20px;
  background: #FFFFFF;
  border-radius: 50px;
  padding: 0 14px;
  font-family: 'Poppins';
  font-size: 14px;
  color: #1A2530;
`;

const PasswordContainer = styled.View`
  position: absolute;
  width: 335px;
  height: 48px;
  left: 20px;
  background: #FFFFFF;
  border-radius: 50px;
  flex-direction: row;
  align-items: center;
  padding: 0 14px;
`;

const PasswordInput = styled.TextInput`
  flex: 1;
  font-family: 'Poppins';
  font-size: 14px;
  color: #1A2530;
`;

const EyeIcon = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

const EyeIconImage = styled.Image`
  width: 20px;
  height: 20px;
`;

const Button = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  width: 335px;
  height: 54px;
  background: #074477;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
`;

const GoogleButton = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  width: 335px;
  height: 54px;
  background: #FFFFFF;
  border-radius: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const GoogleIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

const GoogleButtonText = styled.Text`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #1A2530;
`;

const FooterContainer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 746px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.Text`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #707B81;
  text-transform: capitalize;
`;

const LoginText = styled.Text`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1A2530;
  text-transform: capitalize;
  margin-left: 4px;
`;

const CriarContaScreen: React.FC = () => {
  const navigation = useNavigation<CriarContaScreenNavigationProp>();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEnterApp = () => {
    navigation.navigate('Navigation');
  };

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <CustomStatusBar 
        showBackButton={true} 
        onBackPress={() => navigation.goBack()} 
      />
      <Title>Crie sua conta</Title>
      <Subtitle>Vamos fazer isso juntos</Subtitle>
      <Label style={{ left: 20, top: 242 }}>Digite seu nome</Label>
      <Input style={{ top: 274 }} value={nome} onChangeText={setNome} placeholder="Seu nome" />
      <Label style={{ left: 20, top: 352 }}>Endereço de E-mail</Label>
      <Input style={{ top: 384 }} value={email} onChangeText={setEmail} placeholder="Seu e-mail" keyboardType="email-address" />
      <Label style={{ left: 20, top: 462 }}>Senha</Label>
      <PasswordContainer style={{ top: 494 }}>
        <PasswordInput 
          value={senha} 
          onChangeText={setSenha} 
          placeholder="Senha" 
          secureTextEntry={!showPassword}
        />
        <EyeIcon onPress={() => setShowPassword(!showPassword)}>
          <EyeIconImage source={showPassword ? 
            require('../../assets/eye-aberto.jpg') : 
            require('../../assets/icon-senha.png')
          } />
        </EyeIcon>
      </PasswordContainer>
      <Button style={{ top: 572 }} onPress={handleEnterApp}>
        <ButtonText>Entrar</ButtonText>
      </Button>
      <GoogleButton style={{ top: 656 }}>
        <GoogleIcon source={require('../../assets/icongoogle.png')} />
        <GoogleButtonText>Entrar com o Google</GoogleButtonText>
      </GoogleButton>
      <FooterContainer>
        <FooterText style={{ textAlign: 'center' }}>Você possui uma conta?</FooterText>
        <LoginText onPress={() => navigation.navigate('LoginCliente')} style={{ textAlign: 'center', marginLeft: 4 }}>Login</LoginText>
      </FooterContainer>
    </Container>
  );
};

export default CriarContaScreen;
