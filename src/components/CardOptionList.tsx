import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { theme } from '../styles/theme';

type CardOption = {
  id: string;
  logo: any;
  title: string;
  number: string;
};

type CardOptionListProps = {
  cards: CardOption[];
  onSelect?: (id: string) => void;
  onAddPress?: () => void;
};

const Container = styled.View`
  margin: ${theme.spacing.lg}px;
  margin-top: 0px;
`;

const CardContainer = styled.TouchableOpacity<{ selected: boolean }>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ selected }) =>
    selected ? theme.colors.primaryBlue : theme.colors.white};
  border-radius: 20px;
  padding: ${theme.spacing.md}px;
  margin-bottom: ${theme.spacing.sm }px;
  elevation: 3;
`;

const LeftContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Logo = styled.Image`
  width: 50px;
  height: 40px;
  resize-mode: contain;
  margin-right: ${theme.spacing.md}px;
`;

const TextContainer = styled.View``;

const Title = styled.Text<{ selected: boolean }>`
  color: ${({ selected }) =>
    selected ? theme.colors.white : theme.colors.textPrimary};
  font-size: 16px;
  font-weight: 600;
`;

const Number = styled.Text<{ selected: boolean }>`
  color: ${({ selected }) =>
    selected ? theme.colors.white : theme.colors.textSecondary};
  font-size: 14px;
  margin-top: 2px;
`;

const CircleButton = styled.TouchableOpacity`
  width: 26px;
  height: 26px;
  border-radius: 13px;
  border-width: 2px;
  border-color: ${theme.colors.white};
  align-items: center;
  justify-content: center;
`;

const CircleOuter = styled.View<{ selected: boolean }>`
  width: 26px;
  height: 26px;
  border-radius: 13px;
  border-width: 2px;
  border-color: ${({ selected }) =>
    selected ? theme.colors.white : theme.colors.background};
  align-items: center;
  justify-content: center;
`;

const CircleInner = styled.View<{ selected: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${({ selected }) =>
    selected ? theme.colors.white : 'transparent'};
`;

const AddButton = styled.TouchableOpacity`
  width: 55px;
  height: 55px;
  background-color: ${theme.colors.primaryBlue};
  border-radius: 28px;
  align-self: center;
  align-items: center;
  justify-content: center;
  elevation: 4;
  margin-top: ${theme.spacing.md}px;
`;

const TextTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.colors.darkBlue};
  margin-bottom: ${theme.spacing.md}px;
`;

const CardOptionList: React.FC<CardOptionListProps> = ({
  cards,
  onSelect,
  onAddPress,
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedId(id);
    onSelect?.(id);
  };

  return (
    <Container>
      <TextTitle>Cartões Cadastrados</TextTitle>
      {cards.map((card) => (
        <CardContainer
          key={card.id}
          selected={selectedId === card.id}
          activeOpacity={0.9}
          onPress={() => handleSelect(card.id)}
        >
          <LeftContent>
            <Logo source={card.logo} />
            <TextContainer>
              <Title selected={selectedId === card.id}>{card.title}</Title>
              <Number selected={selectedId === card.id}>{card.number}</Number>
            </TextContainer>
          </LeftContent>

          <CircleOuter selected={selectedId === card.id}>
            <CircleInner selected={selectedId === card.id} />
          </CircleOuter>
        </CardContainer>
      ))}

      <AddButton onPress={onAddPress}>
        <Ionicons name="add" size={30} color={theme.colors.white} />
      </AddButton>
    </Container>
  );
};

export default CardOptionList;
