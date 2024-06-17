import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {tr} from 'date-fns/locale';
import {formatDistance, parseISO} from 'date-fns';
const OdaButton = ({OdaTitle, onPress}) => {
  const date = OdaTitle.date;
  const username = OdaTitle.username;
  // console.log('date', date);
  // console.log('username', username);
  const formattedDate = formatDistance(parseISO(date), new Date(), {
    addSuffix: true,
    locale: tr,
  });
  return (
    <TouchableOpacity style={styles.buton_container} onPress={onPress}>
      <View style={styles.title_contanier}>
        <Text style={styles.title}>{OdaTitle.text}</Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={{color: '#FFC83D', fontSize: 12}}>
          {username} oluşturdu
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default OdaButton;

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  buton_container: {
    flex: 1,
    borderWidth: 1,
    flexDirection: 'col', // yatayda hizalama için
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: width * 0.42,
    width: width * 0.42,
    margin: 10,
    borderRadius: 10,
    borderColor: 'lightgray',
  },
  title_contanier: {
    flex: 6, // Eklendi
    justifyContent: 'center', // Metni yatayda hizalar
  },
  title: {
    color: 'orange',
    textAlign: 'center', // Metni merkezi hizalar
  },
});
