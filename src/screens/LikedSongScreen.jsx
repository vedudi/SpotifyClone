import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const LikedSongScreen = () => {
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
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
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
