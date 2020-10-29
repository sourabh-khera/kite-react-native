import React from 'react';
import { View } from 'react-native';
import Box from '../box';
import { screens } from '../../constants/messages';
import styles from './style';

const noAccount = () => {
  return (
    <View style={styles.container}>
      <Box
        icon={require('../../assets/images/icons8-box-important-24.png')}
        title={screens.loginSplash.noAccountText}
        anchorText={screens.loginSplash.anchorText}
        url={screens.loginSplash.zerodhaLink}
        beforeAnchor={screens.loginSplash.anchorBeforeText}
        afterAnchor={screens.loginSplash.anchorAfterText}
        anchorStyles={styles.anchorStyles}
        restAnchorStyles={styles.restAnchorStyles}
      />
    </View>
  );
};

export default noAccount;
