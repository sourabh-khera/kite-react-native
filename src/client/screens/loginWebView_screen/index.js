import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { WebView } from 'react-native-webview';
import Loader from '../../components/loader';
import FocusAwareStatusBar from '../../components/focusStatusBar';

import styles from './style';

const loginWebView = ({ navigation }) => {
  const fetchRequestToken = (navState) => {
    const requestToken =
      navState.url && navState.url.includes('request_token')
        ? navState.url
            .split('?')[1]
            .split('&')
            .find((item) => item.includes('request_token'))
            .split('=')[1]
        : null;
    requestToken ? navigation.navigate('LoginSplash', { requestToken }) : null;
  };
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar
        barStyle={'dark-content'}
        backgroundColor="#1e69ce"
        translucent={false}
      />
      <WebView
        source={{
          uri:
            'https://kite.zerodha.com/connect/login?v=3&api_key=6bwuuggo99zd7v43',
        }}
        startInLoadingState={true}
        renderLoading={() => <Loader />}
        onNavigationStateChange={(navState) => fetchRequestToken(navState)}
      />
    </SafeAreaView>
  );
};

export default loginWebView;
