<template>
  <div class='student'>
    <Search :title='title' @find='findStudentById' @reset='reget'></Search>
    <n-card class='table'>
      <n-data-table
        :columns='columns'
        :data='studentList'
        :pagination='pagination'
        :bordered='true'
        :loading='load'
        @refrsh='reget'
      />
    </n-card>
  </div>
</template>

<script lang='ts'>
import { useMessage } from 'naive-ui';
import { defineComponent, h, onMounted, onUpdated, ref } from 'vue';

import getStudentsAction, { getStudentByIdAction } from '@/services/getStudents';

import Search from '../../searchHeader/Search.vue';
import Operation from './StudentOperation.vue';

export default defineComponent({
  setup() {
    const title = '学生列表';
    const load = ref(true);
    const page = ref(1);
    const message = useMessage();
    let studentList = ref([]);
    // 获取学生信息
    const loading = async () => {
      studentList.value = await getStudentsAction();
      if (studentList.value) {
        console.log(studentList.value);
        message.success('获取学生列表成功!');
        load.value = false;
      } else {
        message.error('获取学生列表失败');
      }
    };

    const findStudentById = async (Id: any) => {
      let result: any;
      result = await getStudentByIdAction(Id.Id + '');
      if (result != null) {
        studentList.value.length = 0;
        studentList.value.push(result);
      }
    };

    const reget = () => {
      console.log("接到删除置零");
      loading();
    };

    onMounted(loading);


    // 表格头
    const columns = [
      { title: 'Id', key: 'studentId', align: 'center' },
      { title: '姓名', key: 'studentName' },
      { title: '性别', key: 'sex' },
      { title: '年级', key: 'grade' },
      { title: '专业', key: 'major' },
      { title: '班级', key: 'clazz' },
      { title: '学院', key: 'institute' },
      { title: '电话', key: 'tel' },
      { title: '邮箱', key: 'email' },
      {
        title: '操作', render(row: any) {
          return h(Operation, { row: row });
        },
      },
    ];
    return {
      title,
      columns,
      pagination: {
        pageSize: 6,
      },
      studentList,
      page,
      findStudentById,
      load,
      reget
    };
  },
  components: { Search },
});
</script>

<style scoped>
.student {
  height: auto;
}

.n-card {
  height: 100%;
  width: 98%;
  margin: 0 auto;
  border-radius: 20px;
  margin-top: 30px;
}

.page {
  display: flex;
  justify-content: right;
  margin-top: 20px;
}
</style>
