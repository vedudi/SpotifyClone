import {StyleSheet} from 'react-native';
import React from 'react';
import Navigation from './src/navigation/Routes';
import {AlbumsProvider} from './src/context/AlbumsContext';
import {ArtistsProvider} from './src/context/ArtistContext';
import {ProfileProvider} from './src/context/ProfileContext';

const App = () => {
  return (
    <>
      <ProfileProvider>
        <ArtistsProvider>
          <AlbumsProvider>
            <Navigation />
          </AlbumsProvider>
        </ArtistsProvider>
      </ProfileProvider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
