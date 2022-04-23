import { Axios, AxiosError, AxiosResponse } from "axios";
import { noop } from 'lodash';

import { errorMsg } from '@/utils/message';

/** 判断一个请求是否是错误的请求 */
function isErrorResponse(response: any) {
  return false;
}

/** 处理错误的请求 */
function handleError(err: Error) {
  errorMsg(err.message);
}

/* 创建一个关于错误的 promise 对象 */
function createErrorPromise(msg: string) {
  return Promise.reject(new Error(msg));
}


/** 解析错误的请求 */
function parseError(err: AxiosError<any>) {
  if (!err.response) return createErrorPromise(err.message);
  const { error, message } = err.response.data;
  if (typeof error === "object") {
    return createErrorPromise(`Elastic Search Error:[${error.type}]${error.reason}`)
  }
  else if (message || error) {
    // 后端返回错误使用后端提示的错误
    return createErrorPromise(error ? error + ": " + message : message);
  }
  else {
    const msgMap: Record<number, any> = {
      400: "请求错误",
      401: "未授权，请登录",
      403: "拒绝访问",
      404: `请求地址出错: ${err.response.config.url}`,
      408: `请求超时`,
      500: `服务器内部错误`,
      502: `服务器内部错误`,
    };
    return createErrorPromise(msgMap[err.response.status] || "网络异常");
  }
}

/**
 * 为内置/自定义的 axios 实例添加一个拦截器
 * @param axios
 */
export function useStatusInterceptor(axios: Axios) {
  /** 对相应进行错误检查和转换 */
  axios.interceptors.response.use(
    (res: AxiosResponse<any>) =>
      isErrorResponse(res.data) ? createErrorPromise(res.data.msg) : res,
    parseError
  );

  /** 展示错误信息 */
  axios.interceptors.response.use(undefined, (err: any) => {
    handleError(err);
    return Promise.reject(err);
  });
}
