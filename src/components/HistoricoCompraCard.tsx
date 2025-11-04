import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../styles/theme';

const CardRow = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: ${theme.spacing.lg}px;
`;

const CardContainer = styled.View`
  background-color: ${theme.colors.white};
  border-radius: 16px;
  padding: ${theme.spacing.md}px;
  flex-direction: column;
  align-items: center;
  width: 120px;
  margin-left: 16px;
  elevation: 2;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.08;
  shadow-radius: 4px;
`;

const BookImage = styled.Image`
  width: 60px;
  height: 80px;
  border-radius: 8px;
  margin-bottom: 6px;
`;

const BookTitle = styled.Text`
  font-size: 13px;
  font-weight: 600;
  color: ${theme.colors.textPrimary};
`;

const BookAuthor = styled.Text`
  font-size: 11px;
  color: #888;
  margin-bottom: 2px;
`;

const RatingAndFavoriteRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between; 
  width: 100%; 
  padding-horizontal: 4px; 
  margin-top: 4px;
`;

const RatingRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

const RatingText = styled.Text`
  font-size: 12px;
  color: #444;
  margin-left: 2px;
`;

const HeartButton = styled.TouchableOpacity`
  
`;

const CardRight = styled.View`
  flex: 1;
  margin-left: 16px;
  justify-content: flex-start;
`;

const UltimaCompra = styled.Text`
  color: ${theme.colors.darkBlue};
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const CompraRealizada = styled.Text`
  color: #444;
  font-size: 17px;
  font-weight: 230;

  margin-bottom: 5px;
`;

const ValorText = styled.Text`
  color: #444;
  font-size: 15px;
  margin-bottom: 5px;
`;

const AvaliacaoLabel = styled.Text`
  font-weight: bold;
  color: ${theme.colors.textPrimary};
  font-size: 15px;
  margin-bottom: 5px;
`;

const AvaliacaoRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

interface HistoricoCompraCardProps {
  bookImage: any;
  bookTitle: string;
  bookAuthor: string;
  rating: number;
  isFavorite: boolean;
  onFavoritePress?: () => void;
  onCardPress?: () => void;
  compraDate: string;
  valor: string;
  avaliacao: number;
  onAvaliacaoChange?: (value: number) => void;
}

const HistoricoCompraCard: React.FC<HistoricoCompraCardProps> = ({
  bookImage,
  bookTitle,
  bookAuthor,
  rating,
  isFavorite,
  onFavoritePress,
  onCardPress,
  compraDate,
  valor,
  avaliacao,
  onAvaliacaoChange,
}) => {
  const [avaliacaoLocal, setAvaliacaoLocal] = useState(avaliacao);

  const handleStarPress = (idx: number) => {
    setAvaliacaoLocal(idx);
    onAvaliacaoChange?.(idx);
  };

  return (
    <CardRow>
      <TouchableOpacity activeOpacity={0.8} onPress={onCardPress}>
        <CardContainer>
          <BookImage source={bookImage} />
          <BookTitle>{bookTitle}</BookTitle>
          <BookAuthor>{bookAuthor}</BookAuthor>
          
          <RatingAndFavoriteRow>
            <RatingRow>
              <Image
                source={require('../../assets/Telas/7-navegacao/icon-star.png')}
                style={{ width: 14, height: 14, tintColor: '#FFD700' }}
                resizeMode="contain"
              />
              <RatingText>{rating.toFixed(1)}</RatingText>
            </RatingRow>
            
            <HeartButton onPress={onFavoritePress}>
              <Image
                source={require('../../assets/Telas/7-navegacao/icon-heart.png')}
                style={{ width: 18, height: 18, tintColor: isFavorite ? theme.colors.darkRed : '#ccc' }}
                resizeMode="contain"
              />
            </HeartButton>
          </RatingAndFavoriteRow>
          
        </CardContainer>
      </TouchableOpacity>
      <CardRight>
        <UltimaCompra>Última Compra</UltimaCompra>
        <CompraRealizada>Compra realizada {compraDate}</CompraRealizada>
        <ValorText>Valor: {valor}</ValorText>
        <AvaliacaoLabel>Minha avaliação</AvaliacaoLabel>
        <AvaliacaoRow>
          {[1,2,3,4,5].map(idx => (
            <TouchableOpacity key={idx} onPress={() => handleStarPress(idx)}>
              <Image
                source={require('../../assets/Telas/7-navegacao/icon-star.png')}
                style={{ width: 18, height: 18, marginRight: 2, tintColor: idx <= avaliacaoLocal ? '#FFD700' : '#ccc' }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ))}
        </AvaliacaoRow>
      </CardRight>
    </CardRow>
  );
};

export default HistoricoCompraCard;