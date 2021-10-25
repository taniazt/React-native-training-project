import React from 'react';
import {ImageBackground, Text} from 'react-native';

import {WelcomeImage} from '../../images';

import welcomeStyles from './styles';

const Welcome = ({text}: {text: string}) => {
  return (
    <ImageBackground
      source={WelcomeImage}
      style={welcomeStyles.welcomeContainer}>
      <Text style={welcomeStyles.welcomeText}>{text}</Text>
    </ImageBackground>
  );
};

export default Welcome;
