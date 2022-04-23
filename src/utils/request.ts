import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { isArray, isNil } from 'lodash'

import { axios, RestApi } from '@/http'
import { errorMsg, successMsg } from '@/utils/message';

function isAxiosResponse<T>(res: AxiosResponse<T> | T): res is AxiosResponse<T> {
  return 'data' in res
}

/**
 * 解包数据
 * @param res 响应
 * @returns res.data
 */
export function unpackData<T>(res: AxiosResponse<T> | T) {
  return isAxiosResponse(res) ? res.data : res
}

/**
 * 创建一个取消请求的 token
 * @returns ret.cancel() 取消请求
 */
export function createCancelToken() {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  return source
}

/**
 * 将对象转换成 FormData
 * @param obj
 * @returns
 */
export function toFormData<T>(obj: T) {
  const fd = new FormData()
  for (const [key, value] of Object.entries(obj)) {
    fd.append(key, value)
  }
  return fd
}

/**
 * a rest api plugin for toFormData
 * @param api
 */
export function toFormDataPlugin(api: RestApi) {

  if (isArray(api.config.transformRequest)) {
    api.config.transformRequest.push(toFormData)
  }
  else if (isNil(api.config.transformRequest)) {
    api.config.transformRequest = [toFormData]
  }
  else {
    api.config.transformRequest = [api.config.transformRequest, toFormData]
  }
}

/**
 * 根据boolean返回值显示消息
 * @param successMsg
 * @param failMsg
 * @returns
 */
export function createShowMsgHandler(smsg = "操作成功", failMsg = "操作失败") {
  return <T>(result: T) => {
    if (result) successMsg(smsg)
    else errorMsg(failMsg)
    return result
  }
}

/**
 * 在值为假的时候抛出异常
 * @param value
 * @returns
 */
export function throwOnFalse(value: any) {
  if (value) return value
  else throw value
}

/**
 * 保证回调在没有返回值的情况下，保持 promise 的返回值
 * @param fn
 * @returns
 */
export function keepReturn<T>(fn: (p?: T) => T | void) {
  return (payload: T) => {
    const ret = fn(payload)
    return ret || payload
  }
}
