import {StyleSheet, ActivityIndicator, Text, View} from 'react-native';
import React from 'react';

const Loader = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size={'large'} color={'#1DB954'} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
