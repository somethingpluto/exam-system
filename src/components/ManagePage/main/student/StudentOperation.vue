<template>
  <div class='operation'>
    <n-button class='info' type='info' @click='showModal = true'>修改</n-button>
    <n-button class='error' type='error' @click='handleDelete' >删除</n-button>
    <n-modal v-model:show='showModal'>
      <n-card
        style='width: 600px'
        title='修改学生信息'
        :bordered='false'
        size='huge'
        role='dialog'
        aria-modal='true'
      >
        <n-form ref='formRef' :model='formValue' :rules='rules' :size="'large'">
          <!-- ID -->
          <n-form-item label='学生ID' path='student.id'>
            <n-input
              v-model:value='formValue.student.id'
              placeholder='输入学生ID'
            />
          </n-form-item>
          <n-form-item label='学生姓名' path='student.name'>
            <n-input
              v-model:value='formValue.student.name'
              placeholder='输入学生姓名'
            />
          </n-form-item>
          <!-- major -->
          <n-form-item label='专业' path='student.major'>
            <n-input
              v-model:value='formValue.student.major'
              placeholder='输入学生专业'
            />
          </n-form-item>
          <!-- class -->
          <n-form-item label='班级' path='student.class'>
            <n-input
              v-model:value='formValue.student.class'
              placeholder='请输入学生班级'
            />
          </n-form-item>
          <!-- college -->
          <n-form-item label='学院' path='student.college'>
            <n-input
              v-model:value='formValue.student.college'
              placeholder='请输入学生学院'
            />
          </n-form-item>
          <!-- phone -->
          <n-form-item label='电话' path='student.phone'>
            <n-input
              v-model:value='formValue.student.phone'
              placeholder='请输入学生电话'
            />
          </n-form-item>
          <!-- email -->
          <n-form-item label='邮箱' path='student.email'>
            <n-input
              v-model:value='formValue.student.email'
              placeholder='请输入学生邮箱'
            />
          </n-form-item>
          <n-form-item>
            <n-button
              attr-type='button'
              type='info'
              @click=' changeStudentInfo'
              class='change'
            >
              修改
            </n-button>
          </n-form-item>
        </n-form>
      </n-card>
    </n-modal>
  </div>
</template>

<script lang='ts'>
import { FormInst, useDialog, useMessage } from 'naive-ui';
import { defineComponent, ref } from 'vue';
import { removeStudentAction, updateStudentAction } from '@/services/getStudents';
import { successMsg } from '@/utils/message';

export default defineComponent({
  props:{
    row:{
      type:Object,
      required:true
    }
  },
  emit:['refresh'],
  setup(props,{emit}) {
    const formRef = ref<FormInst | null>(null);
    const message = useMessage();
    const dialog = useDialog();

    const handleDelete = () => {
      dialog.warning({
        title: '警告',
        content: '确定删除？',
        positiveText: '确定',
        negativeText: '不确定',
        onPositiveClick:async () => {
          await removeStudentAction(props.row.studentId+"")
          console.log("删除学生");
          emit('refresh')
        },
        onNegativeClick: () => {
          message.error('取消删除');
        },
      });
    };
    console.log(props.row)
    const changeStudentInfo = (e: MouseEvent) => {
      e.preventDefault();
      formRef.value?.validate(async (errors) => {
        let code:any;
        if (!errors) {
          console.log("执行")
          code = await updateStudentAction(formValue.value.student)
          if (code == 200){
            successMsg("修改学生信息成功")
          }
        }
      });
    };
    const formValue=ref({
      student: {
        id: props.row.studentId+"",
        name:props.row.studentName,
        major: props.row.major,
        class: props.row.clazz,
        college: props.row.institute,
        phone: props.row.tel,
        email: props.row.email,
      },
    })

    return {
      handleDelete,
      showModal: ref(false),
      formRef,
      size: ref('medium'),
      formValue,
      // rules
      rules: {
        student: {
          id: {
            required: true,
            message: '请输入学生ID',
            trigger: 'blur',
          },
        },
      },
      // handle
      changeStudentInfo,
    };
  },
});
</script>

<style scoped lang='css'>
.operation {
  display: flex;
}

.error {
  margin-left: 6px;
}

.n-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.change {
  width: 100%;
}
</style>
