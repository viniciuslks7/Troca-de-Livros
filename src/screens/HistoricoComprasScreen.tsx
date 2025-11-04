import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import styled from 'styled-components/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { theme } from '../styles/theme';

import BottomNavigationBar from '../components/BottomNavigationBar';
import CardOptionList from '../components/CardOptionList';
import Header from '../components/Header';
import HistoricoCompraCard from '../components/HistoricoCompraCard';
import HistoricoSearchBar from '../components/HistoricoSearchBar';
import AppStatusBar from '../components/StatusBar';

type HistoricoComprasScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'HistoricoCompras'>;
};

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

const HistoricooComprasScreen: React.FC<HistoricoComprasScreenProps> = ({ navigation }) => {
    return (
        <Container>
            <AppStatusBar />
            <Header />


            <HistoricoSearchBar
              onFilterPress={() => console.log('Filter pressed')}
            />

         

            {/* Card de exemplo, pode ser renderizado em lista */}
            <HistoricoCompraCard
              bookImage={require('../../assets/Telas/7-navegacao/img-hobbit.png')}
              bookTitle="O Hobbit"
              bookAuthor="J.R.R. Tolkien"
              rating={4.9}
              isFavorite={true}
              onFavoritePress={() => console.log('Favorito')}
              onCardPress={() => console.log('Card clicado')}
              compraDate="22/3"
              valor="R$8,00"
              avaliacao={5}
              onAvaliacaoChange={v => console.log('Nova avaliação:', v)}
            />

            <CardOptionList
              cards={[
                {
                  id: '1',
                  logo: require('../../assets/Telas/9-historico-compras/mastercard.png'),
                  title: 'Cartão de crédito',
                  number: '5105 **** **** 4575',
                },
                {
                  id: '2',
                  logo: require('../../assets/Telas/9-historico-compras/visa.png'),
                  title: 'Cartão de débito',
                  number: '3566 **** **** 0505',
                },
              ]}
              onSelect={(id) => console.log('Selecionado:', id)}
              onAddPress={() => console.log('Adicionar novo cartão')}
            />


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

export default HistoricooComprasScreen; 
