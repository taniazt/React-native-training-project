import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

const PodcastPlayer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <Image source={require('../../images/bg-icon.png')} />
        <Text style={styles.text}>Podcast Title</Text>
      </View>
      <Image source={require('../../images/play-icon.png')} />
    </View>
  );
};

export default PodcastPlayer;
