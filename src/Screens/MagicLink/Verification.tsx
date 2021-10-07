import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import verificationStyles from './styles';

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

export default Verification;
