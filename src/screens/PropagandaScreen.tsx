import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styled from 'styled-components/native';
import { RootStackParamList } from '../navigation/AppNavigator';

type PropagandaScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Propaganda'>;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #333333;
  text-align: center;
  margin-bottom: 20px;
`;

const Description = styled.Text`
  font-size: 16px;
  color: #666666;
  text-align: center;
  margin-bottom: 40px;
  line-height: 24px;
`;

const Button = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 15px 30px;
  border-radius: 8px;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;

const SkipButton = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 10px;
`;

const SkipText = styled.Text`
  color: #666666;
  font-size: 14px;
`;

const PropagandaScreen: React.FC = () => {
  const navigation = useNavigation<PropagandaScreenNavigationProp>();

  const handleContinue = () => {
    navigation.navigate('Inicial');
  };

  const handleSkip = () => {
    navigation.navigate('Inicial');
  };

  return (
    <Container>
      <Title>Bem-vindo ao Troca-Troca!</Title>
      <Description>
        Descubra uma nova forma de trocar itens com outros usuários.
        Encontre o que você precisa e ofereça o que não usa mais.
      </Description>
      
      <Button onPress={handleContinue}>
        <ButtonText>Começar</ButtonText>
      </Button>

      <SkipButton onPress={handleSkip}>
        <SkipText>Pular introdução</SkipText>
      </SkipButton>
    </Container>
  );
};

export default PropagandaScreen;