import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

export default function App() {
  return (
    <View style={customsStyle.mainContainer}>
      <StatusBar backgroundColor={'#2B4865'} />
      <Text>Hello World</Text>
    </View>
  );
}

const customsStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#002B5B',
  },
});
