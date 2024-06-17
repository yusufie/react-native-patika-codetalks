import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {tr} from 'date-fns/locale';
import {formatDistance, parseISO} from 'date-fns';
const RoomTalksCard = ({item}) => {
  // console.log('item', item);

  const formattedDate = formatDistance(parseISO(item.date), new Date(), {
    addSuffix: true,
    locale: tr,
  });
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text>{item.username}</Text>
        <Text>{formattedDate}</Text>
      </View>
      <View style={styles.footer_container}>
        <Text style={{color: 'black', fontWeight: '600'}}>{item.text}</Text>
      </View>
    </View>
  );
};

export default RoomTalksCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  header_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  footer_container: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});
