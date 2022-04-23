<template>
  <div class="add-student">
    <n-button @click="showModal = true" type="info">添加学生</n-button>
    <n-modal v-model:show="showModal">
      <n-card
        style="width: 600px"
        :bordered="false"
        size="medium"
        role="dialog"
        aria-modal="true"
      >
        <div class="title">添加学生</div>
        <n-form ref="formRef" :model="formValue" :rules="rules" :size="'large'">
          <!--          学生cardId-->
          <n-form-item label="cardId" path="student.cardId">
            <n-input
              v-model:value="formValue.student.cardId"
              placeholder="请输入学生cardId"
            />
          </n-form-item>
          <!--          学生班级-->
          <n-form-item label="班级" path="student.clazz">
            <n-input
              v-model:value="formValue.student.clazz"
              placeholder="请输入学生班级"
            />
          </n-form-item>
          <!--          邮箱-->
          <n-form-item label="邮箱" path="student.email">
            <n-input
              v-model:value="formValue.student.email"
              placeholder="请输入学生邮箱"
            />
          </n-form-item>
          <!--          年级-->
          <n-form-item label="年级" path="student.grade">
            <n-input
              v-model:value="formValue.student.grade"
              placeholder="请输入学生年级"
            />
          </n-form-item>
          <!--          学院-->
          <n-form-item label="学院" path="student.institute">
            <n-input
              v-model:value="formValue.student.institute"
              placeholder="请输入学生学院"
            />
          </n-form-item>
          <!--          major-->
          <n-form-item label="专业" path="student.major">
            <n-input
              v-model:value="formValue.student.major"
              placeholder="请输入学生专业"
            />
          </n-form-item>
          <!--          pwd-->
          <n-form-item label="密码" path="student.pwd">
            <n-input
              v-model:value="formValue.student.pwd"
              placeholder="请输入学生密码"
            />
          </n-form-item>
          <!--          role-->
          <n-form-item label="权限" path="student.role">
            <n-input
              v-model:value="formValue.student.role"
              placeholder="请输入学生权限"
            />
          </n-form-item>
          <!--          sex-->
          <n-form-item label="性别" path="student.sex">
            <n-input
              v-model:value="formValue.student.sex"
              placeholder="请输入学生性别"
            />
          </n-form-item>
          <!--          studentName-->
          <n-form-item label="学生姓名" path="student.studentName">
            <n-input
              v-model:value="formValue.student.studentName"
              placeholder="请输入学生姓名"
            />
          </n-form-item>
          <!--          tel-->
          <n-form-item label="学生电话" path="student.tel">
            <n-input
              v-model:value="formValue.student.tel"
              placeholder="请输入学生电话"
            />
          </n-form-item>
          <n-form-item class="item-button">
            <n-button
              attr-type="button"
              type="info"
              @click="addStudent"
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
import { FormInst, useDialog } from 'naive-ui';
import { defineComponent, ref } from 'vue';
import {rules} from './student.rules'
import { addStudentAction } from '@/services/getStudents';

export default defineComponent({
  emits:['refresh'],
  setup(props,{emit}) {
    const formRef = ref<FormInst | null>(null);
    const showModal=ref(false)
    //表单数据
    const formValue = ref({
      student: {
        cardId: '',
        clazz: '',
        email: '',
        grade: '',
        institute: '',
        major: '',
        pwd: '',
        role:'',
        sex:'',
        studentId:0,
        studentName:'',
        tel:'',
      },
    })

    // 添加用户
    const addStudent =(e: MouseEvent) => {
      e.preventDefault();
      formRef.value?.validate( async (errors) => {
        if (!errors) {
          let code:number
          code= await addStudentAction(formValue.value.student)
          emit('refresh')
          showModal.value=false
          if (code===200){
            successMsg("添加学生成功")
          }else{
            errorMsg("添加学生失败")
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
      addStudent,
    };
  },
});
</script>

<style scoped>
.add-student {
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
.title {
  display: flex;
  justify-content: center;
  font-size: 24px;
}
.change {
  width: 200px;
}
.item-button {
  display: flex;
  justify-content: center;
}
</style>
