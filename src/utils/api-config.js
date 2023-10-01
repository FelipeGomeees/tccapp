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
  const tokenAtual = sessionStorage.getItem('token');
  if (!tokenAtual) {
    sessionStorage.setItem('token', JSON.stringify(token[0]));
    axios.defaults.headers.Authorization = token ? `Bearer ${token[0].toktoken}` : null;
  } else {
    axios.defaults.headers.Authorization = token ? `Bearer ${token.toktoken}` : null;
  }
  
}
