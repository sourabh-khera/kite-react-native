import React from 'react';
import {View, Text, TouchableOpacity, Image, Platform} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import FocusAwareStatusBar from '../../components/focusStatusBar';
import {screens} from '../../constants/messages';
import styles from './style';

const loginSplash = () => {
  return (
    <View style={styles.loginSplashContainer}>
      <FocusAwareStatusBar
        barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
        backgroundColor="#000"
        translucent={true}
      />
      <View style={styles.imageContainer}>
        <Icons name={'lightning-bolt'} size={60} color={'#1b33e8'} />
      </View>
      <View style={styles.overlapContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
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

export default loginSplash;
