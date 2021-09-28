/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

const ListenNowTab = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
        }}>
        Listen Now Tab
      </Text>
    </View>
  );
};

export default ListenNowTab;
