import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { styles } from '../styles/global';
import { theme } from '../theme';
import BackButton from '../components/BackButton';
import Camera from '../components/Camera';

const CameraScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <View style={[styles.content, { paddingTop: theme.padding, gap: 10 }]}>
        <Camera />
      </View>
    </SafeAreaView>
  );
};

export default CameraScreen;
