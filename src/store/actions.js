import { ADD_TASK,DEL_SINGLE,SELECT_ALL,CLEAR_COMPLATED,CLEAR_ALL } from './mutations-type'

export default {
  //添加任务
  addTask({commit},task){
    commit(ADD_TASK,{task});
  },
  //删除任务
  delTask({commit},id){
    commit(DEL_SINGLE,{id});
  },
  //全选
  selectAll({commit},isAll){
    commit(SELECT_ALL,{isAll})
  },
  clearComplated({commit}){
    commit(CLEAR_COMPLATED);
  },
  clearAll({commit}){
    commit(CLEAR_ALL);
  }
}






















































































