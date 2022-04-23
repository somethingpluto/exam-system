/**
 * 此守卫用于在路由跳转时验证登录
 * 如果没有登录则跳转到登录页面
 * 同时提供 登录跳转函数 goToLogin 和 恢复登录前页面的函数 restoreFromLogin
 */
import { RouteLocationNormalizedLoaded, Router } from 'vue-router';

import { useTokenStore } from '@/store';

import { LOGIN_ROUTE_NAME } from './routes';

/**
 * 登录验证拦截器
 * @param router
 * @returns
 */
export function useAuthGuard(router: Router) {
  let routeBeforeLogin: RouteLocationNormalizedLoaded | undefined = undefined;

  /**
   * 跳转到登录页面
   * @param keep 是否保留现有路由
   */
  async function goToLogin(keep = true) {
    if (keep) {
      routeBeforeLogin = router.currentRoute.value;
    }
    return router.replace({
      name: LOGIN_ROUTE_NAME,
      query: {
        redirect: routeBeforeLogin?.path,
      },
    });
  }

  /**
   * 恢复到登录前的页面
   */
  function restoreFromLogin() {
    const routeLocation: Record<string, any> = {};
    const currentRoute = router.currentRoute.value;
    // 判断 js 是否保存了相应的数据
    if (routeBeforeLogin) {
      if (routeBeforeLogin.path) {
        routeLocation.path = routeBeforeLogin.path;
      } else {
        routeLocation.name = routeBeforeLogin.name;
        routeLocation.params = routeBeforeLogin.params;
      }
      routeLocation.query = routeBeforeLogin.query;
      // 浏览器直接打开登录页面时只保留了 path
    } else if (currentRoute.name === LOGIN_ROUTE_NAME && currentRoute.query.redirect) {
      routeLocation.path = currentRoute.query.redirect || '/';
      // 啥都没有，跳转到默认界面
    } else {
      routeLocation.name = '/';
    }
    return router.replace(routeLocation);

  }

  const token = useTokenStore()
  router.beforeEach((to, from) => {
    if (to.meta.anynomous || token.has || to.name === LOGIN_ROUTE_NAME) {
      return true;
    } else {
      return {
        name: LOGIN_ROUTE_NAME,
        query: {
          redirect: to.path,
        },
      };
    }
  });

  return { goToLogin, restoreFromLogin };
}
