import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Header = ({title, img, imga, customTxt, numberOfLines}) => {
  return (
    <View style={styles.header}>
      {imga === 'imga' ? <Image source={img} style={styles.logo} /> : null}

      <Text style={[styles.logoTxt, customTxt]} numberOfLines={numberOfLines}>
        {title}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
  },
  logo: {
    width: 40,
    height: 40,
    margin: 5,
  },
  logoTxt: {
    fontSize: 16,
    margin: 5,
    color: '#000',
    lineHeight: 40,
  },
});
