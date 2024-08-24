import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import { theme } from '../theme';

interface Props extends TouchableOpacityProps {
  title: string;
  backgroundColor?: string;
  titleColor?: string;
}
const Button = ({
  title = 'boton',
  backgroundColor = theme.colors.primary,
  titleColor = theme.colors.card,
  ...Props
}: Props) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor }]} {...Props}>
      <CustomText size="16" weight="600" color={titleColor}>
        {title}
      </CustomText>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.roundness,
    paddingVertical: 12,
    flexDirection: 'row',
  },
});
