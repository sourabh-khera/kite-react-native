import React, { Component } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { saveUserToken } from '../actions/user_action';
import TabNavigator from '../navigations/tab_navigation';
import { LoginStack } from '../navigations/stack_navigation';
import Loader from '../components/loader';

class AppEntry extends Component {
  state = { isLoading: false };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const token = await AsyncStorage.getItem('app-token');
    this.setState({ isLoading: false });
    token ? this.props.saveUserToken(token) : null;
  }

  render() {
    const { isLoading } = this.state;
    const { appToken } = this.props;
    const renderScreen = appToken ? <LoginStack /> : <LoginStack />;
    const renderComponent = isLoading ? <Loader /> : renderScreen;
    return <View style={{ flex: 1 }}>{renderComponent}</View>;
  }
}

const mapStateToProps = ({ userReducer }) => ({
  appToken: userReducer.appToken,
});
const mapDispatchToProps = {
  saveUserToken,
};
export default connect(mapStateToProps, mapDispatchToProps)(AppEntry);
