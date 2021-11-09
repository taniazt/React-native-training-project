/* eslint-disable react-native/no-inline-styles */
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomIcon from '../../CustomIcon.js';

export type pressedTabType = 'Listen Now' | 'Library' | 'Account';

const BottomTabBar: React.FC<BottomTabBarProps> = ({navigation}) => {
  const tabs: {
    icon: JSX.Element;
    iconActive: JSX.Element;
    label: pressedTabType;
    route: string;
  }[] = [
    {
      icon: <FeatherIcon name="play-circle" size={25} color="#c2c2c2" />,
      iconActive: <FeatherIcon name="play-circle" size={25} color="#495574" />,
      label: 'Listen Now',
      route: 'Listen Now',
    },
    {
      icon: (
        <CustomIcon name="library-inactive-icon" size={25} color="#c2c2c2" />
      ),
      iconActive: (
        <CustomIcon name="library-active-icon" size={25} color="#495574" />
      ),
      label: 'Library',
      route: 'Library',
    },
    {
      icon: (
        <MaterialCommunityIcon
          name="account-circle-outline"
          size={25}
          color="#c2c2c2"
        />
      ),
      iconActive: (
        <MaterialCommunityIcon
          name="account-circle-outline"
          size={25}
          color="#495574"
        />
      ),
      label: 'Account',
      route: 'Account',
    },
  ];

  const [isActive, setIsActive] = useState('Library');

  const handleActiveTab = (tab: pressedTabType) => {
    setIsActive(tab);
  };

  const isTabActive = (type: pressedTabType) => type === isActive;

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
      }}>
      {tabs.map(item => {
        return (
          <TouchableOpacity
            key={item.route}
            onPress={() => {
              handleActiveTab(item.label);
              navigation.navigate(item.route);
            }}>
            <View style={{alignItems: 'center'}}>
              {isTabActive(item.label) ? item.iconActive : item.icon}
              <Text
                style={{
                  color: `${isTabActive(item.label) ? '#495574' : '#c2c2c2'}`,
                }}>
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
