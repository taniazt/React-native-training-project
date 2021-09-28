/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export const Welcome = ({text}: {text: String}) => {
  return (
    <ImageBackground
      source={require('../images/welcome-image.png')}
      style={welcomeStyles.welcomeContainer}>
      <Text style={welcomeStyles.welcomeText}>{text}</Text>
    </ImageBackground>
  );
};

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

const Login = ({navigation}: {navigation: any}) => {
  return (
    <View style={{flex: 1}}>
      <Welcome text="Welcome, enter your email below to get started..." />
      <LoginBlock navigation={navigation} />
    </View>
  );
};

const welcomeStyles = StyleSheet.create({
  welcomeContainer: {
    flex: 2,
    paddingLeft: 45,
    paddingRight: 53,
    paddingBottom: 37,
    justifyContent: 'flex-end',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: '700',
    color: '#39435B',
  },
});

const loginStyles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    padding: 30,
    justifyContent: 'flex-end',
  },
  loginInput: {
    height: 50,
    backgroundColor: '#F5F6FA',
    borderWidth: 1,
    borderColor: '#D6DCEA',
    borderRadius: 3,
    marginBottom: 30,
    marginTop: 9,
  },
  loginButton: {
    backgroundColor: '#39435B',
    borderRadius: 4,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default Login;
