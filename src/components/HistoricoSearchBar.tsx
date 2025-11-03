import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../styles/theme';

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin: ${theme.spacing.md}px;
`;

const SearchContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius['4xl']}px;
  padding: ${theme.spacing.md}px ${theme.spacing.lg}px;
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

interface HistoricoSearchBarProps {
  value?: string;
  onChangeText?: (text: string) => void;
  onFilterPress?: () => void;
}

const HistoricoSearchBar: React.FC<HistoricoSearchBarProps> = ({
  value,
  onChangeText,
  onFilterPress,
}) => {
  return (
    <Row>
      <SearchContainer>
        <Image
          source={require('../../assets/Telas/7-navegacao/icon-lupa.png')}
          style={{ width: 20, height: 20, marginRight: theme.spacing.md, tintColor: theme.colors.textSecondary }}
          resizeMode="contain"
        />
        <SearchInput
          placeholder="Pesquisar"
          placeholderTextColor={theme.colors.textSecondary}
          value={value}
          onChangeText={onChangeText}
        />
      </SearchContainer>
      <TouchableOpacity onPress={onFilterPress} style={{ marginLeft: theme.spacing.md }}>
        <Image
          source={require('../../assets/Telas/7-navegacao/icon-bolinhas.png')}
          style={{ width: 24, height: 24, tintColor: theme.colors.darkBlue }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </Row>
  );
};

export default HistoricoSearchBar;
