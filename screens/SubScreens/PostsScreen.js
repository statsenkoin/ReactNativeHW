import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native';

export default function PostsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Posts Screen</Text>
      <Text style={styles.text2}>Для перевірки</Text>
      <Text style={styles.text3}>імпорту шрифтів</Text>

      <Button
        onPress={() => navigation.navigate('Map')}
        title="Map Screen"
        color="#841584"
      />
      <Button
        onPress={() => navigation.navigate('Comments')}
        title="Comments Screen"
        color="#841584"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    gap: 10,
  },
  text1: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 24,
  },
  text2: {
    fontFamily: 'Lobster_400Regular',
    fontSize: 26,
  },
  text3: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 20,
  },
});
