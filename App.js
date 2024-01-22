import React from 'react';
import { useState } from 'react';
import { Alert, Modal, Text, Pressable, View } from 'react-native';
import styles from './Styles';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  }

  const closeModal = () => {
    Alert.alert('Modal has been closed.');
    setModalVisible(!modalVisible);
  }

  return (
    <View style={styles.centeredView}>
      <Modal animationType='slide' transparent={true} visible={modalVisible} onRequestClose={closeModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is modal...</Text>
            <Pressable onPress={closeModal} >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable onPress={openModal} >
        <Text>Show modal message</Text>
      </Pressable>
    </View>
  );
}


