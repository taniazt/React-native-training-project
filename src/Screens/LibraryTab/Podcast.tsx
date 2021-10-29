import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React from 'react';
import {Image, ImageBackground, Pressable, Text} from 'react-native';

import {WelcomeImage, ArrowIcon} from '../../images';

import styles from './styles';

const Podcast = ({
  title,
  text,
  navigation,
}: {
  title: string;
  text: string;
  navigation: NavigationProp<ParamListBase>;
}) => {
  return (
    <Pressable onPress={() => navigation.navigate('Episodes')}>
      <ImageBackground
        source={WelcomeImage}
        style={styles.podcastContainer}
        imageStyle={styles.podcastImage}>
        <Text style={styles.podcastTitle}>
          {title} <Image source={ArrowIcon} style={styles.podcastIcon} />
        </Text>
        <Text style={styles.podcastText}>{text}</Text>
      </ImageBackground>
    </Pressable>
  );
};

export default Podcast;
