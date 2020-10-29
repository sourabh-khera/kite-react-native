import React from 'react';
import { View } from 'react-native';
import { BubblesLoader } from 'react-native-indicator';
import Box from '../box';
import { screens } from '../../constants/messages';
import styles from './style';

const loginLoader = () => (
  <View style={styles.container}>
    <Box
      loader={<BubblesLoader color="#C4C4C4" />}
      title={screens.loginSplash.loaderTitle}
      texts={[
        screens.loginSplash.loginLoaderText1,
        screens.loginSplash.loginLoaderText2,
      ]}
    />
  </View>
);

export default loginLoader;
