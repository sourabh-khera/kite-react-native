import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const API_URL = '/api/v1';

const getConfig = async () => {
  const token = await AsyncStorage.getItem('kite-token');
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
};

export const webApiGet = (url) => {
  const config = getConfig();
  return {
    request: axios.get(`${API_URL}${url}`, config.config),
  };
};

export const webApiPost = (url, options) => {
  const config = getConfig();
  return {
    request: axios.post(
      `${API_URL}${url}`,
      JSON.stringify(options),
      config.config,
    ),
  };
};
