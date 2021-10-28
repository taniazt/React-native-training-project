import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';

import {BgIcon, PlayIcon} from '../../images';

import styles from './styles';

const PodcastPlayer = ({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) => {
  return (
    <Pressable onPress={() => navigation.navigate('Player')}>
      <View style={styles.container}>
        <View style={styles.containerLeft}>
          <Image source={BgIcon} />
          <Text style={styles.text}>Podcast Title</Text>
        </View>
        <Image source={PlayIcon} />
      </View>
    </Pressable>
  );
};

export default PodcastPlayer;
