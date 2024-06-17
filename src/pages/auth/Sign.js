import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomTextInput from '../../../components/TextInput/CustomTextInput';
import CustomButton from '../../../components/Button/CustomButton';
import {Formik} from 'formik';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';

const initialFormValue = {
  usermail: '',
  password: '',
  repassword: '',
};
const Sign = ({navigation}) => {
  const handleLogin = () => {
    navigation.goBack();
  };

  async function handleFormSubmit(formValues) {
    if (formValues.password !== formValues.repassword) {
      showMessage({message: 'Şifreler uyuşmuyor', type: 'danger'});
      return;
    }
    try {
      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.repassword,
      );
      showMessage({
        message: 'Kullanıcı oluşturuldu',
        type: 'success',
      });
      navigation.navigate('LoginPage');
    } catch (error) {
      showMessage({
        message: error.code,
        type: 'success',
      });
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Codetalks</Text>
      </View>
      <View style={styles.input_container}>
        <Formik initialValues={initialFormValue} onSubmit={handleFormSubmit}>
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
              <CustomTextInput
                onChangeText={handleChange('repassword')}
                value={values.repassword}
                placeholder="Şifrenizi tekrar giriniz.."
              />
              <CustomButton text="Kayıt Ol" onPress={handleSubmit} />
            </>
          )}
        </Formik>
        <CustomButton theme="secondary" text="Geri" onPress={handleLogin} />
      </View>
    </View>
  );
};

export default Sign;

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
