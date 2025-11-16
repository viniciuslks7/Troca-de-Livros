import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { theme } from '../styles/theme';

// Componentes criados
import BookListSection from '../components/BookListSection';
import BottomNavigationBar from '../components/BottomNavigationBar';
import CategoryFilter from '../components/CategoryFilter';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import AppStatusBar from '../components/StatusBar';

type NavigationScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Navigation'>;
};

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

const ContentContainer = styled.View`
  flex: 1;
`;

const NavigationScreen: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('mais-lidos');
  const [searchText, setSearchText] = useState('');

  // Categorias para o filtro
  const categories = [
    { id: 'mais-lidos', name: 'Mais lidos' },
    { id: 'terror', name: 'Terror' },
    { id: 'romance', name: 'Romance' },
  ];

  // Dados dos livros
  const maisLindosBooks = [
    {
      id: '1',
      title: 'O HOBBIT',
      price: 'R$ 8,00un',
      image: require('../../assets/Telas/7-navegacao/img-hobbit.png'),
      showWeeklyBadge: true,
    },
    {
      id: '2',
      title: '1984',
      price: 'R$ 17,00un',
      image: require('../../assets/Telas/7-navegacao/img-george.png'),
      showWeeklyBadge: true,
    },
  ];

  const bibliaBook = [
    {
      id: '3',
      title: 'BIBLIA SAGRADA',
      price: 'R$ 45,00un',
      image: require('../../assets/Telas/7-navegacao/img-biblia.png'),
      showWeeklyBadge: true,
      isLarge: true,
    },
  ];

  const handleBookPress = (book: any) => {
  navigation.navigate('DetalheLivros', { book });
};

  const handleAddPress = (book: any) => {
    console.log('Add to cart:', book.title);
  };

  return (
    <Container>
      <AppStatusBar />
      
      <Header 
        onMenuPress={() => console.log('Menu pressed')}
        onShoppingBagPress={() => console.log('Shopping bag pressed')}
      />
      
      <SearchBar 
        value={searchText}
        onChangeText={setSearchText}
        onFocus={() => console.log('Search focused')}
      />
      
      <CategoryFilter 
        categories={categories}
        activeCategory={selectedCategory}
        onCategoryPress={setSelectedCategory}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentContainer>
          <BookListSection
            title="Mais lidos"
            books={maisLindosBooks}
            onViewAllPress={() => console.log('Ver todos - Mais lidos')}
            onBookPress={handleBookPress}
            onAddPress={handleAddPress}
          />

          <BookListSection
            title="Mais escolhido"
            books={bibliaBook}
            variant="horizontal"
            onViewAllPress={() => console.log('Ver todos - Mais escolhido')}
            onBookPress={handleBookPress}
            onAddPress={handleAddPress}
          />
        </ContentContainer>
      </ScrollView>

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

export default NavigationScreen;