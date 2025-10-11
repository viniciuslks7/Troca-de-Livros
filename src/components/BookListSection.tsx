import React from 'react';
import styled from 'styled-components/native';
import { theme } from '../styles/theme';
import BookCard from './BookCard';

const SectionContainer = styled.View`
  margin-bottom: ${theme.spacing.lg}px;
`;

const SectionHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${theme.spacing.md}px;
  margin-bottom: ${theme.spacing.md}px;
`;

const SectionTitle = styled.Text`
  font-family: ${theme.fonts.family};
  font-size: ${theme.fonts.sizes.base}px;
  font-weight: ${theme.fonts.weights.medium};
  color: ${theme.colors.textPrimary};
`;

const ViewAllButton = styled.TouchableOpacity``;

const ViewAllText = styled.Text`
  font-family: ${theme.fonts.family};
  font-size: 13px;
  font-weight: ${theme.fonts.weights.normal};
  color: ${theme.colors.primaryBlue};
`;

const BooksContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 ${theme.spacing.md}px;
`;

const BookWrapper = styled.View`
  width: 48%;
`;

interface Book {
  id: string;
  title: string;
  price: string;
  image: any;
  showWeeklyBadge?: boolean;
  isLarge?: boolean;
}

interface BookListSectionProps {
  title: string;
  books: Book[];
  showViewAll?: boolean;
  onViewAllPress?: () => void;
  onBookPress?: (book: Book) => void;
  onAddPress?: (book: Book) => void;
  variant?: 'grid' | 'horizontal';
}

const BookListSection: React.FC<BookListSectionProps> = ({
  title,
  books,
  showViewAll = true,
  onViewAllPress,
  onBookPress,
  onAddPress,
  variant = 'grid'
}) => {
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        {showViewAll && (
          <ViewAllButton onPress={onViewAllPress}>
            <ViewAllText>Ver todos</ViewAllText>
          </ViewAllButton>
        )}
      </SectionHeader>
      
      {variant === 'grid' ? (
        <BooksContainer>
          {books.map((book) => (
            <BookWrapper key={book.id}>
              <BookCard
                book={book}
                onPress={() => onBookPress?.(book)}
                onAddPress={() => onAddPress?.(book)}
              />
            </BookWrapper>
          ))}
        </BooksContainer>
      ) : (
        <>
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              variant="horizontal"
              onPress={() => onBookPress?.(book)}
              onAddPress={() => onAddPress?.(book)}
            />
          ))}
        </>
      )}
    </SectionContainer>
  );
};

export default BookListSection;