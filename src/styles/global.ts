import { StyleSheet } from 'react-native';
import { theme } from '../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: theme.padding,
  },
  camera: {
    width: '100%',
    aspectRatio: 3 / 4,
    borderWidth: 2,
    borderColor: theme.colors.border,
  },

  bigPicture: {
    width: '100%',
    aspectRatio: 3 / 4,
    borderWidth: 2,
    borderColor: theme.colors.border,
  },
});
