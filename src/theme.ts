import { DarkTheme } from '@react-navigation/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#0C0F16', // Color de fondo principal de la web
    text: '#E7ECEF', // Color de texto claro
    primary: '#00D0FF', // Color primario vibrante (Cyan)
    secondary: '#FFD500', // Color secundario (Amarillo)
    card: '#1A1F2B', // Color de superficie
    border: '#3E4C59',
  },
  sizes: {
    '36': wp(9),
    '18': wp(4.4),
    '16': wp(3.9),
    '14': wp(3.6),
    '12': wp(3.1),
    '8': wp(2.6),
  },
  roundness: 20,
  padding: wp(5),
};
