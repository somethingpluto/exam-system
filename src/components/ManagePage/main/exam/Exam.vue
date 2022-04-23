<template>
  <div class="exam">
    <Search :title="title" @find="getExamByCode" @reset="reget"></Search>
    <n-card class="table">
      <n-data-table
        :columns="columns"
        :pagination="pagination"
        :data="examList"
        :bordered="true"
        :loading="load"
      />
    </n-card>
  </div>
</template>

<script lang="ts">
import { useMessage } from 'naive-ui'
import { defineComponent, h, onMounted,ref } from 'vue'

import getExamAction,{getExamByIdAction} from '@/services/getExams'

import Search from '../../searchHeader/Search.vue'
import Operation from './ExamOperation.vue'

export default defineComponent({
  setup() {
    const load = ref(true)
    const title = "考试列表"
    const page = ref(1)
    const message = useMessage()
    let examList = ref([])
    const loading =async ()=>{
      examList.value= await getExamAction()
      console.log(examList.value)
      if(examList.value){
        message.success("获取试卷列表成功!")
        load.value=false
      }else{
        message.error("获取试卷员列表失败!")
      }
    }

    const getExamByCode=async (Id:any)=>{
      let result:any
      result =  await getExamByIdAction(Id.Id)
      if (result != null){
        examList.value.length=0;
        examList.value.push(result)
      }
    }

    const reget = () => {
      console.log("exam reget")
      loading()
    }

    onMounted(loading)
    const columns=[
      {title:'考试编号',key:'examCode'},
      {title:'属性',key:'description'},
      {title:'科目',key:'source'},
      {title:'日期',key:'examDate'},
      {title:'年级',key:'grade'},
      {title:'学院',key:'institute'},
      {title:'专业',key:'major'},
        {title:'操作',render(){
          return h(Operation)
      }},
    ]

    return {
      title,
      columns,
      examList,
      page,
      getExamByCode,
      load,
      pagination:{
        pageSize: 6
      },
      reget
    }
  },
  components:{
    Search
  }
})
</script>

<style scoped>
.exam {
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
