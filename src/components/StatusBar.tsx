import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { theme } from '../styles/theme';

const StatusBarContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${theme.spacing.md}px;
  padding-top: 10px;
  background-color: ${theme.colors.white};
`;

const TimeText = styled.Text`
  font-family: ${theme.fonts.family};
  font-size: ${theme.fonts.sizes.md}px;
  font-weight: ${theme.fonts.weights.semibold};
  color: ${theme.colors.textPrimary};
`;

const StatusIconsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const BatteryContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 3px;
`;

const SignalBars = styled.View`
  flex-direction: row;
  align-items: flex-end;
  gap: 1px;
`;

const SignalBar = styled.View<{ height: number }>`
  width: 3px;
  height: ${props => props.height}px;
  background-color: ${theme.colors.textPrimary};
  border-radius: 1px;
`;

const BatteryIcon = styled.View`
  width: 20px;
  height: 10px;
  border: 1px solid ${theme.colors.textPrimary};
  border-radius: 2px;
  position: relative;
`;

const BatteryFill = styled.View`
  width: 60%;
  height: 100%;
  background-color: ${theme.colors.textPrimary};
  border-radius: 1px;
`;

const BatteryTip = styled.View`
  position: absolute;
  right: -3px;
  top: 2px;
  width: 2px;
  height: 4px;
  background-color: ${theme.colors.textPrimary};
  border-radius: 1px;
`;

const AppStatusBar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('pt-BR', { 
        hour: '2-digit', 
        minute: '2-digit' 
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StatusBarContainer>
      <TimeText>{currentTime}</TimeText>
      <StatusIconsContainer>
        <SignalBars>
          <SignalBar height={4} />
          <SignalBar height={6} />
          <SignalBar height={8} />
          <SignalBar height={10} />
        </SignalBars>
        <BatteryContainer>
          <BatteryIcon>
            <BatteryFill />
            <BatteryTip />
          </BatteryIcon>
        </BatteryContainer>
      </StatusIconsContainer>
    </StatusBarContainer>
  );
};

export default AppStatusBar;