import axios from "axios";

import { proxyTarget } from "$configs/app";

const instance = axios.create({
  baseURL: proxyTarget,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  timeout: 1000 * 10,
  withCredentials: true,
  responseType: "json",
  responseEncoding: "utf8",
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
});

const defErrorMsg = "网络繁忙，请稍后再试~";

const errorHandler = (error) => {
  if (error.response) {
    console.error(`[${error.response.status}]: ${error.response.statusText}`);
  } else {
    console.error(defErrorMsg);
  }
  return Promise.reject(error);
};

instance.interceptors.request.use((config) => {
  const { parameters, method } = config;
  if (parameters) {
    if (method === "get") {
      config.params = parameters;
    } else if (method === "post") {
      config.data = parameters;
    }
  }
  return config;
}, errorHandler);

instance.interceptors.response.use((response) => {
  const { code, msg = defErrorMsg } = response.data || {};
  if (code === 0) {
    //maybe
  } else {
    console.error(msg);
  }
  return response.data;
}, errorHandler);

export default instance;
