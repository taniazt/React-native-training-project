import React from 'react';
import {Image, ImageBackground, Text} from 'react-native';

import {WelcomeImage, ArrowIcon} from '../../images';

import styles from './styles';

const Podcast = ({title, text}: {title: string; text: string}) => {
  return (
    <ImageBackground
      source={WelcomeImage}
      style={styles.podcastContainer}
      imageStyle={styles.podcastImage}>
      <Text style={styles.podcastTitle}>
        {title} <Image source={ArrowIcon} style={styles.podcastIcon} />
      </Text>
      <Text style={styles.podcastText}>{text}</Text>
    </ImageBackground>
  );
};

export default Podcast;
