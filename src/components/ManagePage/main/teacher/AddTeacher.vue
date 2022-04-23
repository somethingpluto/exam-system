<template>
  <div class="add-teacher">
    <n-button @click="showModal = true" type="info">添加老师</n-button>
    <n-modal v-model:show="showModal">
      <n-card
        style="width: 600px"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
      >
        <div class="title">添加老师</div>
        <n-form ref="formRef" :model="formValue" :rules="rules" :size="'large'">
          <n-form-item label="cardId" path="teacher.cardId">
            <n-input
              v-model:value="formValue.teacher.cardId"
              placeholder="请输入老师cardId"
            />
          </n-form-item>

          <n-form-item label="邮箱" path="teacher.email">
            <n-input
              v-model:value="formValue.teacher.email"
              placeholder="请输入老师邮箱"
            />
          </n-form-item>

          <n-form-item label="学院" path="teacher.institute">
            <n-input
              v-model:value="formValue.teacher.institute"
              placeholder="请输入老师所属学院"
            />
          </n-form-item>

          <n-form-item label="密码" path="teacher.pwd">
            <n-input
              v-model:value="formValue.teacher.pwd"
              placeholder="请输入老师密码"
            />
          </n-form-item>

          <n-form-item label="权限" path="teacher.role">
            <n-input
              v-model:value="formValue.teacher.role"
              placeholder="请输入老师权限"
            />
          </n-form-item>

          <n-form-item label="性别" path="teacher.sex">
            <n-input
              v-model:value="formValue.teacher.sex"
              placeholder="请输入老师性别"
            />
          </n-form-item>

          <n-form-item label="老师姓名" path="teacher.teacherName">
            <n-input
              v-model:value="formValue.teacher.teacherName"
              placeholder="请输入老师姓名"
            />
          </n-form-item>

          <n-form-item label="老师电话" path="teacher.tel">
            <n-input
              v-model:value="formValue.teacher.tel"
              placeholder="请输入老师电话"
            />
          </n-form-item>

          <n-form-item label="老师职称" path="teacher.type">
            <n-input
              v-model:value="formValue.teacher.type"
              placeholder="请输入老师职称"
            />
          </n-form-item>
          <n-form-item class="item-button">
            <n-button
              attr-type="button"
              type="info"
              @click="addTeacher"
              class="change"
            >
              添加
            </n-button>
          </n-form-item>
        </n-form>
      </n-card>
    </n-modal>
  </div>
</template>

<script lang="ts">
import { errorMsg, successMsg } from '@/utils/message';
import { defineComponent, ref } from 'vue';
import { addTeacherAction } from '@/services/getTeachers';
import { FormInst } from 'naive-ui';

export default defineComponent({
  emits:['refresh'],
  setup(props,{emit}) {
    const formRef = ref<FormInst | null>(null);
    const  showModal= ref(false)
    //表单数据
    const formValue = ref({
      teacher: {
        cardId: '',
        email: '',
        institute: '',
        pwd: '',
        role: '',
        sex: '',
        teacherId: 0,
        teacherName: '',
        tel: '',
        type: '',
      },
    });
    // 验证规则
    const rules = {
      teacher: {
        cardId: {
          required: true,
          message: '请输入老师cardId',
          trigger: 'blur',
        },
        email: {
          required: true,
          message: '请输入老师邮箱',
          trigger: 'blur',
        },
        institute: {
          required: true,
          message: '请输入老师邮箱',
          trigger: 'blur',
        },
        pwd: {
          required: true,
          message: '请输入老师密码',
          trigger: 'blur',
        },
        role: {
          required: true,
          message: '请输入老师权限',
          trigger: 'blur',
        },
        sex: {
          required: true,
          message: '请输入老师性别',
          trigger: 'blur',
        },
        teacherId: {
          required: true,
          message: '请输入老师的Id',
          trigger: 'blur',
        },
        teacherName: {
          required: true,
          message: '请输入老师姓名',
          trigger: 'blur',
        },
        tel: {
          required: true,
          message: '请输入老师电话',
          trigger: 'blur',
        },
        type: {
          required: true,
          message: '请输入老师职称',
          trigger: 'blur',
        },
      },
    };

    // 添加用户
    const addTeacher =(e: MouseEvent) => {
      e.preventDefault();
      formRef.value?.validate( async (errors:any) => {
        if (!errors) {
          let code:number
          code= await addTeacherAction(formValue.value.teacher)
          emit('refresh')
          showModal.value=false
          if (code === 200){
            successMsg("添加用户成功")
          }else {
            errorMsg("添加用户失败")
          }
        } else {
          console.log(errors);
          errorMsg('请检查所有数据是否填写');
        }
      });
    };
    return {
      showModal,
      formRef,
      formValue,
      rules,
      addTeacher,
    };
  },
});
</script>

<style scoped>
.add-teacher {
  width: 100px;
}

.n-button {
  width: 100px;
  height: 50px;
  border-radius: 10px;
}
.n-card {
  height: 400px;
  overflow-y: auto;
  border: 2px solid rgba(32, 128, 240, 0.6);
}
.item-button {
  display: flex;
  justify-content: center;
}
.change {
  width: 200px;
}
.title {
  display: flex;
  justify-content: center;
  font-size: 24px;
}
</style>
