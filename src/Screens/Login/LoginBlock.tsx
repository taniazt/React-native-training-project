import React from 'react';
import {Text, TextInput, View} from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

const LoginBlock = ({navigation}: {navigation: any}) => {
  const handleOnPress = () => navigation.navigate('MagicLink');
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginLabel}>Email</Text>
      <TextInput style={styles.loginInput} />
      <Button onPress={handleOnPress} text="LOGIN" />
    </View>
  );
};

export default LoginBlock;
