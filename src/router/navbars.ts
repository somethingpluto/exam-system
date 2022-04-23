import type { Component } from 'vue';
import { RouteLocationRaw } from 'vue-router';
export interface NavBarItem {
  /**
   * 导航菜单的唯一标识，默认会作为路由的名字进行跳转
   */
  name: string
  /**
   * 导航对应的图标
   */
  icon?: Component
  /**
   * 展示在导航栏的名字
   */
  displayName: string
  /**
   * 跳转路由，如果指定了跳转路由，那么将使用下面的路由进行跳转
   */
  route?: RouteLocationRaw
  /**
   * 对应的角色，不符合角色要求的将不展示
   */
  roles: string[]
  /**
   * 子菜单
   */
  children?: NavBarItem[]
}

export const frontNavs: NavBarItem[] = [
  { name: 'exams.mine', roles: [], displayName: "我的考试" },
  { name: 'exams.admin', roles: [], displayName: "管理考试" },
  { name: 'questions.admin', roles: [], displayName: "管理试题" },
]
export const adminNavs: NavBarItem[] = []
