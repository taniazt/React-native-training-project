import React from 'react';
import {Image, ScrollView, TouchableOpacity} from 'react-native';

import {Text, View} from 'react-native';
import PodcastPlayer from '../../components/PlayerSmall';
import Podcast from './Podcast';
import styles from './styles';
import PodcastCompact from './PodcastCompact';

import {useSelector} from 'react-redux';

const LibraryTab = ({navigation}: {navigation: any}) => {
  const selectedView = useSelector((state: any) => state.state.isCompact);

  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>All Podcasts</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          style={styles.headerIcon}>
          <Image source={require('../../images/icon-settings.png')} />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}>
        {selectedView === 'Cards' ? (
          <>
            <Podcast title="Podcast Title" text="12 unplayed episodes" />
            <Podcast
              title="Overcome issues to meet key milestones"
              text="2 unplayed episodes"
            />
            <Podcast
              title="Focus on the bandwidth"
              text="0 unplayed episodes"
            />
          </>
        ) : (
          <>
            <PodcastCompact title="Podcast Title" text="12 unplayed episodes" />
            <PodcastCompact
              title="Overcome issues to meet key milestones"
              text="0 unplayed episodes"
            />
            <PodcastCompact
              title="Focus on the bandwidth"
              text="2 unplayed episodes"
            />
          </>
        )}
      </ScrollView>
      <PodcastPlayer />
    </>
  );
};

export default LibraryTab;
