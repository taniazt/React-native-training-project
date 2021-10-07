/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, View} from 'react-native';

const PodcastPlayer = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 60,
        paddingLeft: 5,
        paddingRight: 22,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#D6DCEA',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('../../images/bg-icon.png')} />
        <Text style={{fontSize: 14, color: '#495574', marginLeft: 10}}>
          Podcast Title
        </Text>
      </View>
      <Image source={require('../../images/play-icon.png')} />
    </View>
  );
};

export default PodcastPlayer;
