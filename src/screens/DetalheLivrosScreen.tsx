import { RouteProp } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import AddButton from '../components/AddButton';
import Header from '../components/Header';
import AppStatusBar from '../components/StatusBar';
import { RootStackParamList } from '../navigation/AppNavigator';
import { theme } from '../styles/theme';
type DetalheLivrosRouteProp = RouteProp<RootStackParamList, 'DetalheLivros'>;

type Props = {
  route: DetalheLivrosRouteProp;
};

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.lg}px;
`;

const BookImage = styled.Image`
  width: 100%;
  height: 280px;
  resize-mode: contain;
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
  justify-content: space-between; 
  margin-top: ${theme.spacing.lg}px;
  gap: ${theme.spacing.md}px; 
`;

const Price = styled.Text`
  background-color: ${theme.colors.primaryBlue};
  color: ${theme.colors.white};
  padding: ${theme.spacing.md}px;
  border-radius: ${theme.borderRadius.md}px;
  font-family: ${theme.fonts.family};
  font-size: 20px;
  font-weight: bold;
  margin-top: ${theme.spacing.md}x;
`;

const Description = styled.Text`
  font-size: 15px;
  color: ${theme.colors.textSecondary};
  margin-top: ${theme.spacing.md}px;
  line-height: 22px;
`;

const BuyButton = styled.TouchableOpacity`
  background-color: ${theme.colors.primaryBlue};
  padding: ${theme.spacing.md}px 40px;
  border-radius: ${theme.borderRadius.lg}px;
  align-items: center;
  margin-left: ${theme.spacing.md}px; 
`;

const BuyButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const DetalheLivrosScreen: React.FC<Props> = ({ route }) => {
  const { book } = route.params;

  return (
    <Container>
      <AppStatusBar />

      <Header />
      
      <BookImage source={book.image} />

      <Title>{book.title}</Title>

      <Description>
        {book.description ??
          "Descrição do livro ainda não cadastrada. Adicione aqui quando quiser."}
      </Description>

      <AddButton 
        style={
          {
            'top': 16,
            'alignSelf': 'center',
            'justifyContent': 'center'
          }
        }
          
      />
      <PriceButtonContainer>
        <Price>{book.price}</Price>
        <BuyButton>
          <BuyButtonText>Comprar</BuyButtonText>
        </BuyButton>
      </PriceButtonContainer>

     

      
    </Container>
  );
};

export default DetalheLivrosScreen;
