import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const instance = axios.create({
  baseURL: 'https://dmsglobal.net/ct-api/',
});
instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      config.headers.Authorization = `Bearer 8U7dPDoiozxF26WNLAdJdo2S9KN7wwg58Dub0v9D`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);

export default instance;
