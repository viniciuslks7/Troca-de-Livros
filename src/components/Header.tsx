import React from 'react';
import styled from 'styled-components/native';
import { theme } from '../styles/theme';

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.md}px ${theme.spacing.md}px;
  background-color: ${theme.colors.white};
`;

const LeftSection = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${theme.spacing.sm}px;
`;

const MenuIcon = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

const MenuDots = styled.View`
  width: 4px;
  height: 4px;
  background-color: ${theme.colors.textPrimary};
  border-radius: 2px;
  margin-bottom: 2px;
`;

const LocationContainer = styled.View`
  flex-direction: column;
`;

const CountryText = styled.Text`
  font-family: ${theme.fonts.family};
  font-size: ${theme.fonts.sizes.xs}px;
  font-weight: ${theme.fonts.weights.normal};
  color: ${theme.colors.textSecondary};
`;

const CityText = styled.Text`
  font-family: ${theme.fonts.family};
  font-size: ${theme.fonts.sizes.sm}px;
  font-weight: ${theme.fonts.weights.medium};
  color: ${theme.colors.textPrimary};
`;

const ShoppingBagContainer = styled.TouchableOpacity`
  position: relative;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

const ShoppingBagIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

const NotificationBadge = styled.View`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 8px;
  height: 8px;
  background-color: ${theme.colors.darkBlue};
  border-radius: 4px;
`;

interface HeaderProps {
  onMenuPress?: () => void;
  onShoppingBagPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuPress, onShoppingBagPress }) => {
  return (
    <HeaderContainer>
      <LeftSection>
        <MenuIcon onPress={onMenuPress}>
          <MenuDots />
          <MenuDots />
          <MenuDots />
        </MenuIcon>
        <LocationContainer>
          <CountryText>Brasil</CountryText>
          <CityText>Jales, São Paulo</CityText>
        </LocationContainer>
      </LeftSection>
      
      <ShoppingBagContainer onPress={onShoppingBagPress}>
        <ShoppingBagIcon source={require('../../assets/Telas/7-navegacao/icon-sacola.png')} />
        <NotificationBadge />
      </ShoppingBagContainer>
    </HeaderContainer>
  );
};

export default Header;