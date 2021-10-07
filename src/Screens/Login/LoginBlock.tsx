/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import loginStyles from './styles';

const LoginBlock = ({navigation}: {navigation: any}) => {
  return (
    <View style={loginStyles.loginContainer}>
      <Text
        style={{
          color: '#536183',
          fontSize: 16,
        }}>
        Email
      </Text>
      <TextInput style={loginStyles.loginInput} />
      <TouchableOpacity
        style={loginStyles.loginButton}
        onPress={() => navigation.navigate('MagicLink')}>
        <Text style={loginStyles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginBlock;
