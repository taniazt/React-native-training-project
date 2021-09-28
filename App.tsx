import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Screens/Login';
import MagicLink from './Screens/MagicLink';
import Podcasts from './Screens/Podcasts';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MagicLink" component={MagicLink} />
        <Stack.Screen name="Podcasts" component={Podcasts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
