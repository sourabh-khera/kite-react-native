import React, {Fragment, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import TextInput from '../../components/textInput';
import CheckBox from '@react-native-community/checkbox';
import {Formik} from 'formik';
import Button from '../../components/button';
import FocusAwareStatusBar from '../../components/focusStatusBar';
import DismissKeyBoard from '../../components/dismissKeyBoard';
import {screens} from '../../constants/messages';
import {loginValidationSchema} from '../../utils';
import {loginInputs} from '../../componentConfig';

import styles from './style';

const Login = () => {
  const [userId, setUserId] = useState();
  const [password, setUserPassword] = useState();
  const renderBookingText = [1, 2, 3].map((item, idx) => (
    <Text key={idx} style={styles.bookingText}>
      {screens.login[`bookingText${idx}`]}
    </Text>
  ));
  const handleLogin = async (values, actions) => {
    alert(JSON.stringify(values));
  };
  const renderInputs = (values, touched, errors, setFieldValue) => {
    return loginInputs.map((input, idx) => {
      return (
        <Fragment key={idx}>
          <TextInput
            label={input.label}
            keyboardType={input.keyboardType}
            value={values[input.name]}
            secure={input.secure}
            name={input.name}
            handleTextChange={(value) => {
              setFieldValue(input.name, value);
            }}
          />
          {touched[input.name] && errors[input.name] && (
            <Text style={styles[input.styleClass]}>{errors[input.name]}</Text>
          )}
        </Fragment>
      );
    });
  };

  return (
    <DismissKeyBoard>
      <View style={styles.loginContainer}>
        <FocusAwareStatusBar
          barStyle={'dark-content'}
          backgroundColor="#1e69ce"
          translucent={true}
        />
        <View style={styles.childContainerOne}>
          <View style={styles.smallcaseLogoContainer}>
            <Image
              source={require('../../assets/images/smallcase_logo.png')}
              style={styles.smallcaseLogo}
            />
          </View>
          <Text style={styles.smallcaseText}>
            {screens.login.smallcaseText}
          </Text>
        </View>
        <View style={styles.childContainerTwo}>
          <View style={styles.loginFormContainer}>
            <Image
              source={require('../../assets/images/kite-logo.png')}
              style={styles.kiteLogo}
            />
            <Formik
              initialValues={{userId, password}}
              validationSchema={loginValidationSchema}
              onSubmit={(values, actions) => {
                handleLogin(values, actions);
              }}>
              {({values, setFieldValue, handleSubmit, errors, touched}) => (
                <Fragment>
                  {renderInputs(values, touched, errors, setFieldValue)}
                  <View style={styles.checkBoxContainer}>
                    <CheckBox
                      disabled={false}
                      value={false}
                      onValueChange={() => {}}
                      tintColors={{true: '#F15927', false: '#a5a5a5'}}
                    />
                    <Text style={styles.checkBoxText}>
                      {screens.login.checkBoxText}
                    </Text>
                  </View>
                  <Text style={styles.sharedText}>
                    {screens.login.sharedText}
                  </Text>
                  <Button buttonText="Login" handleButtonClick={handleSubmit} />
                  <TouchableOpacity
                    onPress={() => {}}
                    style={styles.forgetButton}>
                    <Text style={styles.forgotText}>
                      {screens.login.forgetText}
                    </Text>
                  </TouchableOpacity>
                </Fragment>
              )}
            </Formik>
          </View>
          <Text style={styles.commnProps}>ZERODHA</Text>
          <Text style={styles.commnProps}>{screens.login.signupText}</Text>
          <View style={styles.bookingTextContainer}>{renderBookingText}</View>
          <Text style={styles.commnProps}>{screens.login.versionText}</Text>
        </View>
      </View>
    </DismissKeyBoard>
  );
};

export default Login;
