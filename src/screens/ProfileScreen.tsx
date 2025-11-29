import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { theme } from '../styles/theme';

// Componentes reutilizáveis
import BottomNavigationBar from '../components/BottomNavigationBar';
import Header from '../components/Header';
import AppStatusBar from '../components/StatusBar';

type ProfileScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Profile'>;
};

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

const ContentContainer = styled.View`
  flex: 1;
  position: relative;
  padding-bottom: 106px; /* Espaço para BottomNavigationBar */
`;

const PageTitle = styled.Text`
  position: absolute;
  top: 121px;
  width: 100%;
  color: #201e1e;
  font-size: 24px;
  font-weight: 500;
  font-family: ${theme.fonts.family};
  text-align: center;
`;

const ProfileImageContainer = styled.View`
  position: absolute;
  left: 114px;
  top: 165px;
  width: 140px;
  height: 140px;
  border-radius: 70px;
  background-color: #d9d9d9;
  justify-content: center;
  align-items: center;
`;

const ProfileImagePlaceholder = styled.View`
  position: absolute;
  left: 37px;
  top: 37px;
  width: 49.5px;
  height: 49.5px;
  opacity: 0.5;
`;

const EditIconContainer = styled.TouchableOpacity`
  position: absolute;
  left: 103px;
  top: 3px;
  width: 27px;
  height: 27px;
`;

const UserName = styled.Text`
  position: absolute;
  left: 123px;
  top: 322px;
  color: ${theme.colors.textPrimary};
  font-size: 28px;
  font-weight: 500;
  font-family: ${theme.fonts.family};
  text-transform: capitalize;
  text-align: center;
`;

const PrimaryEmail = styled.Text`
  position: absolute;
  left: 86px;
  top: 359px;
  color: #828282;
  font-size: 16px;
  font-weight: 400;
  font-family: ${theme.fonts.family};
  text-align: center;
`;

const Divider = styled.View`
  position: absolute;
  left: 50px;
  top: 395px;
  width: 268px;
  height: 1px;
  background-color: #000000;
  opacity: 0.4;
`;

const SectionTitle = styled.Text`
  position: absolute;
  left: 50px;
  top: 411px;
  color: black;
  font-size: 16px;
  font-weight: 500;
  font-family: ${theme.fonts.family};
`;

const EditLink = styled.TouchableOpacity`
  position: absolute;
  left: 283px;
  top: 414px;
`;

const EditLinkText = styled.Text`
  color: black;
  font-size: 12px;
  font-weight: 400;
  font-family: ${theme.fonts.family};
`;

const FieldLabel = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: 400;
  font-family: ${theme.fonts.family};
`;

const FieldValue = styled.Text`
  color: #828282;
  font-size: 16px;
  font-weight: 400;
  font-family: ${theme.fonts.family};
`;

const NameLabel = styled(FieldLabel)`
  position: absolute;
  left: 50px;
  top: 455px;
`;

const NameValue = styled(FieldValue)`
  position: absolute;
  left: 50px;
  top: 479px;
`;

const EmailLabel = styled(FieldLabel)`
  position: absolute;
  left: 50px;
  top: 515px;
`;

const EmailValue = styled(FieldValue)`
  position: absolute;
  left: 50px;
  top: 539px;
`;

const HistoryButton = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  top: 591px;
  width: 335px;
  background-color: ${theme.colors.darkBlue};
  border-radius: 50px;
  padding-horizontal: 32px;
  padding-vertical: 16px;
  justify-content: center;
  align-items: center;
`;

const HistoryButtonText = styled.Text`
  color: ${theme.colors.white};
  font-size: 18px;
  font-weight: 500;
  font-family: ${theme.fonts.family};
`;

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const handleEditProfile = () => {
    console.log('Edit profile pressed');
    // Navegar para tela de edição de perfil
  };

  const handleEditPersonalData = () => {
    console.log('Edit personal data pressed');
    // Navegar para tela de edição de dados pessoais
  };

  const handlePurchaseHistory = () => {
    console.log('Purchase history pressed');
    // Navegar para tela de hist�rico de compras
    navigation.navigate('HistoricoCompras');
  };

  return (
    <Container>
      <AppStatusBar />
      
      <ContentContainer>
        <Header 
          navigation={navigation}
          onMenuPress={() => console.log('Menu pressed')}
          onShoppingBagPress={() => console.log('Shopping bag pressed')}
        />

        <PageTitle>Meu perfil</PageTitle>

        <ProfileImageContainer>
          <ProfileImagePlaceholder>
            <Image 
              source={require('../../assets/Telas/8-perfil/icon-img.png')}
              style={{ width: 49.5, height: 49.5 }}
              resizeMode="contain"
            />
          </ProfileImagePlaceholder>
          
          <EditIconContainer onPress={handleEditProfile}>
            <Image 
              source={require('../../assets/Telas/8-perfil/icon-edit.png')}
              style={{ width: 27, height: 27 }}
              resizeMode="contain"
            />
          </EditIconContainer>
        </ProfileImageContainer>

        <UserName>Glaucon</UserName>
        
        <PrimaryEmail>glaucon.k@hotmail.com</PrimaryEmail>

        <Divider />

        <SectionTitle>Dados pessoais</SectionTitle>
        
        <EditLink onPress={handleEditPersonalData}>
          <EditLinkText>Editar</EditLinkText>
        </EditLink>

        <NameLabel>Nome</NameLabel>
        <NameValue>Glaucon Robson de Brito</NameValue>

        <EmailLabel>E-mail</EmailLabel>
        <EmailValue>glaucon.k@gmail.com</EmailValue>

        <HistoryButton onPress={handlePurchaseHistory}>
          <HistoryButtonText>HISTÓRICO DE COMPRAS</HistoryButtonText>
        </HistoryButton>
      </ContentContainer>

      <BottomNavigationBar
        activeTab="home"
        onHomePress={() => navigation.navigate('Navigation')}
        onFavoritesPress={() => console.log('Favorites pressed')}
        onCartPress={() => navigation.navigate('HistoricoCompras')}
        onNotificationsPress={() => console.log('Notifications pressed')}
        onProfilePress={() => navigation.navigate('Profile')}
      />
    </Container>
  );
};

export default ProfileScreen;