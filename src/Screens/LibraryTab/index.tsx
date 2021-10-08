import React from 'react';
import {Image, ScrollView, TouchableOpacity} from 'react-native';

import {Text, View} from 'react-native';
import PodcastPlayer from '../../components/PlayerSmall';
import Podcast from './Podcast';
import styles from './styles';
// import PodcastCompact from './PodcastCompact';

const LibraryTab = ({navigation}: {navigation: any}) => {
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
        <Podcast title="Podcast Title" text="12 unplayed episodes" />
        <Podcast
          title="Overcome issues to meet key milestones"
          text="2 unplayed episodes"
        />
        <Podcast title="Focus on the bandwidth" text="0 unplayed episodes" />
        {/* <PodcastCompact title="dfghjkl" text="hjk" /> */}
      </ScrollView>
      <PodcastPlayer />
    </>
  );
};

export default LibraryTab;
