import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const RandomNumber = () => {
  const [number, setRandom] = useState(10);
  const [btn, setBtn] = useState();

  useEffect(()=>{
    getRandNumber()
  },[])
  const getRandNumber = () => {
    const rand = Math.floor(Math.random() * 100 + 1);
    setRandom(rand);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Random Number Generator </Text>
      <TextInput
        placeholder="Enter the number"
        value={number.toString()}
        onChangeText={number => setRandom(number)}
        style={styles.textinput}
      />

      <View style={styles.btn}>
        <TouchableOpacity style={styles.btnview} onPress={getRandNumber}>
          <Text style={styles.txt1}>Click Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RandomNumber;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 25,
  },
  textinput: {
    borderBottomWidth: 1,
    textAlign: 'center',
    fontSize: 20,
    borderBottomColor: 'red',
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
