import React, { useRef, useState } from 'react';
import { Animated, Dimensions, Modal, Pressable } from 'react-native';
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

// ---------------- Sidebar styles ----------------
const windowWidth = Dimensions.get('window').width;
const SIDEBAR_WIDTH = Math.min(320, Math.round(windowWidth * 0.78));

const SidebarContainer = styled(Animated.View)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${SIDEBAR_WIDTH}px;
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.lg}px ${theme.spacing.md}px;
`;

const Backdrop = styled(Animated.View)`
  position: absolute;
  left: ${SIDEBAR_WIDTH}px;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.3);
`;

const AvatarCircle = styled.View`
  width: 84px;
  height: 84px;
  border-radius: 42px;
  background-color: ${theme.colors.lightGray};
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const AvatarPlaceholderText = styled.Text`
  color: ${theme.colors.textSecondary};
  font-size: 28px;
`;

const Greeting = styled.Text`
  font-family: ${theme.fonts.family};
  font-size: 30px;
  font-weight: ${theme.fonts.weights.semibold};
  color: ${theme.colors.textPrimary};
  text-align: center;
  margin-top: ${theme.spacing.sm}px;
`;

const GreetingName = styled.Text`
  font-family: ${theme.fonts.family};
  font-size: 40px;
  font-weight: ${theme.fonts.weights.semibold};
  color: ${theme.colors.primaryBlue};
  text-align: center;
`;

const PromoButton = styled.TouchableOpacity`
  background-color: ${theme.colors.primaryBlue};
  padding: ${theme.spacing.sm}px ${theme.spacing.md}px;
  border-radius: 12px;
  margin: ${theme.spacing.md}px 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const PromoText = styled.Text`
  color: ${theme.colors.white};
  font-weight: ${theme.fonts.weights.semibold};
`;

const SidebarMenuItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: ${theme.spacing.sm}px 0;
`;

const SidebarMenuIcon = styled.Image`
  width: 28px;
  height: 28px;
  border-radius: 14px;
  margin-right: ${theme.spacing.md}px;
`;

const SidebarMenuText = styled.Text`
  color: ${theme.colors.textPrimary};
  font-size: ${theme.fonts.sizes.md}px;
`;

interface HeaderProps {
  onMenuPress?: () => void;
  onShoppingBagPress?: () => void;
  navigation?: any;
}

const Header: React.FC<HeaderProps> = ({ onMenuPress, onShoppingBagPress, navigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const slide = useRef(new Animated.Value(-SIDEBAR_WIDTH)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;

  const openSidebar = () => {
    setIsOpen(true);
    Animated.parallel([
      Animated.timing(slide, { toValue: 0, duration: 300, useNativeDriver: true }),
      Animated.timing(backdropOpacity, { toValue: 1, duration: 300, useNativeDriver: true }),
    ]).start();
  };

  const closeSidebar = () => {
    Animated.parallel([
      Animated.timing(slide, { toValue: -SIDEBAR_WIDTH, duration: 250, useNativeDriver: true }),
      Animated.timing(backdropOpacity, { toValue: 0, duration: 250, useNativeDriver: true }),
    ]).start(() => setIsOpen(false));
  };

  return (
    <>
      <HeaderContainer>
        <LeftSection>
          <MenuIcon onPress={() => { onMenuPress?.(); openSidebar(); }}>
            <MenuDots />
            <MenuDots />
            <MenuDots />
          </MenuIcon>
          <LocationContainer>
            <CountryText>Brasil</CountryText>
            <CityText>Jales, São Paulo</CityText>
          </LocationContainer>
        </LeftSection>
        
        <ShoppingBagContainer onPress={() => {
          onShoppingBagPress?.();
          navigation?.navigate('Venda');
        }}>
          <ShoppingBagIcon source={require('../../assets/Telas/7-navegacao/icon-sacola.png')} />
          <NotificationBadge />
        </ShoppingBagContainer>
      </HeaderContainer>

      <Modal transparent visible={isOpen} animationType="none">
        <Animated.View style={{ flex: 1 }}>
          <Backdrop style={{ opacity: backdropOpacity }}>
            <Pressable style={{ flex: 1 }} onPress={closeSidebar} />
          </Backdrop>

          <SidebarContainer style={{ transform: [{ translateX: slide }], zIndex: 1000, elevation: 20 }}>
            <AvatarCircle>
              <AvatarPlaceholderText>?</AvatarPlaceholderText>
            </AvatarCircle>

            <Greeting>Olá</Greeting>
            <GreetingName>Glaucon</GreetingName>

            <PromoButton activeOpacity={0.8} onPress={() => { /* placeholder */ }}>
              <PromoText>Indique um livro para um amigo!!!</PromoText>
            </PromoButton>

            <SidebarMenuItem onPress={() => { /* navegar */ }}>
              <SidebarMenuIcon source={require('../../assets/Telas/7-navegacao/icon-local.png')} />
              <SidebarMenuText>Endereço de Entrega</SidebarMenuText>
            </SidebarMenuItem>

            <SidebarMenuItem onPress={() => { /* navegar */ }}>
              <SidebarMenuIcon source={require('../../assets/Telas/7-navegacao/icon-sacola-venda.png')} />
              <SidebarMenuText>Forma de Pagamento</SidebarMenuText>
            </SidebarMenuItem>

            <SidebarMenuItem onPress={() => { /* navegar */ }}>
              <SidebarMenuIcon source={require('../../assets/Telas/8-perfil/icon-edit.png')} />
              <SidebarMenuText>Configurações</SidebarMenuText>
            </SidebarMenuItem>
          </SidebarContainer>
        </Animated.View>
      </Modal>
    </>
  );
};

export default Header;