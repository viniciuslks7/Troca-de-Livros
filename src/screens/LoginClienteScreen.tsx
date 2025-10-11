import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StatusBar, Dimensions, Animated, ScrollView, Image } from 'react-native';
import styled from 'styled-components/native';
import { RootStackParamList } from '../navigation/AppNavigator';

type LoginClienteScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LoginCliente'>;

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Container = styled.View`
  position: relative;
  width: ${screenWidth}px;
  height: ${screenHeight}px;
  background: #F8F9FA;
  border-radius: 30px;
`;

// Status Bar Component
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

const TimeContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TimeText = styled.Text`
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #1A2530;
  letter-spacing: -0.165px;
`;

const BatteryContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const SignalBars = styled.View`
  flex-direction: row;
  align-items: flex-end;
  gap: 1px;
`;

const SignalBar = styled.View<{ height: number }>`
  width: 3px;
  height: ${props => props.height}px;
  background-color: #000000;
  border-radius: 1.2px;
`;

const WifiIcon = styled.View`
  width: 15.4px;
  height: 11.06px;
  background-color: #1A2530;
  border-radius: 2px;
`;

const BatteryIcon = styled.View`
  width: 24.5px;
  height: 11.5px;
  background-color: #707B81;
  border-radius: 2px;
  position: relative;
`;

const BatteryLevel = styled.View`
  position: absolute;
  width: 18px;
  height: 7.67px;
  background-color: #1A2530;
  border-radius: 1.6px;
  top: 2px;
  left: 2px;
`;

// Back Button
const BackButton = styled.TouchableOpacity`
  position: absolute;
  width: 44px;
  height: 44px;
  left: 20px;
  top: 52px;
  background: #FFFFFF;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
`;

const BackIcon = styled.View`
  width: 12px;
  height: 12px;
  border-left: 2px solid #1A2530;
  border-bottom: 2px solid #1A2530;
  transform: rotate(45deg);
`;

// Header Content
const HeaderContainer = styled.View`
  position: absolute;
  width: 267px;
  height: 64px;
  left: 54px;
  top: 128px;
  align-items: center;
`;

const WelcomeTitle = styled.Text`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  color: #1A2530;
  text-align: center;
  margin-bottom: 8px;
`;

const WelcomeSubtitle = styled.Text`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #707B81;
  text-align: center;
`;

// Form Container
const FormContainer = styled.View`
  position: absolute;
  width: 335px;
  height: 218px;
  left: 20px;
  top: 242px;
`;

const InputGroup = styled.View`
  width: 100%;
  height: 80px;
  margin-bottom: 30px;
`;

const InputLabel = styled.Text`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1A2530;
  margin-bottom: 8px;
`;

const InputContainer = styled.View`
  width: 335px;
  height: 48px;
  background: #FFFFFF;
  border-radius: 50px;
  flex-direction: row;
  align-items: center;
  padding: 16px 14px;
`;

const TextInput = styled.TextInput`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #1A2530;
  flex: 1;
`;

const PasswordContainer = styled.View`
  width: 335px;
  height: 48px;
  background: #FFFFFF;
  border-radius: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
`;

const PasswordDots = styled.View`
  flex-direction: row;
  gap: 3px;
  align-items: center;
`;

const PasswordDot = styled.View`
  width: 6px;
  height: 6px;
  background-color: #1A2530;
  border-radius: 3px;
`;

const EyeIcon = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

const EyeIconImage = styled(Image)`
  width: 20px;
  height: 20px;
`;

const ForgotPasswordText = styled.Text`
  position: absolute;
  right: 20px;
  top: 202px;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #707B81;
`;

// Buttons Container
const ButtonsContainer = styled.View`
  position: absolute;
  width: 335px;
  height: 138px;
  left: 20px;
  top: 490px;
`;

const LoginButton = styled.TouchableOpacity`
  width: 335px;
  height: 54px;
  background: #074477;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const LoginButtonText = styled.Text`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
