import { createService } from "@/http";
import { examListStore } from "@/store";

import { IExamList } from "./type";

const { defineAPI } = createService()

const getTestList = defineAPI<IExamList>("get", "/exams/")

export default async function getTestListAction() {
  // 1.存放响应结果
  const store = examListStore()
  let result: IExamList = {};
  // 2.执行网络请求
  await getTestList().then((data) => {
    result = data.data;
    store.value = data.data.data as []
  }).catch((err) => {
    console.log(err)
  })

  // 3.判断请求是否成功
  if (result.code === 200) {
    store.value = result.data as []
    return result
  } else {
    return {}
  }
}

