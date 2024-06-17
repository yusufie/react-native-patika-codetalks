import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import OdaButton from '../../components/OdaButton';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import parseContentData from '../../utils/parseContentData';
import CreateRoomModal from '../../components/Modal/CreateRoomModal';
import {useNavigation} from '@react-navigation/native';

const Odalar = () => {
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    database()
      .ref('rooms')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        parsedData = parseContentData(contentData || {});
        setContentList(parsedData);
      });
  }, []);

  function handleInputToogle() {
    setInputModalVisible(!inputModalVisible);
  }

  function handleSendContent(content) {
    handleInputToogle();
    sendContent(content);
  }

  function sendContent(content) {
    const userMail = auth().currentUser.email;
    const contentObject = {
      text: content,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
    };
    database().ref('rooms/').push(contentObject);
  }

  const navigation = useNavigation();
  const goRoom = item => {
    navigation.navigate('CustomOda', {roomName: item});
    // console.log('item', item);
  };
  const renderRoom = ({item}) => {
    return <OdaButton OdaTitle={item} onPress={() => goRoom(item)} />;
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={contentList}
          renderItem={renderRoom}
          contentContainerStyle={styles.flatListContent}
        />
        <CreateRoomModal
          visible={inputModalVisible}
          onClose={handleInputToogle}
          onSend={handleSendContent}
        />
      </View>
      <View style={styles.floating}>
        <FloatingButton icon="plus" onPress={handleInputToogle} />
      </View>
    </>
  );
};

export default Odalar;

const styles = StyleSheet.create({
  container: {
    flex: 5,
    margin: 10,
  },
  flatListContent: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Sığmayanları aşağı kaydır
    justifyContent: 'flex-start',
  },
  floating: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
