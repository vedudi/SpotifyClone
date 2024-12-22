import {TouchableOpacity, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const LoginScreen = () => {
  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <SafeAreaView>
        <View style={{height: 80}} />
        <Entypo
          name="spotify"
          color={'#1DB954'}
          size={80}
          style={{textAlign: 'center'}}
        />
        <Text style={styles.loginTitle}>
          {' '}
          Millions of Songs Free on Spotify !
        </Text>
        <View style={{height: 80}} />
        <TouchableOpacity style={styles.loginButton}>
          <Text> Sign İn With Spotify </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.phoneButton}>
          <MaterialIcons name="phone-android" color="white" size={24}/>
          <Text style={styles.phoneButtonText}> Continue with phone number </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.phoneButton}>
          <AntDesign name="google" color="white" size={24}/>
          <Text style={styles.phoneButtonText}> Continue with phone number </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.phoneButton}>
          <MaterialIcons name="facebook" color="white" size={24}/>
          <Text style={styles.phoneButtonText}> Continue with Facebook </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginTitle: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },
  loginButton: {
    backgroundColor: '#1DB954',
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 25,
  },
  phoneButton: {
    backgroundColor: '#131624',
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    marginVertical: 10,
    borderWidth: 0.8,
    borderColor: '#C0C0C0',
    width: 300,
    borderRadius: 25,
    alignItems: 'center',
  },
  phoneButtonText: {
    color: 'white',
    textAlign: 'center',
    flex: 1,
  },
});
