import React, {useState} from 'react';
import {ImageBackground, Pressable, ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {PlayerBg} from '../../images';
import {selectedPodcastId, selectPodcastsList} from '../../store/selectors';

import Episode from './Episode';
import styles from './styles';

const Episodes = () => {
  const [selected, setSelected] = useState(true);

  const onPressHandle = (param: boolean) => {
    setSelected(param);
  };

  const podcastsList = useSelector(selectPodcastsList);
  const selectedId = useSelector(selectedPodcastId);

  const selectedPodcast = podcastsList.find(
    podcast => podcast.podcastId === selectedId,
  );

  return (
    <>
      <ImageBackground source={PlayerBg} style={styles.podcastContainer}>
        <Text style={styles.podcastTitle}>{selectedPodcast?.title}</Text>
        <Text style={styles.podcastText}>{selectedPodcast?.about}</Text>
      </ImageBackground>
      <View style={styles.toggleContainer}>
        <Pressable
          onPress={() => onPressHandle(true)}
          style={selected ? styles.selectedButton : styles.nonSelectedButton}>
          <Text
            style={
              selected
                ? styles.selectedButtonText
                : styles.nonSelectedButtonText
            }>
            UNPLAYED
          </Text>
        </Pressable>

        <Pressable
          onPress={() => onPressHandle(false)}
          style={!selected ? styles.selectedButton : styles.nonSelectedButton}>
          <Text
            style={
              !selected
                ? styles.selectedButtonText
                : styles.nonSelectedButtonText
            }>
            ALL
          </Text>
        </Pressable>
      </View>
      <ScrollView>
        {selectedPodcast?.episodes.map(episode => (
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
