/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Welcome} from './Login';

const Verification = ({navigation}: {navigation: any}) => {
  return (
    <View style={verificationStyles.verificationContainer}>
      <View style={verificationStyles.verificationTextContainer}>
        <Text style={verificationStyles.verificationText}>
          We’ve sent you an email to help you log in to your account. The email
          will contain your “Magic Link” that once you click on it will grant
          you access to our App.
        </Text>
      </View>
      <TouchableOpacity
        style={verificationStyles.verificationButton}
        onPress={() => navigation.navigate('Podcasts')}>
        <Text style={verificationStyles.verificationButtonText}>
          Please check your email to proceed
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const MagicLink = ({navigation}: {navigation: any}) => {
  return (
    <View style={{flex: 1}}>
      <Welcome text="Your “Magic Link” is on it’s way..." />
      <Verification navigation={navigation} />
    </View>
  );
};

const verificationStyles = StyleSheet.create({
  verificationContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  verificationTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  verificationText: {
    color: '#39435B',
    fontSize: 16,
    lineHeight: 22,
    alignSelf: 'center',
    paddingHorizontal: 45,
  },
  verificationButton: {
    backgroundColor: '#39435B',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verificationButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default MagicLink;
