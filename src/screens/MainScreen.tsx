import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';

import { styles } from '../styles/global';
import PhotoItem from '../components/PhotoItem';
import Button from '../components/Button';

import { usePhotosContext } from '../providers/photos';
import CustomText from '../components/CustomText';

const MainScreen = ({ navigation }) => {
  const { photos } = usePhotosContext();

  const message =
    photos.length > 0 ? 'Aquí tienes un listado de tus fotos:' : 'No has sacado ninguna foto aún';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <CustomText size="36">{message}</CustomText>

        <FlatList
          data={photos}
          renderItem={({ item }) => <PhotoItem photo={item} />}
          keyExtractor={(item) => item.uri}
          numColumns={3}
        />

        <Button title="Nueva Foto" onPress={() => navigation.navigate('CameraScreen')} />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
