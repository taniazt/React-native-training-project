import moment from 'moment';
import React from 'react';
import {Image, Text, View} from 'react-native';

import {EpisodeArrow} from '../../../images';

import styles from './styles';

const Episode = ({
  title,
  number,
  date,
  about,
}: {
  title: string;
  number: number;
  date: string;
  about: string;
}) => {
  const episodeDate = moment(date).format('DD MMMM YYYY');

  return (
    <View style={styles.episodeContainer}>
      <View style={styles.episodeBlock}>
        <View style={styles.episodeDot} />
        <View>
          <Text style={styles.episodeTitle}>
            {number}: {title}
          </Text>
          <Text style={styles.episodeDate}>{episodeDate}</Text>
          <Text style={styles.episodeText}>{about}</Text>
        </View>
      </View>
      <Image source={EpisodeArrow} style={styles.episodeArrow} />
    </View>
  );
};

export default Episode;
