import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width: screenWidth } = Dimensions.get('window');

// Status Bar Components
export const StatusBarContainer = styled.View`
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

export const TimeContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TimeText = styled.Text`
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #1A2530;
  letter-spacing: -0.165px;
`;

export const BatteryContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const SignalBars = styled.View`
  flex-direction: row;
  align-items: flex-end;
  gap: 1px;
`;

export const SignalBar = styled.View<{ height: number }>`
  width: 3px;
  height: ${props => props.height}px;
  background-color: #000000;
  border-radius: 1.2px;
`;

export const WifiIcon = styled.View`
  width: 15.4px;
  height: 11.06px;
  background-color: #1A2530;
`;

export const BatteryIcon = styled.View`
  width: 24.5px;
  height: 11.5px;
  background-color: #DADADA;
  border-radius: 2px;
  position: relative;
`;

export const BatteryLevel = styled.View`
  position: absolute;
  width: 18px;
  height: 7.67px;
  right: 3px;
  top: 1.92px;
  background-color: #1A2530;
  border-radius: 1.6px;
`;

// Back Button Component
export const BackButton = styled.TouchableOpacity`
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

export const BackIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

// Custom Status Bar Component
interface CustomStatusBarProps {
  onBackPress?: () => void;
  showBackButton?: boolean;
}

export const CustomStatusBar: React.FC<CustomStatusBarProps> = ({ 
  onBackPress, 
  showBackButton = false 
}) => {
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  return (
    <>
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

      {showBackButton && onBackPress && (
        <BackButton onPress={onBackPress}>
          <BackIcon source={require('../../assets/icon-voltar.png')} />
        </BackButton>
      )}
    </>
  );
};