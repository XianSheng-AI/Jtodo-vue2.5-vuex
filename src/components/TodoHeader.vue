<template>
  <div class="header">
    <input class="input"
           type="text"
           placeholder="接下来做什么"
           autofocus="autofocus"
           @keyup.enter="add"
           v-model="inputTask"
    >
  </div>
</template>

<script>
export default {
    name:"TodoHeader",
    data(){
        return {
          inputTask:'',
        }
    },
  methods: {
    add(){
      const inputTask=this.inputTask.trim();
      if(!inputTask){
        alert('不能有空的任务');
        return;
      }
      const task={
        content:inputTask,
        complated:false
      }
      this.$store.dispatch('addTask',task);
      this.inputTask='';
    },
  }
}
</script>

<style>
  .input {
    outline: none;
    width: 100%;
    font-weight :200;
    box-sizing: border-box;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4rem;
    background: #fff;
    padding: 16px 16px 16px 60px;
    border:none;
  }

</style>













