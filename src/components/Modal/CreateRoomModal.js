import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import TextInput from '../../TextInput';
import Button from '../../Button';

const CreateRoomModal = ({visible, onClose, onSend}) => {
  const [text, setText] = useState('');
  function handleSend() {
    if (!text) {
      return;
    }
    onSend(text);
    setText(null);
  }
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            placeholder="Oda İsmi giriniz"
            onChangeText={setText}
            multiline
          />
        </View>
        <Button text="Oluştur" onPress={handleSend} />
      </View>
    </Modal>
  );
};

export default CreateRoomModal;
const deviceSize = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    marginHorizontal: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: deviceSize.height / 3,
  },
  input_container: {
    flex: 1,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
