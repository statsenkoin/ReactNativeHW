// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        onPress={() => navigation.navigate('Registration')}>
        Login логін
      </Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Lobster_400Regular',
  },
});
