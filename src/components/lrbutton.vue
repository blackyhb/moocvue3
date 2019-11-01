<template>
  <div id='lrbutton'>
    <div class='header_Box1'>
        <span  @click='register()'>注册</span>
        <span  @click='login()'>登录</span>
    </div>
  </div>
</template>

<script>

  export default {
    name:'lrbutton',
    props:[''],
    data () {
      return {

      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
        register(){

        },
        login(){
            
        }
    },

    watch: {}

  }

</script>
<style lang='less' scoped>
    .header_Box1 {
      margin-top: 11px;
      padding-left: 60px;
      span {
        cursor: pointer;
        display: inline-block;
        width:42px;
        height:58px;
        font-size: 17px;
        text-align: center;
        color: #333;
        line-height: 58px;
      }
    }
</style>