import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';

import CustomTextInput from '../../../components/TextInput/CustomTextInput';
import CustomButton from '../../../components/Button/CustomButton';

const initialFormValues = {
  usermail: '',
  password: '',
};
const Login = ({navigation}) => {
  const handleSignUp = () => {
    navigation.navigate('SignPage');
  };
  async function handleFormSubmit(formValues) {
    // console.log(formValues);
    try {
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      navigation.navigate('Odalar');
    } catch (error) {
      console.log(error.code);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Codetalks</Text>
      </View>
      <View style={styles.input_container}>
        <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
          {({values, handleChange, handleSubmit}) => (
            <>
              <CustomTextInput
                onChangeText={handleChange('usermail')}
                value={values.usermail}
                placeholder="e-postanızı giriniz..."
              />
              <CustomTextInput
                onChangeText={handleChange('password')}
                value={values.password}
                placeholder="Şifrenizi giriniz..."
              />
              <CustomButton onPress={handleSubmit} text="Giriş Yap" />
              <CustomButton
                onPress={handleSignUp}
                theme="secondary"
                text="Kayıt Ol"
              />
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'orange',
  },

  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 30,
  },
  input_container: {
    flex: 2,
  },
});
