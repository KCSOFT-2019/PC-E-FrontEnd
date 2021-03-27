import axios from 'axios';

export function request(config) {
  // 1. 创建 axios 实例
  const instance = axios.create({
    baseURL: 'http://s0.s100.vip:11807',
    timeout: 5000
  });

  // 2. 拦截器
  instance.interceptors.request.use(config => {
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization');
    }
    return config;
  }, err => {
    return Promise.reject(err);
  });

  instance.interceptors.response.use(res => {

    return Promise.resolve(res);
  }, err => {
    return Promise.reject(err);
  })


  // 3. 发送真正的网络请求
  return instance(config);
}