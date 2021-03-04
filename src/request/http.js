import axios from "axios";
import CONFIG from "../config";
import router from "../router";

axios.defaults.baseURL = CONFIG.BASE_URL;
axios.defaults.timeout = 10000;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.get["Content-Type"] = "application/json";

// 对请求进行拦截，加入 jwt token（如果有的话）
axios.interceptors.request.use(
  config => {
    if (localStorage.JWT_TOKEN) {
      config.headers.Authorization = "Bearer " + localStorage.JWT_TOKEN;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

// 对错误的响应进行拦截
axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    switch(error.statusCode) {
      case 401:
        localStorage.removeItem("JWT_TOKEN");
        localStorage.removeItem("username");
        router.push({"name": ""});
        break;
    }
  }
)

