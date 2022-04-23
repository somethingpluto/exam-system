import { Router } from 'vue-router';

import { useLoading } from '@/hooks/useLoading';
import { hasLogin } from '@/services/user';
import { useUserStore } from '@/store';
import { warn } from '@/utils/debug';
import { hasPermission } from '@/utils/roles';

/**
 * 第一次加载路由之前，需要进行权限效验
 * @param info
 */
export function usePermissionGuard(router: Router) {
  /* 用于判断网络状态 */
  let networkStatus = true
  /** 路由加载之前需要获取用户信息才能进行下一步的跳转 */
  router.beforeEach(async (to) => {
    const user = useUserStore()
    if (to.meta.anynomous) return
    if (!networkStatus) return
    if (hasLogin() && !user.value) {
      const { openLoading, closeLoading } = useLoading();
      openLoading();
      try {
        await user.run()
      } catch (error) {
        networkStatus = false
      } finally {
        closeLoading();
      }
      return;
    }
  });

  /** 角色效验 */
  router.beforeEach(async (to) => {
    if (to.meta.anynomous) return
    if (!networkStatus) return
    if (!to.meta.roles || to.meta.roles.length === 0) {
      warn(
        '当前页面',
        to.fullPath,
        `未定义权限规则，任何${to.meta.anynomous ? '人' : '已登录用户'
        }均可访问此页面`,
      );
      return;
    }
    if (!hasPermission(to.meta.roles)) {
      return {
        path: '/403',
      };
    }
  });
}
