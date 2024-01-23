import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { View, StyleSheet } from 'react-native';
import kingkongImage from '../../assets/images/kingkong.webp';

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Sample');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={kingkongImage} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 500, 
    height: 500,
    resizeMode: 'contain',
  },
});

export default LoadingScreen;
