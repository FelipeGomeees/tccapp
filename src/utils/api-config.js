import axios from 'axios'

const port = '4000';

export default function AxiosSetup() {
    axios.defaults.baseURL = `http://localhost:${port}`;
    axios.interceptors.response.use((response) => {
        return response;
      }, function (error) {
        if (error.response.status === 401) {
            // sessionStorage.removeItem('token');
        }
        return Promise.reject(error);
      });
}

export function SetToken(token) {
  sessionStorage.setItem('token', token);
  axios.defaults.headers.Authorization = token ? `Bearer ${token.toktoken}` : null;
}
