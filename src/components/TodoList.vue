<template>
  <div>
    <div class="todo-item complated"
         v-for="(item,index) in getTaskList"
         :key="item.id"
         @click="complated(item)">
      <div class="toggle-btn"
           :class="{'checked':item.complated}"

      ></div>
      <h5 :class="{'line-through':item.complated}">{{item.content}}</h5>
      <span class="del-btn"  @click.stop="delSingle(item.id)">x</span>
    </div>
  </div>
</template>
<!--v-for不能使用与根元素-->
<script>
  import { mapGetters,mapActions } from 'vuex'
export default {
    name:"TodoList",
    data(){
        return {

        }
    },
  computed:{
      ...mapGetters(['getTaskList'])
  },
  methods:{
    complated(item){
      item.complated=!item.complated;
    },
    delSingle(id){
      this.$store.dispatch('delTask',id)
    },
  }
}
</script>

<style lang="stylus">
  .todo-item {
    display: flex;
    align-items center
    position: relative;
    color #4d4d4d;
    padding 16px 0;
    border-bottom 1px solid rgba(0,0,0,.06);
    &.complated {
       color yellow
     }
    .toggle-btn{
      border-radius 15px;
      float: left;
      text-align left
      width 26px;
      height 26px;
      margin 0 16px;
      background: #fff
      border none
      outline none
      border 3px solid #ccc
      cursor: pointer;
      &.checked{
         background: #dddddd;
         border-color #99a7c2
       }
    }

    h5{
      width:500px;
      /*background: orchid*/
      font-weight inherit;
      color #4d4d4d;
      font-size 24px
      transition .3s;
      margin 0;
    }
    .line-through{
      text-decoration line-through
      opacity .6;
    }
    .del-btn{
      cursor: pointer;
      margin-left 9px;
      text-align center;
      color rgba(175,47,47,0.4);
      font-size 24px;
      width 28px;
      height:28px;
      line-height 24px
      &:hover{
        color rgba(175,47,47,0.8)
      }
    }
  }
</style>













