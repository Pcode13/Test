import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const Palindrome = () => {
  const [word, setWord] = useState();
  const [btn, setBtn] = useState();

  const checkPalindrome = text => {
    let len = word.length;

    let startStr = word.substring(0, Math.floor(len / 2)).toLowerCase();
    let endStr = word.substring(len - Math.floor(len / 2));
    console.log('s', startStr);
    console.log('e', endStr);

    let flip = [...endStr].reverse().join('');
    if (flip == startStr) {
      setWord(`${word.toUpperCase()} is a Palindrome `);
    } else {
      setWord(`${word}r is a not Palindrome `);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}> Checker Palindrome </Text>
      <TextInput
        placeholder="Enter the Word"
        // value={word}
        onChangeText={a => setWord(a)}
        style={styles.textinput}
      />

      <View style={styles.btn}>
        <TouchableOpacity
          style={styles.btnview}
          onPress={n => checkPalindrome(n)}>
          <Text style={styles.txt1}>Click Me</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btn}>
        <Text style={styles.txt1}>{word}</Text>
      </View>
    </View>
  );
};

export default Palindrome;

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
    width: '70%',
  },
  btn: {
    alignContent: 'center',
    margin: 16,
  },
  txt1: {
    fontSize: 20,
    color: '#FF6969',
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
