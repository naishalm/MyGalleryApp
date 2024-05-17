import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const PictureViewer = () => {
    const navigation = useNavigation();
    const route = useRoute();
   
  
    console.log('images:', images); // add this line
  
    const handleBackPress = () => {
      navigation.goBack();
    };
  
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Text style={styles.backButtonText}>Back</Text>
          <TouchableOpacity onPress={() => navigation.navigate('PictureViewer', { images: item })}>
  <Image source={{ uri: item.image }} style={styles.image} />
</TouchableOpacity>
        </TouchableOpacity>
        {images && <Image source={{ uri: images.url }} style={styles.image} />}
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default PictureViewer;