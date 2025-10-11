import React from 'react';
import styled from 'styled-components/native';
import { theme } from '../styles/theme';

const FilterContainer = styled.View`
  flex-direction: row;
  gap: ${theme.spacing.sm}px;
  padding: 0 ${theme.spacing.md}px;
  margin-bottom: ${theme.spacing.lg}px;
`;

const FilterButton = styled.TouchableOpacity<{ active?: boolean }>`
  background-color: ${props => props.active ? theme.colors.darkBlue : theme.colors.lightGray};
  border-radius: ${theme.borderRadius['3xl']}px;
  padding: ${theme.spacing.sm}px ${theme.spacing.md}px;
`;

const FilterButtonText = styled.Text<{ active?: boolean }>`
  font-family: ${theme.fonts.family};
  font-size: ${theme.fonts.sizes.sm}px;
  font-weight: ${theme.fonts.weights.medium};
  color: ${props => props.active ? theme.colors.white : theme.colors.inactiveText};
`;

interface Category {
  id: string;
  name: string;
}

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryPress: (categoryId: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  activeCategory, 
  onCategoryPress 
}) => {
  return (
    <FilterContainer>
      {categories.map((category) => (
        <FilterButton
          key={category.id}
          active={activeCategory === category.id}
          onPress={() => onCategoryPress(category.id)}
        >
          <FilterButtonText active={activeCategory === category.id}>
            {category.name}
          </FilterButtonText>
        </FilterButton>
      ))}
    </FilterContainer>
  );
};

export default CategoryFilter;