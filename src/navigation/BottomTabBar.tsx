/* eslint-disable react-native/no-inline-styles */
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomIcon from '../../CustomIcon.js';

const BottomTabBar: React.FC<BottomTabBarProps> = ({navigation}) => {
  const tabs = [
    {
      icon: <FeatherIcon name="play-circle" size={25} color="grey" />,
      iconActive: <FeatherIcon name="play-circle" size={25} color="#5F596E" />,
      label: 'Listen Now',
      route: 'Listen Now',
    },
    {
      icon: <CustomIcon name="library-inactive-icon" size={25} color="grey" />,
      iconActive: (
        <CustomIcon name="library-active-icon" size={25} color="#5F596E" />
      ),
      label: 'Library',
      route: 'Library',
    },
    {
      icon: (
        <MaterialCommunityIcon
          name="account-circle-outline"
          size={25}
          color="grey"
        />
      ),
      iconActive: (
        <MaterialCommunityIcon
          name="account-circle-outline"
          size={25}
          color="#5F596E"
        />
      ),
      label: 'Account',
      route: 'Account',
    },
  ];

  const [isActive, setIsActive] = useState(false);

  const handleActiveTab = () => {
    setIsActive(true);
  };

  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      {tabs.map(item => {
        return (
          <TouchableOpacity
            key={item.route}
            onPress={() => {
              handleActiveTab();
              navigation.navigate(item.route);
            }}>
            <View>
              {isActive ? item.iconActive : item.icon}
              <Text style={{color: `${isActive ? 'grey' : 'red'}`}}>
                {item.label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabBar;
