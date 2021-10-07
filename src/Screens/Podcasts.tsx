import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import BottomTabBar from '../navigation/BottomTabBar';

import AccountTab from './AccountTab';
import LibraryTab from './LibraryTab';
import ListenNowTab from './ListenNowTab';

const TabNavigator = createBottomTabNavigator();

export const Podcasts = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
      initialRouteName="Library"
      tabBar={props => <BottomTabBar {...props} />}>
      <TabNavigator.Screen name="Listen Now" component={ListenNowTab} />
      <TabNavigator.Screen name="Library" component={LibraryTab} />
      <TabNavigator.Screen name="Account" component={AccountTab} />
    </TabNavigator.Navigator>
  );
};

export default Podcasts;
