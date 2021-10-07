import React from 'react';
import {ImageBackground, Text} from 'react-native';
import welcomeStyles from './styles';

const Welcome = ({text}: {text: String}) => {
  return (
    <ImageBackground
      source={require('../../images/welcome-image.png')}
      style={welcomeStyles.welcomeContainer}>
      <Text style={welcomeStyles.welcomeText}>{text}</Text>
    </ImageBackground>
  );
};

export default Welcome;
