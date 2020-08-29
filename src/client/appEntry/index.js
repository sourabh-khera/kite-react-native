import React, { Component } from 'react';
import { AsyncStorage, View } from 'react-native';
import { connect } from 'react-redux';
import { saveUserToken } from '../actions/user.action';
import TabNavigator from '../navigations/tab_navigation';
import { LoginStack } from '../navigations/stack_navigation';
import Loader from '../components/loader';

class AppEntry extends Component {
  state = { isLoading: false };

  async componentDidMount() {
    const { saveAccessToken } = this.props;
    this.setState({ isLoading: true });
    const token = await AsyncStorage.getItem('token');
    this.setState({ isLoading: false });
    token ? saveAccessToken(token) : null;
  }

  render() {
    const { isLoading } = this.state;
    const { token } = this.props;
    const renderScreen = token ? <TabNavigator /> : <LoginStack />;
    const renderComponent = isLoading ? <Loader /> : renderScreen;
    return <View style={{ flex: 1 }}>{renderComponent}</View>;
  }
}

const mapStateToProps = (state) => ({
  token: state.userReducer.token,
});
const mapDispatchToProps = (dispatch) => ({
  saveAccessToken: (token) => dispatch(saveUserToken(token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AppEntry);
