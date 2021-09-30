import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomIcon from '../../CustomIcon.js';

import AccountTab from './AccountTab';
import LibraryTab from './LibraryTab';
import ListenNowTab from './ListenNowTab';

const Tab = createBottomTabNavigator();

const Podcasts = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = 'library-active-icon';

          if (route.name === 'Listen Now') {
            iconName = 'play-circle';
            return <FeatherIcon name={iconName} size={size} color={color} />;
          } else if (route.name === 'Account') {
            iconName = 'account-circle-outline';
            return (
              <MaterialCommunityIcon
                name={iconName}
                size={size}
                color={color}
              />
            );
          }

          return <CustomIcon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#5F596E',
        tabBarInactiveTintColor: 'grey',
      })}
      initialRouteName="Library">
      <Tab.Screen
        name="Listen Now"
        component={ListenNowTab}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Library"
        component={LibraryTab}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Account"
        component={AccountTab}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default Podcasts;
