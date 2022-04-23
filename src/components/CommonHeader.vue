<template>
  <div class="common-header-bg">
    <div class="common-header container">
      <div>
        <slot name="left"></slot>
      </div>
      <div>
        <slot name="right"></slot>
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
.common-header-bg {
  background: #fff;
}
.common-header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
  position: relative;
  z-index: 60;

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
</style>
