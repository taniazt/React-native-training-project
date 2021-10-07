/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View} from 'react-native';
import Welcome from '../../components/Welcome';
import Verification from './Verification';

const MagicLink = ({navigation}: {navigation: any}) => {
  return (
    <View style={{flex: 1}}>
      <Welcome text="Your “Magic Link” is on it’s way..." />
      <Verification navigation={navigation} />
    </View>
  );
};

export default MagicLink;
