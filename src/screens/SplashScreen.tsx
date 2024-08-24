import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

import { theme } from '../theme';
import CustomText from '../components/CustomText';
import Animated, { FadeIn, FadeInUp } from 'react-native-reanimated';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('MainScreen');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animated.View entering={FadeInUp.delay(50)}>
        <CustomText size="36">Bienvenido</CustomText>
      </Animated.View>
      <Animated.View entering={FadeIn.delay(200)}>
        <CustomText size="16">Estamos configurando todo para vos...</CustomText>
      </Animated.View>
      <ActivityIndicator color={theme.colors.primary} style={styles.act} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  act: {
    marginTop: 20,
  },
});

export default SplashScreen;
