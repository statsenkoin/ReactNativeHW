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
  Image,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

const initialData = {
  login: '',
  email: '',
  password: '',
  // avatar: null,
  avatar: require('../../assets/avatar.png'),
};

export default function Registration({ navigation }) {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [credentials, setCredentials] = useState(initialData);
  const [loginOnFocus, setLoginOnFocus] = useState(false);
  const [emailOnFocus, setEmailOnFocus] = useState(false);
  const [passwordOnFocus, setPasswordOnFocus] = useState(false);
  const [isPasswordSecured, setIsPasswordSecured] = useState(true);

  // temporary
  const [isAvatar, setIsAvatar] = useState(false);

  const hideKeyboard = () => {
    setIsKeyboardVisible(false);
    Keyboard.dismiss();
  };

  // navigation.navigate('Login')

  const handleSubmit = () => {
    hideKeyboard();
    console.log('credentials :>> ', credentials);
    navigation.navigate('Login', { screen: 'Posts' });
    setCredentials(initialData);
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/background.png')}
          style={styles.background}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              marginBottom: isKeyboardVisible ? -190 : 0,
            }}>
            <View style={styles.formContainer}>
              <View style={styles.form}>
                <View style={styles.avatarWrap}>
                  <Image
                    style={styles.avatar}
                    source={isAvatar ? credentials.avatar : null}
                  />
                  {isAvatar ? (
                    <AntDesign
                      name="closecircleo"
                      style={styles.avatarClose}
                      onPress={() => setIsAvatar(false)}
                    />
                  ) : (
                    <AntDesign
                      name="pluscircleo"
                      style={styles.avatarAdd}
                      onPress={() => setIsAvatar(true)}
                    />
                  )}
                </View>
                <Text style={styles.formTitle}>Реєстрація</Text>
                <TextInput
                  style={
                    loginOnFocus
                      ? [styles.input, styles.inputOnFocus]
                      : styles.input
                  }
                  placeholder="Логін"
                  placeholderTextColor="#bdbdbd"
                  onFocus={() => {
                    setIsKeyboardVisible(true);
                    setLoginOnFocus(true);
                  }}
                  onBlur={() => setLoginOnFocus(false)}
                  onSubmitEditing={() => setIsKeyboardVisible(false)}
                  onChangeText={(value) =>
                    setCredentials((prevData) => ({
                      ...prevData,
                      login: value,
                    }))
                  }
                  value={credentials.login}
                />
                <TextInput
                  style={
                    emailOnFocus
                      ? [styles.input, styles.inputOnFocus]
                      : styles.input
                  }
                  placeholder="Адреса електронної пошти"
                  placeholderTextColor="#bdbdbd"
                  onFocus={() => {
                    setIsKeyboardVisible(true);
                    setEmailOnFocus(true);
                  }}
                  onBlur={() => setEmailOnFocus(false)}
                  onSubmitEditing={() => setIsKeyboardVisible(false)}
                  onChangeText={(value) =>
                    setCredentials((prevData) => ({
                      ...prevData,
                      email: value,
                    }))
                  }
                  value={credentials.email}
                  inputMode="email"
                  keyboardType="email-address"
                />
                <View>
                  <TextInput
                    style={
                      passwordOnFocus
                        ? [styles.input, styles.inputOnFocus]
                        : styles.input
                    }
                    placeholder="Пароль"
                    placeholderTextColor="#bdbdbd"
                    secureTextEntry={isPasswordSecured}
                    onFocus={() => {
                      setIsKeyboardVisible(true);
                      setPasswordOnFocus(true);
                    }}
                    onBlur={() => setPasswordOnFocus(false)}
                    onSubmitEditing={() => setIsKeyboardVisible(false)}
                    onChangeText={(value) =>
                      setCredentials((prevData) => ({
                        ...prevData,
                        password: value,
                      }))
                    }
                    value={credentials.password}
                  />
                  <Text
                    style={styles.passwordSecured}
                    onPress={() => setIsPasswordSecured(!isPasswordSecured)}>
                    {isPasswordSecured ? 'Показати' : 'Приховати'}
                  </Text>
                </View>
                <TouchableOpacity activeOpacity={0.5} onPress={handleSubmit}>
                  <Text style={styles.button}>Зареєструватись</Text>
                </TouchableOpacity>
                <Text style={styles.text}>
                  Вже є аккаунт?{' '}
                  <Text
                    style={{ color: '#ff6c00' }}
                    onPress={() => navigation.navigate('Login')}>
                    Увійти
                  </Text>
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
    fontSize: 16,
    color: '#212121',

    borderColor: '#e8e8e8',
    // borderColor: '#ccc',

    borderRadius: 8,
    backgroundColor: '#f6f6f6',
  },
  inputOnFocus: {
    backgroundColor: '#fff',
    borderColor: '#ff6c00',
  },
  passwordSecured: {
    position: 'absolute',
    right: 16,
    top: 20,
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    color: '#1B4371',
    backgroundColor: 'transparent',
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
