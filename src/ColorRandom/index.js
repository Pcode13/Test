import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const ColorRandom = () => {
  const [colors, setColor] = useState('red');

  useEffect(() => {
    setInterval(() => {
      getChangeColor();
    }, 9000);
  }, [colors]);
  const getChangeColor = () => {
    let color = Math.random().toString(16).substring(2, 8);
    let d = '#' + color;
    setColor(d);
  };

  return (
    <View style={[styles.container, {backgroundColor: colors}]}>
      <Text style={[styles.txt, {color: colors == '#000' ? '#fff' : '#000'}]}>
        {colors}
      </Text>

      <View style={styles.btn}>
        <TouchableOpacity style={styles.btnview} onPress={getChangeColor}>
          <Text style={styles.txt1}>Click Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ColorRandom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    margin: 20,
    fontSize: 30,
  },
  btn: {
    alignContent: 'center',
    margin: 16,
  },
  txt1: {
    fontSize: 20,
    color: '#5F264A',
    textAlign: 'center',
  },
  btnview: {
    width: 120,
    height: 40,
    backgroundColor: '#EBD8B2',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
