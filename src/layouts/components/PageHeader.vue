<template>
  <div class="page-header-bg">
    <div class="page-header container">
      <div>
        <div class="logo">
          <n-icon size="24">
            <PaperPlane></PaperPlane>
          </n-icon>
          <h2>考试系统</h2>
        </div>
        <n-menu :value="activeRoute" mode="horizontal" :options="navs" />
      </div>
      <div>
        <n-dropdown :options="userOptions">用户资料</n-dropdown>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PaperPlane } from '@vicons/fa'
import { curry } from 'lodash';
import type { MenuOption } from 'naive-ui'
import { computed, h } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

import { frontNavs, NavBarItem } from '@/router';

const navs = computed(() => {
  const dfs = (curr: NavBarItem): MenuOption => {
    return {
      label: () =>
        h(
          RouterLink,
          {
            to: curr.route || { name: curr.name }
          },
          { default: () => curr.displayName }
        ),
      key: curr.name,
      icon: curr.icon ? (() => h(curr.icon!)) : undefined,
      children: curr.children?.map(dfs)
    }
  }
  return frontNavs.map(dfs)
})

const route = useRoute()

const activeRoute = computed(() => route.meta.activeMenu || route.name as string)

const userOptions = [
  {
    label: '用户资料',
    key: 'profile',
  },
  {
    label: '编辑用户资料',
    key: 'editProfile',
  },
  {
    label: '退出登录',
    key: 'logout',
  }
]
</script>
<style lang="scss" scoped>
.page-header-bg {
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 60;
}
.page-header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;

  & > div {
    display: flex;
    align-items: center;
  }

  .logo {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.8);

    h2 {
      margin: 0;
      margin-left: 10px;
      margin-right: 40px;
    }
  }
}

:deep {
  .n-menu-item .n-menu-item-content a {
    transition: color 0.3s ease-in-out;
  }
  .n-menu-item .n-menu-item-content:hover a {
    color: var(--n-item-text-color-hover);
  }
  .n-menu-item.n-menu-item--selected .n-menu-item-content {
    background: var(--n-item-color-active);
    border-radius: 10px;
  }
}
</style>
