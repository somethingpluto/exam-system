<template>
  <div class='operation'>
    <n-button class='info' type='info' @click='showModal = true'>修改</n-button>
    <n-button class='error' type='error' @click='handleDelete'>删除</n-button>
    <n-modal v-model:show='showModal'>
      <n-card
        style='width: 600px'
        title='修改考试信息'
        :bordered='false'
        size='huge'
        role='dialog'
        aria-modal='true'
      >
        <n-form ref='formRef' :model='formValue' :rules='rules' :size="'large'">
          <n-form-item label='老师id' path='teacher.id'>
            <n-input
              v-model:value.number='formValue.teacher.id'
              placeholder='输入老师id'
            />
          </n-form-item>
          <n-form-item label='姓名' path='teacher.name'>
            <n-input
              v-model:value='formValue.teacher.name'
              placeholder='输入老师姓名'
            />
          </n-form-item>
          <n-form-item label='学院' path='teacher.college'>
            <n-input
              v-model:value='formValue.teacher.college'
              placeholder='输入老师所属学院'
            />
          </n-form-item>
          <n-form-item label='职称' path='teacher.title'>
            <n-input
              v-model:value='formValue.teacher.title'
              placeholder='输入老师的职称'
            />
          </n-form-item>
          <n-form-item label='电话' path='teacher.phone'>
            <n-input
              v-model:value='formValue.teacher.phone'
              placeholder='输入老师的电话'
            />
          </n-form-item>
          <n-form-item label='邮箱' path='teacher.email'>
            <n-input
              v-model:value='formValue.teacher.email'
              placeholder='输入老师的邮箱'
            />
          </n-form-item>
          <n-form-item>
            <n-button
              attr-type='button'
              type='info'
              @click='updateTeacherInfo'
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
import { updateTeacherInfoAction,deleteTeacherByIdAction } from '@/services/getTeachers';
import { errorMsg, successMsg } from '@/utils/message';
import { FormInst, useDialog } from 'naive-ui';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    row: {
      type: Object,
      required: true,
    },
  },
  emit:['refresh'],
  setup(props,{emit}) {
    const formRef = ref<FormInst | null>(null);
    const dialog = useDialog();
    const showModal=ref(false)

    // 表单数据
    const formValue=ref({
      teacher:{
        id:props.row.teacherId,
        name:props.row.teacherName,
        college:props.row.institute,
        title:props.row.type,
        phone:props.row.tel,
        email:props.row.email,
      }
    })

    const rules={
        // teacher: {
        //   id: {
        //     required: true,
        //     message: '请输入老师id',
        //     trigger: 'blur',
        //   },
        // },
      }

    // 删除
    const handleDelete = () => {
      dialog.warning({
        title: '警告',
        content: '确定删除？',
        positiveText: '确定',
        negativeText: '不确定',
        onPositiveClick:async () => {
          await deleteTeacherByIdAction(props.row.teacherId+"")
          console.log("删除老师")
          emit('refresh')
        },
        onNegativeClick: () => {
          
        },
      });
    }

    const updateTeacherInfo=(e: MouseEvent)=>{
      e.preventDefault();
      formRef.value?.validate(async (errors) => {
        if (!errors) {
          let code:number;
          code = await updateTeacherInfoAction(formValue.value.teacher)
          if (code === 200){
            successMsg("修改老师信息成功")
          }else {
            errorMsg("修改老师信息失败")
          }
        } else {
          console.log(errors);
          errorMsg('请输入必填字段');
        }
      });
    }
    return {
      handleDelete,
      showModal,
      formRef,
      size: ref('medium'),
      formValue,
      rules,
      updateTeacherInfo
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
