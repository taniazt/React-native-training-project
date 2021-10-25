import React from 'react';
import {Text, View} from 'react-native';

import Button from '../../components/Button';

import styles from './styles';

const Verification = ({navigation}: {navigation: any}) => {
  const handleOnPress = () => navigation.navigate('Podcasts');

  return (
    <View style={styles.verificationContainer}>
      <View style={styles.verificationTextContainer}>
        <Text style={styles.verificationText}>
          We’ve sent you an email to help you log in to your account. The email
          will contain your “Magic Link” that once you click on it will grant
          you access to our App.
        </Text>
      </View>
      <Button
        onPress={handleOnPress}
        text="Please check your email to proceed"
      />
    </View>
  );
};

export default Verification;
