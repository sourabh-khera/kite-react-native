import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import TextInput from '../../components/textInput';
import CheckBox from '@react-native-community/checkbox';
import Button from '../../components/button';
import FocusAwareStatusBar from '../../components/focusStatusBar';
import {screens} from '../../constants/messages';
import styles from './style';

const login = () => {
  const renderBookingText = [1, 2, 3].map((item, idx) => (
    <Text key={idx} style={styles.bookingText}>
      {screens.login[`bookingText${idx}`]}
    </Text>
  ));
  return (
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
        <Text style={styles.smallcaseText}>{screens.login.smallcaseText}</Text>
      </View>
      <View style={styles.childContainerTwo}>
        <View style={styles.loginFormContainer}>
          <Image
            source={require('../../assets/images/kite-logo.png')}
            style={styles.kiteLogo}
          />
          <TextInput
            label="User ID"
            value={''}
            handleTextChange={() => {}}
            name="userName"
            keyboardType="email-address"
          />
          <TextInput
            label="Password"
            maxLength={20}
            value={''}
            secure={true}
            name="password"
            handleTextChange={() => {}}
          />
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
          <Text style={styles.sharedText}>{screens.login.sharedText}</Text>
          <Button buttonText="Login" handleButtonClick={() => {}} />
          <TouchableOpacity onPress={() => {}} style={styles.forgetButton}>
            <Text style={styles.forgotText}>{screens.login.forgetText}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.commnProps}>ZERODHA</Text>
        <Text style={styles.commnProps}>{screens.login.signupText}</Text>
        <View style={styles.bookingTextContainer}>{renderBookingText}</View>
        <Text style={styles.commnProps}>{screens.login.versionText}</Text>
      </View>
    </View>
  );
};

export default login;
