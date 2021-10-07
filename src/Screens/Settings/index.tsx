/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SectionList, Text, TouchableOpacity, View} from 'react-native';
import PodcastPlayer from '../../components/PlayerSmall';
import SettingsItem from './SettingsItem';
import styles from './styles';

const DATA = [
  {
    title: 'LIST VIEW',
    data: [{text: 'Compact'}, {text: 'Cards'}],
  },
  {
    title: 'SORT BY',
    data: [
      {text: 'Unplayed on top'},
      {text: 'Newest on top'},
      {text: 'Alphabetically'},
    ],
  },
  {
    title: 'AVAILABLE PODCASTS',
    data: [
      {
        text: 'Podcast Title',
        image: require('../../images/podcast-image-1.png'),
      },
      {
        text: 'Overcome issues to meet key milestones',
        image: require('../../images/podcast-image-2.png'),
      },
      {
        text: 'Focus on the bandwidth',
        image: require('../../images/podcast-image-3.png'),
      },
      {
        text: 'Sell like it’s going out of fashion',
        image: require('../../images/podcast-image-4.png'),
      },
    ],
  },
];

const Settings = () => (
  <View style={{flex: 1}}>
    <View style={{flex: 1}}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.text + index}
        renderItem={({item}) => <SettingsItem item={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.itemTitle}>{title}</Text>
        )}
        ListFooterComponent={
          <>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 30,
                marginHorizontal: 30,
                marginBottom: 355,
                backgroundColor: '#D6DCEA',
                height: 50,
              }}>
              <Text style={{color: '#536183', fontWeight: '700', fontSize: 20}}>
                SAVE
              </Text>
            </TouchableOpacity>
          </>
        }
      />
    </View>
    <View>
      <PodcastPlayer />
    </View>
  </View>
);

export default Settings;
