import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import PodcastPlayer from '../../components/PlayerSmall';
import {IconSettings} from '../../images';
import {selectIsCompact} from '../../store/selectors';

import Podcast from './Podcast';
import PodcastCompact from './PodcastCompact';
import styles from './styles';

const podcastInfo = [
  {title: 'Podcast Title', text: '12 unplayed episodes'},
  {
    title: 'Overcome issues to meet key milestones',
    text: '2 unplayed episodes',
  },
  {title: 'Focus on the bandwidth', text: '0 unplayed episodes'},
];

const LibraryTab = ({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) => {
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
              <Podcast
                key={item.title}
                title={item.title}
                text={item.text}
                navigation={navigation}
              />
            ))
          : podcastInfo.map(item => (
              <PodcastCompact
                key={item.title}
                title={item.title}
                text={item.text}
                navigation={navigation}
              />
            ))}
      </ScrollView>
      <PodcastPlayer navigation={navigation} />
    </>
  );
};

export default LibraryTab;
