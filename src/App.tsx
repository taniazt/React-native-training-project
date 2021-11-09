/* eslint-disable react-native/no-inline-styles */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {AuthStack} from './navigation/AuthStack';
import {PodcastsStack} from './navigation/PodcastsStack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Authorization"
          screenOptions={() => ({
            headerShown: false,
          })}>
          <Stack.Screen name="Authorization" component={AuthStack} />
          <Stack.Screen name="Podcasts" component={PodcastsStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
