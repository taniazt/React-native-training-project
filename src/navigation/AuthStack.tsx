import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Login from '../Screens/Login';
import MagicLink from '../Screens/MagicLink';

const Stack = createNativeStackNavigator();

export const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="MagicLink" component={MagicLink} />
  </Stack.Navigator>
);
