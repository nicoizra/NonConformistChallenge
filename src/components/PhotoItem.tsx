import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Photo } from '../types';
import CustomText from './CustomText';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { theme } from '../theme';
import { useNavigation } from '@react-navigation/native';

const PhotoItem = ({ photo }: { photo: Photo }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('PhotoScreen', { photo: photo })}
    >
      <Image
        source={{ uri: photo.uri }}
        resizeMode="cover"
        style={styles.img}
        borderRadius={theme.roundness}
      />
      <CustomText>{photo.takenAt.toLocaleDateString()}</CustomText>
    </TouchableOpacity>
  );
};

export default PhotoItem;

const styles = StyleSheet.create({
  container: {
    padding: wp(2),
    backgroundColor: theme.colors.card,
    borderWidth: 2,
    borderColor: theme.colors.border,
    borderRadius: theme.roundness,
    alignItems: 'center',
    margin: 5,
  },

  img: {
    width: wp(22),
    borderRadius: theme.roundness,
    aspectRatio: 3 / 4,
    marginBottom: 5,
  },
});
