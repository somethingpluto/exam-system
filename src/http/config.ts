
/**
 * 这里配置默认的 axios 实例
 */
import axios from "axios";

import { useStatusInterceptor } from "./status-interceptor";

// Apifox mock环境
axios.defaults.baseURL = "/api"

useStatusInterceptor(axios);

/**
 * 添加拦截器
 */

export { axios };
