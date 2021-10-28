import moment from 'moment';
import React from 'react';
import {ImageBackground, Text} from 'react-native';

import {PlayerBg} from '../../images';

import styles from './styles';

const Player = ({title}: {title: string}) => {
  const date = moment().format('DD MMMM YYYY');
  return (
    <ImageBackground
      source={PlayerBg}
      style={styles.podcastContainer}
      imageStyle={styles.podcastImage}>
      <Text style={styles.podcastTitle}>{title}</Text>
      <Text style={styles.podcastText}>{date}</Text>
    </ImageBackground>
  );
};

export default Player;
