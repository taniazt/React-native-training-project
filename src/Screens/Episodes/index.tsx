import React, {useState} from 'react';
import {ImageBackground, Pressable, ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {PlayerBg} from '../../images';
import {selectedPodcastId, selectPodcastsList} from '../../store/selectors';

import Episode from './Episode';
import styles from './styles';
import {EpisodeType, selectedTabType} from './types';

const Episodes = () => {
  const [selectedTab, setSelectedTab] = useState<selectedTabType>('UNPLAYED');

  const onPressHandle = (param: selectedTabType) => {
    setSelectedTab(param);
  };

  const isSelected = (type: selectedTabType) => type === selectedTab;

  const podcastsList = useSelector(selectPodcastsList);
  const selectedId = useSelector(selectedPodcastId);

  const selectedPodcast = podcastsList.find(
    podcast => podcast.podcastId === selectedId,
  );

  const unplayedFilter = (episode: EpisodeType) =>
    isSelected('UNPLAYED') ? !episode.played : true;

  return (
    <>
      <ImageBackground source={PlayerBg} style={styles.podcastContainer}>
        <Text style={styles.podcastTitle}>{selectedPodcast?.title}</Text>
        <Text style={styles.podcastText}>{selectedPodcast?.about}</Text>
      </ImageBackground>
      <View style={styles.toggleContainer}>
        <Pressable
          onPress={() => onPressHandle('UNPLAYED')}
          style={
            isSelected('UNPLAYED')
              ? styles.selectedButton
              : styles.nonSelectedButton
          }>
          <Text
            style={
              isSelected('UNPLAYED')
                ? styles.selectedButtonText
                : styles.nonSelectedButtonText
            }>
            UNPLAYED
          </Text>
        </Pressable>

        <Pressable
          onPress={() => onPressHandle('ALL')}
          style={
            isSelected('ALL') ? styles.selectedButton : styles.nonSelectedButton
          }>
          <Text
            style={
              isSelected('ALL')
                ? styles.selectedButtonText
                : styles.nonSelectedButtonText
            }>
            ALL
          </Text>
        </Pressable>
      </View>
      <ScrollView>
        {selectedPodcast?.episodes.filter(unplayedFilter).map(episode => (
          <Episode
            key={episode.episodeNumber}
            title={episode.episodeTitle}
            number={episode.episodeNumber}
            date={episode.episodeDate}
            about={episode.episodeAbout}
          />
        ))}
      </ScrollView>
    </>
  );
};

export default Episodes;
