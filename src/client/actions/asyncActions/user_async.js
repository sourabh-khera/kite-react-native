import { AsyncStorage } from 'react-native';
import { saveUserToken } from '../../actions/user.action';
import { receiveAPI, requestAPI } from '../common.action';
import { webApiPost } from '../../services/webBaseApi';

export const authenticateUser = (requestToken) => async (dispatch) => {
  try {
    dispatch(requestAPI(true));
    const response = await webApiPost('/user/login').request;
    dispatch(receiveAPI(false));
    const {
      data: { data },
      status,
    } = response;
    if (status === 200) {
      await AsyncStorage.setItem('kite-token', data.token);
      dispatch(saveUserToken(data.token));
    }
  } catch (error) {
    dispatch(receiveAPI(false));
    if (error && error.response && error.response.data) {
      console.log(error);
    }
  }
};
