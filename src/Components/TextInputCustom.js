import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

import AppDimension from '../HelperStyles/AppDimension';

const TextInputCustom = ({
  onChangeText,
  onPress,
  source,
  placeholder,
  cross,
  filterData,
  crossPress,
  value
}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={styles.searchContainer}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={onPress}>
            <Image source={source} style={styles.serachImg} />
          </TouchableOpacity>

          <TextInput
            style={styles.searchInput}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            placeholderTextColor="green"
          />
        </View>
        <View>
          {/* <TouchableOpacity onPress={onPress}>
            <Image source={source} style={styles.serachImg} />
          </TouchableOpacity> */}
          <TouchableOpacity onPress={crossPress}>
            <Image source={cross} style={styles.serachImg} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{margin: AppDimension.SPACING_X_08}}>
        <TouchableOpacity onPress={onPress}>
          <Image source={filterData} style={styles.serachImg} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TextInputCustom;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    width: '80%',
    borderWidth: 1,
    borderColor: '#4332fc',
    borderRadius: AppDimension.SPACING_X_15,
    justifyContent: 'space-between',
    margin: AppDimension.SPACING_X_08,
  },
  serachImg: {
    width: AppDimension.SPACING_X_25,
    height: AppDimension.SPACING_Y_25,
    margin: 10,
  },
  searchInput: {},
});
