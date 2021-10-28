import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';

import Welcome from '../../components/Welcome';

import LoginBlock from './LoginBlock';
import styles from './styles';

const Login = ({navigation}: {navigation: NavigationProp<ParamListBase>}) => {
  return (
    <View style={styles.container}>
      <Welcome text="Welcome, enter your email below to get started..." />
      <LoginBlock navigation={navigation} />
    </View>
  );
};

export default Login;
