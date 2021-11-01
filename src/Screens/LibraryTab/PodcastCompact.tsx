import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {BgIcon, ArrowIcon} from '../../images';
import {handleSelectedPodcastId} from '../../store/podcastSlice';

import styles from './styles';

const PodcastCompact = ({
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
      <View style={styles.compactContainer}>
        <View style={styles.containerLeft}>
          <Image source={BgIcon} style={styles.compactImage} />
          <View style={styles.textContainer}>
            <Text style={styles.compactTitle}>{title}</Text>
            <Text style={styles.compactText}>{text}</Text>
          </View>
        </View>
        <Image source={ArrowIcon} style={styles.compactIcon} />
      </View>
    </Pressable>
  );
};

export default PodcastCompact;
