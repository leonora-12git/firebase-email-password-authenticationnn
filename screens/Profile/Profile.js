import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import styles from './styles';
import { auth } from '../../firebase';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigation = useNavigation()

  const handleSignOut = () =>
  {
    auth
    .signOut()
    .then(() => {
      navigation.replace("HomeScreen")
    })
    .catch(error => alert(error.message))
  } 

  const events = [
    {
      title: 'Event 1',
      description: 'This is event 1',
      date: 'May 20, 2023',
    },
    {
      title: 'Event 2',
      description: 'This is event 2',
      date: 'June 1, 2023',
    },
    {
      title: 'Event 3',
      description: 'This is event 3',
      date: 'July 15, 2023',
    },
  ];

  const handleEventPress = (event) => {
    setSelectedEvent(event);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={styles.profileImage} />
        <Text style={styles.username}>John Doe</Text>
        <TouchableOpacity style={styles.messageButton}>
          <Text style={styles.messageButtonText}>Message</Text>
          <TouchableOpacity onPress={handleSignOut} style={styles.messageButton}><Text>Sign Out</Text></TouchableOpacity>
        </TouchableOpacity>
      </View>
      <View style={styles.eventsContainer}>
        <Text style={styles.eventsHeader}>Events Created</Text>
        {events.map((event, index) => (
          <TouchableOpacity key={index} style={styles.eventBox} onPress={() => handleEventPress(event)}>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.eventDate}>{event.date}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {selectedEvent && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
            setSelectedEvent(null);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedEvent.title}</Text>
              <Text style={styles.modalDescription}>{selectedEvent.description}</Text>
              <TouchableOpacity style={styles.messageButton}>
                <Text style={styles.messageButtonText}>Message</Text>
              </TouchableOpacity>
              <TouchableHighlight
                style={{ ...styles.modalCloseButton, backgroundColor: '#2196F3' }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setSelectedEvent(null);
                }}
              >
                <Text style={styles.modalCloseButtonText}>Close</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default ProfileScreen