import React, {useState} from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';

import {PlayerBg} from '../../images';
import Episode from './Episode';

import styles from './styles';

const Episodes = () => {
  const [selected, setSelected] = useState(true);

  const onPressHandle = (param: boolean) => {
    setSelected(param);
  };

  return (
    <>
      <ImageBackground source={PlayerBg} style={styles.podcastContainer}>
        <Text style={styles.podcastTitle}>Podcast Title</Text>
        <Text style={styles.podcastText}>
          About Podcast, amet minim mollit non deserunt ullamco est sit aliqua
          dolor do amet sint. Velit officia consequat duis enim velit mollit
          ...more
        </Text>
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
      <Episode />
    </>
  );
};

export default Episodes;
