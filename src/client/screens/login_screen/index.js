import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import FocusAwareStatusBar from '../../components/focusStatusBar';
import {screens} from '../../constants/messages';
import styles from './style';

const login = ({navigation}) => {
  return (
    <View style={styles.loginSplashContainer}>
      <FocusAwareStatusBar
        barStyle={'light-content'}
        backgroundColor="#000"
        translucent={true}
      />
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/streak_logo.png')}
          style={styles.streakLogo}
        />
      </View>
      <View style={styles.overlapContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.push('Login')}>
            <Image
              source={require('../../assets/images/kite-logo.png')}
              style={styles.kiteLogo}
            />
            <Text style={styles.loginText}>
              {screens.loginSplash.loginText}
            </Text>
          </TouchableOpacity>
          <View style={styles.signUpContainer}>
            <Text style={styles.accountText}>
              {screens.loginSplash.accountText}
            </Text>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.signUpText}>
                {screens.loginSplash.signText}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.loginTermsContainer}>
          <View style={styles.termsContainer}>
            <Text style={styles.accountText}>
              {screens.loginSplash.agreeText}
            </Text>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.signUpText}>
                {screens.loginSplash.termsText}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default login;
