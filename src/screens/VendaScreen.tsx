import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useMemo, useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import BookCard from '../components/BookCard';
import BottomNavigationBar from '../components/BottomNavigationBar';
import CardOptionList from '../components/CardOptionList';
import Header from '../components/Header';
import { RootStackParamList } from '../navigation/AppNavigator';
import { theme } from '../styles/theme';

type VendaScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Venda'>;

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

const Content = styled.View`
  padding: ${theme.spacing.md}px;
  padding-bottom: 140px; /* espa‡o para a bottom bar */
`;

const SectionTitle = styled.Text`
  font-size: ${theme.fonts.sizes.md}px;
  color: ${theme.colors.textPrimary};
  font-weight: ${theme.fonts.weights.semibold};
  margin: ${theme.spacing.md}px 0 ${theme.spacing.sm}px;
`;

const SummaryRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: ${theme.spacing.sm}px;
`;

const SummaryText = styled.Text`
  color: ${theme.colors.textSecondary};
`;

const SummaryValue = styled.Text`
  color: ${theme.colors.textPrimary};
  font-weight: ${theme.fonts.weights.semibold};
`;

const PaySection = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 106px; /* fica acima da BottomNavigationBar (106px) */
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.md}px;
  border-top-width: 1px;
  border-top-color: ${theme.colors.lightGray};
  z-index: 50;
  elevation: 12;
`;

const PayRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.md}px;
`;

const PayButton = styled.TouchableOpacity`
  background-color: ${theme.colors.primaryBlue};
  padding: ${theme.spacing.md}px ${theme.spacing.lg}px;
  border-radius: 12px;
`;

const PayButtonText = styled.Text`
  color: ${theme.colors.white};
  font-weight: ${theme.fonts.weights.semibold};
`;

type CartItem = {
  id: string;
  title: string;
  price: number;
  qty: number;
  image: any;
};

const VendaScreen: React.FC = () => {
  const navigation = useNavigation<VendaScreenNavigationProp>();
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: '1',
      title: '1984 - George Orwell',
      price: 17.0,
      qty: 1,
      image: require('../../assets/Telas/7-navegacao/img-george.png'),
    },
    {
      id: '2',
      title: 'Tolkien - O Hobbit',
      price: 8.0,
      qty: 1,
      image: require('../../assets/Telas/7-navegacao/img-hobbit.png'),
    },
  ]);

  const [deliveryFee] = useState<number>(0);

  const [cards] = useState(() => [
    { id: 'c1', logo: require('../../assets/Telas/9-historico-compras/mastercard.png'), title: 'MasterCard', number: '5105 **** 0505' },
    { id: 'c2', logo: require('../../assets/Telas/9-historico-compras/visa.png'), title: 'Visa', number: '3566 **** 0505' },
  ]);

  const subtotal = useMemo(() => cart.reduce((s, it) => s + it.price * it.qty, 0), [cart]);

  const total = useMemo(() => subtotal + deliveryFee, [subtotal, deliveryFee]);

  const increment = (id: string) => {
    setCart((c) => c.map((it) => (it.id === id ? { ...it, qty: it.qty + 1 } : it)));
  };

  const decrement = (id: string) => {
    setCart((c) =>
      c
        .map((it) => (it.id === id ? { ...it, qty: Math.max(0, it.qty - 1) } : it))
        .filter((it) => it.qty > 0),
    );
  };

  const handlePay = () => {
    if (cart.length === 0) {
      Alert.alert('Carrinho vazio', 'Adicione ao menos um item antes de pagar.');
      return;
    }

    Alert.alert('Pagamento', `Total a pagar: R$ ${total.toFixed(2)}`);
  };

  return (
    <Container>
      <Header navigation={navigation} />

      <ScrollView>
        <Content>
          <SectionTitle>Agendar Compra</SectionTitle>

          {cart.map((item) => (
            <BookCard
              key={item.id}
              book={{ id: item.id, title: item.title, price: `R$ ${item.price.toFixed(2)}`, image: item.image, isLarge: false }}
              variant="horizontal"
              onPress={() => {}}
              onAddPress={() => increment(item.id)}
            />
          ))}

          <SectionTitle>Resumo</SectionTitle>
          <SummaryRow>
            <SummaryText>Subtotal</SummaryText>
            <SummaryValue>R$ {subtotal.toFixed(2)}</SummaryValue>
          </SummaryRow>
          <SummaryRow>
            <SummaryText>Taxa de entrega</SummaryText>
            <SummaryValue>R$ {deliveryFee.toFixed(2)}</SummaryValue>
          </SummaryRow>

          <SectionTitle>M‚todo de pagamento</SectionTitle>
          <CardOptionList cards={cards} onAddPress={() => Alert.alert('Adicionar cartÆo')} />
        </Content>
      </ScrollView>

      <PaySection>
        <PayRow>
          <SummaryText>Valor total</SummaryText>
          <SummaryValue>R$ {total.toFixed(2)}</SummaryValue>
        </PayRow>
        <PayButton activeOpacity={0.8} onPress={handlePay}>
          <PayButtonText>PAGAR AGORA</PayButtonText>
        </PayButton>
      </PaySection>

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

export default VendaScreen;
