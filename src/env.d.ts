/// <reference types="vite/client" />
import 'vue-router';
import 'vue';

import * as components from 'naive-ui/es/components'
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'vue-router' {
  interface RouteMeta {
    /**
     * 隐藏后台页面的面包屑
     */
    hideBreadCrumb?: boolean;

    /**
     * 页面的标题，会显示在面包屑和网页标题上
     */
    title?: string;

    activeMenu?: string;

    /**
     * 是否允许未登录访问
     */
    anynomous?: boolean;

    /**
     * 允许访问的角色信息
     */
    roles?: string[];
  }
}

declare module 'vue' {
  export type GlobalComponents = typeof components
}
