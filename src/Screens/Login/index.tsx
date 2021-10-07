/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View} from 'react-native';
import Welcome from '../../components/Welcome';
import LoginBlock from './LoginBlock';

const Login = ({navigation}: {navigation: any}) => {
  return (
    <View style={{flex: 1}}>
      <Welcome text="Welcome, enter your email below to get started..." />
      <LoginBlock navigation={navigation} />
    </View>
  );
};

export default Login;