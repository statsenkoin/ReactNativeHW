import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Keyboard,
} from 'react-native';

import { Camera, CameraType } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function CreatePostScreen({ navigation }) {
  const [camera, setCamera] = useState(null);
  const [title, setTitle] = useState('Title');
  const [geo, setGeo] = useState('Location');
  const [image, setImage] = useState(null);

  const initialPostData = () => {
    setGeo('Location');
    setImage(null);
    setTitle('Title');
  };

  const takePhoto = async () => {
    const { uri } = await camera.takePictureAsync();
    setImage(uri);
  };

  const publishPost = () => {
    if (image) navigation.navigate('Posts', { image, geo, title });
  };

  console.log('post :>> ', { image, geo, title });

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Camera style={styles.camera} type={CameraType.back} ref={setCamera}>
            <TouchableOpacity style={styles.cameraButton} onPress={takePhoto}>
              <MaterialIcons
                style={styles.cameraIcon}
                name="camera-alt"
                size={24}
                color="#BDBDBD"
              />
            </TouchableOpacity>
          </Camera>
        )}
      </View>
      <Text
        style={styles.loadText}
        onPress={() => {
          setImage(null);
          Keyboard.dismiss();
        }}>
        {!image ? 'Завантажити фото' : 'Редагувати фото'}
      </Text>

      <View style={styles.inputWrap}>
        <TextInput
          style={styles.input}
          placeholder="Назва..."
          placeholderTextColor="#bdbdbd"
          inputMode="text"
          onChangeText={setTitle}
        />
      </View>
      <View style={styles.inputWrap}>
        <Feather name="map-pin" size={24} color="#bdbdbd" marginRight={4} />
        <TextInput
          style={styles.input}
          placeholder="Місцевість..."
          placeholderTextColor="#bdbdbd"
          inputMode="text"
          onChangeText={setGeo}
          inlineImageLeft="favicon.png"
        />
      </View>
      <TouchableOpacity activeOpacity={0.5} onPress={publishPost}>
        <Text
          style={image ? [styles.button, styles.buttonActive] : styles.button}>
          Публікувати
        </Text>
      </TouchableOpacity>
      <View style={styles.trashWrap}>
        <TouchableOpacity activeOpacity={0.5} onPress={initialPostData}>
          <Feather style={styles.trash} name="trash-2" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  imageWrapper: {
    height: '38%',
    marginTop: 32,
    borderColor: '#ffffffff',
    borderRadius: 8,
    borderWidth: 1,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  camera: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    backgroundColor: '#ffffff55',
    borderRadius: 30,
  },
  cameraIcon: {
    color: '#fff',
  },
  loadText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    color: '#bdbdbd',
    marginTop: 8,
    marginBottom: 16,
  },

  input: {
    height: 50,
    width: '100%',
    paddingVertical: 16,
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
  },
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 16,
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
  },
  button: {
    height: 50,
    padding: 13,
    marginTop: 32,
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    textAlign: 'center',
    color: '#bdbdbd',
    backgroundColor: '#F6F6F6',
    borderRadius: 30,
  },
  buttonActive: {
    backgroundColor: '#FF6C00',
    color: '#fff',
  },
  trashWrap: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  trash: {
    width: 70,
    height: 40,
    padding: 7,
    marginTop: 32,
    marginBottom: 16,
    textAlign: 'center',
    fontSize: 24,
    color: '#bdbdbd',
    alignSelf: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
  },
});
