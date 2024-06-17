import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import RoomTalksCard from '../../components/RoomTalksCard';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import parseContentData from '../../utils/parseContentData';
import ContentInputModal from '../../components/Modal/ContentInputModal';

const CustomOda = props => {
  const [customOdaData, setCustomOdaData] = useState(
    props.route.params.roomName,
  );

  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [contentList2, setContentList2] = useState([]);

  useEffect(() => {
    database()
      .ref(`rooms/${customOdaData.id}/${customOdaData.text}/`)
      .on('value', snapshot => {
        const contentData = snapshot.val();
        parsedData = parseContentData(contentData || {});
        setContentList2(parsedData);
      });
  }, []);

  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }
  function handleSendContent(content) {
    handleInputToggle();
    sendContent(content);
  }
  // console.log(customOdaData.text);
  function sendContent(content) {
    const userMail = auth().currentUser.email; // Kullanıcının login olup olmadığını kontrol eder
    const contentObject = {
      // Firebaseye kayıt edilirken olan obje
      text: content,
      username: userMail.split('@')[0], // mail adresinden @ işareti olan yere kadar olan kısmı alır
      date: new Date().toISOString(),
    };
    database()
      .ref(`rooms/${customOdaData.id}/${customOdaData.text}/`)
      .push(contentObject);
  }

  const renderContent = ({item}) => {
    return <RoomTalksCard item={item} />;
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header_text}>
            {customOdaData.text} odası kuruldu!
          </Text>
        </View>
        <FlatList data={contentList2} renderItem={renderContent} />
      </View>

      <FloatingButton icon="plus" onPress={handleInputToggle} />
      <ContentInputModal
        visible={inputModalVisible}
        onClose={handleInputToggle} // burada onClose ile aslında burada bir fonksiyon oluşturup yukarıda, o fonksiyonu contentInputModal da çağırıyoruz true ve false yolluyoruz
        onSend={handleSendContent} // ContentInputModal ile iletişime bak
      />
    </>
  );
};

export default CustomOda;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB74D',
  },
  header: {
    borderWidth: 1,
    borderColor: 'white',
    margin: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  header_text: {
    padding: 10,
    color: 'white',
    fontWeight: '700',
  },
});
