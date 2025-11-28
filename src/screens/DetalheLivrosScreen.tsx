import { RouteProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import AddButton from '../components/AddButton';
import Header from '../components/Header';
import AppStatusBar from '../components/StatusBar';
import { RootStackParamList } from '../navigation/AppNavigator';
import { theme } from '../styles/theme';
import BottomNavigationBar from '../components/BottomNavigationBar';

type DetalheLivrosRouteProp = RouteProp<RootStackParamList, 'DetalheLivros'>;

type Props = {
  route: DetalheLivrosRouteProp;
};

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
`;

const ContentScroll = styled.ScrollView`
  flex: 1;
  padding: ${theme.spacing.lg}px;
`;

const BookImage = styled.Image`
  width: 100%;
  height: 280px;
  border-radius: 12px;
  margin-bottom: ${theme.spacing.lg}px;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${theme.colors.textPrimary};
  margin-bottom: ${theme.spacing.sm}px;
`;
const PriceButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${theme.spacing.sm}px;
`;

const Price = styled.Text`
  background-color: ${theme.colors.primaryBlue};
  color: ${theme.colors.white};
  padding: ${theme.spacing.sm}px ${theme.spacing.lg}px;
  border-radius: ${theme.borderRadius.md}px;
  font-family: ${theme.fonts.family};
  font-size: 20px;
  font-weight: bold;
  margin: 0 ${theme.spacing.md}px 0 0;
  min-height: 44px;
  text-align: center;
`;

const Description = styled.Text`
  font-size: 15px;
  color: ${theme.colors.textSecondary};
  margin-top: ${theme.spacing.md}px;
  line-height: 22px;
`;

const BuyButton = styled.TouchableOpacity`
  background-color: ${theme.colors.primaryBlue};
  padding: ${theme.spacing.sm}px 36px;
  border-radius: ${theme.borderRadius.lg}px;
  align-items: center;
  min-height: 44px;
  justify-content: center;
`;

const BuyButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const DetalheLivrosScreen: React.FC<Props> = ({ route }) => {
  const { book } = route.params;
  const navigation: any = useNavigation();

  return (
    <Container>
      <AppStatusBar />
      <Header />

      <ContentScroll showsVerticalScrollIndicator={false}>
        <BookImage source={book.image} />

        <Title>{book.title}</Title>

        <Description>
          {book.description ??
            "Descrição do livro ainda não cadastrada. Adicione aqui quando quiser."}
        </Description>

        <AddButton
          style={{ alignSelf: 'center', justifyContent: 'center', marginBottom: theme.spacing.md }}
        />

        <PriceButtonContainer>
          <Price>{book.price}</Price>
          <BuyButton>
            <BuyButtonText>Comprar</BuyButtonText>
          </BuyButton>
        </PriceButtonContainer>
      </ContentScroll>

      <BottomNavigationBar
        activeTab="home"
        onHomePress={() => navigation.navigate('Navigation')}
        onFavoritesPress={() => navigation.navigate('Favoritos')}
        onCartPress={() => navigation.navigate('HistoricoCompras')}
        onNotificationsPress={() => console.log('Notifications pressed')}
        onProfilePress={() => navigation.navigate('Profile')}
      />
    </Container>
  );
};

export default DetalheLivrosScreen;
