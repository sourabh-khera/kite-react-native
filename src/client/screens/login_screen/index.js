import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import FocusAwareStatusBar from '../../components/focusStatusBar';
import Loader from '../../components/loader';
import Button from '../../components/button';
import { authenticateUser } from '../../actions/asyncActions/user_async';
import { screens } from '../../constants/messages';
import styles from './style';

const Login = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const showLoader = useSelector(
    ({ commonReducer }) => commonReducer.showLoader,
  );
  useEffect(() => {
    if (route.params?.requestToken) {
      const { requestToken } = route.params;
      dispatch(authenticateUser(requestToken));
    }
  }, [route.params?.requestToken, dispatch]);
  const renderLoader = showLoader ? <Loader /> : null;
  return (
    <View style={styles.loginSplashContainer}>
      <View style={styles.innerView}>
        {renderLoader}
        {/* <FocusAwareStatusBar
        barStyle={'light-content'}
        backgroundColor="#000"
        translucent={true}
      /> */}
        <Image
          source={require('../../assets/images/kite-logo.png')}
          style={styles.kiteLogo}
        />
        <Text style={styles.welcomeText}>
          {screens.loginSplash.welcomeText}
        </Text>
        <Button
          buttonText={screens.loginSplash.loginText}
          handleButtonClick={() => {}}
          buttonStyles={styles.loginButton}
        />
        <View style={styles.orTextContainer}>
          <View style={styles.leftLine} />
          <Text style={styles.orText}>Or</Text>
          <View style={styles.rightLine} />
        </View>
        <Button
          buttonText={screens.loginSplash.signText}
          handleButtonClick={() => {}}
          buttonStyles={styles.signUpButton}
          buttonTextStyles={styles.signUpText}
        />
      </View>
    </View>
  );
};

export default Login;