`;

const GoogleButton = styled.TouchableOpacity`
  width: 335px;
  height: 54px;
  background: #FFFFFF;
  border-radius: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const GoogleIcon = styled(Image)`
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

// Footer
const FooterContainer = styled.View`
  position: absolute;
  width: 271px;
  height: 16px;
  left: 52px;
  top: 647px;
  flex-direction: row;
  align-items: center;
`;

const FooterText = styled.Text`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #707B81;
`;

const CreateAccountText = styled.Text`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #1A2530;
  margin-left: 3px;
`;

const LoginClienteScreen: React.FC = () => {
  const navigation = useNavigation<LoginClienteScreenNavigationProp>();
  const [email, setEmail] = useState('glaucon.k@gmail.com');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideUpAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    // Animações de entrada
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: false,
      }),
      Animated.timing(slideUpAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  }, [fadeAnim, slideUpAnim]);

  const handleLogin = () => {
    // Implementar lógica de login
    console.log('Login com:', { email, password });
  };

  const handleGoogleLogin = () => {
    // Implementar login com Google
    console.log('Login com Google');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleCreateAccount = () => {
    // Implementar navegação para criar conta
    console.log('Criar conta');
  };

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  return (
    <Animated.View style={{ opacity: fadeAnim, flex: 1 }}>
      <Container>
        <StatusBar barStyle="dark-content" />
        
        {/* Status Bar */}
        <StatusBarContainer>
          <TimeContainer>
            <TimeText>{getCurrentTime()}</TimeText>
          </TimeContainer>
          
          <BatteryContainer>
            <SignalBars>
              <SignalBar height={4} />
              <SignalBar height={6} />
              <SignalBar height={8} />
              <SignalBar height={11} />
            </SignalBars>
            
            <WifiIcon />
            
            <BatteryIcon>
              <BatteryLevel />
            </BatteryIcon>
          </BatteryContainer>
        </StatusBarContainer>

        {/* Back Button */}
        <BackButton onPress={handleBack}>
          <BackIcon />
        </BackButton>

        {/* Header */}
        <Animated.View style={{ transform: [{ translateY: slideUpAnim }] }}>
          <HeaderContainer>
            <WelcomeTitle>Olá, leitor!</WelcomeTitle>
            <WelcomeSubtitle>Seja bem-vindo!</WelcomeSubtitle>
          </HeaderContainer>

          {/* Form */}
          <FormContainer>
            <InputGroup>
              <InputLabel>E-mail</InputLabel>
              <InputContainer>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Digite seu e-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </InputContainer>
            </InputGroup>

            <InputGroup>
              <InputLabel>Senha</InputLabel>
              <PasswordContainer>
                <PasswordDots>
                  {[...Array(8)].map((_, index) => (
                    <PasswordDot key={index} />
                  ))}
                </PasswordDots>
                <EyeIcon onPress={() => setShowPassword(!showPassword)}>
                  <EyeIconImage source={require('../../assets/icon-senha.png')} />
                </EyeIcon>
              </PasswordContainer>
              <ForgotPasswordText>Recuperar senha</ForgotPasswordText>
            </InputGroup>
          </FormContainer>

          {/* Buttons */}
          <ButtonsContainer>
            <LoginButton onPress={handleLogin}>
              <LoginButtonText>Login</LoginButtonText>
            </LoginButton>

            <GoogleButton onPress={handleGoogleLogin}>
              <GoogleIcon source={require('../../assets/botao-google.png')} />
              <GoogleButtonText>Entrar com o Google</GoogleButtonText>
            </GoogleButton>
          </ButtonsContainer>

          {/* Footer */}
          <FooterContainer>
            <FooterText>Você Não possui uma conta?</FooterText>
            <CreateAccountText onPress={handleCreateAccount}>
              Criar cadastro
            </CreateAccountText>
          </FooterContainer>
        </Animated.View>
      </Container>
    </Animated.View>
  );
};

export default LoginClienteScreen;