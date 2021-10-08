import React from 'react';
import {Image, ImageBackground, Text} from 'react-native';
import styles from './styles';

const Podcast = ({title, text}: {title: string; text: string}) => {
  return (
    <ImageBackground
      source={require('../../images/welcome-image.png')}
      style={styles.podcastContainer}
      imageStyle={styles.podcastImage}>
      <Text style={styles.podcastTitle}>
        {title}{' '}
        <Image
          source={require('../../images/arrow-icon.png')}
          style={styles.podcastIcon}
        />
      </Text>
      <Text style={styles.podcastText}>{text}</Text>
    </ImageBackground>
  );
};

export default Podcast;
