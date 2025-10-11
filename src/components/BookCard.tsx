import React from 'react';
import styled from 'styled-components/native';
import { theme } from '../styles/theme';

const CardContainer = styled.TouchableOpacity`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius['2xl']}px;
  padding: ${theme.spacing.md}px;
  margin-bottom: ${theme.spacing.md}px;
  elevation: 3;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  position: relative;
`;

const BookImage = styled.Image`
  width: 100%;
  height: 120px;
  border-radius: ${theme.borderRadius.md}px;
  resize-mode: contain;
`;

const ImageContainer = styled.View`
  margin-bottom: ${theme.spacing.sm}px;
`;

const WeeklyBadge = styled.View`
  background-color: rgba(20, 97, 162, 0.1);
  border-radius: ${theme.borderRadius.sm}px;
  padding: 4px 8px;
  margin-bottom: 4px;
  align-self: flex-start;
`;

const WeeklyBadgeText = styled.Text`
  font-family: ${theme.fonts.family};
  font-size: ${theme.fonts.sizes.xs}px;
  font-weight: ${theme.fonts.weights.normal};
  color: ${theme.colors.primaryBlue};
  text-transform: uppercase;
`;

const BookTitle = styled.Text<{ large?: boolean }>`
  font-family: ${theme.fonts.family};
  font-size: ${props => props.large ? theme.fonts.sizes.lg : theme.fonts.sizes.base}px;
  font-weight: ${theme.fonts.weights.medium};
  color: ${theme.colors.textPrimary};
  margin-bottom: ${theme.spacing.xs}px;
`;

const BookPrice = styled.Text<{ large?: boolean }>`
  font-family: ${theme.fonts.family};
  font-size: ${props => props.large ? theme.fonts.sizes.base : theme.fonts.sizes.sm}px;
  font-weight: ${theme.fonts.weights.medium};
  color: ${theme.colors.textPrimary};
  margin-bottom: ${theme.spacing.sm}px;
`;

const AddButton = styled.TouchableOpacity`
  position: absolute;
  bottom: ${theme.spacing.md}px;
  right: ${theme.spacing.md}px;
  width: 32px;
  height: 32px;
  background-color: ${theme.colors.darkBlue};
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  elevation: 2;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 3px;
`;

const AddButtonText = styled.Text`
  color: ${theme.colors.white};
  font-size: 18px;
  font-weight: bold;
`;

const HorizontalCard = styled.TouchableOpacity`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius['2xl']}px;
  padding: ${theme.spacing.lg}px;
  margin: 0 ${theme.spacing.md}px ${theme.spacing.md}px;
  elevation: 3;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

const HorizontalBookImage = styled.Image`
  width: 80px;
  height: 120px;
  border-radius: ${theme.borderRadius.md}px;
  margin-right: ${theme.spacing.md}px;
  resize-mode: contain;
`;

const HorizontalBookInfo = styled.View`
  flex: 1;
`;

interface Book {
  id: string;
  title: string;
  price: string;
  image: any;
  showWeeklyBadge?: boolean;
  isLarge?: boolean;
}

interface BookCardProps {
  book: Book;
  onPress?: () => void;
  onAddPress?: () => void;
  variant?: 'vertical' | 'horizontal';
}

const BookCard: React.FC<BookCardProps> = ({ 
  book, 
  onPress, 
  onAddPress,
  variant = 'vertical'
}) => {
  if (variant === 'horizontal') {
    return (
      <HorizontalCard onPress={onPress}>
        <ImageContainer>
          <HorizontalBookImage source={book.image} />
        </ImageContainer>
        <HorizontalBookInfo>
          {book.showWeeklyBadge && (
            <WeeklyBadge>
              <WeeklyBadgeText>MAIS LIDOS DA SEMANA</WeeklyBadgeText>
            </WeeklyBadge>
          )}
          <BookTitle large={book.isLarge}>{book.title}</BookTitle>
          <BookPrice large={book.isLarge}>{book.price}</BookPrice>
        </HorizontalBookInfo>
        <AddButton onPress={onAddPress}>
          <AddButtonText>+</AddButtonText>
        </AddButton>
      </HorizontalCard>
    );
  }

  return (
    <CardContainer onPress={onPress}>
      <ImageContainer>
        <BookImage source={book.image} />
      </ImageContainer>
      {book.showWeeklyBadge && (
        <WeeklyBadge>
          <WeeklyBadgeText>MAIS LIDOS DA SEMANA</WeeklyBadgeText>
        </WeeklyBadge>
      )}
      <BookTitle large={book.isLarge}>{book.title}</BookTitle>
      <BookPrice large={book.isLarge}>{book.price}</BookPrice>
      <AddButton onPress={onAddPress}>
        <AddButtonText>+</AddButtonText>
      </AddButton>
    </CardContainer>
  );
};

export default BookCard;