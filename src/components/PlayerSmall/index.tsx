import React from 'react';
import {Image, Text, View} from 'react-native';

import {BgIcon, PlayIcon} from '../../images';

import styles from './styles';

const PodcastPlayer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <Image source={BgIcon} />
        <Text style={styles.text}>Podcast Title</Text>
      </View>
      <Image source={PlayIcon} />
    </View>
  );
};

export default PodcastPlayer;
