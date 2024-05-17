import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';

const Profile = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  const [country, setCountry] = useState('');

  const handleSave = async () => {
    if (!name || !email || !country) {
      alert('Please fill in all fields');
      return;
    }

    try {
      await AsyncStorage.setItem(
        'profile',
        JSON.stringify({ name, email, newsletter, country })
      );
      alert('Profile saved successfully');
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Error saving profile');
    }
  };

  const loadProfile = async () => {
    try {
      const profile = await AsyncStorage.getItem('profile');
      if (profile) {
        const { name, email, newsletter, country } = JSON.parse(profile);
        setName(name);
        setEmail(email);
        setNewsletter(newsletter);
        setCountry(country);
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  };

  React.useEffect(() => {
    loadProfile();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <Text style={styles.label}>Newsletter:</Text>
      <Switch value={newsletter} onValueChange={setNewsletter} />
      <Text style={styles.label}>Country:</Text>
      <Picker
        style={styles.input}
        selectedValue={country}
        onValueChange={setCountry}
      >
        <Picker.Item label="USA" value="USA" />
        <Picker.Item label="Canada" value="Canada" />
        <Picker.Item label="Mexico" value="Mexico" />
      </Picker>
      <Text style={styles.buttonText} onPress={handleSave}>
        Save
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Profile;