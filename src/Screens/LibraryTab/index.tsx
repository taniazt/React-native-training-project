import React from 'react';
import {Image, ScrollView, TouchableOpacity} from 'react-native';

import {Text, View} from 'react-native';
import PodcastPlayer from '../../components/PlayerSmall';
import Podcast from './Podcast';
import styles from './styles';
import PodcastCompact from './PodcastCompact';

import {useSelector} from 'react-redux';

import {IconSettings} from '../../images';
import {selectIsCompact} from '../../store/selectors';

const podcastInfo = [
  {title: 'Podcast Title', text: '12 unplayed episodes'},
  {
    title: 'Overcome issues to meet key milestones',
    text: '2 unplayed episodes',
  },
  {title: 'Focus on the bandwidth', text: '0 unplayed episodes'},
];

const LibraryTab = ({navigation}: {navigation: any}) => {
  const selectedView = useSelector(selectIsCompact);

  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>All Podcasts</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          style={styles.headerIcon}>
          <Image source={IconSettings} />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}>
        {selectedView === 'Cards'
          ? podcastInfo.map(item => (
              <Podcast key={item.title} title={item.title} text={item.text} />
            ))
          : podcastInfo.map(item => (
              <PodcastCompact
                key={item.title}
                title={item.title}
                text={item.text}
              />
            ))}
      </ScrollView>
      <PodcastPlayer />
    </>
  );
};

export default LibraryTab;
