import AsyncStorage from '@react-native-community/async-storage';
import { saveUserToken } from '../../actions/user_action';
import { receiveAPI, requestAPI } from '../common_action';
import { webApiGet } from '../../services/webBaseApi';

export const authenticateUser = (requestToken) => async (dispatch) => {
  try {
    dispatch(requestAPI(true));
    const response = await webApiGet(
      `/user/accessToken?requestToken=${requestToken}`,
    ).request;
    dispatch(receiveAPI(false));
    const {
      data: { data },
      status,
    } = response;
    console.log(data, 'data-----');
    if (status === 200) {
      await AsyncStorage.setItem('kite-token', data.access_token);
      await AsyncStorage.setItem('app-token', data.app_token);
      dispatch(saveUserToken(data.app_token));
    }
  } catch (error) {
    dispatch(receiveAPI(false));
    if (error && error.response && error.response.data) {
      console.log(error);
    }
  }
};
