import React from 'react';
import {ImageBackground, Text} from 'react-native';
import welcomeStyles from './styles';
import {WelcomeImage} from '../../images';

const Welcome = ({text}: {text: String}) => {
  return (
    <ImageBackground
      source={WelcomeImage}
      style={welcomeStyles.welcomeContainer}>
      <Text style={welcomeStyles.welcomeText}>{text}</Text>
    </ImageBackground>
  );
};

export default Welcome;
