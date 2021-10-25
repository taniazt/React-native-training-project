import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

type ButtonProps = {
  onPress: () => void;
  text: string;
};

const Button: FC<ButtonProps> = props => {
  const {onPress, text} = props;
  return (
    <TouchableOpacity style={styles.loginButton} onPress={onPress}>
      <Text style={styles.loginButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
