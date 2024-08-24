import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomText from './CustomText';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { theme } from '../theme';

const BackButton = () => {
  const navigation = useNavigation();
  const arrow = '<';
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnContainer}>
        <Image
          source={require('../assets/img/arrowBack.png')}
          style={styles.img}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginLeft: theme.padding,
  },
  btnContainer: {
    width: wp(10),
    aspectRatio: 1,
    borderRadius: theme.roundness,
    backgroundColor: theme.colors.card,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: wp(5),
    marginLeft: -3,
  },
});
