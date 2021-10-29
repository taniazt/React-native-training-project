import moment from 'moment';
import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

const Episode = () => {
  const date = moment().format('DD MMMM YYYY');

  return (
    <View style={styles.episodeContainer}>
      <View style={styles.episodeBlock}>
        <View style={styles.episodeDot} />
        <View>
          <Text style={styles.episodeTitle}>Podcast Title</Text>
          <Text style={styles.episodeDate}>{date}</Text>
          <Text style={styles.episodeText}>
            About Podcast, amet minim mollit non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim velit mollit
            ...more
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Episode;
