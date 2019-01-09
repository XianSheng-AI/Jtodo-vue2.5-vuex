import {ADD_TASK,DEL_SINGLE,SELECT_ALL,CLEAR_COMPLATED,CLEAR_ALL} from "./mutations-type";

export default {
  //添加任务
  [ADD_TASK](state,{task}){
    let id=state.task_list.length;
    task.id=id;
    console.log(task)
    state.task_list.unshift(task)

  },
  //删除单条任务
  [DEL_SINGLE](state,{id}){
    state.task_list.forEach((item,index)=>{
      if(item.id===id){
        state.task_list.splice(index,1);
      }
    })
  },
  //全选
  [SELECT_ALL](state,{isAll}){
      state.task_list.forEach(item=>{
        item.complated=isAll;
      })
  },
  //清除已完成
  [CLEAR_COMPLATED](state){
    state.task_list=state.task_list.filter(item => !item.complated)
  },
  //清除全部
  [CLEAR_ALL](state){
    state.task_list=[];
  }
}
