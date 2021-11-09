import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import AccountTab from '../Screens/AccountTab';
import Episodes from '../Screens/Episodes';
import LibraryTab from '../Screens/LibraryTab';
import PLayer from '../Screens/Player';
import Settings from '../Screens/Settings';

import BottomTabBar from './BottomTabBar';

const TabNavigator = createBottomTabNavigator();

export const Podcasts = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
      initialRouteName="Library"
      tabBar={props => <BottomTabBar {...props} />}>
      <TabNavigator.Screen name="Listen Now" component={PLayer} />
      <TabNavigator.Screen name="Library" component={LibraryTab} />
      <TabNavigator.Screen name="Account" component={AccountTab} />
    </TabNavigator.Navigator>
  );
};

const Stack = createNativeStackNavigator();

export const PodcastsStack = () => (
  <Stack.Navigator initialRouteName="PodcastsPage">
    <Stack.Screen name="PodcastsPage" component={Podcasts} />
    <Stack.Screen name="Settings" component={Settings} />
    <Stack.Screen name="Episodes" component={Episodes} />
  </Stack.Navigator>
);
