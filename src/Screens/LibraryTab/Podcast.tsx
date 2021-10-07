/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, ImageBackground, Text} from 'react-native';

const Podcast = ({title, text}: {title: string; text: string}) => {
  return (
    <ImageBackground
      source={require('../../images/welcome-image.png')}
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
          source={require('../../images/arrow-icon.png')}
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

export default Podcast;
