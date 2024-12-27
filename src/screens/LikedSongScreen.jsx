import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import SongItem from '../components/SongItem';
import axios from 'axios';
import Modal from 'react-native-modal';
import TrackPlayer, {useProgress} from 'react-native-track-player';

const LikedSongScreen = () => {
  const navigation = useNavigation();
  const progress = useProgress();
  const [searchedTracks, setSearchTracks] = useState([1]);
  const [searchText, setSearchText] = useState('Türkiye de Popüler Müzikler');
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const options = {
      method: 'GET',
      url: 'https://shazam.p.rapidapi.com/search',
      params: {
        term: searchText,
        locale: 'tr-TR',
        offset: '0',
        limit: '5',
      },
      headers: {
        'x-rapidapi-key': 'a3840fce78mshc1e0b03983a458ep13015djsnf64a867a9d2b',
        'x-rapidapi-host': 'shazam.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setSearchTracks(response.data.tracks.hits);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  const setupPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      TrackPlayer.updateOptions({
        capabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          TrackPlayer.CAPABILITY_STOP,
          TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
          TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
          TrackPlayer.CAPABILITY_SEEK_TO,
        ],
      });
    } catch (error) {}
  };

  const handlePlay = async track => {
    const trackData = {
      id: track.track.key,
      url: track.track.hub.actions.find(action => action.type === 'uri').uri,
      title: track.track.title,
      artist: track.track.subtitle,
      artwork: track.track.images.coverart,
    };
    try {
      await TrackPlayer.reset();
      await TrackPlayer.add(trackData);
      await TrackPlayer.play();
      setSelectedTrack(track.track);
      setModalVisible(true);
      setIsPlaying(true);
    } catch (error) {}
  };

  useEffect(() => {
    handleSearch();
    setupPlayer();
  }, []);
  const formatTime = seconds => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  const togglePlayback = async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
    setIsPlaying(!isPlaying);
  };
  const seekForward = async () => {
    const position = await TrackPlayer.getPosition();
    await TrackPlayer.seekTo(position + 10);
  };
  const seekBackward = async () => {
    const position = await TrackPlayer.getPosition();
    await TrackPlayer.seekTo(position - 10);
  };
  return (
    <>
      <LinearGradient colors={['#614385', '#516395']} style={{flex: 1}}>
        <SafeAreaView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{marginHorizontal: 10}}>
              <Ionicons name="arrow-back" size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 10,
                marginTop: 9,
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                  padding: 9,
                  // flex: 1,
                  height: 38,
                  backgroundColor: '#42275a',
                  borderRadius: 8,
                }}>
                <TextInput
                  placeholderTextColor={'white'}
                  style={{
                    fontWeight: '500',
                    width: '85%',
                    color: 'white',
                  }}
                  onChangeText={setSearchText}
                  onSubmitEditing={handleSearch}
                  placeholder="Find in Liked songs"
                />
                <AntDesign name="search1" size={25} color="white" />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={{height: 50}} />
          <View style={{marginHorizontal: 10}}>
            <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
              {' '}
              Liked Songs
            </Text>
            <Text style={{fontSize: 13, color: 'white', marginTop: 5}}>
              {' '}
              {searchedTracks.length} Songs
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 10,
            }}>
            <TouchableOpacity
              style={{
                height: 30,
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#1DB954',
                borderRadius: 18,
              }}>
              <AntDesign name="arrowdown" size={20} color="white" />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}>
              <TouchableOpacity>
                <FontAwesome6
                  name="arrow-down-up-across-line"
                  size={25}
                  color="#1DB954"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 60,
                  width: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#1DB954',
                  borderRadius: 30,
                }}>
                <Entypo name="controller-play" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          {loading ? (
            <ActivityIndicator size={'large'} color={'gray'} />
          ) : (
            <FlatList
              data={searchedTracks}
              keyExtractor={item => item?.track?.key}
              style={{marginTop: 10}}
              renderItem={({item}) => (
                <TouchableOpacity onPress={() => handlePlay(item)}>
                  <View style={styles.trackContainer}>
                    <Image
                      source={{uri: item?.track?.images?.coverart}}
                      style={styles.albumCover}
                    />
                    <View style={styles.trackInfo}>
                      <Text style={styles.trackName}>
                        {item?.track?.title}
                        tracktitle
                      </Text>
                      <Text style={styles.albumName}>
                        {item?.track?.subtitle}
                        subtitle
                      </Text>
                    </View>
                    <Entypo name="controller-play" size={24} color="white" />
                  </View>
                </TouchableOpacity>
              )}
            />
          )}
        </SafeAreaView>
      </LinearGradient>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        swipeDirection="down"
        onSwipeComplete={() => setModalVisible(false)}
        style={{margin: 0}}>
        <View
          style={{
            backgroundColor: '#5072A7',
            width: '100%',
            height: '100%',
            paddingTop: 60,
            paddingHorizontal: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <AntDesign name="down" size={24} color="white" />
            </TouchableOpacity>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>
              song name
            </Text>
            <Entypo name="dots-three-vertical" size={24} color="white" />
          </View>

          <View style={{padding: 10, marginTop: 20}}>
            <Image
              source={{
                uri: selectedTrack?.images.coverart,
              }}
              style={{width: '100%', height: 330, borderRadius: 4}}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <View>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
                  {selectedTrack?.title}
                </Text>
                <Text style={{color: '#D3D3D3', marginTop: 4}}>
                  {selectedTrack?.subtitle}
                </Text>
              </View>
              <AntDesign name="heart" size={24} color="#1DB954" />
            </View>
            <View style={{marginTop: 10}}>
              <View
                style={{
                  width: '100%',
                  marginTop: 10,
                  height: 3,
                  backgroundColor: 'white',
                  borderRadius: 5,
                }}>
                <View
                  style={[
                    styles.progressbar,
                    {
                      width: `${
                        (1 - progress.position / progress.duration) * 100
                      }%`,
                      transform: [{scaleX: -1}],
                    },
                  ]}
                />
                <View
                  style={{
                    position: 'absolute',
                    top: -3,
                    width: 10,
                    height: 10,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    right: `${(progress.position / progress.duration) * 100}%`,
                  }}
                />
              </View>

              <View
                style={{
                  marginTop: 12,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 15}}>
                  {formatTime(progress.duration)}
                </Text>
                <Text style={{color: 'white', fontSize: 15}}>
                  {formatTime(progress.position)}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 17,
                  alignItems: 'center',
                }}>
                <TouchableOpacity onPress={seekForward}>
                  <Entypo
                    name="controller-fast-backward"
                    size={30}
                    color="white"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name="play-skip-back" size={30} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={togglePlayback}>
                  {isPlaying ? (
                    <AntDesign name="pausecircle" size={60} color="white" />
                  ) : (
                    <Entypo name="controller-play" size={60} color="white" />
                  )}
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name="play-skip-forward" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={seekBackward}>
                  <Entypo
                    name="controller-fast-forward"
                    size={30}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default LikedSongScreen;

const styles = StyleSheet.create({
  progressbar: {
    height: '100%',
    backgroundColor: 'gray',
  },
  trackContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  albumCover: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  trackInfo: {
    flex: 1,
    marginLeft: 10,
  },
  trackName: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  albumName: {
    fontSize: 14,
    color: '#758694',
  },
});
