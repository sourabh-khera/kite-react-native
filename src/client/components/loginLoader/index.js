import React from 'react';
import { View } from 'react-native';
import Box from '../box';
import { screens } from '../../constants/messages';
import styles from './style';

const loginLoader = () => (
  <View style={styles.container}>
    <Box
      icon={require('../../assets/images/icons8-swirl-24.png')}
      title={screens.loginSplash.loaderTitle}
      texts={[
        screens.loginSplash.loginLoaderText1,
        screens.loginSplash.loginLoaderText2,
      ]}
    />
  </View>
);

export default loginLoader;
