
export default {
  //获取任务列表
  getTaskList:state=>{
    return state.task_list;
  },
  getComplated:state=>{
    let count=0;
    state.task_list.forEach(item=>{
      if(item.complated){
        ++count
      }
    })
    return count;
  },
  getAllTask:state=>{
    let count=state.task_list.length;
    return count;
  }
}
