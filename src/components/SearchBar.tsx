import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../styles/theme';

const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius['4xl']}px;
  padding: ${theme.spacing.md}px ${theme.spacing.lg}px;
  margin: ${theme.spacing.md}px;
  elevation: 2;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
`;

const SearchInput = styled.TextInput`
  flex: 1;
  font-family: ${theme.fonts.family};
  font-size: ${theme.fonts.sizes.sm}px;
  font-weight: ${theme.fonts.weights.normal};
  color: ${theme.colors.textPrimary};
`;

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onFocus?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = "Qual será sua leitura hoje?",
  value,
  onChangeText,
  onFocus
}) => {
  return (
    <SearchContainer>
      <Image 
        source={require('../../assets/Telas/7-navegacao/icon-lupa.png')} 
        style={{
          width: 20,
          height: 20,
          marginRight: theme.spacing.md,
          tintColor: theme.colors.textSecondary
        }}
        resizeMode="contain"
      />
      <SearchInput
        placeholder={placeholder}
        placeholderTextColor={theme.colors.textSecondary}
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
      />
    </SearchContainer>
  );
};

export default SearchBar;