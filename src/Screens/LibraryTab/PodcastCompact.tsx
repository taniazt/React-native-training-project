import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';

import {BgIcon, ArrowIcon} from '../../images';

import styles from './styles';

const PodcastCompact = ({
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
