import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import FeatherIcon from 'react-native-vector-icons/Feather';

const SettingsItem = ({
  item,
  isChecked,
  onPress,
}: {
  item: {text: string; image?: ImageSourcePropType};
  isChecked: boolean;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      {item.image && <Image style={styles.itemImage} source={item.image} />}
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
      <View style={styles.iconContainer}>
        {isChecked && <FeatherIcon name="check" size={18} color="#7584A8" />}
      </View>
    </TouchableOpacity>
  );
};

export default SettingsItem;
