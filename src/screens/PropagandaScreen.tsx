import React, { useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StatusBar, Dimensions, Animated, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { RootStackParamList } from '../navigation/AppNavigator';

type PropagandaScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Propaganda'>;

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Container = styled.View`
  position: relative;
  width: ${screenWidth}px;
  height: ${screenHeight}px;
  background: #F8F9FA;
  border-radius: 30px;
`;

// Status Bar Component (similar à Splash, mas com cores diferentes)
const StatusBarContainer = styled.View`
  position: absolute;
  height: 44px;
  left: 0px;
  right: 0px;
  top: 0px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
`;

const TimeContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TimeText = styled.Text`
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #1A2530;
  letter-spacing: -0.165px;
`;

const BatteryContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const SignalBars = styled.View`
  flex-direction: row;
  align-items: flex-end;
  gap: 1px;
`;

const SignalBar = styled.View<{ height: number }>`
  width: 3px;
  height: ${props => props.height}px;
  background-color: #000000;
  border-radius: 1.2px;
`;

const WifiIcon = styled.View`
  width: 15.4px;
  height: 11.06px;
  background-color: #1A2530;
  border-radius: 2px;
`;

const BatteryIcon = styled.View`
  width: 24.5px;
  height: 11.5px;
  background-color: #707B81;
  border-radius: 2px;
  position: relative;
`;

const BatteryLevel = styled.View`
  position: absolute;
  width: 18px;
  height: 7.67px;
  background-color: #1A2530;
  border-radius: 1.6px;
  top: 2px;
  left: 2px;
`;

// Círculos decorativos
const CircleContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Circle = styled.View<{ size: number; top: number; left: number; color: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: ${props => props.size / 2}px;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
`;

const LargeCircle = styled.View`
  position: absolute;
  width: 389px;
  height: 389px;
  border: 1px solid #6EDDD5;
  border-radius: 194.5px;
  left: ${(screenWidth - 389) / 2 + 100}px;
  top: -182px;
`;

// Área do conteúdo principal
const ContentContainer = styled.View`
  position: absolute;
  width: 315px;
  height: 311px;
  left: 20px;
  top: 146px;
  justify-content: center;
  align-items: center;
`;

const BookImage = styled(Animated.Image)`
  width: 206.5px;
  height: 340.2px;
  position: absolute;
  left: 40px;
  top: -27px;
`;

// Área de texto
const TextContainer = styled.View`
  position: absolute;
  width: 355px;
  left: 20px;
  top: 488px;
`;

const Title = styled.Text`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 40px;
  line-height: 56px;
  color: #1A2530;
  width: 337px;
  margin-bottom: 8px;
`;

const Description = styled.Text`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #707B81;
  width: 322px;
  margin-bottom: 12px;
`;

const ContinueText = styled.Text`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 16.84px;
  line-height: 27px;
  color: #8C8C8C;
  opacity: 0.64;
  margin-bottom: 20px;
`;

// Área de botão e indicadores
const BottomContainer = styled.View`
  position: absolute;
  width: 332px;
  height: 54px;
  left: 20px;
  top: 718px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 16px 32px;
  gap: 8px;
  width: 120px;
  height: 54px;
  background: #074477;
  border-radius: 50px;
`;

const ButtonText = styled.Text`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
`;

const IndicatorContainer = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

const Indicator = styled.View<{ width: number; active?: boolean }>`
  width: ${props => props.width}px;
  height: 5px;
  background: #074477;
  border-radius: 16px;
  opacity: ${props => props.active ? 1 : 0.3};
`;

const PropagandaScreen: React.FC = () => {
  const navigation = useNavigation<PropagandaScreenNavigationProp>();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animações de entrada
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: false, // Para web compatibility
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: false, // Para web compatibility
      }),
    ]).start();

    // Rotação sutil do livro
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: false, // Para web compatibility
        }),
        Animated.timing(rotateAnim, {
          toValue: 0,
          duration: 4000,
          useNativeDriver: false, // Para web compatibility
        }),
      ])
    ).start();
  }, [fadeAnim, slideAnim, rotateAnim]);

  const handleContinue = () => {
    navigation.navigate('Inicial');
  };

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['-9.44deg', '-7deg']
  });

  return (
    <Animated.View style={{ opacity: fadeAnim, flex: 1 }}>
      <Container>
        <StatusBar barStyle="dark-content" />
        
        {/* Status Bar */}
        <StatusBarContainer>
          <TimeContainer>
            <TimeText>{getCurrentTime()}</TimeText>
          </TimeContainer>
          
          <BatteryContainer>
            <SignalBars>
              <SignalBar height={4} />
              <SignalBar height={6} />
              <SignalBar height={8} />
              <SignalBar height={11} />
            </SignalBars>
            
            <WifiIcon />
            
            <BatteryIcon>
              <BatteryLevel />
            </BatteryIcon>
          </BatteryContainer>
        </StatusBarContainer>

        {/* Círculos decorativos */}
        <CircleContainer>
          <Circle size={13} top={444} left={20} color="#6EDDD5" />
          <Circle size={13} top={431} left={322} color="#6EDDD5" />
          <Circle size={16} top={146} left={47} color="#6FDCD4" />
          <LargeCircle />
        </CircleContainer>

        {/* Área do livro */}
        <ContentContainer>
          <BookImage 
            source={require('../../assets/book.png')}
            style={{
              transform: [
                { translateY: slideAnim },
                { rotate: rotateInterpolate }
              ],
            }}
            resizeMode="contain"
          />
        </ContentContainer>

        {/* Conteúdo de texto */}
        <Animated.View style={{ transform: [{ translateY: slideAnim }] }}>
          <TextContainer>
            <Title>O HOBBIT - J.R.R. TOLKIEN</Title>
            <Description>
              Bilbo Bolseiro era um dos mais respeitáveis hobbits de todo...
            </Description>
            <ContinueText>Continue a leitura →</ContinueText>
          </TextContainer>

          {/* Botão e indicadores */}
          <BottomContainer>
            <IndicatorContainer>
              <Indicator width={35} active />
              <Indicator width={8} />
              <Indicator width={8} />
            </IndicatorContainer>
            
            <ButtonContainer onPress={handleContinue}>
              <ButtonText>Quero</ButtonText>
            </ButtonContainer>
          </BottomContainer>
        </Animated.View>
      </Container>
    </Animated.View>
  );
};

export default PropagandaScreen;