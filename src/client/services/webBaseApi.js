import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const BASE_URL = 'http://localhost:4000';
const API_URL = '/api/v1';

const getConfig = async () => {
  try {
    const accessToken = await AsyncStorage.getItem('kite-token');
    const appToken = await AsyncStorage.getItem('app-token');

    const token = accessToken && appToken && `${appToken}:${accessToken}`;
    const authToken = token ? { Authorization: token } : {};

    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...authToken,
      },
    };
    return {
      config,
    };
  } catch (error) {
    console.log(error);
  }
};

export const webApiGet = async (url) => {
  try {
    const config = await getConfig();
    return {
      request: axios.get(`${BASE_URL}${API_URL}${url}`, config.config),
    };
  } catch (error) {
    console.log(error);
  }
};

export const webApiPost = async (url, options) => {
  try {
    const config = await getConfig();
    return {
      request: axios.post(
        `${BASE_URL}${API_URL}${url}`,
        JSON.stringify(options),
        config.config,
      ),
    };
  } catch (error) {
    console.log(error);
  }
};
