<template>
  <footer class="footer">
          <span :class="['complate-All-Btn',slectAllBool?'checked':'']"
                @click="selectAll(slectAllBool)"

          >全选</span>
    <!--已完成/全部-->
    <div class="total">
      <div class="common-s total-selected-count">已完成&nbsp;{{getComplated}}</div>
      <div class="common-s total-count">全部&nbsp;{{getAllTask}}</div>
    </div>

    <div class="clear-btn">
      <button
        class="left-btn"
        @click="clear(1)"
      >清除已完成</button>
      <button
        class="right-btn"
        @click="clear(2)"
      >清除全部</button>
    </div>
  </footer>
</template>

<script>
  import { mapGetters} from 'vuex'
  export default {
    name:"TodoFooter",
    data(){
        return {
          slectAllBool:false
        }
    },
  computed:{
    ...mapGetters(['getComplated','getAllTask'])
  },
  methods:{
    selectAll(flag){
      let isAll=true;
      if(flag===false){
        isAll=true;
        this.$store.dispatch('selectAll',isAll);
        this.slectAllBool=true;
        return;
      }
      isAll=false;
      this.$store.dispatch('selectAll',isAll);
      this.slectAllBool=false;
    },
    clear(num){
      //num===1清除已完成  num===2清除全部
      if(num===1){
        this.$store.dispatch('clearComplated');
        return;
      };
      this.$store.dispatch('clearAll');
    }
  }
}
</script>

<style lang="stylus">
  //  底部合计
  .footer {
    display: flex;
    align-items center
    height: 50px;
    background: #ffffff
    .complate-All-Btn {
      display: inline-block
      padding: 5px 16px;
      margin-left 16px
      color: #6f7990
      border-radius 16px
      font-weight bolder
      -webkit-transition: .2s
      -moz-transition: .2s
      -ms-transition: .2s
      -o-transition: .2s
      transition: .2s
      cursor: pointer;

      &.checked {
        background: #6f7990
        color #ffffff
      }

      &:hover {
        background: #6f7990
        color #ffffff
      }
    }
    .total{
      margin 0 100px;
      display: flex;
      justify-content center
      /*background: tan*/
      text-align center
      .common-s{
        width: 60px
        padding:5px
        color #6f7990
        font-weight bolder
        /*padding:2px 20px*/
        .total-selected-count{

        }
        .total-count{

        }
      }
    }
    .clear-btn{
      button{
        margin: 0;
        padding: 0;
        border: 1px solid transparent;  //自定义边框
        outline: none;    //消除默认点击蓝色边框效果
        background: #fff
        padding:2px 10px;
        cursor: pointer;
      }
      .left-btn{
        &:hover{
          background: #6f7990
          color #fff
          border-radius 14px 0 0 14px
        }
      }
      .right-btn{
        &:hover{
          background: #6f7990
          color #fff
          border-radius 0 14px 14px 0
        }
      }
    }
  }
</style>













