import Share from 'react-native-share';

export const sharePhoto = async (uri: string) => {
  try {
    await Share.open({ url: uri });
  } catch (error) {
    console.log(error);
  }
};
