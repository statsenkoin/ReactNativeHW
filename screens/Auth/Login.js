// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function Login({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text
//         style={styles.text}
//         onPress={() => navigation.navigate('Registration')}>
//         Login логін
//       </Text>
//       {/* <StatusBar style="auto" /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontFamily: 'Lobster_400Regular',
//   },
// });

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

const initialData = {
  login: '',
  email: '',
  password: '',
  // avatar: null,
  avatar: './assets/avatar.png',
};

export default function Login({ navigation }) {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [credentials, setCredentials] = useState(initialData);

  const hideKeyboard = () => {
    setIsKeyboardVisible(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    hideKeyboard();
    console.log('credentials :>> ', credentials);
    setCredentials(initialData);
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/background.png')}
          style={styles.background}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              marginBottom: isKeyboardVisible ? -190 : 0,
            }}>
            <View style={styles.formContainer}>
              <View style={styles.form}>
                <Text style={styles.formTitle}>Увійти</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Адреса електронної пошти"
                  onFocus={() => setIsKeyboardVisible(true)}
                  onSubmitEditing={() => setIsKeyboardVisible(false)}
                  onChangeText={(value) => setCredentials(value)}
                  value={credentials.email}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Пароль"
                  //   secureTextEntry={true}
                  onFocus={() => setIsKeyboardVisible(true)}
                  onSubmitEditing={() => setIsKeyboardVisible(false)}
                  onChangeText={(value) => setCredentials(value)}
                  value={credentials.password}
                />
                <TouchableOpacity activeOpacity={0.5} onPress={handleSubmit}>
                  <Text style={styles.button}>Увійти</Text>
                </TouchableOpacity>
                <Text
                  style={styles.text}
                  onPress={() => navigation.navigate('Registration')}>
                  Немає аккаунта? Зареєструватися
                </Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#eaeaea',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  formContainer: {
    backgroundColor: '#ffffff',
    // backgroundColor: '#ffffffdd',

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarWrap: {
    alignSelf: 'center',
    marginTop: -60,
    width: 120,
    height: 120,
  },
  avatar: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f6f6f6',
    borderRadius: 16,
  },
  avatarAdd: {
    position: 'absolute',
    right: -12,
    bottom: 14,
    color: '#ff6c00',
    fontSize: 25,
  },
  avatarClose: {
    position: 'absolute',
    right: -12,
    bottom: 14,
    color: '#e8e8e8',
    fontSize: 25,
  },
  form: {
    marginHorizontal: 16,
  },
  formTitle: {
    marginTop: 32,
    marginBottom: 32,
    fontFamily: 'Lobster_400Regular',
    fontSize: 30,
    color: '#212121',
    alignSelf: 'center',
  },
  input: {
    height: 50,
    marginTop: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderStyle: 'solid',

    fontFamily: 'Roboto_400Regular',

    borderColor: '#e8e8e8',
    // borderColor: '#ccc',

    borderRadius: 8,
    backgroundColor: '#f6f6f6',
  },
  button: {
    padding: 13,
    marginTop: 43,
    height: 50,
    fontFamily: 'Roboto_400Regular',

    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#ff6c00',
    borderRadius: 100,
  },
  text: {
    marginTop: 16,
    marginBottom: 78,
    textAlign: 'center',
    fontFamily: 'Roboto_400Regular',

    fontSize: 16,
    color: '#1B4371',
  },
});
