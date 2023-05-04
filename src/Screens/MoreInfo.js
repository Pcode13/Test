import {
  Image,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import LinearGradient from 'react-native-linear-gradient';
import AppDimension from '../HelperStyles/AppDimension';

// const data = [
//   {key: '1', col1: 'Count', col2: {item['im:itemCount'].label}},
//   {key: '2', col1: 'Row 2, Column 1', col2: 'Row 2, Column 2'},
//   {key: '3', col1: 'Row 3, Column 1', col2: 'Row 3, Column 2'},
//   {key: '4', col1: 'Row 4, Column 1', col2: 'Row 4, Column 2'},
//   {key: '5', col1: 'Row 5, Column 1', col2: 'Row 5, Column 2'},
//   {key: '6', col1: 'Row 6, Column 1', col2: 'Row 6, Column 2'},
// ];
const MoreInfo = ({route}) => {
  const {item} = route.params;

  console.log('item', item);

  const openURI = async () => {
    const url = 'https://music.apple.com/us/artist/rae-sremmurd/829356035?uo=2';
    const supported = await Linking.OpenURL(url); //To check if URL is supported or not.
    if (supported) {
      await Linking.openURL(url); // It will open the URL on browser.
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  const handleAlbumPress = album => {
    // Open iTunes link for the selected album in App Store
    Linking.openURL(album.link.attributes.href);
  };

  const renderTableItem = ({it}) => {
    console.log();
    return (
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>Count</Text>
        </View>

        <View style={styles.cell}>
          <Text>{it['im:itemCount'].label}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header title={item['im:name'].label} />

      <LinearGradient
        colors={['#F06292', '#CDDC39']}
        style={styles.albumContainer}>
        <Image
          source={{uri: item['im:image'][2].label}}
          style={styles.albumImage}
        />

        <Text style={styles.albumTitle}>{item.title.label}</Text>
        <Text style={styles.des}>Descriptions</Text>
        <ScrollView style={{flex:1}}>
          <View style={styles.detailsContainer}>
            <View style={styles.row}>
              <View style={styles.cell}>
                <Text style={styles.ce}>Count</Text>
              </View>

              <View style={styles.cell}>
                <Text style={styles.ro}>
                  {item['im:itemCount'].label} Songs
                </Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.cell}>
                <Text style={styles.ce}>Release Date</Text>
              </View>

              <View style={styles.cell}>
                <Text style={styles.ro}>
                  {item['im:releaseDate'].attributes.label}{' '}
                </Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.cell}>
                <Text style={styles.ce}>Price</Text>
              </View>

              <View style={styles.cell}>
                <Text style={styles.ro}>{item['im:price'].label}</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.cell}>
                <Text style={styles.ce}>Content Type</Text>
              </View>

              <View style={styles.cell}>
                <Text style={styles.ro}>{item['im:itemCount'].label}</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.cell}>
                <Text  style={styles.ce}>
                  Rights
                </Text>
              </View>

              <View style={styles.cell}>
                <Text numberOfLines={1} style={styles.ro}>{item.rights.label}</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.cell}>
                <Text style={styles.ce}>Category</Text>
              </View>

              <View style={styles.cell}>
                <Text style={styles.ro}>{item.category.attributes.label}</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.cell}>
                <Text style={styles.ce}>Link</Text>
              </View>

              <View style={styles.cell}>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(item.link.attributes.href);
                  }}
                  style={styles.button}>
                  <Text numberOfLines={1} style={styles.song}>
                    {item.link.attributes.href}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default MoreInfo;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  customTxt: {
    fontSize: 14,
  },
  albumContainer: {
    flex: 1,
    alignItems: 'center',
  },
  albumImage: {
    width: AppDimension.SPACING_X_300,
    height: AppDimension.SPACING_Y_314,
    resizeMode: 'contain',
    margin: AppDimension.SPACING_X_10,

    // borderRadius: AppDimension.SPACING_X_150,
  },
  albumTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: AppDimension.SPACING_X_08,
  },
  detailsContainer: {
    width: '83%',
    // margin: AppDimension.SPACING_X_06,
    paddingHorizontal: AppDimension.SPACING_X_20,
  },
  song: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d95d6e',
    margin: AppDimension.SPACING_X_05,
  },
  date: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#fff',
  },
  price: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#fff',
  },
  des: {
    color: '#5F264A',
    fontSize: 20,
    margin: 3,
    textAlign: 'right',
    fontWeight: '800',
  },
  table: {
    flex: 1,
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    justifyContent: 'space-between',
    margin: 5,
  },
  cell: {
    marginHorizontal: AppDimension.SPACING_X_30,
  },
  ce: {
    fontWeight: '800',
    fontSize: 18,
    color: '#FC4F00',
  },
  ro: {
    fontWeight: '600',
    fontSize: 18,
    color: '#0A4D68',
  },
});
