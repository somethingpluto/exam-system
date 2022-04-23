<template>
  <div class='admin'>
    <Search :title='title' @find='findById' @reset='reget'></Search>
    <n-card class='table'>

      <n-data-table :columns='columns' :data='adminList' :bordered='true' :loading='load' :pagination='pagination' />
    </n-card>
  </div>
</template>

<script lang='ts'>
import { useMessage } from 'naive-ui';
import { defineComponent, h, onMounted, ref } from 'vue';

import Search from '@/components/ManagePage/searchHeader/Search.vue';
import getAdminAction, { getAdminByIdAction } from '@/services/getAdmins';

import Operation from './AdminOperation.vue';

export default defineComponent({
  setup() {
    const title = '管理员列表';
    const load = ref(true);
    const page = ref(1);
    const message = useMessage();
    let adminList = ref([]);
    const loading = async () => {
      adminList.value = await getAdminAction();
      if (adminList.value) {
        message.success('获取管理员列表成功!');
        load.value = false;
      } else {
        message.error('获取管理员列表失败!');
      }
    };

    const findById = async (Id: string) => {
      console.log('findById执行');
      adminList.value = await getAdminByIdAction(Id);
    };

    const reget=()=>{
      loading()
    }

    onMounted(loading);
    const columns = [
      { title: '姓名', key: 'adminName' },
      { title: '性别', key: 'sex' },
      { title: '电话', key: 'tel' },
      { title: '邮箱', key: 'email' },
      { title: 'ID', key: 'cardId' },
      {
        title: '操作', render(row: any) {
          return h(Operation, { row: row });
        },
      }];

    return {
      adminList,
      title,
      columns,
      page,
      findById,
      load,
      pagination: {
        pageSize: 6,
      },
      reget
    };
  },
  components: {
    Search,
  },
});
</script>

<style scoped>
.admin {
  height: auto;
}

.n-card {
  height: auto;
  width: 98%;
  margin: 0 auto;
  border-radius: 20px;
  margin-top: 30px;
}

.table {
  width: 98%;
}

.page {
  display: flex;
  justify-content: right;
  margin-top: 20px;
}
</style>
