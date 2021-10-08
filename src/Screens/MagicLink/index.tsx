import React from 'react';

import {View} from 'react-native';
import Welcome from '../../components/Welcome';
import styles from './styles';
import Verification from './Verification';

const MagicLink = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <Welcome text="Your “Magic Link” is on it’s way..." />
      <Verification navigation={navigation} />
    </View>
  );
};

export default MagicLink;
