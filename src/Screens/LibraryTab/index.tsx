/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, ScrollView, TouchableOpacity} from 'react-native';

import {Text, View} from 'react-native';
import PodcastPlayer from '../../components/PlayerSmall';
import Podcast from './Podcast';
// import PodcastCompact from './PodcastCompact';

const LibraryTab = ({navigation}: {navigation: any}) => {
  return (
    <>
      <View
        style={{
          justifyContent: 'center',
          backgroundColor: '#495574',
          height: 55,
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: '600', color: '#FFFFFF', fontSize: 16}}>
          All Podcasts
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          style={{
            position: 'absolute',
            right: 18,
            top: 18,
          }}>
          <Image source={require('../../images/icon-settings.png')} />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#E5E5E5',
          paddingTop: 15,
        }}
        contentContainerStyle={{paddingBottom: 102}}>
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
