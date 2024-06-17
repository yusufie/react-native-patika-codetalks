import {StyleSheet} from 'react-native';

const base_style = StyleSheet.create({
  container: {
    borderWidth: 1,
    alignItems: 'center',
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: 'white',
    borderColor: 'white',
    marginTop: 10,
    borderRadius: 10,
  },
  title: {
    color: 'orange',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: '#ffa040',
    },
    title: {
      ...base_style.title,
      color: 'white',
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
  }),
};
