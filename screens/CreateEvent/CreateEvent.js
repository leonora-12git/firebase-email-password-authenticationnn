import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const CreateEventPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const handleDescriptionChange = (text) => {
    setDescription(text);
  };

  const handlePhotoUpload = () => {
    // Your logic for uploading a photo goes here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Event</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          onChangeText={handleTitleChange}
          value={title}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          onChangeText={handleDescriptionChange}
          value={description}
        />
        <TouchableOpacity style={styles.photoButton} onPress={handlePhotoUpload}>
          <Text style={styles.photoButtonText}>Upload Photo</Text>
        </TouchableOpacity>
        {photo && (
          <Image source={{ uri: photo }} style={styles.photoPreview} />
        )}
      </View>
      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>Create Event</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  photoButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 20,
  },
  photoButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  photoPreview: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  createButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CreateEventPage;
