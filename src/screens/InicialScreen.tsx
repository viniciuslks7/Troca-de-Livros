import React, { useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StatusBar, Dimensions, Animated } from 'react-native';
import styled from 'styled-components/native';
import { RootStackParamList } from '../navigation/AppNavigator';

type InicialScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Inicial'>;

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Container = styled.View`
  position: relative;
  width: ${screenWidth}px;
  height: ${screenHeight}px;
  background: #FFFFFF;
  border-radius: 31px;
`;

// Status Bar Component (similar às outras telas)
const StatusBarContainer = styled.View`
  position: absolute;
  height: 44px;
  left: 6px;
  right: 8px;
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

// Logo Container
const LogoContainer = styled.View`
  position: absolute;
  width: 221px;
  height: 142.28px;
  left: ${(screenWidth - 221) / 2}px;
  top: ${(screenHeight - 142.28) / 2 - 126.86}px;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled(Animated.Image)`
  width: 221px;
  height: 142.28px;
  resize-mode: contain;
`;

// Content Container
const ContentContainer = styled.View`
  position: absolute;
  width: 100%;
  left: 0px;
  top: 366px;
  align-items: center;
  padding: 0 20px;
`;

const WelcomeTitle = styled.Text`
  width: 192px;
  height: 36px;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  color: #074477;
  text-align: center;
  margin-bottom: 8px;
`;

const SubtitleText = styled.Text`
  width: 348px;
  height: 40px;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #201E1E;
  text-align: center;
  margin-bottom: 16px;
`;

const LoginButton = styled.TouchableOpacity`
  width: 245px;
  height: 48px;
  background: #074477;
  border-radius: 24px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  shadow-color: #000000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 4;
`;

const LoginButtonText = styled.Text`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: #FFFFFF;
`;

const InicialScreen: React.FC = () => {
  const navigation = useNavigation<InicialScreenNavigationProp>();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideUpAnim = useRef(new Animated.Value(30)).current;
  const logoScaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    // Animações sequenciais
    Animated.sequence([
      // Logo aparece primeiro
      Animated.parallel([
        Animated.timing(logoScaleAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: false,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: false,
        }),
      ]),
      // Depois o conteúdo desliza para cima
      Animated.timing(slideUpAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }),
    ]).start();
  }, [fadeAnim, slideUpAnim, logoScaleAnim]);

  const handleLogin = () => {
    navigation.navigate('LoginCliente');
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

      {/* Logo */}
      <LogoContainer>
        <LogoImage 
          source={require('../../assets/logo.png')}
          style={{
            opacity: fadeAnim,
            transform: [{ scale: logoScaleAnim }],
          }}
        />
      </LogoContainer>

      {/* Content */}
      <Animated.View 
        style={{ 
          transform: [{ translateY: slideUpAnim }],
          opacity: fadeAnim,
        }}
      >
        <ContentContainer>
          <WelcomeTitle>Bem-vindo!</WelcomeTitle>
          <SubtitleText>Tudo o que precisa está aqui. Aproveite!</SubtitleText>
          <LoginButton onPress={handleLogin}>
            <LoginButtonText>FAZER LOGIN</LoginButtonText>
          </LoginButton>
        </ContentContainer>
      </Animated.View>
    </Container>
  );
};

export default InicialScreen;