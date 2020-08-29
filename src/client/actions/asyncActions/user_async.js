import AsyncStorage from '@react-native-community/async-storage';
import { saveUserToken } from '../../actions/user_action';
import { receiveAPI, requestAPI } from '../common_action';
import { webApiGet } from '../../services/webBaseApi';

export const authenticateUser = (requestToken) => async (dispatch) => {
  try {
    dispatch(requestAPI(true));
    const response = await webApiGet('/user/accessToken').request;
    dispatch(receiveAPI(false));
    const {
      data: { data },
      status,
    } = response;
    if (status === 200) {
      await AsyncStorage.setItem('kite-token', data.access_token);
      dispatch(saveUserToken(data.access_token));
    }
  } catch (error) {
    dispatch(receiveAPI(false));
    if (error && error.response && error.response.data) {
      console.log(error);
    }
  }
};
