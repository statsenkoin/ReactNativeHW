import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function CreatePostScreen() {
  return (
    <View style={styles.container}>
      <Text>Create Post Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
