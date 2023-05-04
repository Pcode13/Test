import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';

const splashImage = require('../assets/Logo.png');

const SlpashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main');
    }, 2000);
  }, []);
  return (
    <View style={styles.image}>
      <Image
        source={splashImage}
        resizeMode="contain"
        style={styles.imageDis}
      />
      <Text style={styles.textView}>iTunes</Text>
    </View>
  );
};

export default SlpashScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  textView: {
    textAlign: 'center',
    fontSize: 30,
    color: '#fc0349',
    fontWeight: '700',
  },
  imageDis: {
    width: '40%',
    height: '20%',
    marginTop: -180,
    marginBottom: 30,
    borderRadius: 80,
    alignSelf: 'center',
  },
});
