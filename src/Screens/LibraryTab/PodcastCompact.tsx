import React from 'react';
import {Image, Text, View} from 'react-native';

import {BgIcon, ArrowIcon} from '../../images';

import styles from './styles';

const PodcastCompact = ({title, text}: {title: string; text: string}) => {
  return (
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
  );
};

export default PodcastCompact;
