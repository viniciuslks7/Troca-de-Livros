import React from 'react';
import styled from 'styled-components/native';
import { theme } from '../styles/theme';

const NavigationContainer = styled.View`
  background-color: ${theme.colors.white};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: ${theme.spacing.md}px 0;
  border-top-width: 1px;
  border-top-color: #e5e5e5;
  elevation: 8;
  shadow-color: #000;
  shadow-offset: 0px -2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
`;

const NavItem = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const NavIcon = styled.Image<{ active?: boolean }>`
  width: 24px;
  height: 24px;
  tint-color: ${props => props.active ? theme.colors.darkBlue : theme.colors.textSecondary};
`;

const CentralNavItem = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background-color: ${theme.colors.darkBlue};
  border-radius: 28px;
  elevation: 6;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 6px;
`;

const CentralNavIcon = styled.Image`
  width: 28px;
  height: 28px;
  tint-color: ${theme.colors.white};
`;

interface NavigationItem {
  id: string;
  icon: any;
  onPress: () => void;
}

interface NavigationBarProps {
  items: NavigationItem[];
  activeItem?: string;
  centralItem?: NavigationItem;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ 
  items, 
  activeItem,
  centralItem
}) => {
  const midIndex = Math.floor(items.length / 2);
  
  return (
    <NavigationContainer>
      {items.slice(0, midIndex).map((item) => (
        <NavItem key={item.id} onPress={item.onPress}>
          <NavIcon 
            source={item.icon} 
            active={activeItem === item.id}
          />
        </NavItem>
      ))}
      
      {centralItem && (
        <CentralNavItem onPress={centralItem.onPress}>
          <CentralNavIcon source={centralItem.icon} />
        </CentralNavItem>
      )}
      
      {items.slice(midIndex).map((item) => (
        <NavItem key={item.id} onPress={item.onPress}>
          <NavIcon 
            source={item.icon} 
            active={activeItem === item.id}
          />
        </NavItem>
      ))}
    </NavigationContainer>
  );
};

export default NavigationBar;