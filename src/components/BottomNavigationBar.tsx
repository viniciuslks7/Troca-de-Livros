import React from 'react';
import { TouchableOpacity, ImageBackground, Dimensions, Image } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../styles/theme';

const { width } = Dimensions.get('window');

interface BottomNavigationBarProps {
  activeTab?: string;
  onHomePress?: () => void;
  onFavoritesPress?: () => void;
  onCartPress?: () => void;
  onNotificationsPress?: () => void;
  onProfilePress?: () => void;
}

const Container = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 106px;
  box-shadow: -1.5px 0px 4px rgba(131, 170, 209, 0.12);
  elevation: 5;
`;

const BackgroundImage = styled(ImageBackground)`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  padding-bottom: 10px;
`;

const IconsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding-horizontal: 20px;
`;

const IconButton = styled.TouchableOpacity<{ active?: boolean }>`
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

const CentralCartButton = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  border-radius: 30px;
  background-color: ${theme.colors.darkBlue};
  justify-content: center;
  align-items: center;
  box-shadow: 0px 8px 5px #0F74C9;
  elevation: 10;
  margin-bottom: 20px;
`;

const BottomNavigationBar: React.FC<BottomNavigationBarProps> = ({
  activeTab = 'home',
  onHomePress,
  onFavoritesPress,
  onCartPress,
  onNotificationsPress,
  onProfilePress,
}) => {
  return (
    <Container>
      <BackgroundImage
        source={require('../../assets/Telas/7-navegacao/Navbar.png')}
        resizeMode="stretch"
      >
        <IconsContainer>
          {/* Home */}
          <IconButton 
            active={activeTab === 'home'}
            onPress={() => {
              console.log('Home pressed');
              onHomePress?.();
            }}
          >
            <Image 
              source={require('../../assets/Telas/7-navegacao/icon-home.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: activeTab === 'home' ? theme.colors.darkBlue : theme.colors.textSecondary
              }}
              resizeMode="contain"
            />
          </IconButton>

          {/* Favoritos */}
          <IconButton 
            active={activeTab === 'favorites'}
            onPress={() => {
              console.log('Favorites pressed');
              onFavoritesPress?.();
            }}
          >
            <Image 
              source={require('../../assets/Telas/7-navegacao/icon-heart.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: activeTab === 'favorites' ? theme.colors.darkBlue : theme.colors.textSecondary
              }}
              resizeMode="contain"
            />
          </IconButton>

          {/* Carrinho Central */}
          <CentralCartButton
            onPress={() => {
              console.log('Cart pressed');
              onCartPress?.();
            }}
          >
            <Image 
              source={require('../../assets/Telas/7-navegacao/icon-sacola-venda.png')} 
              style={{
                width: 24,
                height: 24,
                tintColor: theme.colors.white
              }}
              resizeMode="contain"
            />
          </CentralCartButton>

          {/* Notificações */}
          <IconButton 
            active={activeTab === 'notifications'}
            onPress={() => {
              console.log('Notifications pressed');
              onNotificationsPress?.();
            }}
          >
            <Image 
              source={require('../../assets/Telas/7-navegacao/icon-notification.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: activeTab === 'notifications' ? theme.colors.darkBlue : theme.colors.textSecondary
              }}
              resizeMode="contain"
            />
          </IconButton>

          {/* Perfil */}
          <IconButton 
            active={activeTab === 'profile'}
            onPress={() => {
              console.log('Profile pressed');
              onProfilePress?.();
            }}
          >
            <Image 
              source={require('../../assets/Telas/7-navegacao/icon-user.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: activeTab === 'profile' ? theme.colors.darkBlue : theme.colors.textSecondary
              }}
              resizeMode="contain"
            />
          </IconButton>
        </IconsContainer>
      </BackgroundImage>
    </Container>
  );
};

export default BottomNavigationBar;