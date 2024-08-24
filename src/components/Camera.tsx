import React, { LegacyRef, useRef } from 'react';
import Button from './Button';
import { RNCamera } from 'react-native-camera';
import { styles } from '../styles/global';
import { usePhotosContext } from '../providers/photos';
import { useLocation } from '../hooks/useLocation';
import { useNavigation } from '@react-navigation/native';

const Camera = () => {
  const { addPhoto } = usePhotosContext();
  const ref: LegacyRef<RNCamera> | undefined = useRef(null);
  const location = useLocation();
  const navigation = useNavigation();

  const takePhoto = async () => {
    if (ref) {
      const photo = await ref.current?.takePictureAsync();
      addPhoto({ uri: photo?.uri || '', location, takenAt: new Date() });
      navigation.goBack();
    }
  };

  return (
    <>
      <RNCamera ref={ref} style={styles.camera} captureAudio={false} />
      <Button title="Tomar foto" onPress={takePhoto} />
    </>
  );
};

export default Camera;
