import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { theme } from '../styles/theme';

interface AddButtonProps {
  size?: number;
  onPress?: () => void;
  backgroundColor?: string;
  iconColor?: string;
  style?: StyleProp<ViewStyle>;
}

const AddButton: React.FC<AddButtonProps> = ({
  size = 45,
  onPress,
  backgroundColor = theme.colors.darkBlue,
  iconColor = theme.colors.white,
  style
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          width: size,
          height: 42,
          backgroundColor,
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
      ]}
    >
      <Text style={[styles.plus, { color: iconColor }]}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  plus: {
    fontSize: 22,
    fontWeight: 'bold',

    // ?? CENTRALIZA O TEXTO (caso necess rio)
    textAlign: 'center',
  },
});

export default AddButton;
