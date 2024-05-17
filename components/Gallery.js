import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PictureViewer from './PictureViewer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Gallery = () => {
  const navigation = useNavigation();
  const images = [
    { id: 1, uri: require('../assets/images/image1.jpg'), caption: 'Image 1' },
    { id: 2, uri: require('../assets/images/image2.jpg'), caption: 'Image 2' },
    { id: 3, uri: require('../assets/images/image3.jpg'), caption: 'Image 3' },
    { id: 4, uri: require('../assets/images/image4.jpg'), caption: 'Image 4' },
    { id: 5, uri: require('../assets/images/image5.jpg'), caption: 'Image 5' },
    { id: 6, uri: require('../assets/images/image6.jpg'), caption: 'Image 6' },
    { id: 1, uri: require('../assets/images/image1.jpg'), caption: 'Image 1' },
    { id: 2, uri: require('../assets/images/image2.jpg'), caption: 'Image 2' },
    { id: 3, uri: require('../assets/images/image3.jpg'), caption: 'Image 3' },
    { id: 4, uri: require('../assets/images/image4.jpg'), caption: 'Image 4' },
    { id: 5, uri: require('../assets/images/image5.jpg'), caption: 'Image 5' },
    { id: 6, uri: require('../assets/images/image6.jpg'), caption: 'Image 6' },
    { id: 2, uri: require('../assets/images/image2.jpg'), caption: 'Image 2' },
    { id: 4, uri: require('../assets/images/image4.jpg'), caption: 'Image 4' },
    { id: 1, uri: require('../assets/images/image1.jpg'), caption: 'Image 1' }
    // Add more images here
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.galleryItem}
      onPress={() => navigation.navigate('PictureViewer', { imageUri: item.uri, caption: item.caption })}
    >
      <Image source={item.uri} style={styles.thumbnail} />
      <Text style={styles.caption}>{item.caption}</Text>
      <Icon name="eye" size={20} color="#000" style={styles.icon} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
        position: 'absolute',
        top: 5,
        right: 5,
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  galleryItem: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
  },
  thumbnail: {
    width: 100,
    height: 100,
  },
  caption: {
    marginTop: 5,
    fontSize: 12,
  },
});

export default Gallery;