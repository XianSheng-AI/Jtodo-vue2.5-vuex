<template>
  <div id="app">
    <div id="cover"></div>
    <div class="main-com">
      <h1 class=title>Any.todo</h1>
      <div class="wrapper">
        <todo-header></todo-header>
        <!--任务列表-->
        <todo-list></todo-list>
        <!--底部合计-->
        <todo-footer></todo-footer>
      </div>

    </div>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'
  import TodoItem from './components/TodoItem'
  import TodoFooter from './components/TodoFooter'

  export default {
    name: 'App',
    components: {
      TodoHeader,
      TodoList,
      TodoItem,
      TodoFooter
    },
    data(){
      return {}
    },

  }
</script>

<style lang="stylus" scoped>
  * {
    margin: 0;
    padding: 0;
    border: none;
  }

  #app {
    font-family: 'microsoft yahei';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    #cover {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #999;
      opacity: .8;
      z-index: 1
    }
    .main-com {
      position: absolute;
      left: 50%;
      margin-left: -305px;
      z-index: 2;
      width: 610px;
      .title {
        color: rgba(175, 47, 47, .4);
        font-size: 100px;
        font-weight: 100;
        text-align center;
      }
      .wrapper {
        width: 100%;
        /*height: 200px;*/
        background: #fff;
      }
    }
  }




</style>
