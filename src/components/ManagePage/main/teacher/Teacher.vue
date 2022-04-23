<template>
  <div class="teacher" @refresh="reget">
    <Search :title="title" @find="findTeacherById" @reset="reget"></Search>
    <n-card class="table">
      <n-data-table
        :columns="columns"
        :data="teacherList"
        :pagination="pagination"
        :bordered="true"
        :loading="load"
        @refresh="reget"
      />
    </n-card>
  </div>
</template>

<script lang="ts">
import { NButton, useMessage } from 'naive-ui';
import { defineComponent, h, onMounted, ref } from 'vue';

import getTeachersAction, { getTeacherByIdAction } from '@/services/getTeachers';

import Search from '../../searchHeader/Search.vue';
import Operation from './TeacherOperation.vue';

export default defineComponent({
  setup() {
    const title = '老师列表';
    const load = ref(true);
    const page = ref(1);
    const message = useMessage();
    let teacherList = ref([]);
    // 获取学生信息
    const loading = async () => {
      teacherList.value = await getTeachersAction();
      if (teacherList.value) {
        console.log(teacherList.value);
        message.success('获取教师列表成功!');
        load.value = false;
      } else {
        message.error('获取教师列表失败');
      }
    };

    const findTeacherById = async (Id: string) => {
      let result: any;
      console.log(Id);
      result = await getTeacherByIdAction(Id.Id);
      if (result != null) {
        teacherList.value.length = 0;
        teacherList.value.push(result);
      }
    };

    const reget = () => {
      console.log("刷新老师")
      loading()
    }

    onMounted(loading);

    const columns = [
      { title: 'Id', key: 'teacherId' },
      { title: '姓名', key: 'teacherName' },
      { title: '性别', key: 'sex' },
      { title: '学院', key: 'institute' },
      { title: '职称', key: 'type' },
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
      teacherList,
      page,
      findTeacherById,
      load,
      reget
    };
  },
  components: {
    Search,
  },
});
</script>

<style scoped>
.teacher {
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
