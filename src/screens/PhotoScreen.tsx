import React from 'react';
import { View, Image, SafeAreaView } from 'react-native';
import { styles } from '../styles/global';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import { theme } from '../theme';
import CustomText from '../components/CustomText';
import { sharePhoto } from '../helpers/sharePhoto';

const PhotoScreen = ({ route }) => {
  const { photo } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <View style={[styles.content, { paddingTop: theme.padding, gap: 10 }]}>
        <Image
          source={{ uri: photo.uri }}
          style={styles.bigPicture}
          resizeMode="cover"
          borderRadius={theme.roundness}
        />
        <CustomText>
          Ubicación: {photo.location?.latitude}, {photo.location?.longitude}
        </CustomText>
        <Button title="Compartir esta foto" onPress={() => sharePhoto(photo.uri)} />
      </View>
    </SafeAreaView>
  );
};

export default PhotoScreen;
