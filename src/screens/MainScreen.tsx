import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';

import { styles } from '../styles/global';
import PhotoItem from '../components/PhotoItem';
import Button from '../components/Button';

import { usePhotosContext } from '../providers/photos';

const MainScreen = ({ navigation }) => {
  const { photos } = usePhotosContext();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <FlatList
          data={photos}
          renderItem={({ item }) => <PhotoItem photo={item} />}
          keyExtractor={(item) => item.uri}
          numColumns={3}
        />

        <Button title="Tomar Foto" onPress={() => navigation.navigate('CameraScreen')} />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
