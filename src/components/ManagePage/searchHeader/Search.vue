<template>
  <div class="search">
    <n-card>
      <div class="content">
        <div class="title">
          <h3>{{ title }}</h3>
        </div>
        <div class="form">
          <n-form
            ref="formRef"
            inline
            :label-width="80"
            :model="formValue"
            :rules="rules"
          >
            <div class="item">
              <n-form-item
                label="ID"
                path="Id"
                size="medium"
                class="id-input"
                label-align="left"
              >
                <n-input v-model:value="formValue.Id" placeholder="输入Id" />
              </n-form-item>
            </div>
            <n-form-item>
              <n-button
                attr-type="button"
                type="info"
                size="large"
                @click="findById"
              >
                查找
              </n-button>
              <div class="add-action">
                <template v-if="title === '管理员列表'">
                  <AddAdmin @refresh="reget"></AddAdmin>
                </template>
                <template v-else-if="title === '学生列表'">
                  <AddStudent @refresh="reget"></AddStudent>
                </template>
                <template v-else-if="title === '老师列表'">
                  <AddTeacher @refresh="reget"></AddTeacher>
                </template>
                <template v-else-if="title === '考试列表'">
                  <AddExam @refresh="reget"></AddExam>
                </template>
              </div>
              <div class="reset">
                <n-button type="tertiary" @click="reget">重置</n-button>
              </div>
            </n-form-item>
          </n-form>
        </div>
      </div>
    </n-card>
  </div>
</template>

<script lang="ts">
import { FormInst } from 'naive-ui';
import { defineComponent, ref } from 'vue';
import AddAdmin from '@/components/ManagePage/main/admin/AddAdmin.vue';
import AddStudent from '@/components/ManagePage/main/student/addStudent.vue';
import AddTeacher from '@/components/ManagePage/main/teacher/AddTeacher.vue';
import AddExam from '@/components/ManagePage/main/exam/AddExam.vue';

export default defineComponent({
  components: { AddExam, AddTeacher, AddStudent, AddAdmin },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  emits: ['find', 'reset'],
  setup(props, { emit }) {
    const formRef = ref<FormInst | null>(null);
    const formValue = ref({
      Id: '',
    });
    const rules = {
      Id: {
        required: true,
        message: '请输入您要查询的用户的Id',
        trigger: ['blur'],
      },
    };
    // 根据Id查找
    const findById = (e: MouseEvent) => {
      e.preventDefault();
      formRef.value?.validate((errors) => {
        if (!errors) {
          console.log(formValue.value);
          emit('find', formValue.value);
        }
      });
    };

    //
    const reget = () => {
      console.log("reset命令发出");
      formValue.value.Id=""
      emit('reset');
    };

    return {
      formRef,
      formValue,
      findById,
      rules,
      reget,
    };
  },
});
</script>

<style scoped>
.n-card {
  width: 98%;
  margin: 0 auto;
  height: 140px;
  margin-top: 20px;
  border-radius: 20px;
}

.n-form {
  margin-left: 20px;
}

.title {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content {
  display: flex;
}

.n-button {
  width: 100px;
  border-radius: 10px;
  height: 50px;
  font-weight: bolder;
  margin-left: 20px;
}

.add-action {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 8px;
}
</style>
