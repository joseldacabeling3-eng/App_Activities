import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

import Profile from './src/Profile';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.container}
        edges={['top', 'bottom']}
      >
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#f7f8fa"
        />

        <View style={styles.content}>
          <Profile />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8fa',
  },

  content: {
    flex: 1,
  },
});