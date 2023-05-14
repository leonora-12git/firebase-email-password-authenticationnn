import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const EventBox = ({ title, description, publisher, likes, picture }) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const messageHandler = () => {
    navigation.navigate('Message', { username: publisher.name });
  };

  return (
    <>
      <TouchableOpacity style={styles.boxContainer} onPress={() => setModalVisible(true)}>
        <View style={styles.profileContainer}>
          <Image source={{ uri: publisher.image }} style={styles.profileImage} />
          <Text style={styles.publisherName}>{publisher.name}</Text>
        </View>
        <View style={styles.eventContainer}>
          <Image source={{ uri: picture }} style={styles.eventImage} />
          <View style={styles.eventDetails}>
            <Text style={styles.eventTitle}>{title}</Text>
            <Text style={styles.eventDescription}>{description}</Text>
          </View>
          <View style={styles.likeCommentContainer}>
            <TouchableOpacity style={styles.likeButton}>
              <Text style={styles.buttonText}>Like ({likes})</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.commentButton} onPress={messageHandler}>
              <Text style={styles.buttonText}>Message</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={{ uri: picture }} style={styles.modalImage} />
            <Text style={styles.modalTitle}>{title}</Text>
            <Text style={styles.modalDescription}>{description}</Text>
            <TouchableOpacity style={styles.messageButton}>
              <Text style={styles.messageButtonText}>Message</Text>
            </TouchableOpacity>
            <TouchableHighlight
              style={{ ...styles.modalCloseButton, backgroundColor: '#2196F3' }}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCloseButtonText}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </>
  );
};

const EventsScreen = () => {
  const events = [
    {
      title: 'Event 1',
      description: 'This is event 1',
      publisher: {
        name: 'John Doe',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
      likes: 10,
      comments: 5,
      picture: 'https://picsum.photos/200/300',
    },
    {
      title: 'Event 2',
      description: 'This is event 2',
      publisher: {
        name: 'Jane Doe',
        image: 'https://randomuser.me/api/portraits/women/1.jpg',
      },
      likes: 20,
      comments: 8,
      picture: 'https://picsum.photos/200/300',
    },
  ];

  return (
    <View style={styles.container}>
      {events.map((event, index) => (
        <EventBox
          key={index}
          title={event.title}
          description={event.description}
          publisher={event.publisher}
          likes={event.likes}
          comments={event.comments}
        />
      ))}


    </View>
  );
};

export default EventsScreen;
