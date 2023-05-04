import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import AppDimension from '../HelperStyles/AppDimension';
import LinearGradient from 'react-native-linear-gradient';

const ItemCard = ({
  name,
  item,
  uri,
  price,
  artist,
  releaseDate,
  categories,
  onPress,
}) => {
  return (
    <LinearGradient colors={['#F06292', '#CDD']} style={styles.albumContainer}>
      <View>
        <Image source={{uri: uri}} style={styles.albumImage} />
      </View>

      <View style={styles.albumDetailsContainer}>
        <Text ellipsizeMode="tail" numberOfLines={2} style={styles.albumTitle}>
          {name}
        </Text>
        <Text style={styles.albumArtist}>{artist}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={[styles.albumArtist, {color: '#009FBD'}]}>
            {releaseDate}
          </Text>
          <Text
            style={[styles.albumArtist, {color: '#263A29', fontWeight: '600'}]}>
            ${price}
          </Text>
        </View>

        <View>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.more}>More Info ...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  albumContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: AppDimension.SPACING_X_10,
    // height: AppDimension.SPACING_Y_325,

    width: AppDimension.SPACING_X_350,
    padding: AppDimension.SPACING_X_10,

    borderBottomLeftRadius: AppDimension.SPACING_X_25,
    borderTopRightRadius: AppDimension.SPACING_X_25,
    elevation: 0.5,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  albumImage: {
    width: AppDimension.SPACING_X_100,
    height: AppDimension.SPACING_Y_100,
    resizeMode: 'contain',
    marginVertical: AppDimension.SPACING_X_08,
    // borderRadius: AppDimension.SPACING_X_18,
  },
  albumRank: {
    marginRight: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
  albumDetailsContainer: {
    flex: 1,
    margin: AppDimension.SPACING_X_10,
  },
  albumTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#2A2F4F',
  },
  albumArtist: {
    fontSize: 16,
    color: '#Fff',
    margin: 3,
  },
  more: {
    textDecorationLine: 'underline',
    fontSize: 16,
    color: '#009',
  },
});
