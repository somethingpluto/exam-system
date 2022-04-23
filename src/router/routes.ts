import { RouteRecordRaw } from 'vue-router';

import Operation from '@/components/ExamManagePage/src/Operation/Operation.vue';
import FrontLayoutVue from '@/layouts/FrontLayout.vue';
import PassportLayout from '@/layouts/PassportLayout.vue';
import ManageLayout from '@/layouts/ManageLayout.vue'
import adminLoginLayout from '@/layouts/adminLoginLayout.vue'

export const LOGIN_ROUTE_NAME = 'passport.login';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/passport',
  },
  /**
   * 账号管理
   */
  {
    path: '/passport',
    redirect: { name: 'passport.login' },
    component: PassportLayout,
    children: [
      {
        path: 'login',
        component: () => import('@/components/HomePage/src/Login.vue'),
        name: 'passport.login',
        meta: {
          title: '登录',
          anynomous: true,
        },
      },
      {
        path: 'register',
        component: () => import('@/components/HomePage/src/Register.vue'),
        name: 'passport.register',
        meta: {
          title: '注册',
          anynomous: true,
        },
      },
    ],
  },
  /**
   * 学生考试列表页面
   */
  {
    path: '/mytest',
    component: FrontLayoutVue, // 布局组件
    redirect: '/mytest/list',
    name: 'exams.mine',
    children: [
      { // 考式列表
        path: 'list/:studentId',
        component: () => import('@/components/MyTestPage/src/MyTest.vue'),
        meta: {
          activeMenu: 'exams.mine',
        },
      },
      {
        // 进入考试页面
        path: 'entertest/:examCode',
        component: () => import('@/components/MyTestPage/src/EnterTest.vue'),
      },
      {
        // 考试完成页面
        path: 'complete/:examCode',
        component: () => import('@/components/MyTestPage/src/Complete.vue'),
      },
      {
        // 加入考试页面
        path: 'joinTest',
        component: () => import('@/components/MyTestPage/src/JoinTest.vue'),
      },
    ],
  },
  {
    path: '/test/:papaerId',
    component: () => import('@/pages/TestPage/TestPage.vue'),
  },
  // 考试管理页面
  {
    path: '/exammanage',
    component: FrontLayoutVue,
    redirect: '/exammanage/testlist',
    name: 'exams.admin',
    children: [
      {
        // 考试列表
        path: 'testlist',
        component: () => import('@/components/ExamManagePage/src/TestList/TestList.vue'),
      },
      {
        // 创建考试
        path: 'createlist',
        component: () => import('@/components/ExamManagePage/src/CreateTest.vue'),
      },
      {
        path: 'operation',
        component: Operation,
        redirect: '/exammanage/operation/detail',
        children: [
          {
            // 详细操作页面
            path: 'detail/:paperId',
            component: () => import('@/components/ExamManagePage/src/Operation/Operation.vue'),
          },
          {
            // 监考页面
            path: 'monitor/:paperId',
            component: ()=> import('@/components/ExamManagePage/src/Operation/Monitor.vue'),
          },
          {
            // 评分页面
            path: 'marking/:paperId',
            component: () => import('@/components/ExamManagePage/src/Operation/Marking.vue'),
          },
        ],
      },
      {
        path:'monitor/1001',
        component: ()=> import('@/components/ExamManagePage/src/Operation/Monitor.vue'),
      },
    ],
  },
  // 试卷编辑页
  {
    path: '/paperedit',
    component: () => import('@/components/PaperManagePage/PaperEdit/PaperEdit.vue'),
  },
  {
    path: '/questionmanage',
    component: FrontLayoutVue,
    name: 'questions.admin',
    redirect: '/questionmanage/manage',
    children: [
      {
        path: 'manage',
        component: () => import('@/components/QuestionManagePage/Manage.vue'),
      },
      {
        path: 'edit',
        component: () => import('@/components/QuestionManagePage/Edit.vue'),
      },
    ],
  },
  {
    path: '/manage',
    component: ManageLayout,
    children: [
      {
        path: 'admin',
        component: () => import('@/components/ManagePage/main/admin/Admin.vue'),
      },
      {
        path: 'student',
        component: () => import('@/components/ManagePage/main/student/Student.vue'),
      },
      {
        path: 'teacher',
        component: () => import('@/components/ManagePage/main/teacher/Teacher.vue'),
      },
      {
        path: 'exam',
        component: () => import('@/components/ManagePage/main/exam/Exam.vue'),
      },
    ],
  },
  {
    path: '/analyse',
    component: () => import('@/pages/AnalysePage/AnalysePage.vue'),
  },
  {
    path: '/admin',
    component: adminLoginLayout,
    redirect:'/admin/login',
    children:[
      {path:"login",component:()=>import('@/components/ManagePage/Login/ManageLogin.vue')}
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/pages/404.vue'),
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/pages/403.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: '404' },
  },
];

