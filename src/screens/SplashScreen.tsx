import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StatusBar, Dimensions, Image } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from '../navigation/AppNavigator';

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Container = styled.View`
  position: relative;
  width: ${screenWidth}px;
  height: ${screenHeight}px;
  border-radius: 30px;
  overflow: hidden;
`;

const GradientBackground = styled(LinearGradient)`
  position: absolute;
  width: 100%;
  height: 100%;
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
  color: #FFFFFF;
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
  background-color: #FFFFFF;
  border-radius: 2px;
`;

const BatteryIcon = styled.View`
  width: 24.5px;
  height: 11.5px;
  background-color: #F8F9FA;
  border-radius: 2px;
  position: relative;
`;

const BatteryLevel = styled.View`
  position: absolute;
  width: 18px;
  height: 7.67px;
  background-color: #FFFFFF;
  border-radius: 1.6px;
  top: 2px;
  left: 2px;
`;

const BatteryTip = styled.View`
  position: absolute;
  width: 1.5px;
  height: 4px;
  background-color: rgba(0, 0, 0, 0.36);
  right: -2px;
  top: 50%;
  margin-top: -2px;
  border-radius: 1px;
`;

// Logo Container
const LogoContainer = styled.View`
  position: absolute;
  width: 286px;
  height: 184px;
  left: ${(screenWidth - 286) / 2}px;
  top: ${(screenHeight - 184) / 2 + 1}px;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.Image`
  width: 286px;
  height: 184px;
  resize-mode: contain;
`;

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Propaganda');
    }, 3000); // 3 segundos na splash

    return () => clearTimeout(timer);
  }, [navigation]);

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
      <GradientBackground
        colors={['#FFFFFF', '#074477']}
        locations={[0.35, 1]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />
      
      <StatusBar barStyle="light-content" />
      
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
            <BatteryTip />
          </BatteryIcon>
        </BatteryContainer>
      </StatusBarContainer>

      {/* Logo */}
      <LogoContainer>
        <LogoImage 
          source={require('../../assets/Telas/1 - SPLASH/LOGO TROCA & TROCA 1.png')}
        />
      </LogoContainer>
    </Container>
  );
};

export default SplashScreen;