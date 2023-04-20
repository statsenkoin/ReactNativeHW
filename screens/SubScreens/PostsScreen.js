import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

// ===================================================
// const img = require('../../assets/avatar.png');
// const geo = `Ivano-Frankivs'k Region, Ukraine`;
const counter = 0;
// ===================================================

export default function PostsScreen({ route, navigation }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (route.params) {
      setPosts((prev) => [...prev, route.params]);
    }
    console.log('posts :>> ', posts);
  }, [route.params]);

  return (
    <View style={styles.container}>
      {/*  */}
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Post post={item} navigation={navigation} />}
      />
    </View>
  );
}

function Post({ post, navigation }) {
  return (
    <View style={styles.postContainer}>
      <Image source={{ uri: post.image }} style={styles.image} />
      <Text style={styles.title}>{post.title}</Text>
      <View style={styles.meta}>
        <TouchableOpacity
          style={styles.metaData}
          onPress={() => navigation.navigate('Comments')}>
          <Feather
            name="message-circle"
            size={24}
            color="#BDBDBD"
            style={{ transform: [{ scaleX: -1 }] }}
          />
          <Text style={styles.counter}>{counter}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.metaData}
          onPress={() => navigation.navigate('Map')}>
          <Feather name="map-pin" size={24} color="#BDBDBD" />
          <Text style={styles.geo}>{post.geo}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  postContainer: {
    marginTop: 32,
    marginHorizontal: 16,
  },
  image: {
    height: 240,
    width: '100%',
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
    marginBottom: 8,
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metaData: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#bdbdbd',
    marginLeft: 6,
  },
  geo: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
    textDecorationLine: 'underline',
    marginLeft: 3,
  },
});
