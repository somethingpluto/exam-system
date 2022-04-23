import { createService } from '@/http';
import { router } from '@/router';
import { userInfoStore } from '@/store';

import { IUserInfoReq, IUserInfoRes } from './type';

const { defineAPI } = createService();

const login = defineAPI<IUserInfoRes, IUserInfoReq>('post', '/login');


export default async function loginAction(username: string, password: number) {
  // 1.存放响应结果
  let result: IUserInfoRes = {};
  // 2.执行网络请求
  await login({ username, password }).then((data) => {
    result = data.data;
  });
  // 3.判断是否请求成功
  const store = userInfoStore();
  if (result.code === 200) { // 成功
    store.userInfo = result.data as any;
    router.push({ path: `/mytest/list/${store.userInfo.studentId}` });
    return true;
  } else {
    return false;
  }
}

export async function adminLoginAction(username: string, password: number) {
  // 1.存放响应结果
  let result: IUserInfoRes = {};
  // 2.执行网络请求
  await login({ username, password }).then((data) => {
    result = data.data;
  });
  // 3.判断是否请求成功
  const store = userInfoStore();
  if (result.code === 200) { // 成功
    store.userInfo = result.data as any;
    router.push({ path: `/manage/admin` });
    return true;
  } else {
    return false;
  }
}

