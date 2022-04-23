import { NTag } from 'naive-ui';
import {h} from 'vue'
import NOperation from './NOperation.vue'
const columns = [
  { title: '学生ID', key: 'id' },
  { title: '学生姓名', key: 'name' },
  {
    title: '是否进入考试', key: 'isEntered',
    render(row:any){
      console.log(row)
      if (row.isEntered ==='已进入'){
        return h(NTag,{type:'info'},{default:()=>row.isEntered})
      }else {
        return h(NTag,{type:"error"},{default:()=>row.isEntered})
      }
    }

  },
  { title: '切屏次数', key: 'changeNum' },
  { title: '考试状态', key: 'state',
    render(row:any){
      if (row.state ==='正常'){
        return h(NTag,{type:'info'},{default:()=>row.state})
      }else {
        return h(NTag,{type:"error"},{default:()=>row.state})
      }
    }
  },
  {
    title:'操作',
    render(){
      return h(NOperation)
    }
  }
];

const data = [
  { id: '1001', name: '张三', isEntered: '已进入', changeNum: 0, state: '正常' },
  { id: '1002', name: '李四', isEntered: '未进入', changeNum: 0, state: '异常' },
  { id: '1003', name: '王五', isEntered: '已进入', changeNum: 1, state: '正常' },
  { id: '1004', name: '赵六', isEntered: '已进入', changeNum: 2, state: '正常' },
  { id: '1005', name: '胡七', isEntered: '未进入', changeNum: 0, state: '异常' },
  { id: '1006', name: '刘八', isEntered: '已进入', changeNum: 8, state: '正常' },
];

export { columns, data };
