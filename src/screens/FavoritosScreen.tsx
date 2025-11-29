import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import BookCard from '../components/BookCard';
import BottomNavigationBar from '../components/BottomNavigationBar';
import Header from '../components/Header';
import { theme } from '../styles/theme';

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

const Content = styled.View`
  padding: ${theme.spacing.md}px;
`;

const SectionHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: ${theme.spacing.md}px 0;
`;

const SectionTitle = styled.Text`
  font-family: ${theme.fonts.family};
  font-size: ${theme.fonts.sizes.lg}px;
  font-weight: ${theme.fonts.weights.semibold};
  color: ${theme.colors.textPrimary};
`;

const SeeAll = styled.Text`
  color: ${theme.colors.primaryBlue};
  font-family: ${theme.fonts.family};
`;

const FavoritesRow = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

const ItemContainer = styled.View`
  width: 160px;
  margin-right: ${theme.spacing.md}px;
`;

const mockBooks = [
  {
    id: '1',
    title: 'BÍBLIA SAGRADA',
    price: 'R$ 45,00un',
    image: require('../../assets/Telas/7-navegacao/img-biblia.png'),
    showWeeklyBadge: true,
    isLarge: false,
  },
];

const FavoritosScreen: React.FC = () => {
  const navigation: any = useNavigation();

  return (
    <Container>
      <Header navigation={navigation} />

      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <Content>
          <SectionHeader>
            <SectionTitle>Meus Favoritos</SectionTitle>
            <SeeAll>Ver todos</SeeAll>
          </SectionHeader>

          <FavoritesRow>
            {mockBooks.map(book => (
              <ItemContainer key={book.id}>
                <BookCard book={book} onPress={() => navigation.navigate('DetalheLivros', { book })} />
              </ItemContainer>
            ))}
          </FavoritesRow>
        </Content>
      </ScrollView>

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

export default FavoritosScreen;
