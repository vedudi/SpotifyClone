import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import SongItem from '../components/SongItem';

const LikedSongScreen = () => {
  const navigation = useNavigation();
  const [searchedTracks, setSearchTracks] = useState([1]);
  const [searchText, setSearchText] = useState('Türkiye de Popüler Müzikler');
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <LinearGradient colors={['#614385', '#516395']} style={{flex: 1}}>
        <SafeAreaView>
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TouchableOpacity style={{marginHorizontal: 10}}>
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
                430 Songs
              </Text>
            </View>
            <Pressable
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
            </Pressable>
            {loading ? (
              <ActivityIndicator size={'large'} color={'gray'} />
            ) : (
              <FlatList
                data={searchedTracks}
                // keyExtractor={item => item.track.key}
                style={{marginTop: 10}}
                renderItem={() => (
                  <Pressable
                  // onPress={() => handlePlay(item)}
                  >
                    <View style={styles.trackContainer}>
                      {/* <Image
                      source={{uri: item.track.images.coverart}}
                      style={styles.albumCover}
                    /> */}
                      <View style={styles.trackInfo}>
                        <Text style={styles.trackName}>
                          {/* {item.track.title} */}
                          tracktitle
                        </Text>
                        <Text style={styles.albumName}>
                          {/* {item.track.subtitle} */}
                          subtitle
                        </Text>
                      </View>
                      <Entypo name="controller-play" size={24} color="white" />
                    </View>
                  </Pressable>
                )}
              />
            )}
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
      {/* <TouchableOpacity
        onPress={() => setModalVisible(!modalVisible)}
        style={{
          backgroundColor: '#5072a7',
          padding: 10,
          marginLeft: 'auto',
          marginRight: 'auto',
          position: 'absolute',
          left: 20,
          bottom: 10,
          borderRadius: 10,
          marginBottom: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <Image source={{

          }} style={{width: 40, height: 40}} />
          <Text
            style={{
              fontSize: 13,
              width: 220,
              color: 'white',
              fontWeight: 'bold',
            }}>
            name
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <TouchableOpacity>
              <AntDesign name="heart" size={25} color="#1DB954" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="pausecircleo" size={25} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity> */}
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
              source={
                {
                  // uri: selectedTrack?.images.coverart,
                }
              }
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
                  backgroundColor: 'gray',
                  borderRadius: 5,
                }}>
                <View
                  style={[
                    styles.progressbar,
                    // {
                    //   width: `${
                    //     (progress.position / progress.duration) * 100
                    //   }%`,
                    // },
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
                    // left: `${(progress.position / progress.duration) * 100}%`,
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
                  {/* {formatTime(progress.position)} */}
                </Text>
                <Text style={{color: 'white', fontSize: 15}}>
                  {/* {formatTime(progress.duration)} */}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 17,
                  alignItems: 'center',
                }}>
                <Pressable
                // onPress={seekBackward}
                >
                  <Entypo
                    name="controller-fast-backward"
                    size={30}
                    color="white"
                  />
                </Pressable>
                <Pressable>
                  <Ionicons name="play-skip-back" size={30} color={'white'} />
                </Pressable>
                <Pressable
                // onPress={togglePlayback}
                >
                  {isPlaying ? (
                    <AntDesign name="pausecircle" size={60} color="white" />
                  ) : (
                    <Entypo name="controller-play" size={60} color="white" />
                  )}
                </Pressable>
                <Pressable>
                  <Ionicons name="play-skip-forward" size={30} color="white" />
                </Pressable>
                <Pressable
                // onPress={seekForward}
                >
                  <Entypo
                    name="controller-fast-forward"
                    size={30}
                    color="white"
                  />
                </Pressable>
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
    backgroundColor: 'white',
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
