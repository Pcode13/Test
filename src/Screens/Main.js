import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import TextInputCustom from '../Components/TextInputCustom';
import axios from 'axios';
import AppDimension from '../HelperStyles/AppDimension';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Components/Header';
import ItemCard from '../Components/ItemCard';
import {SEARCH, SETTING, SPLASH, CROSS} from '../assets';

const Main = ({navigation}) => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  // const [sortedBy, setSortedBy] = useState('price');
  const [isVisible, setVisible] = useState(false);
  const [selectcategory, setSelectCategory] = useState(0);

  useEffect(() => {
    fetchTopAlbums();
  }, []);

  const fetchTopAlbums = async () => {
    try {
      const response = await axios.get(
        'https://itunes.apple.com/us/rss/topalbums/limit=100/json',
      );
      setAlbums(response.data.feed.entry);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching top albums:', error);
    }
  };

  const display = () => {
    console.log('gdjfjdf');
    setVisible(!isVisible);
  };

  const onCategory = index => {
    setSelectCategory(index);
  };

  const ONsearchAlbums = async text => {
    if (text == '') {
      console.log('demo Data blank');
      setSearchTerm('');
      const response = await axios.get(
        'https://itunes.apple.com/us/rss/topalbums/limit=100/json',
      );
      setAlbums(response.data.feed.entry);
    } else {
      const filteredAlbu = albums.filter(album => {
        return (
          album['im:name'].label.toLowerCase().indexOf(text.toLowerCase()) > -1
        );
      });
      setAlbums(filteredAlbu);
    }
  };

  const sortAlbums = key => {
    let sortedAlbums = [...albums];
    switch (key) {
      case 'im:price':
        sortedAlbums.sort(
          (a, b) =>
            parseFloat(a['im:price'].attributes.amount) -
            parseFloat(b['im:price'].attributes.amount),
        );
        onCategory(key);
        break;
      case 'artist':
        sortedAlbums.sort((a, b) =>
          a['im:artist'].label.localeCompare(b['im:artist'].label),
        );
        onCategory(key);
        break;
      case 'releaseDate':
        sortedAlbums.sort(
          (a, b) =>
            new Date(a['im:releaseDate'].label) -
            new Date(b['im:releaseDate'].label),
        );
        onCategory(key);
        break;
      default:
        // default sorting by album name
        sortedAlbums.sort((a, b) =>
          a['im:name'].label.localeCompare(b['im:name'].label),
        );
    }
    setAlbums(sortedAlbums);
  };

  const renderAlbum = ({item}) => {
    return (
      <ItemCard
        name={item['im:name'].label}
        key={item.id}
        uri={item['im:image'][2].label}
        price={item['im:price'].attributes.amount}
        categories={item['im:artist'].label}
        artist={item['im:artist'].label}
        releaseDate={item['im:releaseDate'].attributes.label}
        onPress={() => {
          navigation.navigate('MoreInfo', {item: item});
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header title={'iTunes'} img={SPLASH} imga="imga" />
      <TextInputCustom
        placeholder={'Search albums...'}
        value={searchTerm}
        onChangeText={text => {
          ONsearchAlbums(text);
          setSearchTerm(text);
        }}
        source={SEARCH}
        cross={CROSS}
        crossPress={() => ONsearchAlbums('')}
        filterData={SETTING}
        onPress={display}
      />
      {isVisible ? (
        <>
          <Text style={styles.txtTitle}>SORT BY</Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 10,
            }}>
            <TouchableOpacity
              onPress={() => sortAlbums('im:price')}
              style={[
                styles.sortData,
                {
                  backgroundColor:
                    selectcategory == 'im:price' ? '#8B1874' : null,
                },
              ]}>
              <Text
                style={[
                  styles.txt,
                  {color: selectcategory == 'im:price' ? '#fff' : null},
                ]}>
                Price
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                sortAlbums('artist');
              }}
              style={[
                styles.sortData,
                {
                  backgroundColor:
                    selectcategory == 'artist' ? '#8B1874' : null,
                },
              ]}>
              <Text
                style={[
                  styles.txt,
                  {color: selectcategory == 'artist' ? '#fff' : null},
                ]}>
                Artist
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => sortAlbums('releaseDate')}
              style={[
                styles.sortData,
                {
                  backgroundColor:
                    selectcategory == 'releaseDate' ? '#8B1874' : null,
                },
              ]}>
              <Text
                style={[
                  styles.txt,
                  {color: selectcategory == 'releaseDate' ? '#fff' : null},
                ]}>
                Release Date
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setVisible(!isVisible)}>
              <Image source={CROSS} style={styles.serachImg} />
            </TouchableOpacity>
          </View>
        </>
      ) : null}

      {isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View>
          <FlatList
            data={albums}
            renderItem={renderAlbum}
            keyExtractor={item => item.id.attributes['im:id']}
          />
        </View>
      )}
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: AppDimension.SPACING_X_150,
  },
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
    fontSize: 30,
    margin: 5,
    color: '#000',
  },

  searchContainer: {
    flexDirection: 'row',
  },
  serachImg: {
    width: AppDimension.SPACING_X_20,
    height: AppDimension.SPACING_Y_20,
    margin: 5,
  },
  sortData: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    margin: 5,
    borderRadius: 10,
  },
  txtTitle: {
    fontSize: 18,
    color: '#5F264A',
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 5,
  },
  txt: {
    fontSize: 18,
    marginHorizontal: 8,
  },
});
