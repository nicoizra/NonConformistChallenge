import React from 'react';
import { View, Image, Text, SafeAreaView } from 'react-native';
import Share from 'react-native-share';
import { styles } from '../styles/global';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import { theme } from '../theme';
import CustomText from '../components/CustomText';

const PhotoScreen = ({ route, navigation }) => {
  const { photo } = route.params;

  const sharePhoto = async (uri: string) => {
    try {
      await Share.open({ url: uri });
    } catch (error) {
      console.log(error);
    }
  };

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
