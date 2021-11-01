import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React from 'react';
import {Image, ImageBackground, Pressable, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import {WelcomeImage, ArrowIcon} from '../../images';
import {handleSelectedPodcastId} from '../../store/podcastSlice';

import styles from './styles';

const Podcast = ({
  title,
  text,
  id,
  navigation,
}: {
  title: string;
  text: string;
  id: number;
  navigation: NavigationProp<ParamListBase>;
}) => {
  const dispatch = useDispatch();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Episodes');
        dispatch(handleSelectedPodcastId({selectedPodcastId: id}));
      }}>
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
