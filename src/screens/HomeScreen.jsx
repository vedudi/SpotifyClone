import {
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import ArtistCard from '../components/ArtistCard';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <SafeAreaView>
        <ScrollView contentContainerStyle={{paddingBottom: 100}}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <Image
                style={styles.headerImage}
                source={{
                  uri: 'data:image/png;base64,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',
                }}
              />
              <Text style={styles.headerText}>message</Text>
            </View>
            <FontAwesome6 name="bolt-lightning" color="white" size={14} />
          </View>
          <View style={styles.tabButtons}>
            <TouchableOpacity style={styles.tabButton}>
              <Text style={{color: 'white', fontSize: 15}}> Music </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabButton}>
              <Text style={{color: 'white', fontSize: 15}}>
                {' '}
                Podcast & Shows{' '}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Liked')}
              style={styles.likedSongs}>
              <LinearGradient colors={['#33006F', '#FFFFFF']}>
                <TouchableOpacity
                  style={{
                    width: 55,
                    height: 55,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <AntDesign name="heart" color="white" size={24} />
                </TouchableOpacity>
              </LinearGradient>

              <Text style={styles.likedSongsText}>Liked Songs</Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                flex: 1,
                marginHorizontal: 10,
                marginVertical: 8,
                backgroundColor: '#202020',
                borderRadius: 4,
              }}>
              <Image
                source={{uri: 'https://picsum.photos/100/100'}}
                style={{width: 55, height: 55}}
              />
              <View style={{}}>
                <Text
                  style={{color: 'white', fontSize: 13, fontWeight: 'bold'}}>
                  Hippop
                </Text>
              </View>
            </View>

            {/* flatlist renderitem */}
            <TouchableOpacity
              style={{
                marginVertical: 8,
                marginHorizontal: 10,
                backgroundColor: '#282828',
                flexDirection: 'row',
                borderRadius: 4,
              }}>
              <Image
                source={{uri: 'https://picsum.photos/200/300'}}
                style={{width: 55, height: 55}}
              />
              <View
                style={{
                  flex: 1,
                  marginHorizontal: 8,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{fontSize: 13, fontWeight: 'bold', color: 'white'}}>
                  name
                </Text>
              </View>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>Your Top Artists</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {/* {artists?.map((artist, index) => (
              <ArtistCard key={index} artist={artist} />
              ))} */}
            </ScrollView>

            <View style={{height: 10}} />

            <Text style={styles.sectionTitle}>Popular Albums</Text>
            {/* flatliste çevrilecek */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {/* {albums?.map((album, index) => (
                <AlbumCard album={album} key={index} />
              ))} */}
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headerImage: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  tabButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginHorizontal: 12,
    marginVertical: 5,
  },
  tabButton: {
    backgroundColor: '#282828',
    padding: 10,
    borderRadius: 30,
  },
  tabButtonText: {color: 'white', fontSize: 15},
  likedSongs: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 8,
    backgroundColor: '#202020',
    borderRadius: 4,
  },
  likedSongsText: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },
  sectionTitle: {
    color: 'white',
    marginHorizontal: 10,
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
