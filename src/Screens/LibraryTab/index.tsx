import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import PodcastPlayer from '../../components/PlayerSmall';
import {IconSettings} from '../../images';
import {selectIsCompact, selectPodcastsList} from '../../store/selectors';

import Podcast from './Podcast';
import PodcastCompact from './PodcastCompact';
import styles from './styles';

const LibraryTab = ({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) => {
  const selectedView = useSelector(selectIsCompact);
  const podcastsList = useSelector(selectPodcastsList);

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
          ? podcastsList.map(item => (
              <Podcast
                key={item.podcastId}
                title={item.title}
                text={item.unplayed}
                navigation={navigation}
                id={item.podcastId}
              />
            ))
          : podcastsList.map(item => (
              <PodcastCompact
                key={item.podcastId}
                title={item.title}
                text={item.unplayed}
                navigation={navigation}
                id={item.podcastId}
              />
            ))}
      </ScrollView>
      <PodcastPlayer navigation={navigation} />
    </>
  );
};

export default LibraryTab;
