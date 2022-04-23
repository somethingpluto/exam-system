## Test_System 考试系统

## 前言 😀

​ 这次项目是服务创新创业比赛的参赛项目，赛道为考试系统。后端部分为一名大三学长使
用 Java 构建，前端部分由我和一名大三学长负责。学长主要负责原型的绘制和工具函数的
编写，我主要负责样式功能的实现。

## 技术栈 🧷

·框架：Vue3+VueRouter+pinia

·语言：TypeScript

·UI 库：NaiveUI

·打包工具：Vite

## 页面展示 🚩

## 演示地址：

gitee 仓库 👉：

演示地址 👉：

### 登录页面

### ![image-20220423214217530](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1770/image-20220423214217530.png)

### 学生端—考试列表页面

![image-20220423214311450](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1770/image-20220423214311450.png)

### 学生端—候考室

![image-20220423214338824](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1770/image-20220423214338824.png)

### 学生端—考试页面

![image-20220423214402994](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1770/image-20220423214402994.png)

![image-20220423214419846](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1770/image-20220423214419846.png)

![image-20220423214533078](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1770/image-20220423214533078.png)

### 教师端—考试管理

![image-20220423214543717](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1770/image-20220423214543717.png)

![image-20220423214551751](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1770/image-20220423214551751.png)

### 教师端—考试分析

![image-20220423214611562](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1770/image-20220423214611562.png)

### 教师端—试题编辑

![image-20220423220637584](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1770/image-20220423220637584.png)

### 后台管理—登录页面

![image-20220423220713120](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1770/image-20220423220713120.png)

### 后台管理—管理页面

![image-20220423220821386](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1770/image-20220423220821386.png)

![image-20220423220903993](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1770/image-20220423220903993.png)

## Get 到了什么？

### 样式样式样式

​ 样式要考虑充分，选择合适的属性，不然很容易坑到后面的自己。

### 布局组件

​ 可以通过布局组件实现，结构相似的页面可以使用布局组件 + RouterView 的方式来实现
布局。

### render 函数

​ NaiveUI 表格那没有提供插槽，只能通过 render 函数来实现 🤦‍♂️。render 函数实现起来
确实感觉比插槽快很多，（当然是熟悉的情况下）。

### pinia

​ pinia 的功能与 Vuex 相似，都是全局数据存储，但相对于 Vuex，pinia 平铺结构少了
Vuex 里面的 modules 使用起来更加舒服，确实好用 ✌。
