/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {Text, View} from 'react-native';

const Podcast = ({title, text}: {title: string; text: string}) => {
  return (
    <ImageBackground
      source={require('../images/welcome-image.png')}
      style={{
        marginHorizontal: 30,
        marginVertical: 15,
        padding: 30,
        height: 315,
        justifyContent: 'flex-end',
      }}
      imageStyle={{borderRadius: 12}}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: '700',
          color: '#39435B',
          marginBottom: 8,
        }}>
        {title}{' '}
        <Image
          source={require('../images/arrow-icon.png')}
          style={{paddingLeft: 11}}
        />
      </Text>
      <Text
        style={{
          fontSize: 18,
          color: '#39435B',
        }}>
        {text}
      </Text>
    </ImageBackground>
  );
};

export const PodcastPlayer = () => {
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
        borderTopColor: '#D6DCEA',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('../images/bg-icon.png')} />
        <Text style={{fontSize: 14, color: '#495574', marginLeft: 10}}>
          Podcast Title
        </Text>
      </View>
      <Image source={require('../images/play-icon.png')} />
    </View>
  );
};

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
          <Image source={require('../images/icon-settings.png')} />
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
      </ScrollView>
      <PodcastPlayer />
    </>
  );
};

export default LibraryTab;
