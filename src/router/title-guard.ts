import { Router } from 'vue-router';

/**
 * 根据路由元信息自动修改网页标题
 * 在路由中设置 meta.title 属性即可添加标题到路由上去
 * @param router 路由器对象
 */
export function useTitleGuard(router: Router) {
  router.beforeEach((to, from) => {
    if (to.name === from.name) return true;
    document.title = '考试系统';
  });
  router.afterEach((guard) => {
    const titles = guard.matched
      .map((item) => item.meta.title)
      .filter((item) => !!item);
    titles.push('考试系统');
    document.title = titles.join(' - ');
  });
}
