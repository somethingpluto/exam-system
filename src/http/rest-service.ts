/**
 * Rest Service Wrapper
 * @version 1.3
 */
import { AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { isArray, isFunction, isNil, merge } from 'lodash';
import { compile, Key, parse, PathFunction } from 'path-to-regexp';

import { axios as request } from "./config";

export type BeforeRequestHook = (config: AxiosRequestConfig) => AxiosRequestConfig;
export type BeforeResponseHook = (response: AxiosResponse) => any;

export type RestApiPlugin = (instance: RestApi<any, any, any>) => any

/**
 * 一个rest接口
 */
export class RestApi<R = any, B = any, Q = any> {
  public tokens: (string | number)[]
  public compile: PathFunction<object>
  public static publicParams: any = {}

  constructor(
    public service: RestService,
    public method: Method,
    public path: string,
    public client: AxiosInstance,
    public config: AxiosRequestConfig = {},
    plugins: RestApiPlugin[] = []) {
    this.compile = compile(this.path)
    this.tokens = parse(path)
      .filter((x) => typeof x !== "string")
      .map((x) => (x as Key).name)
    this.run = this.run.bind(this)
    for (const plugin of plugins) {
      plugin(this)
    }
  }

  private parseUrl(query: any) {
    if (this.tokens.length === 0 || !query)
      return `${this.service.baseUrl}${this.path}`

    const pathParams: any = {};
    for (const name of this.tokens) {
      pathParams[name] = query[name] || RestApi.publicParams[name];
      delete query[name];
    }
    return `${this.service.baseUrl}${this.compile(pathParams)}`;
  }

  /**
   * 发起请求的函数
   */
  get requestFn() {
    return this.client || this.service.client
  }

  run<R1 = R>(): AxiosPromise<R>;
  /**
   * 发起请求
   * GET请求默认是 query，POST 请求默认是 body
   * @param query 查询参数
   */
  run<R1 = R, Q1 = Q>(queryOrBody: Q1): AxiosPromise<R1>;

  /**
   * 发起请求
   * @param body body 参数
   * @param query 查询参数
   */
  run<R1 = R, B1 = B, Q1 = Q>(body: B1, query: Q1): AxiosPromise<R1>;
  run(a?: any, b?: any, c?: any): AxiosPromise<any> {
    let body, query, config;
    if (arguments.length === 1) {
      if (this.method === 'GET' || this.method === 'get') {
        query = a;
      }
      else {
        body = a;
      }
    }
    else if (arguments.length === 2) {
      if (this.method === 'GET' || this.method === 'get') {
        query = a;
        config = b;
      }
      else {
        body = a;
        query = b;
      }
    }
    else {
      body = a;
      query = b;
      config = c;
    }

    return this.requestFn(merge({}, {
      url: this.parseUrl(query),
      method: this.method.toLowerCase() as Method,
      params: query,
      data: body
    }, this.service.config, this.config, config));
  }
}

/**
 * 一个 rest service，用于rest 服务
 */
class RestService {
  public apis = new Map<GetRequest<any, any> | PostRequest<any, any, any>, RestApi<any, any, any>>()
  constructor(
    public baseUrl: string = "",
    public client: AxiosInstance = request,
    public config: AxiosRequestConfig = {}
  ) {
    this.defineAPI = this.defineAPI.bind(this)
  }

  defineAPI<R, Q = undefined>(method: "get" | "GET", path: string, config?: RequestOptionsRaw): Q extends undefined ? SimpleGetRequest<R> : GetRequest<R, Q>;
  defineAPI<R, B, Q = undefined>(method: Exclude<Method, "get" | "GET">, path: string, config?: RequestOptionsRaw): Q extends undefined ? SimplePostRequsest<R, B> : PostRequest<R, B, Q>;
  defineAPI<R, B, Q>(method: Method, path: string, config: RequestOptionsRaw = {}): any {
    const instance = new RestApi<R, B, Q>(this, method, `${path}`, this.client, config.config, config.plugins || [])
    this.apis.set(instance.run, instance)
    return instance.run
  }

  getInstance<R, B, Q>(func: GetRequest<R, Q> | PostRequest<R, B, Q>): RestApi<R, B, Q> | undefined {
    return this.apis.get(func)
  }

  /**
   * 继承当前的 baseUrl 创建一个新的 rest 服务
   * @param baseUrl
   * @returns
   */
  extend(
    baseUrl = "",
  ) {
    return new RestService(`${this.baseUrl}${baseUrl}`, this.client, this.config);
  }

  get request() {
    return this.client.bind(this)
  }
}

export interface RequestOptionsRaw {
  config?: AxiosRequestConfig;
  plugins?: RestApiPlugin[];
}

export type SimpleGetRequest<R = {}> = <R1 = R>(query?: any, config?: AxiosRequestConfig) => AxiosPromise<R1>;

export type GetRequest<R = {}, Q = {}> = <R1 = R>(query: Q, config?: AxiosRequestConfig) => AxiosPromise<R1>;

export type SimplePostRequsest<R = {}, B = {}> = <R1 = R>(body: B, config?: AxiosRequestConfig) => AxiosPromise<R1>;

export type PostRequest<R = {}, B = {}, Q = {}> = <R1 = R>(body: B, query: Q, config?: AxiosRequestConfig) => AxiosPromise<R1>;

/**
 * 创建一个REST服务
 * @param baseUrl
 * @param client
 * @returns
 */
export function createService(baseUrl = "", config: AxiosRequestConfig = {}, client: AxiosInstance = request) {
  return new RestService(baseUrl, client, config);
}
